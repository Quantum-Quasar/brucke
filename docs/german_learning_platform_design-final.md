# Etymological German Learning Platform — Complete Master Blueprint

---

## 1. Core Thesis & Positioning

- **The Thesis:** English and German share a foundational West Germanic heritage. Through systematic consonant shifts (e.g., the High German Sound Shift) and cognate reconstruction, English speakers can intuitively deduce and construct hundreds of German words without rote memorization.
- **Pedagogical Voice:** Practical, conversational, non-academic. Explains the structural *why* behind German grammar and vocabulary creation without getting bogged down in linguistic jargon.
- **Distribution Model:** 100% Free and Open-Source from Day 1. No paywalls, no aggressive monetization prompts.
- **Primary Taglines:**
  - *"Learn German smarter — with connections."*
  - *"Hundreds of German words you already know without realizing it."*

---

## 2. The User's Emotional Journey

Every design and architectural choice directly serves a specific psychological stage in the learner's progression:

| Stage | What the User Feels | Design Consequence |
|---|---|---|
| **First 30 Seconds** | *"Wait, that's real German? I just deduced that myself?"* | Onboarding is an instant interactive Decoder tool. Zero signup walls or feature tours. |
| **First 3 Lessons** | *"There is an actual system to this language. It's not arbitrary."* | Present the sound shift pattern *before* the vocabulary, showing how words radiate from one rule. |
| **Lessons 4–8** | *"I can predict words before the app even displays them."* | Exercises emphasize *rule application* and derivation rather than passive recognition. |
| **Lessons 9–18** | *"German grammar actually makes sense when seen as historical logic."* | Grammar points (cases, word brackets, prefixes) are explained as natural thought evolution (e.g., `-st` from archaic *thou*). |
| **Atlas Exploration** | *"I can follow any rabbit hole and see how the whole language fits together."* | 100% open constellation map from Day 1 with 4-tier visual progress states. |
| **Daily Habit** | *"I want to check today's insight"* (not *"I'll lose my streak"*). | Engagement driven by curiosity (Daily Insight cards, unlock milestones) rather than streak guilt. |

---

## 3. Product Architecture: Four Navigation Pillars

The platform has three content layers interconnected by a unified navigation bar and cross-layer word entity links:

```
┌──────────────────────────────────────────────────────────────┐
│                     LAYER 3: THE ATLAS                       │
│    100% Open Constellation Map from Day 1                    │
│    Explore any word tree, shift family, or custom exercise   │
├──────────────────────────────────────────────────────────────┤
│                     LAYER 2: THE DECODER                     │
│    Dedicated Reference Tab & Real-Time Shift Engine          │
│    Test any English word to derive German cognates           │
├──────────────────────────────────────────────────────────────┤
│                     LAYER 1: THE TRAIL                       │
│    30-Lesson Structured Progression                          │
│    Conversational mentor voice · Soft-gated exercises        │
└──────────────────────────────────────────────────────────────┘

Cross-Cutting: REVIEW HUB (4th navigation tab)
  Etymologically-grouped spaced repetition with 4 selectable decks
```

**Bottom Navigation (4 tabs):**
`📖 Trail` · `🗺️ Atlas` · `🔄 Review` · `🔍 Decoder`

Review is elevated to a primary navigation tab because after the first week it becomes the most-used daily feature. Burying it behind the dashboard dilutes its importance.

### Cross-Layer Word Entity Links

Every German word across the entire platform is a **tappable entity** that opens a consistent **Word Detail Card** (bottom sheet on mobile, side panel on desktop). This card shows:

- The word, pronunciation, IPA, audio playback
- Its shift family and shift rule
- Its mastery state (Unexplored / Explored / Encountered / Mastered)
- "Appears in: Lesson 3" → links to that lesson section
- "Part of: P→F/FF constellation" → links to that Atlas branch
- "Try in Decoder" → opens Decoder pre-filled with the English cognate

This single pattern stitches all three layers together. Without it, the three layers feel like three separate apps and the "rabbit hole" promise of the Atlas breaks.

---

## 4. Visual Design & Aesthetic Language

### The Aesthetic Vision
Avoids the extremes of juvenile game apps (bright cartoon mascots) and sterile corporate LMS tools. The visual identity feels like a **beautifully typeset, modern interactive linguistics notebook**.

### Color System: Semantic Colors vs. State Indicators

The color system is split into two orthogonal channels to avoid visual collisions:

#### Semantic Colors (Always-On, Describe *What* Something Is)

| Role | Color | Hex | Usage |
|---|---|---|---|
| **Canvas Background** | Deep Charcoal | `#1a1a2e` | Warm, low-glare, high focus. |
| **Surface & Cards** | Dark Slate | `#22223b` | Card backgrounds. Subtle 1px border (`#32324e`). |
| **Body Text** | Warm Off-White | `#e8e4df` | Softer than pure white for reading comfort. |
| **German Target Words** | Warm Luminous Amber | `#e8a838` | German words visually *glow*. Always amber regardless of mastery state. |
| **English Cognates** | Muted Cool Grey | `#8a8a9a` | Recessive and secondary. |
| **Shift Indicators** | Soft Electric Cyan | `#4ecdc4` | Highlights the changed letters and the mechanical shift rule. |
| **Success / Correct** | Vibrant Sage | `#7ab648` | Exercise feedback, correct answers. |
| **Error / Incorrect** | Soft Coral | `#e85d5d` | Exercise feedback, wrong answers. |

#### State Indicators (Describe *Progress*, Never Compete With Semantic Colors)

Word mastery state is expressed through a **different visual channel** — border style + small icon badge — NOT through the word's text color. This prevents collisions (e.g., a German word in an "Explored" state would be cyan AND amber simultaneously if both used hue).

| State | Border / Badge | Icon | Criteria |
|---|---|---|---|
| **1. Unexplored** | Dashed border (`#3a3a4c`), transparent fill | `·` | Word exists in Atlas but hasn't been clicked or practiced. |
| **2. Atlas Explored** | Thin solid border (`#4ecdc4`), 8% cyan fill | `○` | User discovered and inspected the word inside the Atlas. |
| **3. Course Encountered** | Thin solid border (`#e8a838`), 12% amber fill | `●` | Word introduced and completed in a Trail lesson. |
| **4. Mastered** | Solid border (`#7ab648`), 15% green fill | `✓` | Word passed repeated spaced-repetition retrieval tests over time. |

The word's **text** remains amber (German) or grey (English) regardless of state. The containing node's border and background opacity shift to express progress. This keeps the two systems visually independent.

### Typography & Spacing
- **Font Stack:** Clean, humanist geometric sans-serif (e.g., `Inter`, `Source Sans 3`, or `Plus Jakarta Sans`).
- **German Words:** Highlighted with heavier font weight (Semi-Bold/Bold) + Amber color token rather than competing serif fonts.
- **Layout Spacing:** Generous whitespace (minimum 24px padding around interactive blocks) to ensure linguistic density remains readable.

### Signature Visual Element: The Static Shift Annotation

In all lesson content, word tables, and Atlas views, English→German pairs use a **static annotated comparison** that highlights exactly which letters changed and why. No animation — the information is immediate, scannable, and doesn't wear out after repeated viewings.

**The pattern:**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   ho·p·e      ─── P → FF ───▶      ho·ff·en          🔊    │
│     [grey]        [cyan rule]        [cyan highlight]        │
│                                                              │
│   The changed letter(s) in English are dimmed grey.          │
│   Their German counterpart is highlighted in cyan.           │
│   The German word overall remains amber.                     │
│   The shift rule label between them is cyan.                 │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Design rationale:** The morphing letter animation (letters actively transforming across 400ms) is visually impressive on first encounter but becomes a speed bump by the 20th exposure. Static annotation is:
- Instantly scannable — no waiting for animation to complete
- Equally effective on 1st and 100th viewing
- Accessible by default (no `prefers-reduced-motion` workaround needed)
- Easier to build and maintain

### Onboarding-Only: The Linguistic Morph Animation

The one place where animation IS used is the **Decoder onboarding hero** (Section 7.1). When a first-time user types an English word and sees it transform into German, the animated morph creates the critical "wow" moment. This is the only context where the animation adds more than it costs.

```
Step 1:  h o [ p ] e
Step 2:  h o [ p → ff ] e n  (cyan transition glow, 400ms ease-out)
Step 3:  h o f f e n  🔊     (amber resolution)
```

**Progressive reduction for returning users:** The morph plays at full speed for the first 5 Decoder uses. After that, it shortens to 200ms. After 15 uses, it resolves instantly with a subtle cyan→amber color flash. Users can toggle animation speed in settings (Full / Reduced / Off).

---

## 5. The Atlas: 4-State Exploration Engine

The Atlas is **completely accessible from Day 1**. Learners can browse every consonant family, examine word relationships, and generate custom practice sets on any specific branch.

### 4-State Visual State Matrix

```
                  ┌── [State 4: Mastered ✓] ──────────── hoffen (hope)
                  │
   [P → F/FF] ────┼── [State 3: Encountered ●] ──────── helfen (help)
                  │
                  ├── [State 2: Explored ○] ──────────── schlafen (sleep)
                  │
                  └── [State 1: Unexplored ·] ────────── Affe (ape)
```

State is expressed via **border style + icon badge** on the word node, NOT through the word's text color. See Section 4 for the full state indicator spec.

### Atlas Constellation View — Desktop (Radial Spatial Layout)

The constellation is an actual **spatial visualization**, not a flat list. The shift rule sits at the center hub, and English→German word pairs radiate outward as spokes. Cross-family connections are shown as subtle arced dotted lines linking words that participate in multiple relationships.

```
┌──────────────────────────────────────────────────────────────────┐
│  ← Back to Atlas Grid                              Branch: P→F  │
│                                                                  │
│  THE P → F / FF SHIFT                                            │
│  Proto-Germanic voiceless stop /p/ → fricative /f, ff/           │
│                                                                  │
│                        hope → hoffen  [✓]                        │
│                           ╱                                      │
│              help → helfen  [●]                                  │
│                      ╱                                           │
│        ┌─────── P → F/FF ───────┐                                │
│                      ╲                                           │
│              sleep → schlafen  [○] ╌╌╌▷ (ein- prefix family)    │
│                           ╲                                      │
│                        ship → Schiff  [●]                        │
│                           ╲                                      │
│                    ape → Affe  [·]     ripe → reifen  [·]        │
│                                                                  │
│  ╌╌╌▷ = cross-family link (connects to another constellation)   │
│                                                                  │
│  Status: 1 Mastered · 2 In Course · 1 Explored · 2 Unexplored   │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │  ⚡ PRACTICE THIS BRANCH (5 Custom Questions)              │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ── CONNECTED SHIFT FAMILIES ──                                  │
│  [ TH → D ]      [ T → S / SS ]      [ K → CH ]                 │
└──────────────────────────────────────────────────────────────────┘
```

**Implementation note:** Use a fixed radial layout with deterministic positions, NOT a force-directed graph. Force-directed graphs look cool in demos and are unusable in production (jittery, non-deterministic, hard to tap targets on mobile). A fixed spoke layout is readable, performant, and predictable.

### Atlas Constellation View — Mobile (Expandable Vertical Tree)

On mobile screens (<640px), the radial layout collapses into an expandable vertical tree. The shift rule is a collapsible header, word pairs are children, and cross-family links appear as inline "See also" tags.

```
┌──────────────────────────────────────────┐
│  ← Atlas Grid                    P → F   │
│                                          │
│  THE P → F / FF SHIFT                    │
│  /p/ → /f, ff/                           │
│                                          │
│  ho·p·e    → P→FF →  ho·ff·en   🔊  [✓] │
│  hel·p·    → P→F  →  hel·f·en   🔊  [●] │
│  slee·p·   → P→F  →  schla·f·en 🔊  [○] │
│    ↳ See also: ein- prefix family        │
│  shi·p·    → P→FF →  Schi·ff·   🔊  [●] │
│  a·p·e     → P→FF →  A·ff·e     🔊  [·] │
│  ri·p·e    → P→F  →  rei·f·en   🔊  [·] │
│                                          │
│  1✓ · 2● · 1○ · 2·                      │
│                                          │
│  ┌──────────────────────────────────┐    │
│  │  ⚡ Practice Branch (5 Qs)       │    │
│  └──────────────────────────────────┘    │
│                                          │
│  Related: [TH→D] [T→S/SS] [K→CH]        │
└──────────────────────────────────────────┘
```

The changed letters use the Static Shift Annotation pattern — English changed letter(s) in dimmed grey, German changed letter(s) highlighted in cyan, rule label in cyan between them.

### Atlas Bird's-Eye Grid

Each constellation card shows a **mini donut chart** with the 4-state distribution instead of a single-axis progress bar. This is more informative at a glance — you can immediately see the ratio of Mastered vs. Unexplored vs. In-Progress.

```
┌────────────────────────────────────────────────────────────────┐
│  THE ATLAS                                  🔍 Filter  147 Words│
│                                                                │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐   │
│  │   P → F/FF     │  │    TH → D      │  │   T → S/SS     │   │
│  │                 │  │                 │  │                 │   │
│  │   ◉ 6/10       │  │   ◉ 11/11      │  │   ◉ 8/10       │   │
│  │   [donut chart] │  │   [donut chart] │  │   [donut chart] │   │
│  │   ✓3 ●2 ○1     │  │   ✓11          │  │   ✓5 ●2 ○1     │   │
│  └────────────────┘  └────────────────┘  └────────────────┘   │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐   │
│  │    K → CH      │  │    D → T       │  │    V ↔ B       │   │
│  │                 │  │                 │  │                 │   │
│  │   ◉ 4/9        │  │   ◉ 6/10       │  │   ◉ 0/8        │   │
│  │   [donut chart] │  │   [donut chart] │  │   [donut chart] │   │
│  │   ✓2 ●1 ○1     │  │   ✓3 ●2 ○1     │  │   all ·         │   │
│  └────────────────┘  └────────────────┘  └────────────────┘   │
│                                                                │
│  Total: 42 Mastered · 31 In Course · 37 Explored · 37 Unseen  │
└────────────────────────────────────────────────────────────────┘
```

**Donut chart segments:** Green (mastered) → Amber (encountered) → Cyan (explored) → Grey (unexplored). Rendered as a small SVG ring, ~40px diameter.

**Filter/Search (future-proofing):** The 🔍 Filter button enables:
- Filter by state: "Show only constellations with unexplored words"
- Sort: by progress, by lesson order, alphabetical
- When multi-language support is added later, language tabs appear above the grid

---

## 6. Device-Adaptive Interaction & Input Engine

The app provides an optimized interaction mode tailored to whether the user is on mobile/touch or desktop/keyboard.

### Touch / Mobile Experience
- **Interactive Word Tiles:** Tap/drag scrambled syllable and morpheme tiles to form words without clumsy mobile keyboard typing.
- **Cognate Matching Cards:** Tap English word on left, tap matching shifted German word on right.
- **Audio Tap Targets:** Large, comfortable 48px hit areas for on-demand pronunciation.
- **German Character Bar & Buttons with Shortcut Hints:** A supplementary row above the input field with `ä  ö  ü  ß  Ä  Ö  Ü` accessible on all devices.
  - **Dynamic Shortcut & Digraph Sub-labels:** Where button dimensions provide natural vertical space (e.g. desktop layouts), each button displays a subtle, low-contrast muted grey sub-label underneath the primary character showing its digraph and shortcut equivalent (e.g., primary letter **`ä`** with small dimmed `ae · Alt+A` below). On compact mobile viewports where vertical space is constrained, these hints render cleanly on hover or long-press tooltip, keeping the interface uncluttered and natural.

### Desktop / Power-User Keyboard Experience
- **Derivation Typing with Dual Input Support:** Direct keyboard text input supporting both:
  1. **Digraphic substitutions:** English keyboards can seamlessly type `ae` for `ä`, `oe` for `ö`, `ue` for `ü`, and `ss` for `ß`.
  2. **Dedicated character buttons:** Clickable/tappable on-screen umlaut buttons (`ä  ö  ü  ß  Ä  Ö  Ü`) with visible/hover shortcut guides for all devices.
  3. **German Character Shortcuts:** `Alt+A` → ä, `Alt+O` → ö, `Alt+U` → ü, `Alt+S` → ß. Discoverable via tooltip and button sub-labels.
- **100% Keyboard-Only Navigation:**
  - `1` – `4`: Select multiple-choice tiles / word options.
  - `Enter`: Verify answer / Advance to next step.
  - `Space`: Replay pronunciation audio for the active word.
  - `Tab` / `Shift+Tab`: Cycle through interactive elements.
  - `Esc`: Dismiss side notes or modal overlays.
  - `Cmd+K` / `Ctrl+K`: Global hotkey to summon The Decoder from anywhere.

---

## 7. Screen-by-Screen UI Walkthroughs

### 7.1 Onboarding: The Decoder (Interactive Hero)

This is the ONE screen that uses the animated Linguistic Morph (see Section 4). The animation creates the critical first "wow" moment.

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│                                                        │
│        Type any English word:                          │
│                                                        │
│        ┌──────────────────────────────────────┐        │
│        │  hope                                │        │
│        └──────────────────────────────────────┘        │
│                                                        │
│                     ↓ Shift: P → FF                    │
│                                                        │
│                  h o f f e n   🔊                      │
│                  (animated morph on first uses)        │
│                                                        │
│        That's real German.                             │
│        You just derived it using historical shifts.    │
│                                                        │
│        ── Try these examples ──                        │
│        [ help ]    [ think ]    [ water ]    [ bath ]  │
│                                                        │
│        ┌──────────────────────────────────────┐        │
│        │  Start Course (Lesson 1) →           │        │
│        └──────────────────────────────────────┘        │
│        [ Or jump into the Atlas map ]                  │
│                                                        │
└────────────────────────────────────────────────────────┘
```

#### Decoder No-Match Handling

~60% of English vocabulary is Latin/French-origin with no Germanic cognate shift. A user typing "beautiful", "important", or "conversation" must not hit a dead end in the critical first 30 seconds.

**When no shift cognate exists, show a graceful response that itself teaches something:**

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│        ┌──────────────────────────────────────┐        │
│        │  beautiful                           │        │
│        └──────────────────────────────────────┘        │
│                                                        │
│        This word comes from Latin (via French),        │
│        not Germanic roots — so it doesn't have a       │
│        shift cognate.                                  │
│                                                        │
│        But the German word for "beautiful" is          │
│        schön — which IS related to English             │
│        "sheen"! ✨                                     │
│                                                        │
│        ── Try these Germanic words instead ──          │
│        [ water ]    [ think ]    [ brother ]           │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Implementation:** Track what users type that produces no result → use that data to prioritize expanding the Decoder dictionary and crafting more "bridge" responses.

#### Decoder English Inflection Stripping (Query Normalization)
Before executing a cognate lookup, the Decoder passes raw user input through a lightweight English morphological pre-processor:
1. **Regular Suffix Stripping:** Automatically removes grammatical endings like plural `-s`/`-es` (*waters* → *water*, *apples* → *apple*), continuous participle `-ing` (*drinking* → *drink*, *hoping* → *hope*), past tense `-ed` (*walked* → *walk*), and adverbial `-ly*.
2. **Irregular Strong Verb Mapping:** Maps frequent irregular English past-tense and participle forms (*drank* → *drink*, *thought* → *think*, *broke* → *break*, *sang* → *sing*, *gave* → *give*) back to their base lemma so user queries resolve to their German counterparts instead of hitting a false no-match.
3. **Leading Article / Particle Removal:** Strips leading English articles (*the*, *a*, *an*) and infinitive markers (*to*).

### 7.2 Home Dashboard

The dashboard uses **smart priority reordering**: the most urgent action floats to the top. If spaced-repetition reviews are due, the Review card leads. If no reviews are due, the current lesson leads. This prevents the user's primary daily action from being buried.

```
┌────────────────────────────────────────────────────────┐
│  STAMMBAUM                                        👤   │
│  147 Words · 42 Mastered             ○ ○ ● ● ● ○ ○    │
│                               Mon–Sun (3/4 this week)  │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │  🔄 REVIEWS DUE                            14 ⚡  │  │
│  │  Shift families: P→F (4), TH→D (6), T→S (4)     │  │
│  │  [ Start Review → ]                              │  │
│  └──────────────────────────────────────────────────┘  │
│  (☝️ This card floats to top only when reviews due.    │
│   When no reviews due, this slot shows the lesson.)    │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │  CURRENT LESSON                                  │  │
│  │  Lesson 4: The TH → D Shift                      │  │
│  │  ▰▰▰▰▰▰▰▱▱▱ 70%                                │  │
│  │  [ Resume Lesson → ]                             │  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │  💡 DAILY INSIGHT                          [↗ Share]│
│  │  "Delikatessen" is German:                       │  │
│  │  delikat (delicate) + Essen (food)               │  │
│  │  = "delicate foods" 🍽️                    [Tap ▸] │  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
│ ────────────────────────────────────────────────────── │
│  📖 Trail       🗺️ Atlas       🔄 Review    🔍 Decoder │
└────────────────────────────────────────────────────────┘
```

**Weekly Consistency Dots:** The `○ ○ ● ● ● ○ ○` row is a 7-dot Mon–Sun view. Filled dots = active days, empty = inactive. A subtle bracket over 3-4 dots shows the weekly goal. No streaks, no flames, no punitive messaging. If the user hits their goal: a small, warm acknowledgment ("Nice week!"). If they miss: nothing happens. No guilt.

**Daily Insight — peek-able card:** The insight card is smaller than the action cards — a compact peek with `[Tap ▸]` to expand and `[↗ Share]` to share (see Section 12).

### 7.3 Lesson View (Static Annotation + Progress Segments + Footnote Side Notes)

```
┌────────────────────────────────────────────────────────┐
│  ← Back                                   Lesson 3/30  │
│  ▰▰▰▱▱  (5-segment progress: Hook·Pattern·Table·      │
│           Practice·Summary — current = segment 3)      │
│                                                        │
│  THE P → F / FF SHIFT                                  │
│  How English preserved what German transformed         │
│                                                        │
│  During the early Middle Ages, German sounds shifted.  │
│  Whenever English kept a "P", High German shifted it   │
│  into an "F" or double "FF".                           │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │  TRANSFORMATION TABLE                            │  │
│  │                                                  │  │
│  │   ho·p·e    ─ P→FF ─▶  ho·ff·en          🔊     │  │
│  │   hel·p·    ─ P→F  ─▶  hel·f·en          🔊     │  │
│  │   slee·p·   ─ P→F  ─▶  schla·f·en        🔊     │  │
│  │   shi·p·    ─ P→FF ─▶  Schi·ff·           🔊     │  │
│  │   a·p·e     ─ P→FF ─▶  A·ff·e            🔊     │  │
│  │   ri·p·e    ─ P→F  ─▶  rei·f·en          🔊     │  │
│  │                                                  │  │
│  │   · = changed letters                            │  │
│  │   English changed letter: dimmed grey             │  │
│  │   German shifted letter: cyan highlight           │  │
│  │   Shift rule label: cyan                          │  │
│  │   Full German word: amber + bold                  │  │
│  │                                                  │  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
│  German builds compound verbs by attaching spatial     │
│  prefixes to root verbs.¹                              │
│                                                        │
│  ── YOUR TURN ──                                       │
│  Apply the P → FF shift:                               │
│  English: hope  →  German: [ h o f f e n          ]    │
│                            [ ✓ Correct! Rule: P→FF ]   │
│                                                        │
│  [ Next Section → ]                                    │
│                                                        │
│  ─── NOTES ───                                         │
│  ¹ einschlafen = ein + schlafen                        │
│    "to in-sleep" = to fall asleep                      │
│    "Ich kann nicht einschlafen."                       │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Key changes from previous design:**

1. **5-segment progress bar** at the top of every lesson. Thin, segmented, low visual weight. Shows the user where they are within the lesson (Hook → Pattern → Table → Practice → Summary).

2. **Static Shift Annotation** replaces morphing animations. Changed letters are marked with `·` delimiters. English changed letter(s) in dimmed grey. German shifted letter(s) highlighted in cyan. Shift rule label in cyan. Full German word in amber + bold. No animation, no waiting — immediately scannable.

3. **Footnote-style side notes** (mobile). Superscript markers (¹ ² ³) in the lesson text. Tapping the marker on mobile opens a bottom sheet with the note content. This keeps the main content flow clean instead of inline `[Expand ▾]` blocks that add vertical noise. **On desktop**, side notes render as actual margin notes (positioned to the right of the main content column in a narrower font) — this delivers the "interactive notebook" aesthetic.

### 7.4 Word Detail Card (Cross-Layer Navigation Entity)

Appears when any German word is tapped anywhere in the app — in a lesson, in the Atlas, in the Decoder, in review. Renders as a bottom sheet on mobile, side panel on desktop.

```
┌──────────────────────────────────────┐
│  ──────── (drag handle)              │
│                                      │
│  hoffen                         🔊   │
│  /ˈhɔfən/ · verb · "to hope"        │
│                                      │
│  SHIFT: ho·p·e → ho·ff·en           │
│  Rule: P → FF                        │
│  ✓ Mastered                          │
│                                      │
│  ── CONNECTIONS ──                   │
│  📖 Appears in: Lesson 3 (P→F/FF) → │
│  🗺️ Atlas: P→F/FF Constellation   → │
│  🔍 Try in Decoder                 → │
│                                      │
│  ── FAMILY ──                        │
│  Hoffnung (hope, noun)               │
│  hoffnungsvoll (hopeful)             │
│  hoffnungslos (hopeless)             │
│                                      │
│  ── EXAMPLE ──                       │
│  "Ich hoffe, dass du morgen          │
│   kommst."                      🔊   │
│  "I hope that you come tomorrow."    │
│                                      │
└──────────────────────────────────────┘
```

### 7.5 Review Hub (Dedicated Tab)

The Review tab shows the 4 selectable review decks with clear visual hierarchy. The "Due Today" deck is prominent with a badge count.

```
┌────────────────────────────────────────────────────────┐
│  REVIEW                                                │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │  📋 DUE TODAY                              14 ⚡  │  │
│  │  SRS-scheduled words (SM-2 intervals)            │  │
│  │  Grouped by shift family for pattern recall      │  │
│  │  [ Start Review → ]                              │  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │  BY SHIFT   │  │  WEAKEST    │  │  RECENT     │   │
│  │             │  │             │  │             │   │
│  │  Review by  │  │  Words you  │  │  Last 3     │   │
│  │  P→F, TH→D │  │  miss most  │  │  lessons    │   │
│  │  etc.       │  │  often      │  │             │   │
│  │  [ Start ]  │  │  [ Start ]  │  │  [ Start ]  │   │
│  └─────────────┘  └─────────────┘  └─────────────┘   │
│                                                        │
│  Review Stats                                          │
│  ✓ 42 Mastered · 🔄 68 Active · ⏳ 37 Upcoming        │
│                                                        │
│ ────────────────────────────────────────────────────── │
│  📖 Trail       🗺️ Atlas       🔄 Review    🔍 Decoder │
└────────────────────────────────────────────────────────┘
```

### 7.6 Course Completion Screen

When a user finishes all 30 lessons, the Trail tab transforms. This prevents the "I finished the course... now what?" drop-off.

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  🎓                                                    │
│                                                        │
│  You started by deriving "hoffen."                     │
│  You now understand 300 German words and the           │
│  historical logic behind them.                         │
│                                                        │
│  Here's a sentence you can fully decode:               │
│                                                        │
│  "Ich kann meinen Bruder morgen nicht finden,          │
│   aber ich hoffe, dass er heute Abend anruft."         │
│                                                        │
│  (Each word highlights with its shift origin on tap)   │
│                                                        │
│  ── WHAT'S NEXT ──                                     │
│  Your learning continues in Review and the Atlas.      │
│                                                        │
│  [ 🔄 Review Due Words (always growing) ]              │
│  [ 🗺️ Explore Unfinished Atlas Branches ]              │
│  [ 🔁 Revisit Any Lesson ]                             │
│                                                        │
└────────────────────────────────────────────────────────┘
```

Post-completion, the Trail tab shows a lesson index for revisiting any lesson, with the completion milestone at the top. The daily experience shifts focus to Review and Atlas exploration.

---

## 8. Detailed Exercise Typology

Exercises are structured to reinforce etymological derivation rather than superficial guessing:

### 1. Derive It (Rule Application)
- **Prompt:** English: *forget*. Rule: *for-* $\rightarrow$ *ver-*, *t* $\rightarrow$ *ss*.
- **Task:** User derives `vergessen`.

### 2. Identify the Shift (Pattern Recognition)
- **Prompt:** `hoffen` $\leftrightarrow$ *hope*. Which historical consonant shift occurred?
- **Options:** `[ P → F/FF ]` | `[ T → S/SS ]` | `[ K → CH ]` | `[ D → T ]`

### 3. Reverse Cognate Discovery
- **Prompt:** German word: `Wasser`. What native English word shares this exact root?
- **Task:** User identifies *water* (via $T \rightarrow SS$).

### 4. Sentence Syntax Reconstruction (Satzklammer Builder)
- **Prompt:** Assemble: *"I cannot sleep today"*
- **Scrambled Tiles:** `[ heute ]` `[ kann ]` `[ schlafen ]` `[ Ich ]` `[ nicht ]`
- **Target Syntax:** `Ich` + `kann` + `heute` + `nicht` + `schlafen`.

### 5. Acoustic Discrimination & Cognate Match
- **Prompt:** 🔊 Plays audio clip: *[ˈbʁuːdɐ]* (`Bruder`)
- **Options:** `brother` | `butter` | `broad` | `ladder`

### 6. Morpheme & Conjugation Assembly
- **Prompt:** Base: `helfen` (to help) + Subject: `ich` (I)
- **Rule Hint:** 1st person singular drops infinitive `-n`, keeping `-e`.
- **Target:** `ich helfe`.

### 7. Compound Word Deconstruction
- **Prompt:** Deconstruct `Fernseher` (Television):
- **Components:** `fern` (far) + `seh(en)` (to see) + `-er` (device/agent) = *"far-seer"*.

### Adaptive Difficulty Within Exercises

The exercise system responds to performance within a session using simple rules-based logic (not ML):

| Performance | System Response |
|---|---|
| **3+ correct in a row** | Insert 1–2 **bonus challenge items** — e.g., a reverse cognate or compound deconstruction that wasn't in the original exercise set. |
| **>50% incorrect** | Offer a "Revisit the Pattern" option that re-surfaces the Transformation Table before continuing. Doesn't block progress, just offers the scaffold. |
| **All correct on first attempt** | Show a "You nailed this shift" acknowledgment + preview the next lesson's shift as a challenge teaser ("Can you predict what 'night' is in German?"). |

This makes lessons feel responsive rather than static. A user who struggles gets more support; a user who's breezing through gets stretched.

---

## 9. Error Handling Philosophy: Instructive Feedback

When an answer is incorrect, the platform avoids generic negative buzzer sounds or punitive streak breaks. Instead, it surfaces the mechanical explanation using the Static Shift Annotation:

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  English: hope  →  German: ___________                 │
│                                                        │
│  Your Input:  hoppen   ✗                               │
│  Correct:     ho·ff·en   🔊                            │
│                  ^^                                     │
│               [cyan highlight on shifted letters]       │
│                                                        │
│  ── WHY ──                                             │
│  The shift is P → FF, not P → PP.                      │
│  In High German, original voiceless "P" shifted to     │
│  "FF" after vowels (e.g., ship → Schiff, ape → Affe). │
│                                                        │
│  Your error "hoppen" used the right position but the   │
│  wrong consonant. Remember: P becomes F, not P.        │
│                                                        │
│  [ Got it — Continue → ]                               │
│                                                        │
└────────────────────────────────────────────────────────┘
```

The error feedback uses the same visual language as the lesson (cyan highlight on the shifted letters, amber for the correct German word) so the correction reinforces the same visual pattern the user learned.

### The End-of-Lesson Retry Queue & Error Tolerance

To ensure genuine retention without punitive friction:
1. **Immediate Feedback & Forward Motion:** When a learner makes an error (vocabulary shift, spelling, missing umlaut, or capitalization mistake), the app immediately displays the error alongside the correct form and its mechanical shift rule, then lets the learner continue forward through the lesson flow.
2. **Duolingo-Style Retry Queue:** Every exercise answered incorrectly during the lesson is automatically enqueued into an **End-of-Lesson Practice Queue**. At the end of the main lesson, the learner must re-attempt each missed item until answered correctly.
3. **Independent, Persistent Error Tolerance Toggles (Umlauts vs. Noun Capitalization):**
   - Noun capitalization and umlauts are tracked and controlled as **separate, independent** preferences. They are never bundled together.
   - **Per-Problem Retry Trigger:** The prompt does not trigger on arbitrary errors across different questions. Instead, it triggers specifically when a learner makes an error on a specific problem during the lesson, and then **makes the exact same error again when that specific problem recurs in the end-of-lesson retry queue**.
     - **Umlaut Tolerance:** If an umlaut error occurs twice on that problem (once in the lesson, once in the retry queue), the app prompts: *"Would you like to enable Umlaut Tolerance? [Enable] [Keep Practicing]"*
       - If enabled: Umlaut checking is disabled permanently across all lessons. The app still highlights the correct spelling gently (*"Correct! Note: spelled with ä"*), but the learner is **never forced to repeat the exercise in the retry queue** for missing umlauts.
     - **Noun Capitalization Tolerance:** If a capitalization error occurs twice on that problem, the app prompts: *"Would you like to enable Noun Capitalization Tolerance? [Enable] [Keep Practicing]"*
       - If enabled: Noun case checking is disabled permanently across all lessons. The app still shows a gentle notice (*"Correct! Note: German nouns are capitalized"*), but the learner is **never forced into a retry loop** for capitalization errors.
   - **Anti-Nagging Protocol:** If the learner chooses to dismiss/decline either tolerance prompt **twice across separate occasions**, the system permanently silences that prompt. The app will never ask or nag them about it again during lessons. Strict checking remains in place, and the learner can still toggle tolerance on or off manually at any time in Settings.

---

## 10. Healthy Engagement vs. Gamification Breakdown

### Critical Analysis: Competitive Leaderboards & Ranks
- **BS-Score:** **7/10**
- **Evaluation:** Leaderboards reward gaming the system (speed-clicking simple flashcards for XP) and penalize learners who spend time reading historical explanations. For an open-source, comprehension-focused tool, competitive leaderboards actively degrade learning quality.
- **Decision:** **No XP leaderboards or competitive leagues.**

### Healthy Retention Alternatives

1. **Tree Mastery Matrix:** Visual satisfaction of watching constellation nodes transform their border state from Unexplored (dashed grey) → Explored (cyan border) → Encountered (amber border) → Mastered (green border + ✓).

2. **Weekly Consistency Dots:** A 7-dot Mon–Sun row on the dashboard. Filled dots (●) = active days, empty (○) = inactive. A subtle bracket marks the weekly goal (e.g., 3–4 days). Non-punitive — missing a day never triggers negative messaging, never resets anything, never changes the UI color to red. If the user hits their goal: a small warm acknowledgment. If they miss: the dots simply reset for the next week.

```
  Weekly Goal: 3 days
  ○ ● ● ○ ● ○ ○    ← "3/3 this week — nice!"
  M T W T F S S
```

3. **Daily Insight Cards:** An engaging, bite-sized etymological discovery delivered on app open. Now with a share affordance (see Section 12).

---

## 11. Review System

### Elevated Navigation: Dedicated Review Tab

The review system is a **primary navigation tab** (`🔄 Review`), not a button buried on the dashboard. After the first week of use, spaced-repetition review becomes the most important daily activity. It deserves equal navigation weight with Trail, Atlas, and Decoder.

See Section 7.5 for the full Review Hub screen wireframe.

### Etymologically-Aware Spaced Repetition

Standard SRS reviews words individually. This platform groups reviews by **etymological family**. When `hoffen` comes up for review, the system also surfaces `helfen` and `schlafen` — reinforcing the shift pattern, not just the isolated word.

### Review Decks

The review queue is organized into selectable decks:

| Deck | What's in it |
|------|-------------|
| **Due Today** | Words scheduled by the SRS algorithm (SM-2 intervals) |
| **By Shift** | Review all P→F words, all TH→D words, etc. — structural recall |
| **Weakest** | Words the user has gotten wrong most often |
| **Recent** | Words from the last 3 lessons |

This lets users choose *how* they want to review — structurally (by shift family) or algorithmically (by weakness). Most apps only offer the latter.

---

## 12. Engagement Mechanisms (Detailed)

### 1. Daily Insight Cards

One etymological card per day. Not a push notification — just present when the user opens the app. Low-pressure, high-delight.

```
┌──────────────────────────────────────┐
│                                      │
│  THINK  →  DENKEN              [↗]   │
│                                      │
│  The TH→D Shift                      │
│                                      │
│  English "th" and German "d" are      │
│  the same sound, separated by 1500    │
│  years. "Thank" → "danken."          │
│  "Thou" → "du." "Thing" → "Ding."   │
│                                      │
│  ── RELATED ──                       │
│  brother→Bruder  bath→Bad  the→die   │
│                                      │
└──────────────────────────────────────┘
```

**Share Affordance `[↗]`:** Tapping the share icon generates a pre-formatted image card (the etymological pair, the shift rule, the app name) suitable for social sharing. On web, uses the Web Share API (falls back to copy-to-clipboard). This creates organic social content from users — especially valuable for an open-source project banking on organic growth.

### 2. Unlock Moments

After every 3–4 lessons, a special milestone screen:

> "You now know 150 German words. Here's something beautiful: the sentence *Ich kann meinen Bruder morgen nicht finden* uses 6 of them."

The app highlights each word's origin, showing the user a real German sentence they can fully decode. This is the emotional payoff for sustained effort.

### 3. Curiosity Chains

At the end of each lesson, a teaser for the next. The teaser format **varies** to avoid predictability:

- **Question hook:** *"Can you guess what 'night' is in German? The next lesson reveals the pattern."*
- **Counter-intuitive fact:** *"German has a word for 'television' that literally translates to 'far-seer.' Lesson 19."*
- **Challenge:** *"You've mastered P→F. Next: a shift that turned English 'th' into German 'd.' See if you can predict 5 pairs before we show you."*
- **Connection reveal:** *"Next: The TH→D shift. Did you know that 'thank' and 'danken' are the same word? We'll show you 10 more pairs like this."*

This creates a pull ("I want to see that") rather than a push ("you'll lose your progress").

### 4. Optional Daily Push Notification

A single daily push (opt-in): *"Today's insight: why 'think' is 'denken'."* Content-first, not guilt-first. The notification itself teaches something — it doesn't just say "come back."

---

## 13. Marketing & Community Growth

For an open-source, free product, organic content *is* the growth strategy. No paid ads budget needed.

### Short-Form Video Content (TikTok / Reels / Shorts)
- 15–30 second videos showing one word transformation with the Static Shift Annotation pattern (or the animated morph for video — animation works great in short-form content, just not in repeated app usage)
- Hook format: *"You already know this German word. You just don't know it yet."*
- End card: project name + GitHub/website link
- Target: 2–3 per week. Each video is a standalone "did you know?" that markets the product without feeling like an ad

### Landing Page Structure
1. **The Decoder** — interactive, same as onboarding. Let visitors try it immediately with zero friction
2. Three example word pairs with shift annotations
3. *"Not flashcards. Not grammar tables. Understanding."* — 2-sentence positioning
4. Course preview (first 3 lesson titles)
5. Start button (no signup required to begin)

### SEO / Blog Content
- "10 English Words That Are Already German (With One Sound Change)"
- "Why German Grammar Makes More Sense Than You Think"
- "The Sound Shift That Connects 'Think' and 'Denken'"

### North Star Metric
**Aha-moments per session.** Not DAU, not retention, not streak length. The product works when users regularly experience "oh, THAT'S why that word is like that." If that's happening, retention follows naturally.

Measurable proxies: lesson completion rate, insight card tap-through rate, Decoder usage frequency, word count growth per week.

---

## 14. Complete 30-Lesson Curriculum

### Phase 1: Foundational Shifts & Verb Architecture (Lessons 1–8)
1. **The Germanic Core:** Shared heritage, `-en` infinitive (`lernen`, `finden`, `kommen`).
2. **Modal Auxiliaries:** `ich will`, `ich kann`, `ich muss`. Bare infinitive & sentence inversion.
3. **The P → F/FF Shift:** `hoffen`, `helfen`, `schlafen`, `Schiff`, `Affe`, `reifen`.
4. **The TH → D Shift:** `danken`, `denken`, `baden`, `Bruder`, `Ding`, `denn`, `du`.
5. **The T → S/SS Shift:** `es`, `essen`, `Wasser`, `besser`, `hassen`, `vergessen`, `groß`, `aus`, `was`.
6. **The K → CH Shift:** `machen`, `kochen`, `brechen`, `sprechen`, `suchen`. Ich-Laut vs. Ach-Laut.
7. **The D → T Shift:** `Garten`, `Wort`, `kalt`, `gut`, `Tochter`, `trinken`, `tanzen`.
8. **The Latin Bridge (`-ieren`):** `organisieren`, `studieren`, `funktionieren`, `akzeptieren`.

### Phase 2: Structural Logic & Grammatical Symmetry (Lessons 9–18)
9. **Conjugation Roots:** `-e`, `-st`, `-t` personal endings. The `du` $\leftrightarrow$ *thou* connection.
10. **Pronouns as Case Anchors:** `ich`/`mich`, `du`/`dich`, `er`/`ihn` (Accusative as "the him-case").
11. **Article Systems Built from Pronouns:** `der` (`d+er`), `die` (`d+sie`), `das` (`d+es`).
12. **The Sentence Bracket (*Satzklammer*):** Negation (`nicht`, `kein`), temporal adverbs, and verb sandwiches.
13. **Separable Verbs:** English phrasal verbs vs. German separable prefixes (`aufmachen`, `zumachen`, `anmachen`).
14. **Inseparable Prefixes:** `ver-` (English *for-*), `be-`, `er-` (`verkaufen`, `verstehen`, `vergessen`).
15. **The Conversational Past (*Perfekt*):** `haben` + `ge-...-t` past participles (`gemacht`, `gekauft`, `gesagt`).
16. **Strong Verbs & Ancient Ablaut:** `gefunden`, `gesehen`, `gegessen`, `verstanden`.
17. **The Dative Case:** Indirect recipients, `mir`, `dir`, `ihm` (like English *him*), `ihr` (like English *her*).
18. **The `ein` Family Matrix:** `mein`, `dein`, `kein`, `nein`. One morphological template generating all determiners.

### Phase 3: Fluency, Word Formation & Deep Calques (Lessons 19–30)
19. **Compound Noun Engineering:** `Fernseher` ("far-seer"), `Aufzug` ("up-pull"), `Spätkauf`.
20. **Gender Heuristics:** Structural endings (`-e`, `-heit`, `-keit`, `-ung`, `-chen`, `-lein`).
21. **The Plural Systems:** `-er`, `-e`, `-(e)n` and i-mutation umlauts (`Mann` $\rightarrow$ `Männer` vs. *man* $\rightarrow$ *men*).
22. **Comparatives & Umlauts:** `warm` $\rightarrow$ `wärmer`, `kalt` $\rightarrow$ `kälter`, `groß` $\rightarrow$ `größer`.
23. **Further Sound Shifts:** V ↔ B (`geben`/`give`), Y ↔ G (`sagen`/`say`), GH ↔ CH (`Nacht`/`night`).
24. **Prepositions as Physical Metaphors:** `nach` (towards), `auf` (upon), `aus` (out of).
25. **Verb Families:** Exploring root radiations (`sehen` $\rightarrow$ `ansehen`, `zusehen`, `aussehen`, `übersehen`).
26. **Dative Mastery:** Full article matrix (`dem`, `der`, `den`). Double pronoun order (Thing before Person).
27. **Idiomatic Mindset:** `Es tut mir leid`, `Es macht nichts`, `Wie geht's`, `Lust haben`.
28. **Vowel Mutations in Real Time:** `sprechen` $\rightarrow$ `er spricht`, `geben` $\rightarrow$ `er gibt`.
29. **The Copula `sein`:** Three PIE roots + motion auxiliary selection (`ist gekommen` / archaic *"He is come"*).
30. **Capstone Synthesis:** Days of the week, time expressions, authentic reading passages.

### Etymological Accuracy & Linguist's Notes

Some pedagogical explanations in the curriculum simplify the real etymological history for teaching clarity (e.g., the `-st` from "thou" explanation). To build trust with advanced users and language enthusiasts:

- Each lesson includes an optional **"Linguist's Note"** (collapsed by default, footnote-style) that flags where the pedagogical explanation simplifies the real history and links to the fuller picture.
- Before publishing, all cognate pairs and shift claims should be verified against Wiktionary etymologies at minimum. Contested or debatable connections should be flagged.

---

## 15. Extensible Multi-Language Data Schema

The database model is built from the start to support future Germanic language trees (Dutch, Swedish, Old English) without schema refactoring:

```json
{
  "id": "hoffen",
  "language_code": "de",
  "target_word": "hoffen",
  "english_cognate": "hope",
  "english_meaning": "to hope",
  "shift_category_id": "high_german_consonant_shift",
  "shift_rule": "P -> F/FF",
  "ipa_pronunciation": "/ˈhɔfən/",
  "audio_asset_path": "audio/de/hoffen.mp3",
  "trail_lesson_index": 3,
  "difficulty_tier": 1,
  "part_of_speech": "verb",
  "frequency_rank": 847,
  "etymology_summary": "Proto-Germanic *hupaną → Old High German hoffōn (consonant shift post-vocalic p → ff)",
  "common_errors": [
    { "input": "hoppen", "explanation": "P shifts to FF, not PP. The consonant changes identity, not just doubles." },
    { "input": "hofen", "explanation": "After vowels, the shift produces a geminate FF, not a single F." }
  ],
  "related_compounds": [
    { "word": "Hoffnung", "meaning": "hope (noun)", "derivation": "hoffen + -ung" },
    { "word": "hoffnungsvoll", "meaning": "hopeful", "derivation": "Hoffnung + -voll" },
    { "word": "hoffnungslos", "meaning": "hopeless", "derivation": "Hoffnung + -los" }
  ],
  "false_friends": [],
  "constellation_connections": [
    { "target_id": "helfen", "relation_type": "same_sound_shift", "label": "P → F" },
    { "target_id": "schlafen", "relation_type": "same_sound_shift", "label": "P → F" },
    { "target_id": "einschlafen", "relation_type": "derived_compound", "label": "ein- + schlafen" }
  ],
  "conjugation_table": {
    "present": {
      "ich": "hoffe", "du": "hoffst", "er_sie_es": "hofft",
      "wir": "hoffen", "ihr": "hofft", "sie_Sie": "hoffen"
    },
    "perfect": {
      "auxiliary_verb": "haben",
      "participle": "gehofft"
    }
  },
  "example_sentences": [
    {
      "german_text": "Ich hoffe, dass du morgen kommst.",
      "english_translation": "I hope that you come tomorrow.",
      "audio_asset_path": "audio/de/sentences/sentence_hoffen_1.mp3"
    }
  ]
}
```

**New fields added:**

| Field | Purpose |
|---|---|
| `frequency_rank` | How common this word is in everyday German (from frequency corpus). Prioritizes review of high-frequency words. |
| `common_errors` | Anticipated mistakes with explanations. Powers smarter, more specific error feedback instead of generic "incorrect." |
| `related_compounds` | Compound words and derivations from this root. Shows word family radiation in the Word Detail Card. |
| `false_friends` | Words that look like cognates but aren't (e.g., "Gift" = poison, not gift). Critical for avoiding learner traps. Listed empty when not applicable. |

---

## 16. Technical Architecture & Tech Stack

| Layer | Technology Choice | Architectural Rationale |
|---|---|---|
| **Frontend Framework** | **Next.js (App Router)** | Excellent SSR/SSG performance for content, fast SEO indexing for reference articles. |
| **Styling & Design Tokens** | **Tailwind CSS** | Native dark-mode primitives, compact utility classes, easy theme maintenance. |
| **Backend & Storage** | **Local Storage / IndexedDB (MVP)**<br>*Post-MVP: Supabase (PostgreSQL)* | Client-side local-first persistence for MVP without server setup, database hosting, or network latency. Supabase cloud sync is deferred to post-MVP when cross-device cloud accounts are implemented. |
| **Audio Engine** | **None for MVP**<br>*Post-MVP: One-Time AI Batch Generation (Stored in DB/Storage)* | The first iteration (MVP) will have **zero audio whatsoever**. In post-MVP, audio will be generated in a one-time batch run using an advanced AI text-to-speech model capable of understanding German accentuation and phonology, with recordings stored directly in the database/storage. Human native speaker recording is explicitly excluded. |
| **Lesson Content Authoring** | **MDX Files** | Allows embedding interactive React exercise components directly inside authored lesson markdown. |
| **Micro-Animations** | **Framer Motion** | Declarative transitions for the onboarding morph animation, SVG donut charts in the Atlas, and subtle UI state transitions. Used sparingly — no morphing in lessons. |
| **Analytics & Telemetry** | **PostHog (Self-Hosted / Cloud)** | Privacy-friendly event tracking for lesson completions and Decoder queries. |
| **Offline / PWA** | **Service Worker + next-pwa** | Cache lesson content, current + next lesson, and due review deck for offline use. Sync on reconnect. |

---

## 17. Specifications & Content Inventory

### Content Inventory Breakdown

| Content Type | Count Target | Specifications |
|---|---|---|
| **Trail Lessons** | 30 Lessons | 5 structured sections each (Hook, Pattern, Table, Practice, Summary). |
| **Curriculum Vocabulary** | ~300 Core Words | High-frequency German words explicitly taught in the course. |
| **The Decoder Dictionary** | ~500+ Words | Extended lexicon mapping English words to shifted German cognates with English inflection stripping. Includes graceful no-match responses for ~100 common Latin/French-origin English words. |
| **Daily Insight Cards** | ~100 Cards | Bite-sized etymological cards with share-ready image generation. |
| **Atlas Constellations** | ~15 Constellations | Focused visual shift families (P→F, TH→D, T→S, K→CH, D→T, V↔B, Y↔G, etc.). Rendered as radial spoke layouts (desktop) / vertical trees (mobile). |
| **Exercise Library** | ~250 Interactive Items | 6–8 varied exercise items per lesson, plus adaptive bonus challenges. |
| **Audio Integration** | None for MVP · AI TTS (Post-MVP) | MVP has **no audio whatsoever**. Post-MVP generates audio clips once via an AI TTS model and persists them in storage. |

### Audio Specifications (Phased Delivery)
- **First Iteration (MVP):** **Zero audio whatsoever.** No audio playback, voice recording, or text-to-speech calls are included in the initial MVP build.
- **Post-MVP Implementation:** Audio will be generated once in batch using an AI text-to-speech model that understands German accents and phonology across languages. The resulting recordings will be saved and served from the database/storage. Native human studio voice recording will not be used.

### Performance Note
Standard web performance targets apply (LCP < 2.5s, TTI < 3s). The one project-specific requirement: **audio clips must preload for the current lesson** so pronunciation plays instantly on tap with no spinner.

### Offline / PWA Strategy

For a mobile-first learning app, offline support is important — people learn on commutes with spotty connectivity.

| What's Cached | When | Strategy |
|---|---|---|
| Completed lesson content | After completion | Service worker cache, never evicted |
| Current lesson + next lesson | On lesson load | Prefetch and cache, including audio |
| Due review deck | On app open (when online) | Sync to IndexedDB. Review results queue and sync on reconnect |
| Atlas constellation data | On first Atlas visit | Cache all constellation metadata (small JSON). Images/SVGs lazy-cached |

This is a **Phase 3 / post-launch** enhancement, not MVP. But the architecture (Next.js + Supabase) supports it cleanly with `next-pwa` and IndexedDB for offline review state.

### Accessibility Standards (WCAG 2.1 AA Compliant)
- **Screen Reader Tagging:** All German words carry explicit `lang="de"` HTML attributes.
- **High Contrast Ratios:** Amber on Charcoal exceeds $7:1$ contrast ratio.
- **Motion Accessibility:** The only animation (onboarding morph) honors `prefers-reduced-motion` by resolving instantly. All lesson content uses static shift annotations with no motion dependency.
- **Acoustic Fallback:** Every audio clip is paired with accurate visible International Phonetic Alphabet (IPA) transcriptions.

---

## 18. MDX Lesson Authoring Template

```mdx
---
lesson_number: 3
title: "The P → F / FF Shift"
subtitle: "How English preserved what German transformed"
phase: 1
shift_categories: ["P_TO_F_FF"]
words_introduced: ["hoffen", "helfen", "schlafen", "Schiff", "Affe", "reifen", "einschlafen"]
prerequisites: [1, 2]
estimated_duration_minutes: 10
sections: ["hook", "pattern", "table", "practice", "summary"]
---

<Narrative>
During the early Middle Ages, German dialects underwent the High German Sound Shift. 
One of the cleanest rules: wherever English preserved a Germanic "P", Standard German shifted it into an "F" or double "FF".
</Narrative>

<TransformationTable>
  <ShiftPair english="hope" german="hoffen" shiftedEnglish="p" shiftedGerman="ff" rule="P → FF" audio="audio/de/hoffen.mp3" />
  <ShiftPair english="help" german="helfen" shiftedEnglish="p" shiftedGerman="f" rule="P → F" audio="audio/de/helfen.mp3" />
  <ShiftPair english="sleep" german="schlafen" shiftedEnglish="p" shiftedGerman="f" rule="P → F" audio="audio/de/schlafen.mp3" />
  <ShiftPair english="ship" german="Schiff" shiftedEnglish="p" shiftedGerman="ff" rule="P → FF" audio="audio/de/schiff.mp3" />
  <ShiftPair english="ape" german="Affe" shiftedEnglish="p" shiftedGerman="ff" rule="P → FF" audio="audio/de/affe.mp3" />
  <ShiftPair english="ripe" german="reifen" shiftedEnglish="p" shiftedGerman="f" rule="P → F" audio="audio/de/reifen.mp3" />
</TransformationTable>

<FootNote marker="1" title="einschlafen = ein + schlafen">
German creates directional compound verbs by attaching spatial prefixes to root verbs.
"Ich kann nicht einschlafen."
</FootNote>

<LinguistNote>
The High German Consonant Shift affected voiceless stops in specific phonetic environments.
Post-vocalic /p/ → /ff/ (gemination), while initial /p/ → /pf/ (affricate). This lesson
focuses on the post-vocalic environment for simplicity. See Wiktionary entries for
individual word etymologies.
</LinguistNote>

<Exercise 
  type="derive"
  prompt_english="hope"
  shift_hint="P → FF"
  expected_german="hoffen"
/>

<Exercise 
  type="syntax_builder"
  prompt_translation="I cannot fall asleep."
  word_bank={["Ich", "kann", "nicht", "einschlafen"]}
  target_sequence={["Ich", "kann", "nicht", "einschlafen"]}
/>
```

**Changes from previous template:**
- `<Pair>` → `<ShiftPair>` with explicit `shiftedEnglish` and `shiftedGerman` props for the Static Shift Annotation renderer (tells the component which letters to highlight in grey/cyan).
- `<SideNote>` → `<FootNote>` with a `marker` prop for footnote-style rendering.
- Added `<LinguistNote>` component for optional etymological accuracy notes (collapsed by default).
- Added `sections` to frontmatter for the 5-segment progress bar.

---

## 19. Phased Build Roadmap

### Phase 1: Interactive Core & The Decoder (Weeks 1–3)
- [ ] Initialize Next.js App Router repository with Tailwind CSS dark theme tokens and the full semantic + state color system.
- [ ] Build **The Decoder** search & derivation engine with ~100 initial cognate pairs + no-match graceful fallback responses for ~50 common Latin/French-origin words.
- [ ] Develop the `<ShiftPair>` Static Shift Annotation component (changed letter highlighting with grey/cyan).
- [ ] Build the `<FootNote>` component (footnote markers + bottom sheet on mobile, margin notes on desktop).
- [ ] Develop device-adaptive exercise components (drag/tap tiles + full desktop keyboard listeners + German character bar for mobile + Alt+key shortcuts for desktop).
- [ ] Author Lessons 1–4 in MDX.
- [ ] Build the Word Detail Card (cross-layer bottom sheet / side panel).
- [ ] Implement 4-tab bottom navigation (Trail, Atlas, Review, Decoder).

### Phase 2: The Atlas & Review Hub (Weeks 4–6)
- [ ] Develop radial spoke constellation component (desktop) and expandable vertical tree (mobile) for Atlas shift families.
- [ ] Build SVG donut chart component for Atlas bird's-eye grid cards.
- [ ] Implement the 4-tier visual state engine (border style + icon badges) with local storage sync.
- [ ] Add the "Practice this Branch" 5-question custom drill generator inside the Atlas.
- [ ] Build the Review Hub screen with 4 selectable decks and etymological family grouping.
- [ ] Implement smart dashboard priority reordering (review-due floats to top).
- [ ] Batch-generate AI TTS audio assets with authentic German accentuation for Lessons 1–8 into storage (Post-MVP).

### Phase 3: Content Expansion & Public Open-Source Launch (Weeks 7–10)
- [ ] Author and polish Lessons 5–18 (completing curriculum Phases 1 & 2).
- [ ] Integrate Daily Insight cards with share-ready image generation and Weekly Consistency dots.
- [ ] Build adaptive exercise difficulty logic (bonus challenges, revisit-pattern scaffolds).
- [ ] Add curiosity chain teasers with varied formats at lesson end.
- [ ] Build the Course Completion screen and post-completion Trail index.
- [ ] Deploy web app publicly on Vercel / Cloudflare Pages.
- [ ] Publish repository to GitHub with open-source documentation and contribution guidelines for community-submitted etymologies and future language trees.

### Phase 4: Polish & Offline (Post-Launch)
- [ ] Implement PWA service worker for offline lesson content, review deck sync, and audio caching.
- [ ] Author and polish Lessons 19–30 (completing curriculum Phase 3).
- [ ] Add `<LinguistNote>` content for all lessons after etymological review pass.
- [ ] Expand Decoder dictionary to 500+ words with more no-match bridge responses.
- [ ] Cross-family connection links in Atlas (dotted arcs between constellations).
- [ ] Atlas filter/search functionality.

---

## 20. Progressive Bite-Sized Exercise Architecture & Interaction Refinements

### 20.1 Bite-Sized Step Wizard (Card-by-Card Flow)
- **Elimination of Monolithic Exercise Stacks:** Exercises must never be rendered simultaneously on a single long scrolling page. Beginners must not be overwhelmed by seeing 4–8 stacked problems at once.
- **5-Stage Step Progression:**
  1. **Hook / Narrative:** The conceptual opening insight.
  2. **Pattern & Shift Rule:** The clear structural explanation and linguist's historical note.
  3. **Transformation Table:** The scannable comparison table with static shift annotations.
  4. **Bite-Sized Practice:** Presented strictly **one exercise at a time** (Step 1 of N, Step 2 of N, etc.) with focused input targets and immediate feedback.
  5. **Summary & Retry Queue:** Key takeaway, curiosity chain teaser, and one-by-one retry queue for missed exercises.

### 20.2 Progressive Scaffolding: Tiles & Matching Before Typing
- **No Cold Typing for Beginners:** Starting exercises in Phase 1 lessons must not demand cold typing without scaffolding.
- **Scaffolded Formats:**
  - **Morpheme Tile Assembly:** Tap root and ending tiles (e.g. `[hoff]` + `[-en]` → `hoffen`) to build morphological awareness.
  - **Cognate Matching Cards:** Tap English cognate on the left, tap matching shifted German word on the right.
  - **Multiple-Choice / Word Bank Selection:** Select the correct shifted consonant or word tile.
- **Graduation to Typing:** Direct typing is introduced progressively in later lessons or advanced drills once the shift rule is intuitive.

### 20.3 Input Verification & Key Scope Integrity
- **Empty Input Guard:** Pressing `Enter` when no characters have been typed or no tiles selected does **not** fail the problem. The system requires an active attempt before grading.
- **Scoped Key Listeners:** Keyboard listeners (`Enter`, `1`–`4`) are strictly scoped to the active step. Mounting exercises one at a time prevents accidental cross-exercise submissions.
- **Focus Isolation:** Auto-scrolling on page load is eliminated by ensuring only the active step manages focus.

### 20.4 Detailed Letter-by-Letter Error Feedback Pop-up
- **Instructive Comparison:** When an answer is incorrect, feedback displays in a focused bottom modal sheet showing:
  - The learner's input with letter-by-letter diff: matching/correct characters displayed in neutral/green, incorrect or missing characters highlighted in red coral.
  - The correct German target with static shift annotations (cyan shifted letters).
  - The mechanical rule explanation (e.g. *"P shifts to FF after short vowels, not PP"*).

---

## only for reference, old qna answers


? What name direction do you prefer for the platform?
> All of your suggestions are good, we'll worry about this later.
? How should the platform frame its core marketing claim?
> Maybe learn smarter, learn German smarter or maybe Learn with connections or also the hundreds of German words you already know is also good.
? What is the core positioning and scope of this course?
> It is like mostly a balanced hybrid but I also want user retention just like Duolingo does not focus that much on grammar maybe that is for a solid reason. I still want to explain grammar, I still want to do things. So I would explain
grammar way more than Duolingo does. But maybe not like in academically. Right? So yeah.
? How much traditional grammar (cases, sentence structure, conjugation) should be included?
> It is like mostly a balanced hybrid but I also want user retention just like Duolingo does not focus that much on grammar maybe that is for a solid reason. I still want to explain grammar, I still want to do things. So I would explain
grammar way more than Duolingo does. But maybe not like in academically. Right? So yeah.
? What total course length feels ideal for the core track?
> (Recommended) 30 lessons (Balanced: ~10-15 mins/day for 1-2 months)
? What writing style and voice should the lesson explanations use?
> Conversational mentor slash teaching voice and also dialogue format like language transfer both seems good. I don't really know what you are mentioning with clean modern explanation essay. But yeah, those two seem good. What are your
thoughts about it? Like maybe I will think about which to go with.
? How prominent should "The Decoder" interactive tool be in the interface?
> (Recommended) Dedicated tab in the bottom navigation (Always accessible reference tool)
? What theme support should be prioritized for the UI?
> (Recommended) Dark mode only at launch (Strong brand identity, simpler to build and polish)
? How should users complete vocabulary and word-derivation exercises?
> I think first I would launch the web app and later I would also launch the Android app. So I think even in the web app we should notice which device the person is using on. And we will adapt from that. Like scramble little tiles and
also match the following with tiles. tiles, all those would be really good at touch screen things and for a laptop we would do fast timing and also scrambled tiles sometimes. And we will also do a lot of keyboard shortcuts and even in
scrambled tiles we would make it such that the person can use the entire app just through keyboard.
? Should users be allowed to skip exercises within a lesson?
> Soft gates (Users can skip exercises to just read the insights and complete later)
? How should audio pronunciation trigger when viewing word tables?
> (Recommended) Tap-to-play only (Polite, predictable, works anywhere in public)
? When and how should the Atlas constellation view unlock for users?
> everything should be open to exlore from day one, but maybe we can make it such that everything is the ones that were not unlocked are grey but the other ones are of different colors. For example, the ones that have been explored in
the constellation but have not appeared in the course are some other color. And the ones that have appeared in the course are some other color. And the ones that have appeared in the course and you have also mastered it by repeating the
word and passing test. like maybe there would be some, like every time you do a test or something, like every time you do course exercises, we will judge which word you have mastered and we will see which word you have mastered. If the
word is mastered, it will show some other color. So maybe we can do that, but we should keep everything available without needing to unlock it.
? How should words that haven't been learned yet appear inside an Atlas constellation?
> dimmed, but not locked or hidden. they can explore any thing and go down any specific rabbit hole they like. And I'm also thinking that we should also accept exercises for the different trees of the words so that if someone is
exploring through that other than the words for them, they can do that.
? What style of engagement tracking matches your product vision?
> i am thinking of all of them. but what do u suggest?(no sycophancy) also we can also add leaderboards and ranks?
? Should the platform use push notifications for mobile/PWA users?
> (Recommended) Optional daily insight notification ("Today's insight: why 'think' is 'denken'")
? How much content should be included in the free tier?
> everything is free. there is revenue only through non intrusive adds or premium features like ai tutor that will be added in late stage. Also I'm thinking I should just open source it. its not a paid shit. also dont promote premium
tier agressively. and no mentions of it in earlier builds
? What pricing model best fits this learning platform?
> completely free in earlier builds. will see later. dont talk about monetisation
? What is your execution model for developing and launching the platform?
> Ideally open source but not so many projects get the community support so it will be a solo builder I would it could be even more like a solo builder because I don't think it will get that popular that people will assist me
? How would you like to handle the relationship to the Language Transfer methodology?
> (Recommended) Explicitly acknowledge as inspiration in credits / about page (Ethical and builds goodwill)
? What is your long-term scope regarding other Germanic languages?
> (Recommended) Architecture ready for multi-language (Design DB for Dutch/Swedish/etc., but build only German for now)
? What is your timeline and urgency for launching the MVP?
> (Recommended) Flexible / quality-first (Build iteratively as a side project until it feels great)

---

## 15. Future Roadmap (v3.0 / v4.0): Progressive Feature Disclosure & Gated Mechanics

> **Architectural Note for Future Iterations (Post-MVP Roadmap):**
> In the initial MVP, all tools (Trail, Atlas, Review Hub, Decoder) are available immediately to maximize exploratory flexibility. However, for broader learner retention in future versions (v3/v4 models), the platform should transition to **Progressive Feature Disclosure** so first-time users are not overwhelmed by receiving the entire linguistic system and all review machinery at once.

### Key Progressive Disclosure Milestones (v3 / v4 Vision):
1. **Preventing Cognitive Overload**:
   - First-time users should not be dropped into a completely new environment with every menu, chart, and algorithm unlocked. Explaining the Trail, Atlas, SM-2 Review intervals, and 9 consonant shifts in a single session is overwhelming.
2. **Staged System Unlocking**:
   - **Phase 1 (Lessons 1–2: The Foundation)**: Keep the interface hyper-focused on The Trail and the core Germanic cognate realization. Advanced SRS configurations and the full Atlas constellation remain quietly dormant.
   - **Phase 2 (After Lesson 3: The Review Introduction)**: Unlock the **Review Hub** only after the learner has accumulated ~15–20 words in their learning queue. Introduce review styles progressively (e.g. Quick Flip recall first, then MCQ recognition, then Tile Builder, then Typing).
   - **Phase 3 (After Lesson 5: The Phonetic Map)**: Unlock **The Atlas Constellation** once learners have encountered multiple sound shift rules ($P \rightarrow FF/F$, $T \rightarrow SS/S$) and can appreciate how words radiate outward from rules.
   - **Phase 4 (Extended Engagement)**: Unlock gamified consistency features (e.g. Streaks, Weekly consistency rings, Calque deep dives, Community leaderboards) gradually as habit-reinforcing mechanisms.
