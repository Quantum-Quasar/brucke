# Brücke — Codebase Audit Manifest & System Architecture Reference

> **Corrected copy — verified against the implementation on 2026-09-30.**
> The original append-only version is preserved verbatim in `old documentation/`.
> Every correction applied here, with its `path:line` evidence, is listed in [`CORRECTIONS.md`](./CORRECTIONS.md).

> **Auditor Quickstart**: This document is the primary reference manifest for any AI agent or human engineer conducting a comprehensive audit of the Brücke codebase. It outlines the project's locations, design goals, functional specifications, data schemas, invariants, and verification steps.

---

## 1. Project Locations & Working Directories

| Role | Path | Description |
|---|---|---|
| **Primary Codebase (Working Dir)** | `.` (project root) | Complete Next.js 16 + React 19 + TypeScript + Bun application. All source code, tests, and build scripts live here. |
| **Master Design & Reference Archive** | `documented docs/` | Master design document (`german_learning_platform_design-final.md`, numbered sections 0–24), this manifest, the trail map spec, the README, and the content-agent prompt. |
<!-- corrected 2026-09-30: was "docs/" — that directory no longer exists -->
| **Original Append-Only Documents** | `old documentation/` | Verbatim pre-correction copies of the trail map spec, content-agent prompt, and master design document. |
| **Current Design Document** | `documented docs/german_learning_platform_design-final.md` | The 25-section (0–24) master design specification, maintained alongside this manifest. |
<!-- corrected 2026-09-30: was "docs/german_learning_platform_design-final.md", described as a "16-section" spec -->

---

## 2. Executive Product Concept: What Brücke Does

**Brücke** ("Bridge") is an etymological, sound-shift-based German learning platform for English speakers. 

### Core Pedagogical Premise
English and German are sibling West Germanic languages sharing over 60% of core vocabulary. High German underwent the **Second (High German) Consonant Shift** between 500–800 AD, altering specific consonants in predictable patterns (e.g. $TH \rightarrow D$, $P \rightarrow FF/PF$, $T \rightarrow SS/S/Z$, $K \rightarrow CH$). Rather than forcing brute-force vocabulary memorization, Brücke teaches English speakers to **reverse-engineer German words from the English words they already speak every day**.

### Core Philosophy: The "Pony-tail" Lean Architecture
- **Zero Heavy Framework Bloat**: No Radix UI, Headless UI, Framer Motion, Axios, or Lodash. The entire runtime dependency list is `next`, `react`, `react-dom`, `zustand`, and `lucide-react` (icons only). Standard web platform APIs, Tailwind CSS v4, and minimal custom primitives.
<!-- corrected 2026-09-30: was silent on lucide-react, the one third-party runtime dependency -->
- **100% Client-Side Fast + SSG**: All app routes build to pre-rendered static HTML (`● SSG`). Zero server execution latency at runtime.
- **Offline Durability**: Local state persists across sessions via dual-storage: primary `localStorage` with a fallback cookie backup.

---

## 3. Four Core Functional Pillars

### Pillar 1: The Lesson Trail (`/trail/[id]`)
<!-- corrected 2026-09-30: was "The Trail (`/trail` and `/trail/[id]`)" — `/trail` is a redirect, not a page -->
- **Curriculum Scope**: a 30-topic syllabus in 3 phases (phase 1 = topics 1–8, phase 2 = topics 9–16, phase 3 = topics 17–30), delivered as a node map of 30 core lessons + 72 sprigs + 5 branches (7 branch lessons) = **109 authored lessons**. Every core, sprig, and branch lesson is fully authored and fully interactive — there are no hollow shells left on the map.
<!-- corrected 2026-09-30: was "30-lesson syllabus in 5 evolutionary phases. Lessons 1–10 are currently fully interactive." -->
- **6 Exercise Types** (`ExerciseType`): `morpheme_tiles`, `matching_pairs`, `shift_select`, `syntax_builder`, `derive`, `reverse_cognate`.
- **5-Segment Card-by-Card Wizard (`LessonReader.tsx`)**:
  1. **Part 01: The Hook**: Historical intuition and living English cognate framing.
  2. **Part 02: The Pattern**: Mechanical shift rules, suffix patterns (`-en`), with margin philological notes.
  3. **Part 03: Transformation Table**: Interactive `ShiftPair` grid highlighting shifted letters in the active theme's `--main-color` and target words in `--text-color`. Includes a bridge card to the Sound Shift Atlas (`/atlas/[family]`).
<!-- corrected 2026-09-30: was "highlighting shifted letters in cyan and target words in amber" — highlighting is now theme-variable driven -->
  4. **Part 04: Interactive Practice**: Exactly **ONE bite-sized problem mounted at a time** with Duolingo-style progress indicator dots. Starting exercises are never cold typing — enforced for **every** lesson in `LESSONS`, which must open with `morpheme_tiles`, `matching_pairs`, or `shift_select` (`src/tests/exercises.test.ts:10`). Features explicit vocabulary hint chips (`vocab_hints`) for auxiliary words (e.g. `mit`).
<!-- corrected 2026-09-30: was scoped to "starting exercises"; the invariant now runs across all 109 lessons -->
  5. **Part 05: Summary & Retries**: Key takeaway, curiosity teaser, Sound Shift Atlas deep-dive link, and an end-of-lesson **Retry Queue** ensuring 100% mastery before completion. Any exercise that enters the retry queue permanently forfeits the lesson's purple star.

### Pillar 2: Sound Shift Atlas (`/atlas` and `/atlas/[family]`)
- **Visual Exploration**: Radial spatial spoke constellation visualization connecting English cognate seeds to German words.
- **Scope**: 9 shift families, of which 7 are consonant shifts and 2 are morphological layers (`src/data/compendium.json`):
  1. $TH \rightarrow D$ — *The Dental Shift* (`th_to_d`, 33 words): `think` → `denken`, `thank` → `danken`.
  2. $D \rightarrow T$ — *The Stop Shift* (`d_to_t`, 27 words): `day` → `Tag`, `door` → `Tür`.
  3. $P \rightarrow PF / F$ — *The Labial Shift* (`p_to_pf_f`, 28 words): `deep` → `tief`, `drop` → `Tropfen`.
  4. $T \rightarrow S / SS / Z$ — *The Sibilant Shift* (`t_to_s_ss_z`, 43 words): `that/the` → `das`, `plant` → `Pflanze`.
  5. $K / C \rightarrow CH$ — *The Velar Shift* (`k_to_ch`, 28 words): `thatch` → `Dach`, `make` → `machen`.
  6. $V / F \rightarrow B$ — *The Bilabial Shift* (`v_to_b`, 19 words): `thief` → `Dieb`, `drive` → `treiben`.
  7. $Y / GH \rightarrow G / CH$ — *The Palatal & Guttural Link* (`y_gh_to_g_ch`, 27 words): `through` → `durch`, `day` → `Tag`.
  8. $-ate / -ize \rightarrow -ieren$ — *The Latin / Romance Layer* (`latin_ieren`, 15 words): `study` → `studieren`, `organize` → `organisieren`.
  9. *Ablaut Vowels* — *The 7 Strong Verb Classes* (`strong_verbs_ablaut`, 20 words): `find` → `finden`, `come` → `kommen`.
<!-- corrected 2026-09-30: the old 9-item list was fictional — it omitted `-ieren` and Ablaut, split `V/W→B`, `F→B`, `Y→G`, and `GH→CH` into four phantom families, and mislabelled `P→FF`, `T→ß`, and `Y→G` as standalone families -->
- **Interactive Drill**: 5-question modal practice drill per constellation family (`BranchDrillModal.tsx`, first 5 words of the family).

### Pillar 3: Spaced Repetition Review Hub (`/review`)
- **Algorithm**: Unified SuperMemo SM-2 interval scheduler (`src/lib/srs.ts`) tracking repetitions, ease factors, lapses, intervals, and due dates. Grades are `1` (Again), `3` (Hard), `4` (Good), `5` (Easy).
- **5 Playable Decks** (`DeckType` = `due`, `shift`, `weakest`, `recent`, `compounds`):
  1. **Due Today Deck**: Spaced repetition queue filtered by algorithmic due date.
  2. **By Shift Family Deck**: Filterable practice by individual consonant shift.
  3. **Weakest Words Deck**: High-lapse words requiring immediate consolidation.
  4. **Recent Lessons Deck**: Quick reinforcement over the first 20 compendium words (`data.wordList.slice(0, 20)`).
<!-- corrected 2026-09-30: was "the last 20 words encountered on The Trail" — the deck slices the head of the compendium word list, it does not track a recency order -->
  5. **Compound Calques & Traps Deck**: 48 specialized cards covering 32 compound calques (*Handschuh*, *Kühlschrank*, *Flugzeug*) and 16 false friend traps (*Gift*, *bald*, *bekommen*).
- **4 Selectable Review Styles** (`ReviewMode`):
  - `flashcard` (Quick Flip): Recall in mind $\rightarrow$ Space/Enter reveals $\rightarrow$ 1–4 SM-2 grade.
  - `mcq` (Multiple Choice): Pick target word from 4 options (hotkeys 1–4).
  - `tiles` (Tile Builder): Assemble morphemes into words (mouse click or desktop keyboard typing + Backspace).
  - `typing` (Derivation Typing): Type full derivation with on-screen umlaut bar.
- **Active Recall Shield**: Front card hides gender article badges, displaying neutral placeholder `Gender: [ der / die / das ? ]` to avoid leaking answers before recall. Full color badge and pronunciation reveal on card flip.
- **Review Style Prompt**: Deck launch opens a four-style selector before the session; styles can also be changed mid-session via the header dropdown.

### Pillar 4: The Baba-Style Trail Map (`/` — the app's home page)
<!-- added 2026-09-30: the manifest had no pillar for the shipped trail map at all -->
- **The map is `/`**. `src/app/page.tsx` renders a compact header (gold star chip + purple star chip), a `DailyInsightCard` (rotates by day-of-month over the 28 insights), and `<TrailMap />`. `/trail` is a three-line server component that `redirect("/")`. There is no streak-stats dashboard.
- **Graph model** (`src/lib/trail-map.ts`, pure and deterministic):
  - **30 cores** — one main-line lesson per topic; `core(n)` is chained to `core(n+1)`. Cores reuse the topic id (1–30).
  - **72 sprigs** — optional side lessons of the same topic, all attached directly to their own core (`sprigId(topicId, index) = topicId * 100 + index`). Because they hang off the core rather than chaining, every sprig is individually skippable.
  - **5 branches / 7 branch lessons** — support-material mini paths of 1–2 lessons, branch ids `5000 + n * 10` with lessons at `+1`, `+2`, each hanging off an attach core (topics 2, 5, 9, 19, and 27).
  - **Unlock rule (Baba OR-join)**: a node unlocks as soon as **any** adjacent node is completed; only the very first node is unconditionally available. The core chain is the only strict sequence.
- **Deterministic layout** (`buildTrailLayout(width)`): nodes are authored top-down and the whole map is flipped so topic 1 sits at the bottom and later topics climb upward. A gentle serpentine swings the spine sideways on wide canvases; sprigs fan out left, then right, then a second row; branches chain horizontally on the freer side, falling back to below. Same width in, same map out — the `TrailMap` component measures its container with a `ResizeObserver` and re-lays out.
- **Star gates**: 6 gates (`TRAIL_GATES`) rendered as checkpoint pills on the spine between topic families. Each gate counts stars earned **only inside its own stretch** and blocks every later topic until the threshold is met. The first closed gate at or before a node's topic locks that node, and the spine edge crossing a closed gate goes dark.
  <!-- corrected 2026-09-30: the six gates, their per-stretch thresholds, and the stretch-local counting rule were entirely undocumented -->
  | # | Gate | Closes after topic | Stretch topics | Lessons in stretch | Required ★ |
  |---|---|---|---|---|---|
  | 1 | The Shift Gate | 7 | 1–7 | 25 | 14 |
  | 2 | The Grammar Gate | 10 | 8–10 | 10 | 6 |
  | 3 | The Verb-Complex Gate | 16 | 11–16 | 20 | 11 |
  | 4 | The Past Gate | 20 | 17–20 | 17 | 9 |
  | 5 | The Atlas Gate | 26 | 21–26 | 20 | 11 |
  | 6 | The Capstone Gate | 29 | 27–29 | 13 | 9 |

  Thresholds sit deliberately between the stretch's core count (minimum) and its total lesson count (maximum), so clearing a gate requires side lessons too.
- **Star mechanic (`LessonStar = "gold" | "purple"`)**: every completed lesson earns a star. `LessonReader` calls `completeLesson(lesson.id, { perfect: !everQueued })`, where `everQueued` latches true the moment any exercise enters the retry queue. A flawless first-try run therefore earns the **purple** star; purple is never downgraded to gold on a later replay, and `resetProgress` clears stars along with progress. `LessonProgress.everQueued` is persisted per lesson.
<!-- added 2026-09-30: the purple-star mechanic and its retry-queue dependency were undocumented -->
- **Recommendation & drawers**: `getTrailState` returns a `recommendedId` — the next authored spine core; failing that, the nearest available core or sprig walking down from the top of the map; failing that, leftover branch lessons. It is never a locked node. `TrailMap` auto-scrolls the recommendation into view once per mount, and opens `LessonNodeDrawer` (node detail plus a "unlocks when you complete any adjacent lesson" hint) or `GateDrawer` (the gate's rationale) on click.

---

## 4. Supporting Systems & Ergonomics

1. **3-Color Grammatical Gender System (`src/lib/gender.ts`, `GenderBadge.tsx`)**:
   - `der` (Masculine): Azure Blue — dot `#60A5FA`, badge `text-blue-700 dark:text-blue-300 bg-blue-500/10 dark:bg-blue-500/15 border-blue-500/30`
   - `die` (Feminine): Vivid Rose — dot `#FB7185`, badge `text-rose-700 dark:text-rose-300 bg-rose-500/10 dark:bg-rose-500/15 border-rose-500/30`
   - `das` (Neuter): Emerald Green — dot `#34D399`, badge `text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/30`
<!-- corrected 2026-09-30: was `#0ea5e9` / `#f43f5e` / `#10b981` with unpaired sky/rose/emerald classes — the palette is now light/dark-paired so it stays legible under all 187 themes -->
   - Introduced via an educational dismissible banner (`GenderGuideBanner.tsx`) and onboarding.
2. **Zero-Dependency Native Speech Synthesis (`src/lib/audio.ts`)**:
   - Uses `window.speechSynthesis` with `de-DE` locale, German voice matching, and `0.92x` learner pace.
   - Zero MP3 bundles, zero cloud API keys, zero network latency.
   - Embedded speaker buttons on `ShiftPair`, `WordCardDrawer`, and the Review Hub card, plus the `[R]` / `[A]` hotkey in `/review`.
<!-- corrected 2026-09-30: `LessonReader` has no speaker button — `playGermanAudio` is called from exactly three components -->
3. **Desktop Keyboard First Ergonomics**:
   - `1`, `2`, `3`, `4`: Select MCQ / tile / matching-pair options, or grade SM-2 cards (Again, Hard, Good, Easy).
   - `Space` / `Enter`: Reveal cards, advance lesson segments, check answers.
   - `Backspace` / `ArrowLeft`: Unpick tiles or the current word bank token in exercises; step back one lesson segment on the Hook → Pattern → Table path.
   - `[a-z, ä, ö, ü, ß]`: Type directly to snap matching tiles in Tile Builder.
   - `[R]` / `[A]`: Replay native German pronunciation audio (`/review` only).
   - `Escape`: Cleanly exit review sessions and dismiss drawers/modals.
   - `Tab`: Quick-restart the current review card, per the `quickRestart` setting (`off` / `esc` / `tab`, default `tab`; `esc` only fires once the card is revealed).

4. **Personalization Layer — Themes, Fonts, Settings, Sound**:
<!-- added 2026-09-30: the manifest documented none of the personalization layer -->
   - **187 themes** (`src/data/themes.ts`): the full Monkeytype colour set, each a `MonkeytypeTheme` record of 8–10 CSS variables. `THEME_LIST` derives `ThemeMeta` (adds `id`, `name`, `isDark` via `isColorDark`, which correctly handles 3-, 6-, and 8-digit hex). `applyTheme` injects CSS custom properties onto `documentElement` and toggles the `dark` / `light` class; `POPULAR_THEMES` holds the curated picks; `filterThemes(query, tab)` backs the popular/all/dark/light tabs. Default theme: `alduin`. `THEME_VARS_CACHE_KEY` (`brucke_theme_vars`) caches the variable map, and an inline script in `layout.tsx` applies the stored theme before paint to avoid a flash. Tests pin WCAG contrast floors across all 187 themes.
   - **43 fonts** (`src/data/fonts.ts`): `FONT_LIST` of `FontMeta` entries categorized `mono` / `sans` / `display`, backed by 42 `.woff2` files in `public/webfonts` and `@font-face` rules in `src/app/fonts.css` (the `assets-and-routes` suite cross-checks every non-system font against both). Default font: `Lexend_Deca`. `applyFont` swaps the font variable; `filterFonts(query, tab)` backs the all/mono/sans/display tabs.
   - **Settings hub** (`/settings`, `src/data/settings.ts`): six sections — behavior, input, sound, theme, visibility, danger zone — over the `CustomizationSettings` interface: `quickRestart`, `lazyMode`, `capitalizationTolerance`, `stopOnError`, `confidenceMode`, `showCharBar`, `soundVolume`, `playSoundOnClick`, `playSoundOnError`, `showKeyTips`, `capsLockWarning`, `showMasteryCounter`, `increasedContrast`. `DEFAULT_SETTINGS` supplies every default; `applyAppearanceSettings` toggles the `data-contrast="increased"` attribute on the document root. The danger zone exports a JSON backup (settings + SRS schedules + mastery) and imports one back via `importBackupState`, alongside `resetSettings`.
   - **Sound engine** (`src/lib/sound.ts`): a zero-dependency Web Audio **sample** player (not a synthesizer). 20 click packs and 4 error cues are bundled as `.wav` files under `public/sounds/`, selected by id from `SOUND_CLICK_OPTIONS` / `SOUND_ERROR_OPTIONS`. `SoundEngine` lazily creates one `AudioContext`, caches up to 24 decoded `AudioBuffer`s, in-flight-load deduplication via a `Promise` map, and a negatively-cached `failedUrls` set so a 404 is never re-fetched. `next.config.mjs` marks `/sounds/*` and `/webfonts/*` `immutable, max-age=31536000`. Default: Cherry MX Black ABS clicks, "damage" errors, volume 0.5.
<!-- corrected 2026-09-30: the manifest previously implied the only audio was speech synthesis -->
   - **Modals & code splitting**: `layout.tsx` dynamically imports `WordCardDrawer`, `OnboardingModal`, `ThemeSelectorModal`, and `FontSelectorModal` with `ssr: false` so the 253KB compendium and the 187-theme table stay out of the root chunk.

5. **Monkeytype-Inspired Typing Input Mechanics (`src/data/settings.ts`, `ExerciseWidgets.tsx`, `review/page.tsx`)**:
   - `stopOnError: "letter"`: intercepts typing on every keystroke; if the next character does not match the target at the cursor position, it triggers `playSoundOnError` and prevents the incorrect character from being entered.
   - `confidenceMode: "on"`: disables the `Backspace` key in text inputs across both lesson exercises and the Review Hub, forcing learners to submit their first recall attempt.
   - `capsLockWarning: boolean`: monitors `e.getModifierState("CapsLock")` to render an animated pulsing alert (`<AlertCircle /> caps lock is on`) below inputs.
   - `quickRestart: "off" | "tab" | "esc"`: hotkey to instantly reset/restart the current exercise attempt.
   - `showCharBar`: controls German char bar visibility (`always` | `on_focus` | `off`).
   - `showKeyTips`: toggles visible numbered keycap indicators (`[1]`, `[Enter]`).
   - `showMasteryCounter`: toggles TopNav word mastery counter (`N / 310 mastered`).

6. **Cross-Tab Real-Time Sync & Pre-Paint Head Boot (`src/app/layout.tsx`)**:
   - `window.addEventListener("storage", handleStorage)` monitors `STORAGE_KEY`; completing a lesson, recording a review, or changing themes in one tab automatically re-hydrates all other open browser tabs in real-time.
   - Synchronous inline `<script>` in `<head>` restores theme, font, and contrast attributes before first DOM paint, avoiding FOUC.
   - `<meta name="darkreader-lock" />` in `<head>` blocks Dark Reader browser extensions from altering calibrated theme colors.

7. **Denial-of-Service, ReDoS & Anti-Spoiler Protections**:
   - 200-character input limit in `evaluateAnswerAccuracy` (`src/lib/letter-diff.ts:114`) immediately rejects long pastes before diffing, preventing quadratic Levenshtein matrix calculations and ReDoS lockups.
   - Levenshtein matrix clamping when length difference exceeds 20 characters, with rolling $O(N)$ space allocation.
   - 500-entry LRU cache limit in `shift-annotator.ts` (`alignShiftPair`).
   - Matching pairs row offset (`ExerciseWidgets.tsx:51-57`): 1-row cyclic shift prevents English and German cards from aligning horizontally opposite each other.
   - Punctuation stripping (`sanitizedWordBank` in `ExerciseWidgets.tsx:59-62`): strips trailing periods and question marks from tiles so the final sentence word cannot be deduced from full stops.
   - Active recall front-card gender shield (`review/page.tsx:735`): hides the color-coded `GenderBadge` behind `Gender: [ der / die / das ? ]` until card flip.

8. **Developer Quality Scripts & Phonetics Tables**:
   - `scripts/export-trail.ts` (`bun run trail`): exports the entire 109-lesson trail into `TRAIL.md` (1,724 lines).
   - `scripts/audit-teasers.ts`: automated linter verifying curriculum title drift and curiosity teaser keyword chaining to the next node.
   - `scripts/contrast-audit.ts`: calculates relative luminance and WCAG contrast on `bg` and `subAlt` for all 187 themes, nudging lightness while preserving hue/sat, and generated `POPULAR_THEMES`.
   - `scripts/parse-compendium.ts`: compiles `word_connections.md` into both `src/data/compendium.json` and `src/data/insights.json`.
   - `src/data/phonetics.ts`: authoritative Duden/Wiktionary IPA phonetic transcriptions for 39 compound calques (`COMPOUND_IPA`) and 16 false friend traps (`FALSE_FRIEND_IPA`), consumed by `src/lib/word-entities.ts:38,55` to override generic placeholders.
   - `src/lib/lemmatizer.ts`: an **English** lemmatizer (`lemmatizeEnglish`) normalizing irregular verbs and plurals; unintegrated utility with unit tests in `src/tests/lemmatizer.test.ts` (preserved from removed Decoder tool).
---

## 5. File Structure & Component Map

<!-- corrected 2026-09-30: tree root was "/home/shaurya/gemini-tmp/german-app-2/"; the subtree omitted app/atlas, /about, /settings, error.tsx, fonts.css, components/trail, components/settings, the theme/font components, seven lib modules, and eight data files -->
```
/home/shaurya/gemini-tmp/german-app-2-new-ui/
├── package.json               # Next 16.3.4, React 19.2.8, Tailwind v4, Zustand 5, Vitest 5, lucide-react, Bun
├── next.config.mjs            # Strict mode, lucide-react tree-shaking, immutable cache headers for /sounds + /webfonts
├── postcss.config.mjs         # Tailwind v4 PostCSS plugin
├── tsconfig.json              # TypeScript config with '@/*' path aliases
├── vitest.config.ts           # Vitest: node environment, globals, '@' alias to ./src
├── bun.lock
├── word_connections.md        # Source markdown dictionary consumed by scripts/parse-compendium.ts
├── public/
│   ├── sounds/                # 20 click packs + 4 error cue packs of .wav samples (plus 2 legacy one-shots)
│   └── webfonts/              # 42 bundled .woff2 files backing FONT_LIST
├── documented docs/           # Design & audit documents (incl. this manifest and CORRECTIONS.md)
├── old documentation/         # Verbatim pre-correction copies of the original documents
├── scripts/
│   ├── parse-compendium.ts    # Parses word_connections.md into src/data/compendium.json
│   ├── export-trail.ts        # Dumps the whole trail to a readable TRAIL.md guide
│   ├── audit-teasers.ts       # Trail-chain audit: title drift + curiosity-teaser chain check
│   └── contrast-audit.ts      # One-off WCAG contrast audit & fixer for src/data/themes.ts
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root HTML structure, dark background, TopNav & BottomNav,
│   │   │                      #   storage hydration, inline pre-paint theme script, dynamic modal imports
│   │   ├── page.tsx           # Home = the trail map: gold/purple star chips, DailyInsightCard, <TrailMap/>
│   │   ├── error.tsx          # Global route error boundary
│   │   ├── about/page.tsx     # Static "how Brücke works" explainer with shift samples
│   │   ├── settings/page.tsx  # Personalization hub: 6 sections of SettingItem rows
│   │   ├── globals.css        # Tailwind v4 theme, CSS custom properties, font setup
│   │   ├── fonts.css          # @font-face declarations for the bundled webfonts
│   │   ├── icon.svg           # App icon
│   │   ├── trail/
│   │   │   ├── page.tsx       # redirect('/') — the map is the homepage
│   │   │   └── [id]/page.tsx  # Server component; generateStaticParams() over every authored lesson
│   │   ├── atlas/
│   │   │   ├── page.tsx       # Atlas index: searchable grid of the 9 shift families
│   │   │   └── [family]/page.tsx # Server component exporting generateStaticParams()
│   │   └── review/
│   │       └── page.tsx       # Multi-modal SRS Review Hub with 4 styles & 5 decks
│   ├── components/
│   │   ├── common/
│   │   │   ├── ShiftPair.tsx          # Memoized cognate pair with letter highlights & audio
│   │   │   ├── GenderBadge.tsx        # Memoized 3-color gender indicator pill
│   │   │   ├── GenderGuideBanner.tsx  # Educational dismissible gender color guide
│   │   │   ├── WordCardDrawer.tsx     # Slide-over word detail sheet with etymology & audio
│   │   │   ├── GermanCharBar.tsx      # One-click umlaut & eszett input chips
│   │   │   ├── DailyInsightCard.tsx   # Dashboard cultural insight widget
│   │   │   ├── OnboardingModal.tsx    # 4-step interactive first-time onboarding modal
│   │   │   ├── ThemeSelectorModal.tsx # Full-screen 187-theme picker with search & category tabs
│   │   │   ├── FontSelectorModal.tsx  # Full-screen 43-font picker with live preview
│   │   │   ├── ThemeDropdown.tsx      # Compact theme switcher in the TopNav
│   │   │   └── DonutChart.tsx         # SVG progress breakdown ring (used by the Atlas index)
│   │   ├── lesson/
│   │   │   ├── LessonDetailClient.tsx # Client boundary for [id]/page.tsx
│   │   │   ├── LessonReader.tsx       # 5-segment wizard container with progress bar & Atlas bridge
│   │   │   ├── ProgressBar5.tsx       # 5-segment interactive step navigation bar
│   │   │   ├── ExerciseWidgets.tsx    # All 6 exercise types: morpheme tiles, matching pairs,
│   │   │   │                          #   shift select, syntax builder, derive, reverse cognate
│   │   │   ├── SuccessFeedbackSheet.tsx # Explicit answer meaning & explanation sheet
│   │   │   ├── ErrorFeedbackSheet.tsx # Letter-by-letter diff comparison sheet
│   │   │   └── RetryQueue.tsx         # End-of-lesson reinforcement queue (sets everQueued → forfeits purple)
│   │   ├── trail/
│   │   │   ├── TrailMap.tsx           # The map: SVG node graph, gates, edges, decorations, drawers
│   │   │   └── LessonNodeDrawer.tsx   # Node detail drawer + the GateDrawer for star gates
│   │   ├── settings/
│   │   │   └── SettingItem.tsx        # Reusable labelled settings row (toggle / select / slider / file)
│   │   ├── atlas/
│   │   │   ├── ConstellationDetailClient.tsx # Client boundary for [family]/page.tsx
│   │   │   ├── RadialConstellation.tsx       # SVG radial spoke graph with animated nodes
│   │   │   └── BranchDrillModal.tsx          # 5-question shift practice drill modal
│   │   └── navigation/
│   │       ├── TopNav.tsx             # Desktop top navigation header + theme dropdown
│   │       └── BottomNav.tsx          # Mobile bottom tab navigation bar (5 tabs: trail, atlas, review, settings, about)
│   ├── lib/
│   │   ├── types.ts           # Core TypeScript interfaces & domain types
│   │   ├── store.ts           # Zustand store, mastery state machine, star & progress state, dual persistence
│   │   ├── srs.ts             # SuperMemo SM-2 spaced repetition calculation engine
│   │   ├── gender.ts          # Color mapping & metadata for der / die / das
│   │   ├── shift-annotator.ts # Memoized letter-by-letter consonant shift aligner (500-entry LRU-ish Map)
│   │   ├── review-modes.ts    # Question generator for MCQ, Tile Builder, and Typing
│   │   ├── lemmatizer.ts      # English inflection normalizer (verbs, nouns, participles)
│   │   ├── letter-diff.ts     # Character-by-character typo alignment & diffing (200-char input cutoff)
│   │   ├── audio.ts           # Web Speech API German speech synthesis wrapper
│   │   ├── sound.ts           # Web Audio sample engine for click & error sounds (24-buffer cache)
│   │   ├── trail-map.ts       # Baba-style map engine: graph, layout, unlock + gate state, recommendation
│   │   ├── word-entities.ts   # WORD_LESSON_MAP + WORD_ENTITY_MAP unified lookup (incl. compounds & traps)
│   │   ├── appearance.ts      # Applies the increased-contrast document attribute
│   │   └── use-dialog-focus.ts# Focus trap / initial focus hook for modals and drawers
│   ├── data/
│   │   ├── compendium.json    # 310 words, 9 shifts, 32 compounds, 16 false friends, 28 insights
│   │   ├── compendium.ts      # Typed wrapper deriving wordList from the words map at runtime
│   │   ├── curriculum.ts      # TOPICS (30 clusters), TRAIL_BRANCHES (5), TRAIL_GATES (6) & node helpers
│   │   ├── lessons.ts         # All 109 authored lessons (30 cores + 72 sprigs + 7 branch)
│   │   ├── themes.ts          # 187 Monkeytype themes, contrast helpers, applyTheme
│   │   ├── fonts.ts           # 43 Monkeytype fonts, filtering, applyFont
│   │   ├── settings.ts        # CustomizationSettings type + DEFAULT_SETTINGS
│   │   ├── phonetics.ts       # COMPOUND_IPA & FALSE_FRIEND_IPA lookup tables
│   │   └── insights.json      # 28 daily insight cards
│   └── tests/                 # 22 test suites, 152 test cases (Vitest, via `bun run test`)
│       ├── store.test.ts
│       ├── store-security.test.ts
│       ├── exercises.test.ts
│       ├── trail-map.test.ts
│       ├── themes.test.ts
│       ├── fonts.test.ts
│       ├── settings.test.ts
│       ├── sound.test.ts
│       ├── sound-cache.test.ts
│       ├── diff-memory.test.ts
│       ├── keyboard-navigation.test.ts
│       ├── review-session-lifecycle.test.ts
│       ├── assets-and-routes.test.ts
│       ├── letter-diff.test.ts
│       ├── lemmatizer.test.ts
│       ├── review-modes.test.ts
│       ├── gender.test.ts
│       ├── compendium.test.ts
│       ├── review.test.ts
│       ├── audio.test.ts
│       ├── srs.test.ts
│       └── shift-annotator.test.ts
```
<!-- corrected 2026-09-30: was "21 test suites, 119 automated tests" with a 10-file listing; the real suite is 22 files / 152 cases -->

---

## 6. Key Data Entities & Schemas (`src/lib/types.ts`)

- **`WordEntity`**: Primary vocabulary item. Fields: `id`, `target_word`, `english_cognate`, `english_meaning`, `gender` (`der` | `die` | `das` | `null`), `ipa`, `sound_shift_ids`, `shift_rule`, `context_phrase`, `context_translation`, `etymology_derivation`.
<!-- corrected 2026-09-30: dropped `lesson_index` — it does not exist on the type. Lesson membership is expressed through `Lesson.word_ids` / `Lesson.table_word_ids`, and `WORD_LESSON_MAP` in `src/lib/word-entities.ts` derives a word → lesson mapping from the lesson data itself -->
- **`ShiftFamily`**: Consonant shift definition. Fields: `id`, `name`, `symbol`, `phonetic_rule`, `historical_linguistics`, `philological_note`, `literature_source`, `word_ids`.
- **`SRSCard`**: Spaced repetition tracking card. Fields: `word_id`, `interval`, `repetitions`, `ease_factor`, `due_date`, `lapses`, `last_reviewed`.
- **`Lesson`**: Curriculum unit. Fields: `id`, `slug`, `title`, `subtitle`, `phase`, `shift_categories`, `word_ids`, `hook`, `pattern`, `table_word_ids`, `exercises`, `summary`.
- **`CompoundCalque`**: Transparent compound nouns. Fields: `id`, `compound`, `gender`, `literal_morphemes`, `real_meaning`, `english_counterpart`, `lore`.
- **`FalseFriend`**: Deceptive cognate traps. Fields: `id`, `german_word`, `looks_like`, `actual_meaning`, `trap_note`.

### Supporting Types
<!-- added 2026-09-30: the following were undocumented -->
- **`LessonShell`**: A node placeholder on the map. Fields: `id`, `title`, `plan`, `authored?`.
- **`TopicCluster`**: One topic on the map. Fields: `id` (1–30, equal to the core id), `title`, `blurb`, `core` (`LessonShell`), `sprigs` (`LessonShell[]`).
- **`TrailBranch`**: A support-material mini path. Fields: `id`, `attach` (the node it hangs from), `title`, `blurb`, `lessons` (`LessonShell[]`, ordered).
- **`TrailGate`**: A star gate. Fields: `id`, `afterTopic`, `requiredStars`, `title`, `why`.
- **`LessonStar`**: `"gold" | "purple"`.
- **`LessonSection`**: A prose block. Fields: `title`, `content`, `footnotes?` (`{marker, title, content}[]`), `linguist_note?`.
- **`VocabHint`**: An auxiliary-word hint chip. Fields: `word`, `translation`, `note?`.
- **`MatchingPairItem`**: One matching-pairs card half. Fields: `id`, `english`, `german`.
- **`DailyInsight`**: A dashboard insight. Fields: `day`, `german_expression`, `english_meaning`, `cultural_etymology`, `takeaway_principle`.
- **`CompendiumData`**: The runtime compendium bundle. Fields: `words` (`Record<string, WordEntity>`), `wordList`, `shifts` (`Record<string, ShiftFamily>`), `compounds`, `falseFriends`, `dailyInsights`.

### Type Aliases
- **`Gender`** = `"der" | "die" | "das"`.
- **`MasteryState`** = `"unexplored" | "explored" | "encountered" | "mastered"`.
- **`ReviewMode`** = `"flashcard" | "mcq" | "tiles" | "typing"`.
- **`LessonSegment`** = `"hook" | "pattern" | "table" | "practice" | "summary"`.
- **`ExerciseType`** = `"morpheme_tiles" | "matching_pairs" | "shift_select" | "syntax_builder" | "derive" | "reverse_cognate"`.
- **`LessonProgress`**: Fields: `segment`, `practiceIndex`, `completedSegments`, `everQueued?` — **`everQueued` is the purple-star gate**: once true, the lesson can only ever earn a gold star.
- **`ExerciseItem`**: Fields: `id`, `type`, `prompt`, `target_answer`, plus optional `english_hint`, `shift_hint`, `meaning`, `vocab_hints`, `options`, `tile_options`, `target_tiles`, `matching_pairs`, `word_bank`, `explanation`.
- **`TOTAL_COMPENDIUM_WORDS`** = `310`.

---

## 7. Performance & Resource Optimization Highlights

1. **100% Pre-rendered Static Site Generation (SSG)**:
   - Dynamic parameter routes `/atlas/[family]` (9 pages) and `/trail/[id]` (one page per authored lesson — 109) export `generateStaticParams()`.
   <!-- corrected 2026-09-30: was "/trail/[id] (5 pages)" -->
   - With the 6 static routes (`/`, `/about`, `/atlas`, `/review`, `/settings`, `/trail`), the build emits **well over 100 static pages**, not 28. Navigation between lessons and atlas families is instantaneous with zero runtime server latency.
   - `layout.tsx` dynamically imports the four heavy modals with `ssr: false`, keeping the 253KB compendium and 187-theme table out of the root chunk.
2. **Shift Alignment Memoization**:
   - `alignShiftPair` in `src/lib/shift-annotator.ts` caches results in a module-level `Map` keyed by `english|german|fallbackRule`, evicting the oldest entry once it reaches `MAX_ALIGN_CACHE` (500). `getAlignCacheSize()` exposes the bound for tests.
   <!-- corrected 2026-09-30: was "test suite executes in < 200ms" — no test asserts a runtime; the verifiable guarantee is the 500-entry cache bound -->
3. **Bounded Diff Work**:
   - `letter-diff.ts` rejects inputs over 200 characters (or a length delta over 10) outright rather than diffing them.
4. **Storage I/O Deduplication & Cookie Guard**:
   - `saveState` in `src/lib/store.ts` compares against `lastSerialized` to prevent redundant writes to `localStorage` and `document.cookie`.
   - Cookie storage is size-gated at **≤ 2048 URL-encoded bytes** with a lean `{completedLessons, currentLessonId, wordMastery, hasCompletedOnboarding, hasSeenGenderIntro, theme, font}` payload; above the gate it degrades to a `{theme, font}` minimal cookie. The bound exists to prevent HTTP 431 request-header errors and is pinned by `src/tests/store-security.test.ts:64`.
   <!-- corrected 2026-09-30: was "< 3800 bytes with a lean fallback" — the real gate is 2048 bytes, and the fallback is {theme, font} -->
   - `loadSavedState` repairs corrupted storage with defensive schema defaults (arrays, maps, `DEFAULT_SETTINGS` merge) before any consumer reads it.
5. **Leaf Component Memoization**:
   - `ShiftPair` and `GenderBadge` are wrapped in `React.memo` to eliminate unnecessary DOM recalculations when sibling states update.
6. **Sound Buffer Pooling**:
   - `SoundEngine` decodes each `.wav` at most once (24-buffer cache), dedupes concurrent loads of the same URL, and negatively caches failed URLs so a missing sample is never re-requested.
7. **Static Asset Caching**:
   - `next.config.mjs` serves `/sounds/*` and `/webfonts/*` as `public, max-age=31536000, immutable`.

---

## 8. Verification Commands

All commands should be executed from `/home/shaurya/gemini-tmp/german-app-2-new-ui`:
<!-- corrected 2026-09-30: preamble pointed at the old "german-app-2" path -->

```bash
# 1. Run Data Compilation Pipeline (word_connections.md -> src/data/compendium.json)
bun run parse-data

# 2. Run All Automated Test Suites (22 suites / 152 tests)
#    `bun run test` is the ONLY runner: package.json defines "test": "vitest run".
#    There is no `bun test` script — every suite imports from "vitest".
bun run test

# 3. Compile Production Build (parse-data + Turbopack + SSG verification)
bun run build

# 4. Launch Local Development Server
bun run dev

# 5. Serve the Production Build
bun run start
```

Standalone tooling run directly with `bun` (no package.json script):
<!-- added 2026-09-30: these scripts shipped but the manifest never mentioned them -->
```bash
bun scripts/export-trail.ts    # dump the whole trail as a readable TRAIL.md guide
bun scripts/audit-teasers.ts   # trail-chain audit: title drift + curiosity-teaser chain check
bun scripts/contrast-audit.ts  # one-off WCAG contrast audit & fixer for src/data/themes.ts
```

---

## 9. Checklist for Incoming Auditor Agent

When auditing the codebase, verify:
- [ ] **Architecture Integrity**: No external UI component frameworks or CSS-in-JS libraries installed. Runtime deps are limited to `next`, `react`, `react-dom`, `zustand`, `lucide-react`.
- [ ] **Pedagogical Integrity**:
  - No lesson ever starts with a cold-typing exercise — the invariant is checked across **all** lessons in `LESSONS` (`src/tests/exercises.test.ts:10`), not just the first ten.
  <!-- corrected 2026-09-30: was "Lessons 1–10 never start with cold typing exercises" -->
  - Review Hub front cards never display gender badges before recall.
  - Auxiliary words (like `mit`) contain clear `vocab_hints`.
  - Every shift family listed in §3 Pillar 2 exists as a key in `compendium.json` (`th_to_d`, `d_to_t`, `p_to_pf_f`, `t_to_s_ss_z`, `k_to_ch`, `v_to_b`, `y_gh_to_g_ch`, `latin_ieren`, `strong_verbs_ablaut`).
- [ ] **Trail Map Integrity**:
  - All 109 map nodes have an authored lesson in `LESSONS`; there are no hollow shells.
  - Every sprig attaches directly to its own topic core, and every core chains to the next core.
  - Star gates count stars only inside their own stretch, and a closed gate locks every later topic.
  - A purple star is awarded only when the lesson's retry queue stayed untouched, and it is never downgraded.
- [ ] **Accessibility & Keyboard Flow**:
  - Modal and card hotkeys (1–4, Space, Enter, Backspace, [R], Esc) function without key collision.
  - Interactive inputs auto-focus without forcing auto-scroll jumps.
- [ ] **State Durability**:
  - State changes in Zustand persist to `localStorage`.
  - Cookie backup stays within **≤ 2048 URL-encoded bytes**; larger payloads degrade to a `{theme, font}` cookie.
  <!-- corrected 2026-09-30: was "< 4096 bytes" -->
- [ ] **Build & Tests**:
  - `bun run test` (`vitest run`) passes with 0 failures across all 152 tests in 22 suites. There is no `bun test` runner in this project.
  - `bun run build` generates well over 100 static pages (6 static routes + 9 atlas families + 109 lesson pages) without TypeScript or Turbopack errors.
  <!-- corrected 2026-09-30: was "28 static pages" and listed `bun test` as an equivalent runner -->