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
| **First 30 Seconds** | *"Wait, that's real German? I just deduced that myself?"* | Onboarding is an instant interactive Sound Shift Walkthrough directly launching into Lesson 1. Zero signup walls or feature tours. |
| **First 3 Lessons** | *"There is an actual system to this language. It's not arbitrary."* | Present the sound shift pattern *before* the vocabulary, showing how words radiate from one rule. |
| **Lessons 4–8** | *"I can predict words before the app even displays them."* | Exercises emphasize *rule application* and derivation rather than passive recognition. |
| **Lessons 9–18** | *"German grammar actually makes sense when seen as historical logic."* | Grammar points (cases, word brackets, prefixes) are explained as natural thought evolution (e.g., `-st` from archaic *thou*). |
| **Atlas Exploration** | *"I can follow any rabbit hole and see how the whole language fits together."* | 100% open constellation map from Day 1 with 4-tier visual progress states. |
| **Daily Habit** | *"I want to check today's insight"* (not *"I'll lose my streak"*). | Engagement driven by curiosity (Daily Insight cards, unlock milestones) rather than streak guilt. |

---

## 3. Product Architecture: Three Navigation Pillars

The platform has two core exploration layers interconnected by a unified navigation bar, cross-layer word entity links, and an integrated Review Hub:

```
┌──────────────────────────────────────────────────────────────┐
│                     LAYER 2: THE ATLAS                       │
│    100% Open Constellation Map from Day 1                    │
│    Explore any word tree, shift family, or custom exercise   │
├──────────────────────────────────────────────────────────────┤
│                     LAYER 1: THE TRAIL                       │
│    30-Lesson Structured Progression                          │
│    Conversational mentor voice · Soft-gated exercises        │
└──────────────────────────────────────────────────────────────┘

Cross-Cutting: REVIEW HUB (3rd navigation tab)
  Etymologically-grouped spaced repetition with 4 selectable decks
```

**Bottom Navigation (3 tabs):**
`📖 Trail` · `🗺️ Atlas` · `🔄 Review`

Review is elevated to a primary navigation tab because after the first week it becomes the most-used daily feature. Burying it behind the dashboard dilutes its importance.

### Cross-Layer Word Entity Links

Every German word across the entire platform is a **tappable entity** that opens a consistent **Word Detail Card** (bottom sheet on mobile, side panel on desktop). This card shows:

- The word, pronunciation, IPA, audio playback
- Its shift family and shift rule
- Its mastery state (Unexplored / Explored / Encountered / Mastered)
- "Appears in: Lesson 3" → links to that lesson section
- "Part of: P→F/FF constellation" → links to that Atlas branch

This single pattern stitches both layers together into an interconnected linguistic web, ensuring the "rabbit hole" promise of the Atlas is fulfilled.

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

The one place where animation IS used is the **Onboarding walkthrough hero** (Section 7.1). When a first-time user steps through the initial derivation and sees English transform into German, the animated morph creates the critical "wow" moment. This is the only context where the animation adds more than it costs.

```
Step 1:  h o [ p ] e
Step 2:  h o [ p → ff ] e n  (cyan transition glow, 400ms ease-out)
Step 3:  h o f f e n  🔊     (amber resolution)
```

**Progressive reduction for returning users:** The morph plays at full speed during onboarding. In subsequent exercises and review, transitions resolve briskly with subtle cyan→amber color indicators. Users can toggle animation speed in settings (Full / Reduced / Off).

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

---

## 7. Screen-by-Screen UI Walkthroughs

### 7.1 Onboarding: Interactive Sound Shift Walkthrough & Direct Trail Launch

This is the ONE screen that uses the animated Linguistic Morph (see Section 4). The animation creates the critical first "wow" moment by demonstrating that German words are systematic transformations of English words the learner already knows.

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│                  WELCOME TO STAMMBAUM                  │
│             German isn't foreign. It's family.         │
│                                                        │
│        ┌──────────────────────────────────────┐        │
│        │  English: hope                       │        │
│        └──────────────────────────────────────┘        │
│                                                        │
│                     ↓ Shift: P → FF                    │
│                                                        │
│                  h o f f e n   🔊                      │
│                  (animated morph on first encounter)   │
│                                                        │
│        That's real German.                             │
│        You just derived it using historical shifts.    │
│                                                        │
│        ── The Three Pillars ──                         │
│        📖 The Trail  ·  🗺️ The Atlas  ·  🔄 Review Hub  │
│                                                        │
│        ┌──────────────────────────────────────┐        │
│        │  Start Course (Lesson 1) →           │        │
│        └──────────────────────────────────────┘        │
│        [ Or explore The Atlas map ]                    │
│                                                        │
└────────────────────────────────────────────────────────┘
```

#### The First-Encounter Derivation Flow

1. **Instant Proof of Concept:** Within the first 10 seconds, the learner witnesses a direct cognate shift (`hope` → `hoffen`, `think` → `denken`). No grammar tables, no signup walls.
2. **Tri-Color Gender Introduction:** Introduces grammatical gender articles (`der` = Azure Blue, `die` = Vivid Rose, `das` = Emerald Green) early so learners recognize the visual grammar cues from Day 1.
3. **Immediate Trail Launch:** The modal immediately funnels the learner directly into Lesson 1 of The Trail, keeping cognitive momentum uninterrupted.

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
│       📖 Trail          🗺️ Atlas          🔄 Review       │
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

Appears when any German word is tapped anywhere in the app — in a lesson, in the Atlas, or in review. Renders as a bottom sheet on mobile, side panel on desktop.

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
│       📖 Trail          🗺️ Atlas          🔄 Review       │
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

The review system is a **primary navigation tab** (`🔄 Review`), not a button buried on the dashboard. After the first week of use, spaced-repetition review becomes the most important daily activity. It deserves equal navigation weight with Trail and Atlas.

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
1. **Interactive Shift Hero** — same as onboarding. Let visitors see and interact with live sound shift transformations immediately with zero friction
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

Measurable proxies: lesson completion rate, insight card tap-through rate, review completion rate, word count growth per week.

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
| **Analytics & Telemetry** | **PostHog (Self-Hosted / Cloud)** | Privacy-friendly event tracking for lesson completions and review sessions. |
| **Offline / PWA** | **Service Worker + next-pwa** | Cache lesson content, current + next lesson, and due review deck for offline use. Sync on reconnect. |

---

## 17. Specifications & Content Inventory

### Content Inventory Breakdown

| Content Type | Count Target | Specifications |
|---|---|---|
| **Trail Lessons** | 30 Lessons | 5 structured sections each (Hook, Pattern, Table, Practice, Summary). |
| **Curriculum Vocabulary** | ~300 Core Words | High-frequency German words explicitly taught in the course. |
| **Atlas Cognate Lexicon** | ~500+ Words | Extended lexicon mapping English words to shifted German cognates across the 9 sound shift families and compound calques. |
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

### Phase 1: Interactive Core & Sound Shift Engine (Weeks 1–3)
- [ ] Initialize Next.js App Router repository with Tailwind CSS dark theme tokens and the full semantic + state color system.
- [ ] Build core sound shift derivation engine with ~100 initial cognate pairs across primary High German consonant shifts.
- [ ] Develop the `<ShiftPair>` Static Shift Annotation component (changed letter highlighting with grey/cyan).
- [ ] Build the `<FootNote>` component (footnote markers + bottom sheet on mobile, margin notes on desktop).
- [ ] Develop device-adaptive exercise components (drag/tap tiles + full desktop keyboard listeners + German character bar for mobile + Alt+key shortcuts for desktop).
- [ ] Author Lessons 1–4 in MDX.
- [ ] Build the Word Detail Card (cross-layer bottom sheet / side panel).
- [ ] Implement 3-tab bottom navigation (Trail, Atlas, Review).

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
- [ ] Expand Atlas cognate lexicon to 500+ words across all shift constellations.
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

## 21. Lesson Progression Architecture & Repetition Framework

This section defines the structural engine behind lesson ordering, vocabulary sequencing, repetition density, and difficulty ramping across the full 30-lesson curriculum. Every decision here is optimized for three priorities: **retention** (the learner remembers what they learned), **ease** (the learner never hits a difficulty wall), and **curiosity** (the learner wants to continue).

### 21.1 The Core Problem: Three Competing Structuring Models

Three natural approaches to structuring an etymological language curriculum each have distinct strengths and distinct failure modes:

| Model | Principle | Strength | Failure Mode |
|---|---|---|---|
| **Shift-Family Grouping** | Teach all P→F words together, then all TH→D words | Clean mental model — the learner sees the full pattern | Dumps too many words at once; no difficulty curve within a family; obscure words (Affe) taught alongside obvious ones (hoffen) |
| **Difficulty Ladder** | Teach easiest/most-frequent words first regardless of shift family | Smooth learning curve; high-frequency words create immediate usefulness | Destroys pattern recognition — the entire thesis of this app. Isolated words without a governing rule feel like random flashcards |
| **Connection Web** | Teach a word, then teach everything connected to it | Creates cascading "aha" moments; shows language as a living network | Rabbit holes lead to uncontrolled difficulty spikes; cognitive load is unpredictable |

**None of these work alone. The solution is a Spiral Shift Model that combines all three.**

### 21.2 The Spiral Shift Model

Each consonant shift family is **NOT taught once and exhausted**. Instead, each shift is *introduced* with its 3–4 most transparent, high-frequency cognates, then *revisited* in later lessons with harder words, compounds, grammar integration, and edge cases. The shift family's vocabulary spirals outward across the full 30-lesson arc in distinct layers:

```
Layer 1 — Core Introduction (Phase 1):
  Lesson 3:   P→F introduced with hoffen, helfen, schlafen, Schiff
               → 4 transparent, high-frequency cognates
               → Learner sees the rule clearly with obvious examples

Layer 2 — Grammar Integration (Phase 2):
  Lesson 12:  Satzklammer exercise uses "einschlafen" (ein- + schlafen)
               → Previously learned root reappears inside a new grammar concept
               → Review is invisible — the grammar lesson needs the word

Layer 3 — Word Formation & Compounds (Phase 3):
  Lesson 19:  Compound noun engineering uses Hoffnung, hoffnungsvoll, hoffnungslos
               → Root word "hoffen" becomes the base for derivation
               → Learner sees how one root radiates into a word family

Layer 4 — Deep Derivation & Verb Families (Phase 3):
  Lesson 25:  Verb family exploration maps helfen → Hilfe → behilflich
               → Vowel changes and derivation patterns from the root
               → The shift family's full depth is revealed

Layer 5 — Synthesis (Phase 3):
  Lesson 30:  Capstone passage contains hoffen, helfen, schlafen in context
               → Full reading comprehension using accumulated vocabulary
               → The learner sees how far they've come
```

**Each shift family touches at least 4 separate lessons** across the curriculum, never appearing only once. This means the P→F shift isn't "done" after Lesson 3 — it's a thread that runs through the entire course.

**Why this works:**
1. **Pattern recognition is preserved** — shift-family grouping within each spiral layer
2. **Difficulty is controlled** — high-frequency transparent words first, obscure and compound words later
3. **Connections emerge naturally** — when you revisit `hoffen` in Lesson 19 to teach `Hoffnung`, the root connection IS the lesson
4. **Repetition is structural, not bolted on** — words reappear because the curriculum architecture demands them, not because a review algorithm forcibly inserts them

### 21.3 Cognitive Load Budget Per Lesson

Research on vocabulary acquisition (Nation, 2001; Webb, 2007) and working memory constraints (Miller, 1956) converges on practical limits. This app's etymological pairing approach (English cognate → shift rule → German word) carries roughly double the information density per word compared to a standard flashcard app, so budgets are set conservatively:

| Parameter | Budget | Rationale |
|---|---|---|
| **New vocabulary words** | 5–7 per lesson | Each word arrives with its English cognate pair + shift rule, effectively doubling cognitive load per item |
| **New structural concepts** | 1–2 max per lesson | A new consonant shift OR a new grammar point, but rarely both simultaneously in the same lesson |
| **Review vocabulary in exercises** | 4–8 previously learned words | Woven into exercises, example sentences, and contrast drills — NOT a separate "review" block |
| **Total active vocabulary per lesson** | 10–15 words | Combined new + review keeps sessions feeling dense but never overwhelming |
| **Estimated lesson duration** | 10–15 minutes | Short enough for daily habit, long enough for meaningful learning |

**Exception:** The first 2 lessons slightly exceed the new-word budget by front-loading core structural vocabulary (pronouns, modal verbs, basic sentence frames) that become the substrate for ALL subsequent lessons. This initial investment pays off immediately because every future exercise needs `ich`, `kann`, `nicht`, `du`, etc.

### 21.4 The 7-Encounter Repetition Framework

Vocabulary acquisition research consistently shows that a word requires **7–12 meaningful encounters** in varied contexts before it transitions to long-term productive memory (Nation, 2001). Crucially, not all encounters are equal — passive recognition (seeing a flashcard) is the weakest type; active production in a novel context is the strongest.

Each curriculum word is architected to appear across **at least 7 distinct encounter types** throughout the 30-lesson arc. This is the structural repetition layer — it happens *within the lessons themselves*, independent of the SRS Review system:

| Encounter | Type | What Happens | When (Offset from Introduction Lesson N) | Retention Mechanism |
|---|---|---|---|---|
| **1** | **Introduction** | Word first appears in the lesson's Shift Transformation Table with static annotation | Lesson N | Pattern recognition via shift rule |
| **2** | **Guided Practice** | Derivation exercise in the same lesson ("Apply P→FF: hope → ___") | Lesson N | Active production with scaffolding |
| **3** | **Interleaved Drill** | Mixed exercise that combines this word's shift with a different, previously learned shift | Lesson N+1 to N+2 | Discrimination — learner must identify WHICH rule applies, not just apply a known rule |
| **4** | **Sentence Context** | Word appears as vocabulary inside a grammar lesson's example sentence | Lesson N+3 to N+8 | Contextual meaning in a real sentence structure |
| **5** | **Derivation / Compound** | Root word reappears as the base of a compound or morphological derivation | Lesson N+8 to N+16 | Morphological depth — learner sees how roots radiate into word families |
| **6** | **Contrastive Review** | Word is explicitly compared with a confusable word or a different shift's output | Lesson N+10 to N+20 | Error prevention and fine discrimination |
| **7** | **Synthesis Passage** | Word appears inside a multi-word authentic German sentence or reading passage | Lessons 27–30 | Holistic fluency and reading comprehension |

**This framework operates IN ADDITION TO the SRS Review tab.** The Review tab handles algorithmic spaced repetition (SM-2 intervals). The 7 encounters above are structurally embedded in the curriculum itself — they happen even if the user never opens the Review tab. Together, the two systems guarantee that no word is ever "taught and forgotten."

### 21.5 Concrete Encounter Arc Examples

#### Example A: `hoffen` (hope) — Full 7-Encounter Arc

| # | Lesson | Encounter Type | Exact Context |
|---|---|---|---|
| 1 | L3 (P→F/FF Shift) | Introduction | Shift Table: ho·p·e → ho·ff·en 🔊 |
| 2 | L3 (P→F/FF Shift) | Guided Practice | Exercise: "Apply the P→FF shift to 'hope': ___" → `hoffen` |
| 3 | L5 (T→S/SS Shift) | Interleaved Drill | Mixed matching exercise: "Match each pair: hope→?, water→?, think→?" — learner must recall hoffen from 2 lessons ago while learning new T→S words |
| 4 | L12 (Satzklammer) | Sentence Context | "Ich hoffe, dass du morgen kommst." — used as example sentence to demonstrate the subordinate clause bracket structure |
| 5 | L19 (Compound Nouns) | Compound/Derivation | Deconstruct: `Hoffnung` = hoffen + -ung (hope → hope-noun). Build: `hoffnungsvoll` = Hoffnung + -voll (hopeful), `hoffnungslos` = Hoffnung + -los (hopeless) |
| 6 | L23 (Further Shifts) | Contrastive Review | "You know hoffen uses P→FF. What about 'open'? → öffnen, same rule!" — extends the pattern to a new word using the familiar rule |
| 7 | L30 (Capstone) | Synthesis Passage | Appears in the final decoded German paragraph the learner reads and analyzes |

#### Example B: `Wasser` (water) — Full 7-Encounter Arc

| # | Lesson | Encounter Type | Exact Context |
|---|---|---|---|
| 1 | L5 (T→S/SS Shift) | Introduction | Shift Table: wa·t·er → Wa·ss·er 🔊 |
| 2 | L5 (T→S/SS Shift) | Guided Practice | Exercise: "Apply the T→SS shift to 'water': ___" → `Wasser` |
| 3 | L7 (D→T Shift) | Interleaved Drill | Mixed discrimination: "Which shift? Wasser (T→SS) vs. Tochter (D→T)" — forces the learner to distinguish two different rules |
| 4 | L11 (Article Systems) | Sentence Context | "Das Wasser ist kalt." — introduces the neuter article `das` using a known, comfortable word |
| 5 | L19 (Compound Nouns) | Compound/Derivation | Deconstruct: `Wasserhahn` (water tap = Wasser + Hahn), `Wasserfall` (waterfall = Wasser + Fall) |
| 6 | L21 (Plural Systems) | Contrastive Review | "Wasser → no plural marker change (das Wasser, die Wasser)" — uses the known word to illustrate an unusual plural pattern |
| 7 | L30 (Capstone) | Synthesis Passage | Appears in the final reading passage |

#### Example C: `denken` (think) — Full 7-Encounter Arc

| # | Lesson | Encounter Type | Exact Context |
|---|---|---|---|
| 1 | L4 (TH→D Shift) | Introduction | Shift Table: th·ink → d·enken 🔊 |
| 2 | L4 (TH→D Shift) | Guided Practice | Exercise: "Apply the TH→D shift to 'think': ___" → `denken` |
| 3 | L5 (T→S/SS Shift) | Interleaved Drill | Mixed matching: "think→?, water→?, hope→?" — three different shifts in one exercise |
| 4 | L9 (Conjugation Roots) | Sentence Context | "Ich denke, du denkst, er denkt" — denken conjugated as the demonstration verb for personal endings |
| 5 | L14 (Inseparable Prefixes) | Compound/Derivation | "nachdenken" (to reflect = nach + denken), "bedenken" (to consider = be + denken) |
| 6 | L28 (Vowel Mutations) | Contrastive Review | "denken → Gedanke (thought, noun) — vowel shift e→a in the derivation" |
| 7 | L30 (Capstone) | Synthesis Passage | Used in final reading passage |

### 21.6 Difficulty Dimensions & Sequencing Logic

Not all words within a shift family are equally easy. Difficulty is a composite of five measurable dimensions, and **words are sequenced within each shift family from easiest to hardest across these dimensions**:

| Dimension | Easy End (Introduce First) | Hard End (Introduce Later) | How to Measure |
|---|---|---|---|
| **Cognate Transparency** | water → Wasser (visually/phonetically obvious) | forget → vergessen (opaque without explanation) | Subjective rating 1–5 by content author |
| **Phonetic Distance** | brother → Bruder (close mouth shapes) | knight → Knecht (unfamiliar German phoneme cluster) | IPA edit distance |
| **Morphological Simplicity** | Single shift only (P→F, nothing else changes) | Multiple simultaneous changes (prefix + shift + vowel mutation) | Count of transformations |
| **Word Frequency in German** | Top 500 (es, was, gut, machen) | Below 3000 (Affe, reifen, Knecht) | Leipzig/SUBTLEX-DE frequency corpus rank |
| **Concept Familiarity** | Concrete nouns, daily-use verbs (water, eat, sleep) | Abstract nouns, literary terms (longing, repentance) | Concreteness rating |

**Sequencing Algorithm Applied to Each Shift Family:**

1. **Layer 1 — Introduction (Phase 1 lessons):** Select the 3–4 words from the shift family that score EASIEST across all 5 dimensions simultaneously. These form the lesson's core Shift Transformation Table. Example: P→F introduces hoffen (frequent, transparent, single shift), helfen (frequent, transparent), schlafen (transparent, common concept) — NOT Affe (infrequent, less transparent).

2. **Layer 2 — Grammar Integration (Phase 2 lessons):** When a grammar lesson needs example vocabulary, pull from previously introduced shift families. Select words that fit the grammar point naturally. Example: Teaching conjugation (L9) uses `denken` because it's already known AND has a clean regular conjugation pattern.

3. **Layer 3 — Deepening (Phase 3 lessons):** Introduce the HARDER words from each shift family — lower frequency, more morphological complexity, less transparent cognates. Example: `Affe` (P→FF, but less transparent), `reifen` (P→F with vowel difference), and compound words built from known roots.

4. **Layer 4 — Synthesis (Capstone lessons):** All previously introduced words appear in authentic multi-sentence reading passages. No new shift rules — only new contexts for known vocabulary.

### 21.7 Shift Family Introduction Order & Rationale

The order in which consonant shift families are introduced across the curriculum follows a strict pedagogical logic. This is not arbitrary — each position is justified:

| Order | Lesson | Shift Family | Why This Position |
|---|---|---|---|
| 0th | L1–L2 | Core Germanic verbs + Modal auxiliaries | **Substrate vocabulary.** Pronouns (ich, du, er), modals (kann, will, muss), and basic verbs (lernen, finden, kommen) are needed to BUILD every future exercise sentence. Without "Ich kann ___ " as a frame, no exercise in L3+ works. This is infrastructure, not a shift lesson. |
| 1st | L3 | P → F/FF | **Highest cognate transparency.** "hope → hoffen" is almost self-evident even without explanation. This is the shift most likely to produce the "wait, that's real German?" reaction. Confidence-builder. |
| 2nd | L4 | TH → D | **Very transparent AND connects to ultra-high-frequency function words.** the→die, thou→du, think→denken, thank→danken. This shift delivers the highest ROI per lesson — function words alone give the learner 5+ words they'll use in every sentence. |
| 3rd | L5 | T → S/SS | **Contains the most famous cognate pair in Germanic linguistics** (water→Wasser). Also introduces essential vocabulary: es (it), was (what), aus (out). High frequency, high transparency. |
| 4th | L6 | K → CH | **Introduces the challenging "ch" phoneme** that English lacks. Deliberately delayed until the learner has 3 successful shifts under their belt and enough confidence to handle a new sound. Ich-Laut [ç] vs. Ach-Laut [x] is a pronunciation milestone. |
| 5th | L7 | D → T | **Counter-intuitive — English D becomes German T**, which is the opposite direction from TH→D. Requires the learner to hold two opposing shift patterns simultaneously. Only possible after 4 shifts have trained the concept of "sound shifting" itself. |
| 6th | L8 | Latin Bridge (-ieren) | **Deliberate cognitive rest stop.** After 5 consecutive consonant shift lessons, the learner gets an easy win. Latin-origin -ieren words (organisieren, studieren, funktionieren) require ZERO shift logic — they're almost identical to English. This acts as a palate cleanser before Phase 2 (grammar) begins. Psychologically, it says: "See, German isn't always hard." |

### 21.8 Interleaving Schedule: New vs. Review Content Ratio

The ratio of new content to review content shifts progressively across the three curriculum phases. This **inverted pyramid** is one of the most important structural decisions in the curriculum:

| Phase | Lessons | New Content | Review / Repetition | What This Means in Practice |
|---|---|---|---|---|
| **Phase 1** (Foundational) | L1–L8 | **70% new**, 30% review | After L3, every exercise set mixes 2–3 items from previously learned shifts | Early lessons are mostly introduction because the review pool is still small. By L5, enough words exist for meaningful cross-shift exercises |
| **Phase 2** (Structural) | L9–L18 | **50% new**, 50% review | Grammar lessons use previously learned vocabulary as example sentences. Every exercise set includes 4–5 review words | The growing vocabulary pool enables rich interleaving. Grammar concepts like conjugation and Satzklammer REQUIRE using known words, so review is baked into the lesson's topic |
| **Phase 3** (Fluency) | L19–L30 | **30% new**, 70% review | Compound and derivation lessons inherently revisit root words. Synthesis passages pack in many known words. Fewer new vocabulary items per lesson | By this phase, **deepening existing knowledge matters more than adding new words**. The learner's vocabulary web becomes denser, not wider |

**Why the inverted pyramid matters:** Most language apps maintain a constant rate of new word introduction (5 new words every lesson, relentlessly, forever). This leads to the "mile wide, inch deep" problem — users can recognize 500 words on a flashcard but can't produce 50 in a sentence. The decreasing new-word rate in Phase 3 ensures **depth over breadth**.

### 21.9 Cross-Shift Discrimination Exercises

One of the highest-value exercise types is **discrimination**: presenting words from DIFFERENT shift families and asking the user to identify which rule applies. This prevents the most common failure mode in pattern-based learning — the user can apply P→F when explicitly told "this is a P→F exercise" but freezes when given a novel word without the label.

**Discrimination exercises are introduced the moment the learner knows 2+ shift families:**

| Lesson | Discrimination Scope | Example Exercise |
|---|---|---|
| L4 | P→F vs. TH→D (2 families) | "Which shift: hope→hoffen (?) vs. think→denken (?)" |
| L5 | P→F vs. TH→D vs. T→S (3 families) | "Sort these pairs by their shift rule" |
| L6+ | All previously learned families | "Identify the shift: machen, hoffen, Wasser, denken" |
| L8 | Meta-discrimination: consonant shift vs. Latin loan | "Which of these words can you derive from English using a shift rule, and which is a Latin borrowing?" |
| L14+ | Shift + grammar discrimination | "Which shift connects 'forget' and 'vergessen'? Bonus: what does the ver- prefix mean?" |

**Example discrimination exercise (as it would appear in-app):**

```
Which shift rule connects each pair?

1. hope → hoffen      [ P→F/FF | TH→D | T→S/SS | K→CH ]    ← Answer: P→FF
2. think → denken     [ P→F/FF | TH→D | T→S/SS | K→CH ]    ← Answer: TH→D
3. water → Wasser     [ P→F/FF | TH→D | T→S/SS | K→CH ]    ← Answer: T→SS
4. make → machen      [ P→F/FF | TH→D | T→S/SS | K→CH ]    ← Answer: K→CH
```

This exercise type is cheap to author (it reuses all existing vocabulary) and extremely high-value for retention because it forces **active retrieval of the rule**, not just the word.

### 21.10 Connection Bridges Between Lessons

Every lesson explicitly connects its content to previously learned material through opening and closing bridges. These bridges serve two functions: (1) warm-up recall of known words and (2) curiosity hooks for upcoming content.

**Opening Bridge (Warm-Up — first 1–2 minutes of every lesson):**

A quick, low-stakes recall of 2–3 previously learned words presented in a new context. This primes the learner's memory and creates a sense of continuity:

```
Lesson 5 Opening:
"You know hoffen (P→F) and denken (TH→D).
Now: what happens when English 'T' meets the same historical force?"
```

```
Lesson 12 Opening:
"You can already say 'Ich kann schlafen' (I can sleep).
But what happens when German puts the verb somewhere unexpected?"
```

**Closing Bridge (Curiosity Chain — final element of every lesson):**

The last screen plants a seed for the next lesson. The bridge explicitly links the upcoming content to something the user already knows, using the varied teaser formats from Section 12.3:

```
Lesson 5 Closing:
"You've decoded T→S words like Wasser and essen.
Next: a shift that turned English 'K' into a sound English doesn't even have.
Can you guess what 'make' becomes in German?"
```

```
Lesson 7 Closing:
"You've now seen 5 consonant shift families.
Next lesson is different — a free gift. Hundreds of German words
that look EXACTLY like English. No shift needed."
```

These bridges convert lesson boundaries from stop-points ("I'm done for today") into pull-points ("I want to see what's next").

### 21.11 Vocabulary Reuse Density Map

To guarantee every word reaches its 7+ encounter minimum, the curriculum maintains a **reuse density map** — a matrix tracking every lesson in which each core word appears. This map is built during content authoring and verified before publication.

**Abbreviated example (core Phase 1 vocabulary):**

```
Legend:  I = Introduction       D = Discrimination drill    S = Sentence context
         C = Compound/derivation  VF = Verb family           Syn = Synthesis
         G = Grammar example     Rev = Contrastive review

Word         | L1  L2  L3  L4  L5  L6  L7  L8 | L9  L10 L11 L12 | L13-L18  | L19-L29  | L30
-------------|----------------------------------|-----------------|----------|----------|----
hoffen       |          I           D           |             S   | G        | C, Rev   | Syn
helfen       |          I       D               |     S           |          | VF       | Syn
schlafen     |          I           D           |     S       G   |          | C        | Syn
Wasser       |                  I       D       |         S       | G        | C        | Syn
denken       |              I       D           | G               | G        | C, Rev   | Syn
machen       |                      I       D   | G       S       | G, G     | C        | Syn
trinken      |                          I       | G               |          | VF       | Syn
Bruder       |              I       D           |         S       | G        |          | Syn
du           |  I       D   S   S   S   S   S   | S   S   S   S   | S, S, S  | S, S     | Syn
kann         |      I   S   S   S   S   S   S   | S   S   S   S   | S, S     | S        | Syn
```

**Minimum encounter thresholds:**
- **Core vocabulary (top 50 words in the curriculum):** 8–10 lesson appearances minimum
- **Standard vocabulary (all other taught words):** 5–7 lesson appearances minimum
- **Function words (ich, du, er, kann, nicht, ist, etc.):** Near-ubiquitous — appear in nearly every lesson as structural scaffolding
- **Tier 4 / Enrichment words (Affe, Knecht, etc.):** 2–3 lesson appearances only — they exist primarily in the Atlas for self-directed exploration

**No word in the curriculum should have fewer than 5 lesson appearances** (excluding the SRS Review system). If a word doesn't naturally fit into 5 lessons, it should be reconsidered for inclusion in the curriculum and potentially moved to Atlas-only status.

### 21.12 The "Invisible Review" Principle

The single most important pedagogical constraint in this curriculum: **the user should NOT feel like they're doing review.** Unlike Duolingo's explicit "Practice" buttons or Anki's deck grinding sessions, repetition in this curriculum is *invisible* — words reappear because the lesson's topic naturally demands them.

**Examples of invisible review (the learner doesn't perceive these as repetition):**

| Lesson | New Topic | Words Invisibly Reviewed | Why They Appear |
|---|---|---|---|
| L9 (Conjugation) | Personal verb endings (-e, -st, -t) | denken, machen, trinken, helfen | You CAN'T teach conjugation without verbs. The grammar lesson NEEDS previously learned verbs as examples. |
| L12 (Satzklammer) | Sentence bracket structure | hoffen, schlafen, können | Building "Ich hoffe, dass du morgen kommst" requires the known verb hoffen. The grammar forces the review. |
| L14 (Inseparable Prefixes) | ver-, be-, er- prefixes | vergessen (forget), verstehen (understand) | vergessen was previewed in L5 (T→S/SS) as a complex word. Now its prefix is explained. The same word, a new angle. |
| L19 (Compound Nouns) | How German builds compounds | hoffen→Hoffnung, Wasser→Wasserfall | Compound lessons INHERENTLY revisit root words. Every compound deconstruction is a root review. |
| L22 (Comparatives) | Umlaut comparatives (kalt→kälter) | kalt (L7, D→T shift), groß (L5, T→S shift) | Comparative grammar needs adjectives. The learner reviews kalt while learning the -er comparative pattern. |

**The review IS the lesson. The lesson IS the review.** This is only possible because the curriculum is etymologically structured — every advanced concept (compounds, conjugation, cases, prefixes) inherently references root vocabulary from earlier shift lessons. A traditionally structured language course can't do this because its vocabulary is thematically organized (food words, travel words, etc.) with no structural connections between themes.

### 21.13 Word Frequency Prioritization & Tiering

Within each lesson and shift family, words are sequenced by **German word frequency** using a standard frequency corpus (Leipzig Corpora Collection or SUBTLEX-DE). This ensures the learner acquires the most useful words first, regardless of which shift family they belong to:

| Priority Tier | Frequency Range | When Introduced | Examples | SRS Treatment |
|---|---|---|---|---|
| **Tier 1: Essential** | Top 500 most common German words | Phase 1 core words (L1–L8) | es, was, aus, gut, trinken, du, machen | Always in "Due Today" review deck |
| **Tier 2: Common** | Ranks 500–1,500 | Phase 1–2 exercises and grammar examples | hoffen, helfen, Wasser, kochen, machen | Always in "Due Today" review deck |
| **Tier 3: Useful** | Ranks 1,500–3,000 | Phase 2–3 deepening and compounds | schlafen, brechen, reifen | In "Due Today" after first correct practice |
| **Tier 4: Enrichment** | Ranks 3,000+ | Phase 3 only, or Atlas exploration | Affe, Knecht, reifen | **Never auto-added to "Due Today"** — enters SRS only if the user explicitly practices them in Atlas sandbox |

**Tier 4 words are never mandatory.** They exist in the Atlas for curious explorers and may appear in optional exercises, but they are never tested in the SRS Review's "Due Today" deck unless the user explicitly seeks them out. This prevents the review queue from filling with obscure words that crowd out essential vocabulary.

### 21.14 Handling Words With Multiple Simultaneous Shifts

Some German words exhibit multiple historical changes at once (consonant shift + vowel mutation + prefix change). These "compound-transformation" words are **deliberately delayed** until the user has mastered each component transformation individually. They become multi-lesson payoff arcs — puzzles that are progressively solved across the curriculum:

**Example: `vergessen` (forget)**

```
Full transformation breakdown:
  English:    forget
  German:     vergessen

  Component 1:  for-  →  ver-    (prefix shift)      ← Taught in L14 (Inseparable Prefixes)
  Component 2:  -g-   →  -g-     (no change)
  Component 3:  -t    →  -ss-    (T → SS shift)       ← Taught in L5 (T→S/SS Shift)
  Component 4:  -e-   →  -e-     (vowel preserved)
  Component 5:  -en   suffix     (German infinitive)   ← Taught in L1 (Germanic Core)
```

**How vergessen spirals through the curriculum:**

| Lesson | Role | What the Learner Sees |
|---|---|---|
| L5 (T→S/SS) | Preview teaser | "Here's a tricky one: 'forget' → 'vergessen.' The T→SS shift is there (t→ss), but there's more going on. We'll decode the 'ver-' part later." |
| L14 (Inseparable Prefixes) | Component 2 explained | "Remember vergessen? Now you know: ver- = English 'for-' (as in 'forsake', 'forget'). ver- + gessen → vergessen." |
| L15 (Conversational Past) | Grammar integration | "Ich habe vergessen." — used in past tense sentence construction |
| L30 (Capstone) | Full synthesis | Appears in reading passage, fully understood |

This creates a **multi-lesson payoff arc.** The word `vergessen` starts as a mystery in L5 ("this one's more complex — trust the process"), gets incrementally decoded through L14, and by L30 the learner can fully analyze every component. That cumulative understanding is far more satisfying and durable than seeing the word once with all transformations explained simultaneously.

### 21.15 Lesson-Internal Structure: The 5-Segment Flow

Within each lesson, the 5-segment structure (Hook → Pattern → Table → Practice → Summary) is designed to follow a specific cognitive rhythm:

| Segment | Duration | Cognitive Mode | What Happens | Review Content |
|---|---|---|---|---|
| **1. Hook** | ~1 min | Curiosity / Recognition | Opening bridge recalls 2–3 known words. A surprising connection or question draws the learner in. | 2–3 words from previous lessons |
| **2. Pattern** | ~2 min | Understanding / Explanation | The shift rule is explained in conversational tone. Historical context is given without jargon. | None — pure new content |
| **3. Table** | ~2 min | Scanning / Pattern Recognition | The Shift Transformation Table presents 4–6 word pairs with static annotations. Audio is available. | None — all new shift examples |
| **4. Practice** | ~5–7 min | Active Production / Retrieval | 6–8 exercises presented one at a time. Mix of new words from this lesson + 2–3 review words from previous lessons. | 30–50% of exercises use previously learned words |
| **5. Summary** | ~1 min | Consolidation / Anticipation | Key takeaway. Retry queue for missed exercises. Curiosity chain teaser for next lesson. Atlas bridge link. | Missed items re-tested; teaser previews next lesson |

**The Practice segment (segment 4) is where invisible review happens.** Even in a lesson about P→F, 2–3 of the 6–8 exercises will use words from previous shifts (e.g., a discrimination drill mixing P→F with TH→D). The learner perceives this as "a harder challenge" rather than "review."

### 21.16 Exercise Type Distribution Per Lesson

Not all exercise types appear in every lesson. The distribution is carefully matched to the lesson phase and the learner's growing capability:

| Exercise Type | Phase 1 (L1–L8) | Phase 2 (L9–L18) | Phase 3 (L19–30) | Purpose |
|---|---|---|---|---|
| **Derive It** (rule application) | ●●● Heavy | ●● Moderate | ● Light | Core skill in early lessons; becomes automatic later |
| **Identify the Shift** (pattern recognition) | ●● From L4 | ●●● Heavy | ●● Moderate | Discrimination is the critical mid-curriculum skill |
| **Reverse Cognate Discovery** | ● Light | ●● Moderate | ●● Moderate | Harder direction — requires bidirectional mapping |
| **Sentence Syntax Reconstruction** | — None | ●●● Heavy | ●●● Heavy | Requires grammar knowledge from Phase 2 |
| **Acoustic Match** | ● Light | ●● Moderate | ●● Moderate | Builds phonetic awareness throughout |
| **Morpheme Assembly** | — None | ●● From L9 | ●● Moderate | Requires conjugation knowledge |
| **Compound Deconstruction** | — None | — None | ●●● Heavy | Requires root vocabulary from Phase 1–2 |

**Key principle:** Exercise types are unlocked progressively as the learner acquires the prerequisite skills. Compound Deconstruction exercises can't appear until the learner knows enough root words to deconstruct. Sentence Syntax exercises can't appear until the learner understands German word order (L12+).

### 21.17 The Repetition Decay Curve: When to Stop Repeating

Not every word needs equal repetition forever. High-frequency function words (ich, du, kann, nicht) will be encountered so frequently in example sentences that they self-reinforce without deliberate repetition. The repetition framework therefore applies **diminishing intentional review** for words that have reached a saturation threshold:

| Word Category | Intentional Lesson Appearances | When Repetition Becomes Passive |
|---|---|---|
| **Function words** (ich, du, er, kann, nicht, ist) | L1–L3 (explicit introduction) | After L3: appear in nearly every sentence naturally. No intentional review needed. |
| **Tier 1 vocabulary** (top 50 content words) | 8–10 intentional appearances | After 6+ appearances: shift to passive appearances in example sentences |
| **Tier 2 vocabulary** (standard curriculum words) | 5–7 intentional appearances | After 5 appearances: rely on SRS Review tab for further spaced repetition |
| **Tier 3–4 vocabulary** (lower frequency) | 2–4 intentional appearances | After introduction: rely entirely on SRS and Atlas exploration |

**"Passive appearance"** means the word shows up in an example sentence or exercise, but the exercise isn't TESTING that specific word — it's testing a different word or grammar concept. The learner sees `hoffen` in "Ich hoffe, dass..." while focusing on the subordinate clause structure. The review happens without cognitive effort directed at it.

### 21.18 Anti-Patterns This Framework Explicitly Avoids

| Anti-Pattern | Why It's Harmful | How This Framework Prevents It |
|---|---|---|
| **Teach and forget** | Word appears once in its introduction lesson, never again until the SRS algorithm surfaces it | The 7-Encounter Framework guarantees 7+ structural lesson appearances for every word |
| **Difficulty cliff** | Lessons 1–5 feel easy, Lesson 6 suddenly introduces too many new concepts | Frequency-first sequencing + cognitive load budgets (5–7 new words max) + the Latin Bridge rest stop at L8 |
| **Shift soup** | Too many shift families mixed before any single one is solidified | Each shift gets at least 1 dedicated lesson before interleaving begins. Discrimination exercises start with only 2 families (L4), adding one per lesson |
| **Review fatigue** | Explicit, separate review blocks that feel like homework | Invisible Review principle: repetition is woven into new lesson content. The learner practices old words while learning new concepts |
| **Equal word weight** | Treating `Affe` (rare, rank 5000+) identically to `Wasser` (essential, rank 200) | Frequency tiering: Tier 4 words are Atlas-only, never auto-added to SRS "Due Today" |
| **Pattern-matching without discrimination** | User can apply P→F when told "this is a P→F exercise" but can't identify which rule applies to a novel word | Cross-shift discrimination drills from L4 onward, increasing in scope every lesson |
| **Cognitive overload on compound words** | Teaching `vergessen` (3 simultaneous transformations) before the learner knows any of the components | Multi-shift words are deliberately delayed; each component is taught separately before the compound is assembled |
| **Flat difficulty curve** | Every lesson introduces 5 new words at constant pace from L1 to L30 | Inverted pyramid: Phase 1 is 70% new, Phase 3 is 30% new / 70% deepening. The rate of new words decreases as depth increases |
| **Streak anxiety / guilt loops** | "You missed 3 days — your streak is broken!" messaging | No streaks, no punishment. Weekly consistency dots with zero negative messaging. Review backlog capping (see user preferences) |

### 21.19 Curriculum Implementation Checklist

When authoring the full lesson content (MDX files), each lesson must satisfy these structural requirements before publication:

- [ ] **New word count:** 5–7 new vocabulary words (exception: L1–L2 may exceed)
- [ ] **Review word count:** At least 2–3 words from previous lessons appear in exercises
- [ ] **Opening bridge:** First screen recalls 2–3 known words in a new context
- [ ] **Closing bridge:** Last screen previews next lesson with a curiosity hook
- [ ] **Exercise mix:** Practice segment contains at least 1 discrimination exercise (from L4 onward)
- [ ] **Vocabulary reuse map updated:** Every new word has planned appearances in at least 5 future lessons
- [ ] **Frequency tier assigned:** Every new word tagged with Tier 1–4
- [ ] **Audio assets listed:** Every new word has an audio clip asset path
- [ ] **Multi-shift words flagged:** If a word involves 2+ transformations, its payoff arc across multiple lessons is planned
- [ ] **Footnote / Linguist's Note present:** At least one etymological side note per lesson for depth-seekers

---

## 23. Trail Architecture Decision: Linear Spine, No Branching

### 23.1 The Decision

The Trail is a **strictly linear lesson chain** (L1 → L2 → L3 → ... → L30). There are no branch lessons (1a, 1b, 1c), no parallel tracks, no conditional unlocks within the trail. The three-system architecture provides complete coverage without redundancy:

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  LINEAR TRAIL (The Trail)          → "What should I learn next?" │
│    Clean progression, no decisions    One path, always clear     │
│                                                                  │
│  SELF-DIRECTED DEPTH (The Atlas)   → "I want more of P→F"       │
│    Already branched by design         Constellation = depth      │
│    "⚡ Practice This Branch"          Harder words live here     │
│                                                                  │
│  SPACED REVIEW (Review Hub)        → "What do I need to reinforce?"│
│    Algorithmic, no user decisions     SRS handles timing          │
│                                                                  │
│  Three systems, three distinct jobs, zero redundancy.            │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### 23.2 Why Branching Was Rejected

A branched lesson map (Duolingo-style skill tree or Candy Crush-style forking paths) was evaluated and rejected for five concrete reasons:

| Reason | Detail |
|---|---|
| **1. Duolingo already tried and reversed it** | Duolingo maintained a branched skill tree from 2012–2022. In 2022–2023, they redesigned to a linear path because their retention data showed branching caused decision paralysis — users stalled at branch points wondering "which one should I do first?" and often did neither. If a company with 500M users and a full data science team concluded branching hurts retention, that's strong evidence. |
| **2. The Atlas already IS the branching system** | Branch lessons would contain: the same consonant shift applied to harder, less frequent words. That is exactly what the Atlas constellation already provides. The P→F constellation contains `Affe`, `reifen`, `Pfad` with a "⚡ Practice This Branch" sandbox button. Adding branch trail lessons duplicates this functionality with a worse interface. |
| **3. Delayed unlock notifications are guilt mechanics in disguise** | The spec explicitly rejects streak anxiety and punitive engagement. A "Branch 1a unlocked!" notification 2–3 days later creates the same psychological pressure: "I was supposed to do this and I haven't." It is the exact engagement pattern the product philosophy opposes. |
| **4. Solo builder content burden** | Branched maps roughly triple the content authoring burden (30 main lessons + potentially 40–60 branch lessons). They also require significantly more complex state management and map visualization UI. For a solo builder with a quality-first timeline, this is a losing trade. |
| **5. The Spiral Model already handles depth** | The trimmed words from L3 don't disappear — they resurface naturally in Phase 2–3 lessons through the Spiral Shift Model (Section 21.2). `Affe` appears when teaching compound nouns. `reifen` appears in verb families. The harder words come back when the learner is ready, embedded in new concepts rather than as standalone "more of the same" drills. |

### 23.3 The Atlas Bridge Card (Post-Lesson Depth Prompt)

The one good kernel from the branching idea — surfacing deeper content at the right moment — is captured through an **Atlas Bridge Card** that appears at the end of every shift-introduction lesson (L3–L8). This creates a natural off-ramp into the Atlas without any branching complexity:

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ✓ Lesson 3 Complete — The P → F / FF Shift                 │
│                                                              │
│  You learned 5 P→F core words in the Trail.                 │
│  The Atlas has 6 more words in this constellation            │
│  waiting to be explored.                                     │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  🗺️ Explore P→F/FF in the Atlas →                    │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  📖 Continue to Lesson 4 →                            │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  (The Atlas is always available from the bottom nav too.)    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Behavioral rules:**

- The Atlas Bridge Card appears **only after shift-introduction lessons** (L3–L8, L23). Grammar and synthesis lessons (L9–L22, L24–L30) don't have a corresponding constellation to explore.
- The "Continue to Lesson N+1" button is **always visually dominant** (primary CTA). The Atlas link is secondary. The learner should never feel pressured to detour.
- The card shows the **actual count** of unexplored words remaining in that constellation (e.g., "6 more words"), creating curiosity without obligation.
- If the learner has already explored the relevant Atlas constellation (all words in the branch are at least "Explored" state), the Atlas Bridge Card is suppressed — no need to suggest what they've already done.
- The card does NOT use notification-style language ("New content unlocked!"). It uses informational language ("The Atlas has more words waiting").

### 23.4 Trail Map Visual Design

The Trail screen renders as a **vertical scrollable path** with lesson nodes connected by a continuous line. Each node shows:

```
┌──────────────────────────────────────────┐
│  THE TRAIL                               │
│                                          │
│     ◉ L1 — The Germanic Core        ✓   │
│     │                                    │
│     ◉ L2 — Modal Auxiliaries         ✓   │
│     │                                    │
│     ◉ L3 — The P → F/FF Shift       ✓   │
│     │   └─ 🗺️ Atlas: P→F (3/9)          │
│     │                                    │
│     ◉ L4 — The TH → D Shift         ●   │
│     │   └─ 🗺️ Atlas: TH→D (0/7)         │
│     │                                    │
│     ○ L5 — The T → S/SS Shift       ·   │
│     │                                    │
│     ○ L6 — The K → CH Shift         ·   │
│     │                                    │
│     ⋮                                    │
│                                          │
│  ✓ = Complete  ● = Current  · = Upcoming │
│  🗺️ = Atlas shortcut (shift lessons only)│
│                                          │
└──────────────────────────────────────────┘
```

- **Atlas shortcut links** appear inline beneath completed/current shift lessons showing the constellation progress (e.g., "3/9 words explored"). These are unobtrusive — a single line below the lesson node, not a branching fork.
- Lessons that don't introduce a new shift family (L1, L2, L9–L22, L24–L30) show no Atlas shortcut.
- The map scrolls to the current lesson on load. No horizontal scrolling, no 3D effects, no branching forks.

---

## 24. Concrete Lesson Enhancement Plan (MVP Comparison)

This section documents actionable changes derived from comparing the existing MVP lesson data (`lessons.ts`, 10 fully authored lessons) against the Section 21 Progression Framework. The MVP's content quality, lesson ordering, and etymological explanations are strong. These enhancements apply the framework's structural constraints on top of that content.

### 24.1 Per-Lesson Word Trimming

Each lesson's core Transformation Table should contain **5–6 words maximum**. Words beyond this budget are deferred to Atlas-only status (Tier 3–4) or to Phase 3 deepening lessons. The deferred words remain in the Atlas constellation — they are not deleted from the platform.

| Lesson | Current `table_word_ids` (MVP) | Recommended Core (5–6) | Deferred to Atlas / Phase 3 | Rationale |
|---|---|---|---|---|
| **L1** (Germanic Core) | lernen, finden, kommen, gehen, singen, schwimmen, bringen (7) | lernen, finden, kommen, singen, bringen (5) | gehen → keep but move to exercises only; schwimmen → Atlas | schwimmen is less transparent (sch- prefix); 5 core words is enough to demonstrate -en |
| **L3** (P→F/FF) | hoffen, helfen, schlafen, Schiff, Affe, reifen (6) | hoffen, helfen, schlafen, Schiff (4) + Apfel as PF- example (5) | Affe → Atlas Tier 4 (rare, rank 5000+); reifen → Phase 3 L25 (verb families); Pfeffer, Pfad → Atlas | Affe is low frequency; reifen has vowel complexity; Apfel stays as the PF- variant demo |
| **L4** (TH→D) | denken, danken, drei, Bruder, Ding, Bad (6) | denken, danken, Bruder, du, drei (5) | Bad → L24 (prepositions, "Baden-Baden"); Ding → Atlas; dünn, Donner → Atlas Tier 3 | du is more essential than Bad (it's a function word used in every sentence); Donner is fun trivia but low utility |
| **L5** (T→S/SS) | Wasser, essen, besser, hassen, aus, was (6) | Wasser, essen, besser, was, aus (5) | hassen → Phase 3 (low frequency, negative valence); zwei, zu → L5 exercises as bonus; groß, Straße → Atlas | hassen is emotionally loaded for a beginner lesson; was/aus are ultra-high-frequency function words that deserve table spotlight |
| **L6** (K→CH) | machen, kochen, brechen, sprechen, suchen, buch, milch, woche (8) | machen, kochen, sprechen, Buch, Milch (5) | brechen → Phase 3 L25 (verb families); suchen → exercises only; Woche, Küche → Atlas | 8 words is far over budget; machen/kochen/sprechen are the highest-frequency verbs; Buch/Milch demonstrate the noun K→CH pattern |
| **L7** (D→T) | tag, tür, trinken, garten, tochter, kalt, gut, wort (8) | Tag, Tür, trinken, gut, kalt (5) | Garten → L24 (prepositions); Tochter → Atlas (double-shift with GH→CH); Wort → exercises; Traum, Tisch, tief → Atlas | 8→11 words is the worst overload; tief is a double-shift word that belongs in L23; Tag/gut/kalt are ultra-high-frequency |
| **L8** (Latin -ieren) | studieren, organisieren, reparieren, funktionieren, kapieren, akzeptieren (6) | studieren, organisieren, funktionieren, reparieren, akzeptieren (5) | kapieren → exercises as bonus challenge | kapieren is colloquial; the other 5 are the most internationally transparent |

### 24.2 Cross-Shift Discrimination Exercises to Add

Each lesson from L4 onward must include **at least 1 discrimination exercise** that mixes words from the current lesson's shift with words from previously learned shifts:

| Lesson | Discrimination Exercise Spec |
|---|---|
| **L4** (TH→D) | Add 1 exercise: "Match each pair to its shift rule: hope→hoffen (?), think→denken (?)" — 2 families (P→F vs. TH→D) |
| **L5** (T→S/SS) | Add 1 exercise: "Which shift? Sort these 4 pairs: hoffen (P→F), denken (TH→D), Wasser (T→SS), Bruder (TH→D)" — 3 families |
| **L6** (K→CH) | Add 1 exercise: "Identify the shift for each: machen (?), schlafen (?), essen (?), danken (?)" — 4 families |
| **L7** (D→T) | Add 1 exercise: "Which shift connects each pair?" with 5 options from all 5 learned shift families |
| **L8** (Latin -ieren) | Add 1 meta-discrimination: "Which of these words can you derive using a consonant shift, and which is a Latin loan? studieren, Wasser, machen, funktionieren" |

These exercises reuse existing vocabulary (zero new words needed) and are the highest-value addition for long-term retention.

### 24.3 Opening Bridges to Add

Each lesson from L3 onward must begin with an **Opening Bridge** — a 1–2 sentence warm-up that recalls 2–3 words from previous lessons before introducing the new concept:

| Lesson | Current Hook Opening (MVP) | Recommended Opening Bridge (Prepend to Hook) |
|---|---|---|
| **L3** | "Between 500 and 700 AD, a phonetic wave swept northward..." | **Bridge:** "You already know `lernen` (to learn) and `Ich kann kommen` (I can come). Now: what if we told you that 'hope' is already a German word — it just changed one letter?" |
| **L4** | "Notice how native German speakers learning English often struggle with the 'th' sound?" | **Bridge:** "Quick recall — what's 'hope' in German? (`hoffen` — P→FF). What about 'ship'? (`Schiff`). Good. Now: why doesn't German have a 'th' sound at all?" |
| **L5** | "When ancient Germanic 'T' shifted in High German, it became a hissing sibilant..." | **Bridge:** "You've decoded `hoffen` (P→F) and `denken` (TH→D). Two shift patterns down. Now: what happens when English 'T' meets the same historical force?" |
| **L6** | "During the High German Consonant Shift, ancient Germanic voiceless stop 'k' softened..." | **Bridge:** "Three shifts mastered: P→F (`hoffen`), TH→D (`denken`), T→SS (`Wasser`). Now for a shift that introduces a sound English doesn't have..." |
| **L7** | "Linguistic shifts happen in chains..." | **Bridge:** "When TH hardened to D (think→`denken`), the existing D had to move too. Where did it go? Can you predict what 'day' becomes?" |
| **L8** | "During the High Middle Ages, French courtly culture swept across European nobility..." | **Bridge:** "You've conquered 5 consonant shifts. This lesson is different — a free gift. Hundreds of German words that look almost identical to English. No shift needed." |
| **L9** | "English speakers often view verb conjugation tables as an unnatural obstacle..." | **Bridge:** "You know `machen` (K→CH), `trinken` (D→T), `denken` (TH→D). But so far you've only seen their dictionary forms. What happens when 'thou' enters the picture?" |
| **L10** | "Every beginner wonders: Why does German change 'der' to 'den'..." | **Bridge:** "In English, 'he' becomes 'him' when receiving an action. You already do this naturally. German does the exact same thing — and the proof is in a sound you already know." |

Opening bridges serve three functions: (1) activate prior knowledge, (2) create continuity between lessons, and (3) give the learner a small confidence boost before new material.

### 24.4 Frequency Tier Assignments for All Curriculum Words

Every word in the curriculum must be tagged with a frequency tier (see Section 21.13). Below is the initial assignment for Phase 1 vocabulary:

| Tier | Words | SRS Policy |
|---|---|---|
| **Tier 1** (Top 500) | es, was, aus, gut, du, ich, kann, will, muss, sein, haben, machen, kommen, gehen, finden, trinken, drei | Always in "Due Today" |
| **Tier 2** (500–1500) | lernen, singen, bringen, hoffen, helfen, denken, danken, Bruder, essen, besser, kochen, sprechen, Wasser, Tag, Tür, kalt, Buch, Milch | Always in "Due Today" |
| **Tier 3** (1500–3000) | schlafen, Schiff, reifen, schwimmen, Bad, hassen, brechen, suchen, Woche, Garten, Tochter, Wort, Traum, Tisch | In "Due Today" after first correct practice |
| **Tier 4** (3000+) | Affe, Donner, dünn, Straße, Knecht, Pfad, Pfeffer | **Never auto-added** — Atlas exploration only |

### 24.5 Multi-Lesson Payoff Arcs to Plan

The following compound-transformation words require deliberate multi-lesson arcs (see Section 21.14):

| Word | Transformations | Arc Plan |
|---|---|---|
| **vergessen** (forget) | ver- prefix + T→SS | L5: Preview teaser ("we'll decode ver- later") → L14: Prefix explained → L15: "Ich habe vergessen" → L30: Synthesis |
| **tief** (deep) | D→T + P→F (double shift) | L7: Mentioned in exercises as discovery → L23: Fully analyzed as double-shift example → L30: Synthesis |
| **Tochter** (daughter) | D→T + GH→CH (double shift) | L7: Atlas-only initially → L23: Formally analyzed with GH→CH shift → L30: Synthesis |
| **einschlafen** (fall asleep) | ein- prefix + schlafen (P→F) | L3: schlafen introduced → L13: Separable prefix ein- explained → L12: Used in Satzklammer examples |
| **nachdenken** (reflect) | nach- prefix + denken (TH→D) | L4: denken introduced → L13: Separable prefix nach- explained → L25: Verb family explored |

### 24.6 Vocabulary Reuse Density Targets for Phase 1 Words

The following reuse density targets ensure the 7-Encounter minimum is met. Content authors must verify these before publishing each lesson's MDX:

```
Target minimum lesson appearances (including exercises, sentences, and grammar examples):

hoffen:    L3(I), L5(D), L12(S), L19(C), L23(Rev), L30(Syn)     = 6 ✓ (+ SRS)
helfen:    L3(I), L5(D), L9(G), L19(C), L25(VF), L30(Syn)       = 6 ✓
denken:    L4(I), L5(D), L9(G), L14(C), L28(Rev), L30(Syn)       = 6 ✓
Wasser:    L5(I), L7(D), L11(S), L19(C), L21(Rev), L30(Syn)      = 6 ✓
machen:    L6(I), L7(D), L9(G), L12(S), L15(G), L19(C), L30(Syn) = 7 ✓
trinken:   L7(I), L9(G), L10(S), L15(G), L25(VF), L30(Syn)       = 6 ✓
Tag:       L7(I), L9(D), L11(S), L22(G), L30(Syn)                 = 5 ✓
kalt:      L7(I), L10(S), L22(G-comparative), L30(Syn)            = 4 ⚠ (needs 1 more)
du:        L1(I), L3(S), L4(S), L5(S), L6(S), L7(S), L9(G), ...  = 10+ ✓

Legend: I=Intro, D=Discrimination, S=Sentence, G=Grammar, C=Compound,
        VF=Verb Family, Rev=Contrastive Review, Syn=Synthesis
```

Words marked ⚠ need at least one more planned appearance before the curriculum is finalized.

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
? How prominent should interactive shift tools be in the interface?
> Integrated directly into The Trail and The Atlas as primary exploration surfaces.
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
> In the initial MVP, all tools (Trail, Atlas, Review Hub) are available immediately to maximize exploratory flexibility. However, for broader learner retention in future versions (v3/v4 models), the platform should transition to **Progressive Feature Disclosure** so first-time users are not overwhelmed by receiving the entire linguistic system and all review machinery at once.

### Key Progressive Disclosure Milestones (v3 / v4 Vision):
1. **Preventing Cognitive Overload**:
   - First-time users should not be dropped into a completely new environment with every menu, chart, and algorithm unlocked. Explaining the Trail, Atlas, SM-2 Review intervals, and 9 consonant shifts in a single session is overwhelming.
2. **Staged System Unlocking**:
   - **Phase 1 (Lessons 1–2: The Foundation)**: Keep the interface hyper-focused on The Trail and the core Germanic cognate realization. Advanced SRS configurations and the full Atlas constellation remain quietly dormant.
   - **Phase 2 (After Lesson 3: The Review Introduction)**: Unlock the **Review Hub** only after the learner has accumulated ~15–20 words in their learning queue. Introduce review styles progressively (e.g. Quick Flip recall first, then MCQ recognition, then Tile Builder, then Typing).
   - **Phase 3 (After Lesson 5: The Phonetic Map)**: Unlock **The Atlas Constellation** once learners have encountered multiple sound shift rules ($P \rightarrow FF/F$, $T \rightarrow SS/S$) and can appreciate how words radiate outward from rules.
   - **Phase 4 (Extended Engagement)**: Unlock gamified consistency features (e.g. Streaks, Weekly consistency rings, Calque deep dives, Community leaderboards) gradually as habit-reinforcing mechanisms.

---

## 16. Review Hub Ergonomics & Multi-Modal Pedagogy

To maximize recall depth, minimize cognitive friction, and provide rich audio feedback without external bloat, the review engine and cross-module bridges implement the following specifications:

### 1. Active Recall Integrity (Anti-Spoiler Shield)
- **Problem**: Testing a German noun requires simultaneous active recall of the root word stem and its grammatical gender article (*der*, *die*, or *das*). Rendering gender article badges or colored gender pills on the front of flashcards leaks the answer before the learner has retrieved it from memory.
- **Solution**: The front prompt displays an unrevealed, neutral placeholder: `Gender: [ der / die / das ? ]`. Only upon revealing the card does the glowing, color-coded `GenderBadge` (`der` = Azure Blue, `die` = Vivid Rose, `das` = Emerald Green) animate into view.

### 2. 1-Click Review Start & Fluid Mid-Session Style Switcher
- **Problem**: Prompting learners with a pre-session review mode modal dialog before every single deck start introduces repetitive friction and decision fatigue.
- **Solution**: Clicking any deck (*Due Today*, *By Shift Family*, *Weakest Words*, *Recent Lessons*, or *Compounds & Traps*) immediately launches the review session in the learner's default preferred style.
- **Ergonomics**: Learners can switch review styles on the fly at any point during a live session via a sticky dropdown (`Style: [Quick Flip ▾]`) in the card header, or customize their default style via the Review Hub stats bar or style guide modal.

### 3. Compound Calques & False Friend Traps Deck (5th Playable Deck)
- **Content**: Integrates the platform's 32 compound calques (*Handschuh*, *Kühlschrank*, *Flugzeug*, *Kummerspeck*) and 16 deceptive false friend traps (*Gift*, *bald*, *bekommen*, *brave*) into a dedicated review deck.
- **Pedagogical Function**: Reinforces German morphological transparency (why German describes functions directly) and protects learners from high-frequency false cognate traps using the unified SM-2 spacing algorithm.

### 4. Desktop Keyboard Input for Tile Builder
- **Tactile Typing**: In Tile Builder mode, learners on desktop can type matching letters to automatically pick available tiles from the bank without touching the mouse.
- **Correction**: Pressing `Backspace` unpicks and returns the last selected tile to the rack.
- **Submission**: Pressing `Enter` checks the assembled answer; `Space` reveals the solution.

### 5. Zero-Dependency Native Speech Synthesis Engine
- **Architecture**: Leverages the browser-native Web Speech API (`window.speechSynthesis`) with `de-DE` locale detection, German voice priority filtering, and learner-tailored pacing (`rate: 0.92`).
- **Surface Area**: One-tap pronunciation buttons are embedded across `ShiftPair` components, the `WordCardDrawer`, `ReviewPage`, and `LessonReader`.
- **Keyboard Shortcut**: In the Review Hub, pressing `[R]` or `[A]` on a revealed card immediately replays the pronunciation (including the grammatical article).

### 6. Trail-to-Atlas Constellation Bridges
- **Interconnected Learning**: Lessons and the Sound Shift Atlas form a continuous discovery loop. In `LessonReader`, Part 03 (Transformation Table) and Part 05 (Summary) feature dedicated exploration bridge cards directing learners to `/atlas/[family]` for the shift families introduced in the lesson.

---

## 22. Codebase Audit Learnings & Production Engineering Hardening

During the comprehensive codebase audit and testing cycle across the 9 core functional dimensions of `/home/shaurya/gemini-tmp/german-app-2/`, 39 distinct engineering flaws, edge-case vulnerabilities, and UX bottlenecks were identified and resolved. 

This section documents the foundational architectural learnings, root causes, and permanent engineering standards derived from that audit to guide all future feature development, curriculum expansion, and multi-language extensions.

---

### 22.1 Interactive Exercise Engines & Algorithmic Correctness

#### 1. Immutable Index-Based Tile Selection vs. Value-Based Tracking
- **The Failure Mode**: In morpheme assembly, syntax builders, and tile-picking exercises (`ExerciseWidgets.tsx`), selected tiles were originally tracked as an array of string values (`selectedTiles: string[]`). When an exercise contained duplicate morphemes or identical words (e.g. repeated syllables like `ge-`, repeated prepositions, or repeated auxiliary words), clicking a single tile either selected or unpicked every identical tile instance simultaneously, completely corrupting user input state.
- **Root Cause**: Non-unique string identifiers in state arrays.
- **Hardened Architecture**: The tile selection engine MUST track selections using the tile's immutable index in the source bank (`selectedIndices: number[]`). Dedicated helper functions `pickTileIndex(index: number)` and `unpickTilePosition(position: number)` manage selection state cleanly. The rendered UI reflects the token at `availableTokens[index]`, ensuring duplicate morphemes remain distinct entities with independent selection lifecycles.

#### 2. Retry Queue Anti-Pass Guard
- **The Failure Mode**: When learners submitted an incorrect answer and entered the retry queue (`isRetry = true`), clicking "Continue" on the `ErrorFeedbackSheet` invoked the parent component's `onSuccess()` callback. This allowed learners to pass exercises simply by dismissing the error sheet without ever providing the correct solution.
- **Root Cause**: Reusing a single progression callback for both initial success and error feedback dismissal.
- **Hardened Architecture**: The retry cycle must strictly isolate error dismissal from progression. In retry mode, `onContinue` MUST reset the local widget state (`isSubmitted = false`, clearing selections or input text) and keep the learner on the current question until an honest correct submission is validated.

#### 3. Derivation Typing Mode: Normalization, Auto-Grading & Character Diffing
- **The Failure Mode**: The Derivation Typing mode in the Review Hub (`review/page.tsx`) existed as a visual stub: the text input accepted keystrokes, but submission evaluation was unhandled, leading to frozen cards with no automated grading or corrective feedback.
- **Root Cause**: Unfinished review mode implementation lacking target matching logic.
- **Hardened Architecture**: Text-based derivation exercises must implement:
  1. **Accent-aware, trimmed normalization**: Compares user input against target word stems, accounting for optional punctuation and whitespace.
  2. **Automated SM-2 Grading**: Clean exact matches automatically submit a grade of `4` (Good); mismatches submit a grade of `1` (Again).
  3. **Character-Level Letter Diff (`computeLetterDiff`)**: Upon reveal, the interface splits input and target into colored character-by-character diff pills (green for correct matches, coral red for insertions/substitutions, muted grey for omissions), clearly illustrating phonetic shift mistakes to the learner.

#### 4. Caret Stability in Reactive Text Inputs
- **The Failure Mode**: Real-time regex string replacements (such as digraph or umlaut substitutions) executed synchronously inside an input's `onChange` event forced the browser's cursor/caret to jump to the end of the text string on every keystroke, preventing mid-word corrections.
- **Root Cause**: Overwriting `input.value` in React state resets the browser's native `selectionStart` / `selectionEnd` tracking.
- **Hardened Architecture**: Defer text normalization transformations to input blur or form submission events, or maintain selection ranges explicitly using refs if live replacement is mandatory.

---

### 22.2 Pedagogical Integrity & Anti-Spoiler Protections

#### 1. Branch Drill Hints: Phonetic Rule Guidance vs. Answer Leaks
- **The Failure Mode**: In `BranchDrillModal.tsx`, the `english_hint` field for P→F/FF exercises explicitly displayed the target German translation (e.g. `"hope → hoffen"`), completely defeating active recall.
- **Root Cause**: Hardcoding translation examples into hint properties intended for mechanical guidance.
- **Hardened Architecture**: Hints across all drills, quizzes, and exercises must NEVER disclose the target German word. They must describe only the phonetic shift mechanism and English context (e.g. `"hope (P → PF/FF)"` or `"Notice how medial P shifts to double FF after short vowels"`).

#### 2. Clean Mastery Scoring: Eliminating False 5/5 on Retries
- **The Failure Mode**: In Atlas branch drills, learners who repeatedly failed questions during a 5-question round could still achieve a perfect "5/5 Mastery" score if they eventually answered each question correctly on subsequent retry loops.
- **Root Cause**: Incrementing the score counter on question resolution without checking previous failure flags for that question index.
- **Hardened Architecture**: Drill sessions must maintain a `currentQuestionFailed: boolean` flag. The session score increments ONLY if the question was answered correctly on its initial presentation without prior failure in that round.

#### 3. SRS Interval Transparency
- **The Failure Mode**: Flashcard rating buttons hardcoded static interval assumptions: `"Again (1d)"`, `"Hard (3d)"`, `"Good (6d)"`, `"Easy (14d)"`. In the SM-2 algorithm, intervals are calculated dynamically based on card history, repetitions, and ease factors. A failed mature card resets to 1 day; an early card scales differently.
- **Root Cause**: Static UI text masking dynamic mathematical algorithms.
- **Hardened Architecture**: Rating buttons must display qualitative labels (`Again`, `Hard`, `Good`, `Easy`) or compute and render dynamic next-interval projections directly from the live SM-2 engine.

#### 4. Shift Family Review Deck Pre-Seeding
- **The Failure Mode**: Selecting the "Shift Family" deck in the Review Hub filtered only against existing `srsCards` in user state. If a user had not yet practiced words from that specific shift in earlier lessons, the deck opened as completely empty (0 cards).
- **Root Cause**: Assuming all catalog words were already instantiated in the SRS database.
- **Hardened Architecture**: Specialized drill decks (Shift Family, Compounds & Traps, Recent) must auto-seed initial `SRSCard` records across all compendium words belonging to that group, ensuring immediate drill availability from Day 1.

---

### 22.3 State Management, Batching & Lifecycle Synchronization

#### 1. Batched Storage Mutations: Eliminating N+1 Serialization
- **The Failure Mode**: When loading a lesson in `LessonReader.tsx`, encountering words executed `lesson.word_ids.forEach(id => markWordEncountered(id))`. In a 7-word lesson, this triggered 7 consecutive synchronous state updates and 7 full JSON serialization cycles to `localStorage` and `document.cookie` within milliseconds.
- **Root Cause**: Lack of bulk-mutation endpoints in the Zustand store.
- **Hardened Architecture**: The state store must provide batched mutation methods (`markWordsEncountered(wordIds: string[])`) so multiple entities are committed and persisted in a single atomic transaction.

#### 2. ISO Calendar Week Activity Tracking & Honest Defaults
- **The Failure Mode**: The weekly activity dot array defaulted to `[true, true, true, true, true, true, true]`, falsely displaying 7 active days to brand new users. Furthermore, it lacked calendar week awareness, causing past week activity to persist indefinitely or overwrite cyclically.
- **Root Cause**: Hardcoded dummy default data and missing date-boundary logic.
- **Hardened Architecture**:
  1. Default activity state must initialize honestly as `[false, false, false, false, false, false, false]`.
  2. The store must track an ISO week identifier (`getWeekString()`, e.g. `"2026-W37"`).
  3. Whenever `logDailyActivity()` executes, it compares the stored week string against the current date. Upon a week rollover, it resets the array to all-false before logging today's activity.

#### 3. Automated Activity Logging on Core Milestones
- **The Failure Mode**: Daily activity logging was previously handled via ad-hoc, component-level triggers, leading to situations where completing lessons or review sessions failed to record daily activity if the user navigated away prematurely.
- **Root Cause**: Disconnected side effects.
- **Hardened Architecture**: Core progression actions (`completeLesson()`, `recordReview()`) MUST internally invoke `logDailyActivity()`, guaranteeing continuous engagement tracking across all user entry points.

#### 4. Asynchronous Hydration Synchronization
- **The Failure Mode**: Components that initialized local `useState` toggles from store state (e.g. `GenderGuideBanner`'s `isExpanded` derived from `hasSeenGenderIntro`) rendered before `hydrateFromStorage()` completed, freezing the UI in an un-hydrated default state.
- **Root Cause**: One-time initial state assignment failing to respond to asynchronous persistence hydration.
- **Hardened Architecture**: Components with local UI state derived from persisted store values must synchronize via `useEffect` subscriptions or derive state directly from store selectors without intermediate local state duplicates.

#### 5. Deterministic Progress Calculation
- **The Failure Mode**: Course progress percentage was computed as `(currentLessonId - 1) / 30`. This produced false 0% progress on Lesson 1 even if finished, and completely broke if lessons were completed out of order.
- **Root Cause**: Conflating current position with cumulative completion.
- **Hardened Architecture**: Progress percentage MUST be derived deterministically from the completed set: `completedLessons.length / totalLessons`.

---

### 22.4 Next.js SSR / SSG Hydration Architecture for Local-First Persistence

#### 1. The Static Export Hydration Mismatch
- **The Problem**: In Next.js SSG / App Router static export builds, pages are pre-rendered at build time with empty/default Zustand state. On client load, `hydrateFromStorage()` reads persisted data from `localStorage`. If components render persisted metrics directly (mastered counts, review card counts, activity indicators, lesson lock states), React throws hydration mismatch warnings (`Text content did not match`).
- **The Architectural Solution**: All UI components rendering client-persisted metrics must implement a client-mount guard:
  ```tsx
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  ```
  Before mounting (`!mounted`), render deterministic skeleton placeholders or default zero-states; render live persisted metrics only after the client has mounted.

---

### 22.5 Accessibility (WCAG 2.1 AA) & Keyboard-First Ergonomics

#### 1. Viewport Scalability Compliance (WCAG 1.4.4)
- **The Failure Mode**: The viewport meta tag in `src/app/layout.tsx` contained `maximum-scale=1`, which prohibited users from pinch-zooming on mobile devices.
- **Root Cause**: Outdated mobile web pattern intended to prevent accidental double-tap zoom.
- **Hardened Architecture**: Never restrict user pinch-to-zoom in viewport metadata. Viewports must allow user scaling up to at least 200% to remain compliant with WCAG 1.4.4.

#### 2. Universal Dialog & Drawer Dismissal via Escape
- **The Failure Mode**: Modals and drawer overlays (`BranchDrillModal`, `WordCardDrawer`) could only be closed by clicking their explicit close buttons or clicking the backdrop, trapping keyboard-only users.
- **Root Cause**: Missing global keydown listeners.
- **Hardened Architecture**: Every modal dialog, drawer, and slide-over sheet must attach a global `keydown` event listener for `Escape` (`e.key === "Escape"`), cleanly closing the element and returning focus to the trigger.

#### 3. Keyboard Advancing for Feedback Sheets
- **The Failure Mode**: In lesson exercises, `ErrorFeedbackSheet` required a mouse click on "Continue" to proceed, breaking the rhythm of desktop keyboard-only navigation.
- **Root Cause**: Omitting keyboard shortcuts on transient overlay sheets.
- **Hardened Architecture**: Interactive feedback sheets must support `Enter` and `Space` keyboard listeners to immediately advance or retry.

#### 4. Semantic HTML for Locked Navigation Nodes
- **The Failure Mode**: Locked lessons on the Trail rendered as `<a href="#">` with disabled visual styling. This created empty anchor jumps, confused screen readers with pseudo-links, and polluted browser history when clicked.
- **Root Cause**: Reusing anchor tags for non-navigable elements.
- **Hardened Architecture**: Inaccessible or locked items must render as semantic `<div>` elements with `aria-disabled="true"` and appropriate non-interactive styling, preserving `<a>` tags exclusively for navigable routes.

---

### 22.6 Design System Consistency & Visual Channel Separation

#### 1. Centralized Gender Badge System
- **The Failure Mode**: During early UI prototyping, Latin-bridge gender articles were using an arbitrary hardcoded `text-blue-400` rather than the platform's standardized tri-color gender system.
- **Root Cause**: Ad-hoc styling in modal subcomponents.
- **Hardened Architecture**: All references to German noun genders MUST strictly utilize the centralized `<GenderBadge>` component (`der` = Azure Blue, `die` = Vivid Rose, `das` = Emerald Green) across all tools and views.

#### 2. Dynamic Dashboard Insight Rotation
- **The Failure Mode**: The dashboard insight card was perpetually pinned to index 0.
- **Root Cause**: Hardcoded array index access.
- **Hardened Architecture**: Engagement widgets with scheduled content must dynamically rotate based on date modulo mathematics (`new Date().getDate() % insights.length`) to ensure fresh daily exploration without requiring backend cron jobs.

---

### 22.7 Security, Error Boundaries & Production Infrastructure

#### 1. Client-Side Error Boundaries
- **The Failure Mode**: An unhandled runtime error in any child exercise widget would crash the entire single-page application to a blank screen.
- **Root Cause**: Absence of a root `error.tsx` client boundary in Next.js App Router.
- **Hardened Architecture**: The application must maintain a root client error boundary (`src/app/error.tsx`) with user-friendly recovery controls ("Try Again" via `reset()`) and safe fallback navigation to the dashboard.

#### 2. HTTPS Cookie Security Flagging
- **The Failure Mode**: Fallback cookie persistence strings lacked the `Secure` attribute, leaving stored state vulnerable to transmission over insecure channels in production.
- **Root Cause**: Omitting security flags in client-side document.cookie assignment.
- **Hardened Architecture**: Cookie persistence strings must inspect `window.location.protocol` and append `; Secure; SameSite=Lax` whenever operating on HTTPS.

#### 3. Tailwind CSS v4 Engine Compatibility
- **The Failure Mode**: Including external `autoprefixer` when running Tailwind CSS v4 generated redundant build overhead. Furthermore, utility classes like `animate-spin-slow` failed silently without explicit CSS keyframes.
- **Root Cause**: Tailwind v4 includes an integrated Rust-based Lightning CSS compiler that handles vendor prefixing natively; custom animations require explicit `@keyframes` definitions.
- **Hardened Architecture**: Keep dependencies minimal (pure Tailwind v4 without legacy PostCSS wrappers) and declare custom animation keyframes directly in `globals.css`.

---

### 22.8 Complete Audit Verification & Implementation Registry

| Category | Component / File | Issue Discovered in Audit | Permanent Engineering Fix |
|---|---|---|---|
| **State** | `src/lib/store.ts` | N+1 synchronous storage writes on lesson view | Added `markWordsEncountered(wordIds: string[])` atomic batch update |
| **State** | `src/lib/store.ts` | Fake `weeklyActivity` default `[true, true, ...]` | Replaced with honest `[false, false, ...]`; added ISO week rollover reset |
| **State** | `src/lib/store.ts` | Disconnected activity logging on completion | Automated `logDailyActivity()` inside `completeLesson` and `recordReview` |
| **Security** | `src/lib/store.ts` | Insecure cookie string on HTTPS | Enforced `; Secure; SameSite=Lax` flag on secure origins |
| **Exercises** | `src/components/lesson/ExerciseWidgets.tsx` | Duplicate tile collision bug in morpheme builder | Migrated from `selectedTiles: string[]` to `selectedIndices: number[]` |
| **Exercises** | `src/components/lesson/ExerciseWidgets.tsx` | Retry queue bypass (error sheet auto-passed) | Isolated retry continue from `onSuccess`; resets input state on retry |
| **Exercises** | `src/components/lesson/ExerciseWidgets.tsx` | Caret jump on keystroke normalization | Removed disruptive reactive regex replace during `onChange` |
| **Atlas** | `src/components/atlas/BranchDrillModal.tsx` | Drill hint leaked answer (`"hope → hoffen"`) | Replaced spoiler with rule mechanism hint (`"hope (P → PF/FF)"`) |
| **Atlas** | `src/components/atlas/BranchDrillModal.tsx` | False 5/5 score via question retries | Added `currentQuestionFailed` state; score increments only on first-attempt pass |
| **Accessibility** | `src/components/atlas/BranchDrillModal.tsx` | Modal trapped keyboard users | Bound global `Escape` key listener to modal container |
| **Review** | `src/app/review/page.tsx` | Shift family review deck empty on unreviewed words | Pre-seeds initial `SRSCard`s across all words in the selected family |
| **Review** | `src/app/review/page.tsx` | Derivation Typing mode was non-functional stub | Implemented `handleCheckTyping`, auto-grading, and `computeLetterDiff` display |
| **Review** | `src/app/review/page.tsx` | Misleading hardcoded interval labels (`"Good (6d)"`) | Replaced with clean qualitative labels (`Again`, `Hard`, `Good`, `Easy`) |
| **Hydration** | `src/app/review/page.tsx` | SSR/SSG hydration mismatch on deck counts | Protected deck stats and counters behind `mounted` state guard |
| **Performance** | `src/components/lesson/LessonReader.tsx` | Per-word encounter calls during render | Migrated to batched `markWordsEncountered(lesson.word_ids)` |
| **Data** | `src/components/lesson/LessonReader.tsx` | Outdated text citing "7 shifts" instead of 9 | Corrected copy to reflect complete 9 sound shift families |
| **Hydration** | `src/app/page.tsx` | SSR/SSG hydration mismatch on stats bar | Added `mounted` state guard to dashboard user metrics |
| **UX** | `src/app/page.tsx` | Dashboard insight stuck on first item | Implemented date modulo rotation (`new Date().getDate() % insights.length`) |
| **Logic** | `src/app/page.tsx` | Broken progress formula `(currentLessonId - 1) / 30` | Derived completion directly: `completedLessons.length / 30` |
| **Hydration** | `src/app/atlas/page.tsx` | SSR/SSG hydration mismatch on mastery counts | Added `mounted` state guard to card progress badges |
| **Accessibility** | `src/app/layout.tsx` | `maximum-scale=1` blocked mobile pinch-zoom | Removed `maximum-scale=1` to restore WCAG 1.4.4 compliance |
| **Accessibility** | `src/components/lesson/ErrorFeedbackSheet.tsx` | Sheet dismissal required mouse click | Added `Enter` and `Space` keyboard listeners to continue |
| **Accessibility** | `src/components/common/WordCardDrawer.tsx` | Drawer trapped keyboard users | Added global `Escape` key listener to dismiss drawer |
| **Design** | Latin Bridge & Gender Guide | Inconsistent `text-blue-400` on Latin bridge | Replaced with centralized `<GenderBadge>` component |
| **State** | `src/components/common/GenderGuideBanner.tsx` | Banner toggle out of sync on hydration | Synced `isExpanded` with `hasSeenGenderIntro` via `useEffect` |
| **Semantics** | `src/app/trail/page.tsx` | Locked lessons used `<a href="#">` | Replaced with non-interactive `<div aria-disabled="true">` |
| **Hydration** | `src/app/trail/page.tsx` | SSR/SSG hydration mismatch on lesson path | Added `mounted` state guard to Trail completion indicators |
| **Resiliency** | `src/app/error.tsx` | Missing root error boundary | Created client error boundary with "Try Again" and dashboard bridge |
| **Styling** | `src/app/globals.css` | Missing `.animate-spin-slow` keyframe definition | Added custom keyframe animation definition to CSS bundle |
| **Tooling** | `package.json` | Redundant `autoprefixer` devDependency | Removed unnecessary dependency; relying on Tailwind v4 native engine |

