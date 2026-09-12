# Brücke (Bridge) — Etymological German Learning Platform

> **German language acquisition through historical sound shifts, living English cognates, and multi-modal spaced repetition.**

---

## Overview

**Brücke** is an open-source web application designed to help English speakers learn German rapidly by decoding the underlying linguistic mechanics that connect both languages. 

Rather than relying on rote memorization or gamified streaks without substance, Brücke leverages the **Second High German Consonant Shift (Grimm's Law / 500–800 AD)** to reveal that English speakers already understand hundreds of German words.

- **Primary Working Directory**: `/home/shaurya/gemini-tmp/german-app-2`
- **Design & Reference Directory**: `/home/shaurya/stuff/german app`
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
- **Testing**: Vitest / `bun test` (12 test suites, 63 automated tests, < 200ms runtime)
- **Audio Engine**: Zero-dependency browser-native Web Speech API (`window.speechSynthesis`)

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

Executes 63 unit and integration tests across 12 suites:

```bash
bun test
```

### Production Build

Pre-renders all 21 pages to static HTML (`● SSG`):

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

1. **The Trail (`/trail` & `/trail/[id]`)**:
   - 30-lesson structured curriculum across 5 evolutionary phases.
   - 5-part card-by-card wizard (Hook, Pattern, Transformation Table, Bite-Sized Practice, Summary & Retries).
   - Scaffolded exercises (morpheme tiles, matching pairs, shift select, syntax builder, derivation typing).
   - Pre-exercise vocabulary hints (`vocab_hints`) for auxiliary words (e.g., `mit`).
   - End-of-lesson Retry Queue ensuring mastery before progression.

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
│   ├── atlas/            # Sound Shift Atlas pages
│   ├── review/           # Multi-modal SRS Review Hub
│   ├── trail/            # Lesson curriculum pages
│   ├── layout.tsx        # App layout and global shell
│   └── page.tsx          # Dashboard & Daily Insight home
├── components/
│   ├── atlas/            # Radial constellation and drill components
│   ├── common/           # GenderBadge, ShiftPair, WordCardDrawer, CharBar, Onboarding
│   ├── lesson/           # 5-step wizard, exercise widgets, retry queue, feedback sheets
│   └── navigation/       # Desktop TopNav, mobile BottomNav
├── data/
│   ├── compendium.json   # 218 core words, 9 shifts, 32 compounds, 16 traps, 28 insights
│   └── lessons.ts        # Curriculum definitions and exercise structures
├── lib/
│   ├── audio.ts          # Native speech pronunciation engine
│   ├── gender.ts         # 3-color gender metadata & styling
│   ├── lemmatizer.ts     # English inflection normalizer
│   ├── letter-diff.ts    # Letter-by-letter diff comparison
│   ├── review-modes.ts   # Question generators for review styles
│   ├── shift-annotator.ts# Sound shift letter aligner with memoization
│   ├── srs.ts            # SuperMemo SM-2 interval scheduler
│   ├── store.ts          # Zustand store with dual persistence
│   └── types.ts          # Core domain TypeScript interfaces
└── tests/                # 11 test suites, 61 automated tests (Vitest / Bun)
```

---

## Architecture Invariants

- **No Third-Party Component Bloat**: The UI strictly avoids component libraries like Radix, Headless UI, or Framer Motion. Standard DOM and Tailwind CSS are used.
- **Zero Cloud TTS Dependency**: Pronunciation uses the browser's native `window.speechSynthesis` (`de-DE`), avoiding external API costs, latency, or asset downloads.
- **Durable Local Storage**: Progress is preserved across sessions using `localStorage` with a size-guarded cookie fallback (< 3800 bytes).
- **All Routes Static**: Every route in `/app` must pre-render via `generateStaticParams()` to guarantee instant navigation.
