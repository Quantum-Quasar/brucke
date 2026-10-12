# The Baba Trail Map — Implementation Reference

> **Corrected copy — verified against the implementation on 2026-09-30.**
> The original append-only version is preserved verbatim in `old documentation/`.
> Every correction applied here, with its `path:line` evidence, is listed in [`CORRECTIONS.md`](./CORRECTIONS.md).

> **Context.** Brücke is a static Next.js 16 (App Router) + React 19 + Tailwind v4 app teaching German
> through English cognates and sound shifts. Everything below is built with plain DOM/SVG + existing CSS
> tokens. **No component libraries, no new dependencies, no canvas/WebGL** (architecture invariant, see
> [`README.md`](./README.md)). The Trail is a **node-graph map** in the style of Baba Is You's world
> select: lessons are nodes joined by dashed lines, sprigs and support branches hang off a single ordered
> spine, and **star gates** sit on the spine as checkpoints. Learners can wander: any completed node
> unlocks everything it touches, and gates open on a star count earned inside their own stretch of the
> curriculum, so a hard grammar topic can be skipped and revisited later. This document describes what
> shipped; the map is rendered by `src/components/trail/TrailMap.tsx` inside the homepage shell
> `src/app/page.tsx`, because `/trail` now redirects to `/`.

---

## 1. Core rules (the whole game design in 6 lines)

1. The map has **30 topic cores on one strictly ordered spine**, plus **72 sprigs** attached directly to
   their core and **7 support-branch lessons in 5 branches** — 109 nodes in all. There are no "Worlds";
   curriculum phases survive only as a `phase` field on lessons.
2. A node is **available when ANY adjacent node is completed** (OR-join — finishing topic 1 opens
   topic 2 and all three of topic 1's sprigs at the same time). Node 1 is available on a fresh save.
   Sprigs and branch side lessons are always skippable; the core chain is the only strict sequence.
3. Completing a lesson earns **one star**. Gold normally; **purple** if the learner finished without
   ever touching the retry queue (definition in §5). Stars are cosmetic + progress currency; there are
   no trophies, no multi-star ratings, no other rewards.
4. Progress past each curriculum family boundary is held by a **star gate**: the gate after topic *n*
   opens when the learner has collected its `requiredStars` **from the topics inside that gate's own
   stretch only** (gold and purple both count). Six gates; this is the only "big" lock, and it preserves
   curriculum integrity (you can skip nodes, not whole stretches).
5. There is **no special capstone threshold**. Topic 30 is the plain end of the spine, reached the usual
   way — the Capstone Gate (after topic 29) opens first.
6. One node at a time is the **recommended node**, chosen by a tiered cascade (§2.1). It gets a pulsing
   selector ring (`.trail-selector`). There is no other notion of "current".

Tunable constants now live with the curriculum data, not in a map file: each gate's `afterTopic` and
`requiredStars` in `TRAIL_GATES` (`src/data/curriculum.ts:418`), and the two star hexes
`GOLD_STAR`/`PURPLE_STAR` (`src/components/trail/TrailMap.tsx:17`). There is no `PURPLE_MAX_MISTAKES`
knob — see §5. <!-- corrected 2026-09-30: was "3 Worlds" + WORLD_1_GATE/WORLD_2_GATE/CAPSTONE_GATE/PURPLE_MAX_MISTAKES -->

## 2. Data model

### 2.1 Curriculum data + pure engine

<!-- corrected 2026-09-30: was "### 2.1 New file: src/data/map.ts" — that file was never created -->

`src/data/map.ts` was planned and **never created**. The data lives with the curriculum
(`src/data/curriculum.ts:32`):

```ts
export const TOTAL_TOPICS = 30;                                   // curriculum.ts:19
export const sprigId = (topicId: number, index: number) => number; // topicId * 100 + index
export const TOPICS: TopicCluster[] = [...];                      // 30 clusters, each a core + sprigs
export const TRAIL_BRANCHES: TrailBranch[] = [...];               // 5 branches, 7 lessons
export const TRAIL_GATES: TrailGate[] = [...];                    // 6 star gates
export const getAuthoredLesson = (lessonId: number) => ...        // curriculum.ts:467
export const flattenTrailNodes = () => ...                        // curriculum.ts:480 (used by tests)
export const getNextPlayableLessonId = (currentId: number) => ... // curriculum.ts:472
```

**ID scheme** (`curriculum.ts:11-16`): core = topic id (`1`–`30`), sprig = `topicId * 100 + index`
(`101`, `102`, …, `3003`), branch = `5000 + n * 10` with lessons `+1`, `+2` (`5011`, `5012`, …).

The graph engine is a separate, dependency-free module (`src/lib/trail-map.ts`):

```ts
export type NodeKind = "core" | "sprig" | "branch";            // trail-map.ts:21
export type NodeStatus = "completed" | "available" | "locked"; // trail-map.ts:22
export interface TrailNode { id; kind; topicId; title; blurb?; plan; authored; x; y; w; h }
export interface TrailEdge { a: number; b: number }
export interface GateMarker extends TrailGate { x; y }          // trail-map.ts:61-64
export interface TrailLayout { width; height; nodes; edges; decorations; topicAnchors; gates }

export const FIRST_NODE_ID = 1;                                // trail-map.ts:76
export function buildTrailEdgePairs(): TrailEdge[];            // trail-map.ts:99  (id-space only)
export const TRAIL_EDGE_PAIRS = buildTrailEdgePairs();         // trail-map.ts:115
export function buildTrailLayout(width: number): TrailLayout;  // trail-map.ts:133 (pure, deterministic)
export function getTrailState(                                 // trail-map.ts:333
  completed: number[],
  stars: Record<number, LessonStar>,
  nodes?: Array<Pick<TrailNode, "id" | "kind" | "topicId">>
): TrailState;                                                 // { nodes, litEdges, recommendedId, gates }
export const trailNodeOrder = (): number[];                    // trail-map.ts:452
```

**Unlock algorithm** (`trail-map.ts:349-396`). A gate's stretch is `(previous gate's afterTopic,
its own afterTopic]`, so gate *i* counts only the topics in `gateRegion(i)` (`trail-map.ts:328`):

```
regionStars(gate) = completed lessons whose node's topicId is within the gate's stretch
gate.open         = regionStars >= gate.requiredStars
closedGateBefore(topicId) = the last gate with afterTopic < topicId that is not open

status(node) = "completed" if completed
             | "locked"    if closedGateBefore(node.topicId) exists
             | "available" if node.id === FIRST_NODE_ID or any adjacent node is completed
             | "locked"    otherwise
```

A closed gate therefore locks **everything** beyond it (the spine is strict), but never retroactively
hides already-completed nodes. The same stretch math is surfaced on locked nodes as
`NodeGateInfo` so the drawer can say which gate is in the way. `litEdges` marks an edge lit when it
touches a completed node or joins two available nodes, and never lights the single spine edge that
crosses a closed gate (`trail-map.ts:398-409`).

**Recommended node** — a three-tier cascade, not "smallest id" (`trail-map.ts:411-446`):

1. the next **authored spine core** in spine order whose status is `available` (keeps the learner on
   the main line while authored content remains);
2. failing that, the **hollow frontier** — the top-most available core, or failing that its last
   available sprig;
3. failing that, the last available **branch lesson**.

`trailNodeOrder()` gives the canonical order (cores, then their sprigs, then branches) used by the
fallback and by tests.

### 2.2 Changes to `src/lib/types.ts` + `src/lib/store.ts`

- `LessonProgress`: a single optional `everQueued?: boolean` — "true once any exercise was queued for
  retry this lesson; a purple star requires it to stay false" (`src/lib/types.ts:15-16`). There is **no
  `mistakes` counter** and no `star` field on `LessonProgress`.
- `LessonStar = "gold" | "purple"` lives on its own store map `lessonStars: Record<number, LessonStar>`
  (`src/lib/store.ts:26`), with the comment "Purple is never downgraded".
- Store: `completeLesson(lessonId, opts?: { perfect?: boolean })` writes `lessonStars[lessonId]` —
  `"purple"` when `opts.perfect` **or** the lesson already holds purple, otherwise the existing star,
  otherwise `"gold"` (`src/lib/store.ts:405-412`).
- **Persistence:** `lessonStars` is in the persisted `toPersist` list (`src/lib/store.ts:157`), is
  schema-guarded in `loadSavedState` (`src/lib/store.ts:133`), and is merged on import (`store.ts:626`)
  and on rehydrate (`store.ts:718`). `everQueued` rides inside `lessonProgress`, which is already
  persisted and guarded (`store.ts:132`, `156`).
- Old saves therefore need no migration: a completed lesson with no entry in `lessonStars` simply
  renders as **gold** (`TrailMap.tsx:359`, `LessonNodeDrawer.tsx:82`).
- `currentLessonId` is still in the store, but the map's "recommended" ring supersedes it visually. It
  is not removed — other pages use it.

### 2.3 Superseded, not deleted

<!-- corrected 2026-09-30: COURSE_ROADMAP never shipped; getMapState is now getTrailState -->

`COURSE_ROADMAP.unlocked` and the `item.id <= 10` heuristic were part of the old flat list page and
**no longer exist** (`COURSE_ROADMAP` appears nowhere in `src/`). `getTrailState` replaced the planned
`getMapState`, and `TOPICS` / `TRAIL_BRANCHES` replaced the roadmap as the source of node titles and
descriptions. The old phase-grouped list page is gone entirely; `/trail` is a `redirect("/")`
(`src/app/trail/page.tsx:5`).

## 3. The graph (edges + layout)

<!-- corrected 2026-09-30: replaced the hand-authored per-World edge tables -->

**Edges are derived, never hand-listed.** `buildTrailEdgePairs()` (`trail-map.ts:99-113`) emits three
rules and nothing else:

1. **Spine:** `t → t+1` for every `t` in `1 … TOTAL_TOPICS - 1` — one strictly ordered chain of cores.
2. **Sprigs:** every sprig hangs directly off its own core (`core(n) — sprig(n, i)`), so all of a
   topic's side lessons unlock together the moment its core is done, and every one of them can be
   skipped.
3. **Branches:** a branch's lessons chain off `branch.attach` and then off each other
   (`attach → l1 → l2`), so a multi-lesson branch is internally ordered but optional.

There is no fork/merge World 2, no second entry point in World 3, and no threshold-locked capstone:
topic 30 is the plain end of the spine, reachable only after the Capstone Gate opens. Because the
graph is derived from the curriculum rather than hand-listed, re-titling a lesson can never orphan an
edge.

**The six star gates** (`curriculum.ts:418-461`), each placed on the spine between `afterTopic` and
`afterTopic + 1`, and each counting stars **only inside its own stretch**:

| Gate | after topic | needs | stretch | stretch size |
|---|---|---|---|---|
| The Shift Gate | 7 | 14★ | topics 1–7 | 25 lessons |
| The Grammar Gate | 10 | 6★ | topics 8–10 | 10 lessons |
| The Verb-Complex Gate | 16 | 11★ | topics 11–16 | 20 lessons |
| The Past Gate | 20 | 9★ | topics 17–20 | 17 lessons |
| The Atlas Gate | 26 | 11★ | topics 21–26 | 20 lessons |
| The Capstone Gate | 29 | 9★ | topics 27–29 | 13 lessons |

Topic 30 (the capstone) sits beyond the last gate. Each gate carries a `title` and a `why` paragraph
that the gate drawer renders verbatim. <!-- corrected 2026-09-30: was WORLD_1_GATE=6 / WORLD_2_GATE=7 / CAPSTONE_GATE=10 -->

**Layout is computed, per canvas width** (`trail-map.ts:133-264`) — there is no hand-authored
`MAP_LAYOUT`. Width is clamped to **320–980 px** and the layout is deterministic: same width, same
map. The rules:

- clusters are authored **top-down**: one `TopicCluster` band at a time, core first, sprigs fanning out
  beside it (left, right, then a second row below the row-0 sibling), with branch lessons tucked into
  the freer flank below the cluster;
- each cluster is then **group-clamped** as a unit into the canvas, so the serpentine can never push a
  sprig off-screen or on top of its core (offsets are edge-to-edge, not centre-to-centre);
- the spine itself **serpentines** on wide canvases: `coreX = centerX + swing · sin(topic.id · 1.7)`
  with `swing = min(150, max(0, (width − 380) / 2))` — no swing on a phone-width canvas, the 150 px
  cap from 680 px up;
- finally the whole map is **flipped**, so topic 1 sits at the **bottom** and later topics climb
  upward — the Baba direction, not a downward Duolingo scroll;
- gate pills are centred on the two cores they sit between, clamped into the canvas.

Because coordinates are real pixels for the measured width, there is nothing to scale: the map is
rendered at native size. Each topic band becomes its own absolutely-positioned `<section class="trail-section">`
so `content-visibility` can skip off-screen clusters (`TrailMap.tsx:28-53`, `167-201`).

## 4. Visual design (tokens only, no new assets)

Use the existing theme tokens everywhere: `--bg-color`, `--bg-alt`/`--sub-alt-color`,
`--text-color`, `--sub-color`, `--main-color`. Layout container: `max-w-5xl` on the homepage
(`src/app/page.tsx:31`).

**Page header** (`src/app/page.tsx:33-63`): eyebrow "the trail", title "30 topics, one bridge", then
**two** star chips — a gold total-stars chip (`completedLessons.length`, title "N lessons completed —
every lesson is one star") and a separate purple chip counting `lessonStars === "purple"` entries.
Both read `0` until the page's `mounted` guard flips, so the server and client render identically.

> **Not implemented.** The planned **Map / List toggle** was dropped: the map is the only view, and
> there is no `TrailList.tsx` and no list fallback. <!-- corrected 2026-09-30 -->

**Nodes** — three sizes from `nodeSize(kind)` (`trail-map.ts:93-94`), absolutely positioned:
- **Core (152×58):** a topic-number badge (a `✓` once completed) plus the topic title, clamped to two
  lines, over a topic signpost reading "topic N — <title>" (`TrailMap.tsx:173-188`, `327-340`).
- **Sprig (56×46):** a `BookOpen` glyph and the sprig's own number (`id % 100`).
- **Branch (150×44):** a `GitBranch` glyph plus the lesson title.
- **Completed:** filled `--main-color` background, 2 px border, and a star badge in the top-right
  corner — gold `#eab308`, **purple** `#a78bfa` (fixed hexes, an intentional outlier that reads as
  "rare" on every theme).
- **Recommended:** a pulsing selector ring drawn as a sibling overlay sized `node + 16`, animated by
  `.trail-selector` (`src/app/globals.css:118-130`) with a 500 ms slide when it moves. `.trail-section`
  is the matching windowing class (`globals.css:132-136`).
- **Available:** `--sub-alt-color` fill, `--sub-color`/40 border, hover raises the border to
  `--main-color` and lifts the card 0.5 px; a node that becomes available with no saved progress plays
  the one-time `trail-node-pop` keyframe.
- **Locked:** dashed border, muted, with a small `Lock` badge.
- **Unwritten (locked AND `authored === false`):** a dashed, non-interactive card whose drawer shows a
  "being written" block. **No node is in this state today** — all 109 nodes are authored — but the
  branch is kept so a future hollow shell renders honestly instead of offering a dead Start button.
- Every node is a `<button>` with a full `aria-label` spelling out kind, title, and status
  (`TrailMap.tsx:290-298`).

**Edges.** One SVG `<line>` per derived edge behind the nodes, between node centres, `stroke:
var(--sub-color)`, `stroke-width: 3`, `stroke-linecap: round`, `stroke-dasharray: "1 9"` — a dotted
track, not a bezier. Lit edges (`state.litEdges`) sit at 0.85 opacity, unlit at 0.22, with a 400 ms
opacity transition. The whole SVG is `aria-hidden` and non-interactive: the node buttons carry the
semantics. <!-- corrected 2026-09-30: was dashed quadratic beziers with a draw-in animation -->

**Star gates.** A 168×40 pill button sitting on the spine between the two cores it guards
(`TrailMap.tsx:204-230`): closed = dashed `--sub-color` border, `Lock` glyph, the short gate name
("The " stripped) and `★ stars/required`; open = filled `--main-color` with a `Check` glyph. It is a
real button with a descriptive `aria-label` and `title`, and clicking it opens the gate drawer — there
is no separate "bridge component" and no between-section gate bar, because the gates live **on** the
spine. A faint watermark layer of `ß ü ö ä §` glyphs at 5 % opacity fills the empty canvas.

**Drawers.** Clicking any node opens `LessonNodeDrawer` — a bottom sheet on mobile, a 440 px centered
dialog on desktop (the `WordCardDrawer.tsx` pattern): kind + topic line, title, blurb/plan, then a
status block that is star state when completed, the blocking gate with its `stars / requiredStars`
progress when locked by a gate, "being written" for a hollow shell, or "ready to start" otherwise. One
primary button: **start lesson** / **resume lesson** (when `lessonProgress[id]` exists) / **replay
lesson** (when completed) — suppressed entirely for locked or unwritten nodes. Clicking a gate pill
opens `GateDrawer` in the same shell: the gate's `why`, its `stars / requiredStars` bar, and either
"open — the next stretch awaits" or "N more stars to open — gold or purple both count". Both drawers
focus their close button on mount and close on `Esc` and on backdrop click.

## 5. The purple star — exact definition

<!-- corrected 2026-09-30: was a mistakes counter + PURPLE_MAX_MISTAKES + summary-card copy -->

Purple is a **boolean ledger, not a count**. `LessonReader` keeps `everQueued` in state, seeded from
`lessonProgress[id].everQueued` (`src/components/lesson/LessonReader.tsx:31`) and persisted through
`setLessonProgress` on every change (`LessonReader.tsx:44-47`). It flips to `true` the first time any
exercise is submitted wrong (`handleExerciseError`, `LessonReader.tsx:107-108`) and is reset to
`false` only when the learner re-enters the practice segment and starts it over — the keyboard
restart at `LessonReader.tsx:79-80` and the restart button at `LessonReader.tsx:350-351`.

On completion the player calls `completeLesson(lesson.id, { perfect: !everQueued })`
(`LessonReader.tsx:142`). The store turns that into `"purple"`, or keeps an existing `"purple"`, and
otherwise records `"gold"` (`src/lib/store.ts:405-412`) — **a replay can never downgrade a purple star
to gold**, only fail to earn a new one. `resetProgress` clears `lessonStars` wholesale
(`store.ts:529-533`).

There is no `PURPLE_MAX_MISTAKES` constant and nothing to tune. The explanation copy lives on the map,
not in the lesson summary: the node drawer says *"purple star — flawless first-try run, retry queue
untouched"*, with a gold counterpart *"gold star — completed. Replay for a flawless run to turn it
purple."* (`src/components/trail/LessonNodeDrawer.tsx:86-94`). The header's purple chip counts them.

## 6. Interactions & edge cases

- **Lesson player handoff:** start/resume/replay push `/trail/${id}` (`TrailMap.tsx:255-258`). The
  lesson route is unchanged; only the `completeLesson` call grew a `{ perfect }` flag
  (`LessonReader.tsx:142`).
- **Locked nodes still open the drawer** — not a tooltip popover. It explains the block: either the
  gate that is in the way with its star count, or `"Unlocks when you complete any adjacent lesson: …"`,
  naming the real neighbours read off `TRAIL_EDGE_PAIRS` (`TrailMap.tsx:105-116`,
  `LessonNodeDrawer.tsx:96-121`).
- **Old saves:** nothing migrates. A completed lesson with no `lessonStars` entry renders gold, and
  `recommendedId` recomputes from the raw data.
- **Authored-content check:** a node is *playable* iff `authored && status !== "locked"`
  (`LessonNodeDrawer.tsx:44`). Because all 30 cores, 72 sprigs and 7 branch lessons are authored
  today, there is no hollow node; the frontier fallbacks in §2.1 are dormant but still correct.
- **Keyboard/AT:** every node and every gate pill is a `<button>` with `focus-visible:ring-2` in
  `--main-color` and a full `aria-label`; tab order is DOM order, which follows the flipped spine
  upward. Both drawers focus their close button on mount and close on `Esc`; they are `role="dialog"`
  `aria-modal` and dismiss on backdrop click. The close button is labelled literally `esc`
  (`LessonNodeDrawer.tsx:68`).
- **Hydration:** the homepage keeps its `mounted` guard so the two star chips read `0` on the server
  (`page.tsx:14-27`). The map itself needs no guard: `TrailMap` is client-only, starts at a 640 px
  layout, and re-renders from the measured width.
- **First visit:** the map auto-scrolls the recommended node into view once, and only if it is not
  already visible (`TrailMap.tsx:87-99`).

## 7. Tests (vitest, match existing suite style)

<!-- corrected 2026-09-30: was src/tests/map.test.ts with 7 world-bridge cases -->

`src/tests/map.test.ts` was never written. The shipped suite is **`src/tests/trail-map.test.ts`** (264
lines), in six `describe` blocks:

1. **Curriculum structure** — 30 topics whose core ids match topic ids; cluster sizes inside the 1–8
   lesson budget; authored content up to the frontier with hollow shells beyond; unique ids and
   non-empty authoring plans; `getNextPlayableLessonId` walks the authored spine and returns `null`
   past its end.
2. **Trail graph** — every core is chained to the next; every sprig hangs off its own core; branch
   lessons chain off their attach node. All three assertions run against the real
   `buildTrailEdgePairs()`.
3. **Unlock & recommendation logic** — only the first node on a fresh save; OR-join unlock
   (`[1]` → `[2, 101, 102, 103]`); sprigs skippable while the spine is strict and a branch's second
   lesson waits on its first; the recommendation cascade, including the gated case where the selector
   points at mop-up side lessons instead of past a closed gate; and never a locked node.
4. **Star gates** — a closed gate locks everything beyond it and darkens the spine edge across it;
   enough stars in the stretch releases the next stretch; stars earned *outside* the stretch do not
   count and a closed gate cannot retro-lock completed nodes; all six gate pills land between two real
   cores.
5. **Purple star persistence** — `{ perfect: true }` awards purple, a flawed replay does not downgrade
   it, an ordinary completion is gold, and `resetProgress` clears the map.
6. **Trail layout** — at 375/640/900 px every node fits inside the canvas and no two nodes overlap;
   the map starts at the bottom and climbs upward; the layout contains every curriculum node exactly
   once.

## 8. Component plan (as shipped)

<!-- corrected 2026-09-30: the plan listed 4 extra component files, data/map.ts and tests/map.test.ts; none of them exist -->

```
src/app/page.tsx                        → shell: header, daily insight, two star chips, renders <TrailMap/>
src/components/trail/TrailMap.tsx       → the whole map: edges, MapNode, gate pills, selector ring
src/components/trail/LessonNodeDrawer.tsx → LessonNodeDrawer + GateDrawer
src/lib/trail-map.ts                    → edges, layout, getTrailState (pure)
src/data/curriculum.ts                  → TOPICS, TRAIL_BRANCHES, TRAIL_GATES
src/tests/trail-map.test.ts             → the six describe blocks above
```

`MapNode`, the gate pill, and the selector ring are all defined inline in `TrailMap.tsx` (from line
284) rather than split into their own files — the map is a single component tree, and the drawer pair
stays together because both share the same shell. `BridgeGate.tsx`, `NodeDrawer.tsx`, `MapNode.tsx`
and `TrailList.tsx` were planned and **do not exist**. The map shell is the homepage, not
`src/app/trail/page.tsx`, which is a one-line redirect.

**No scale-to-width transform.** A `ResizeObserver` watches the wrapper and re-runs
`buildTrailLayout(width)` for the new width (`TrailMap.tsx:67-78`); the layout engine returns native
pixel coordinates for that width, clamped to 320–980, and the inner div is sized directly to
`layout.width × layout.height`. There is no fixed 900 px canvas, no `transform: scale(w/900)`, no
`transform-origin` fiddling and no pinch-zoom.
