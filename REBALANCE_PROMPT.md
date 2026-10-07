# VOCABULARY REBALANCE & EXPANSION — Merged Execution Prompt

You are a content-engineering agent working in `/home/shaurya/gemini-tmp/german-app-thinking-method`, a Next.js + TypeScript German-learning app (runs with **bun**). Your mission, in two campaigns:

> **Campaign 1 — rebalance vocabulary across the existing 128 lessons in place (no new lessons), lifting taught vocabulary from 290 unique words to the ~450–500 in-place ceiling.**
> **Campaign 2 — author ~35–45 new lessons (sprigs/branches) carrying 4–5 new words each, to reach ≥650 unique words (Goethe A1 complete).**

This prompt is self-contained. Read it fully, then follow the Phase 0 reading order. If this prompt and the repo docs ever conflict: the repo docs win on **how** to author lessons; this prompt wins on **what** to change and the numeric targets (the repo owner has explicitly authorized content edits inside existing lessons that older docs freeze — see §0).

Delegation is **mandatory, not optional**: you MUST use sub-agents for the task categories listed in §8 — never do those categories yourself. `src/data/lessons.ts` is 741 KB / ~12,800 lines — never read it end-to-end yourself.

---

## 0. Permissions & overrides

The owner has granted these overrides to `docs/AGENT_PRECAUTIONS.md` §4.5 (lesson freeze) and the content-agent-prompt's freeze rules:

| Previous rule | Override for this task |
|---|---|
| Authored lessons frozen unless the human asks | **The human has asked.** You may edit `word_ids`, `table_word_ids`, exercises, `vocab_hints`, and example sentences of any lesson. Topic, theme, and narrative of every lesson stay the same. |
| Max 1 exercise swap per lesson per batch | **Suspended.** You may rewrite all 5 exercises of a lesson when the new word assignments demand it. The 5-exercise contract, ≥3-types rule, and first-exercise-type rule still apply. |
| Batch size ≤5 lessons | **≤10 for Campaign 1** (in-place edits). **≤5 for Campaign 2** (new lesson authoring — the repo's authoring rule stands there). |

**Still absolutely frozen (field-level):**
- Every lesson's `id`, `slug`, `title`, `subtitle`, `phase`, `shift_categories`, and its position in the `LESSONS` array.
- `hook.title` and `pattern.title` (they name the linguistic concept).
- Existing `twist` objects: leave them exactly as they are; do not add new ones.
- `summary.curiosity_teaser` semantics: a teaser must point at the actual next node in trail order. You may re-point a teaser **string** only when the next node actually changes (Campaign 2 does this); never let `audit-teasers` report drift.
- `TRAIL_GATES` thresholds, `requiredStars`, `afterTopic` positions. Gates count stars per topic — content swaps inside lessons cannot break them, and you must not make it possible.
- The `Lesson` type in `src/lib/types.ts` (except `TOTAL_COMPENDIUM_WORDS`, bumped once at the very end if the compendium grew).
- The compendium's §1 shift definitions and everything pinned by `src/tests/compendium.test.ts` (9 shifts / 32 compounds / 16 false friends / 28 insights).

**Read-only files:** `src/data/curriculum.ts` (trail structure, shells, gates — you will append new shells in Campaign 2 following the existing schemes, but never renumber or reorder), `src/lib/trail-map.ts`, `src/lib/store.ts`, `src/components/**`, `scripts/parse-compendium.ts`, `src/lib/word-refs-audit.ts`. Do not open `docs/dont open untill mentioned/`, `MODEL_COMPARISON_PROMPT.md`, or `gui-test-screenshots/`.

---

## 1. Project philosophy (internalize before touching anything)

The app teaches German through its historical kinship with English — sound shifts (Water→Wasser, better→besser, TH→D), shared roots, calques, borrowings ("You already understand more German than you think"). Every lesson must deliver an **aha-moment of connection**, never a vocabulary list. Two laws above all:

1. **Every etymological claim must be true and verifiable** — cite wiktionary/etymonline/Kluge/Pfeifer; "Never invent connections"; mark the unverifiable `[UNVERIFIED — check]` and drop it instead.
2. **Reuse density** — an exercise may never *require* a content word that wasn't taught in the same or an earlier lesson (in trail order), plus small function words via `vocab_hints`.

Retention is the SRS's job (Review Hub, SM-2, retry queue); lessons do *weaving*, not rote drills. Never add rote-repetition modes; never break the 5-exercise contract. Force-fit guard: if a compendium word doesn't fit a lesson's topic, put it in a lesson where it fits or **leave it untaught** — never bend a lesson's theme to host it.

---

## 2. Verified baseline (measured 2026-10-04 on this working tree)

Computed by importing the real data modules with bun. "New" = first occurrence of a `word_ids` entry walking lessons in **trail order** (`flattenTrailNodes()` in `src/data/curriculum.ts`: per topic, core → that topic's sprigs → branches; branches of topic N come before core N+1). `word_ids` = all compendium words a lesson drills (new + reused); `table_word_ids` ⊆ `word_ids`.

| Metric | Value |
|---|---|
| Authored lessons | 128 (30 cores, 78 sprigs, 20 branch lessons; phases 1/2/3 = 30/34/64) |
| Compendium (`src/data/compendium.json`) | 1,226 words (`TOTAL_COMPENDIUM_WORDS` at `src/lib/types.ts:1`) |
| Unique words referenced by lessons | **290** (23.7% coverage; 936 untouched) |
| New words per lesson | avg 2.27, **median 1**, max 15 |
| Histogram (new words → lessons) | 0→**51**, 1→22, 2→16, 3→7, 4→9, 5→4, 6→4, 7→5, 8+→**10** |
| Reuse | avg 3.7 lessons/word; 96 words in exactly 1 lesson; 21 words in 11+ |
| Exercise exposure | 2,592 mentions, avg 11.2 per referenced word; **59 taught words have zero exercise mentions** (table-only) |
| Test baseline | expected: 28 test files / 223 tests passing — **verify at Phase 0** and record the real numbers |

Outliers, ≥6 new words (19): **3002 = 15** ("Trap Watch: False Friends in the Wild"); cores **1, 5 = 10; 3, 4, 6, 7, 8 = 9; 15 = 11** ("Separable Verbs & Spatial Prefixes"); **5092 = 9** (family set); 101, 402, 701, 16, 25 = 7; 801, 13, 17, 20 = 6.

Zero new words (51): cores **9** (Conjugation Roots), **23** (Plurals), **29** (sein/Motion); 40 sprigs (mostly "Gym", "Drill", "Mirrors", "Story", "Review" consolidation lessons); 8 branch lessons (5011, 5021, 5031, 5041, 5052, 5061, 5062, 5063).

Caveats: the `LESSONS` array is append-ordered, not trail-ordered — **always reason in trail order**; per-lesson new-counts differ between the two orders for 15 lessons (by ≤2). If your Phase 0 re-verification produces materially different numbers (the owner may have edited data since), recompute all targets from the rules in §3 — the rules are authoritative, these numbers are orientation.

---

## 3. Targets and bands

**End state: ≥650 unique taught words** (Goethe A1 ≈ 650 words, official Goethe-Institut A1 Wortliste), reached in two campaigns. The compendium already contains everything needed — add compendium words only if the eligible pool runs short (Phase B step 4).

**New-words-per-lesson bands** (classify each lesson by function: core/sprig/branch, plus title keywords like Gym/Drill/Review/Game/Reading/Bootcamp/Proof/Map/Tour which mark revision-style):

| Lesson function | New words per lesson |
|---|---|
| **Pattern-exemplar cores** — lessons whose words are all instances of a single rule: the sound-shift cores (currently 1, 3–8) and core 15 (separable-prefix exemplars) | 4–11 (may stay at their current 9–11; do not artificially reduce — one rule with many exemplars is low cognitive load) |
| Grammar cores | 3–6 |
| Consolidation sprigs | 2–4 |
| Pure revision/drill/review (sprig/branch/capstone reading) | 0 allowed — **deliberately chosen, ~20–25 lessons**, never accidental; each must still exercise ≥8 previously-taught words |
| **Hard ceiling, every other lesson** | **8** |

Lesson **3002** (15) and **5092** (9) are *not* pattern-exemplar lessons and must come down to ≤8 (Campaign 1 re-homes the excess; see Phase B).

**Weaving floor:** every newly introduced word must appear in the German sentences (exercises, examples, glosses) of **≥3 later lessons** where feasible; minimum acceptable: 2 later lessons plus ≥4 total exercise mentions. One-lesson wonders first: the 96 words currently in exactly 1 lesson get extra reuse in later lessons **before** fresh compendium words are pulled. **Exposure floor:** every taught word must have **≥1 explicit exercise mention** (fixes the 59 table-only words).

**Checkpoint targets:** Campaign 1 ends at ~450–500 unique words (the realistic in-place ceiling — the only absorbers are the 51 zero-new and 22 one-new lessons); Campaign 2 adds ~150–200 words via ~35–45 new lessons at 4–5 new words each. End state: ~165–175 lessons, zero-new lessons ≤25% of total, no lesson outside its band.

---

## 4. The plan

### Campaign 1 — in-place rebalance (no new lessons)

#### Phase 0 — Onboarding, verification, audit tooling (no content edits)

1. Reading order (delegate bulk reading to sub-agents for digests, but personally internalize): `docs/AGENT_PRECAUTIONS.md` in full; `docs/content-agent-prompt.md` in full — especially §VOICE, §SCHEMA, §EXERCISE types, §ETYMOLOGY VERIFICATION PROTOCOL; `docs/THINKING_METHOD_UPGRADE.md` §0–§3 (TM philosophy, `transcribe`/`literal_gloss`/`twist`); `docs/grammar-gap-placement.md` (the precedent for adding lessons without renumbering); `src/data/curriculum.ts` in full (~557 lines — trail structure and topic themes).
2. Read lessons **1, 4, 9, 15** in `lessons.ts` fully — they are the register standards for shift core, grammar core, and grammar-heavy lessons. Skim the rest (`word_ids`, `table_word_ids`, exercise types only).
3. Verify the baseline: `bun run parse-data && bun run test && bun run typecheck` (sequential — see Pitfall 7). Record pass counts. Then re-run the §2 distribution analysis with a throwaway script in `/tmp` and record any drift.
4. Build the permanent audit: new script `scripts/audit-vocab-balance.ts` (or an extension of `scripts/audit-word-refs.ts`) with checks that become part of the validation suite:
   a. new-words-per-lesson within bands (script prints its function classification for eyeballing);
   b. no word required before its introduction lesson in trail order (reuse legality over `word_ids`/`table_word_ids` and German tokens in exercise surfaces);
   c. per-word floor: ≥2 lesson appearances, ≥1 exercise mention (report words below the 3-lesson weaving target separately);
   d. zero-new lessons ≤25%;
   e. an explicit **deferral list** mechanism (documented, temporary exceptions — e.g. 3002 if its fix is deferred to Campaign 2).

#### Phase A — Analysis & word-assignment move-list (still no content edits)

1. Run the full inventory (throwaway script in `/tmp`): per lesson in trail order — `word_ids`, `table_word_ids`, new vs reused; histogram; zero-new and ≥6-new lists with the actual words; untouched pool of the 936 compendium words; per-word lesson counts; one-lesson wonders; table-only words. Emit JSON to `/tmp` for the validator.
2. **Select the new words** (target: bring every non-revision lesson into its band). Priority order: (1) Goethe A1 wordlist coverage (get the list: `https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_A1_Fit1_Wortliste.pdf`); (2) frequency (top ~1,500 German words); (3) connection quality (sound shifts > direct cognates > Latin bridge — every table word must teach a connection); (4) domain spread (body, food, nature, daily life, abstract — don't cluster); (5) thematic fit with an existing lesson's topic. Apply the force-fit guard: no fit → leave untaught.
3. Write the **move-list** as a committed repo doc (`docs/vocab-rebalance-movelist.md`): for every affected lesson — words in, words out, which exercises change, whether prose must touch; the ~20–25 revision lessons explicitly chosen; 3002's excess false friends re-homed into theme-fitting lessons **at or after 3002 in trail order** (find candidates via `flattenTrailNodes()`; if no theme-fit home exists, defer to Campaign 2's "Trap Watch II" via the deferral list); 5092's single excess word likewise. This commit is the owner's review checkpoint — make it clean and readable.
4. **Validate the map before any edits** (second throwaway script): total unique words 450–500; all bands; reuse legality; weaving floor; exposure floor; revision count. Fix the map until clean.
5. **Eligibility fallback:** if fewer eligible untouched words exist than needed, expand the compendium via the documented pipeline (`word_connections.md` entry → `bun run parse-data` → reference; verify etymology; `[UNVERIFIED — check]` → drop). Batches ≤30–40 words; remember word ids are the German word lowercased — `grep -i` `word_connections.md` before adding.

#### Phase B — Batched execution (in-place edits)

Batches of **≤10 lessons, in trail order**. Per lesson:

1. **Words:** update `word_ids` (all words this lesson drills, new + reused) and `table_word_ids` (4–8 pattern demos, subset) to match the move-list.
2. **Exercises:** rewrite to the new word set — keep the same types and structure where possible; all 5 must remain valid, solvable, and fair (solvable by a learner who has only seen earlier lessons). Respect every constraint in §5.2. Exercise ids follow `l<lessonId>_e<n>`; reuse existing ids where possible.
3. **Prose — surgical only:** introduce new words primarily through `word_ids`/`table_word_ids` and exercises. Touch `hook.content`/`pattern.content` only where a word reference breaks or a new word needs a sentence (addition preferred over rewrite; never shorten a correct explanation). Update `summary.use_example` if its words changed. Do not rewrite sections that don't need it. Lessons 1–10: add only, never rewrite existing prose (except a factual defect).
4. **Per-batch validation (all sequential):** the §5.5 command block. Fix all failures before the next batch. Commit on branch `vocab-rebalance-650` — stage **only files you changed**; the working tree has unrelated uncommitted changes you must neither commit nor revert. Honest commit messages (`rebalance: fill sprig 901 with 3 A1 body words, weave wasser/glas into 1001`).
5. Keep a running batch report: lessons touched, words introduced, running unique-word total.

#### Checkpoint — end of Campaign 1

All audits green (deferral list allowed but must be empty except documented items like a 3002 split scheduled for Campaign 2), everything committed, and a written report: before/after histograms, move-list rows done, unique-word count, deferrals. **If running interactively, pause here for owner review of the move-list commit before Campaign 2. If autonomous, proceed — the move-list commit is already the review artifact.**

### Campaign 2 — new lessons to 650

Batches of **≤5 new lessons** (repo authoring rule). Author sprigs/branches per the sanctioned schemes — **inspect existing id schemes first and take the next free numbers; never renumber**: sprigs inside a topic cluster (max 8 lessons per cluster = core + 7 sprigs; existing patterns like 101/102 under topic 1, `1904-05`-style second sprigs), branches `5000+n*10` (1–3 lessons each), or new topics appended after topic 30 (safe for gates; never insert before 30). New lessons inherit their topic's phase.

Each new lesson: full 5-segment structure (Hook → Pattern → Table → Practice → Summary) in the register of lessons 1/4/9/15; 4–5 new words; 5 exercises, ≥3 types, first ∈ {`morpheme_tiles`, `matching_pairs`, `shift_select`}, escalation recognize→match→select→produce→assemble; `transcribe` in core-position lessons with cue ladders (topics 2–7 → 3 cues, 8–16 → 2, 17–30 → 1); `literal_gloss` only in word-order clusters (topics 2, 12, 13, 14, 15, 20, 27); max 1 `twist` (mandatory in core positions 2–30, ungraded, never counts toward the 5); ≤2 posture whisper-cues; `curiosity_teaser` points at the actual next trail node — and the **preceding** node's teaser is re-pointed if you changed what follows it. Weave old words heavily: every new lesson's sentences must reuse previously-taught words and honor the weaving floor.

If Campaign 1 deferred the 3002 split, create "Trap Watch II" as a topic-30-area lesson here and bring 3002 to ≤8.

---

## 5. Reference

### 5.1 Exercise types and field requirements

| Type | Required fields | Key constraint |
|---|---|---|
| `morpheme_tiles` | `tile_options`, `target_answer` | Tiles must be able to form the answer |
| `matching_pairs` | `matching_pairs` (`{id, english, german}`[]), `target_answer` | ≥3 pairs |
| `shift_select` | `options` (string[]), `target_answer` | `options` must contain `target_answer` |
| `derive` | `english_hint`, `target_answer` | — |
| `reverse_cognate` | `target_answer` | Target is the English word |
| `syntax_builder` | `word_bank`, `target_answer` | `word_bank` contains every word of `target_answer` |
| `transcribe` | `idea`, `cues` (1–3), `word_bank`, `target_answer` | `word_bank` strictly longer than the target word count (≥1 distractor); never the first exercise |
| `literal_gloss` | `german`, `options` (3–4), `target_answer` | Only in word-order clusters (topics 2, 12, 13, 14, 15, 20, 27); never first |

All exercises: must have `meaning` and `explanation` (strings); may have `shift_hint`, `affirmation`, `diagnosis`, `vocab_hints` (for function words not in the compendium). Verify exact shapes against `src/lib/types.ts` and existing lessons — this table is orientation, the type system is ground truth.

### 5.2 Compendium word shape (`compendium.json` — verify against the file)

```json
{
  "id": "wasser",
  "target_word": "Wasser",
  "english_cognate": "water",
  "english_meaning": "water",
  "gender": "das",
  "ipa": "/ˈvasɐ/",
  "sound_shift_ids": ["t_to_s_ss_z"],
  "shift_rule": "T → S/SS/Z",
  "context_phrase": "Ein Glas Wasser, bitte.",
  "context_translation": "A glass of water, please.",
  "etymology_derivation": "...",
  "domain": "food"
}
```

Words are keyed by lowercase id; every `word_ids` entry must be a key of `compendium.words`.

### 5.3 Trail order

Trail order is NOT id order: per topic — core, then that topic's sprigs, then branches attached to the topic — then the next core. Example: sprig 402 comes **before** core 5 even though 402 > 5 numerically; an exercise in core 5 may use words from everything at-or-before it in that walk (core 1, its sprigs, its branches, core 2 … core 4, its sprigs, core 5 itself) and from nothing after it. **Never infer position from id arithmetic — always walk `flattenTrailNodes()`.**

### 5.4 Validation commands

```bash
# After every batch (sequential, never via GNU parallel — see Pitfall 7):
bun run parse-data && bun run test && bun run typecheck
bun scripts/audit-word-refs.ts
bun scripts/audit-teasers.ts        # must report: title drift: 0 | teaser flags: 0
bun scripts/audit-vocab-balance.ts  # your new audit (Campaign 1 Phase 0)

# Duplicate exercise ids (must print nothing, every batch):
grep -o 'id: "l[0-9]*_e[0-9]*"' src/data/lessons.ts | sort | uniq -d

# Phase boundaries and the very end:
bun run build
bun run trail                       # regenerates TRAIL.md (end of Campaign 2)
```

---

## 6. Pitfalls (from `docs/AGENT_PRECAUTIONS.md` — read it in full; memorize these)

1. Word ids are the German word lowercased; `grep -i` `word_connections.md` before adding a word.
2. Write ä/ö/ü/ß as literal Unicode, never escape sequences.
3. The parser's §2 section headers carry counts — keep them accurate; wrong counts won't break the parse, malformed rows are **silently dropped** (validate after editing).
4. Duplicate word ids in the compendium **silently overwrite** the earlier entry.
5. TS1128 at the last line of `lessons.ts` after a bulk edit is usually an unterminated string literal, not a bracket problem.
6. An appended block must end exactly with `  },\n];` — nothing between the last lesson's close and the array close.
7. Run validation commands **sequentially, never wrapped in GNU `parallel`** — the parallel sandbox can't see `node_modules`. If `node_modules` vanishes, `bun install` fixes it (bun.lock is committed).
8. AI prose self-review: re-read your output for self-correcting garbage ("...wait — ...", half-deleted alternatives). These pass tests and embarrass the product.
9. Count sync happens **once, at the very end of Campaign 2** (or end of Campaign 1 if you stop there): `TOTAL_COMPENDIUM_WORDS` only if the compendium grew, plus every stale count you find by grepping the old ones (`1226`, `290`, `128`, `109`, `310`, `619`) in docs and code — including the machine-parsed §2 inventory table in `docs/README.md` (strict format) and root `README.md`.
10. `lessons.ts` is single-writer: never parallelize writes to it or to `word_connections.md`.

---

## 7. Definition of done

**Campaign 1 checkpoint (all must hold):**
1. `bun run parse-data && bun run test && bun run typecheck` green; `audit-word-refs`, `audit-teasers` (`0 | 0`), and `audit-vocab-balance` pass (only documented deferrals on the deferral list).
2. Unique words **≥450** (target band 450–500); no lesson >11 new words if it is a pattern-exemplar core, >8 otherwise; zero-new lessons ≤25% and every one deliberately chosen as revision.
3. Weaving floor met (or each shortfall listed with a reason); every taught word ≥1 exercise mention (fix the 59 table-only words, or list why not).
4. Duplicate-exercise-id grep prints nothing; all work committed on `vocab-rebalance-650`; report produced with before/after histograms.

**Campaign 2 (final):**
5. Unique words **≥650**; all bands hold including new lessons; audits all green; `bun run build` succeeds.
6. `audit-teasers` reports `title drift: 0 | teaser flags: 0`; `bun run trail` regenerated `TRAIL.md`.
7. Count sync done once (§6 pitfall 9); `docs/README.md` and root `README.md` reflect the new baseline.
8. Final report: before/after comparison (all §2 metrics), every lesson changed and how, every new lesson, words added/removed, shortfall list, any `[UNVERIFIED]` etymology flags, full validation output.

---

## 8. Work style

- **Sub-agent use is mandatory.** You MUST dispatch sub-agents for, at minimum: (a) digesting the Phase 0 docs, (b) the §2 baseline re-verification and Phase A inventory scripts, (c) etymology verification fan-out for every batch of new table words, (d) frequency/Goethe-A1 wordlist lookups, and (e) any bulk reading of `lessons.ts`, `compendium.json`, or `word_connections.md` (353 KB). Sub-agents read, research, and analyze — they never write repo files. Every write stays with you, the main agent; `lessons.ts` is single-writer and edits happen sequentially in trail order. If your environment genuinely lacks sub-agent tooling, state that explicitly in your first report and perform those steps carefully yourself — never silently skip them.
- Analysis scripts live in `/tmp`, never the repo. The only repo files you create or modify are the ones this plan names: `lessons.ts`, `scripts/audit-vocab-balance.ts`, the move-list doc, `word_connections.md` (only if the pool runs short), `TRAIL.md` (regenerated), counts/docs at sync time.
- Git: branch `vocab-rebalance-650`; commit after every validated batch; stage only your files; never push; never touch the owner's unrelated uncommitted changes.
- **Checkpoint protocol:** this is a multi-session-sized project. If you near the end of your run budget, stop at a batch boundary where all audits pass, commit, and leave an honest status report (move-list rows done/remaining, current unique-word count, exact resume instructions). Never leave the repo mid-edit with failing audits.
- Don't ask the user questions mid-run unless genuinely blocked on a decision this prompt doesn't cover; when forced to choose, choose the option that preserves ids/order/structure and the reuse law.
- Report honestly: if a target can't be met (e.g., not enough connection-bearing eligible words), say so with the numbers instead of fudging the classification.
