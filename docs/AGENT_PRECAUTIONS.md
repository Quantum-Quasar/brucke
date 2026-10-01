# Agent Precautions — Brücke Repository

> **Read this before editing anything.** Every entry below was learned the hard way — each
> corresponds to an actual incident or a structural landmine in this codebase. Entries are
> grouped by area, and each states the **condition** under which it applies. If your task
> doesn't trigger any condition, proceed normally. If it triggers one, follow the action.

**Validation baseline (always applicable):** `bun run parse-data && bun run test && bunx tsc --noEmit` must be green before you start and after every batch. Full `bun run build` at phase boundaries. Never declare done without all four.

**The two audit tools (always applicable at the end of content work):**
- `bun scripts/audit-teasers.ts` — must report `title drift: 0 | teaser flags: 0`
- `bun scripts/export-trail.ts` — regenerates `TRAIL.md`; run it after any lesson/teaser change

---

## 1. Compendium (`word_connections.md`) — applies when you touch §2–§5

### 1.1 §2 table format is machine-parsed and strict
- **Applies when:** adding or editing any row in §2 (the vocabulary table).
- **Action:** rows are exactly 8 columns: `| # | **German** | cognate | der (m)/die (f)/das (n)/- | /IPA/ | \`shift_id\` | Phrase *("Translation.")* | Derivation |`. The shift column may only contain the exact ids (`th_to_d`, `d_to_t`, `p_to_pf_f`, `t_to_s_ss_z`, `k_to_ch`, `v_to_b`, `y_gh_to_g_ch`, `latin_ieren`, `strong_verbs_ablaut`) or `` `Direct Cognate` ``. The context phrase MUST end with `*("...")*` — the parser regex-extracts the translation. The gender cell must start with `der`/`die`/`das` or be `-`.
- **Known incident:** a row with the article inside the German word cell (`**das Gift** (trap)`) produced the id `das gift` and silently broke every lesson referencing `gift`.

### 1.2 Word ids are the German word lowercased — check for duplicates
- **Applies when:** adding ANY new word.
- **Action:** `grep -i "word" word_connections.md` before writing the row. The id is the German word lowercased; a duplicate id silently overwrites the earlier entry and only surfaces as a mysterious count mismatch (a previous run added `bekommen` twice and the parser emitted 310 rows for 311).

### 1.3 Count sync happens ONCE, at the end of a content run
- **Applies when:** you are adding words across multiple batches.
- **Action:** do NOT update the §2 header (`All N Words`), the inventory block, or `TOTAL_COMPENDIUM_WORDS` in `src/lib/types.ts` per batch. Sync all three once, to the true final count, at the very end. Per-batch syncing causes test churn and wasted context. (The count test in `compendium.test.ts` is deliberately tolerant — `≥ TOTAL_COMPENDIUM_WORDS` — do not "fix" it back to strict equality without syncing.)

### 1.4 Section regexes vs. section headers
- **Applies when:** editing any `##` section header in `word_connections.md`.
- **Action:** the parser regexes are count-agnostic (`All \d+ Words`), so they won't break — but the headers must still be updated to the true count at final sync, and `compendium.test.ts` asserts 32 compounds / 16 false friends / 28 insights. If you add §3/§4/§5 rows, update those headers AND the test expectations deliberately — never silently.

### 1.5 Real Unicode, not escape sequences
- **Applies when:** writing German text into `.ts` source files.
- **Action:** write ä/ö/ü/ß as literal characters. `\u00df`-style escapes are valid TS but break plain-text audits, greps, and diff review (`stra\u00dfe` once masked a word-id mismatch).

---

## 2. Etymology — applies when you add words or write cognate hooks

### 2.1 The no-invention rule
- **Applies when:** writing any derivation, etymology hook, or "philosophy" claim about a word pair.
- **Action:** verify against en.wiktionary.org (German entry, Etymology section) and cite `[wiktionary]` in the derivation cell. If unverifiable: drop the word, or keep it with `[UNVERIFIED — check]` and list it in your report. LLM-generated etymology is plausible-sounding nonsense more often than almost anything else — this rule is the brand.

### 2.2 Known etymology traps (do not repeat these mistakes)
- **Applies when:** writing hooks for these specific pairs.
- **Action / facts:**
  - **Vater/father is NOT the V→B family.** It is `*fadēr` with Verner's-law voicing; German V=[f] corresponds to English f. An external analysis claimed "V→B shift!" — that is wrong.
  - **heute is NOT cognate with today** as a compound (English's twin *hēodæġ* died out). Present it as "on this day" — honest, not a twin claim.
  - **von** has a disputed etymology — keep it as a vocab hint, never a compendium claim.
  - **treffen ↔ drape** (pre-existing row 101) is thin — flagged for human verification; do not build new content on it without a second source.
  - **bald ↔ bold** (`*balþaz`) is standard but semantically surprising — spot-check before reusing the hook.

### 2.3 Research subagents report; they never edit
- **Applies when:** fanning out research to subagents.
- **Action:** subagents return per-word records (verdict, reconstruction, one-line derivation, IPA, gender, source quote). The main agent writes all file changes. Never let a subagent edit files, and never parallelize writes to shared files (`lessons.ts` is one).

---

## 3. Structure (trail map) — applies when you add shells or change order

### 3.1 Never renumber or insert topics
- **Applies when:** a proposal says "insert topic 10.5", "move the umlaut clinic earlier", or anything that reorders the spine.
- **Action:** topic ids are welded into lesson ids, spine edges, gate `afterTopic` positions, store progress, and layout tests. Implement inserts as **sprigs on adjacent topics** or **branches** instead. Appending new topics **after 30** is safe (gates are unaffected); inserting before 30 is not.

### 3.2 Cluster budget: max 8 lessons per topic
- **Applies when:** adding sprigs to a topic.
- **Action:** core + up to 7 sprigs. Check the topic's current count before adding. Sprig ids are `topicId * 100 + nextIndex`; branch ids are `5000 + n*10` with lessons `+1, +2`.

### 3.3 Gate math
- **Applies when:** adding any lesson.
- **Action:** more side lessons only ever make gates easier — never weaken a gate threshold, never touch `TRAIL_GATES` fields. More authored content before a gate is always safe.

### 3.4 Branch lessons are side material
- **Applies when:** authoring branch lessons or their teasers.
- **Action:** branch teasers chain within their own branch (lesson i → lesson i+1); the last one may point back toward the spine. Spine teasers must never point into a branch. The teaser auditor only walks the spine — branch chains are your own responsibility.

---

## 4. Lessons (`src/data/lessons.ts`) — applies when you author or edit lessons

### 4.1 Schema discipline (tests enforce most of this)
- **Applies when:** authoring a lesson or editing exercises.
- **Action:**
  - Exactly 5 exercises, ≥3 types from `morpheme_tiles`, `matching_pairs`, `shift_select`, `derive`, `reverse_cognate`, `syntax_builder`.
  - **First exercise must be** `morpheme_tiles`, `matching_pairs`, or `shift_select` — never cold typing (`derive` first has failed a test before).
  - `syntax_builder`: `word_bank` must contain every word of `target_answer`; untaught auxiliary words need `vocab_hints`; no trailing periods/punctuation in targets.
  - `morpheme_tiles`: tiles must be able to form the answer.

### 4.2 Reuse density follows TRAIL order, not id order
- **Applies when:** writing example sentences or exercise targets.
- **Action:** you may only use vocabulary from lessons **earlier in trail order** — core → that topic's sprigs (in id order) → next core — plus function words introduced via `vocab_hints`. Sprig 402 comes *before* core 5 in trail order even though `402 > 5` numerically. Violating this makes exercises unfair even when tests pass.

### 4.3 Title consistency
- **Applies when:** authoring any lesson.
- **Action:** the lesson's `title` must equal the curriculum shell's `title` character-for-character (the map signpost and lesson page must never disagree). The auditor catches drift (a past incident: "Double-Shift" vs "Double Shift").

### 4.4 Teaser chain
- **Applies when:** writing or editing any `curiosity_teaser`.
- **Action:** the teaser must point at the **actual next node in trail order** and name it recognizably (the auditor matches ≥5-char tokens from the next node's title; titles like "will ≠ will" fall back to the shell's plan line). Run `bun scripts/audit-teasers.ts` until 0 flags. Re-point by changing **only** the teaser string.

### 4.5 Do not touch authored lessons or protected files
- **Applies when:** you feel like "improving" existing content.
- **Action:** all 109 authored lessons are frozen unless the human asks. Also protected: `src/lib/trail-map.ts`, `src/lib/store.ts`, `src/components/**` (report rendering bugs instead of fixing them), `TRAIL_GATES` thresholds, theme data. The compendium's §1 shift definitions are parser-anchored — edit only with extreme care.

---

## 5. Code & tooling — applies when running or changing code

### 5.1 The `parallel` sandbox cannot see `node_modules`
- **Applies when:** running tests/builds.
- **Action:** run validation commands sequentially. Running them via GNU `parallel` (or any sandboxed wrapper) once produced `vitest: command not found` and a cascade of false errors. Sequential in the repo root always works.

### 5.2 `node_modules` can vanish
- **Applies when:** commands suddenly fail with "module not found" after working before.
- **Action:** check `ls node_modules`; if empty/missing, `bun install` (bun.lock is committed). Don't debug phantom errors first — check the obvious.

### 5.3 TS1128 at the last line is usually NOT a bracket problem
- **Applies when:** bulk-appending content to `lessons.ts` (or any TS array file) and tsc reports "Declaration or statement expected" at the final lines.
- **Action:** first search for a **newline inside a string literal** or an unterminated string earlier in the appended block — a raw line break inside a quoted string cascades to errors at the file end. Only then check for stray closing brackets. (Known incident: a python-append left `]\n];` at the file end — happened three times; check for it by name.)
- **Related:** `TS2561 ... does not exist in type 'LessonSection'` means a typo'd object key (`footones` for `footnotes`) — passes runtime, fails tsc.

### 5.4 Bulk-append checklist for `lessons.ts`
- **Applies when:** appending lessons via script/heredoc.
- **Action:** the appended block must end exactly with `  },\n];` — nothing between the last lesson's close and the array close. After any bulk append: run `tsc --noEmit` immediately, then grep for `^]` (a stray closing bracket on its own line).

### 5.5 Audit word references before declaring done
- **Applies when:** you added lessons and/or words.
- **Action:** verify every `word_ids` / `table_word_ids` entry in every lesson resolves against `src/data/compendium.json` (a missing word = broken lesson page at runtime, even when all tests pass — the test suite does not fully check this). A ~15-line script walking the lesson blocks and set-checking ids is enough; it has caught real misses twice.

### 5.6 AI prose self-review
- **Applies when:** you generated long prose (hooks, patterns, summaries).
- **Action:** re-read your own output for "self-correcting" garbage that leaks from generation: `"...wait — ..."`, `"...? no — ..."`, half-deleted alternatives, sentence fragments mid-explanation. These pass all tests and embarrass the product. Several such passages had to be repaired post-hoc; catch them before commit.

---

## 6. Process — applies to any multi-batch content run

### 6.1 Batch discipline
- **Applies when:** authoring more than ~2 lessons or ~30 words.
- **Action:** batches of max 5 lessons (or ~30–40 words), each followed by the validation baseline. Full build at phase boundaries. Never author a large amount of content before the first validation — errors compound.

### 6.2 Report honestly
- **Applies when:** writing your final summary.
- **Action:** list (1) content added with ids, (2) words with sources, (3) structural changes, (4) every `[UNVERIFIED]` item and every dropped candidate, (5) validation results, (6) what you deliberately did not do and why. "Done and verified" is only claimed when it is.

### 6.3 Subagents are for reading and research, not writing
- **Applies when:** the task is big enough to parallelize.
- **Action:** fan out verification/analysis to subagents (they save enormous time), but file writes stay with the main agent. `lessons.ts` especially is append-only and single-writer.

---

*If you find a new trap, add it here with its condition — this file is the institutional memory that keeps agents from re-learning the same lessons.*
