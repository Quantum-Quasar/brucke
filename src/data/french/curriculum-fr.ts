import type { LessonShell, TopicCluster, TrailBranch, TrailGate } from "@/lib/types";

// ---------------------------------------------------------------------------
// Le Pont — the French trail. 30 topics on one spine, mirroring the German
// curriculum's shape (see data/curriculum.ts). Ids live in the same spaces as
// German (cores 1–30, sprigs topicId*100+i, branches 5000-series) — safe,
// because progress, SRS and word maps are language-scoped first.
//
// Design blueprint: docs/french-course/french-course-design.md
// ---------------------------------------------------------------------------

export const FR_TOTAL_TOPICS = 30;

export const frSprigId = (topicId: number, index: number) => topicId * 100 + index;

const shell = (id: number, title: string, plan: string): LessonShell => ({ id, title, plan });

const authoredCore = (id: number, title: string): LessonShell => ({
  id,
  title,
  plan: "Authored — full content lives in data/french/lessons-fr.ts.",
  authored: true,
});

export const FR_TOPICS: TopicCluster[] = [
  {
    id: 1,
    title: "The French Inside Your English",
    blurb: "The register ladder (ask→enquire), le gâteau, je veux — and le/la as the word for it.",
    core: authoredCore(1, "The French Inside Your English"),
    sprigs: [
      { ...shell(frSprigId(1, 1), "Hidden Twins: Table & Commerce", "Direct cognates gym: le table, le commerce, le restaurant, la minute, le moment — recognition drills with gender colors."), authored: true },
      { ...shell(frSprigId(1, 2), "First Sentences Gym", "Je veux le… pattern drills: assemble 6 simple sentences from the first conversions."), authored: true },
      { ...shell(frSprigId(1, 3), "The Register Ladder", "ask→enquire, want→desire: reach for the fancy English word and the French is standing behind it."), authored: false },
    ],
  },
  {
    id: 2,
    title: "The -ION Bridge",
    blurb: "Thousands of nouns convert whole: invitation, tradition — and every one is feminine.",
    core: authoredCore(2, "The -ION Bridge"),
    sprigs: [
      { ...shell(frSprigId(2, 1), "L'Elision Gym", "la → l' before vowels: l'opinion, l'organisation — the apostrophe marks a vowel sacrificed."), authored: true },
      { ...shell(frSprigId(2, 2), "-ION Discrimination Drills", "Mixed conversion drills: convert 8 -ION nouns and place la or l' before each."), authored: true },
    ],
  },
  {
    id: 3,
    title: "The -ation Engine",
    blurb: "Noun → verb: confirmation → confirmer. Thousands of infinitives, almost free.",
    core: authoredCore(3, "The -ation Engine"),
    sprigs: [
      { ...shell(frSprigId(3, 1), "The Célébrer Trap", "Not *célébrater: the whole -ation goes before -er arrives. Discrimination drills."), authored: true },
      { ...shell(frSprigId(3, 2), "Je veux + Infinitive Gym", "je veux visiter, je veux organiser — build 8 sentences with newly converted verbs."), authored: true },
    ],
  },
  {
    id: 4,
    title: "Ne...Pas: The Sandwich",
    blurb: "Negation wraps the verb: je ne veux pas. Pas is literally a footstep.",
    core: authoredCore(4, "Ne...Pas: The Sandwich"),
    sprigs: [
      { ...shell(frSprigId(4, 1), "Pas Un Pas", "The etymology gym: ne vais pas un pas — negation as refusing to take a step."), authored: true },
      { ...shell(frSprigId(4, 2), "Negation in the Wild", "Flip 10 sentences to the negative without changing anything else."), authored: true },
    ],
  },
  {
    id: 5,
    title: "être & Its Secrets",
    blurb: "c'est, je suis (lit. 'I follow'), vous êtes — the being-verbs as evidence.",
    core: authoredCore(5, "être & Its Secrets"),
    sprigs: [
      { ...shell(frSprigId(5, 1), "je suis: I Follow", "The sequence/sequel etymology; suis/es/est drills with description sentences."), authored: true },
      { ...shell(frSprigId(5, 2), "C'est Gym", "C'est bon, c'est la vie: 8 identification sentences and questions on them."), authored: true },
    ],
  },
  {
    id: 6,
    title: "The -ité & -ance Bridges",
    blurb: "Two more noun conversions — and the endings that decode gender for you.",
    core: shell(6, "The -ité & -ance Bridges", "Two conversion bridges (-ity→-ité, -ance twins) plus the feminine-squad decode rule for gender from endings."),
    sprigs: [
      { ...shell(frSprigId(6, 1), "The Feminine Squad", "-ion, -ité, -ance, -ette: convert 12 nouns and read their gender off the ending."), authored: false },
      { ...shell(frSprigId(6, 2), "Liberté & Society Sentences", "La liberté est… — build 6 sentences converting -ité nouns into the wild."), authored: false },
    ],
  },
  {
    id: 7,
    title: "Questions à la Française",
    blurb: "Three ladders of asking: intonation → est-ce que → inversion.",
    core: shell(7, "Questions à la Française", "The three question ladders (intonation, est-ce que, inversion) plus cognate question words."),
    sprigs: [
      { ...shell(frSprigId(7, 1), "Est-ce que Drills", "'Is it that': turn 8 statements into questions without moving a word."), authored: false },
      { ...shell(frSprigId(7, 2), "Question-Word Twins", "où ↔ ubiquitous, pourquoi ↔ wherefore — the cognate question words."), authored: false },
    ],
  },
  {
    id: 8,
    title: "The -eur Bridge",
    blurb: "doctor → docteur, color → couleur — and the rebels that break the rule.",
    core: authoredCore(8, "The -eur Bridge"),
    sprigs: [
      { ...shell(frSprigId(8, 1), "Couleur: The Famous Rebel", "couleur, erreur: usually-masculine -eur with its exceptions named."), authored: false },
      { ...shell(frSprigId(8, 2), "-eur Discrimination Drills", "Convert 8 -or/-er nouns; decide le/la with the squad rules."), authored: false },
    ],
  },
  {
    id: 9,
    title: "vous & tu",
    blurb: "The T–V line: vous and tu, merci and bonjour — politeness as a system.",
    core: authoredCore(9, "vous & tu"),
    sprigs: [
      { ...shell(frSprigId(9, 1), "Merci & Bonjour Gym", "Greetings, thanks, s'il vous plaît — the politeness set in dialogue drills."), authored: false },
      { ...shell(frSprigId(9, 2), "The vous Register", "When vous is required; vous voulez vs tu veux in the same conversations."), authored: false },
    ],
  },
  {
    id: 10,
    title: "avoir & the H It Lost",
    blurb: "j'ai, hôtel/hospital, homme/human — avoir is have, and French never says its H.",
    core: authoredCore(10, "avoir & the H It Lost"),
    sprigs: [
      { ...shell(frSprigId(10, 1), "The H-Drop Doublets", "hôtel/hospital, homme/human, hiver/winter? — French's silent H as fingerprint."), authored: false },
      { ...shell(frSprigId(10, 2), "J'ai Gym", "J'ai un gâteau, j'ai 30 ans — have-sentences including age as possession."), authored: false },
    ],
  },

  // ------------------------- Phase 2 shells (content TBD) -------------------------

  {
    id: 11,
    title: "Adjectives & the Silent -s",
    blurb: "Feminine -e, plural -s written but not said: grand, grande, grands, grandes.",
    core: authoredCore(11, "Adjectives & the Silent -s"),
    sprigs: [
      { ...shell(frSprigId(11, 1), "The e and the s", "Feminine -e doubling drills; plural -s as English's own -s, unsaid."), authored: false },
      { ...shell(frSprigId(11, 2), "Color & Size Gym", "Le grand jardin vert: adjective placement after the noun, BAGS exceptions preview."), authored: false },
    ],
  },
  {
    id: 12,
    title: "The Near Future",
    blurb: "aller + infinitive: je vais visiter — and aller is amble.",
    core: authoredCore(12, "The Near Future"),
    sprigs: [
      { ...shell(frSprigId(12, 1), "Amble & Go", "The ambulāre etymology; vais/vas/va drills."), authored: false },
      { ...shell(frSprigId(12, 2), "Future Gym", "8 near-future sentences with converted verbs from topic 3."), authored: false },
    ],
  },
  {
    id: 13,
    title: "à, de, chez",
    blurb: "The two master prepositions, their fusions (au, du), and chez.",
    core: authoredCore(13, "à, de, chez"),
    sprigs: [
      { ...shell(frSprigId(13, 1), "au & du Fusions", "à + le = au, de + le = du: the contractions as word-glue."), authored: false },
      { ...shell(frSprigId(13, 2), "Chez, the House Word", "chez Marie, chez le docteur — the preposition with no English twin."), authored: false },
    ],
  },
  {
    id: 14,
    title: "Possessives Agree with the Thing",
    blurb: "mon/ma/mes, son/sa/ses — they follow the noun's gender, never the owner's.",
    core: authoredCore(14, "Possessives Agree with the Thing"),
    sprigs: [
      { ...shell(frSprigId(14, 1), "The Trap Named", "mon frère / ma sœur but ma maison / mon hôtel: the owner's gender is a red herring."), authored: false },
      { ...shell(frSprigId(14, 2), "Famille Gym", "18 drills across père, mère, frère, sœur with correct possessives."), authored: false },
    ],
  },

  // ------------------------- Phase 3 shells (content TBD) -------------------------

  {
    id: 15,
    title: "Numbers & the Four-Twenties",
    blurb: "1–31, j'ai 30 ans — and quatre-vingts is four score, like Gettysburg.",
    core: authoredCore(15, "Numbers & the Four-Twenties"),
    sprigs: [
      { ...shell(frSprigId(15, 1), "Counting Cognates Gym", "deux/duo, trois/three, six/six — the number drills with listening."), authored: true },
      { ...shell(frSprigId(15, 2), "Four Score & Seven", "quatre-vingts and the vigesimal mind; ages with j'ai … ans."), authored: false },
    ],
  },
  {
    id: 16,
    title: "Days, Months & Dates",
    blurb: "lundi (moon-day), en janvier — and aujourd'hui is 'on the day of today'.",
    core: authoredCore(16, "Days, Months & Dates"),
    sprigs: [
      { ...shell(frSprigId(16, 1), "The Sky Calendar", "lundi/mardi/mercredi: the planetary week French and English share."), authored: false },
      { ...shell(frSprigId(16, 2), "En janvier Gym", "in-month with en; dates with le 14 juillet."), authored: false },
    ],
  },
  {
    id: 17,
    title: "The -é Past",
    blurb: "Passé composé with avoir: j'ai mangé — the -é is the English -ed.",
    core: authoredCore(17, "The -é Past"),
    sprigs: [
      { ...shell(frSprigId(17, 1), "Participle Twins", "mangé/manged, décidé/decided, trouvé/trove: the -é = -ed drills."), authored: false },
      { ...shell(frSprigId(17, 2), "Gestern habe ich — non: Hier j'ai…", "Narrate a weekend in 10 passé composé sentences."), authored: false },
    ],
  },
  {
    id: 18,
    title: "Motion Takes être",
    blurb: "je suis allé(e): the motion verbs form their past with être and agree.",
    core: authoredCore(18, "Motion Takes être"),
    sprigs: [
      { ...shell(frSprigId(18, 1), "The être House", "allé, arrivé, venu, né: the motion list as one house, one agreement rule."), authored: false },
      { ...shell(frSprigId(18, 2), "Agreement Drills", "allée/allés/allées: the participles wear gender only in this house."), authored: false },
    ],
  },
  {
    id: 19,
    title: "The Storytelling Past",
    blurb: "The imparfait: c'était, j'habitais — the background tense of was + -ing.",
    core: authoredCore(19, "The Storytelling Past"),
    sprigs: [
      { ...shell(frSprigId(19, 1), "Was & Was-Ing", "-ais as the continuous past; c'était was French's most-used word in stories."), authored: false },
      { ...shell(frSprigId(19, 2), "Imparfait vs Composé", "The two pasts in one story: background vs events."), authored: false },
    ],
  },
  {
    id: 20,
    title: "depuis & the Perfect Split",
    blurb: "J'habite ici depuis trois ans — present tense where English reaches for have lived.",
    core: authoredCore(20, "depuis & the Perfect Split"),
    sprigs: [
      { ...shell(frSprigId(20, 1), "The Trap Lesson", "depuis + présent: the single biggest English-transfer trap, drilled."), authored: false },
      { ...shell(frSprigId(20, 2), "Since & For Gym", "10 depuis sentences; depuis quand ?"), authored: false },
    ],
  },
  {
    id: 21,
    title: "Plus, Moins, aussi",
    blurb: "Comparatives with que; bon→meilleur is good→better's twin suppletion.",
    core: authoredCore(21, "Plus, Moins, aussi"),
    sprigs: [
      { ...shell(frSprigId(21, 1), "The Twin Suppletions", "bon/meilleur ↔ good/better, mauvais/pire ↔ bad/worse."), authored: false },
      { ...shell(frSprigId(21, 2), "Comparison Gym", "20 sentences: plus…que, moins…que, aussi…que."), authored: false },
    ],
  },

  // ------------------------- Phase 4 shells (content TBD) -------------------------

  {
    id: 22,
    title: "en & y",
    blurb: "j'en veux (of it), j'y vais (there) — pronouns for places and quantities.",
    core: authoredCore(22, "en & y"),
    sprigs: [
      { ...shell(frSprigId(22, 1), "en: Of It", "en replaces de + noun: j'en veux, j'en ai deux."), authored: false },
      { ...shell(frSprigId(22, 2), "y: There", "j'y vais, il y en a — y as the place-pronoun."), authored: false },
    ],
  },
  {
    id: 23,
    title: "Pronouns Walk Left",
    blurb: "me, te, le, la, nous, vous before the verb — topic 1's reframe, formalized.",
    core: authoredCore(23, "Pronouns Walk Left"),
    sprigs: [
      { ...shell(frSprigId(23, 1), "The Full Left-Walk", "je le vois, il me parle, nous vous écoutons."), authored: false },
      { ...shell(frSprigId(23, 2), "lui & leur", "The to-him/to-them pronouns and their position."), authored: false },
    ],
  },
  {
    id: 24,
    title: "Reflexives & la Routine",
    blurb: "se lever, je m'appelle — the daily round with self-directed verbs.",
    core: authoredCore(24, "Reflexives & la Routine"),
    sprigs: [
      { ...shell(frSprigId(24, 1), "I Call Myself", "je m'appelle, tu t'appelles — introductions as reflexives."), authored: false },
      { ...shell(frSprigId(24, 2), "The Morning Round", "se lever, se laver, s'habiller, se coucher — routine chains."), authored: false },
    ],
  },
  {
    id: 25,
    title: "il y a",
    blurb: "'It has there' = there is — and with time, ago.",
    core: authoredCore(25, "il y a"),
    sprigs: [
      { ...shell(frSprigId(25, 1), "It Has There", "il y a un café, il y a trois ans: existence and elapsed time in one phrase."), authored: false },
      { ...shell(frSprigId(25, 2), "il y a Gym", "12 sentences mixing existence and ago."), authored: false },
    ],
  },
  {
    id: 26,
    title: "The Would-World",
    blurb: "je voudrais and the politeness escalator; the future tense is infinitive + avoir.",
    core: authoredCore(26, "The Would-World"),
    sprigs: [
      { ...shell(frSprigId(26, 1), "Je voudrais", "vouloir in the conditional: the politeness escalator from un café to pourrais-je…"), authored: false },
      { ...shell(frSprigId(26, 2), "The -ai Future", "aimerai, visiterai — the future as infinitive + avoir's shadow."), authored: false },
    ],
  },
  {
    id: 27,
    title: "il faut",
    blurb: "'It is needed' — obligation without a subject, and the subjunctive door.",
    core: authoredCore(27, "il faut"),
    sprigs: [
      { ...shell(frSprigId(27, 1), "It Is Needed", "il faut partir, il me faut du pain — subjectless necessity."), authored: false },
      { ...shell(frSprigId(27, 2), "The Subjunctive Door", "il faut que je parte: the three triggers you actually need."), authored: false },
    ],
  },

  // ------------------------- Phase 5 shells (content TBD) -------------------------

  {
    id: 28,
    title: "qui & que",
    blurb: "Relative pronouns — que is the most French word in French.",
    core: authoredCore(28, "qui & que"),
    sprigs: [
      { ...shell(frSprigId(28, 1), "The Man That Knows", "qui for subjects, que for objects — the verb drops after them like a German subclause."), authored: false },
      { ...shell(frSprigId(28, 2), "Que Everywhere", "c'est que, je pense que, il faut que — que as the connective tissue."), authored: false },
    ],
  },
  {
    id: 29,
    title: "The French Mind",
    blurb: "avoir faim, ça va, coup de foudre — idioms as thought, register recap.",
    core: authoredCore(29, "The French Mind"),
    sprigs: [
      { ...shell(frSprigId(29, 1), "Have-Hunger & Co", "avoir expressions: faim, soif, peur, raison — feelings as possessions."), authored: false },
      { ...shell(frSprigId(29, 2), "The Register Ladder Recap", "formal vs everyday across the whole course; the conversion families revisited."), authored: false },
    ],
  },
  {
    id: 30,
    title: "Capstone: Le Pont Reading",
    blurb: "One connected Paris story built from everything — conversions in plain sight.",
    core: authoredCore(30, "Capstone: Le Pont Reading"),
    sprigs: [
      { ...shell(frSprigId(30, 1), "A Day in Paris: Reading", "The capstone passage with tap-to-inspect words and conversion annotations."), authored: false },
      { ...shell(frSprigId(30, 2), "Trap Watch: False Friends in the Wild", "The 12 curated false friends embedded in context sentences."), authored: false },
      { ...shell(frSprigId(30, 3), "The Whole-Trail Review Game", "Mixed-mode synthesis quiz drawing from all 30 topics."), authored: false },
    ],
  },
];

export const FR_TRAIL_BRANCHES: TrailBranch[] = [
  {
    id: 5010,
    attach: 1,
    title: "First Words, First Spoken",
    blurb: "Bonjour, merci, je m'appelle — and the alphabet (w is double-v!).",
    lessons: [
      { ...shell(5011, "Bonjour & Merci", "Greetings, thanks and ça va in dialogue drills; la bise culture."), authored: true },
      { ...shell(5012, "The Alphabet & Je m'appelle", "l'alphabet (w = double-v), spelling your name, je m'appelle — introductions from taught pieces."), authored: true },
    ],
  },
  {
    id: 5020,
    attach: 1,
    title: "The Nasal Clinic",
    blurb: "on, en, an, in — think the N, don't say it.",
    lessons: [
      { ...shell(5021, "Think the N", "The four nasal vowels with minimal pairs (pain/pin, blanc/blond) and the 'moving toward N' technique."), authored: true },
    ],
  },
  {
    id: 5030,
    attach: 2,
    title: "False Friends Preview",
    blurb: "actuellement is 'currently' — a first walk through the trap deck.",
    lessons: [
      { ...shell(5031, "Actuellement, Librairie & Co.", "Six highest-value false friends in contrastive recall drills; link-out to the Review Hub deck."), authored: true },
    ],
  },
  {
    id: 5040,
    attach: 9,
    title: "The Tutoiement Line",
    blurb: "tutoyer/vouvoyer — and on, the worn-down homme.",
    lessons: [
      { ...shell(5041, "Tutoyer & Vouvoyer", "The pronoun choice as verbs; when on replaces nous in speech."), authored: false },
    ],
  },
  {
    id: 5050,
    attach: 12,
    title: "Dans la ville",
    blurb: "ici, là, tout droit — directions in the street.",
    lessons: [
      { ...shell(5051, "Ort & Direction: ici, là, tout droit", "Deictics and directions; en face de, à côté de."), authored: false },
    ],
  },
  {
    id: 5060,
    attach: 15,
    title: "Shopping & Euros",
    blurb: "Combien ? — prices, euros, and numbers under pressure.",
    lessons: [
      { ...shell(5061, "C'est combien ?", "Prices with euros; numbers 31–100 preview."), authored: false },
    ],
  },
  {
    id: 5070,
    attach: 17,
    title: "The Past in the Wild",
    blurb: "Negation and questions inside the passé composé.",
    lessons: [
      { ...shell(5071, "Je n'ai pas mangé", "The sandwich wraps the auxiliary: ne + ai + pas + participle; questions with est-ce que in the past."), authored: false },
    ],
  },
  {
    id: 5080,
    attach: 24,
    title: "La Routine complète",
    blurb: "Reflexive chains across a whole day.",
    lessons: [
      { ...shell(5081, "De matin à soir", "The full daily routine: reflexives + time-telling + depuis, chained."), authored: false },
    ],
  },
  {
    id: 5090,
    attach: 30,
    title: "dont & où",
    blurb: "The remaining relative pronouns.",
    lessons: [
      { ...shell(5091, "Dont & Où", "dont = of which; où as relative 'where' — the relative system completed."), authored: false },
    ],
  },
  {
    id: 5100,
    attach: 26,
    title: "Le Conditionnel complet",
    blurb: "The full would-world paradigm.",
    lessons: [
      { ...shell(5101, "Tout le conditionnel", "The full conditional of -er verbs; politeness drills under pressure."), authored: false },
    ],
  },
];

export const FR_TRAIL_GATES: TrailGate[] = [
  {
    id: 1,
    afterTopic: 7,
    requiredStars: 12,
    title: "The Decode Gate",
    why: "Topics 1–7 install the whole conversion engine: -ION, -ation→-er, -ité, -ance, plus être, the sandwich and questions. Every topic ahead assumes you can decode vocabulary on sight — bank 12 of the 19 lessons in this stretch before moving on.",
  },
  {
    id: 2,
    afterTopic: 10,
    requiredStars: 5,
    title: "The Machine Gate",
    why: "Topics 8–10 add the -eur bridge, the T–V line and avoir. The sentence machine ahead (future, prepositions, possessives) assumes solid verbs — earn 5 of the 8 lessons in this stretch.",
  },
  {
    id: 3,
    afterTopic: 14,
    requiredStars: 7,
    title: "The Sentence Gate",
    why: "Topics 11–14 assemble the sentence machine: adjectives, the near future, prepositions, possessives. Time travel ahead reuses them in every example — bank 7 of the 12 lessons here.",
  },
  {
    id: 4,
    afterTopic: 21,
    requiredStars: 9,
    title: "The Past Gate",
    why: "Topics 15–21 hand you numbers, all three pasts and depuis. The deep engine ahead reuses past-tense and pronoun-heavy sentences — earn 9 of the 17 lessons in this stretch.",
  },
  {
    id: 5,
    afterTopic: 26,
    requiredStars: 7,
    title: "The Engine Gate",
    why: "Topics 22–26 install en/y, the left-walking pronouns, reflexives, il y a and the would-world. The synthesis stretch is pure reading and recall — carry 7 of the 13 stars with you.",
  },
];

// ---------------------------------------------------------------------------
// Helpers (mirror data/curriculum.ts but scoped to French data)
// ---------------------------------------------------------------------------

import { FR_LESSONS } from "./lessons-fr";

export const getFrenchAuthoredLesson = (lessonId: number) => FR_LESSONS.find((l) => l.id === lessonId);
