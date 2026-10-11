# Finishing the Thinking Method upgrade — the loose ends

> **Status:** idea, not implemented.
> **Source:** `docs/THINKING_METHOD_UPGRADE.md` (§4 TM-2 "Where it applies", §6 rollout
> Phase 4), measured against the corpus on 2026-10-10.

## Why these are still open

The upgrade plan's own acceptance criteria were target counts. Three of them landed
under target, because the content sweep that was supposed to finish them was interrupted:

| Item | Plan target | Shipped | Gap |
|---|---|---|---|
| `literal_gloss` (TM-2) | ~13 lessons (7 word-order cores + ~6 drilled sprigs) | 9 | **4 sprigs** |
| `affirmation` (TM-3) | authored on the 9 shift-family cores + fallback elsewhere | 14 total | ~4 of the 9 cores |
| `interest` footnotes (TM-5b) | 30–50% of footnotes | **71 / 188 (37.8%)** | **closed** |

The `interest` row is now closed: 71 footnotes are flagged `interest: true`, which is
37.8% of the trail's 188 footnotes and gives **70 of 169 lessons (41.4%)** a detour
trough. The remaining two rows are content sweeps, not schema work.

## 1. `literal_gloss` — four more lessons

The plan restricted TM-2 to the seven word-order clusters **on purpose** (TM-2 limit 2:
"outside word order it becomes a gimmick"). All seven cores are now covered — topics 15
(separable prefixes) and 20 (dative) were the two missing ones, and both shipped:

- **Topic 15** — `Ich mache das Fenster auf` → "I open the window **on**". The particle
  landing last is the literal gloss *and* the lesson.
- **Topic 20** — `Gib ihm das Buch` → "Give **to him** the book." English used to say
  this ("give it me"); German never stopped.

What remains is the four sprigs that *drill* those same laws, which is the smaller,
lower-value half of the target. The two cores do the teaching; the sprigs would only
repeat it.

## 2. `affirmation` — the shift cores

TM-3's fallback (`"{family} again — you're starting to hear it everywhere."`) exists for
every exercise carrying a `shift_hint`, so this is a *voice* gap rather than a
mechanical one. The plan wanted authored, process-naming affirmations on the cores
whose whole job is the shift: topics 3, 4, 5, 6, 7, 17, 19, 25, 26.

An authored affirmation names the movement the learner just made — "you kept the German
S where English kept the T; that hiss is the shift working" — where the fallback only
names the family. §7.5 of the precautions file is explicit about how to do it: author
them *alongside* the exercises, never as a sweep.

## 3. `interest` footnotes — the offshoot trough

TM-5b asked for `interest: true` on every footnote that is "a genuine tangent", expecting
30–50% of them. Five shipped. This matters more than it looks, because **this change set
built the detour interstitial that consumes them** — the load-reset trough at the
lesson's mid-point only fires on a lesson with an `interest` footnote. With five flagged,
almost no lesson ever gets a trough.

**Done.** 71 of 188 footnotes (37.8%) now carry `interest: true`, giving 70 of 169
lessons (41.4%) a detour trough — the ungraded, skippable 30-second interstitial the
engine renders at a lesson's mid-point.

The rule applied was §1.8's, verbatim: a footnote is flagged only when the honest answer
to "is this key information, supporting information, or information for interest?" is the
third kind. Stories about the world — where a word came from, what Germans actually do,
the odd history — are flagged. Grammar laws, the app's own pedagogy and the trail's
rules are **not**, because telling a learner a law is skippable is a lie that the trough
would then repeat on every lesson. `src/tests/tm6-ideas.test.ts` enforces both halves:
the 30–50% band, and that named law-bearing footnotes stay unflagged.

## Effort and order

| Item | Effort | Risk |
|---|---|---|
| `interest` flags | **done** | none |
| 2 `literal_gloss` cores | **done** | low |
| ~4 shift-core affirmations | low | none |
| 2 sprig `literal_gloss` | low | low |

All four are content-only. No schema, no engine, no store changes. Run them in two
batches of five, with the full validation baseline after each, per the plan's §6
discipline.
