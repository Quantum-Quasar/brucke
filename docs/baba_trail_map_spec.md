# The Baba Trail Map — Implementation Spec

> **Context for the implementing model.** Brücke is a static Next.js 16 (App Router) + React 19 +
> Tailwind v4 app teaching German through English cognates and sound shifts. Everything below is
> built with plain DOM/SVG + existing CSS tokens. **No component libraries, no new dependencies, no
> canvas/WebGL** (architecture invariant, see README). The Trail (`/trail`) is currently a flat list
> of phase-grouped cards (`src/app/trail/page.tsx`). We are replacing that page with a **node-graph
> map** in the style of Baba Is You's world select: lessons are nodes connected by dashed paths,
> grouped into three Worlds, and Worlds are connected by **star-gated bridges**. Learners can
> wander: any completed node unlocks everything it connects to, and bridges open on a star
> threshold, so a hard grammar node can be skipped and revisited later.

---

## 1. Core rules (the whole game design in 6 lines)

1. The map has **3 Worlds** (= the 3 curriculum phases) containing **30 lesson nodes**.
2. Inside a World, nodes are connected by edges. A node **unlocks when ANY ONE of its parents is
   completed** (OR-join — "clearing Node 2 opens branches 3A and 3B at the same time"). Nodes with
   no parents unlock when their World opens.
3. Completing a lesson earns **one star**. Gold star normally; **purple star** if the learner
   finished with a near-perfect first-try run (definition in §5). Stars are cosmetic + currency;
   there are no trophies, no multi-star ratings, no other rewards.
4. Each bridge between Worlds is a **star gate**: it opens when the learner has collected **N stars
   from the World the bridge exits** (gold and purple both count). This is the only "big" lock; it
   preserves curriculum integrity (you can skip nodes, not whole Worlds).
5. The **capstone node (30)** is itself a threshold node: it unlocks at **10 stars from World 3**.
6. One node at a time is the **recommended node** (smallest id that is unlocked, uncompleted, and
   has authored content). It gets a pulsing ring. There is no other notion of "current".

Tunable constants (put at the top of the map data file): bridge thresholds `WORLD_1_GATE = 6`
(of 8), `WORLD_2_GATE = 7` (of 10), `CAPSTONE_GATE = 10` (of 11 in World 3), and
`PURPLE_MAX_MISTAKES = 0` (see §5 — set to 1 to make purple more forgiving).

## 2. Data model

### 2.1 New file: `src/data/map.ts`

```ts
export interface MapEdge { from: number; to: number }      // lesson ids
export interface Bridge { fromWorld: number; toWorld: number; requiredStars: number }
export interface MapNodeLayout { id: number; x: number; y: number } // in a 900-wide space

export const WORLDS = [
  { world: 1, title: "Foundations", range: "Lessons 1–8" },
  { world: 2, title: "Grammar & Case", range: "Lessons 9–18" },
  { world: 3, title: "Compounds & Synthesis", range: "Lessons 19–30" },
];
// Reuse the existing phase descriptions from src/app/trail/page.tsx for world subtitles.

export const MAP_EDGES: MapEdge[] = [ /* §3 */ ];
export const BRIDGES: Bridge[] = [
  { fromWorld: 1, toWorld: 2, requiredStars: 6 },
  { fromWorld: 2, toWorld: 3, requiredStars: 7 },
];
export const MAP_LAYOUT: MapNodeLayout[] = [ /* §3 */ ];

// Pure function — unit-test this (§7).
export function getMapState(completed: number[], stars: Record<number, "gold" | "purple">): {
  unlocked: number[]; openWorlds: number; starsInWorld: (w: number) => number;
  bridgeOpen: (toWorld: number) => boolean; recommended: number | null;
};
```

Unlock algorithm: World 1 is always open. A node is unlocked iff (its world is open) AND
(it has no parents in `MAP_EDGES` OR at least one parent is in `completed`). Bridge to world *w+1*
is open iff `starsInWorld(w) >= requiredStars`. Capstone: node 30's parents are ignored; it is
unlocked iff `starsInWorld(3) >= CAPSTONE_GATE`. `openWorlds` = highest world whose bridge is open.
`recommended` = smallest id that is unlocked, not completed, and exists in `LESSONS` with content.

### 2.2 Changes to `src/lib/types.ts` + `src/lib/store.ts`

- `LessonProgress`: add `mistakes: number` (incorrect first submissions during one lesson run —
  already implicitly tracked by the Retry Queue; see §5) and `star: "gold" | "purple" | undefined`.
- Store: `completeLesson(lessonId, opts?: { mistakes?: number })` persists
  `star: mistakes <= PURPLE_MAX_MISTAKES ? "purple" : "gold"`. Replaying a lesson overwrites the
  star (best run wins: never downgrade purple to gold).
- **Persistence**: add the new field(s) to the persisted `partialize` list and to the migration
  guard in `loadSavedState` (where `completedLessons` / `lessonProgress` are already
  type-checked, around store.ts:129–131 and 151). Missing star data on old saves must default
  gracefully: completed lessons without a star show gold.
- Keep `currentLessonId` in the store for now, but the map's "recommended" logic supersedes it
  visually. Do not remove it (other pages use it).

### 2.3 Supersede, don't delete

`COURSE_ROADMAP.unlocked` flags and the `item.id <= 10` heuristic in the current page are
replaced by `getMapState`. Keep `COURSE_ROADMAP` as the source of lesson titles for the unauthored
nodes 11–30 (see §6, node state "unwritten").

## 3. The graph (edges + layout)

Edges are lesson ids; the graph survives future re-titling of lessons 11–30 because it is
id-based. Node ids and current titles come from `COURSE_ROADMAP`.

**World 1 — Foundations (1–8).** Two parallel shift lanes that fork after L2 and merge at the
chain-shift lesson, then a calm outro:

```
(1)──(2)──┬──(3)──(5)──┐
          │            ├──(7)──(8)
          └──(4)──(6)──┘
```
Edges: `1→2, 2→3, 2→4, 3→5, 4→6, 5→7, 6→7, 7→8`.

**World 2 — Grammar & Case (9–18).** A load-bearing spine (conjugation → accusative → articles →
word order), then a fork around the two prefix families, converging at Perfekt, fanning out to
ablaut/dative, merging at the ein-family:

```
(9)──(10)──(11)──(12)──┬──(13)──┐
                       └──(14)──┤
                                ├──(15)──┬──(16)──┐
                                │        └──(17)──┼──(18)
```
Edges: `9→10, 10→11, 11→12, 12→13, 12→14, 13→15, 14→15, 15→16, 15→17, 16→18, 17→18`.

**World 3 — Compounds & Synthesis (19–30).** Two open entries (19 and 24), a words-and-patterns
lane, a forms-and-umlaut lane, converging on the capstone (threshold-locked):

```
(19)──(20)──(21)──(22)──(28)     (24)──(26)──(27)
  │                                    │       │
  └──────(23)──(25)────────────(29)────┴───────(30)
```
Edges: `19→20, 19→23, 20→21, 21→22, 22→28, 23→25, 24→26, 26→27, 25→29, 27→30, 28→30, 29→30`.
(Node 30's real lock is the 10★ threshold; its incoming edges are drawn for visual convergence.)

**Layout.** Hand-author `MAP_LAYOUT` (do not auto-layout — art direction matters). Canvas is a
**900-wide space, one vertical band per World** (~700–900 px tall each), Worlds stacked top to
bottom in reading order, so the whole journey is one downward scroll like Duolingo's path. Fork
lanes spread horizontally (lane A left, lane B right), merges visually funnel toward the bridge.
Leave ~180 px of breathing room around each node and ~120 px above each bridge for the gate bar.
Render each World as its own section (header + its own SVG layer), with the bridge component
between sections — this avoids one giant SVG and keeps scroll jank low.

## 4. Visual design (tokens only, no new assets)

Use the existing theme tokens everywhere: `--bg-color`, `--bg-alt`/`--sub-alt-color`,
`--text-color`, `--sub-color`, `--main-color`. Layout container: `max-w-4xl` like the current page.

**Page header** (keep the existing one, add one chip): title "The Trail", eyebrow
"curriculum map", plus a star counter chip: `★ 14/30` in `--main-color` (use the Lucide `Star`
icon, filled). Next to it a small **"Map / List" toggle** — List renders the old phase-grouped
card list verbatim (accessibility fallback + screen readers; extract the old markup into
`TrailList.tsx`).

**Nodes.** Rounded cards (~150×64) absolutely positioned over the layout coordinates:
- **Completed:** filled `--main-color` border, `--sub-alt-color` bg, small star badge in the
  top-right corner — gold `★` normally, **purple** (`#a78bfa`, fixed hex, intentional outlier that
  reads as "rare" on every theme) for a purple-star lesson.
- **Recommended:** same as available plus a 1.5 px `--main-color` ring with a slow CSS pulse
  (opacity/box-shadow keyframes).
- **Available (unlocked, uncompleted):** solid `--sub-color`/25 border, hover raises border to
  `--main-color`/50 (same hover language as current cards).
- **Locked (in-world):** 40 % opacity, dashed border, Lucide `Lock` glyph.
- **Unwritten (locked AND no authored content):** 40 % opacity + a tiny "in the forge" chip.
  Clicking opens the drawer (§6) with the roadmap title and a one-line phase description — no
  navigation.
- Node content: lesson number in a mono badge (reuse the existing 6×6 rounded numeral style) +
  short title, truncated to 2 lines. Lucide icons only (`Star`, `Lock`, `Check`, `Sparkles` for
  the purple tooltip).

**Edges.** An SVG `<path>` per edge behind the nodes: quadratic bezier from parent anchor to child
anchor, `stroke: var(--sub-color)`, 30 % opacity, `stroke-width: 2`, `stroke-dasharray: 6 6`,
rounded caps. When the child is unlocked, the edge turns 60 % opacity `--main-color`. When a node
is first unlocked, animate the edge drawing in (`stroke-dashoffset` transition, ~500 ms, once).

**Bridges.** A full-width gate bar between World sections: a dashed horizontal line with a centered
pill. Locked pill: `Lock` icon + "Cross into Grammar & Case · needs 7★ in Foundations · you have
4★". Open pill: `Check` + "Foundations cleared — Grammar & Case open". On the moment it opens,
play a one-time gentle reveal (pill scale 0.96→1 + border flash in `--main-color`; no confetti).
Worlds further ahead than the first closed bridge render their nodes at 25 % opacity ("mist").

**Node drawer.** Clicking any written, unlocked node opens a bottom sheet on mobile / centered
dialog on desktop (reuse the styling pattern of `WordCardDrawer.tsx`): lesson number, title,
subtitle (from `LESSONS`), the summary `outcome` line, star state (`★ earned — gold/purple`,
with one sentence explaining purple: "Earned on a first-try run with the retry queue never
touched"), and one primary button: **Start** / **Resume** (if `lessonProgress[id]` has incomplete
segments) / **Replay** (if completed). Locked nodes open a plain tooltip-style popover instead:
why it's locked ("Finish any one of: Lesson 3, Lesson 4" — name the actual parents; or the bridge
requirement).

## 5. The purple star — exact definition

Track `mistakes` during a lesson run in the existing lesson player (`/trail/[id]` wizard):
+1 for every exercise submitted incorrectly before a correct answer (including retry-queue items
missed on their first re-attempt). Reset to 0 at lesson start. On completion, pass it to
`completeLesson`. **Purple = the end-of-lesson Retry Queue was never needed** (queue empty when
first displayed), i.e. `mistakes <= PURPLE_MAX_MISTAKES` (default 0; raise to 1 if playtesting
shows it's too strict). Copy in the summary card: "Purple star — flawless first run." The star
counter chip counts both colors; a separate small purple counter (`✦ 3`) may sit beside it.

## 6. Interactions & edge cases

- **Lesson player handoff:** Start/Resume/Replay navigate to `/trail/[id]` unchanged. On
  completion the player already calls `completeLesson`; extend the call with `mistakes`.
- **Old saves:** users with `completedLessons` but no stars get gold stars on completion records;
  `recommended` recomputes; nothing else migrates.
- **Authored-content check:** a node is *enterable* iff unlocked AND `LESSONS.some(l => l.id ===
  id)`. Unwritten-but-unlocked nodes (possible today for 11–30 once stars open Worlds) show the
  drawer with "Being written — this node unlocks with the next curriculum drop."
- **Keyboard/AT:** every node is a `<button>`; tab order = lesson id order; the drawer traps focus
  and closes on `Esc` (match the app's existing keyboard patterns). The List view is always one
  toggle away.
- **Hydration:** the current page's `mounted` guard pattern stays — render the static list shell
  server-side, hydrate node states client-side to avoid localStorage mismatch.

## 7. Tests (vitest, match existing suite style)

In a new `src/tests/map.test.ts`:
1. Node 1 unlocked on a fresh save; nothing else.
2. OR-unlock: completing 2 unlocks 3 and 4; completing only 5 (hypothetically) never unlocks 7
   without 3 or 4 completed. (Use the real `MAP_EDGES`.)
3. Bridge math: 5 stars in World 1 → closed; 6 → open; purple counts the same as gold.
4. Star isolation: 8 stars earned in World 1 do **not** open the World 2→3 bridge.
5. Capstone: 9 stars in World 3 → locked; 10 → unlocked even if node 30's parents aren't done.
6. Recommended = smallest unlocked, uncompleted, authored id.
7. Star persistence: purple is never downgraded by a later gold-quality replay.

## 8. Component plan

```
src/app/trail/page.tsx            → thin shell: header, star chip, Map/List toggle, renders <TrailMap/> or <TrailList/>
src/components/trail/TrailMap.tsx → worlds loop, bridge components, scale-to-width wrapper
src/components/trail/MapNode.tsx  → node card + star badge + states
src/components/trail/BridgeGate.tsx
src/components/trail/NodeDrawer.tsx (or extend common/WordCardDrawer pattern)
src/components/trail/TrailList.tsx → the old list markup, extracted
src/data/map.ts                   → edges, bridges, layout, getMapState
src/tests/map.test.ts
```

Scale-to-width wrapper: inner div fixed at 900 px wide with absolutely positioned nodes + SVG
paths; measure container width with a `ResizeObserver`, apply `transform: scale(w/900)` with
`transform-origin: top left`, and set the outer wrapper's height to `innerHeight × w/900` so
scrolling works. No pinch-zoom.
