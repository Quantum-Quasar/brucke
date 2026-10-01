# The Thinking Method Upgrade — Brücke Implementation Plan

> **Status:** Approved plan, awaiting implementation.
> **Source of truth:** *The Thinking Method Guidebook for Course Writers* (Language Transfer, Mihalis Eleftheriou) — `docs/thinking method.pdf`.
> **Companion docs:** read `docs/AGENT_PRECAUTIONS.md` **first**. This plan *amends* it (see §0.2 — the human has granted permissions the precautions file doesn't yet reflect).
> **Implementer:** a fresh content/engine agent. This document is written to be self-contained.

---

## 0. How to use this document

### 0.1 Reading order for the implementing agent

1. `docs/AGENT_PRECAUTIONS.md` (institutional memory, traps, validation baseline)
2. This document, top to bottom. §3 is the philosophy — do not skip it; every spec below cites it.
3. §6 (rollout) before touching anything. Batches are capped there.
4. When authoring content: §5 (voice + examples) and the reuse-density rules in `AGENT_PRECAUTIONS.md` §4.2.

### 0.2 Permissions granted by the human (amends AGENT_PRECAUTIONS.md)

| Precaution file says | Human has now granted |
|---|---|
| Lessons frozen; components read-only | **Surgical edits to existing lessons are allowed** (rules in §0.3). Components may be edited for the features in this plan — but `src/lib/store.ts` (additive only), `src/lib/trail-map.ts`, gate thresholds, and theme data remain **frozen**. |
| (n/a) | **Engine changes are allowed**: new exercise types, feedback upgrades, player UI — per the specs here. Nothing outside this plan's scope. |

Everything else in `AGENT_PRECAUTIONS.md` still applies verbatim: the validation baseline
(`bun run parse-data && bun run test && bunx tsc --noEmit`, full `bun run build` at phase
boundaries), `audit-teasers.ts` + `export-trail.ts` after content changes, sequential (never
`parallel`) commands, the `lessons.ts` bulk-append checklist, count-sync-once discipline,
real Unicode, the no-invention etymology rule, and honest batch reporting.

### 0.3 Rules for surgical edits to existing lessons

Surgical edits are edits **inside** a `Lesson` object. They must:

1. **Never change**: `id`, `slug`, `title`, `phase`, `shift_categories`, or the lesson's position/count in `LESSONS`. (Title drift breaks `audit-teasers.ts`; ids are welded into the trail.)
2. **May change**: `hook.content`/`pattern.content` prose (enrichment only — never shorten a correct explanation), `exercises` (swap **at most one** exercise per lesson per batch, per §6 batch rules), `summary.curiosity_teaser` (only if the auditor demands re-pointing), and the new optional fields this plan adds (`affirmation`, `diagnosis`, `twist`, footnote `interest`).
3. **Lessons 1–10** are the register standard: edit only to *add* (a `transcribe` swap, an `affirmation`), never to rewrite existing prose, except to fix a factual defect.
4. Every batch containing edits re-runs the full validation baseline + `bun scripts/audit-teasers.ts` + `bun scripts/export-trail.ts`.

### 0.4 Decisions recorded from the human (2026-10-01)

- **Scope:** full stack — engine + content changes are in scope.
- **Existing lessons:** surgical edits allowed under §0.3.
- **Priorities (in order):** ① production drills, ② direct translations, ③ smart feedback, ④ posture & contours (human was unsure how to implement #4 in an async app — TM-5 exists to answer exactly that; read its "Why this works without a live teacher" note).
- **Language scope:** German-first, written so every rule generalizes to the multi-language system already growing in the repo (`src/data/language-content.ts`, `src/data/languages.ts`). See §9.

---

## 1. The source: the Thinking Method in one page

The guidebook is a course-writer's manual, not a learner's course. Its claim: *the magic of the
method is not the question-and-answer format — it is the engineering of the course content*
(Part 3 intro: "the magic … is not to be found in the Socratic question and answer system, but
in the course content itself"). It names ten techniques (§1.1–§1.10). Brücke's current state
against each:

| # | Technique (guidebook §) | One-line essence | Brücke today |
|---|---|---|---|
| 1.1 | Inhabit the learner's mental theatre | Never assume knowledge; write from inside the learner's current panorama | **Strong** — reuse-density constraint is exactly this |
| 1.2 | Teach everything, one thought at a time | Break ideas into limbs; resist offloading | **Strong** (one pattern per lesson) / **partial** (nothing makes the learner *build a thought*) |
| 1.3 | Manage cognitive load & tension contours | Peaks and troughs; artificial friction; never panic-mode, never boredom | **Partial** — gates/sprigs shape load *across* the trail; load is flat *within* a session |
| 1.4 | Import knowledge | Don't reinvent the wheel; cognates, consonant shifts, **direct translations** | **Strong** on cognates/shifts (the app's thesis); **absent** on direct translations |
| 1.5 | Reframe | Justify the language with few central ideas | **Strong** — "Him-Case", "Sentence Sandwich", "the verb waits in the basement" |
| 1.6 | Weave | Course order is the teacher's tool; pre-insert, foreshadow, pay off | **Strong** — teaser chain, ver↔for- payoff arc, grammar-gap placement doc |
| 1.7 | Mask repetition | Repeat constantly without the *feeling* of repetition | **Partial** — 4 review modes + varied exercise types do this; feedback wastes the moment |
| 1.8 | Cue | Implicit instructions; posture: pause, think aloud, don't memorize, let go | **Weak** — mechanics are taught, *posture* never is |
| 1.9 | Correct correctly | Know *what went wrong*; masked/indirect correction; self-correction | **Partial** — letter diff shows *where*, never *why*; no process-affirmation |
| 1.10 | Increase language & learning consciousness | Separate thought from language; counter predictable simplifications | **Strong** — every lesson teaches the linguistics; discrimination drills = preventative correction |

**The engine Brücke lacks** is the guidebook's core loop (Part 4.2, French/German analyses):
the learner is solicited to **produce a sentence from a thought**, bit by bit, with cues that
gradually withdraw. Everything in this plan serves that loop or the four techniques marked
partial/weak/absent above.

---

## 2. Where Brücke stands (verdict, condensed)

Brücke is not loosely inspired by the guidebook — it is a faithful, in several places *more
rigorous* implementation of it (verification discipline exceeds the source; the Atlas is the
guidebook's "panorama"; the grammar-gap placement doc performs the guidebook's "which thought
comes first?" exercise in writing). What follows are the **five gaps** this plan closes:

- **G1.** Learners decode and assemble, but are never asked to *transcribe their own thought* into German. (§1.2, §4.2)
- **G2.** Word order is taught with light metalanguage but never with the guidebook's most distinctive tool: the **deliberately literal rendering** ("I want not to go"). (§1.4)
- **G3.** Correction shows *where* the answer broke, never *why*; correct answers waste a repetition opportunity. (§1.7, §1.9)
- **G4.** Nothing teaches the learner *how to take the course* — pause, think aloud, it's not a test, let go and trust Review. (§1.8, §2.3)
- **G5.** Sessions have no contour: no deliberate peak (friction), no trough (breather), no autopilot breaker. (§1.3)

---

## 3. Design principles

Every change below is derived from these. Cited sections refer to the guidebook.

**P1 — The learner builds from thought, not from given words.** (§0.3: an idea is
multidimensional and must be split into elements and *ordered*; §1.2: one thought at a time;
§4.2: "build sentences, and quickly … it is the student's production of target structures that
will help them begin to decipher the nature of the cues"). A scrambled-word assembly is not
production — the answer is already on the table. Production means: idea in, elements chosen,
order decided, German out.

**P2 — The base language is an asset, and the literal rendering is a teaching tool.** (§1.4:
direct translations import knowledge "in reverse"; the oddness of "I an ice cream want" draws
attention to exactly the dimension being taught; "only be direct in the translation about what
we are drawing attention to"). English isn't just a cognate mine — it is also the *contrast
medium* for word order.

**P3 — Feedback is teaching time.** (§1.9: "any speaker … can tell the learner their sentence
is wrong … the teacher should know what *went wrong*"; §1.7: feedback moments are masked
repetition — "good, you removed the -ar ending … and pulled the accent back"). A correct
answer is a chance to restate the process; a wrong answer is a chance to name the *slip*,
not just diff the letters.

**P4 — Cue posture early and sparsely.** (§1.8: from the beginning, cue pause → think →
answer aloud → don't memorize → let go and trust; §2.3 "Sophophobia": counter the fear of
learning — "it's not a test". **But** the Swahili analysis warns: cueing done *always*
"will irritate our learner rather than empower them"). So: teach posture once, properly;
whisper it occasionally; never grade it.

**P5 — Load is a shape, not a slope.** (§1.3: contours — "peaks and troughs"; artificial
friction "makes or leaves something a little more challenging … to shape the learning
experience"; troughs reset via "an interesting and relevant offshoot"). Brücke escalates
within a lesson but never deliberately *breaks automatism* mid-lesson or *resets* load
with a tangent.

**P6 — Import techniques, not the format.** (§0.1: the guidebook "cannot pertain to direct
instructions … but rather on how to think"; Part 3 intro: the Q&A system is not the method).
We do **not** convert Brücke toward an audio course, transcripts, or live-teacher mimicry.
We port the *content-engineering* moves into interactive equivalents.

**P7 — Never invent connections.** Already Brücke law (no-invention rule). The guidebook
agrees from the other side (§1.8 "Miscueing": artificial mnemonics "blur the line between the
meaningful connections … and empty connections"). Every literal gloss, affirmation, and
diagnosis string states a **real** rule from §1 of `word_connections.md` or the trail's
taught patterns. No cuteness that isn't true.

**P8 — One new demand per moment.** (§1.2: "resist the temptation to offload too much of that
all at once"; §1.3: over-cueing and over-challenging cause panic mode). Every new mechanic
below is *opt-in per lesson* (authored), *skippable or ungraded* where it adds load, and
capped (cue lines ≤ 2 per lesson, one twist per lesson, one offshoot per lesson).

---

## 4. Change catalog

Five changes: **TM-1** production drills, **TM-2** direct translations, **TM-3** smart
feedback, **TM-4** posture system, **TM-5** twist & offshoot (contours). Each has: philosophy
→ exact spec → content spec with German samples → where it applies → acceptance criteria →
risks.

---

### TM-1 — Production drills: the `transcribe` exercise type

**Priority 1 (human's top pick). Engine: new exercise type. Effort: L (engine M, content L).**

#### Philosophy

This is the guidebook's central engine, ported. In the French analysis the teacher solicits
*"I want the cake?"* and the learner must *think* the sentence into being — first *who/wants*
(`je veux`), then *what* (`le gâteau`) — because "what feels to us like one idea … is in fact
very often four or five" (§1.2). Brücke's `syntax_builder` hands the learner the exact words
scrambled; the thought-work (choosing forms, deciding order) is done. `transcribe` gives the
**thought** and a **lexicon**, and makes the learner do the rest — with a **cue ladder** that
embodies the guidebook's "scaled prompt" (Turkish analysis: give the learner the chance to
come in "at the moment their memory is jogged" — reveal cues only on demand or on failure).

#### Exact spec

**Type** (`src/lib/types.ts`):

```ts
export type ExerciseType =
  | "morpheme_tiles" | "matching_pairs" | "shift_select"
  | "derive" | "reverse_cognate" | "syntax_builder"
  | "transcribe"      // NEW
  | "literal_gloss";  // NEW (TM-2)

export interface TranscribeExercise extends ExerciseItem {
  type: "transcribe";
  idea: string;            // the thought, natural English, incl. context that pins ambiguous forms
  cues: string[];          // 1–3 scaled prompts, ordered easy→late; renderer reveals progressively
  word_bank: string[];     // every word of target_answer PLUS 1–3 plausible distractors
  target_answer: string;   // no trailing punctuation (existing rule)
  meaning: string;         // natural English translation
  explanation: string;     // the order/form reasoning, in the trail's voice
  vocab_hints?: { word: string; translation: string; note?: string }[]; // untaught words only
}
```

**Interaction** (new widget `TranscribeExercise.tsx` in `src/components/lesson/`):

1. Prompt shows `idea` in a quote-styled "thought card" — visually distinct from assembly
   prompts. Sub-line: *"Build the German. The words are yours to choose — not all are needed."*
2. `word_bank` renders as chips (tap or number keys 1–9 — reuse `morpheme_tiles` key plumbing);
   tapping **inserts** into a free-text input (so the learner can also type inflections the
   bank doesn't carry, e.g. `willst`). Bank chips are vocabulary, not a jigsaw.
3. First attempt: **no cues**. On request ("Show me a step" button) or on a failed attempt,
   reveal `cues[0]`, then `cues[1]`… (the scaled prompt).
4. Grading: normalize (trim, strip final punctuation, `ß`/`ss` and `ae→ä` per existing
   letter-diff "almost" rules) → `evaluateAnswerAccuracy` 3-tier as today. Word-order errors
   grade `incorrect` and flow into TM-3 diagnosis. Wrong-word (distractor chosen) also
   `incorrect`, diagnosed as "wrong word, right idea" when Levenshtein-similar or when the
   distractor appears in the attempt.
5. **Purple-star interaction:** using the cue ladder or hitting the queue forfeits purple for
   the run — same as existing "almost/queue" logic. Cues are help, and help is honest.

**Tests** (`src/tests/exercises.test.ts` + new cases):

- Type union includes `transcribe`; first-exercise slot still excludes it (recognition first —
  guidebook §1.3: don't open at peak load).
- `word_bank` ⊇ all words of `target_answer` (existing syntax_builder invariant, kept) **and**
  `word_bank.length > target word count` (≥1 distractor) — a transcribe without distractors
  is a syntax_builder in disguise.
- `cues` non-empty, ≤ 3. Exactly 5 exercises per lesson unchanged; `transcribe` does **not**
  change that count.

#### Content spec (with samples)

Authoring rules:

- `idea` is natural English **with just enough context to pin every German form** (§1.4:
  "give similar contexts for the target language"). Bad: *"say you want a beer"* (ambiguous
  person/number). Good: *"you're telling me what you want: a beer, to drink"*.
- Only taught vocabulary (trail-order reuse density) + `vocab_hints` for function words.
- The `explanation` names the law, in the trail's voice (§5 below).
- **Phrasing variety** (§1.8 "cue for doing"): rotate the solicitation across lessons —
  "How would you say…?" / "Tell me: …" / "You want to say that…" / "Put into German: the
  thought that…" — never the same formula twice in a row on the trail.

Samples (all reuse-dense against current trail order):

```ts
// Topic 2 core (bracket) — swaps in at e5, replacing the syntax_builder
{
  id: "l2_e5t", type: "transcribe",
  idea: "you're telling me what you want to do tomorrow: learn German",
  cues: [
    "Who wants? → ich will (will = want, never the future)",
    "What? → Deutsch",
    "The bare infinitive closes the bracket: lernen goes last",
  ],
  word_bank: ["Ich", "will", "morgen", "Deutsch", "lernen", "lernst", "lerne"],
  target_answer: "Ich will morgen Deutsch lernen",
  meaning: "I want to learn German tomorrow",
  explanation: "Modal opens position 2, the bare infinitive closes the bracket — the Satzklammer you met in this topic.",
  vocab_hints: [],
}
```

```ts
// Topic 14 sprig 1402 (verb-final subclauses)
{
  id: "l1402_e4t", type: "transcribe",
  idea: "you know one thing: that she is coming tomorrow",
  cues: [
    "Main clause first: Ich weiß (verb in position 2)",
    "dass opens the basement",
    "In the basement the verb waits at the very end: … sie morgen kommt",
  ],
  word_bank: ["Ich", "weiß", "dass", "sie", "morgen", "kommt", "kommen"],
  target_answer: "Ich weiß, dass sie morgen kommt",
  meaning: "I know that she is coming tomorrow",
  explanation: "dass slams the conjugated verb to the end of the clause — Old English's own habit, German's law.",
  vocab_hints: [{ word: "sie", translation: "she" }],
}
```

#### Where it applies

- **Mandatory:** every **core lesson, topics 2–30** (29 lessons) — swap the existing e5
  `syntax_builder` (or e4 when e5 is load-bearing) into a `transcribe`.
- **Opportunistic:** sprigs that already carry a `syntax_builder` get the same swap as batches
  reach them (≈40 sprigs today have one).
- **Cue reduction across the trail** (the guidebook's "gradual reduction of cues", Swahili
  analysis): topics 2–7 allow 3 cues; topics 8–16 author 2; topics 17–30 author 1 — by the
  capstone the learner builds from the thought alone.

#### Acceptance criteria

- Every core lesson topic ≥ 2 contains ≥ 1 `transcribe` (add a trail-wide test:
  `lessons.filter(l => l.id >= 2 && l.id <= 30 && isCore(l.id)).every(hasTranscribe)`).
- Pilot batch (§6 Phase 2) green on the full validation baseline; `audit-teasers` 0 drift.
- Manual pass: cue ladder reveals; distractor insertion; purple star achievable without cues.

#### Risks

- **Reuse-density violations** in hand-written `idea`s — the checker that walks `word_ids`
  (precaution §5.5) must be extended to scan `transcribe.target_answer` + `word_bank` too.
- **Grading looseness:** full-sentence diff can pass a wrong-order sentence with 1 char
  distance? No — order changes move characters; verify with unit tests that
  `Ich will lernen Deutsch` ≠ `Ich will Deutsch lernen` at the `exact` tier and diagnoses at
  the `incorrect` tier.
- `lessons.ts` is single-writer, append-disciplined — respect §5.3/§5.4 of the precautions
  during bulk swaps.

---

### TM-2 — Direct translations: `literal_gloss` + "Denglisch ladders"

**Priority 2. Engine: one small new exercise type + content. Effort: M.**

#### Philosophy

The guidebook's most distinctive content tool (§1.4): teach structure by rendering the German
**word-for-word into English**, letting the wrongness do the teaching — *"in Turkish we'll say
'I an ice cream want'"*; for German: *"I want not to go"* (its own German-course analysis).
The learner never hears the middleman terminology ("negation precedes the infinitive"); the
odd English *is* the explanation, and it is memorable *because* it sounds wrong. Two limits
stated by the guidebook and adopted as law here:

1. **Be literal only in the taught dimension.** "I want not to go" is literal about *nicht*'s
   seat and otherwise natural. "I will not to go" would be noise.
2. **It's a lens, not a register.** The literal rendering appears to *explain*, never as a
   model to produce.

#### Exact spec

**Type:**

```ts
export interface LiteralGlossExercise extends ExerciseItem {
  type: "literal_gloss";
  german: string;          // the German sentence (taught vocab only)
  natural: string;         // its natural English — shown after answering
  options: string[];       // 3–4 English renderings; exactly one is the word-for-word one
  target_answer: string;   // the literal rendering; must ∈ options
  meaning: string;         // = natural (kept for schema uniformity)
  explanation: string;     // names the word-order law, trail voice
}
```

**Widget:** radio list (`shift_select`-style mechanics — reuse its keyboard/navigation),
prompt: *"Which English is built the German way?"* On answer: show `natural` beside the
literal one with the load-bearing word(s) highlighted (reuse `ShiftPair`-style accent chips on
the moved word: *not*, *German*, *him*).

**Tests:** `options` unique, 3–4, contains `target_answer`; exactly one option may be the
literal one (the others must be *natural* or *differently-wrong* — author them natural first,
wrong-structure second); `german` words all pass reuse density; first-slot rule excludes it.

#### Content spec (samples)

```ts
// Topic 12 (nicht & kein)
{
  id: "l12_e3g", type: "literal_gloss",
  german: "Ich will nicht gehen.",
  natural: "I don't want to go.",
  options: ["I don't want to go.", "I want not to go.", "Not I want to go."],
  target_answer: "I want not to go.",
  meaning: "I don't want to go.",
  explanation: "nicht negates what follows it and sits right before the bare infinitive — English merged want/will and moved its 'not'; German kept the ancient seat.",
}
```

```ts
// Topic 20 (dative)
{
  id: "l20_e3g", type: "literal_gloss",
  german: "Gib ihm das Buch.",
  natural: "Give him the book.",
  options: ["Give him the book.", "Give to him the book.", "Give the book to he."],
  target_answer: "Give to him the book.",
  meaning: "Give him the book.",
  explanation: "German keeps the 'to' audible inside the dative pronoun — ihm *is* 'to him'. English used to say 'give it me'; German never stopped.",
}
```

**Prose half — "Denglisch ladders":** the `pattern.content` of the seven word-order clusters
gains one short ladder, presented as a table of three lines: German / word-for-word English /
natural English. Never more than one ladder per lesson (P8). Voice: *"Read it the German way
first: 'I know that you German learn.' Odd in English, exact in German — and Old English
agreed with German."*

#### Where it applies

The **word-order clusters** (form, not vocabulary, is the point): topics **2** (bracket),
**12** (nicht), **13** (questions — verb-first: *"Knowest thou?"* is already half a literal
gloss; make it explicit), **14** (subclauses), **15** (separable prefixes — *"I open the
window on"*), **20** (dative — *"give it him"*), **27** (prepositions & case — *"with the
train"* / *"to Berlin"*-adjacent literalisms). One `literal_gloss` per core lesson there
(≈7 cores + matching sprigs where the same law is drilled, ≈6 more). Do **not** scatter it
elsewhere — outside word order it becomes a gimmick (P2 limit 2).

#### Acceptance criteria

- All 7 target cores contain ≥ 1 `literal_gloss` (trail-wide test mirrors TM-1's).
- Every `explanation` cites the cluster's taught law (spot-check in batch reports).
- `audit-teasers` unaffected (summaries untouched).

#### Risks

- Learners adopting literal renderings as output — mitigated by the widget always pairing
  literal with `natural`, and by never soliciting literal English as a *target* anywhere else.
- Option authoring quality: a "differently wrong" distractor that is accidentally grammatical
  and literal-adjacent creates ambiguity — batch report must list every `literal_gloss` for
  human skim.

---

### TM-3 — Smart feedback: process affirmations + slip diagnosis

**Priority 3. Engine: feedback layer + one new lib. Effort: M.**

#### Philosophy

Two guidebook moves, ported:

- **Affirmation (§1.7):** when the learner is *right*, the teacher re-states the *process* —
  "good, you removed the -ar ending … and pulled the accent back". That is repetition wearing
  praise; it lands because it's specific. Brücke currently says "Spot on!" and moves on —
  the single most repetitive moment in the app is also its most wasted.
- **Diagnosis (§1.9):** "any speaker … can tell the learner their sentence is wrong … the
  teacher should know what went wrong." The German analysis names the classic: `comgo*` for
  `como` because `tengo` is still being held. Brücke's letter diff shows *where* the attempt
  broke; a diff mapped onto the shift laws can say *why* — "you kept the English T; the law
  hisses it into SS" — which is preventative correction (§1.9) against exactly the
  over-simplifications the discrimination drills fight (§1.10).

#### Exact spec

**Per-exercise optional fields** (`ExerciseItem`):

```ts
affirmation?: string;               // shown on CORRECT; restates the process, ≤ 140 chars
diagnosis?: { slip: string; cue: string };  // authored override for the common wrong answer
```

**Auto-affirmation fallback:** when absent and `shift_hint` is present, render
`"{family name} again — you're starting to hear it everywhere."` (family display names from
the Atlas data). Authored affirmations on shift cores override the fallback.

**Diagnosis lib** — `src/lib/shift-diagnosis.ts`:

```ts
export interface Diagnosis { slip: string; cue: string; }
export function diagnoseAttempt(target: string, attempt: string, shiftHint?: string): Diagnosis | null;
```

- Input: the graded pair from `evaluateAnswerAccuracy` (substitution/insertion lists from the
  existing letter-diff) + optional authored `diagnosis` (authored wins).
- Mechanics: map each substitution through the shift-annotator's 15 rules; if the *attempt
  side* of a substitution equals the English letter and the *target side* equals the German
  law's output, fire that family's message. Vowel-only substitutions where the family is
  `strong_verbs_ablaut` fire the ablaut message. Otherwise `null` (generic error sheet, as
  today).
- **Message table lives in data, not code** (portability, §9):
  `src/data/shift-diagnosis-table.ts`:
  ```ts
  export const GERMAN_DIAGNOSIS: Record<string, { slip: string; cue: string }> = {
    "t_to_s_ss_z": { slip: "the English T survived", cue: "High German hisses T into SS/S/Z — Wasser, besser, zwei." },
    "th_to_d":     { slip: "the English TH survived", cue: "German abolished 'th' 1,300 years ago — harden it to D: denken, Dank, Bruder." },
    "d_to_t":      { slip: "the English D survived", cue: "Voiced D hardened to T in High German: Tag, Tür, trinken." },
    "p_to_pf_f":   { slip: "the English P survived", cue: "Word-initial P explodes to PF (Pfad); after vowels it breathes to F/FF (hoffen, Schiff)." },
    "k_to_ch":     { slip: "the English K survived", cue: "K melts into ch after vowels — machen, Buch, suchen." },
    "v_to_b":      { slip: "the English V survived", cue: "English v/f between vowels is German b: geben, leben, lieben." },
    "y_gh_to_g_ch":{ slip: "the ghost letter stayed silent", cue: "English gh/y carries the old sound German still pronounces: Nacht, sagen, acht." },
    "strong_verbs_ablaut": { slip: "the vowel melody was flattened", cue: "Strong verbs change the root vowel — sing/sang ↔ singen/sang." },
    "latin_ieren": { slip: "the -ieren stamp was dropped", cue: "Romance loan verbs end in -ieren and never take ge-." },
    // word-order slides (fired from transcribe order errors, keyed separately)
    "word_order":  { slip: "the elements are in English order", cue: "Find the verb's seat first — position 2, or the basement after dass/weil — then pour the rest around it." },
  };
  ```
  `diagnoseAttempt` renders `{ slip, cue }` into `ErrorFeedbackSheet` under a new
  **"What went wrong"** line: `*{slip} — {cue}*`. `ErrorFeedbackSheet` keeps the letter diff;
  diagnosis is the sentence above it.

**Authored diagnosis example** (the guidebook's *comgo** move, per-exercise):

```ts
diagnosis: {
  slip: "the modal's ending jumped onto the infinitive",
  cue: "Only the modal conjugates — ich will, and the bare trinken stays whole. When two verbs share a sentence, the bracket decides who bends.",
}
```

**Tests** (new `src/tests/shift-diagnosis.test.ts`):

- Table-driven: (`schlafen` vs `slafen`) → `p_to_pf_f`-family message mentions schl-;
  (`Wasser` vs `watter`) → t_to_s message; (`käme` vs `kam`-style ablaut flatten) → ablaut
  message; unrelated typos → `null`.
- Authored `diagnosis` overrides computed diagnosis.
- `affirmation` renders only on `exact`/`almost` success sheets; fallback fires only when
  `shift_hint` present; nothing crashes when both absent.

#### Where it applies

- `affirmation`: authored on the shift-family cores (topics 3, 4, 5, 6, 7, 17, 19, 25, 26);
  fallback covers everything else with a `shift_hint`.
- `diagnosis`: computed for `derive`, `reverse_cognate`, and `transcribe` automatically;
  authored overrides on the ~12 slips the trail can predict (modal ending jump, ge- on
  -ieren, nicht seat, adjective ending when article present, du -st dropout).
- `transcribe` word-order errors always fire the `word_order` diagnosis row.

#### Acceptance criteria

- Unit tests above green; manual pass on 3 authored + 3 computed diagnoses.
- No regression in existing feedback sheets (snapshot/manual).

#### Risks

- Wrong-family firing on coincidental letters (e.g. `d` inserted by a typo, not a shift):
  require the substitution to align with the *cognate pair* direction (attempt letter = English
  side) before firing; a single-char Levenshtein typo already grades `almost` and never
  reaches the diagnosis path — verify in tests.
- Copy volume: affirmations are short; author them per batch alongside exercises, never as a
  separate sweep (they belong to the lesson's voice).

---

### TM-4 — The posture system: primer, whisper-cues, queue mercy, star copy

**Priority 4 (human asked for a concrete way to do this). Effort: M. Engine: onboarding step,
settings key, cue renderer.**

#### Philosophy

The guidebook spends its entire §1.8 on posture: *from the beginning*, learners must know
they should **pause, think slowly, answer out loud, not memorize, let go, and trust the
course to bring things back** — and §2.3 adds the emotional half: many learners arrive with
"learning anxiety", and the cure is cueing that *it's a gym, not a test* ("the target
sentences are not tests"). None of this is teachable by an exercise — it must be said, once,
clearly, and then *whispered*. The same section warns the whisper must stay rare: cueing
done always "will more likely irritate our learner than empower them."

**Why this works without a live teacher (the human's open question):** the guidebook's
posture cues are *pacing and framing instructions*, not charisma. Pacing (pause/think/aloud)
and framing (not-a-test/let-go) survive translation into text *if* they are (a) taught once
in a dedicated moment, (b) re-whispered at deterministic, capped moments, and (c) never
attached to a grade. What we deliberately do **not** port: teacher energy/performance (§2.2)
— no simulated voice, no avatar, no "enthusiasm" copy. The app's honest equivalent of energy
is precision and warmth in micro-copy.

#### Exact spec

**4a. The Posture Primer** — a one-time, 4-card flow appended as the **final step of
`OnboardingModal`** (which is already re-openable via the TopNav walkthrough button — reuse
that plumbing; the primer is *not* a trail node, *not* a lesson, and does not touch
trail-map/gates):

1. **"Pause and say it."** — *Every exercise has a pause built in. Use it: think the answer
   through, say it out loud, then type. Thinking slowly here is what makes German fast later.*
2. **"This is a gym, not a test."** — *Wrong answers are reps. The queue at the end of a
   lesson isn't punishment; it's the second half of the workout. Nothing here is graded
   against you.*
3. **"Words are receipts. Thoughts are the goods."** — *Don't memorize German words — learn
   the laws that turn English thoughts into German. When you forget a word, the law will
   usually rebuild it.*
4. **"Let it go."** — *You will forget things. That's the design: Review brings them back at
   the right moment. Never rewind a lesson to chase a word — keep walking.*

Persist: `settings.posturePrimerSeen: boolean` (store addition, additive; see 4d).

**4b. Whisper-cues** — a single italic micro-line above the Practice segment header,
rendered **at most twice per lesson**, chosen deterministically (hash of `lessonId` — no
randomness churn between renders) from a per-exercise-type pool, gated by
`settings.showPostureCues` (default `true`; toggle in Settings → behavior):

```ts
// src/data/posture-cues.ts
export const POSTURE_CUES: Record<"derive" | "transcribe" | "matching_pairs" | "syntax_builder" | "literal_gloss" | "default", string[]> = {
  transcribe: [
    "Build the thought first: who, what, when — then let German order them.",
    "Say it out loud before you type. Your mouth is a second editor.",
  ],
  derive: ["Hear the shift before you spell it — p? t? th? Let the English word tell you."],
  matching_pairs: ["Don't memorize pairs — read each German word through its shift."],
  syntax_builder: ["Find the verb's seat first. Everything else pours around it."],
  literal_gloss: ["The odd English is the lesson. Ask why it's odd."],
  default: ["Slow is smooth. Think it through, then answer."],
};
```

Cap logic: pick 2 deterministic indices per lesson; render before e1 and before e4. If
`settings.showPostureCues` is off → never render. **No cue ever appears twice in one lesson.**

**4c. Queue mercy ("Walk me through it")** — in the reinforcement queue, after the **second
failed attempt** on one item, a secondary button appears: **"Walk me through it."** Tapping
shows the exercise's `explanation` + `target_answer` as a guided reveal (labelled
*"Re-learned — this one comes back in Review"*), drains the item, and proceeds. Rationale
(§1.3): a frustration loop is the app's version of panic mode — "the learner tightly holds on
to the information they deem key … in detriment to all other thought processes". The guide
also promises "we will revisit everything they are uncertain of" — Review keeps that promise;
the queue shouldn't become a wall. Banner copy atop the queue (static, one line):
*"These come back in Review either way — you can't lose them."*

**4d. Store & settings additions** (additive only; `store.ts` otherwise frozen):

- `settings.posturePrimerSeen: boolean` (default `false`; set true after primer completion
  *or* dismissal).
- `settings.showPostureCues: boolean` (default `true`), Settings → behavior row.
- `importBackupState` allow-list + backup export include both keys.
  **Cookie-cap note:** payload grows slightly; the existing 2048-byte guard already degrades
  to `{theme, font}` — no change needed, but `store-security.test.ts` must assert the new
  keys round-trip and the cap fallback still holds.

**4e. Purple-star copy** (surgical copy edits only): wherever stars are explained
(OnboardingModal, GateDrawer, summary sheet), one clause added: *"Purple means you built
every answer by thinking it through, first try."* Summary outro line after a gold run:
*"Not a test — a rep."* (§1.8: target sentences "are not tests"; this makes the star a
posture reward, not a perfection badge.)

#### Where it applies

Global (primer, whisper-cues, queue mercy, star copy). No trail changes.

#### Acceptance criteria

- Primer renders once; walkthrough button re-opens it; dismissal persists across reload.
- Whisper-cues: ≤ 2 per lesson, deterministic (same lesson → same cues), toggle off = none.
- Queue mercy appears only after 2 misses on the same item; drains item; purple-star logic
  unchanged (mercy already implies queue was touched → gold, as today).
- Backup export/import round-trips both settings keys; store-security tests updated.

#### Risks

- `OnboardingModal` is dynamically imported and shared — keep the primer step self-contained;
  no other steps' copy may change.
- Whisper-cues must never render inside the queue or summary (practice segment only).

---

### TM-5 — The Twist card & the offshoot chip: contours inside a session

**Priority 4. Effort: M (engine) + L (content, phased).**

#### Philosophy

§1.3: load should have **contours** — and two specific instruments matter here:

- **Artificial friction** ("making or leaving something a little more challenging than we
  could otherwise have made it"): the French analysis engineers a tiny stumble on purpose —
  soliciting `tu le veux` right after `je le veux`, *because "it makes only a slight
  difference, but that can mean the difference between automatism and more conscious
  thought."* The German analysis even engineers a *desirable mistake* (`/fainden/`) to
  teach -EN. Brücke's fixed 5-exercise escalation never breaks automatism mid-lesson: by e3
  a Cognate-flasher is on autopilot.
- **The trough / offshoot:** "techniques used to lower or reset cognitive load include … an
  interesting and relevant offshoot about language." Brücke *authored* hundreds of these —
  as footnotes nobody is routed to at load peaks.

And the guidebook's self-correction move (§1.9): *"ask for the sentence again — not from
memory, but thinking it through again."*

#### Exact spec

**5a. The Twist card** — new optional `Lesson` field:

```ts
twist?: {
  prompt: string;        // the friction: same material, one deliberate twist
  target_answer: string; // German, no trailing punctuation
  word_bank?: string[];  // optional chips, as transcribe
  explanation: string;   // names exactly what the twist exercised
};
```

**Placement & flow:** rendered in the Practice segment **after e5, before the reinforcement
queue**, as a distinct card ("⚡ Twist") with its own step-dot. **Ungraded and skippable:**

- The learner thinks (the card says: *"Not from memory — think it through again"*), answers
  (typed or tiles), then taps **Reveal**.
- Self-grade: **"Got it"** → card completes. **"Not yet"** → `explanation` + `target_answer`
  shown immediately; card completes with a "Meet it again" chip that re-surfaces the same
  twist at the end of the *session* (in-memory only — no store change, no SRS write).
- **Skippable** ("Skip — I'll meet it in review") without penalty. The twist never touches
  `everQueued`, the lesson queue, star logic, or completion gating. It is friction, not a
  fence (§1.3: friction shapes the experience; it must not punish).

**Authoring rules:**

- Max **one** per lesson; mandatory on cores 2–30, opportunistic on sprigs.
- Only trail-order-legal vocabulary (previous lessons included).
- The twist patterns (rotate; name the pattern in `explanation`):
  1. **Person swap** — same sentence, different subject (`Ich hoffe, du kommst.` →
     `Sie hofft, du kommst.` — and *hofft* bites, on purpose: §1.3's "desirable mistake").
  2. **Affirmative → interrogative** — `Du kommst morgen.` → `Kommst du morgen?` (verb flip).
  3. **Object swap** — `Ich trinke einen Kaffee.` → `Ich trinke den Tee.` (case stays masculine:
     *den* — the Him-Case again).
  4. **Negate it** — `Ich kann morgen kommen.` → `Ich kann morgen nicht kommen.`
  5. **Front something** — `Ich lerne morgen Deutsch.` → `Morgen lerne ich Deutsch.`
  6. **Basement check** — turn a main clause into a `dass`-clause.
- Prompt phrasing varies (§1.8): "Same thought, but…" / "Now ask it:" / "Twist: *she* says it."

Sample:

```ts
twist: {
  prompt: "Same thought, but she says it: you hope she comes. (Careful — hope changes its stem for she.)",
  target_answer: "Sie hofft, du kommst",
  word_bank: ["Sie", "hofft", "hofft", "hoffe", "du", "kommst"],
  explanation: "The bracket survives the person swap — but hoffen → hofft, the s-drop you met in topic 9. Friction on purpose: this exact slip is common and harmless.",
}
```

**5b. The offshoot chip** — new optional flag on footnotes:

```ts
footnote: { marker, title, content, interest?: boolean }
```

- `interest: true` renders the footnote with a *"for interest — not on the test"* chip
  (§1.8: cue the *type* of information; non-key information must be cued as such, or learners
  can never relax).
- Phase-2 polish (optional, engine-light): the Practice segment may surface the lesson's
  `interest` footnote once, after e2, as a dismissible **"30-second detour"** interstitial —
  the guidebook's load-reset trough, placed at the lesson's natural mid-point. If built: also
  skippable, ungraded, max one per lesson.

#### Where it applies

- Twists: cores 2–30 mandatory (29 authored), sprigs opportunistic.
- `interest: true`: authored wherever a footnote is a genuine tangent (the writing team marks
  them during the §6 content sweep — expect 30–50% of existing footnotes qualify).

#### Acceptance criteria

- Twist: renders only when authored; `exercises.test.ts` asserts ≤ 1 per lesson and that it
  does **not** count toward the 5; skip path completes the lesson without queue/star changes;
  "Not yet" re-surface works within the session and dies with it.
- Offshoot chip renders; interstitial (if built) appears at most once per lesson and never in
  the queue/summary.

#### Risks

- **Flow complexity** in `LessonReader`/queue step-dots — the twist inserts one dot; keep it
  outside the queue component entirely.
- Temptation to make twists graded "for accountability" — **do not** (P4/P8; §1.8: target
  sentences are not tests; a graded surprise friction spike violates §1.3's panic-mode warn).

---

## 5. Content authoring guide (voice & law compliance)

Applies to all new authored material. The trail's existing voice is the standard
(`AGENT_PRECAUTIONS.md` §4 + the content-agent prompt's voice guide). Thinking-Method
additions:

1. **One thought at a time.** A `transcribe` idea pins person, tense, and object *in the
   idea itself* — never in a rule the learner must recall from three topics ago without a cue.
2. **Justify, don't decree.** Every literal gloss, twist, and diagnosis explanation names the
   *law taught on the trail* ("the verb waits in the basement"), never school grammar
   ("subordinate clause verb-final rule").
3. **Variation is masking.** Never repeat an instruction formula verbatim on adjacent
   lessons (§1.7: change the wording, keep the action; §1.8: loose instructions make the
   *action* the takeaway).
4. **Only true connections.** No invented etymology, no false cognate jokes, no mnemonics
   (P7). Every affirmation/diagnosis string must survive the same fact-check as a §2
   derivation.
5. **Reuse density always.** `transcribe.target_answer`, `twist.target_answer`,
   `literal_gloss.german` all scan against trail-order vocabulary + `vocab_hints`. Extend the
   §5.5 word-reference audit script accordingly.
6. **Adult, short, natural German.** Ordering beer remains fine; nursery rhyme remains not.
7. **No trailing punctuation** in any `target_answer` (existing enforced rule — the syntax
   builder anti-spoiler logic depends on it).

---

## 6. Rollout plan

Batch discipline everywhere: **max 5 lessons per content batch**, full validation baseline
after every batch, `bun run build` + both audits at phase boundaries, honest batch report
(precaution §6). Engine phases are single batches (no content in them).

| Phase | Contents | Size | Gates to exit |
|---|---|---|---|
| **0. Engine** | types (`transcribe`, `literal_gloss`, `twist`, `affirmation`, `diagnosis`, `interest`), widgets (`TranscribeExercise`, `LiteralGloss`, twist card, whisper-cue line), `shift-diagnosis.ts` + table, posture primer + settings keys, all test updates | 1 batch | full baseline green; new tests green; manual smoke on a scratch lesson |
| **1. Posture** | primer copy final pass, whisper-cue pools, queue mercy, star copy edits, settings row | 1 batch | store-security + keyboard tests green; manual pass of all 4 postures |
| **2. Pilot content** | Topics **2, 3, 4** cores + their sprigs: `transcribe` swaps, first `twist`s, affirmations; topic 12: first `literal_gloss` ladder | 2 batches (≤5 lessons each) | baseline + audits; human skim of every new exercise (batch report lists them) |
| **3. Word-order sweep** | `literal_gloss` + Denglisch ladders in topics 13, 14, 15, 20, 27 (cores + drilled sprigs) | 2 batches | baseline + audits |
| **4. Trail sweep** | remaining cores 5–30 (in trail order): `transcribe` swap + twist + affirmations; sprigs as batches allow; `interest` flags on footnotes; authored `diagnosis` overrides on the ~12 predicted slips | ~6 batches | baseline + audits per batch |
| **5. Close-out** | re-run `audit-teasers` + `export-trail`; extend & run the word-reference audit script; update `AGENT_PRECAUTIONS.md` with the new invariants (twist-not-counted, transcribe bank rule, literal_gloss constraints); final full build | 1 batch | everything green; report lists every `[UNVERIFIED]`, every dropped candidate, every lesson edited with ids |

**Ordering rationale:** engine before content (content can't land without schemas);
word-order clusters before the long sweep (TM-2 is the highest value-per-effort and validates
the literal-gloss voice early); cores before sprigs (cores carry the trail).

---

## 7. Guardrails — what NOT to do

Each of these is a guidebook warning, not a taste preference:

1. **Don't clone the audio-course format.** No dialogues-as-lessons, no transcript styling,
   no "pause now" hard-stops in flow. (§0.1, Part 3 intro: the format isn't the method.)
2. **No artificial mnemonics, ever.** (§1.8 Miscueing; also Brücke's brand.)
3. **Don't front-load rules before examples.** Cue ladders exist so the *example* teaches
   first; instructions stay loose and varied. (§1.8 "Cueing for doing".)
4. **Don't over-cue.** Hard caps: 2 whisper-cues/lesson, 1 twist/lesson, 1 offshoot/lesson,
   1 literal gloss per lesson, cue ladders ≤ 3 steps. (Swahili analysis: over-cueing
   irritates rather than empowers.)
5. **Don't literalize everything.** Direct translations only where word order/form is the
   taught dimension, and only literal *in that dimension*. (§1.4.)
6. **Don't grade friction.** Twists and offshoots never gate, never star-affect. (§1.3:
   panic-mode warning; §1.8: not a test.)
7. **Don't break the 5-exercise contract** or add rote-repetition modes. The queue, Review,
   and masking already handle repetition. (§1.7.)
8. **Don't touch:** `trail-map.ts`, `TRAIL_GATES`, theme data, lesson ids/titles, the parse
   section headers, and (beyond the additive keys in TM-4) `store.ts`. (Precautions §3, §4.5.)
9. **Don't skip the baseline.** Every batch. Sequential. `node_modules` check first.
   (Precautions §0, §5.)

---

## 8. Test & validation matrix (delta)

| Area | Change |
|---|---|
| `src/tests/exercises.test.ts` | type union + `transcribe` rules (bank superset, ≥1 distractor, cues 1–3, not-first-slot) + `literal_gloss` rules (unique options, target ∈ options, 3–4 options) + twist (≤1/lesson, not counted in 5) |
| `src/tests/shift-diagnosis.test.ts` | **new** — table-driven diagnosis cases; authored-override precedence; null on unrelated typos |
| `src/tests/trail-map.test.ts` | **add** (do not modify existing): every core ≥2 has ≥1 `transcribe`; the 7 word-order cores have ≥1 `literal_gloss`; lesson count assertions updated for any *new* lessons only (this plan adds none — no shell changes) |
| `src/tests/store-security.test.ts` | `posturePrimerSeen` / `showPostureCues` round-trip; 2048-byte fallback intact |
| word-reference audit (precaution §5.5) | extend to scan `transcribe` (answer + bank), `twist`, `literal_gloss.german` |
| `scripts/audit-teasers.ts` / `export-trail.ts` | unchanged logic; re-run after every content batch (summaries may gain outro copy — teasers untouched unless auditor flags) |

---

## 9. Multi-language portability notes (German-first, written portable)

- **Schemas are language-agnostic.** `transcribe`, `literal_gloss`, `twist`,
  `affirmation`, `diagnosis` carry no German assumptions; the German-ness lives in content
  and in two data tables.
- **`shift-diagnosis-table.ts` is keyed by shift-family id** — a Spanish instance defines its
  own rows (e.g. conversion rules for its own cognate layer) in
  `src/data/language-content.ts`; `diagnoseAttempt` takes the active language's table.
- **`posture-cues.ts`** moves under the language-content structure when the multi-language
  split lands; the `transcribe`/`literal_gloss`/`twist` mechanics need zero changes.
- **`literal_gloss` is the most portable idea in this plan** (word-order universals); when
  Spanish content lands, its ser/estar and pronoun-clause placements are natural first
  ladders — *noted here so nobody redesigns the type then.*
- Do **not** pre-abstrate further now (per the human's German-first decision): no language
  params in the new widgets yet; thread the active-language table when the split ships.

---

## 10. Decisions log & open questions

**Decided (human, 2026-10-01):** full stack scope; surgical lesson edits (§0.3); priorities
1–4 as ordered in §0.4; German-first portable (§9).

**Decided here (implementer may challenge in a batch report, not unilaterally):**

- Primer is onboarding flow, not a trail node (keeps the trail curricular; OR-join rules untouched).
- Twist is ungraded & skippable (P4/P8) — grading it would contradict the guidebook twice.
- `transcribe` and `literal_gloss` are new types rather than `syntax_builder` variants —
  cleaner tests, honest analytics, and `syntax_builder` remains correct for early topics 1
  where assembly *is* the right load.
- Purple star semantics unchanged; only copy reframed.

**Open (answer during Phase 2 human review):**

- Whether the offshoot *interstitial* (TM-5b phase-2 polish) is wanted at all, or the chip suffices.
- Whether whisper-cues should also fire in Review sessions (current answer: no — Review has its own rhythm; revisit after Phase 3 data).
- Exact count of authored `diagnosis` overrides (target: 10–15; finalize during the Phase 4 sweep).

---

*End of plan. Implement in phases, batch by batch, and report like the precautions file
teaches: what was added and why, what was verified, what was flagged, and what was
deliberately left alone.*
