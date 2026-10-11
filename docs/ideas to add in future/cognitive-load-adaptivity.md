# Cognitive-load adaptivity — the tension contour engine

> **Status:** idea, fully specified, not implemented.
> **Source:** guidebook §1.3, "We Manage Cognitive Load and Tension Contours."

## What the guidebook asks for

§1.3 says load should be a **contour** — "peaks and troughs of intensity that we can
and should play with" — not "a gradually rising gradient". Three instruments are named:

1. **Artificial friction** — "making or leaving something a little more challenging
   than we could otherwise have made it". The French analysis engineers a stumble on
   purpose, soliciting `tu le veux` right after `je le veux` "because it makes only a
   slight difference, but that can mean the difference between automatism and more
   conscious thought."
2. **The trough** — "techniques used to lower or reset cognitive load include …
   an interesting and relevant offshoot about language."
3. **Never panic mode, never boredom** — too high and the learner "tightly holds on to
   the information they deem key … in detriment to all other thought processes"; too low
   and "they find themselves abandoning class to think about something else entirely:
   they are bored."

The guidebook delivers this with a live teacher reading a room. Brücke's lessons have a
**fixed** load shape: `e1…e5` escalate once, identically, for every learner, every time.
There is no peak that arrives because of anything the learner did, and no trough that
arrives because of anything the learner did.

**An app can do what the medium cannot:** it can measure the learner's load in real
time and shape the contour around what it observes. That is what this document
specifies.

## The signal

Load is not directly observable. These are — all already in the app, none of them new
state:

| Signal | Where it lives | What it means |
|---|---|---|
| consecutive first-try successes | `LessonReader`'s local run | **under-load** — automatism is setting in |
| cue-ladder reveals used | `TranscribeExercise` `cuesRevealed` | **over-load** — the learner needed a step |
| retry-queue depth | `retryQueue` | **over-load** — a process did not land |
| time-to-first-keystroke | new, measured | both — too fast = autopilot, too slow = stuck |
| "I guessed" flags | new in this change set (`flagGuessed`) | **uncertain** — right answer, no confidence |

> Note: the first three are already computed; only the last two need wiring, and one of
> them ships with this change set. Nothing here requires new persisted state.

## The engine

A pure function, no React, no store — so it is trivially testable:

```ts
// src/lib/load-contour.ts
export interface LoadSignal {
  /** consecutive production exercises answered correctly with no cue, no queue */
  cleanStreak: number;
  /** exercises queued this lesson */
  queued: number;
  /** cue rungs revealed this lesson */
  cuesUsed: number;
  /** ms between card shown and first input */
  medianLatencyMs: number;
  /** "I guessed" flags this lesson */
  guesses: number;
}

export type ContourMove =
  | { kind: "none" }
  /** deliberately harder — artificial friction */
  | { kind: "friction"; extraDistractors: number; dropCues: number; swapExercise?: string }
  /** deliberately easier — the trough */
  | { kind: "trough"; reciteOnly: true } | { kind: "trough"; detour: true };

export function nextContourMove(s: LoadSignal): ContourMove;
```

### The rules

**Over-load (panic mode) — recover before continuing.**
If `queued >= 2` or `cuesUsed >= 3` in one lesson, the next production exercise is
replaced by the trough: a recognition-only exercise (matching/shift-select) drawn from
the same topic, *ungraded for the star*. The guidebook's logic is explicit — after a
panic moment you "get to digest what we bit off".

**Under-load (automatism) — add friction on purpose.**
If `cleanStreak >= 3` on production exercises, the next one gets friction:
`extraDistractors: 2` and `dropCues: 1` (fewer cues available, not shorter cues). The
French analysis's `tu le veux` move is exactly this — same material, one deliberate
step harder.

**Stuck-but-correct.**
If `guesses >= 2` inside one lesson, fire the trough once regardless of streak. A
learner who is right but guessing has an uninstalled process, and the fix is not more
pressure.

**Boredom guard.**
If `medianLatencyMs < 900` on a production exercise, treat it as under-load even if the
answer was wrong — the learner is pattern-matching, not thinking. Apply friction to the
*next* item, never re-grade the current one.

**Everything else is `none`.** The default must be the fixed scaffolded shape; the
engine only ever *intervenes*, and it must be able to do nothing at all.

## Where it hooks in

`LessonReader` already tracks the signals; the engine plugs into two existing seams
with no structural change:

1. **Before rendering the next exercise** — choose the `ContourMove`, and if it is
   `friction`, hand the exercise a `variant` (reuse `retryVariant`'s deterministic
   shuffling, plus authored `variants` where they exist).
2. **Where the twist/detour already renders** — the trough reuses the *exact same*
   ungraded, skippable, non-gating machinery TM-5a already built. No new gate, no new
   star logic.

## Guard rails (from the guidebook, non-negotiable)

- **Friction never grades.** §1.8: "the target sentences are not tests." A harder item
  is still scored the same way; only its surface changed.
- **Friction is capped.** At most one friction move per lesson, and `dropCues` never
  removes the *last* rung. A cue ladder with no rungs is not harder, it is unkind.
- **Troughs never gate.** Same rule as the twist and the detour.
- **The contour is a shape, not a punishment.** If the learner is struggling, the
  engine's job is to make the next thing *easier*, not to repeat the hard thing.

## Why this is the highest-value item on the list

Every other item in this folder adds content or adds a surface. This one makes the
existing content behave differently for different people, which is the difference
between a course and a course *taught*. The guidebook calls the live version of this
"the most important thing" about teaching; this is the first medium where it can be
scheduled rather than performed.

## Effort

- `load-contour.ts` + tests: **small** (pure function, ~40 rules cases).
- Signal wiring in `LessonReader`: **small-medium** (latency measurement is the fiddly
  part — measure first-keystroke, not first render).
- Authored `variants` on the ~12 highest-value exercises: **medium**.
- No new store keys, no new routes, no changes to gates, stars or `trail-map.ts`.

## Open questions

- Does the engine see across lessons (a learner who is struggling for three lessons
  running) or only within one? Recommend **within one lesson** for v1 — cross-lesson
  adaptation risks reordering the trail, which `AGENT_PRECAUTIONS` §3.1 forbids.
- Should the trough be visible as such? Recommend **no** — the guidebook frames the
  offshoot as content, and announcing "we are lowering the load now" defeats it.
