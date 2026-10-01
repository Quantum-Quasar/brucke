# Brücke — Etymological German Learning Platform
## Complete Master System Architecture & Product Blueprint

> **Verified against the implementation on 2026-10-01.**
> The append-only historical draft is preserved verbatim in [`old documentation/german_learning_platform_design-final.md`](../old%20documentation/german_learning_platform_design-final.md).
> Complete line-by-line verification diffs, evidence, and audit logs are recorded in [`CORRECTIONS.md`](./CORRECTIONS.md).

---

## 1. System Overview & Implementation Snapshot

**Brücke** is an open-source, client-first web application designed to help English speakers acquire German rapidly by decoding the underlying linguistic mechanics that connect both languages. Rather than relying on rote memorization or gamified streaks, Brücke leverages the **Second High German Consonant Shift (500–800 AD)** to demonstrate that English speakers already understand hundreds of German words.

### Technical Snapshot

| Dimension | Implementation | Ground Truth / Evidence |
|---|---|---|
| **Framework** | Next.js 16.3.4 (App Router) + React 19.2.8 + TypeScript 7 | `package.json:14-16` |
| **Styling** | Tailwind CSS v4 + PostCSS (`@tailwindcss/postcss`) | `package.json:23`, `postcss.config.mjs` |
| **State Management** | Zustand 5 (local-first with multi-storage persistence) | `src/lib/store.ts` |
| **Runtime & Tests** | Bun + Vitest 5 (`bun run test` runs 22 test files, 312 tests) | `package.json:11`, `vitest.config.ts` |
| **Application Routes** | 6 static (`/`, `/about`, `/atlas`, `/review`, `/settings`, `/trail` [redirects to `/`]) + 9 atlas dynamic (`/atlas/[family]`) + 109 lesson dynamic (`/trail/[id]`) + `src/app/error.tsx` | `src/app/` |
| **Curriculum Scope** | 30 topics arranged as a linear spine of clusters: 30 cores + 72 sprigs + 7 branch lessons = **109 authored lessons** | `src/data/curriculum.ts`, `src/data/lessons.ts` |
| **Compendium Knowledge Base** | **310 core words**, 9 shift families, 32 compound calques, 16 false friend traps, 28 daily insights | `src/lib/types.ts:1`, `src/data/compendium.json` |
| **Review Engine** | 5 selectable decks $\times$ 4 interactive review modes; SuperMemo-2 (SM-2) spacing algorithm | `src/app/review/page.tsx`, `src/lib/srs.ts` |
| **Exercise Library** | 6 concrete `ExerciseType`s; 5 exercises per lesson = **545 total exercises** | `src/lib/types.ts:80`, `src/components/lesson/ExerciseWidgets.tsx` |
| **Personalization** | 187 Monkeytype color themes (WCAG contrast audited) + 43 self-hosted typefaces + 13 user settings | `src/data/themes.ts`, `src/data/fonts.ts`, `src/data/settings.ts` |
| **Audio Engine** | Web Speech API (`de-DE`, 0.92x) for pronunciation + Web Audio sample player (20 click packs, 4 error cues, 155 `.wav` files) | `src/lib/audio.ts`, `src/lib/sound.ts` |
| **Storage & Security** | `localStorage` + size-guarded cookie ($\le 2048$ bytes); no database, no auth, no telemetry | `src/lib/store.ts:155-194` |

---

## 2. Pedagogical Core & Sound Shift Engine

### 2.1 The Core Thesis
English and German share a West Germanic ancestor. Between 500 and 800 AD, dialects in southern and central Germany underwent the Second High German Consonant Shift (*Zweite Lautverschiebung*). English, protected across the North Sea, preserved the ancestral Germanic consonants. By learning the systematic sound correspondence rules, learners transform English cognates into German target vocabulary through deductive reasoning rather than memorization.

### 2.2 The 9 Consonant Shift Families
All 310 vocabulary words in `src/data/compendium.json` are organized into 9 primary shift families:

| ID | Shift Symbol | Phonetic Description | Words | Key Anchor Cognates |
|---|---|---|:---:|---|
| `th_to_d` | **TH → D** | Dental hardening: voiceless dental fricative `/θ/` became voiced stop `/d/` | 33 | `think` $\rightarrow$ `denken`, `brother` $\rightarrow$ `Bruder`, `thirst` $\rightarrow$ `Durst` |
| `t_to_s_ss_z` | **T → S / SS / Z** | Sibilant shift: voiceless alveolar stop `/t/` became sibilants `/s/`, `/ss/`, `/ts/` (`z`) | 43 | `water` $\rightarrow$ `Wasser`, `better` $\rightarrow$ `besser`, `two` $\rightarrow$ `zwei` |
| `p_to_pf_f` | **P → PF / F** | Labial shift: voiceless bilabial stop `/p/` became fricatives `/f/`, `/ff/` or affricate `/pf/` | 28 | `hope` $\rightarrow$ `hoffen`, `ship` $\rightarrow$ `Schiff`, `apple` $\rightarrow$ `Apfel` |
| `k_to_ch` | **K → CH** | Velar shift: voiceless velar stop `/k/` shifted to velar/palatal fricative `/x/`, `/ç/` | 28 | `make` $\rightarrow$ `machen`, `book` $\rightarrow$ `Buch`, `speak` $\rightarrow$ `sprechen` |
| `d_to_t` | **D → T** | Dental reversal: voiced stop `/d/` hardened into voiceless stop `/t/` | 27 | `day` $\rightarrow$ `Tag`, `daughter` $\rightarrow$ `Tochter`, `drink` $\rightarrow$ `trinken` |
| `y_gh_to_g_ch` | **Y/GH → G/CH** | Palatal/velar continuants: English glide `/j/` or silent `gh` matches German `/g/` or `/ç/` | 27 | `yesterday` $\rightarrow$ `gestern`, `night` $\rightarrow$ `Nacht`, `say` $\rightarrow$ `sagen` |
| `strong_verbs_ablaut` | **Ablaut Vowels** | Indo-European vowel gradation (*Ablaut*) in strong verb principal parts | 20 | `sing/sang/sung` $\rightarrow$ `singen/sang/gesungen`, `find` $\rightarrow$ `finden` |
| `v_to_b` | **V / F → B** | Labial softening: English voiced labiodental `/v/` corresponds to German stop `/b/` | 19 | `give` $\rightarrow$ `geben`, `live` $\rightarrow$ `leben`, `love` $\rightarrow$ `lieben` |
| `latin_ieren` | **-ate/-ize → -ieren** | Romance/Latin borrowing bridge: Latin verbs absorbed with suffix `-ieren` | 15 | `organize` $\rightarrow$ `organisieren`, `study` $\rightarrow$ `studieren` |

### 2.3 Static Shift Annotation Engine
`src/lib/shift-annotator.ts` implements a deterministic string aligner that compares an English cognate against its German counterpart without heavy external diff libraries.
- **Rules evaluation order**: Tests 15 consonant patterns sequentially: `th→d`, `p→pf`, `p→ff`, `p→f`, `t→ss`, `t→s`, `t→z`, `t→ß`, `k→ch`, `c→ch`, `d→t`, `v→b`, `f→b`, `y→g`, `gh→ch`.
- **Visual styling (`ShiftPair.tsx`)**:
  - **English side**: Changed letters are underlined and dimmed to `--sub-color`. Unchanged letters remain `--text-color`.
  - **German side**: Changed letters are wrapped in a 15% opacity accent chip with bold text in `--main-color`.
  - **Rule label**: A small pill styled in `--main-color` showing the exact shift formula (e.g. `P → FF`).
  - **Fallback**: If no rule matches, it degrades gracefully to a clean `"Cognate"` pairing without false highlights.
- **LRU cache protection**: `alignCache` is bounded to 500 entries (`MAX_ALIGN_CACHE = 500`), evicting oldest keys on overflow.

---

## 3. Product Architecture & Navigation Shell

### 3.1 Primary Navigation Dock (`src/components/navigation/BottomNav.tsx`)
The application is anchored by a fixed bottom navigation dock containing 5 destinations:
1. `trail`: Maps to `/` (home trail map) and `/trail/[id]` (lesson player).
2. `atlas`: Maps to `/atlas` (sound shift index) and `/atlas/[family]`.
3. `review`: Maps to `/review` (dedicated spaced repetition hub), displaying a live due count badge (`99+` if $>99$).
4. `settings`: Maps to `/settings` (personalization and preferences).
5. `about`: Maps to `/about` (explainer route with consonant shift overview).

The dock implements `pb-[max(env(safe-area-inset-bottom),0.5rem)]` to support mobile gesture bars (e.g. iOS home indicator).

### 3.2 Top Bar Identity & Customization (`src/components/navigation/TopNav.tsx`)
- **Branding**: Wordmark `"bü"`, app name `"brücke"`, subtitle `"german cognates"`.
- **Mastery Counter**: Desktop-only pill showing live `N / 310 mastered` words, toggleable via `showMasteryCounter`.
- **Theme Dropdown**: Quick theme selector with search, Popular/Dark/Light/All filters, 3-swatch preview, and random shuffle.
- **Walkthrough Guide**: `<HelpCircle /> guide` button allowing returning users to re-open the onboarding modal on demand.

### 3.3 Root Layout & Code Splitting (`src/app/layout.tsx`)
- **Pre-Paint Boot Script**: An inline, synchronous `<script>` runs in `<head>` before first paint. It reads `localStorage` (`STORAGE_KEY`) and fallback cookie (`STORAGE_COOKIE_KEY`), validates the theme ID against `/^[a-zA-Z0-9_-]+$/`, applies cached CSS variables (`brucke_theme_vars`), sets `data-theme`, `data-font`, and `data-contrast`, and configures `.dark`/`.light` classes. This eliminates Flash of Unstyled Content (FOUC).
- **Extension Shield**: Contains `<meta name="darkreader-lock" />` in `<head>` to prevent Dark Reader extensions from altering the 187 calibrated theme palettes.
- **Cross-Tab Real-Time Sync**: A global `window.addEventListener("storage", handleStorage)` listener monitors `STORAGE_KEY`. When progress or settings update in one tab, all other open tabs immediately call `hydrateFromStorage()`.
- **Lazy Code-Splitting**: `WordCardDrawer`, `OnboardingModal`, `ThemeSelectorModal`, and `FontSelectorModal` are dynamically imported with `{ ssr: false }` so the 253 KB compendium and 187-theme table stay out of the initial critical JavaScript bundle.

---

## 4. The Baba Trail Map & Progression System

The Trail is not a linear list; it is an interactive spatial node graph inspired by *Baba Is You*, rendered by `src/components/trail/TrailMap.tsx` and computed by `src/lib/trail-map.ts`.

### 4.1 Graph Architecture
The map consists of **109 nodes** across **30 topic clusters**:
- **Spine cores (30 nodes)**: Numbered `1` to `30`. Strictly ordered sequence forming the main line.
- **Sprigs (72 nodes)**: ID scheme `topicId * 100 + index` (e.g. `101`, `102`, `103`, `3001`). Side-drills hanging directly off their topic core.
- **Support branches (7 nodes across 5 branches)**: Attached to specific core topics (`5010` on topic 3, `5020` on topic 6, `5030` on topic 8, `5040` on topic 21, `5050` on topic 25). ID scheme `5000 + n * 10 + index` (`5011`, `5012`, etc.).
- **Baba OR-Join Unlock Rule**: Any node unlocks when **any** adjacent node is completed. Node 1 is unlocked by default. Sprigs and branches are always skippable.

### 4.2 The 6 Star Gates
Progress along the spine is gated at 6 strategic stretch boundaries. Each gate counts stars earned **only within its specific stretch**:

| Gate Name | After Topic | Stretch Covered | Topics in Stretch | Lessons in Stretch | Required Stars |
|---|:---:|:---:|:---:|:---:|:---:|
| **The Shift Gate** | 7 | Topics 1–7 | 7 | 25 | **14 ★** |
| **The Grammar Gate** | 10 | Topics 8–10 | 3 | 10 | **6 ★** |
| **The Verb-Complex Gate** | 16 | Topics 11–16 | 6 | 20 | **11 ★** |
| **The Past Gate** | 20 | Topics 17–20 | 4 | 17 | **9 ★** |
| **The Atlas Gate** | 26 | Topics 21–26 | 6 | 20 | **11 ★** |
| **The Capstone Gate** | 29 | Topics 27–29 | 3 | 13 | **9 ★** |

A closed gate locks all subsequent topics and turns the crossing spine edge dark. Clicking a gate pill opens `GateDrawer`, showing the required star quota, current stars, and live shortfall. Both gold and purple stars count.

### 4.3 Star Currency & The Purple Star
Every completed lesson awards a star (`LessonStar = "gold" | "purple"`):
- **Gold Star (`#eab308`)**: Awarded upon clearing all exercises in a lesson.
- **Purple Star (`#a78bfa`)**: Awarded for a flawless first-try run where the retry queue was never touched (`!everQueued`). Once earned, a purple star is **never downgraded** to gold on subsequent replays.

### 4.4 Procedural Layout & Canvas Engine
- **Vertical Inversion**: Nodes are laid out top-down and then flipped vertically (`y = height - y - h`) so topic 1 sits at the bottom and the learner climbs upward.
- **Serpentine Path**: Wide canvases swing the spine laterally (clamped to a 150px swing). Sprigs fan out to the flanks; branches chain below clusters.
- **Responsive ResizeObserver**: Dynamically measures container width (clamped 320–980px) and recalculates node coordinates. No CSS `transform: scale()` is used.
- **Windowed Virtualization**: Clusters are wrapped in `.trail-section` containers with `content-visibility: auto` and `contain-intrinsic-size: 900px 300px`, allowing off-screen nodes to skip layout and paint.
- **Procedural Watermark**: A Linear Congruential Generator (LCG, seed 42) scatters German typographic glyphs (`ß`, `ü`, `ö`, `ä`, `§`) across the canvas at deterministic coordinates.
- **Recommendation Engine**: Cascades through (1) next authored core, (2) nearest available core or sprig in reverse order, (3) nearest available branch lesson. The recommended node receives a pulsing `.trail-selector` ring and auto-scrolls into view on mount if outside the viewport.

---

## 5. The Phonological Sound Shift Atlas

The Atlas (`/atlas` and `/atlas/[family]`) is fully open from Day 1 for self-directed exploration.

### 5.1 The 4-State Visual Mastery Engine
Every word entity in the compendium exists in one of four mutually exclusive progress states:
1. **Unexplored (`·`)**: Faint `--sub-color`/20 border, transparent fill. Word exists in compendium but has not been opened.
2. **Explored (`○`)**: Solid `--sub-color`/60 border. Set whenever a learner opens the Word Detail Card from anywhere in the app.
3. **Encountered (`●`)**: Accent `--main-color`/60 border. Batched on lesson load (`markWordsEncountered(lesson.word_ids)`) when a lesson containing the word is opened.
4. **Mastered (`✓`)**: Solid `--main-color` border with 10% fill. Set when the word's SRS card achieves $\ge 3$ consecutive successful reviews with an interval $\ge 7$ days.

### 5.2 Atlas Bird's-Eye Grid (`src/app/atlas/page.tsx`)
- **Global Stats Banner**: Displays live tallies of `mastered`, `in course`, `explored`, `unseen`, and `total indexed` (310 words).
- **Search & Filter**: Free-text filter matching shift names, symbols, phonetic rules, or word IDs.
- **Family Cards**: 3-column grid of all 9 families. Each card features:
  - Shift symbol badge and family name.
  - Native 42px SVG donut chart (`DonutChart.tsx`) displaying the 4-state distribution using theme tokens (`--main-color`, `--text-color`, `--sub-color`, 35% alpha `--sub-color`).
  - 3 preview word chips (`english → german`).
  - Footer counter showing `{mastered + encountered}/{total} known`.

### 5.3 Constellation Detail View (`src/app/atlas/[family]/page.tsx`)
- **Desktop Radial Spoke Canvas**: An elliptical hub-and-spoke layout ($640\times 440\text{px}$, $rx=220, ry=150$). Center hub displays the shift symbol, root count, and `+N more below` indicator. Spokes are straight dashed SVG lines connecting up to 10 prominent words.
- **Mobile Responsive Tree**: Below the `md` breakpoint (768px), the canvas collapses into a clean vertical list of `ShiftPair` items.
- **Philological Deep-Dive**: Two structured cards detailing the historical linguistics, philological background, and literature citations for the shift.
- **Branch Practice Drill Modal (`BranchDrillModal.tsx`)**: 5-question dynamic quiz covering the family (MCQ, morpheme tiles, derivation typing, reverse cognate). Scores increment only on first-attempt passes (`!currentQuestionFailed`).

---

## 6. Spaced Repetition Review Hub

The Review Hub (`src/app/review/page.tsx`) provides an integrated SuperMemo-2 (SM-2) review system operating over unified word entities.

### 6.1 The 5 Review Decks
1. **Due Today**: Words scheduled by SM-2 whose due date is today or earlier (`getDueCards()`).
2. **By Shift Family**: Drills all words in a chosen sound shift family.
3. **Weakest Words**: Cards with $\ge 1$ lapses, sorted by lapse count descending (max 15 cards via `getWeakestCards()`).
4. **Recent Lessons**: A fixed deck of the first 20 core compendium words (`wordList.slice(0, 20)`).
5. **Compounds & Traps**: Drills 32 compound calques (`compound_<id>`) and 16 false friend traps (`trap_<id>`).

### 6.2 The 4 Interactive Review Styles
Before deck start, a modal prompts the learner to select a review style (persisting the preference in settings):
- **Flashcard**: Fast active recall card. Space/Enter flips; keys 1–4 grade.
- **Multiple Choice (MCQ)**: 4 options generated by `generateMCQOptions`, which prioritizes realistic distractors sharing the target's `sound_shift_ids` family. Keys 1–4 pick.
- **Tile Builder**: German phonotactic word assembly generated by `generateWordTiles`. Chunks target words by syllables (`-en`, `-el`, `-er`, thirds) and provides realistic German suffix distractors (`st`, `ung`, `te`, `heit`, `isch`, `ig`, `keit`). Typing letters snaps matching tiles; Backspace unpicks.
- **Derivation Typing**: Free-text typing mode with letter-diff feedback, supporting `stopOnError` and `confidenceMode`.

### 6.3 SM-2 Scheduling Algorithm (`src/lib/srs.ts`)
- **Review Grades**: `1` (Again), `3` (Hard), `4` (Good), `5` (Easy).
- **Interval Formula**:
  - Grade $<3$: `repetitions = 0`, `interval = 1`, `lapses += 1`.
  - Grade $\ge 3$: If `repetitions === 0` $\rightarrow$ `interval = 1`; if `repetitions === 1` $\rightarrow$ `interval = 6`; if `repetitions >= 2` $\rightarrow$ `interval = round(interval * ease_factor)`. `repetitions += 1`.
  - Ease Factor Formula: $EF' = EF + (0.1 - (5 - \text{grade}) \times (0.08 + (5 - \text{grade}) \times 0.02))$, with a hard floor of $1.3$.
- **Mastery Criteria**: A word is marked `mastered` when `repetitions >= 3 && interval >= 7`.

### 6.4 Review Ergonomics & Anti-Spoilers
- **Active Recall Gender Shield**: The front of unrevealed flashcards renders `Gender: [ der / die / das ? ]` in neutral text, suppressing the color-coded `GenderBadge` until after recall.
- **Mid-Session Style Switcher**: A `<select>` in the card header allows fluidly switching between recall, MCQ, tiles, and typing mid-session without restarting.
- **Audio Hotkey**: Pressing `[R]` or `[A]` on a revealed card immediately speaks `${gender} ${target_word}` using Web Speech synthesis.

---

## 7. Lesson Architecture & Exercise Typology

### 7.1 The 5-Segment Flow (`LessonReader.tsx`)
Every lesson in `src/data/lessons.ts` is divided into 5 structured segments:
1. **Hook**: Conceptual opening insight + desktop sticky margin notes (`lg:col-span-4`).
2. **Pattern**: Mechanical explanation of the shift + bordered `linguist_note` callout.
3. **Table**: 2-column grid of `ShiftPair` items + Atlas bridge card (`atlas • {symbol}`).
4. **Practice**: Exactly 5 exercises presented one at a time, followed by an inline reinforcement queue for errors.
5. **Summary**: Outcome ability statement, practical use example, key takeaway, and forward-pointing `curiosity_teaser`.

### 7.2 The 6 Exercise Types (`ExerciseWidgets.tsx`)
- **`morpheme_tiles` (slot e1)**: Assembles target words from root and ending tiles (e.g. `hoff` + `en` $\rightarrow$ `hoffen`). Number keys 1–9 pick; Backspace unpicks.
- **`matching_pairs` (slot e2)**: 4 English cognates matched against 4 German twins. **Anti-spoiler**: `displayGermanPairs` applies a cyclic 1-row shift so pairs never align horizontally across columns. Number keys 1–N pick; Escape deselects.
- **`derive` (slot e3/e4)**: Free-text typed derivation from English prompt and shift hint, with German character bar.
- **`reverse_cognate` (slot e4/e3)**: Free-text typed derivation in the reverse direction (German $\rightarrow$ English).
- **`syntax_builder` (slot e5)**: Sentence reconstruction from scrambled word bank tiles. **Anti-spoiler**: `sanitizedWordBank` automatically strips trailing punctuation (`.`, `?`, `!`) so full stops do not leak the final sentence word.
- **`shift_select`**: Generic multiple choice used for shift identification, article selection, and false friends.

### 7.3 Three-Tier Grading Evaluator (`src/lib/letter-diff.ts`)
Inputs are evaluated through a 7-stage accuracy pipeline:
1. **`exact` (Green / Spot on!)**: Character-for-character match.
2. **`almost` (Yellow / Almost right!)**: Triggers for:
   - Case difference (un-capitalized noun).
   - Missing umlaut or digraph substitution (`ae` for `ä`, `ss` for `ß`).
   - Missing or extra verb infinitive ending (`-en`, `-n`, bare stem vs. infinitive).
   - Missing or extra gender article (`Wasser` vs. `das Wasser`).
   - Single-character Levenshtein typo on words $\ge 4$ characters.
   - *Behavior*: Renders `SuccessFeedbackSheet` with user attempt struck through alongside standard German spelling. Counts as a pass, but queues the item for end-of-lesson reinforcement if caused by a typo or untolerated umlaut.
3. **`incorrect` (Red / Sound shift breakdown)**: Renders `ErrorFeedbackSheet` with a letter-by-letter diff highlighting substitutions and insertions in `--error-color`.

### 7.4 End-of-Lesson Reinforcement Queue
Missed exercises enter an inline **reinforcement phase** at the end of the Practice segment. The queue replays items with dedicated step dots (`w-6` active, `w-3` completed) and an informative banner. The queue must be completely drained before the Summary unlocks. Touching the queue forfeits the purple star for that lesson run.

---

## 8. Personalization, Typography & Audio Architecture

### 8.1 The Theme Engine (`src/data/themes.ts`)
- **187 Themes**: Complete port of the Monkeytype theme format, each declaring 8–10 CSS custom properties (`--bg-color`, `--main-color`, `--caret-color`, `--sub-color`, `--sub-alt-color`, `--text-color`, `--error-color`, `--error-extra-color`, `--colorful-error-color`, `--colorful-error-extra-color`).
- **Luma Detection**: `isColorDark()` runs a YIQ luma calculation (`(r*299 + g*587 + b*114)/1000 < 128`), correctly handling 3-, 6-, and 8-digit hex codes.
- **Contrast Auditing**: All 187 themes pass automated WCAG AA contrast floors on both `bg` and `subAlt`: text $\ge 4.5:1$, sub $\ge 4.2:1$, main $\ge 2.5:1$.
- **22 Popular Themes**: `serika_dark`, `carbon`, `nord`, `dracula`, `gruvbox_dark`, `catppuccin`, `monokai`, `matrix`, `botanical`, `milkshake`, `8008`, `solarized_dark`, `retro`, `taro`, `modern_ink`, `bingsu`, `cafe`, `arch`, `moonlight`, `shadow`, `laser`, `alduin` (default).
- **Contrast Override**: An opt-in `increasedContrast` setting lifts `--sub-color` and `--error-color` via `html[data-contrast="increased"]`.

### 8.2 The Font System (`src/data/fonts.ts`)
- **43 Typefaces**: Categorized into `sans`, `mono`, and `display`.
- **Self-Hosted Assets**: 42 `.woff2` files stored in `public/webfonts/` and declared via `@font-face` rules in `src/app/fonts.css`, served `immutable` for 1 year.
- **Dynamic Application**: Selected font ID is injected as `--font-app` on `<html>`. Default: `Lexend Deca`. `FontSelectorModal` previews each font live with sample text `"Wasser — Brücke & Sob"`.

### 8.3 The Dual Audio Engine
- **Pronunciation (`src/lib/audio.ts`)**: Browser-native `window.speechSynthesis` at `de-DE`, speech rate `0.92`, filtering for native `de` voices. Requires zero external audio assets, zero API keys, zero network latency. Embedded in `ShiftPair`, `WordCardDrawer`, and Review Hub (`R`/`A` hotkey).
- **Mechanical UI Clicks (`src/lib/sound.ts`)**: Web Audio sample player with 20 selectable click packs (e.g. Cherry MX Black ABS, Alpaca, Creams) and 4 error cues (155 `.wav` files under `public/sounds/`). Features a 24-buffer LRU cache, in-flight Promise deduplication, negative URL caching for 404s, and a synthetic oscillator fallback.

---

## 9. Settings & Monkeytype Typing Mechanics

The `/settings` page (`src/app/settings/page.tsx`, 748 lines) provides a 6-section preference panel with a `/`-to-focus search input:

### 9.1 Advanced Typing Input Mechanics
- **`stopOnError: "off" | "letter"`**: In typing inputs, intercepts keystrokes character-by-character. If the user attempts to type a letter that does not match the target at that cursor position, it immediately blocks input, triggers `playSoundOnError`, and refuses to enter the wrong character.
- **`confidenceMode: "off" | "on"`**: Disables the `Backspace` key in text inputs across lesson exercises and review typing, testing true recall confidence by preventing error erasure.
- **`capsLockWarning: boolean`**: Actively queries `e.getModifierState("CapsLock")` to render an animated pulsing warning (`<AlertCircle /> caps lock is on`) below inputs.
- **`quickRestart: "off" | "tab" | "esc"`**: Hotkey to instantly reset/restart the current exercise attempt.
- **`showCharBar: "always" | "on_focus" | "off"`**: Controls on-screen German character bar visibility.
- **Character Bar Focus Preservation**: `GermanCharBar.tsx:30` attaches `onMouseDown={(e) => e.preventDefault()}` to all umlaut buttons (`ä ö ü ß Ä Ö Ü`), preventing the input field from losing focus on click.

### 9.2 Data Resilience & Danger Zone
- **JSON Backup Export/Import**: Exports full state (`wordMastery`, `srsCards`, `completedLessons`, `lessonStars`, `settings`, `weeklyActivity`) to `brucke_backup_YYYY-MM-DD.json`. The importer validates structure, allow-lists review modes, strips `__proto__` keys, and recovers gracefully.
- **Danger Zone**: Independent buttons to reset customization settings back to `DEFAULT_SETTINGS` or completely wipe learning progress with a double-confirmation dialog.

---

## 10. Data Pipeline, Schemas & Security

### 10.1 Compendium Compilation Pipeline
- **Source**: `word_connections.md` at project root (hand-curated markdown dictionary).
- **Parser**: `scripts/parse-compendium.ts` (`bun run parse-data`, 12.6 KB) parses §1 shift rules, §2 vocabulary table, §3 compound calques, §4 false friends, and §5 daily insights.
- **Artifacts**: Generates `src/data/compendium.json` and `src/data/insights.json`.
- **Runtime**: `src/data/compendium.ts` derives the typed `wordList` consumed by all UI views.
- **Phonetics Lookup Tables (`src/data/phonetics.ts`)**: Supplies authoritative Duden/Wiktionary IPA strings for 39 compound calques (`COMPOUND_IPA`) and 16 false friends (`FALSE_FRIEND_IPA`), consumed by `src/lib/word-entities.ts` to replace generic placeholders.

### 10.2 Core Data Interfaces (`src/lib/types.ts`)
```ts
export interface WordEntity {
  id: string;
  target_word: string;
  english_cognate: string;
  english_meaning: string;
  gender: "der" | "die" | "das" | null;
  ipa: string;
  sound_shift_ids: string[];
  shift_rule: string;
  context_phrase: string;
  context_translation: string;
  etymology_derivation: string;
}

export interface Lesson {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  phase: number; // 1 (topics 1-8), 2 (topics 9-16), 3 (topics 17-30)
  shift_categories: string[];
  word_ids: string[];
  table_word_ids: string[];
  hook: LessonSection;
  pattern: LessonSection; // includes linguist_note string
  exercises: ExerciseItem[]; // exactly 5 exercises
  summary: {
    outcome: string;
    use_example: { german: string; english: string };
    takeaway: string;
    curiosity_teaser: string;
  };
}
```

### 10.3 Storage & Denial-of-Service Protections
- **Cookie Header Guard**: `src/lib/store.ts:191` caps the `brucke_progress` cookie at 2048 URL-encoded bytes. If user progress exceeds this bound, it degrades to a minimal `{ theme, font }` cookie, avoiding HTTP 431 Request Header Fields Too Large errors.
- **Prototype Pollution Shield**: `importBackupState` drops `__proto__` and constructor properties during JSON restore (`src/tests/store-security.test.ts:50`).
- **Input Length Cutoff**: `evaluateAnswerAccuracy` immediately rejects inputs $\ge 200$ characters without performing diff or Levenshtein matrix calculations, preventing quadratic CPU lockups on pasted inputs (`src/tests/diff-memory.test.ts:6`).
- **Levenshtein Length Clamping**: `getLevenshteinDistance` short-circuits if $|a.length - b.length| > 20$, using $O(N)$ rolling space rows.

---

## 11. Developer Tooling & Verification

### 11.1 Quality & Audit Scripts
- **`bun run trail` (`scripts/export-trail.ts`)**: Exports the complete 109-lesson curriculum into `TRAIL.md` (1,724 lines) in narrative order with hooks, takeaways, table words, and star gates.
- **`bun scripts/audit-teasers.ts`**: Automated linter verifying curriculum title drift (`LESSONS[i].title === shell.title`) and curiosity teaser keyword chaining to ensure each teaser points to the following node.
- **`bun scripts/contrast-audit.ts`**: WCAG contrast auditor and automated lightness fixer for all 187 Monkeytype themes.
- **`bun run parse-data` (`scripts/parse-compendium.ts`)**: Compiles `word_connections.md` into generated JSON files.

### 11.2 Automated Test Suite
The codebase is validated by **22 Vitest test files (312 tests)** under `src/tests/`, run via `bun run test`:
- `trail-map.test.ts`: 30 topics, 72 sprigs, 5 branches, 6 star gates, OR-join unlocks, star isolation.
- `themes.test.ts`: 187 themes count, YIQ luma classification, dark/light class toggles, WCAG AA contrast floors.
- `fonts.test.ts`: 43 fonts, category filters, CSS variable injection.
- `exercises.test.ts`: 5 exercises per lesson, $\ge 3$ distinct types, no cold typing start, punctuation stripping.
- `diff-memory.test.ts`: 200-char input cap, Levenshtein matrix clamp, 500-entry alignment cache cap.
- `keyboard-navigation.test.ts`: 1-9 tile keys, 1-N matching keys, Backspace unpick, Escape deselect, dialog focus trap.
- `compendium.test.ts`: 310 words floor, 9 shifts, 32 compounds, 16 false friends, 28 insights, valid IPA format.
- `store-security.test.ts`: 2048-byte cookie limit, prototype pollution protection, corrupted state recovery.
- `review-session-lifecycle.test.ts`: full review deck lifecycle and daily activity logging.
- `sound-cache.test.ts` & `sound.test.ts`: Web Audio LRU buffer cache, negative URL caching, oscillator fallback.

---

## 12. Non-Implemented Concepts & Future Roadmap

The following concepts were designed, discussed, or prototyped in historical drafts, but are **explicitly not implemented** in the current application:
1. **No PWA / Service Worker / Offline Sync**: No service worker, `next-pwa`, workbox, or web app manifest exists. Assets rely on standard browser caching and `immutable` HTTP headers.
2. **No Backend / Supabase / Cloud Auth**: The application is client-only. There is no PostgreSQL database, user account system, or cross-device cloud synchronization.
3. **No Analytics / Telemetry**: No PostHog, Google Analytics, or remote event logging exists. All state remains local to the user's browser.
4. **No Course Completion Celebration Screen**: Completing the final lesson returns the user to the home trail map. There is no dedicated completion milestone or decodable-sentence screen.
5. **No Push Notifications**: Daily insights rotate deterministically on the home page via date modulo arithmetic; there is no Web Push or browser notification API usage.
6. **No Adaptive Exercise Difficulty**: Exercise ordering within lessons is fixed and authored; no bonus challenges are dynamically injected based on streak count.
7. **No Multi-Language Trees**: The data schema and engine are single-language (`de`). Dutch, Swedish, and Old English trees remain future roadmap ambitions (`ambition.md`).
8. **Orphaned English Lemmatizer**: `src/lib/lemmatizer.ts` exports `lemmatizeEnglish`, an unintegrated utility preserved from when the real-time Decoder tool was removed in commit `04d3029`. It is not called by the active app.
