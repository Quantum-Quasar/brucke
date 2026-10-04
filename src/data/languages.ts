// ponytail: language registry — the single place to add a new learning language.
//
// A language definition carries everything that varies between languages:
//   · identity (name, flag, TTS locale, special characters for the char bar)
//   · whether it has a grammatical gender system (drives onboarding + badges)
//   · its own onboarding introduction (philosophy, demos, ready step)
//   · content status — only "available" languages have curriculum content
//     (see src/data/language-content.ts); "coming-soon" languages show
//     graceful empty states instead.
//
// To add a language: append an entry here, then (when content exists) wire a
// content bundle in src/data/language-content.ts. No other file needs changing.

import type { Gender } from "@/lib/types";

export type LanguageStatus = "available" | "coming-soon";

/** One English ↔ target-language demo pair shown in the language's intro. */
export interface LanguageDemoPair {
  english: string;
  target: string;
  rule: string;
  note: string;
  /** compendium word id for drawer/audio (German demos only) */
  wordId?: string;
  gender?: Gender | null;
}

export interface LanguageGenderSystem {
  /** articles in display order, e.g. ["der", "die", "das"] */
  articles: string[];
  labels: string[];
  colors: string[];
}

export interface LanguageOnboarding {
  philosophy: {
    heading: string;
    body: string;
    demoTitle: string;
    demos: LanguageDemoPair[];
  };
  notation: {
    body: string;
    anchorsBody: string;
    /** whether the "grammatical gender" block (04) is shown */
    showGenders: boolean;
    /** shown instead of the 3-gender block when the language has no gender system */
    noGenderNote?: string;
  };
  ready: {
    body: string;
  };
}

export interface LanguageDefinition {
  /** stable id used in storage & URLs — never rename once shipped */
  id: string;
  name: string;
  nativeName: string;
  flag: string;
  /** BCP-47 locale for Web Speech pronunciation */
  ttsLocale: string;
  /** quick-insert characters shown under typing inputs */
  specialChars: [char: string, digraph: string][];
  charBarLabel: string;
  genderSystem: LanguageGenderSystem | null;
  status: LanguageStatus;
  /** one-line description on the language picker */
  blurb: string;
  onboarding: LanguageOnboarding;
}

const GERMAN_ONBOARDING: LanguageOnboarding = {
  philosophy: {
    heading: "you don't start from zero",
    body: "english and german are sibling languages born from the same ancestral branch. over 60% of core spoken english vocabulary has an unbroken germanic twin. you aren't memorizing random sounds — you are unlocking sound shifts you already know.",
    demoTitle: "high german consonant shift demo:",
    demos: [
      {
        english: "hand",
        target: "Hand",
        gender: "die",
        rule: "direct twin",
        wordId: "hand",
        note: "English 'hand' is identical to German 'Hand', prominently paired with the vivid rose/feminine article 'die'.",
      },
      {
        english: "water",
        target: "Wasser",
        gender: "das",
        rule: "t → ss / s",
        wordId: "wasser",
        note: "English 't' between vowels consistently shifted to German 'ss'. Neuter nouns are marked with emerald green 'das'.",
      },
      {
        english: "brother",
        target: "Bruder",
        gender: "der",
        rule: "th → d",
        wordId: "bruder",
        note: "German never developed 'th'; every English 'th' shifted to 'd'. Masculine nouns take azure blue 'der'.",
      },
      {
        english: "hope",
        target: "hoffen",
        gender: null,
        rule: "p → ff / f",
        wordId: "hoffen",
        note: "English 'p' shifted to German 'ff' or 'pf'. Verbs do not have grammatical gender and take the universal -en ending.",
      },
    ],
  },
  notation: {
    body: "brücke makes language learning transparent, intuitive, and grounded in living english cognates.",
    anchorsBody:
      "we connect german words to everyday english: mit to midwife and will to voluntary.",
    showGenders: true,
  },
  ready: {
    body: "start with lesson 1 on the trail to encounter your first ten german cognates. all progress is stored locally in your browser.",
  },
};

const SPANISH_ONBOARDING: LanguageOnboarding = {
  philosophy: {
    heading: "you already speak thousands of spanish words",
    body: "english absorbed a vast latin vocabulary — directly and through french — and spanish kept that same inheritance alive. tens of thousands of english words have an unmistakable spanish twin: family → familia, center → centro. you aren't memorizing random sounds — you are unlocking shared latin roots you already know.",
    demoTitle: "spanish cognate pattern demo:",
    demos: [
      {
        english: "family",
        target: "familia",
        rule: "direct twin",
        note: "English 'family' and Spanish 'familia' come from the same Latin word, familia — a living anchor you already own.",
      },
      {
        english: "center",
        target: "centro",
        rule: "-er → -ro",
        note: "Latin endings reshape predictably: English 'center' maps to Spanish 'centro' with the same root, centro.",
      },
      {
        english: "excellent",
        target: "excelente",
        rule: "-nt → -nte",
        note: "English adjectives ending in -nt almost always gain a final -e in Spanish: excelente, constante, elegante.",
      },
      {
        english: "dragon",
        target: "dragón",
        rule: "-on → -ón",
        note: "The stressed -ón ending marks many Spanish nouns: dragón, estación, relación — the accent tells you where the stress falls.",
      },
    ],
  },
  notation: {
    body: "brücke makes language learning transparent, intuitive, and grounded in living english cognates.",
    anchorsBody:
      "we connect spanish words to everyday english: familia to family and centro to center.",
    showGenders: false,
    noGenderNote:
      "spanish nouns carry grammatical gender — el (masculine) and la (feminine) — which this course will highlight with color-coded badges once the spanish trail opens.",
  },
  ready: {
    body: "the spanish trail is in active development. pick german to start learning today, or switch back here from settings the moment spanish content lands.",
  },
};

const FRENCH_ONBOARDING: LanguageOnboarding = {
  philosophy: {
    heading: "french is hiding inside your english",
    body: "after 1066, english absorbed over 10,000 french words — nearly a third of modern english vocabulary. castle → château, warden → gardien, estate → état. you aren't memorizing random sounds — you are uncovering norman-era doublets you already use.",
    demoTitle: "french doublet demo:",
    demos: [
      {
        english: "castle",
        target: "château",
        rule: "c + stl → ch + âu",
        note: "English kept the hard latin form 'castle' (via old norse influence), while french softened it into 'château' — same latin root, castellum.",
      },
      {
        english: "warden",
        target: "gardien",
        rule: "w → gu",
        note: "Germanic w- kept in english became gu- in french: warden/gardien, ward/garde, warranty/garantie. Same word, two pathways.",
      },
      {
        english: "estate",
        target: "état",
        rule: "s dropped before t",
        note: "French dropped the latin s before t — état, étoile, école — and english later re-borrowed those words with the s intact: estate, étoile→star's cousin school.",
      },
      {
        english: "beef",
        target: "bœuf",
        rule: "direct twin",
        note: "English 'beef' is literally the french 'bœuf' — a norman dining-table word. Cow on the farm, beef on the plate.",
      },
    ],
  },
  notation: {
    body: "brücke makes language learning transparent, intuitive, and grounded in living english cognates.",
    anchorsBody:
      "we connect french words to everyday english: château to castle and gardien to warden.",
    showGenders: false,
    noGenderNote:
      "french nouns carry grammatical gender — le (masculine) and la (feminine) — which this course will highlight with color-coded badges once the french trail opens.",
  },
  ready: {
    body: "the french trail is in active development. pick german to start learning today, or switch back here from settings the moment french content lands.",
  },
};

export const LANGUAGES: LanguageDefinition[] = [
  {
    id: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    ttsLocale: "de-DE",
    specialChars: [
      ["ä", "ae"],
      ["ö", "oe"],
      ["ü", "ue"],
      ["ß", "ss"],
      ["Ä", "Ae"],
      ["Ö", "Oe"],
      ["Ü", "Ue"],
    ],
    charBarLabel: "Umlauts",
    genderSystem: {
      articles: ["der", "die", "das"],
      labels: ["masculine", "feminine", "neuter"],
      colors: ["blue", "rose", "emerald"],
    },
    status: "available",
    blurb: "The full cognate engine: 30 topics, 9 shift families, 1226 words.",
    onboarding: GERMAN_ONBOARDING,
  },
  {
    id: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    ttsLocale: "es-ES",
    specialChars: [
      ["á", "a"],
      ["é", "e"],
      ["í", "i"],
      ["ó", "o"],
      ["ú", "u"],
      ["ñ", "n"],
      ["¿", "?"],
      ["¡", "!"],
    ],
    charBarLabel: "Accents",
    genderSystem: {
      articles: ["el", "la"],
      labels: ["masculine", "feminine"],
      colors: ["blue", "rose"],
    },
    status: "coming-soon",
    blurb: "Latin-root cognate engine. Trail under construction.",
    onboarding: SPANISH_ONBOARDING,
  },
  {
    id: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    ttsLocale: "fr-FR",
    specialChars: [
      ["é", "e"],
      ["è", "e"],
      ["ê", "e"],
      ["ë", "e"],
      ["à", "a"],
      ["ù", "u"],
      ["ç", "c"],
      ["œ", "oe"],
    ],
    charBarLabel: "Accents",
    genderSystem: {
      articles: ["le", "la"],
      labels: ["masculine", "feminine"],
      colors: ["blue", "rose"],
    },
    status: "coming-soon",
    blurb: "Norman doublet engine. Trail under construction.",
    onboarding: FRENCH_ONBOARDING,
  },
];

export const DEFAULT_LANGUAGE_ID = "de";

const LANGUAGE_MAP: Record<string, LanguageDefinition> = Object.fromEntries(
  LANGUAGES.map((l) => [l.id, l])
);

export function isValidLanguageId(id: unknown): id is string {
  // hasOwnProperty so "__proto__" & friends (prototype chain) don't count
  return typeof id === "string" && Object.prototype.hasOwnProperty.call(LANGUAGE_MAP, id);
}

/** Never throws — falls back to the default language for unknown ids. */
export function getLanguageDefinition(id: string | null | undefined): LanguageDefinition {
  if (id && isValidLanguageId(id)) return LANGUAGE_MAP[id];
  return LANGUAGE_MAP[DEFAULT_LANGUAGE_ID];
}
