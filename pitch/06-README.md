# pitch/ — Brücke Funding Kit

*Compiled 2026-10-08 · v0.1. Read 01→05 in numeric order; this file is the index.*

Compiled 2026-10-08 from full repo docs review + public market research. Everything here is grounded in the repo's own documentation (specs, curriculum state, philosophy) and 2026 public web research (sources cited in each file).

## Contents

| File | What it is | Use it for |
|---|---|---|
| `01-market-research.md` | Market size, comps, category dynamics, honest gaps | Foundation for every other doc; refresh quarterly |
| `02-executive-summary.md` | The one-pager | Email attachment, partner-meeting leave-behind |
| `03-pitch-deck.md` | Slide-by-slide 12-slide deck script | Build the actual deck in Brücke's own design system (themes/fonts) so the deck demos the craft |
| `04-funding-roadmap.md` | Phase 0→Series A plan with milestones, use of funds, risk register | Your operating plan; update monthly with real metrics |
| `05-investor-outreach.md` | Target-investor map, outreach templates, diligence checklist | Run the raise as a repeatable process |
| `06-README.md` | This index — reading order, number map, refresh triggers | Start here; return whenever a number changes |

## How the numbers connect

- **Ask:** $350K pre-seed (SAFEs), 12–18 months of runway from close — consistent across deck, roadmap, and outreach.
- **18-month targets:** 25K registered learners, D30 > 20%, 3,000+ payers, $25K MRR, 3 languages, published efficacy study → unlock **$1.5–3M seed**.
- **Comps used repeatedly:** Fluent Forever ($4.9M seed @ $13.5M val — method+community), 2026 category activity (Lucida AI $7M seed).

## Sequencing rule

Proof before pitch: analytics (Phase 0) → community pull (Phase 1) → non-dilutive money (Phase 2) → VC (Phase 3). You can skip Phase 2 only if a top-choice accelerator bites early — otherwise every non-dilutive dollar raises your valuation and your credibility.

## Refresh triggers

**Repo-derived counts — each number has one source of truth; update the pitch artifacts when it changes:**

| Number | Source of truth | Update |
|---|---|---|
| Taught words (656) | `bun scripts/audit-vocab-balance.ts` | pitch `01`–`04`, exec summary, deck slides 8 & 10 |
| Lessons (168) | `src/data/lessons.ts` | `01`, `02`, `03`, `05` templates |
| Tests (234 / 28 files) | `bun run test` | `02`, `03` slide 5, repo `README.md` / `AUDIT_MANIFEST.md` |
| Themes (187) / fonts (43) | `src/data/themes.ts` / `src/data/fonts.ts` | `01`–`03` |

`src/tests/docs-sync.test.ts` pins these counts and fails the suite when any quoted number goes stale — update the hand-maintained constants there (`TEST_COUNT`, `TAUGHT_WORDS`) whenever the sources change.

**External triggers:**

- Duolingo earnings / major competitor round → update `01` and slide 7.
- Every month after launch → update traction numbers in `02–05`.
- Goethe-A1 word target (650) reached **2026-10-08** (656 words) — reflected in every artifact.
