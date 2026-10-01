// Word-reference audit (AGENT_PRECAUTIONS §5.5, extended by the Thinking Method
// upgrade §8): every word_ids / table_word_ids entry must resolve against the
// compendium, and every German token in the new authored surfaces — transcribe
// (target_answer + word_bank), twist (target_answer + word_bank), literal_gloss
// (german) — must resolve against the compendium, a vocab_hint, or the closed
// function-word list below. Run: bun scripts/audit-word-refs.ts

import { LESSONS } from "../src/data/lessons";
import compendiumJson from "../src/data/compendium.json";

const words = (compendiumJson as { words: Record<string, { target_word: string }> }).words;

const compendiumIds = new Set(Object.keys(words));
const compendiumTargets = new Set(Object.values(words).map((w) => w.target_word.toLowerCase()));

// Closed-class function words + formula words the trail uses as glue (articles,
// pronouns, prepositions, contractions, greetings). Every entry is either a
// vocab_hint somewhere on the trail or a function word no lesson "teaches".
const FUNCTION_WORDS = new Set(
  [
    "ich", "du", "er", "sie", "es", "wir", "ihr",
    "mich", "dir", "mir", "ihm", "ihnen",
    "der", "die", "das", "den", "dem", "ein", "eine", "einen", "einem", "einer",
    "kein", "keine", "keinen", "mein", "meine", "meinen", "dein", "deine",
    "ist", "bin", "bist", "sind", "war", "waren", "hat", "habe", "haben", "hatte",
    "gibt", "und", "oder", "aber", "weil", "dass", "wenn", "als", "wie",
    "nicht", "ja", "nein", "bitte", "danke", "sehr", "gut", "hier",
    "in", "an", "auf", "aus", "bei", "mit", "nach", "von", "zu", "zum", "zur", "vor",
    "durch", "über", "unter", "ohne", "für",
    "morgen", "heute", "gestern", "früh", "drei", "zwei", "zwölf", "eins",
    "was", "wo", "wer", "wann", "warum", "wohin",
    "Guten", "Gute", "Danke",
  ].map((w) => w.toLowerCase())
);

// vocab hints anywhere on the trail count as introduced words
const hintedWords = new Set<string>();
for (const lesson of LESSONS) {
  for (const ex of lesson.exercises) {
    for (const hint of ex.vocab_hints ?? []) hintedWords.add(hint.word.toLowerCase());
  }
}

function stemOf(id: string): string {
  // crude verb stem: trinken → trink, machen → mach, sagen → sag
  if (id.length > 4 && id.endsWith("en")) return id.slice(0, -2);
  if (id.length > 3 && id.endsWith("n")) return id.slice(0, -1);
  return id;
}

const stems = new Set<string>();
for (const id of compendiumIds) stems.add(stemOf(id));

// Inflected forms whose letters drift too far from the stem for prefix matching:
// du-forms with vowel change (kannst, willst, hilft, hast), ablaut participles
// (gefunden, fand), and the separable-prefix verb stehen (only aufstehen is on
// the trail). Each maps to a lemma that must itself resolve.
const RESOLVED_FORMS: Record<string, string> = {
  kannst: "können", kann: "können",
  willst: "wollen",
  hast: "haben",
  hilft: "helfen", hilf: "helfen",
  gefunden: "finden", fand: "finden",
  gegessen: "essen",
  stehe: "aufstehen", steht: "aufstehen",
  genommen: "nehmen", gibst: "geben",
};

function resolveLemma(lemma: string): boolean {
  const l = lemma.toLowerCase();
  return compendiumIds.has(l) || compendiumTargets.has(l);
}

const foldUmlauts = (s: string) => s.replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "ss");

function resolves(token: string): boolean {
  const raw = token.toLowerCase().replace(/[.,!?;:]+$/, "");
  if (!raw) return true;
  if (FUNCTION_WORDS.has(raw)) return true;
  if (RESOLVED_FORMS[raw]) return resolveLemma(RESOLVED_FORMS[raw]);
  if (compendiumIds.has(raw) || compendiumTargets.has(raw)) return true;
  if (hintedWords.has(raw)) return true;
  // past participles: ge- + stem + t/en (gelernt, gegessen, gekommen)
  const geStripped = raw.startsWith("ge") && raw.length > 4 ? raw.slice(2) : raw;
  if (geStripped !== raw && (compendiumIds.has(geStripped) || compendiumTargets.has(geStripped))) return true;
  // inflected form of a compendium word: trinke/machst contain the stem
  const t = foldUmlauts(raw);
  const foldedStems = new Set([...stems].map(foldUmlauts));
  const t2 = foldUmlauts(geStripped);
  if (t.length >= 3 && foldedStems.has(t)) return true;
  if (t2.length >= 3 && foldedStems.has(t2)) return true;
  for (const s of foldedStems) {
    if (s.length >= 3 && (t.startsWith(s) || t2.startsWith(s))) return true;
  }
  return false;
}

function germanTokens(s: string): string[] {
  return s.split(/[\s—]+/).map((t) => t.replace(/[.,!?;:]+$/, "")).filter(Boolean);
}

const misses: { lesson: number; where: string; token: string }[] = [];

for (const lesson of LESSONS) {
  for (const wid of [...lesson.word_ids, ...lesson.table_word_ids]) {
    if (!compendiumIds.has(wid.toLowerCase())) {
      misses.push({ lesson: lesson.id, where: "word_ids/table_word_ids", token: wid });
    }
  }
  for (const ex of lesson.exercises) {
    if (ex.type === "transcribe") {
      for (const t of germanTokens(ex.target_answer)) {
        if (!resolves(t)) misses.push({ lesson: lesson.id, where: `transcribe ${ex.id} answer`, token: t });
      }
      for (const chip of ex.word_bank ?? []) {
        if (!resolves(chip)) misses.push({ lesson: lesson.id, where: `transcribe ${ex.id} bank`, token: chip });
      }
    }
    if (ex.type === "literal_gloss" && ex.german) {
      for (const t of germanTokens(ex.german)) {
        if (!resolves(t)) misses.push({ lesson: lesson.id, where: `literal_gloss ${ex.id} german`, token: t });
      }
    }
  }
  if (lesson.twist) {
    for (const t of germanTokens(lesson.twist.target_answer)) {
      if (!resolves(t)) misses.push({ lesson: lesson.id, where: "twist answer", token: t });
    }
    for (const chip of lesson.twist.word_bank ?? []) {
      if (!resolves(chip)) misses.push({ lesson: lesson.id, where: "twist bank", token: chip });
    }
  }
}

if (misses.length === 0) {
  console.log("✓ all word references resolve (word_ids, table_word_ids, transcribe, twist, literal_gloss)");
} else {
  console.log(`✗ ${misses.length} unresolved word references:`);
  for (const m of misses) console.log(`  lesson ${m.lesson} · ${m.where} · "${m.token}"`);
  process.exit(1);
}
