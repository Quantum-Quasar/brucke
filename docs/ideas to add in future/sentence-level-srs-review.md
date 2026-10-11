# Sentence-level spaced repetition in the Review Hub

> **Status:** idea, not implemented.
> **Source:** guidebook §1.7 (masked repetition), §4.2 ("we want to build sentences, and
> quickly"), and the observation that Brücke's SRS is word-level only.

## The gap

`SRSCard` is keyed by `word_id`. Every deck, every review style, every mastery signal
is a single German word against a single English meaning. That is coherent with the
Atlas's thesis — the app teaches decoding, and decoding a word is the unit.

But the Thinking Method's unit is the **sentence**. The guidebook is explicit that a
course builds "sentences, and quickly", and that repetition of *processes* — not of
items — is what installs fluency. A learner can have every card at `interval: 21`
and still be unable to order two clauses, because the thing that decays is the
sentence-building law, and nothing currently schedules it.

The trail already produces exactly the right material: 38 `transcribe` exercises,
9 `literal_gloss`, 30 `twist` cards, plus every `syntax_builder`. All of them grade a
whole thought. None of them are ever scheduled again.

## What to build

### 1. A sentence card type (additive)

```ts
// src/lib/types.ts
export interface SentenceCard {
  /** stable id: `${lessonId}:${exerciseId}` */
  id: string;
  /** the lesson that first asked for it */
  lesson_id: number;
  /** the exercise to replay — unchanged, so no new authoring */
  exercise: ExerciseItem;
  /** SM-2 fields, identical to SRSCard */
  interval: number;
  repetitions: number;
  ease_factor: number;
  due_date: string;
  lapses: number;
  last_reviewed: string | null;
}
```

Store as `sentenceCards: Record<string, SentenceCard>` beside `srsCards`. **Additive
only** — `store.ts` stays otherwise untouched, and the existing word decks must not
change behaviour.

### 2. When a card is created

One card per *exercise* (not per attempt), created the first time the learner
completes that exercise **incorrectly** — i.e. exactly the moment a process is not yet
installed. A first-try-correct production exercise needs no scheduling; a queued one
does. This keeps the sentence deck small and honest.

### 3. A fifth deck

`sentences` — "Sentences you're still building". Sorted by `due_date`, capped at 15
per session. It should appear in the deck list only when non-empty, so a new learner is
never shown an empty hub.

### 4. Replay, not re-grade

Replay the exercise through the **existing** `ExerciseWidget` — no new widgets. Two
consequences that matter:

- A `transcribe` replays with a **cleared cue ladder**. That is the whole point: the
  learner must rebuild the thought from nothing.
- The exercise's `idea_parts` come back collapsed. They are a teaching aid for the
  first meeting, not a walking stick.

### 5. The fifth review style — "Same thought, but *she* says it"

This is the important part, and it is pure guidebook §1.7. `src/lib/retry-variation.ts`
already exists (it rotates a retry's surface deterministically). Extend it with the
twist patterns the guidebook names:

- **person swap** — `Ich hoffe, du kommst.` → `Sie hofft, du kommst.`
- **tense swap** — present → Perfekt, where the lesson has taught both
- **object swap** — `den Kaffee` → `den Tee` (case stays masculine: the Him-Case again)
- **negate it** — add `nicht`
- **front something** — move a constituent to position 1 and let the verb follow
- **basement check** — main clause → `dass`-clause

Each variant is generated from the *stored* exercise at replay time, so no extra
authoring. The generated sentence must be checked against `audit-word-refs.ts`'s
resolver at runtime — if any token does not resolve, fall back to replaying the
original rather than shipping a broken sentence.

**Grading is deliberately lenient on the variant:** the swing is the exercise, so a
wrong inflection on the swapped word should still fire the shift-diagnosis path
("the modal's ending jumped onto the infinitive") rather than a generic error sheet.

## Why this and not "more word decks"

The guidebook's warning applies directly: "The more we overtly repeat, the more our
learners' minds will begin to abandon conscious thought processes in preference for
more intuitive ones." Word decks train recognition. Sentence cards with a varied
surface train *production under variation*, which is the only thing that survives
contact with the real language.

## Effort

- Schema + store: small (additive).
- Deck + ordering: small.
- The variant generator: **medium** — this is the real work. It needs a per-exercise
  "swingable" declaration, most naturally an optional authored `variants` array on
  `ExerciseItem`, falling back to the five patterns above where the grammar allows.
- Tests: reuse `srs-timezone.test.ts` patterns for due-date handling; add a case for
  every swing pattern with a golden German sentence.

## Open questions

- Should sentence cards count toward the star/met mastery counters? **No** — keep them
  out of the trail economy entirely (§1.8: target sentences are not tests).
- Cap the deck at 15 per session, or drain it fully? Start at 15; a full drain of a
  backlog turns the hub into a wall.
