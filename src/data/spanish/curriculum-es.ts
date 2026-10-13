import type { LessonShell, TopicCluster, TrailBranch, TrailGate } from "@/lib/types";

// ---------------------------------------------------------------------------
// El Puente — the Spanish trail. 30 topics on one spine, mirroring the German
// curriculum's shape (see data/curriculum.ts). Ids live in the same spaces as
// German (cores 1–30, sprigs topicId*100+i, branches 5000-series) — safe,
// because progress, SRS and word maps are language-scoped first.
//
// Design blueprint: docs/spanish-course/spanish-course-design.md
// ---------------------------------------------------------------------------

export const ES_TOTAL_TOPICS = 30;

export const esSprigId = (topicId: number, index: number) => topicId * 100 + index;

const shell = (id: number, title: string, plan: string): LessonShell => ({ id, title, plan });

const authoredCore = (id: number, title: string): LessonShell => ({
  id,
  title,
  plan: "Authored — full content lives in data/spanish/lessons-es.ts.",
  authored: true,
});

/** Core of a topic whose lesson is still on the writing trail. */
const plannedCore = (id: number, title: string): LessonShell => ({
  id,
  title,
  plan: "Not yet authored — this topic's outline lives in docs/spanish-course/spanish-course-design.md.",
  authored: false,
});

export const ES_TOPICS: TopicCluster[] = [
  {
    id: 1,
    title: "The Spanish Inside Your English",
    blurb: "The Latinate inheritance, el/la, quiero, and lo as 'it' walking left.",
    core: authoredCore(1, "The Spanish Inside Your English"),
    sprigs: [
      { ...shell(esSprigId(1, 1), "Hidden Twins: Places & Colors", "Direct cognates gym: la casa, el hotel, azul, rojo, grande, pequeño — recognition drills."), authored: true },
      { ...shell(esSprigId(1, 2), "First Sentences Gym", "Quiero el… pattern drills: assemble simple sentences from the first conversions."), authored: true },
      { ...shell(esSprigId(1, 3), "The Register Ladder", "ask→enquire, want→desire: formal English words revealing their Spanish roots."), authored: false },
    ],
  },
  {
    id: 2,
    title: "The -CIÓN Bridge",
    blurb: "Hundreds of nouns convert whole: tradición, confirmación — and every one takes la.",
    core: authoredCore(2, "The -CIÓN Bridge"),
    sprigs: [
      { ...shell(esSprigId(2, 1), "-CIÓN Is Always Feminine", "la complicación, la pasión, la invitación — decoding grammatical gender straight from the suffix."), authored: true },
      { ...shell(esSprigId(2, 2), "The Article Switch Gym", "Mixed conversion drills: switch between masculine el and feminine la with confidence."), authored: true },
    ],
  },
  {
    id: 3,
    title: "The -ar Engine: Verbs from Nouns",
    blurb: "Noun → verb: confirmación → confirmar. Hundreds of infinitives, ready to use.",
    core: authoredCore(3, "The -ar Engine: Verbs from Nouns"),
    sprigs: [
      { ...shell(esSprigId(3, 1), "The Celebrar Trap", "Strip the whole -ación before -ar arrives: celebración → celebrar, not *celebratar."), authored: true },
      { ...shell(esSprigId(3, 2), "Quiero + Infinitive Gym", "quiero visitar, quiero participar — stack verbs smoothly without English 'to'."), authored: true },
    ],
  },
  {
    id: 4,
    title: "Negation: The Clean 'No'",
    blurb: "Spanish negation is one direct word: no quiero, no lo quiero.",
    core: authoredCore(4, "Negation: The Clean 'No'"),
    sprigs: [
      { ...shell(esSprigId(4, 1), "Refusal Gym: no quiero nada", "Double negation in Spanish: no quiero nada reinforces the refusal rather than canceling it."), authored: true },
      { ...shell(esSprigId(4, 2), "Negating the Pronoun", "Placing no right before the walking pronoun: no lo quiero, no la quiero."), authored: true },
    ],
  },
  {
    id: 5,
    title: "Ser & Estar: The Two Beings",
    blurb: "es (characteristic) vs está (state/location) — the two ways Spanish sees existence.",
    core: authoredCore(5, "Ser & Estar: The Two Beings"),
    sprigs: [
      { ...shell(esSprigId(5, 1), "Es vs Está Gym", "Characteristic vs state discrimination: es bueno vs está caliente, está aquí vs es grande."), authored: true },
      { ...shell(esSprigId(5, 2), "Description Agreement Gym", "Matching adjective endings to gender: el pastel es bueno, la tradición es buena."), authored: true },
    ],
  },
  {
    id: 6,
    title: "The -dad & -mente Bridges",
    blurb: "Quality nouns in -dad and adverbs in -mente: universidad, exactamente.",
    core: plannedCore(6, "The -dad & -mente Bridges"),
    sprigs: [
      { ...shell(esSprigId(6, 1), "The -dad Feminine Squad", "-ty → -dad: ciudad, realidad, verdad — 100% feminine nouns decoded instantly."), authored: false },
      { ...shell(esSprigId(6, 2), "The -mente Adverb Factory", "-ly → feminine adjective + -mente: naturalmente, perfectamente, rápidamente."), authored: false },
    ],
  },
  {
    id: 7,
    title: "Questions: Inverted & Intonation",
    blurb: "Inverted question marks ¿?, question words with accents, and por qué vs porque.",
    core: plannedCore(7, "Questions: Inverted & Intonation"),
    sprigs: [
      { ...shell(esSprigId(7, 1), "dónde, qué & quién", "The accented question words: ¿dónde está?, ¿qué quieres?"), authored: false },
      { ...shell(esSprigId(7, 2), "por qué vs porque", "Asking why (por qué, two words accented) vs answering because (porque, one word)."), authored: false },
    ],
  },
  {
    id: 8,
    title: "The -ico & -al Bridges",
    blurb: "Adjectives in -ico with mandatory tildes, and invariable -al cognates.",
    core: plannedCore(8, "The -ico & -al Bridges"),
    sprigs: [
      { ...shell(esSprigId(8, 1), "The Esdrújula Accent Gym", "mágico, público, básico — the accent mark tells your voice exactly where to jump."), authored: false },
      { ...shell(esSprigId(8, 2), "The -al Invariable Passport", "natural, central, formal — adjectives that never change for gender in the singular."), authored: false },
    ],
  },
  {
    id: 9,
    title: "tú & usted: The T-V Line",
    blurb: "Informal tú vs polite usted (worn-down Vuestra Merced), greetings and social register.",
    core: plannedCore(9, "tú & usted: The T-V Line"),
    sprigs: [
      { ...shell(esSprigId(9, 1), "Addressing with Respect", "Using 3rd-person verbs with usted: ¿cómo está usted? vs ¿cómo estás?"), authored: false },
      { ...shell(esSprigId(9, 2), "The Politeness Toolkit", "por favor, muchas gracias, de nada — social courtesies in context."), authored: false },
    ],
  },
  {
    id: 10,
    title: "tener & hay",
    blurb: "Possession with tener ('to hold') and existence with hay ('there is/are').",
    core: plannedCore(10, "tener & hay"),
    sprigs: [
      { ...shell(esSprigId(10, 1), "tengo & tienes Gym", "Irregular first person tengo and stem-changing tienes in possession drills."), authored: false },
      { ...shell(esSprigId(10, 2), "hay: The Universal Existence", "hay un problema, ¿hay café? — existence independent of number."), authored: false },
    ],
  },
  {
    id: 11,
    title: "Adjective Agreement",
    blurb: "Descriptive adjectives following the noun: -o/-a/-os/-as patterns.",
    core: plannedCore(11, "Adjective Agreement"),
    sprigs: [
      { ...shell(esSprigId(11, 1), "Noun-First Word Order", "el libro rojo, la casa blanca — painting the object before coloring it."), authored: false },
      { ...shell(esSprigId(11, 2), "Plural Concord Drills", "los hoteles grandes, las ciudades hermosas — concord across number and gender."), authored: false },
    ],
  },
  {
    id: 12,
    title: "The Near Future: ir a",
    blurb: "voy a + infinitive — express future plans without learning a new tense.",
    core: plannedCore(12, "The Near Future: ir a"),
    sprigs: [
      { ...shell(esSprigId(12, 1), "voy, vas, va Drills", "Conjugating ir and attaching newly converted -ar verbs: voy a visitar."), authored: false },
      { ...shell(esSprigId(12, 2), "Near Future in Conversation", "Talking about tomorrow: mañana voy a organizar la fiesta."), authored: false },
    ],
  },
  {
    id: 13,
    title: "por vs para",
    blurb: "Cause/exchange (por) vs goal/destination (para) — resolving the classic struggle.",
    core: plannedCore(13, "por vs para"),
    sprigs: [
      { ...shell(esSprigId(13, 1), "para: The Arrow", "Destination, deadline, recipient: un regalo para ti, para mañana."), authored: false },
      { ...shell(esSprigId(13, 2), "por: The Motive and Path", "Through, by, for the sake of: gracias por venir, por el parque."), authored: false },
    ],
  },
  {
    id: 14,
    title: "Possessives Agree with the Thing",
    blurb: "mi, tu, su, mis, tus, sus — possessives agree with the possession, not the owner.",
    core: plannedCore(14, "Possessives Agree with the Thing"),
    sprigs: [
      { ...shell(esSprigId(14, 1), "Singular vs Plural Possessions", "mi amigo vs mis amigos, su libro vs sus libros."), authored: false },
      { ...shell(esSprigId(14, 2), "Disambiguating su", "Clarifying his/her/their/your when su has multiple interpretations."), authored: false },
    ],
  },
  {
    id: 15,
    title: "Numbers & Ages: 1–100",
    blurb: "Counting, prices, and expressing age as possession: tengo 30 años.",
    core: plannedCore(15, "Numbers & Ages: 1–100"),
    sprigs: [
      { ...shell(esSprigId(15, 1), "Numbers 1 to 30", "uno, dos, tres to treinta: foundational counting and time-telling."), authored: false },
      { ...shell(esSprigId(15, 2), "Age as Possession", "Why Spanish says 'I have years': tener with age, hunger (hambre), and thirst (sed)."), authored: false },
    ],
  },
  {
    id: 16,
    title: "Days, Months & Dates",
    blurb: "lunes, martes, en enero — calendar vocabulary and scheduling meetings.",
    core: plannedCore(16, "Days, Months & Dates"),
    sprigs: [
      { ...shell(esSprigId(16, 1), "The Days of the Planets", "lunes (Moon), martes (Mars), miércoles (Mercury) — mythic roots of weekdays."), authored: false },
      { ...shell(esSprigId(16, 2), "Dates & Appointments", "el cinco de mayo, hoy, mañana, pasado mañana in dialogue."), authored: false },
    ],
  },
  {
    id: 17,
    title: "The -ado / -ido Past",
    blurb: "Pretérito perfecto with haber: he confirmado, he comido — the English -ed cousin.",
    core: plannedCore(17, "The -ado / -ido Past"),
    sprigs: [
      { ...shell(esSprigId(17, 1), "Forming Participles", "-ar → -ado, -er/-ir → -ido: regular past participle formation."), authored: false },
      { ...shell(esSprigId(17, 2), "The haber Auxiliary", "he, has, ha, hemos, han + participle: describing life experiences."), authored: false },
    ],
  },
  {
    id: 18,
    title: "The Preterite: The Dot in Time",
    blurb: "hablé, comí, fue — completed single past events bounded in time.",
    core: plannedCore(18, "The Preterite: The Dot in Time"),
    sprigs: [
      { ...shell(esSprigId(18, 1), "-ar Preterite Endings", "-é, -aste, -ó, -amos, -aron: the strong final stress of past action."), authored: false },
      { ...shell(esSprigId(18, 2), "The Famous Irregulars", "fue (ser/ir), hizo (hacer), tuvo (tener) — high-frequency preterite stems."), authored: false },
    ],
  },
  {
    id: 19,
    title: "The Imperfect: The Storytelling Past",
    blurb: "hablaba, comía — ongoing background action, descriptions, and past habits.",
    core: plannedCore(19, "The Imperfect: The Storytelling Past"),
    sprigs: [
      { ...shell(esSprigId(19, 1), "-aba and -ía Paradigms", "The rhythmic endings of memory and habitual past actions."), authored: false },
      { ...shell(esSprigId(19, 2), "Setting the Scene: Preterite vs Imperfect", "The background (imperfect) interrupted by an event (preterite)."), authored: false },
    ],
  },
  {
    id: 20,
    title: "desde hace & Present Duration",
    blurb: "vivo aquí desde hace un año — using present tense for actions that continue.",
    core: plannedCore(20, "desde hace & Present Duration"),
    sprigs: [
      { ...shell(esSprigId(20, 1), "desde vs desde hace", "Starting point (desde las ocho) vs elapsed duration (desde hace dos horas)."), authored: false },
      { ...shell(esSprigId(20, 2), "Llevar + Gerundio", "llevar tiempo haciendo algo: alternative natural duration idioms."), authored: false },
    ],
  },
  {
    id: 21,
    title: "Comparatives: más, menos, mejor",
    blurb: "más... que, menos... que, tan... como, and irregular mejor/peor.",
    core: plannedCore(21, "Comparatives: más, menos, mejor"),
    sprigs: [
      { ...shell(esSprigId(21, 1), "Superiority and Inferiority", "más grande que, menos caro que in comparative drills."), authored: false },
      { ...shell(esSprigId(21, 2), "Equality and Irregulars", "tan bueno como, mejor, peor, mayor, menor in evaluations."), authored: false },
    ],
  },
  {
    id: 22,
    title: "Double Object Pronouns",
    blurb: "me lo da, te lo digo — pronouns stacking before the verb, and le lo becoming se lo.",
    core: plannedCore(22, "Double Object Pronouns"),
    sprigs: [
      { ...shell(esSprigId(22, 1), "The Pronoun Highway Order", "People before things: Indirect object precedes direct object (me lo, te la)."), authored: false },
      { ...shell(esSprigId(22, 2), "The se lo Softening Rule", "Why le lo sounds awkward to Spanish ears and becomes se lo."), authored: false },
    ],
  },
  {
    id: 23,
    title: "Direct vs Indirect Objects: lo/la vs le",
    blurb: "lo/la (accusative) vs le/les (dative) — clarifying target and recipient.",
    core: plannedCore(23, "Direct vs Indirect Objects: lo/la vs le"),
    sprigs: [
      { ...shell(esSprigId(23, 1), "The Personal 'a'", "Placing 'a' before specific human direct objects: veo a María."), authored: false },
      { ...shell(esSprigId(23, 2), "Dative Pronoun Redundancy", "Spanish loves saying to whom twice: a Juan le gusta el café."), authored: false },
    ],
  },
  {
    id: 24,
    title: "Reflexives & Daily Life",
    blurb: "me llamo, levantarse, lavarse — reflexives as self-action and daily routine.",
    core: plannedCore(24, "Reflexives & Daily Life"),
    sprigs: [
      { ...shell(esSprigId(24, 1), "Morning to Night Routine", "despertarse, vestirse, acostarse: reflexive verbs across a full day."), authored: false },
      { ...shell(esSprigId(24, 2), "Non-Literal Reflexives", "irse (to leave), quedarse (to stay): reflexives changing verb nuance."), authored: false },
    ],
  },
  {
    id: 25,
    title: "Gustar: The Inverted Liking",
    blurb: "me gusta el café = coffee pleases me — the subject is the thing liked.",
    core: plannedCore(25, "Gustar: The Inverted Liking"),
    sprigs: [
      { ...shell(esSprigId(25, 1), "gusta vs gustan", "Singular vs plural agreement: me gusta el vino vs me gustan los libros."), authored: false },
      { ...shell(esSprigId(25, 2), "The Gustar Family", "encantar, interesar, importar, doler: verbs operating on the same inverted pattern."), authored: false },
    ],
  },
  {
    id: 26,
    title: "The Would-World & Subjunctive Preview",
    blurb: "me gustaría, querría, and preview of the subjunctive mood after wishes.",
    core: plannedCore(26, "The Would-World & Subjunctive Preview"),
    sprigs: [
      { ...shell(esSprigId(26, 1), "The Conditional of Politeness", "me gustaría invitarte, ¿podrías ayudarme? in polite requests."), authored: false },
      { ...shell(esSprigId(26, 2), "Triggering the Subjunctive", "quiero que vengas: when one person wants another to do something."), authored: false },
    ],
  },
  {
    id: 27,
    title: "The Silent H & Palatal Shifts",
    blurb: "Historical sound shifts: f- → h- (hacer), -ct- → -ch- (noche), pl- → ll- (llave).",
    core: plannedCore(27, "The Silent H & Palatal Shifts"),
    sprigs: [
      { ...shell(esSprigId(27, 1), "The Silent H Decoded", "hacer ↔ fact, hijo ↔ filial, hierro ↔ ferrous: seeing Latin F behind H."), authored: false },
      { ...shell(esSprigId(27, 2), "The Palatal Twins", "noctem ➔ noche, lactem ➔ leche, clāvis ➔ llave: deep sound evolution."), authored: false },
    ],
  },
  {
    id: 28,
    title: "que & quien: Connective Tissue",
    blurb: "Relative pronouns connecting ideas: la persona que conozco, el lugar donde vivo.",
    core: plannedCore(28, "que & quien: Connective Tissue"),
    sprigs: [
      { ...shell(esSprigId(28, 1), "que as the Master Connector", "que for people and things: building complex clauses without friction."), authored: false },
      { ...shell(esSprigId(28, 2), "lo que: The Thing That / What", "lo que quiero decir: expressing abstract objects with lo que."), authored: false },
    ],
  },
  {
    id: 29,
    title: "Spanish Idioms as Thought",
    blurb: "dar en el clavo, tomar el pelo, meter la pata — cultural metaphors in everyday speech.",
    core: plannedCore(29, "Spanish Idioms as Thought"),
    sprigs: [
      { ...shell(esSprigId(29, 1), "Body Metaphors in Action", "costar un ojo de la cara, tomar el pelo, dar la cara."), authored: false },
      { ...shell(esSprigId(29, 2), "Arabic Heritage & Expressions", "ojalá ('God willing'), la sobremesa, y tal: uniquely Iberian cultural turns."), authored: false },
    ],
  },
  {
    id: 30,
    title: "Capstone: El Puente Reading",
    blurb: "One connected Spanish story synthesizing all 9 conversion bridges and key vocabulary.",
    core: plannedCore(30, "Capstone: El Puente Reading"),
    sprigs: [
      { ...shell(esSprigId(30, 1), "A Day in Madrid: Reading", "The capstone passage with interactive conversion annotations."), authored: false },
      { ...shell(esSprigId(30, 2), "Trap Watch: False Friends in the Wild", "The 14 curated false friends embedded in realistic dialogue."), authored: false },
      { ...shell(esSprigId(30, 3), "The Whole-Trail Review Game", "Mixed-mode synthesis quiz drawing from all 30 topics."), authored: false },
    ],
  },
];

export const ES_TRAIL_BRANCHES: TrailBranch[] = [
  {
    id: 5010,
    attach: 1,
    title: "First Words, First Spoken",
    blurb: "¡Hola!, gracias, por favor — social foundations and introductions.",
    lessons: [
      { ...shell(5011, "¡Hola! y Gracias", "Greetings, thanks and politeness in dialogue drills; social warmth culture."), authored: true },
      { ...shell(5012, "The Alphabet & Me llamo", "El alfabeto, spelling your name, me llamo — introducing yourself with taught pieces."), authored: true },
    ],
  },
  {
    id: 5020,
    attach: 1,
    title: "The Sound Gym",
    blurb: "The 5 pure vowels (a, e, i, o, u) and the written accent mark.",
    lessons: [
      { ...shell(5021, "The Five Pure Vowels", "Never glide into diphthongs: clean vowel training and acute accent rules."), authored: true },
    ],
  },
  {
    id: 5030,
    attach: 2,
    title: "False Friends Preview",
    blurb: "actualmente is 'currently' — a first walk through the trap deck.",
    lessons: [
      { ...shell(5031, "Actualmente, Librería & Co.", "Key false friends in contrastive recall drills: actualmente, librería, éxito, asistir."), authored: true },
    ],
  },
  {
    id: 5040,
    attach: 9,
    title: "tú y usted in the Street",
    blurb: "When to use tú vs usted in Spain and Latin America.",
    lessons: [
      { ...shell(5041, "The Social Line", "Register decisions in shops, taxis, and professional life."), authored: false },
    ],
  },
  {
    id: 5050,
    attach: 12,
    title: "En la ciudad",
    blurb: "aquí, allí, todo recto — navigating streets and plazas.",
    lessons: [
      { ...shell(5051, "Directions & Places", "Deictics and directions: al lado de, enfrente de, cerca, lejos."), authored: false },
    ],
  },
  {
    id: 5060,
    attach: 15,
    title: "Shopping & Euros",
    blurb: "¿Cuánto cuesta? — prices, market Spanish, and numbers under pressure.",
    lessons: [
      { ...shell(5061, "¿Cuánto es?", "Ordering in tapas bars and markets with confidence."), authored: false },
    ],
  },
  {
    id: 5070,
    attach: 17,
    title: "The Past in the Wild",
    blurb: "Negative and question sentences with the pretérito perfecto.",
    lessons: [
      { ...shell(5071, "No he terminado", "Placing no before the auxiliary: no he confirmado, ¿has comido?"), authored: false },
    ],
  },
  {
    id: 5080,
    attach: 24,
    title: "La Rutina Diaria",
    blurb: "Reflexive chains across a whole morning and evening.",
    lessons: [
      { ...shell(5081, "De la mañana a la noche", "Chaining reflexives and time markers across a realistic day."), authored: false },
    ],
  },
  {
    id: 5090,
    attach: 28,
    title: "que & quien",
    blurb: "Advanced relative pronouns and clauses.",
    lessons: [
      { ...shell(5091, "Relative Clauses in Depth", "el que, la que, lo que, cuyo — nuanced clause linking."), authored: false },
    ],
  },
  {
    id: 5100,
    attach: 26,
    title: "El Condicional & Subjuntivo",
    blurb: "Politeness and hypotheticals expanded.",
    lessons: [
      { ...shell(5101, "Hypothetical Situations", "si tuviera tiempo, me gustaría... previewing advanced moods."), authored: false },
    ],
  },
];

export const ES_TRAIL_GATES: TrailGate[] = [
  {
    id: 1,
    afterTopic: 7,
    requiredStars: 12,
    title: "The Decode Gate",
    why: "Topics 1–7 install the conversion core: -CIÓN, -ar verb engine, negation, ser vs estar, -dad, -mente, and questions. Every topic ahead assumes you can decode words on sight — bank 12 of the 19 lessons in this stretch before moving on.",
  },
  {
    id: 2,
    afterTopic: 10,
    requiredStars: 5,
    title: "The Verb Gate",
    why: "Topics 8–10 add -ico, -al, the T-V address line, tener and hay. The sentence machine ahead assumes solid verbs — earn 5 of the 8 lessons in this stretch.",
  },
  {
    id: 3,
    afterTopic: 14,
    requiredStars: 7,
    title: "The Sentence Gate",
    why: "Topics 11–14 assemble the sentence machine: adjective agreement, near future, por vs para, and possessives. Time travel ahead reuses them continuously — bank 7 of the 12 lessons here.",
  },
  {
    id: 4,
    afterTopic: 21,
    requiredStars: 9,
    title: "The Past Gate",
    why: "Topics 15–21 give you numbers, both past tenses, duration with desde hace, and comparatives. The deep engine ahead reuses past and pronoun structures — earn 9 of the 17 lessons in this stretch.",
  },
  {
    id: 5,
    afterTopic: 26,
    requiredStars: 7,
    title: "The Deep Engine Gate",
    why: "Topics 22–26 install double object pronouns, personal 'a', reflexives, gustar, and the conditional. The synthesis stretch is pure reading and recall — carry 7 of the 13 stars with you.",
  },
];

// ---------------------------------------------------------------------------
// Helpers (mirror data/curriculum.ts but scoped to Spanish data)
// ---------------------------------------------------------------------------

import { ES_LESSONS } from "./lessons-es";

export const getSpanishAuthoredLesson = (lessonId: number) => ES_LESSONS.find((l) => l.id === lessonId);
