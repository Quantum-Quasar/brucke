# Brücke (Bridge) — Etymological German Learning Platform

> **German language acquisition through historical sound shifts, living English cognates, and multi-modal spaced repetition.**

---

## Overview

**Brücke** is an open-source web application designed to help English speakers learn German rapidly by decoding the underlying linguistic mechanics that connect both languages. 

Rather than relying on rote memorization or gamified streaks without substance, Brücke leverages the **Second High German Consonant Shift (500–800 AD)** to reveal that English speakers already understand hundreds of German words.

- **Comprehensive Audit Manifest**: See [`AUDIT_MANIFEST.md`](./AUDIT_MANIFEST.md) for full architectural specifications, data schemas, and audit instructions.
- **Design Specification**: See [`docs/german_learning_platform_design-final.md`](./docs/german_learning_platform_design-final.md).

---

## Tech Stack & Architecture

- **Runtime**: [Bun](https://bun.com) v1.4+
- **Framework**: [Next.js](https://nextjs.org) 16.3.4 (App Router, Turbopack, 100% Static Site Generation)
- **UI Library**: React 19.2 + TypeScript
- **Styling**: Tailwind CSS v4 (native CSS tokens, dark mode default)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) 5 (dual `localStorage` + size-guarded cookie persistence)
- **Icons**: Lucide React
- **Testing**: Vitest / `bun test` (21 test suites, 119 automated tests)
- **Audio Engine**: Zero-dependency browser-native Web Speech API (`window.speechSynthesis`) + Web Audio click synthesizer

---

## Quick Start

### Installation

```bash
bun install
```

### Compile Knowledge Compendium

Compiles raw markdown dictionaries into `/src/data/compendium.json`:

```bash
bun run parse-data
```

### Run Automated Tests

Executes 119 unit and integration tests across 21 suites:

```bash
bun run test
bun test
```

### Production Build

Pre-renders all 28 pages to static HTML (`● SSG`):

```bash
bun run build
```

### Start Development Server

```bash
bun run dev
```

Visit `http://localhost:3000` in your browser.

---

## Core Features

1. **The Trail Map (`/` — the homepage)**:
   - Baba Is You-style node map: 30 topic clusters on one linear spine, with skip-able extra-practice nodes ("sprigs") and support-material branches hanging off each cluster.
   - All adjacent nodes unlock at once when a node is completed; the spine itself stays strictly ordered.
   - Climb the map bottom-to-top; the pulsing theme-colored selector marks your recommended node.
   - 1–3 lessons per topic; topics 1–10 fully authored, 11–30 shipped as titled shells with authoring plans (`src/data/curriculum.ts`).
   - Custom DOM+SVG renderer (no game libraries) with `content-visibility` windowing per topic cluster, sized for hundreds of future lessons.
   - 5-part card-by-card lesson wizard (Hook, Pattern, Transformation Table, Bite-Sized Practice, Summary & Retries) at `/trail/[id]`.
   - Scaffolded exercises (morpheme tiles, matching pairs, shift select, syntax builder, derivation typing).
   - Pre-exercise vocabulary hints (`vocab_hints`) for auxiliary words (e.g., `mit`).
   - End-of-lesson Retry Queue ensuring mastery before progression; a flawless first-try run earns a **purple star** (gold otherwise).

2. **Sound Shift Atlas (`/atlas` & `/atlas/[family]`)**:
   - Radial spatial spoke visualization for 9 consonant shift families ($TH \rightarrow D$, $P \rightarrow FF/PF$, $T \rightarrow SS/S/Z$, etc.).
   - Philological background, literature sources, and 5-question branch practice drills.

3. **Multi-Modal Review Hub (`/review`)**:
   - Algorithmic spaced repetition powered by SuperMemo SM-2.
   - 5 playable decks: *Due Today*, *By Shift Family*, *Weakest Words*, *Recent Lessons*, and *Compound Calques & False Friends*.
   - 4 selectable review styles: *Quick Flip*, *Multiple Choice (MCQ)*, *Tile Builder*, and *Derivation Typing*.
   - Anti-spoiler gender shields: Front card prompts with `[ der / die / das ? ]` instead of leaking the article before recall.
   - Desktop keyboard navigation (`1`–`4`, `Space`, `Enter`, `Backspace`, `[R]` audio replay, `Esc`).

4. **3-Color Grammatical Gender System**:
   - `der` (Masculine): Azure Blue
   - `die` (Feminine): Vivid Rose
   - `das` (Neuter): Emerald Green
   - Educational onboarding & dismissible gender guide banners.

---

## Project Structure

```
src/
├── app/                  # Next.js App Router (100% SSG static pre-rendered routes)
│   ├── page.tsx          # Homepage = the Baba-style trail map
│   ├── atlas/            # Sound Shift Atlas pages
│   ├── review/           # Multi-modal SRS Review Hub
│   ├── trail/            # /trail redirects to /; /trail/[id] lesson wizard
│   ├── settings/ about/  # Settings & About (linked from the bottom dock)
│   ├── layout.tsx        # App layout and global shell
├── components/
│   ├── atlas/            # Radial constellation and drill components
│   ├── common/           # GenderBadge, ShiftPair, WordCardDrawer, CharBar, Onboarding
│   ├── lesson/           # 5-step wizard, exercise widgets, retry queue, feedback sheets
│   ├── navigation/       # Game-style bottom dock (all destinations), slim TopNav, Footer
│   └── trail/            # TrailMap, MapNode, LessonNodeDrawer (the homepage map)
├── data/
│   ├── compendium.json   # 218 core words, 9 shifts, 32 compounds, 16 traps, 28 insights
│   ├── curriculum.ts     # 30 topic clusters: cores, sprigs, branches + authoring plans
│   ├── lessons.ts        # Authored lesson content (ids 1–10 = the first 10 topic cores)
│   └── ...               # themes, fonts, settings, phonetics, insights
├── lib/
│   ├── audio.ts          # Native speech pronunciation engine
│   ├── gender.ts         # 3-color gender metadata & styling
│   ├── lemmatizer.ts     # English inflection normalizer
│   ├── letter-diff.ts    # Letter-by-letter diff comparison
│   ├── review-modes.ts   # Question generators for review styles
│   ├── shift-annotator.ts# Sound shift letter aligner with memoization
│   ├── srs.ts            # SuperMemo SM-2 interval scheduler
│   ├── store.ts          # Zustand store with dual persistence (+ lessonStars)
│   ├── trail-map.ts      # Map graph, responsive layout engine, unlock/recommend logic
│   └── types.ts          # Core domain TypeScript interfaces
└── tests/                # 22 test suites (Vitest / Bun)
```

---

## Architecture Invariants

- **No Third-Party Component Bloat**: The UI strictly avoids component libraries like Radix, Headless UI, or Framer Motion. Standard DOM and Tailwind CSS are used.
- **Zero Cloud TTS Dependency**: Pronunciation uses the browser's native `window.speechSynthesis` (`de-DE`), avoiding external API costs, latency, or asset downloads.
- **Durable Local Storage**: Progress is preserved across sessions using `localStorage` with a size-guarded cookie fallback (< 3800 bytes).
- **All Routes Static**: Every route in `/app` must pre-render via `generateStaticParams()` to guarantee instant navigation.
