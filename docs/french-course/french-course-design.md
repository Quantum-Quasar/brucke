# Le Pont — the French course design

> The French sibling of Brücke (German: *die Brücke*). Same app, same method, same bridge —
> crossed from the Norman side. This document is the Thinking Method blueprint for the French
> course: what it teaches, in what order, and why. Every lesson in `src/data/french/lessons-fr.ts`
> must be justifiable against this document and against the guidebook's ten principles
> (`thinking-method.md` §1.1–§1.10).

## 0. What the method demands (non-negotiables)

1. **We import knowledge.** The learner already owns ~30% of English vocabulary in French form.
   The course never "teaches vocabulary" it can *convert*. The bridge: after 1066, English absorbed
   10,000+ Norman French words, and later borrowed directly from Latin *through French* — so the
   formal register of English is a French warehouse (ask→enquire, want→desire, freedom→liberty).
2. **We reframe.** French's traditionally scary parts are reframed as sense, not memory:
   - **Gender is not memorized** — it is *decoded from the word's ending*. The `-ion/-té/-ette/-ance`
     squad is feminine; the `-age/-eau/-isme/-ment` squad is masculine. The learner asks "what does
     the word end in?", never "what gender is it?" (mirrors German `-ung/-chen/-er` heuristics).
   - **Pronouns are articles on the move.** `le/la` are introduced as "the word for *it*" from the
     first lesson (guidebook §3.1: *« it is the word for 'the' »*). Direct object pronouns later
     formalize this as "the pronoun walks one step left" — never a new paradigm.
   - **The negation sandwich.** `ne ... pas` wraps the verb like the German Satzklammer wraps the
     bracket: one idea, two halves, the verb in the middle. Not "two-part negation rule #7".
   - **`il y a` is literally "it has there"** — imported, not translated.
   - **`quatre-vingts` is "four twenties"** — the same count as Lincoln's "four score and seven"
     (`quatre-vingt-sept` = 87). English did this; French kept doing it.
   - **The `-é` past is the `-ed` past.** `mangé/manged`, `décidé/decided`, `marié/married` —
     English *is* the French participle wearing English clothes.
3. **We weave.** Threads are planted lessons before they pay off: the nasal N ("we think the N,
   we don't say it") is a *description* in lesson 1 and only becomes a *rule* much later; `le/la`
   as "it" in topic 1 is the whole pronoun system in embryo; the `-ation` noun engine in topic 3
   is what makes 1000 infinitives free, which the near future (topic 12) and the past (topic 17)
   then harvest.
4. **One thought at a time.** No lesson asks for a structure whose parts haven't each had their
   own moment. E.g. before `je ne veux pas`, the learner owns `je veux` and `pas` = "step" has been
   met; before `je vais visiter`, `visiter` was free from topic 3 and `je vais` is the only new bit.
5. **We mask repetition.** Drills rotate surfaces, change subjects, flip statement↔question.
   No neighbouring lesson shares prose (`scripts/audit-wording.ts` enforces this for German; the
   French test suite enforces it for French).
6. **We cue, we correct correctly, we raise consciousness.** Trap notes name the over-simplification
   *before* the learner reaches for it (e.g. "you will be tempted to say *célébrater* — the noun
   loses its whole `-ation` before `-er`"). Every batch carries one learning-consciousness line on
   roughly one lesson in seven.

## 1. The bridge, precisely

The French bridge has two spans, both historically real and both *productive rules*, not lists:

- **Span 1 — Norman doublets.** English kept the Germanic form; French evolved the Latin one.
  `warden/gardien` (w→gu), `estate/état` (Latin s dropped before t), `castle/château`,
  `cattle/chattel`, `warranty/garantie`. Where no doublet exists, the Latin-*looking* register of
  English still converts: `-tion`, `-ité`, `-ance`, `-eur`, `-able`, `-ment`.
- **Span 2 — the conversion engine.** English adjectives/nouns of Latin dress convert wholesale:
  `-ion` nouns (feminine!), `-ation` nouns → `-er` verbs, `-ity` → `-ité`, `-ance/-ence` twins,
  `-ly` adverbs → `-ment`, `-or/-er` → `-eur`, `-able/-ible` as-is. This is the French analogue of
  the High German consonant shift: a *system* you can run in your head, not a dictionary.

These become the compendium's **shift families** (`compendium-fr.ts`), which drive the Atlas-style
"By shift family" review deck exactly as the German shift families do.

## 2. Course architecture (30 topics)

Phase 1 — **the decode engine** (what you already own, plus the first verbs):

1. **The French Inside Your English** — the register ladder (ask→enquire); `le gâteau`, `le café`;
   `je veux`, `tu veux`; `le/la` as *the/it*; question by intonation. The lesson the guidebook's
   French transcript §3.1 walks through.
2. **The -ION Bridge** — `-ion` nouns convert (all feminine, so `la`); elision `l'` before vowels;
   `la` = *it* for `-ion` words.
3. **The -ation Engine** — noun→verb: `-ation` → `-er` (/e/); `je veux + infinitive`; the
   `célébrer` trap; `un peu`.
4. **Ne...Pas: The Sandwich** — negation wraps the verb: `je ne veux pas`; `pas` = *step*
   (`ne ... pas un pas`); "ne" is *not's* cousin; spoken French drops `ne` (cued, not taught as rule).
5. **être & Its Secrets** — `c'est`, `je suis` (lit. "I follow"), `tu es/vous êtes`;
   description vs identity; `très`.
6. **The -ité & -ance Bridges** — two more noun conversions; `-té/-ance` feminine (gender
   decoding from endings begins in earnest); `possibilité`, `différence`, `importance`.
7. **Questions à la Française** — three ladders: intonation → `est-ce que` ("is it that") →
   inversion; cognate question words `où` ↔ where's cousin, `qu'est-ce que`.

Phase 2 — **the sentence machine**:

8. **The -eur Bridge** — `-or/-er` → `-eur` (`doctor→docteur`, `color→couleur`, `error→erreur`);
   masculine squad decode.
9. **vous & tu** — the T–V line (German branch's cousin: `du/Sie` ↔ `tu/vous`); `s'il vous plaît`,
   `merci`; greetings.
10. **avoir & the H It Lost** — `j'ai`; avoir ↔ Latin *habere* = have; French dropped every H:
    `hôtel/hospital`, `hôtel de ville`; `il y a` preview ("it has there").
11. **Adjectives & the Silent -s** — feminine `-e`, plural `-s` written but not said (English
    says its -s; French writes it); `bon/bonne`, `grand/grande`.
12. **The Near Future** — `aller + infinitive`: `je vais visiter`; `aller` ↔ *ambulare* = amble —
    "to go" is a walk away; only `je vais` conjugated.
13. **à, de, chez** — the two master prepositions (`à` ↔ Latin *ad*); contractions `au/du/des`;
    `chez` has no English twin — "at the house of".
14. **Possessives Agree with the Thing** — `mon/ma/mes`, `son/sa/ses` follow the *noun's* gender,
    not the owner's: `mon frère`, `ma sœur` — the trap named before it springs.

Phase 3 — **time travel**:

15. **Numbers & the Four-Twenties** — 1–31; `quatre-vingts` = four score; `j'ai 30 ans`
    ("I have 30 years" — age is something you *have*).
16. **Days, Months & Dates** — `lundi` (moon-day — English kept it in Monday), `en janvier`
    (in-month uses `en`, German used `im`); `aujourd'hui` = "on the day of today".
17. **The -é Past** — passé composé with avoir: `j'ai mangé`; `-é` = English `-ed` twins;
    participle never agrees with the subject (agreement trap deferred to 18).
18. **Motion Takes être** — `je suis allé(e)`; motion verbs form the past with être and *do*
    agree — the one place French past participles wear gender.
19. **The Storytelling Past** — imparfait `-ais` ↔ English "was + -ing" (the background tense);
    `j'étais`, `c'était` — and the was/were feeling English already owns.
20. **depuis & the Perfect Split** — `j'habite ici depuis trois ans` — French uses the *present*
    where English reaches for the present perfect; the single biggest negative-transfer trap,
    so it gets a whole lesson.
21. **Plus, Moins, aussi** — comparatives; `bon→meilleur` is `good→better`'s twin suppletion;
    `que` = than.

Phase 4 — **the deep engine**:

22. **en & y** — `j'en veux` ("I want some/of it"); `y` = there; `en` replaces `de + noun`.
23. **Pronouns Walk Left** — the topic-1 reframe formalized: `me/te/nous/vous` + `le/la/les` all
    sit before the verb (`il me parle`); `lui/leur` for "to him/to them".
24. **Reflexives & la Routine** — `je m'appelle` ("I call myself"), `se lever`, daily-round chains;
    English's lost reflexives (mirrors the German `sich` lesson).
25. **il y a** — "it has there" = *there is* — and, with time, *ago* (`il y a trois ans`).
    Imported, never translated.
26. **The Would-World** — `je voudrais` (want, in the conditional mood = polite); the politeness
    escalator `un café → un café, s'il vous plaît → je voudrais un café → pourrais-je...`;
    future tense = infinitive + `-ai` (from avoir again: "I have to-love" → `aimerai`).
27. **il faut** — "it is needed": obligation without a subject; `il faut que + subjunctive`
    introduced lightly, with the three triggers the learner actually needs.

Phase 5 — **synthesis**:

28. **qui & que** — relative pronouns; the verb drops after them as it does in German
    subclauses; `que` = that/which/whom — the most French word in French.
29. **The French Mind** — idioms as thought: `avoir faim` ("have hunger"), `ça va?` ("it goes?"),
    `coup de foudre` (lightning strike); register recap across the whole ladder.
30. **Capstone: Le Pont Reading** — one connected Paris story, tap-to-inspect words, every
    conversion family lying in plain sight.

### Support branches (skippable mini-paths)

| id | attach | title | lessons |
| --- | --- | --- | --- |
| 5010 | 1 | First Words, First Spoken | bonjour/merci/ça va; `je m'appelle`; the alphabet (`w = double-v`) |
| 5020 | 1 | The Nasal Clinic | on/en/an/in — "think the N, don't say it", minimal pairs |
| 5030 | 2 | False Friends Preview | actuellement, librairie, attendre, demander — the trap deck in the wild |
| 5040 | 9 | The Tutoiement Line | tutoyer/vouvoyer; `on` = we; la bise culture |
| 5050 | 12 | Dans la ville | ici/là, directions, `tout droit`, `en face de` |
| 5060 | 15 | Shopping & Euros | combien, prices, `c'est combien?` |
| 5070 | 17 | The Past in the Wild | negation + questions inside the passé composé |
| 5080 | 24 | La Routine complète | reflexive chains across a whole day |
| 5090 | 30 | dont & où | the remaining relative pronouns |
| 5100 | 26 | Le Conditionnel complet | full conditional paradigm + politeness drills |

### Star gates (6, mirroring the German trail)

1. **The Decode Gate** — after topic 7. Topics 1–7 install every conversion bridge + être +
   questions. Later topics assume you can decode vocabulary on sight.
2. **The Machine Gate** — after topic 14. The sentence machine (future, prepositions,
   possessives) must be banked before time travel.
3. **The Past Gate** — after topic 21. All three pasts + depuis; the deep engine reuses them.
4. **The Engine Gate** — after topic 26. Pronoun system + il y a + would-world.
5. **The Capstone Gate** — after topic 29.
   (Sixth gate folds into the capstone stretch for the smaller French spine.)

## 3. Where the data lives

```
src/data/french/
  compendium-fr.ts    # words + conversion "shift families" + compounds + false friends
  curriculum-fr.ts    # FR_TOPICS, FR_TRAIL_BRANCHES, FR_TRAIL_GATES, FR_TOTAL_TOPICS
  lessons-fr.ts       # authored French lessons (same Lesson shape as German)
  insights-fr.ts      # DailyInsight[] — French expressions + etymologies
```

- **`word_connections.md` is not touched** — it is the German compendium's source of truth and the
  build pipeline (`parse-compendium.ts`) is German-only by design. French is authored directly as
  typed TypeScript (hand-checked, reviewed by the French content test suite), keeping the two
  languages' pipelines independent.
- `WordEntity.german_expression`-style field names in shared types stay as-is (generated German
  JSON depends on them); French data fills them with French content. The UI labels that say
  "German" are parameterized by active language.
- Language wiring: `languages.ts` flips `fr` to `status: "available"`; `language-content.ts`
  maps `fr → { compendium: frenchCompendium, topics: FR_TOPICS, ... }`. No other page changes.

## 4. Machine-checked constraints for French content

- **Ids**: cores 1–30 (same space as German — safe, because progress/SRS/word maps are all
  language-scoped first), sprigs `topicId*100 + i`, branches 5000-series. All ids unique within
  French data.
- **No German leakage**: no lesson prose or exercise may contain `der/die/das`, `ich`, `nicht`,
  `bringen`, etc. (test-enforced).
- **Prose uniqueness**: no hook/pattern/summary content copy-pasted between neighbouring French
  lessons (test-enforced, mirrors `audit-wording.ts`).
- **Exercise integrity**: every `transcribe` has `idea`, `cues` (1–3) and a `word_bank` containing
  every word of `target_answer` + 1–3 distractors; `literal_gloss` has `german`→`natural` filled
  with the *French* sentence (shared field names); `dictation` has `spoken` + `replays`; every
  `target_answer` is reachable from the lesson's own teaching.
- **Gender**: French words carry `gender: "le" | "la"` (or `null`); elision (`l'opinion`) is a
  display/audio concern handled by the shared helper, never stored wrong.
- Docs counts: German counts are untouched by this course, so `docs-sync.test.ts` stays green;
  README/docs prose about languages ("Spanish & French marked coming-soon") is updated by hand.

## 5. Authoring checklist (per lesson batch)

1. One thought at a time — list every sub-skill a new structure needs; each must have had its own
   moment in an earlier lesson (or this one, earlier paragraph).
2. Fresh prose per lesson — no sentences shared with neighbours; rephrase, don't reuse.
3. Every exercise's `target_answer` derivable from what the lesson taught; word banks include
   1–3 plausible distractors (never 0).
4. Trap notes preempt the *actual* tempting wrong answer (write the wrong answer down first).
5. Foreshadow/payoff pairs point at real lesson ids; every foreshadow has a payoff.
6. 30-second detours and learning-consciousness lines sprinkled, not stacked (≈1 in 7 lessons).
7. French typography: proper accents in all target strings; `l'` elision correct; no English
   spacing before `?`.
8. IPAs filled; `sound_shift_ids` reference real conversion families; `shift_rule` names the rule.
9. Run: `bun run test`, `bun run lint`, `bun run typecheck`, and `bun run build`.
10. Update the lesson counts in this doc and the README "Multi-Language Ready" bullet.


## 6. Expanded Coursework Inventory (123 Authored Lessons, 306 Words)
- **30 Spine Cores (`1–30`)**: All 30 topics fully authored.
- **72 Cluster Sprigs**: Including 10 new French-specific grammatical sprigs:
  - `303` **The -ir & -re Verb Bridges** (`finir`, `choisir`, `vendre`, `répondre`, `attendre`)
  - `603` **The -ment & -able Twin Bridges** (`exactement`, `naturellement`, `possible`, `capable`)
  - `1003` **Liaison & Silent Consonants: The CaReFuL Rule**
  - `1103` **BAGS: Adjectives That Step Before the Noun** (`beau/bel`, `nouveau/nouvel`, `vieux/vieil`, `bon`, `grand`, `petit`)
  - `1303` **The Partitive Article: du, de la, des & Negative pas de**
  - `1403` **Demonstratives (ce/cet/cette/ces) & Stressed Pronouns (moi, toi, lui)**
  - `2303` **The Double-Pronoun Highway (me le, le lui, y, en)**
  - `2703` **Savoir vs Connaître: Facts vs Familiarity**
  - `2803` **Verb Dynasties: The venir, tenir & prendre Matrices**
  - `2903` **Spoken French Shortcuts: on = nous & Dropping ne**
- **15 Support Branches (21 Lessons, `5011–5152`)**: Including the Partitive & `Avoir` Expressions Gym (`5110`), Bistro & Table French (`5120`), SNCF & Train Travel (`5130`), Professions (without `un/une`) & Passions (`5140`), and Body (`avoir mal à`) & Wardrobe (`5150`).
