# Documentation Corrections Register

**Audit date:** 2026-09-30
**Scope:** every document in the original `docs/` folder, plus `README.md` and `AUDIT_MANIFEST.md`.
**Method:** six read-only audit agents swept the documentation against the implementation in parallel, each reading the relevant `src/` files rather than inferring from file names. Every finding below cites `path:line` in the codebase. Findings that the implementing code **contradicted** were then re-verified by hand before being applied; several agent findings were rejected as inaccurate and are marked as such.

**Layout of this repository's documentation:**

| Folder | Contents |
|---|---|
| `old documentation/` | The original append-only documents, **byte-identical** to `docs/` at commit `a104d24`. Not modified. |
| `documented docs/` | The corrected set: all four original documents, corrected, plus this register. |

The five original documents were `german_learning_platform_design-final.md` (the master blueprint, 1,984 lines), `baba_trail_map_spec.md`, `content-agent-prompt.md`, `README.md` and `AUDIT_MANIFEST.md`. All five are present in `documented docs/` in corrected form.

---

## Headline: what the drift actually was

The blueprint was written as a **forward-looking design spec** and then only ever appended to. Two different failure modes resulted:

1. **Prescriptive sections never got revised** after the build diverged — tech stack, curriculum counts, exercise typology, accessibility, offline, analytics, PWA, the trail architecture.
2. **Shipped subsystems were never written down at all** — the entire personalization layer (187 themes, 43 fonts, settings, backup), the sound engine, the dialog focus system, the store hardening, the compendium pipeline, the lemmatizer, the character bar, the About page, code splitting.

A third, smaller failure: several claims were **half-built**. `weeklyActivity` is tracked but has no UI; `RetryQueue` exists and is correct but is unreachable; `getCardsByShift()` is unit-tested but no caller. These are called out individually below because they are the most likely to mislead.

### Ground truth established during the audit

| Surface | Value | How it was verified |
|---|---|---|
| Topics / lessons | 30 topics → 109 lessons (30 cores + 72 sprigs + 7 branch lessons in 5 branches) | imported `src/data/curriculum.ts` and counted |
| Compendium | 310 words, 9 shifts, 32 compounds, 16 false friends, 28 insights | imported `src/data/compendium.json`; `TOTAL_COMPENDIUM_WORDS = 310` |
| Tests | 22 vitest files, ~150 test blocks | `ls src/tests/*.test.ts` |
| Themes / fonts | 187 / 43 | `Object.keys(THEMES).length`; `FONT_LIST` |
| Gates | 6, after topics 7/10/16/20/26/29 | `TRAIL_GATES` in `src/data/curriculum.ts:418` |
| Exercise types | 6 | `ExerciseType` union in `src/lib/types.ts:80` |
| Bottom dock | 5 tabs | `src/components/navigation/BottomNav.tsx:19` |

---

## 1. `german_learning_platform_design-final.md` — the master blueprint

Corrected in place, with an inline `<!-- corrected 2026-09-30: … -->` marker on every substantive change. Two new sections were added: **§25 "Shipped Features That Were Never Documented"** (16 subsections) and **Appendix B "What This Correction Pass Changed"**. A new **§0 "Implementation Snapshot"** table was inserted at the top so the numbers in the rest of the document have a single anchor.

### 1.1 Structural and count corrections

| Doc claim | Reality | Evidence |
|---|---|---|
| Product named "STAMMBAUM" | Named **Brücke** | `src/components/navigation/TopNav.tsx:27` |
| "30-lesson curriculum" | 30 **topics** → 109 lessons | `src/data/curriculum.ts:19` |
| Bottom nav, 3 tabs | 5 tabs (trail, atlas, review, settings, about) | `src/components/navigation/BottomNav.tsx:19` |
| Trail is a linear L1→L30 chain with no branches | Spine + 72 sprigs + 5 branches + 6 star gates | `src/lib/trail-map.ts:99`, `src/data/curriculum.ts:354,418` |
| Home is a "dashboard" with priority reordering | Home is the **trail map**; `/trail` redirects to `/` | `src/app/page.tsx:29`, `src/app/trail/page.tsx:5` |
| Atlas has ~15 constellations, 147 words | **9** families, **310** words | `src/data/compendium.json`, `src/lib/types.ts:1` |
| 4 review decks | **5** (adds Compounds & Traps) | `src/app/review/page.tsx:35` |
| "Recent" deck = last 3 lessons | Fixed set: `wordList.slice(0, 20)` | `src/app/review/page.tsx:194` |
| 8 exercise types (7 headings) | **6** `ExerciseType`s; acoustic + compound types never built | `src/lib/types.ts:80` |
| 6–8 exercises per lesson | Exactly **5**, uniform slot order | `src/data/lessons.ts:39`, `src/tests/exercises.test.ts` |
| ~250 exercise items, adaptive bonus | **545**, no adaptive logic at all | `src/data/lessons.ts` |
| ~100 daily insights | **28** | `src/data/insights.json` |
| Course-completion screen | Not implemented | grep for completion UI → no hits |
| Weekly consistency dots rendered | State tracked, **never rendered** | `src/lib/store.ts:29,514` |
| Unlock milestone screens | Not implemented | grep for `unlock` → lock states only |

### 1.2 Tech stack corrections

| Doc claim | Reality | Evidence |
|---|---|---|
| MDX lesson authoring | **No MDX anywhere**; lessons are TS objects | no `@next/mdx`; `src/data/lessons.ts` |
| Fixed hex palette (`#1a1a2e`, `#e8a838`, `#4ecdc4`, `#7ab648`…) | **187 runtime themes** as CSS variables; no cyan/green/sage tokens | `src/data/themes.ts:23`, `src/app/globals.css:7` |
| Fixed font stack (Inter / Source Sans 3) | **43** selectable fonts, default `Lexend Deca` | `src/data/fonts.ts:14,67` |
| Framer Motion | Not a dependency; CSS only | `package.json:14` |
| Onboarding morph animation, 400ms | **Does not exist**; static annotation only | `src/components/common/OnboardingModal.tsx:189` |
| "Zero audio whatsoever" (×3 places) | Web Speech pronunciation + 19 bundled click packs | `src/lib/audio.ts:20`, `src/lib/sound.ts` |
| PostHog analytics | **No analytics of any kind** | `package.json:14` |
| Service Worker + next-pwa, IndexedDB, Supabase | **None of the three**; only immutable Cache-Control on `/sounds`, `/webfonts` | `next.config.mjs:1` |
| `Alt+A/O/U/S` umlaut shortcuts | No `altKey` handler anywhere | grep `altKey` → 0 hits in `src/` |
| `Space` replays audio; `Tab` cycles focus | `R`/`A` replay; `Tab` is hijacked by Quick Restart | `src/app/review/page.tsx:570`, `src/data/settings.ts:29` |
| Alt+A sub-labels on the char bar | Sub-label is digraph only, `hidden sm:block` | `src/components/common/GermanCharBar.tsx:25-33` |
| 48px audio tap targets | ~24×24px | `src/components/common/ShiftPair.tsx:99` |
| Cookie fallback "< 3800 bytes" | **≤ 2048** URL-encoded bytes + minimal fallback | `src/lib/store.ts:191`, `src/tests/store-security.test.ts:64` |

### 1.3 Accessibility corrections

| Doc claim | Reality | Evidence |
|---|---|---|
| "All German words carry `lang="de"`" | **No**; only `<html lang="en">` | `src/app/layout.tsx:44` |
| "Amber on Charcoal exceeds 7:1" | Default alduin is ~11.9:1, but 187 themes are user-selectable and only the default is guaranteed; accent is cream | `src/lib/appearance.ts:4`, `src/data/themes.ts:1` |
| "The morph honors `prefers-reduced-motion`" | **No `prefers-reduced-motion` anywhere**; animations run unconditionally | `src/app/globals.css:113` |
| Every modal dismisses on Escape | `LessonNodeDrawer` has no Escape handler | `src/components/trail/LessonNodeDrawer.tsx:47,182` |

One accessibility claim is **confirmed accurate** and was retained: every lexicon word carries a slash-delimited IPA validated by a test (`src/tests/compendium.test.ts:51`).

### 1.4 Curriculum-content corrections

The blueprint's worked examples cited dozens of lesson numbers and vocabulary items that do not exist in the shipped data. The following were corrected in place, and the section carries an explicit warning listing the non-existent words:

`Hoffnung`, `hoffnungsvoll`, `hoffnungslos`, `Hilfe`, `behilflich`, `Gedanke`, `nachdenken`, `bedenken`, `öffnen`, `Wasserhahn`, `Wasserfall`, `Knecht` (in the contexts claimed) — none appear in `src/` or the compendium.

| Doc claim | Reality |
|---|---|
| Phase 2 = L9–L18, Phase 3 = L19–L30 | Phase 2 = 9–16, Phase 3 = **17–30** |
| L12 = Satzklammer, L14 = Inseparable Prefixes, L19 = Compounds, L22 = Comparatives | L2 = Satzklammer, L16 = Inseparable, L21 = Compounds, L24 = Comparatives; L12/13/14 were **added during authoring** |
| Each shift family touches ≥ 4 lessons | Between **3 and 8**; four families touch exactly 3 |
| 5–7 new words per lesson | **9–10** in cores, up to **19** in review-gym sprigs |
| Discrimination exercises from L4 onward | L4 has **no** `shift_select`; discrimination ships as per-topic sprigs 302/402/602/702 |
| "No word has fewer than 5 lesson appearances" | `reif` appears twice; `knecht` once |
| Frequency tiering (Tier 1–4) | **Not modelled**; SRS seeding is automatic and untiered |
| 7-encounter framework "operates" | **Not tracked**; authoring guideline only |
| Reuse density map is "maintained" | **No map exists**; illustrative sketch only |
| Opening bridges recall prior words | **No bridge field exists**; no hook recalls anything |
| Progress percentage from `completedLessons.length / 30` | **No percentage exists** anywhere |

### 1.5 §22 audit-learnings corrections

This section was the most accurate part of the document, and most of it was retained. Six registry rows were false as written:

| Registry row | Problem | Reality |
|---|---|---|
| `src/app/trail/page.tsx` — locked lessons → `<div aria-disabled>` | Wrong file; the file is a redirect stub | Fix is in `TrailMap.tsx`; nodes are `<button>` with `aria-label` |
| `src/app/trail/page.tsx` — added `mounted` guard | Wrong file, and no such guard exists | `TrailMap` has no `mounted` guard |
| `completedLessons.length / 30` progress formula | Never implemented | Raw absolute count only |
| `GenderGuideBanner` `isExpanded` ↔ `useEffect` sync | Component has no `isExpanded` state | It uses a `mounted` guard |
| `.animate-spin-slow` keyframe | Class has never existed | Real keyframes: `trail-selector-pulse`, `trail-node-pop` |
| "39 flaws across 9 dimensions of `german-app-2/`" | Registry has 30 rows; 8 subsections; wrong path | Corrected to 30 rows, 8 subsections, current path |

**15 registry rows were verified TRUE** and left unchanged. Two were **overstated** (ephemeral SRS stubs are not persisted; hard-coded gender label colour classes survive) and were amended. A test-coverage table was added, since the registry names no test files.

### 1.6 Findings rejected as inaccurate

- The agent claimed "in the original design, `matching_pairs` was omitted from the exercise typology". That is **true** and was applied.
- The agent proposed documenting a "Native Dialog Focus Trap" as covering every dialog; its own evidence showed `LessonNodeDrawer` is excluded, so it was documented with the gap stated rather than as universal.
- Several agents proposed **code changes** as "fixes" (adding `{ preventScroll: true }`, rewriting a form to delete dead code). These were rejected: the deliverable documents reality, it does not change behaviour. The behaviours are recorded as-is, with the gap named.

---

## 2. `baba_trail_map_spec.md` — the trail map spec

This file was written as an implementation *plan* and diverged almost completely from what shipped. It has been rewritten as an **Implementation Reference** describing the built system.

| Plan said | Reality |
|---|---|
| New file `src/data/map.ts` exporting `WORLDS`, `MAP_EDGES`, `BRIDGES`, `MAP_LAYOUT`, `getMapState` | **Never created.** Data is in `src/data/curriculum.ts` (`TOPICS`, `TRAIL_BRANCHES`, `TRAIL_GATES`); engine in `src/lib/trail-map.ts` (`buildTrailEdgePairs`, `buildTrailLayout`, `getTrailState`) |
| 3 Worlds = the 3 curriculum phases, 30 nodes | One 30-topic spine + 72 sprigs + 7 branch lessons; phases survive only as `Lesson.phase` |
| `WORLD_1_GATE=6`, `WORLD_2_GATE=7`, `CAPSTONE_GATE=10` | Six `TRAIL_GATES` after topics 7/10/16/20/26/29, needing 14/6/11/9/11/9 stars counted only inside each gate's own stretch |
| Hand-authored edge lists and ASCII graphs | Edges are **derived** by `buildTrailEdgePairs()` from three rules |
| Hand-authored 900px canvas with `transform: scale(w/900)` | Deterministic layout per container width (clamped 320–980), serpentine spine, group-clamped clusters, **flipped so topic 1 is at the bottom**; a `ResizeObserver` re-runs the layout — no scale transform |
| `LessonProgress.mistakes`, `PURPLE_MAX_MISTAKES = 0` | A single `everQueued` boolean plus a separate `lessonStars` map; `completeLesson(id, { perfect })` never downgrades purple |
| "Purple star — flawless first run" in the lesson summary | That copy lives in the **node drawer**, not the summary |
| Star chip `★ 14/30` + a Map/List toggle | Two chips (total stars, purple stars); **no toggle, no list view** |
| "Being written — unlocks with the next curriculum drop" | Unreachable — `AUTHORED_SPINE_LIMIT = 30`, every node authored. Copy still present in the drawer, now documented as dead |
| Player calls `completeLesson` with `mistakes` | Calls `completeLesson(lesson.id, { perfect: !everQueued })` |
| Tests in `src/tests/map.test.ts` | `src/tests/trail-map.test.ts`, six describe blocks |
| Plan for `MapNode`, `BridgeGate`, `NodeDrawer`, `TrailList` | Only `TrailMap.tsx` (MapNode + gate pill inline) and `LessonNodeDrawer.tsx` exist; the map shell is `src/app/page.tsx` |

The correcting agent also **corrected three of the original audit's own errors**: `TOTAL_TOPICS` lives at `curriculum.ts:19`, `flattenTrailNodes` at `curriculum.ts:480`, and the serpentine swing caps at 150px from a 680px width rather than at the 980px clamp.

---

## 3. `content-agent-prompt.md` — the content-authoring prompt

The prompt's premise had become false: it instructed an agent to fill ~100 hollow lesson shells, but the curriculum is now fully authored. The MISSION has been reframed as maintenance/review of a complete 109-lesson curriculum.

| Claim | Reality | Evidence |
|---|---|---|
| "First 10 topic cores authored; fill the remaining ~100 hollow shells" | All 30 cores + 72 sprigs + 7 branch lessons authored | `src/tests/trail-map.test.ts:14` |
| `TOTAL_COMPENDIUM_WORDS` currently 218 | **310** | `src/lib/types.ts:1` |
| Parser regex-matches header counts literally; a wrong count empties the section | All four regexes accept any count — `\(All \d+ Words\)`; a wrong count is decorative | `scripts/parse-compendium.ts:109,190,231` |
| Invented §2 column spec `\| # \| **German** \| cognate \| …` | Real header row plus extra rules: ≥8 pipe cells, must not repeat the literal `German Word`, context phrase must end `*"("English translation.")*` | `word_connections.md:74`, `scripts/parse-compendium.ts:114-134` |
| `AUTHORED_SPINE_LIMIT = 14`; raise the frontier each batch | **30**; the hollow-shell branch is dead code | `src/tests/trail-map.test.ts:14,32` |
| "Topics 9–18 → phase 2, 19–30 → phase 3"; `phase: 2 \| 3` | Boundary is **17**; `phase` is a plain `number` | `src/data/lessons.ts:4471`, `src/lib/types.ts:100` |
| "The Grammar Gate needs 11★ of 20" | Grammar Gate needs **6★ of 10**; the 11-of-20 figure belongs to the Verb-Complex Gate | `src/data/curriculum.ts:427-436` |
| File map omits `compendium.ts` and `compendium.test.ts` | Added to the map and to Definition of Done | `src/data/compendium.ts` |
| `vocab_hint` (singular) | `vocab_hints` (array) | `src/lib/types.ts:94` |

Marked **OK and left unchanged**: the Lesson schema block (field-for-field identical to the real `Lesson` interface), the `ExerciseType` list, the sprig/branch id scheme, the file-map paths, the "do not touch" boundaries, and the four validation commands.

---

## 4. `README.md`

| Claim | Reality | Evidence |
|---|---|---|
| "Vitest / `bun test` (21 suites, 119 tests)" | **22 suites, ~150 tests, vitest only** — `bun test` is not a configured runner | `package.json:11` |
| "Web Audio click **synthesizer**" | A **sample** engine: bundled Monkeytype `.wav` packs, 24-buffer cache, negative caching | `src/lib/sound.ts` |
| "Pre-renders all 28 pages" | 6 static routes + 9 atlas families + one page per authored lesson (100+) | `src/app/trail/[id]/page.tsx:5` |
| "Topics 11–30 shipped as titled shells" | **All 30 topics + 72 sprigs + 7 branch lessons authored** | `src/tests/trail-map.test.ts:14` |
| `compendium.json # 218 core words` | **310** | `src/lib/types.ts:1` |
| `lessons.ts # ids 1–10` | All 109 lessons | `src/data/lessons.ts` |
| "tests/ # 22 suites (Vitest / Bun)" | Vitest only | `package.json:11` |
| Cookie fallback "< 3800 bytes" | **≤ 2048** URL-encoded bytes | `src/lib/store.ts:191` |
| Link to `docs/german_learning_platform_design-final.md` | Path did not exist; fixed to the sibling file | — |
| Directory tree | **10 shipped files missing**; two non-existent files listed (`Footer`, `MapNode`) | tree rebuilt from `src/` |
| No mention of theming, fonts, settings, sound packs, backup or star gates | All ship | see §25 of the blueprint |

**Added:** a new *Personalization & Progression* section covering the 187 themes with their WCAG audit, the 43 fonts, `/settings` in full, JSON backup import/export, the sound packs, and the six star gates with their thresholds. One claim was also *downgraded*: `package.json` sets `"private": true` and there is **no LICENSE file**, so "open-source" is not currently supportable — changed to "self-contained".

---

## 5. `AUDIT_MANIFEST.md`

| Claim | Reality | Evidence |
|---|---|---|
| Paths `docs/` | No such directory; documents live in `documented docs/` | — |
| Tree root `…/german-app-2/` | `…/german-app-2-new-ui/` | `package.json:1` |
| `/` is a streak-stats dashboard | `/` is the **trail map** | `src/app/page.tsx:11,67` |
| `/trail` is a 5-phase trail overview | `/trail` is a **redirect to `/`** | `src/app/trail/page.tsx:5` |
| "30-lesson syllabus in 5 phases; lessons 1–10 interactive" | 30 topics in **3** phases; all ~110 lessons interactive | `src/data/lessons.ts:9,3233,4471` |
| `compendium.json # 218 words`; `lessons.ts # 1–10` | 310 words; all lessons | `src/lib/types.ts:1` |
| `src/tests/ # 21 suites, 119 tests` + 10-file listing | **22 suites**; listing omitted 11 files | `src/tests/` |
| `WordEntity` has `lesson_index` | No such field; membership is `Lesson.word_ids` | `src/lib/types.ts:19-32` |
| Gender hexes `#0ea5e9` / `#f43f5e` / `#10b981` | `#60A5FA` / `#FB7185` / `#34D399`, light/dark-paired Tailwind | `src/lib/gender.ts:22-46` |
| `/trail/[id]` exports 5 static pages | One per authored lesson (100+) | `src/app/trail/[id]/page.tsx:5` |
| Cookie gate "< 3800 bytes" | ≤ 2048 | `src/lib/store.ts:191` |
| Verification list includes `bun test`; 28 pages | Vitest only; correct counts; `bun run trail` and the `scripts/` tooling added | `package.json:7` |
| Check: "Lessons 1–10 never start with cold typing" | Checked across **all** lessons | `src/tests/exercises.test.ts:10` |

**Added:** a Trail Map & Progression pillar (spine, sprigs, branches, the six gates and their stretch math, the purple star), a Personalization section, a complete `src/data/` and component tree, and the trail/curriculum types appended to §6 (`LessonShell`, `TopicCluster`, `TrailBranch`, `TrailGate`, `LessonStar`, `LessonSegment`, `LessonSection`, `VocabHint`, `MatchingPairItem`, `DailyInsight`, `CompendiumData`, `LessonProgress.everQueued`).

### Two further findings, caught on the second pass

| Claim | Reality | Evidence |
|---|---|---|
| The Atlas's "9 shift families" were **a partly fictional list** | The real nine are `th_to_d` (33w), `d_to_t` (27w), `p_to_pf_f` (28w), `t_to_s_ss_z` (43w), `k_to_ch` (28w), `v_to_b` (19w), `y_gh_to_g_ch` (27w), `latin_ieren` (15w), `strong_verbs_ablaut` (20w). The documented list split `V/F→B`, `Y→G` and `GH→CH` into four separate families and **omitted** `latin_ieren` and `strong_verbs_ablaut` entirely. | `src/data/compendium.json` |
| "19 click packs / 153 assets" (first pass of this register) | **20 click packs + 4 error cues = 155** `.wav` files, across `click1`–`click7`, `click14`–`click26`, `error1`–`error4`, plus `fart-reverb.wav` and `timeWarning.wav`. Corrected here and in the blueprint. | `ls public/sounds` |

The shift-family error is the more serious of the two: it was not merely a stale count but a **different taxonomy**, and it had propagated into both the blueprint and the manifest. The blueprint's §5 and §17 now carry the real ids and per-family word counts.

---

## 6. Shipped features that were entirely undocumented (29 Subsystems)

Now documented as **§25** of the blueprint, in full. None of these appeared anywhere in the original documentation set.

| # | Feature | Primary evidence |
|---|---|---|
| 1 | **Theme system** — 187 Monkeytype themes, derived `THEME_LIST`, YIQ dark/light classification, 10 CSS variables, `POPULAR_THEMES`, WCAG contrast floors enforced across all 187 by test | `src/data/themes.ts:23-2339`, `src/tests/themes.test.ts:60,213` |
| 2 | **Font system** — 43 self-hosted families, live-preview modal, `--font-app` injection | `src/data/fonts.ts:14-92` |
| 3 | **Settings & Monkeytype typing mechanics** — 748 lines, 6 sections, `/`-to-focus search, 13 preferences: `stopOnError: "letter"` (blocks wrong character on input), `confidenceMode: "on"` (blocks `Backspace` in typing), `capsLockWarning` (`e.getModifierState("CapsLock")`), `quickRestart`, JSON backup export/import | `src/app/settings/page.tsx`, `src/data/settings.ts:5`, `src/components/lesson/ExerciseWidgets.tsx:128,221`, `src/app/review/page.tsx:396,502,903` |
| 4 | **Appearance layer** — theme-scoped `increasedContrast` + flash-free pre-paint boot script | `src/lib/appearance.ts`, `src/app/layout.tsx:44-53` |
| 5 | **Sound engine** — 20 click packs + 4 error cues (155 `.wav` assets), Web Audio, 24-buffer LRU, negative URL caching, oscillator fallback | `src/lib/sound.ts`, `public/sounds/` |
| 6 | **Pronunciation engine** — `speechSynthesis`, `de-DE`, rate 0.92, 45 lines, zero dependencies | `src/lib/audio.ts:19-41` |
| 7 | **Word-entity resolution** — synthetic `compound_*` / `trap_*` ids putting calques and false friends on the core word path | `src/lib/word-entities.ts` |
| 8 | **Compendium pipeline** — `word_connections.md` → `parse-compendium.ts` → `compendium.json` + `insights.json` → typed `wordList`, with an integrity test | `scripts/parse-compendium.ts`, `src/tests/compendium.test.ts` |
| 9 | **Dialog focus hook** — nesting-aware stack: Escape, Tab trap, focus restore, scroll lock, `preventScroll` | `src/lib/use-dialog-focus.ts` |
| 10 | **Gender system** — the one fixed colour system, centralized in `getGenderInfo` | `src/lib/gender.ts:19-53` |
| 11 | **English lemmatizer (orphaned utility)** — normalizes irregular English verbs, participles, and plurals; **not** German and **not** connected to SRS; preserved from removed Decoder tool | `src/lib/lemmatizer.ts`, `src/tests/lemmatizer.test.ts` |
| 12 | **German character bar** — `ä ö ü ß Ä Ö Ü`, gated by `showCharBar` | `src/components/common/GermanCharBar.tsx` |
| 13 | **Store hardening** — schema-defaulted hydration, 2048-byte cookie budget, corrupted/poisoned-storage recovery, `__proto__` stripping | `src/lib/store.ts:97-191`, `src/tests/store-security.test.ts` |
| 14 | **About page + 5-destination dock** | `src/app/about/page.tsx`, `src/components/navigation/BottomNav.tsx` |
| 15 | **Root-chunk code splitting** — 253 KB compendium and the theme table kept off the initial bundle | lazy overlay imports |
| 16 | **Atlas instrumentation** — global 4-tier banner, live family filter, per-family SVG rings, first-attempt-only drill scoring | `src/app/atlas/page.tsx`, `src/components/atlas/BranchDrillModal.tsx:54` |
| 17 | **Phonetics lookup tables** — `COMPOUND_IPA` (39 exact compound IPA strings) and `FALSE_FRIEND_IPA` (16 exact false friend IPA strings) replacing generic placeholders | `src/data/phonetics.ts:6,41`, `src/lib/word-entities.ts:38,55` |
| 18 | **Developer & quality tooling scripts** — `export-trail.ts` (`bun run trail` generating `TRAIL.md`), `audit-teasers.ts` (title drift and curiosity teaser keyword validation), `contrast-audit.ts` (automated mathematical WCAG fixer for 187 themes) | `scripts/export-trail.ts`, `scripts/audit-teasers.ts`, `scripts/contrast-audit.ts`, `TRAIL.md` |
| 19 | **Memory & Denial-of-Service protections** — 200-character input cap rejecting long pastes before diffing, Levenshtein matrix distance clamping ($>20$ length delta), rolling $O(N)$ space, 500-entry LRU cache in shift-annotator | `src/lib/letter-diff.ts:63,114`, `src/lib/shift-annotator.ts:18`, `src/tests/diff-memory.test.ts` |
| 20 | **Exercise anti-spoilers** — 1-row cyclic shift in `matching_pairs` preventing horizontal row matching, automatic punctuation stripping (`sanitizedWordBank`) so full stops don't leak the final sentence word, active recall front-card gender shield | `src/components/lesson/ExerciseWidgets.tsx:51,59`, `src/app/review/page.tsx:735`, `src/tests/exercises.test.ts:79` |
| 21 | **Review option & tile generation engines** — `generateMCQOptions` prioritizing same-shift distractors, `generateWordTiles` using German phonotactics (`-en`, `-el`, `-er`, length thirds) and German suffix distractors (`st`, `ung`, `te`, `heit`, `isch`, `ig`, `keit`) | `src/lib/review-modes.ts:21,64`, `src/tests/review-modes.test.ts` |
| 22 | **Cross-tab real-time state sync** — `window.addEventListener("storage")` on `STORAGE_KEY` in `RootLayout`; updating progress, stars, or theme in one tab rehydrates all other open tabs in real-time | `src/app/layout.tsx:34-40`, `src/lib/store.ts:77` |
| 23 | **Pre-paint boot script & DarkReader shield** — inline `<script>` in `<head>` restoring theme/font/contrast before first paint (eliminates FOUC); `<meta name="darkreader-lock" />` protecting 187 palettes | `src/app/layout.tsx:47,54-106`, `src/data/themes.ts:2337` |
| 24 | **Trail map deterministic watermark & node geometry** — LCG (seed 42) procedural background watermark (`ß`, `ü`, `ö`, `ä`, `§`); three distinct node geometries (`core` 168×58, `sprig` 46×46, `branch` 148×44); gold (`#eab308`) and purple (`#a78bfa`) star badges | `src/lib/trail-map.ts:24,266`, `src/components/trail/TrailMap.tsx:327-370` |
| 25 | **Lesson reader desktop margin notes, step tracker & back-navigation** — sticky desktop margin notes column (`sticky top-24 lg:col-span-4`); horizontal step indicator pills (`w-6`/`w-3`); "← Review Transformation Table" and "Previous Problem" back-navigation | `src/components/lesson/LessonReader.tsx:384-458,565-590` |
| 26 | **Character bar focus preservation** — all 7 umlaut buttons attach `onMouseDown={(e) => e.preventDefault()}` so clicking an on-screen character does not steal focus from the active `<input>` field | `src/components/common/GermanCharBar.tsx:30` |
| 27 | **Settings Danger Zone** — independent section allowing full progress wipe or settings reset back to `DEFAULT_SETTINGS` with double-confirmation dialog | `src/app/settings/page.tsx:659-715`, `src/lib/store.ts:45,72` |
| 28 | **Gender badge animated pulsing dot** — `GenderBadge` renders a live pulsing circular dot (`w-1.5 h-1.5 rounded-full animate-pulse`) in the gender's dot color: `#60A5FA` (azure), `#FB7185` (rose), `#34D399` (emerald) | `src/components/common/GenderBadge.tsx:36-39`, `src/lib/gender.ts:25,36,47` |
| 29 | **First-time vs. reopened walkthrough routing** — completing onboarding for the first time routes to `/trail/1`; reopening from the TopNav guide button simply closes the modal without disrupting current page | `src/components/common/OnboardingModal.tsx:74-80`, `src/components/navigation/TopNav.tsx:50` |

---

## 7. Half-built: the most misleading category

These are the cases where a reader is most likely to assume a feature works, because the code for it exists and even has tests.

| Feature | What exists | What doesn't |
|---|---|---|
| **Weekly consistency dots** | `weeklyActivity: boolean[7]`, ISO-week rollover, persistence, backup round-trip | **Any UI.** No dot row, no goal bracket, no acknowledgment |
| **In-lesson tolerance prompts** | `RetryQueue` with correct per-problem logic and 2-dismissal anti-nagging | **Reachability.** The queue is drained inside the Practice segment, so the summary-branch `RetryQueue` is dead code and the prompt never fires |
| **Family co-scheduling in review** | `getCardsByShift()` in `srs.ts`, unit-tested | **Any caller.** The Review page reads `data.shifts[id].word_ids` directly |
| **Compendium word count header** | `## 2. … (All 310 Words)` in `word_connections.md` | **Enforcement.** All four parser regexes accept any count; a wrong number does not break the build, so it silently rots |
| **Frontier test** | "has authored content up to the frontier and hollow shells beyond" | **The hollow branch.** `AUTHORED_SPINE_LIMIT = 30` means every topic is on the authored side |
| **Review deck pre-seeding** | Ephemeral `SRSCard` stubs so a deck is never empty | **Persistence** — stubs never reach `srsCards` |
| **"Being written" node copy** | Code in `LessonNodeDrawer.tsx:122-128` renders `<Sparkles /> being written` and `{node.plan}` if `!node.authored` | **Active trigger:** all 109 nodes currently have `authored: true`, so the branch is dormant unless a new unauthored node is added |

---

## 8. Deliberately not changed

- **Design-intent sections were kept.** §1 (thesis), §2 (emotional journey), §10 (why no leaderboards), §21.1 (three competing structuring models) and §23.2 reasons 1 and 5 are still accurate and remain as written — they are the reasoning behind the product, not claims about the code.
- **Section numbering was not renumbered.** The original has 15, 16 and 22 appearing after 24 because it was only ever appended to. Renumbering would have broken every cross-reference for no benefit; each oddity is noted where it occurs instead.
- **The Discovery Q&A transcript was not edited**, only retitled and annotated — it is a historical artefact, and editing someone's interview answers would falsify the record.
- **No source file was modified.** This pass is documentation-only. Where the audit found real code defects — `LessonNodeDrawer` missing Escape handling, the unused `<RetryQueue>`, `getCardsByShift()` with no caller, the missing `lang="de"`, the missing `prefers-reduced-motion`, `focus()` without `preventScroll`, the settings importer not bounding file size — they are recorded here and in the blueprint, not silently fixed.
