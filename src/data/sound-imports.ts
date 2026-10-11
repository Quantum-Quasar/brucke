// ponytail: sound import (guidebook §1.4 — "often 'new' sounds are not new at all")
//
// Language Transfer's point: almost every German sound that frightens an English
// speaker is a sound they already make, behaving slightly differently. Teaching
// that halves the cognitive load of pronunciation and hands the freed attention
// back to grammar. The rule here is the guidebook's: name the ENGLISH WORD that
// already contains the sound, never a mouth-position lecture.
//
// Derived from taught IPA in src/data/phonetics.ts and the trail's own letter law.

export interface SoundImport {
  /** the German letter or cluster */
  grapheme: string;
  /** the sound, as the trail writes it */
  sound: string;
  /** the English word that already contains it — the import */
  englishSource: string;
  /** where in the English word the sound sits */
  sourceWord: string;
  /** one honest sentence of what is actually new (usually: it is written differently) */
  whatsNew: string;
  /** topic on the trail where this sound is currently taught */
  taughtIn: number;
}

export const SOUND_IMPORTS: SoundImport[] = [
  {
    grapheme: "w",
    sound: "/v/",
    englishSource: "v",
    sourceWord: "water → the v in 'very'",
    whatsNew: "Nothing at the front of your mouth. The only news is the letter: German writes this sound with a W.",
    taughtIn: 1,
  },
  {
    grapheme: "v",
    sound: "/f/",
    englishSource: "f",
    sourceWord: "Vater → the f in 'father'",
    whatsNew: "German V is the English F sound — Vater is father with the same V-to-F drift you already saw in hope → hoffen.",
    taughtIn: 3,
  },
  {
    grapheme: "z",
    sound: "/ts/",
    englishSource: "ts",
    sourceWord: "zwei → the ts in 'cats'",
    whatsNew: "You already end words with this sound. German lets it start them.",
    taughtIn: 5,
  },
  {
    grapheme: "sch",
    sound: "/ʃ/",
    englishSource: "sh",
    sourceWord: "Schiff → the sh in 'ship'",
    whatsNew: "The same sound, three letters doing it. Nothing new in the mouth.",
    taughtIn: 3,
  },
  {
    grapheme: "ch (soft, after i/e)",
    sound: "/ç/",
    englishSource: "h",
    sourceWord: "ich → the h in 'huge'",
    whatsNew: "The h you already say in 'human' and 'hue' — German gives it its own letter and stops swallowing it.",
    taughtIn: 6,
  },
  {
    grapheme: "ch (hard, after a/o/u)",
    sound: "/x/",
    englishSource: "ck",
    sourceWord: "Buch → the ck in 'loch' (Scots) or the k in 'Bach'",
    whatsNew: "This is the Scottish 'ch'. If you have never said loch, say 'Bock' and push the air without touching your tongue to the roof.",
    taughtIn: 6,
  },
  {
    grapheme: "j",
    sound: "/j/",
    englishSource: "y",
    sourceWord: "ja → the y in 'yes'",
    whatsNew: "German J is English Y. Every other thing about the letter is the surprise.",
    taughtIn: 1,
  },
  {
    grapheme: "ei",
    sound: "/aɪ/",
    englishSource: "i",
    sourceWord: "ein → the i in 'mine'",
    whatsNew: "The letters are in the wrong order for an English reader — that is the entire difficulty.",
    taughtIn: 8,
  },
  {
    grapheme: "ie",
    sound: "/iː/",
    englishSource: "ee",
    sourceWord: "die → the ee in 'see'",
    whatsNew: "German ie is a long E. English 'ie' almost never sounds like this, so read it as 'ee' and move on.",
    taughtIn: 1,
  },
  {
    grapheme: "eu",
    sound: "/ɔʏ/",
    englishSource: "oy",
    sourceWord: "neun → the oy in 'boy'",
    whatsNew: "You already say this in 'boy'. It is just spelled with two vowels here.",
    taughtIn: 16,
  },
  {
    grapheme: "sp- / st- (initial)",
    sound: "/ʃp/ /ʃt/",
    englishSource: "sh",
    sourceWord: "spielen → the shp in 'spit' said with pursed lips",
    whatsNew: "English 'spit' starts with the same shp if you slow it down. German just never dropped the sh.",
    taughtIn: 1,
  },
  {
    grapheme: "ü",
    sound: "/yː/",
    englishSource: "ee",
    sourceWord: "Tür → say 'ee' and round your lips",
    whatsNew: "The one genuinely new sound on the trail. But it is your own 'ee' with a small change of lip shape — not a new muscle.",
    taughtIn: 5,
  },
  {
    grapheme: "ö",
    sound: "/øː/",
    englishSource: "e",
    sourceWord: "schön → say 'e' as in 'bed' and round your lips",
    whatsNew: "Same trick as ü: your own vowel, lips rounded. Two vowels, one habit.",
    taughtIn: 24,
  },
  {
    grapheme: "r (after a vowel)",
    sound: "/ɐ/",
    englishSource: "uh",
    sourceWord: "Tür → the 'uh' in 'duh'",
    whatsNew: "The r you already make when you say 'duh' or 'huh'. German puts one at the end of many words.",
    taughtIn: 5,
  },
];

/** The line rendered on a lesson or a word card: "you already say this — here's where." */
export function importLineFor(sound: SoundImport): string {
  return `You already make this sound: ${sound.englishSource} in ${sound.sourceWord}. ${sound.whatsNew}`;
}
