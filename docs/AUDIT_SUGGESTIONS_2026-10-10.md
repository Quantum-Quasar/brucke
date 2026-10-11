# Consolidated audit suggestions — src/data/lessons.ts

Generated 2026-10-10 from 18 subagent findings files (11 further agents died on the
sub-agent free allowance before writing findings; see "Coverage gaps" below).

Every item below was proposed by a subagent and verified against the grader code in
`src/lib/letter-diff.ts` and `src/components/lesson/ExerciseWidgets.tsx`. Nothing has been
applied to `lessons.ts` yet.

Severity order: A = could grade a correct learner wrong or teaches wrong German;
B = second defensible answer; C = drafting text visible to the learner;
D = wrong explanation / overclaim; E = clarity.

---

## A. Wrong German or broken exercise

1. **l401_e4** (401) — prompt `"Du _____ ein Bruder"` is ungrammatical; `Bruder` is the accusative object of *haben*.
   → `"Du _____ einen Bruder"`. Target `hast` unchanged.

2. **l14_e1** (14) — matching card says `Ich kenne niemanden` (correct accusative) but `target_answer` says `Ich kenne niemand`.
   → `target_answer: "Ich kenne niemanden, Ich weiß nichts"`.

3. **l2001_e1 md1** (2001) — card pairs *methinks (it seems to me)* with *Mir ist kalt (it is cold TO ME)*; the glosses state different meanings.
   → `german: "Es scheint mir (it seems TO ME)"`, `target_answer: "Es scheint mir, Gib es mir"`, `meaning: "it seems to me, give it me"`.

4. **l2001_e4** (2001) — same root: prompt asks what methinks means and answers *Mir ist kalt*. Must be applied together with #3.
   → prompt `...means the same as 'Es scheint mir'?`

5. **l2001_e3** (2001) — "jung, stark, schwach, gesund — they never decline." False: predicates don't decline.
   → "… — they decline only before a noun; after sein (er ist jung) they stay bare."

6. **l2001_e1 md5 explanation** (2001) — "the feeling-nouns ride the dative: Glück and Mut happen TO you." Glück/Mut are nominative; the dative is on the person.
   → "Glück and Mut are plain nouns; the dative sits on the person they reach: Ich wünsche dir Glück."

7. **l1905 pattern** (1905) — "wollte has one L in the past but wollen has two in the present." False; both take *ll*.
   → "Watch the trap: the double L of wollen survives into the past — wollte, du wolltest, wir wollten. Spell it with ll every time."

8. **l1801_e3** (1801) — "the last one changes its vowel" for *tragen → getragen*; the vowel does not change, the ending does. Three coupled strings.
   → prompt `(the last one breaks the -t pattern — a preview):`; explanation `ge- + stem + -t for the first four — even the motion verb`; `getragen sneaks in -en instead of -t:`.

9. **l1802_e5 vocab note** (1802) — "cities and countries take nach" is false for article-bearing countries.
   → "nach Berlin — the 'to' of destination; cities and article-free countries take nach (nach Deutschland),"

10. **l1901_e2** (1901) — asks which English verb shares *schreiben*'s strong class; the keyed answer "describe / described" is weak, and *write/wrote, ride/rode, drive/drove* (all class I) are marked wrong. Explanation "Write/wrote is a different class entirely" is false.
    → options `["write / wrote", "sing / sang", "drink / drank", "give / gave"]`; `target_answer: "write / wrote"`; `meaning: "schreiben and write are both class I (ei-ie-ie ↔ i-o-i)"`; explanation rewritten.

11. **l5071 pattern** (5071) — "the country takes aus with no article: aus Deutschland, aus der Schweiz" contradicts itself.
    → "most countries take aus with no article: aus Deutschland; feminine and plural countries keep theirs: aus der Schweiz."

12. **l5071 e2** (5071) — "and countries stand bare: aus Deutschland." overgeneralised.
    → "and most countries stand bare: aus Deutschland (but aus der Schweiz keeps its article)."

13. **l2_e5 idea_parts** (2) — exercise asks for "I can come tomorrow" but the hints describe "ich will / Deutsch lernen".
    → `"who can? → ich kann (can = know-how)"`, `"what? → kommen, and the bare infinitive closes the bracket"`.

14. **l401_e5 vocab note** (401) — "danke gives the gift TO someone"; *danken* gives nothing, it takes the dative.
    → "danken takes the dative: you thank someone (jemandem danken) — dir is the dative 'to thee' form of du".

15. **l3 pattern** (3) — "Ripe becomes reifen (fruit that has ripened is reif)" teaches *ripe = reifen*; *reifen* is the verb.
    → "Ripe becomes reif (reifen means 'to ripen')."

16. **l14 (RA1) footnote** (6, lesson 6 footnote 3) — "the I of finden is always the /ee/ of seen" would make the learner mispronounce it.
    → "the i of finden is short, like the i of English 'bit'".

17. **l8 pattern** (8) — "ending in -ate, -ize, -ify, or -ish maps directly to German -ieren"; -ish does not.
    → "ending in -ate, -ize, or -ify maps to a German -ieren verb (-ize and -ify add -is- or -ifiz- before -ieren: organisieren, klassifizieren):".

18. **l401_e2** (401) — "Donnerstag hides two shifted words"; only *Donner* shifts.
    → "Donnerstag hides one shifted word, Donner — which English weekday is its twin?"

19. **l5111_e4** (5111) — "All three descend from *hwan" but the lesson's own hook excludes *als*.
    → "wann and wenn descend from the same word as English when: English kept one spelling, German split asking (wann) from linking (wenn)."

20. **l1904 hook + pattern** (1904) — "Nobody says 'ich habe gehabt' for 'I had', and nobody says 'ich bin gewesen'" and "you will hear only in drills and apologies". Both Perfekt forms occur in everyday speech.
    → hook: "Storytelling reaches for the old simple pasts first: ich hatte, ich war. The Perfekt versions, 'ich habe gehabt' and 'ich bin gewesen', are heard in everyday speech too, but they are not the default for 'I had' and 'I was'."; pattern: "One honest note: the Perfekt forms exist — gehabt, gewesen — and you will hear them in everyday speech too, but the simple pasts remain the default for telling a story."

21. **l5072 pattern** (5072) — "The s you reach for at the start of English words is often German's Sch- or St- in speech: sprechen, schreiben." Garbled.
    → "In speech, German sp- and st- at the start of a word sound like 'shp-' and 'sht-', and Sch- is always 'sh': sprechen, Stein, schreiben."

22. **l5271_e5 vocab note** (5271) — "the fusion makes in + die → in der Schweiz". *in + die* does not fuse.
    → "im is in + dem, fused into one word — months take it bare: im Januar, im März, im Februar. The feminine countries never fuse: in der Schweiz (dwelling), in die Türkei (going)."

23. **l5082 footnote 1** (5082) — "Es würde kalt" is an unfinished sentence.
    → "Its subjunctive is würde (it would: Es würde kalt werden)."

24. **l1402_e5** (1402) — "Angst is English's own loanword: fear with a German passport." Backwards.
    → "and Angst is the German word for fear."

25. **l27_e2** (27) — "lay's y→g twin" about *legen*; false correspondence.
    → "Ich lege das Buch auf den Tisch — accusative on arrival."

## B. Second defensible answer (wrong-answer grading risk)

26. **l6_e5** (6) — `word_bank` contains `"kochst"`; "Was kochst du in der Küche?" is natural, correct German and would be graded wrong. The twist already tests *kochst*.
    → drop `"kochst"` from the bank.

27. **l1302_e1** (1301) — the exercise asks for the question form of "Du weißt es", but the option "Du weißt es?" is also real German (rising intonation, per the lesson's own linguist note).
    → option `"Du weißt es?"` → `"Wissen du es?"`.

28. **l5301_e3** (5301) — prompt asks for "the English twin" of *die Gitarre*; option `zither` is itself a cognate (Greek *kithara*), so it is a second defensible answer.
    → options `["guitar", "harp", "lyre", "cello"]`; explanation: "harp is a Germanic word (German Harfe) for a different instrument, so it is not a twin."

29. **l13_e3** (13) — `word_bank` has both `"du"` and `"Du"`; case is tolerated so "Kommst Du morgen" grades correct.
    → remove `"Du"` from the bank.

30. **l7 twist** (7) — bank has `"Trinken"` (capitalised) and `"trinken"`; "Wir Trinken kaltes Wasser" grades correct.
    → remove `"Trinken"` from the bank.

## C. Drafting text and self-corrections visible to the learner

31. **l16 hook** (16) — "verboten is forbidden, vernehmt? no — vernehmen is 'hear forth'... just remember:".
    → "verboten is forbidden. When a German verb starts with ver-, an English for- is usually dead ahead."

32. **l1401 pattern** (1401) — "Fronted place: Im Hause? no — Im Haus lerne ich".
    → "Fronted place: Im Haus lerne ich"

33. **l2601 pattern** (2601) — "fright ↔ Freude's family? no — fright is frucht's cousin, just take: fight ↔ fechten (hint)."
    → "The night row: night ↔ Nacht, light ↔ Licht. The number row:"

34. **l2501 pattern** (2501) — "Sentence plan: Ich habe dir? — Ich habe ihm das Buch gegeben".
    → "Sentence plan: Ich habe ihm das Buch gegeben"

35. **l26 pattern** (26) — "eye ↔ Auge? — eye is eǒage's descendant, the g hides mid-word."
    → "eye ↔ Auge (the g hides mid-word). rain ↔ Regen"

36. **l2301 linguist_note** (2301) — placeholder fragment "(kinder-ch-...)".
    → "The -r plural in 'children' is the same"

37. **l2601_e4 explanation** (2601) — trailing sentence about predicates/selbst is unrelated to a gh→ch cognate.
    → delete the sentence.

38. **l1901 hook** (1901) — "write? no — schreiben's true English family is the scribe family (scribe, describe, script)."
    → "schreiben's English kin is the scribe family (scribe, describe, script)."

39. **l1902 pattern** (1902) — stray question marks "geben, gibst?, gibt" / "fahren, fährst?, fährt" and " laden? skip — two exemplars per family is plenty."
    → "geben, gibst, gibt, gab, gegeben" / "fahren, fährst, fährt, fuhr, gefahren"; delete the *laden* aside.

40. **l2001 pattern** (2001) — "methinks = mich dünkt's? no — mir dünkt's: 'it thinks ITSELF to me'" is a visible self-correction and a wrong gloss.
    → "methinks = mir dünkt's: 'it seems TO me'"

41. **l2801_e3 english_hint** (2801) — "prefix + ge + stem + t? no — prefix + ge + fahren".
    → "prefix + ge + fahren"

42. **l2801 hook** (2801) — "Die Fahrt hat eine Stunde gedauert? — keep it Perfekt-light: Die Fahrt war kurz. I drove? no car — I rode the train: ...".
    → "The journey was short: Die Fahrt war kurz. I did not drive a car — I rode the train: Ich bin mit dem Zug gefahren."

43. **l2801 pattern** (2801) — "die Autofahrt? coin it yourself — ..." and "ausfahren? skip — two is plenty."
    → "die Autofahrt (car ride; the compound law from topic 21 applies). The separable: abfahren, ist abgefahren."

44. **l2901 pattern** (2901) — "Als Kind? untaught — keep it: Das Haus war alt."
    → "Das Haus war alt."

45. **l2901_e3** (2901) — "Du _____ dost? no — art."
    → "Thou-form — complete: 'Du _____ alt.' (you are old):"

46. **l2901_e4** (2901) — option "Ich bin das Auto gefahren? — no: Ich habe das Auto gefahren" carries its own correction.
    → option "Ich habe das Auto gefahren"

47. **l2802 hook** (2802) — "nehmen's du/er forms nehmen? — du nimmst".
    → "du nimmst"

48. **l2802 pattern** (2802) — "Der Umzug ist teuer? untaught — keep it: Der Umzug ist morgen".
    → "Der Umzug ist morgen"

49. **l2802 pattern** (2802) — "verstehen/verstehen? — verstehen = understand".
    → "verstehen = understand"

50. **l2903 pattern** (2903) — "Mir ist es? — plain: Mir ist gut? rare — 'es geht mir gut' covers well-being." and "Es tut mir nicht leid? negate later."
    → "Mir ist schwindlig (dizzy); for well-being say 'es geht mir gut'." / "(it does me sorrow — I am sorry). Recipient"

51. **l2404 pattern** (2404) — "alte Bücher, gute Freunde? — Freunde arrives with its own lesson; for now: alte Wörter."
    → "alte Bücher, alte Wörter."

52. **l301 pattern** (301) — "(initial pp... initial p → pf AND medial pp → ff)".
    → "(initial p → pf AND medial pp → ff)"

## D. Wrong or misleading explanation (not wrong German)

53. **l2003_e2** (2003) — options `["dem (dative — folgen demands it)", "den (accusative)", "der", "das"]` hand the learner the answer inside the option text.
    → `["dem", "den", "der", "das"]` and `target_answer: "dem"` (both fields must change together).

54. **l2003_e3** (2003) — `["ihm (dative receiver)", "ihn (accusative — wrong club)", "ihren", "seine"]`.
    → `["ihm", "ihn", "ihren", "seine"]` and `target_answer: "ihm"` (both fields together).

55. **l1302_e4** (1302) — the only correct option carries the gloss "— do-support is not German".
    → option and `target_answer` both → `"Tust du morgen kommen?"`.

56. **l1102_e1** (1102) — "One map, three distances: dieser (near), das (mid), jener (far)" contradicts the lesson's two-pointer map.
    → "One map: dieser (near), jener (far) — with der/die/das as the default articles."

57. **l2901_e1** (2901) — "der Mensch ... is sein's most frequent subject" is an unsupported usage claim.
    → "der Mensch (human) is the subject in ich bin ein Mensch."

58. **l2901_e5 vocab note** (2901) — "no English twin" for *aber* while the translation field is "but".
    → "a coordinating conjunction: it joins two clauses without changing word order."

59. **l2802_e2 explanation** (2802) — "The journey verbs ride their own rails: aufstehen, mitnehmen, schauen — one trip in three words, und jeder gewinnt: everyone wins." mixes unrelated verbs.
    → "mitnehmen rides the same mutation-free rail: the prefix flies to the end."

60. **l1905 e2** (1905) — explanation names *stehen* as the bracket's bare infinitive; the sentence is "Ich konnte nicht kommen".
    → "with the bare infinitive kommen at the bracket's end."

61. **l1905 e3** (1905) — last sentence about adjectives "waiting outside the bracket" is unrelated to *musste*.
    → "English must has no past of its own (it uses had to), but German musste is the frozen past of müssen and works in sentences like this one."

## E. Clarity / prompt wording

62. **l11_e2** (11) — explanation ends with an unrelated wir-forms sentence.
    → "mein copies ein exactly: masculine accusative adds -en (the Him-Case): der Teller → meinen Teller."

63. **l7_e5 cues[2]** (7) — "with the das-Wasser ending" is opaque; Wasser is neuter.
    → "What? → kaltes Wasser: cold → kalt, with the -es ending of neuter Wasser".

64. **l5271_e2** (5271) — prompt "Ich wohne in _____. — which of these country names refuses to travel without its article?" paired with option *die Türkei* invites the wrong dative.
    → "Which of these country names refuses to travel without its article?"

65. **l301_e2** (301) — "Match the English p-words with their PF- receipts:" is false for *einsteigen/aussteigen*.
    → "Match each English word with its German twin:"

66. **l1902_e1 matching_pairs** (1902) — English side reads "take (nim) / took"; *nim* is not an English form.
    → "take / took / taken"

67. **l1902_e1 prompt** (1902) — "Family album one (e→a) — match the paradigms:" does not match the set (which contains a→ie and i→a).
    → "Family album one — match the paradigms:"

68. **l2802_e2** (2802) — option "nimmt?" reads as a duplicate of the answer.
    → `"nimmst"` (a genuine wrong form for *er*).

69. **l5072 e5 explanation** (5072) — says "Modal kann in position 2" but the sentence uses *Kannst*.
    → "Modal kannst in position 2"

70. **1802 summary.use_example** (1802) — "I went (am-driven) to Berlin yesterday." is not idiomatic English.
    → "I drove to Berlin yesterday."

## Items that need a decision before editing (flagged, not proposed as edits)

71. **l1001_e1** (1001) — the `english` field holds German nominative phrases ("der Kaffee (subject)") and is rendered under the "English" column header, so the "Match the German with its English" prompt is unreadable. Rewriting the English side changes which pairs match, so no safe one-field edit was found. Needs a decision on which column is which.

72. **l1901 title / hook / pattern / summary** (1901) — says "fourteen" English irregulars; the lesson names about ten. A four-field edit; the words "Ten Mirrors on the Wall", "ten English irregular verbs", "Ten frames", "ten English irregulars", "ten mirrors" would need to change together with the title.

73. **l2502 hook** (2502) — "heaven → Himmel? no — different family!" is draft text in the hook. Flagged as clarity but left unchanged by the agent.

## Etymology log (not to be implemented)

Per NORTH_STAR these are out of scope, recorded only so they are not re-litigated:
l1 hook/pattern/footnotes, l2 pattern + l2_e1 soll note, **l11_e4 + l11 linguist_note**, l12 hook/footnote/linguist_note, l13 linguist_note, l14 footnote/linguist_note, l16 pattern, l4 pattern + hook, l5 vocab_hints bitte + pattern, l6 vocab_hints machst + pattern, l302 hook/pattern/linguist_note, l401 hook/pattern/linguist_note/e3, l201 e3, l202 e5, l301 e4/e5/linguist_note, l202 linguist_note, l7 hook/pattern/e3, l8 hook/e3, l2003_e4, l2603 hook/footnote/linguist_note, l2703 linguist_note, l2501 footnote, l2502 linguist_note, l24 linguist_note, l23 footnote, l2601 pattern, l1801 hook/footnote/e2, l1802 e1/e4, l1903 e1/e4, l1901 hook/pattern/summary and linguist_note, l1902 hook/pattern, l2902 e2/footnote/linguist_note, l2903 footnote/linguist_note, l2801 hook/pattern/e4, l2802 footnote/e4/linguist_note, l5061 pattern, l5062 linguist_note, l5063 footnote/linguist_note, l1904 linguist_note, l1905 hook/linguist_note, l2403 e1, l5071 hook/footnote/linguist_note, l5072 e2/linguist_note/hook, l5082 linguist_note, l2404 hook/footnote/linguist_note, l1603 linguist_note, l1604 linguist_note, l5211 hook, l5212 linguist_note, l5221 linguist_note, l5222 summary, l5231 hook, l5242_e3, l5252_e5, l5281_e5/l5291_e2, l5291_e3, l5301 hook/linguist_note, l5311_e3, l5292 summary, l5302 hook/e2, l801 hook/footnote, l901 footnote, l902 footnote/linguist_note, l1002 hook/footnote.

## Checked with no change (confirmed clean)

Exercises found solvable, unambiguous and German-correct across lessons 1–16, 11–16, 201–401, 702 (701, 702), 801–1002, 1101–1402, 1603–1604, 2301–2501, 2404, 2502–2703, 2801–2903, 5082, 5211–5252, 5261–5312, 5061–5063, 5071–5072. Notable items judged fine on purpose:

- l1902_e2 (gibt), l1903_e2/e3/e4/e5, l2001_e2/e5, l1901_e1/e3/e4/e5, l1902_e3/e4/e5.
- l2902_e2/e3 (dative *mir*; *hören* = phone hearing) and l2903_e2/e3/e4/e5.
- l4_e5 "Ich denke an dich" (*dir* is correctly wrong: *denken an* takes accusative).
- l15 twist bank containing both *stehe* and *steht* (only *stehe* is correct, so unambiguous).
- l6 twist "Was kochst du in der Küche" (deliberately the *kochst* exercise; the *machst* bank was fixed separately in l6_e5).
- l5262_e3 option *German*; l5291_e3 option *cellar*.
- Missing commas in syntax_builder targets (l5081_e5, l5101_e5, l5102_e5, l5111_e5): the word bank cannot supply commas, so adding one would make the exercise unfinishable.
- Matching-pair `target_answer` mismatches (e.g. l1903_e1 lists four pairs but card sv5 isn't in it) — matching is graded on card matches, not the target string.
- Lesson 401 summary "Ich mag das Kleid": *mögen* is taught earlier, so not a taught-later violation.

## Coverage gaps — lessons never reviewed

11 agents died to the sub-agent free allowance without writing findings. These lesson ids were
in scope but produced no file and are **unaudited**:

`402, 501, 502` · `601, 602, 701, 702` · `10, 101, 102, 103` · `17, 18, 1701, 19, 20`
(except 1701–1703, 1801–1803) · `21, 22, 2101, 2102` · `28, 29, 30, 2701, 2702`
· `3001, 3002, 3003, 5011, 5012, 5021` · `5031, 5041, 5051, 5052`
· `1103, 1202, 1403, 1501, 1502, 1601, 1602, 2103, 2302, 2401, 2402`
· `5112, 5121, 5122, 5131, 5132, 5141, 5142` · `5143, 5151, 5161, 5162, 5171, 5172`
· `5181, 5182, 5191, 5192, 5201` · `5202`

Also partial: lesson 5081 appeared in another agent's "checked" list but was not audited by a
dedicated slice; lessons 5112–5142 were read but not judged.

One more note carried over from the session: the exercise the user originally reported
(`Ich suche einen guten Wein` / "I look for a good doctor") is **not present in the current
`lessons.ts`** — it only survives in the stale `.next` build cache. The `doctor` option that does
exist in the file (`l5281_e3`, "Arzt walked from Greek archiatros") is a legitimate distractor.
