import compendium from "../data/compendium.json";
import { lemmatizeEnglish } from "./lemmatizer";
import type { CompendiumData, WordEntity, CompoundCalque, FalseFriend } from "./types";

const data = compendium as unknown as CompendiumData;

export interface BridgeResponse {
  type: "bridge";
  englishQuery: string;
  latinOrigin: string;
  germanTranslation: string;
  gender: string | null;
  etymologicalBridge: string;
  suggestedGermanicWords: string[];
}

export interface MatchResponse {
  type: "match";
  word: WordEntity;
  matchedVia: "english" | "german" | "lemma" | "shift_heuristic";
  shiftedFrom?: string;
  compound?: CompoundCalque;
  falseFriend?: FalseFriend;
}

export type DecoderResult = MatchResponse | BridgeResponse | { type: "no_match"; query: string };

// Curated Latin / French bridge list
const LATIN_BRIDGES: Record<string, Omit<BridgeResponse, "type" | "englishQuery">> = {
  beautiful: {
    latinOrigin: "Latin bellus / Old French beauté",
    germanTranslation: "schön",
    gender: null,
    etymologicalBridge: 'German uses "schön" — which IS anciently cognate with English "sheen" (radiant / shining)! ✨',
    suggestedGermanicWords: ["water", "think", "brother", "hope"],
  },
  beauty: {
    latinOrigin: "Latin bellus / Old French beauté",
    germanTranslation: "die Schönheit",
    gender: "die",
    etymologicalBridge: 'Formed from "schön" + abstract noun suffix "-heit" (English "-hood" as in childhood).',
    suggestedGermanicWords: ["water", "apple", "day"],
  },
  hospital: {
    latinOrigin: "Latin hospitale (place for guests)",
    germanTranslation: "das Krankenhaus",
    gender: "das",
    etymologicalBridge: 'German avoided Latin obfuscation and built the transparent compound "das Krankenhaus" ("sick-people house")!',
    suggestedGermanicWords: ["house", "water", "bed"],
  },
  city: {
    latinOrigin: "Latin civitas / Old French cité",
    germanTranslation: "die Stadt",
    gender: "die",
    etymologicalBridge: 'German uses "die Stadt", an exact cognate with English "stead" (as in homestead or "in its stead") with the D→T shift!',
    suggestedGermanicWords: ["street", "house", "garden"],
  },
  important: {
    latinOrigin: "Latin importare (to carry into / matter)",
    germanTranslation: "wichtig",
    gender: null,
    etymologicalBridge: 'German uses "wichtig", descending from "Gewicht" (weight). It literally means "weighty"!',
    suggestedGermanicWords: ["word", "thing", "good"],
  },
  conversation: {
    latinOrigin: "Latin conversatio",
    germanTranslation: "das Gespräch",
    gender: "das",
    etymologicalBridge: 'German created "das Gespräch" directly from the verb "sprechen" (to speak) using the collective ge- prefix and the K→CH shift!',
    suggestedGermanicWords: ["speak", "word", "listen"],
  },
  library: {
    latinOrigin: "Latin librarium (book collection)",
    germanTranslation: "die Bibliothek / die Bücherei",
    gender: "die",
    etymologicalBridge: 'German uses "die Bücherei" — built directly from "Buch" (book, with K→CH shift) + "-ei" place suffix!',
    suggestedGermanicWords: ["book", "read", "write"],
  },
  language: {
    latinOrigin: "Latin lingua / French langage",
    germanTranslation: "die Sprache",
    gender: "die",
    etymologicalBridge: 'German uses "die Sprache", derived directly from "sprechen" (to speak) via the K→CH sound shift.',
    suggestedGermanicWords: ["speak", "word", "hear"],
  },
  peace: {
    latinOrigin: "Latin pax / French pais",
    germanTranslation: "der Frieden",
    gender: "der",
    etymologicalBridge: 'German "der Frieden" shares the ancient Germanic root *frijaz with English "free" and "friend"!',
    suggestedGermanicWords: ["free", "friend", "love"],
  },
  people: {
    latinOrigin: "Latin populus / French peuple",
    germanTranslation: "das Volk / die Leute",
    gender: "das",
    etymologicalBridge: '"das Volk" is the exact cognate of English "folk"! "die Leute" connects to archaic English "leod" (people).',
    suggestedGermanicWords: ["brother", "daughter", "child"],
  },
  danger: {
    latinOrigin: "Old French dangier / Latin dominium",
    germanTranslation: "die Gefahr",
    gender: "die",
    etymologicalBridge: '"die Gefahr" comes from the Germanic root *faraną (to travel/fare) — danger is what you encounter on the road (cf. "wayfarer")!',
    suggestedGermanicWords: ["way", "go", "fear"],
  },
  mountain: {
    latinOrigin: "Latin montem / French montagne",
    germanTranslation: "der Berg",
    gender: "der",
    etymologicalBridge: 'German uses "der Berg", which survives in English as "iceberg" (ice mountain) and "barrow" (hill)!',
    suggestedGermanicWords: ["ice", "stone", "water"],
  },
  question: {
    latinOrigin: "Latin quaestio",
    germanTranslation: "die Frage",
    gender: "die",
    etymologicalBridge: '"die Frage" comes from "fragen" (to ask), cognate with archaic English "frain" (to question).',
    suggestedGermanicWords: ["speak", "say", "think"],
  },
};

export function decodeWord(rawInput: string): DecoderResult {
  if (!rawInput || !rawInput.trim()) {
    return { type: "no_match", query: "" };
  }

  const input = rawInput.trim().toLowerCase();
  const lemma = lemmatizeEnglish(input);

  // 1. Direct match on German word
  if (data.words[input]) {
    return {
      type: "match",
      word: data.words[input],
      matchedVia: "german",
    };
  }

  // 2. Direct match on English cognate (raw input or lemma)
  const englishMatch = data.wordList.find(
    (w) => w.english_cognate.toLowerCase() === input || w.english_meaning.toLowerCase() === input || w.english_cognate.toLowerCase() === lemma || w.english_meaning.toLowerCase() === lemma
  );
  if (englishMatch) {
    return {
      type: "match",
      word: englishMatch,
      matchedVia: input === lemma ? "english" : "lemma",
      shiftedFrom: input !== englishMatch.english_cognate ? input : undefined,
    };
  }

  // 3. Match in Compounds (e.g. refrigerator -> Kühlschrank, glove -> Handschuh)
  const compoundMatch = data.compounds.find(
    (c) =>
      c.compound.toLowerCase().includes(input) ||
      c.real_meaning.toLowerCase().includes(input) ||
      c.english_counterpart.toLowerCase().includes(input) ||
      c.real_meaning.toLowerCase().includes(lemma) ||
      c.english_counterpart.toLowerCase().includes(lemma)
  );
  if (compoundMatch) {
    // Check if we have a word entity for it
    const baseWord = data.words[compoundMatch.id] || {
      id: compoundMatch.id,
      target_word: compoundMatch.compound,
      english_cognate: compoundMatch.english_counterpart,
      english_meaning: compoundMatch.real_meaning,
      gender: compoundMatch.gender,
      ipa: "/ˌkɔmpoʊnd/",
      sound_shift_ids: [],
      shift_rule: `Compound Calque: ${compoundMatch.literal_morphemes}`,
      context_phrase: `${compoundMatch.compound} ist nützlich.`,
      context_translation: `${compoundMatch.real_meaning} is useful.`,
      etymology_derivation: compoundMatch.lore,
    };
    return {
      type: "match",
      word: baseWord,
      matchedVia: "english",
      compound: compoundMatch,
    };
  }

  // 4. Match in False Friends (e.g. gift, chef, actual)
  const falseFriendMatch = data.falseFriends.find(
    (f) => f.looks_like.toLowerCase().includes(input) || f.german_word.toLowerCase().includes(input) || f.looks_like.toLowerCase().includes(lemma)
  );
  if (falseFriendMatch) {
    const baseWord = data.words[falseFriendMatch.id] || {
      id: falseFriendMatch.id,
      target_word: falseFriendMatch.german_word,
      english_cognate: falseFriendMatch.looks_like,
      english_meaning: falseFriendMatch.actual_meaning,
      gender: null,
      ipa: "/ˌfalʃɐ ˈfʁɔɪndə/",
      sound_shift_ids: [],
      shift_rule: `False Friend Alert (Looks like "${falseFriendMatch.looks_like}")`,
      context_phrase: `Achtung: ${falseFriendMatch.german_word} bedeutet "${falseFriendMatch.actual_meaning}".`,
      context_translation: `Warning: ${falseFriendMatch.german_word} means "${falseFriendMatch.actual_meaning}".`,
      etymology_derivation: falseFriendMatch.trap_note,
    };
    return {
      type: "match",
      word: baseWord,
      matchedVia: "english",
      falseFriend: falseFriendMatch,
    };
  }

  // 5. Latinate Bridge Fallback
  if (LATIN_BRIDGES[input] || LATIN_BRIDGES[lemma]) {
    const bridge = LATIN_BRIDGES[input] || LATIN_BRIDGES[lemma];
    return {
      type: "bridge",
      englishQuery: input,
      ...bridge,
    };
  }

  // 6. Substring / multi-word search in 218 words
  const queryTokens = lemma.split(/\s+/);
  const partial = data.wordList.find((w) => {
    const cog = w.english_cognate.toLowerCase();
    const mean = w.english_meaning.toLowerCase();
    return (
      (lemma.length >= 3 && cog.includes(lemma)) ||
      (lemma.length >= 3 && mean.includes(lemma)) ||
      queryTokens.includes(cog) ||
      queryTokens.includes(mean)
    );
  });
  if (partial) {
    return {
      type: "match",
      word: partial,
      matchedVia: "shift_heuristic",
      shiftedFrom: input,
    };
  }

  return { type: "no_match", query: input };
}
