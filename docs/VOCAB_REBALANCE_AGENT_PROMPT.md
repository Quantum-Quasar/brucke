# AGENT PROMPT — Brücke Vocabulary Rebalancing & Lesson Content Overhaul

> **Status:** Approved plan. The human has explicitly authorized breaking reuse-legality checks, gates, and progress tracking — all will be rebuilt after the rebalancing.
> **Companion docs (read in this order):**
> 1. `docs/AGENT_PRECAUTIONS.md` — institutional memory. Most rules still apply; the specific overrides are listed in §0 below.
> 2. `docs/content-agent-prompt.md` — the original content-authoring prompt. Your voice, pedagogy, schema, and etymology rules come from here.
> 3. `docs/THINKING_METHOD_UPGRADE.md` — the TM upgrade spec. Exercise types `transcribe`, `literal_gloss`, and `twist` are defined here.
> 4. This document.

---

## 0. Permissions & Overrides (what this agent may do that previous agents could not)

The human has granted the following permissions that override `AGENT_PRECAUTIONS.md` §4.5 ("do not touch authored lessons") and the content-agent-prompt's freeze rules:

| Previous rule | Override granted |
|---|---|
| Authored lessons are frozen unless asked | **You may edit the `word_ids`, `table_word_ids`, exercises, `vocab_hints`, and example sentences of any lesson.** The goal is to redistribute vocabulary introductions across all 128 lessons for balance. |
| Never change id/slug/title/phase/shift_categories/position | **Still frozen.** You must NOT change any lesson's `id`, `slug`, `title`, `subtitle`, `phase`, `shift_categories`, or its position in the `LESSONS` array. The topic, theme, and overall narrative of every lesson stay exactly the same. |
| Reuse-legality (vocab from earlier lessons only) | **Will break during rebalancing. That is expected.** You will rebuild it from scratch after the new word assignments are finalized. |
| Gates and progress tracking | **Will break. Expected.** Gate thresholds in `TRAIL_GATES` remain frozen (don't change the numbers), but the lessons feeding them will have different word sets. The `requiredStars` values and `afterTopic` positions stay the same. |
| Max 1 exercise swap per lesson per batch | **Suspended for this task.** You may rewrite all 5 exercises in a lesson if the new word assignments demand it. The 5-exercise contract, ≥3 types rule, and first-exercise-type rule still apply. |
| Batch size of 5 lessons | **Raised to 10 lessons per batch** for this task. Still validate after every batch. |

**What is still absolutely frozen:**
- `id`, `slug`, `title`, `subtitle`, `phase`, `shift_categories` of every lesson
- Position/order of lessons in the `LESSONS` array
- `curriculum.ts` — no structural changes (no new topics, no new sprigs, no reordering)
- `TRAIL_GATES` thresholds
- `src/lib/trail-map.ts`, `src/lib/store.ts`, `src/components/**`
- The Lesson type interface in `src/lib/types.ts` (except `TOTAL_COMPENDIUM_WORDS` if needed)
- The compendium's §1 shift definitions
- Hook and pattern **topics/themes** — you may rewrite example sentences within them to use new vocabulary, but the conceptual content of the hook and pattern sections must remain about the same linguistic phenomenon

---

## 1. The Problem You Are Solving

### 1.1 Current state (verified data)

| Metric | Current value |
|---|---|
| Authored lessons | 128 (30 cores, 78 sprigs, 20 branch lessons) |
| Compendium words | 1,226 |
| Unique words referenced by lessons (`word_ids` ∪ `table_word_ids`) | ~290 (23.7% of compendium) |
| New words per lesson (first introduction) | avg 2.3, **median 1**, max 15 |
| Lessons introducing 0 new words | ~51 of 128 (40%) |
| Lessons introducing ≥8 new words | ~10 (phase-1 shift cores at 9–11; lesson 3002 at 15) |
| Words appearing in exactly 1 lesson | ~96 (33% of taught vocabulary) |
| Average lessons per word | 3.7 |

### 1.2 What is wrong

1. **Too few words taught.** 290 words across 128 lessons is well below Goethe A1 (~650 words). The compendium has 1,226 words sitting unused.
2. **Wildly unbalanced distribution.** 40% of lessons introduce zero new words while a few dump 9–15. The median lesson introduces just 1 new word.
3. **Poor reuse.** A third of taught words appear in only one lesson ever. SLA research says a word needs ~10+ encounters to be learned (Nation, 2001).
4. **This imbalance is the difference between a hit app and a boring app.** A learner who completes 10 lessons and has met only 15 new words feels like nothing happened. A learner who hits a lesson with 15 new words at once feels overwhelmed.

### 1.3 Target end state

| Metric | Target |
|---|---|
| Unique words taught across all 128 lessons | **~450** (Phase 1 milestone). Select from the existing 1,226 compendium words. Prioritize frequency (top ~1,500 German words) and Goethe A1 coverage. |
| New words per lesson | **3–5** for consolidation/sprig/drill lessons, **5–7** for core lessons. Hard cap of **8** except shift-core pattern lessons (topics 3–7) which may stay at 9–11 because those are exemplars of a single sound-shift rule (low cognitive load). |
| Pure revision lessons (0 new words) | **~20–25 lessons** (15–20%), deliberately chosen, not accidental. These should be lessons whose theme is genuinely about review/drills (e.g., "Discrimination Drills", "Gym", "Review Game"). |
| Reuse floor | Every word appears in the exercises/sentences of **≥3 lessons** (the lesson that introduces it + ≥2 later lessons). |
| Lesson 3002 ("Trap Watch: False Friends in the Wild") | Reduce from 15 to ≤8 new words. Move excess false-friend words to other lessons or accept that some were already introduced earlier. |

---

## 2. The Plan (execute in this order)

### Phase A: Analysis & Word Assignment Map (DO THIS FIRST — no file edits yet)

**A1. Build the current-state inventory.**
Write a throwaway analysis script (save to `/tmp/vocab-analysis.ts`, run with `bun`) that:
1. Imports `LESSONS` from `src/data/lessons.ts` and `compendium` from `src/data/compendium.ts`.
2. Computes trail order (use `flattenTrailNodes()` from `src/data/curriculum.ts` — this gives the correct order: core → sprigs → next core, with branches attached).
3. For each lesson in trail order:
   - Lists all `word_ids` and `table_word_ids`
   - Marks which words are "new" (first appearance in trail order)
   - Counts new words, reused words
4. Produces:
   - A histogram of new-words-per-lesson (0, 1, 2, ..., 8+)
   - List of lessons with 0 new words (id, title)
   - List of lessons with ≥6 new words (id, title, count, which words)
   - Total unique words across all lessons
   - For each word: how many lessons it appears in; list words appearing in exactly 1 lesson
   - List of all 1,226 compendium words NOT referenced by any lesson (the "untouched pool")
5. Outputs a JSON summary to `/tmp/vocab-analysis-output.json` and a human-readable summary to stdout.

**A2. Select the ~160 new words to add** (290 current → ~450 target = ~160 new words).
From the untouched pool, select words using these criteria in priority order:
1. **Goethe A1 wordlist coverage** — if a word is on the Goethe A1/A2 list and in the compendium, it should be taught. Use web search to find the Goethe A1 wordlist if needed.
2. **Frequency** — prefer words from the top ~1,500 German frequency list.
3. **Connection quality** — prefer words with strong etymological connections (sound shifts > direct cognates > Latin bridge). Every word taught must "teach a connection" per the product philosophy.
4. **Domain coverage** — don't cluster all new words in one domain; spread across body, food, nature, daily life, abstract, etc.
5. **Thematic fit** — each word should fit naturally into at least one existing lesson's topic/theme.

**A3. Create the Word Assignment Map.**
Produce a detailed plan (save to `/tmp/word-assignment-map.json`) that maps every lesson (by id) to its new `word_ids` and `table_word_ids`. The map must satisfy:
- Every lesson's word set is thematically appropriate for that lesson's topic (which you cannot change)
- New-words-per-lesson targets from §1.3 are met
- The ~20–25 pure-revision lessons are explicitly chosen (pick "Drill", "Gym", "Discrimination", "Review" lessons)
- Every word appears in ≥3 lessons
- Reuse legality: a lesson may only use words from lessons earlier in trail order (or introduced in that lesson itself), plus function words via `vocab_hints`
- The 96 "one-lesson wonders" (words currently appearing in only 1 lesson) get extra reuse — add them to later lessons' sentences before pulling fresh compendium words

**A4. Validate the map before any edits.**
Write a second throwaway script (`/tmp/validate-assignment-map.ts`) that:
1. Reads the assignment map
2. Checks all constraints: new-words-per-lesson within bounds, reuse floor met, reuse legality holds, total unique words ≈ 450, no lesson exceeds 8 new words (except shift cores)
3. Reports violations

Only proceed to Phase B when the map validates clean.

### Phase B: Implement the Rebalancing (edit `lessons.ts`)

Work in batches of **≤10 lessons**, in trail order (start from lesson 1, go forward).

For each lesson in the batch:

**B1. Update `word_ids` and `table_word_ids`** to match the assignment map.
- `word_ids`: all compendium words this lesson drills (new + reused from earlier lessons)
- `table_word_ids`: the 4–8 words that demo the lesson's pattern in the transformation table (subset of `word_ids`)

**B2. Update exercises** to use the new word set.
- Keep the same exercise types and structure where possible
- If new words replace old words, rewrite the exercise to use the new words
- All 5 exercises must remain valid, solvable, and fair (a learner who has done only earlier lessons can solve them)
- Exercise ids: keep the existing `l<lessonId>_e<n>` convention; reuse existing ids if possible
- `vocab_hints` for function words that aren't in the compendium
- `word_bank` for `syntax_builder` and `transcribe` exercises must contain all words of `target_answer`
- `transcribe` exercises: `word_bank` must be strictly longer than target word count (≥1 distractor)
- First exercise must be `morpheme_tiles`, `matching_pairs`, or `shift_select`

**B3. Update example sentences** in `hook.content` and `pattern.content` ONLY where necessary — if the old example sentence used a word that is no longer in this lesson's `word_ids`, replace that sentence with one using the new words. **Do not rewrite sections that don't need it.** The topic, the linguistic phenomenon being taught, and the pedagogical arc must remain identical.

**B4. Update `summary.use_example`** if it uses a word no longer in the lesson's set.

**B5. Do NOT touch:**
- `id`, `slug`, `title`, `subtitle`, `phase`, `shift_categories`
- `hook.title`, `pattern.title` (these name the linguistic concept)
- `hook.footnotes`, `pattern.footnotes`, `pattern.linguist_note` (unless a word reference breaks)
- `summary.outcome`, `summary.takeaway` (unless a specific word reference breaks)
- `summary.curiosity_teaser` (these point to the next lesson and must stay valid — run `bun scripts/audit-teasers.ts` to verify)
- `twist` (leave existing twists alone; don't add new ones)

**B6. After each batch of ≤10 lessons:**
```bash
bun run parse-data && bun run test && bunx tsc --noEmit
bun scripts/audit-word-refs.ts
bun scripts/audit-teasers.ts
```
Fix all failures before proceeding to the next batch. Common failure modes:
- `word_ids` referencing a word not in `compendium.json` → add the word to `word_connections.md` §2 first, then `bun run parse-data`
- Exercise `word_bank` missing a word from `target_answer`
- First exercise is wrong type
- `morpheme_tiles` tiles can't form the answer
- Teaser drift (title tokens don't match next lesson)

### Phase C: Rebuild Reuse-Legality Verification

After all 128 lessons are updated:

**C1. Write a reuse-legality audit script** (`/tmp/reuse-legality-audit.ts`) that:
1. Walks lessons in trail order
2. For each lesson, computes the "legal vocabulary" = all words from `word_ids` of earlier lessons + function words + this lesson's own `word_ids`
3. Checks every German word in every exercise (`target_answer`, `word_bank`, `matching_pairs[].german`, `tile_options`) against the legal vocabulary
4. Reports any "unfair" exercises (using a word the learner hasn't seen yet)

**C2. Fix any unfair exercises** — either swap the word for one already taught, or move the word's introduction to an earlier lesson.

**C3. Run the reuse-legality audit again** until clean.

### Phase D: Final Validation & Reporting

**D1. Run the full validation suite:**
```bash
bun run parse-data && bun run test && bunx tsc --noEmit && bun run build
bun scripts/audit-word-refs.ts
bun scripts/audit-teasers.ts
```

**D2. Run the analysis script from A1 again** to produce the "after" numbers. Verify:
- Total unique words ≈ 450
- New-words-per-lesson: median 3–5, no lesson >8 (except shift cores ≤11)
- Pure revision lessons: 20–25
- Reuse floor: every word in ≥3 lessons
- 0 reuse-legality violations

**D3. Produce a final report** containing:
1. Before/after comparison table (all metrics from §1.1)
2. List of lessons that changed (by id and title) and what changed
3. List of new words added to lessons (which words, which lessons)
4. List of words removed from lessons (if any)
5. Any words that still fall below the reuse floor and why
6. Any `[UNVERIFIED]` etymologies or items flagged for human review
7. Full validation results (test output, audit output)

---

## 3. Data Shapes & File Locations (reference)

### 3.1 Lesson object shape (`src/lib/types.ts:184-204`)

```ts
interface Lesson {
  id: number;              // FROZEN — must match curriculum.ts shell id
  slug: string;            // FROZEN
  title: string;           // FROZEN — must equal curriculum shell title exactly
  subtitle: string;        // FROZEN
  phase: number;           // FROZEN (1=topics 1–8, 2=topics 9–16, 3=topics 17–30)
  shift_categories: string[]; // FROZEN
  word_ids: string[];      // ← YOU EDIT THIS: all compendium words this lesson drills
  hook: LessonSection;     // Edit example sentences only if word references break
  pattern: LessonSection;  // Edit example sentences only if word references break
  table_word_ids: string[]; // ← YOU EDIT THIS: 4–8 words demoing the pattern
  exercises: ExerciseItem[]; // ← YOU REWRITE THESE to match new word set
  twist?: LessonTwist;     // DO NOT TOUCH
  summary: {
    outcome: string;       // Edit only if word reference breaks
    use_example: { german: string; english: string }; // Update if words change
    takeaway: string;      // Edit only if word reference breaks
    curiosity_teaser: string; // DO NOT TOUCH (auditor validates)
  };
}
```

### 3.2 Exercise types and their field requirements

| Type | Required fields | Key constraint |
|---|---|---|
| `morpheme_tiles` | `tile_options`, `target_answer` | Tiles must be able to form the answer |
| `matching_pairs` | `matching_pairs` (array of `{id, english, german}`), `target_answer` | ≥3 pairs |
| `shift_select` | `options` (string[]), `target_answer` | `options` must contain `target_answer` |
| `derive` | `english_hint`, `target_answer` | — |
| `reverse_cognate` | `target_answer` | Target is the English word |
| `syntax_builder` | `word_bank`, `target_answer` | `word_bank` contains every word of `target_answer` |
| `transcribe` | `idea`, `cues` (1–3), `word_bank`, `target_answer` | `word_bank` strictly longer than target word count (≥1 distractor). Never first exercise. |
| `literal_gloss` | `german`, `options` (3–4), `target_answer` | Only in word-order clusters (topics 2, 12, 13, 14, 15, 20, 27). Never first exercise. |

All exercises: must have `meaning` (string), `explanation` (string). May have `shift_hint`, `affirmation`, `diagnosis`, `vocab_hints`.

### 3.3 Key files

| File | Role | Your relationship |
|---|---|---|
| `src/data/lessons.ts` (724KB, 12,795 lines) | All 128 lesson objects | **Your main edit target** |
| `src/data/curriculum.ts` (32KB) | Trail structure, shells, gates | **Read-only** for this task |
| `src/data/compendium.json` (728KB) | Generated word data | **Read-only** (generated by `bun run parse-data`) |
| `src/data/compendium.ts` | Typed wrapper | **Read-only** |
| `word_connections.md` | Source-of-truth compendium | **Edit only if you need to add new words** to the compendium that aren't already there (unlikely — the 1,226 words should be sufficient) |
| `scripts/parse-compendium.ts` | Compiler for word_connections.md | **Read-only** |
| `scripts/audit-word-refs.ts` | Word reference integrity check | **Run after every batch** |
| `scripts/audit-teasers.ts` | Teaser chain integrity check | **Run after every batch** |
| `scripts/export-trail.ts` | Regenerates TRAIL.md | **Run at the end** |
| `src/lib/word-refs-audit.ts` | Shared audit logic | **Read-only** |
| `src/tests/*.test.ts` | 28 test files, 223 tests | **Run after every batch** — fix failures, don't weaken assertions |

### 3.4 Trail order (critical for reuse legality)

Trail order is NOT id order. It is:
```
Topic 1 core → Topic 1 sprigs (101, 102, 103) →
  Branches attached to topic 1 (5071, 5072) →
Topic 2 core → Topic 2 sprigs (201, 202) →
  Branches attached to topic 2 (5011, 5012) →
Topic 3 core → Topic 3 sprigs (301, 302) →
...
Topic 30 core → Topic 30 sprigs (3001, 3002, 3003) →
  Branches attached to topic 30 (5081, 5082, 5101, 5102, 5111, 5112)
```

Use `flattenTrailNodes()` from `curriculum.ts` to get the canonical order. Sprig 402 comes *before* core 5 even though `402 > 5` numerically. An exercise in lesson 5 may use words from lessons 1, 101, 102, 103, 5071, 5072, 2, 201, 202, 5011, 5012, 3, 301, 302, 4, 401, 402, and 5 itself — but NOT from 501 or 6.

### 3.5 The compendium word shape (`compendium.json`)

```ts
{
  "id": "wasser",           // lowercase, used in word_ids/table_word_ids
  "target_word": "Wasser",  // display form
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

Words are keyed by lowercase id. When you add a word to `word_ids`, the id must be a key in `compendium.words`.

### 3.6 Validation commands

```bash
# After every batch (≤10 lessons):
bun run parse-data && bun run test && bunx tsc --noEmit
bun scripts/audit-word-refs.ts
bun scripts/audit-teasers.ts

# Check for duplicate exercise ids:
grep -o 'id: "l[0-9]*_e[0-9]*"' src/data/lessons.ts | sort | uniq -d
# (must print nothing)

# Final build check (after all batches):
bun run build
bun scripts/export-trail.ts
```

---

## 4. Content & Pedagogy Rules (carry forward from the original prompt)

### 4.1 Voice
Second person, confident, playful. Read lessons 1 and 4 in `lessons.ts` as the register standard.

### 4.2 The connection rule
Every table word must teach a connection (sound shift, shared root, calque, documented borrowing). If a word has no interesting connection to English, it appears as `vocab_hints` only, never in `table_word_ids`.

### 4.3 Etymology verification
Every new derivation claim must be verified against en.wiktionary.org (German entry, Etymology section). If unverifiable, mark `[UNVERIFIED — check]` and list in the batch report. Do not invent etymologies. See `docs/content-agent-prompt.md` §ETYMOLOGY VERIFICATION PROTOCOL.

### 4.4 The philosophy stays
This app teaches German through historical sound shifts and living etymological cognates. Every lesson must deliver an aha-moment of connection. A Brücke lesson never says "memorize this"; it says "once you hear it, you hear it everywhere." The rebalancing adds more words but must not dilute the connection-based approach. If a compendium word doesn't fit a lesson's sound-shift/grammar topic, it doesn't go there — put it in a different lesson where it fits, or leave it untaught.

### 4.5 Shift-core lessons (topics 3–7 cores) are special
These lessons demonstrate a sound-shift pattern with many exemplars. Having 9–11 words of the *same* pattern is pedagogically justified (one rule, many instances = low cognitive load). Do not artificially reduce these below 8 unless the words genuinely don't fit. The shift-core lessons may exceed the normal 5–7 cap.

### 4.6 Exercise fairness
Every exercise must be solvable from:
- The current lesson's taught content
- Vocabulary from earlier lessons in trail order
- Function words introduced via `vocab_hints`

A learner encountering an exercise with an unknown content word has no way to succeed. This is the #1 rule of the exercise system.

---

## 5. SLA Research Benchmarks (for your reference)

These numbers guided the targets. You do not need to re-research them.

| Source | Finding |
|---|---|
| Nation (2001) | A word needs ~10+ encounters across varied contexts to be learned |
| Munday (2016, Duolingo study) | ~4.8 new words per lesson averaged across a full tree |
| Cognitive load theory (Miller, Sweller) | 7 ± 2 items in working memory; for complete beginners, err toward 5 |
| Goethe-Institut | A1 ≈ 650 words, A2 ≈ 1,300 words |
| Duolingo German course | ~2,000–2,500 words total; newer courses push 7–14 new words per lesson |
| This app's own spec (`content-agent-prompt.md:86`) | 5–8 table words per lesson; grammar lessons 3–6 |

The 3–5 target for consolidation lessons sits conservatively within all these ranges. The 5–7 target for core lessons matches the app's own spec.

---

## 6. Common Pitfalls (from `AGENT_PRECAUTIONS.md` — still apply)

1. **Word ids are the German word lowercased.** `grep -i "word" word_connections.md` before adding.
2. **Real Unicode, not escape sequences.** Write ä/ö/ü/ß as literal characters.
3. **The parser's section headers carry counts** — update for accuracy but wrong counts won't break the parse.
4. **TS1128 at the last line** of `lessons.ts` after a bulk edit is usually an unterminated string literal, not a bracket problem.
5. **The appended block must end exactly with `  },\n];`** — nothing between the last lesson's close and the array close.
6. **AI prose self-review** — re-read your output for self-correcting garbage (`"...wait — ..."`, half-deleted alternatives). These pass tests and embarrass the product.
7. **Run commands sequentially, never via GNU `parallel`** — the `parallel` sandbox can't see `node_modules`.
8. **If `node_modules` vanishes**, `bun install` fixes it (bun.lock is committed).
9. **Duplicate exercise ids** are a live bug. After every batch: `grep -o 'id: "l[0-9]*_e[0-9]*"' src/data/lessons.ts | sort | uniq -d` must print nothing. The convention is `l<lessonId>_e<n>`.
10. **Count sync happens ONCE at the end.** Do not update `TOTAL_COMPENDIUM_WORDS` or `word_connections.md` header counts per batch — sync all at the very end to the true final count.

---

## 7. Delegation Rules

- **Subagents are for reading and research, not writing.** Fan out etymology verification and frequency lookups to subagents. All file writes stay with you (the main agent). `lessons.ts` is single-writer.
- **Do not parallelize writes.** Edit lessons sequentially in trail order.
- **Use subagents for the analysis scripts** (Phase A) if desired — they can write and run throwaway scripts in `/tmp`.

---

## 8. Definition of Done

You are done when ALL of the following are true:
1. `bun run parse-data && bun run test && bunx tsc --noEmit && bun run build` — all green
2. `bun scripts/audit-word-refs.ts` — all word references resolve
3. `bun scripts/audit-teasers.ts` — title drift: 0, teaser flags: 0
4. `grep -o 'id: "l[0-9]*_e[0-9]*"' src/data/lessons.ts | sort | uniq -d` — prints nothing
5. Total unique words across lessons ≈ 450 (±20)
6. New-words-per-lesson: no lesson >8 except shift cores ≤11
7. Pure revision lessons (0 new words): 20–25
8. Every word appears in ≥3 lessons
9. Reuse-legality audit passes (no unfair exercises)
10. Final report produced with before/after comparison
11. `bun scripts/export-trail.ts` run to regenerate TRAIL.md

---

## 9. Start Here

1. Read `docs/AGENT_PRECAUTIONS.md` in full.
2. Read `docs/content-agent-prompt.md` in full (especially §VOICE, §EXERCISE types, §SCHEMA).
3. Skim `docs/THINKING_METHOD_UPGRADE.md` §0–§3 for the TM philosophy and exercise types.
4. Read `src/data/curriculum.ts` in full (557 lines) to understand trail structure and topic themes.
5. Read lessons 1, 4, 9, and 15 in `src/data/lessons.ts` fully — these are your register standards for different lesson types (shift core, grammar core, separable verbs).
6. Skim the remaining lessons (read `word_ids`, `table_word_ids`, and exercise types — you don't need to read every sentence of every lesson before starting Phase A).
7. Run the current test suite: `bun run parse-data && bun run test && bunx tsc --noEmit` — verify all green (current state: 28 test files, 223 tests passing).
8. Execute Phase A (analysis + word assignment map).
9. Execute Phase B (implement the rebalancing, batch by batch).
10. Execute Phase C (rebuild reuse legality).
11. Execute Phase D (final validation + report).
