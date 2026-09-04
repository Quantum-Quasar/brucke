// ponytail: lean, deterministic review helpers for MCQ distractors and tile morphemes

import type { WordEntity } from "./types";

/**
 * In-place Fisher-Yates array shuffle returning a new shuffled array copy.
 */
export function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Generate 4 multiple-choice options for a given target word.
 * Prioritizes words from the same sound shift family as realistic distractors.
 */
export function generateMCQOptions(
  targetWord: WordEntity,
  allWords: WordEntity[],
  count: number = 4
): string[] {
  const target = targetWord.target_word;
  const distractors: string[] = [];

  // 1. Same sound shift family words first (best linguistic distractors)
  const sameShift = allWords.filter(
    (w) =>
      w.target_word.toLowerCase() !== target.toLowerCase() &&
      w.sound_shift_ids &&
      targetWord.sound_shift_ids &&
      w.sound_shift_ids.some((id) => targetWord.sound_shift_ids.includes(id))
  );

  for (const w of shuffleArray(sameShift)) {
    if (!distractors.includes(w.target_word)) {
      distractors.push(w.target_word);
      if (distractors.length >= count - 1) break;
    }
  }

  // 2. Fill with other words if we don't have enough same-shift words
  if (distractors.length < count - 1) {
    const remaining = allWords.filter(
      (w) =>
        w.target_word.toLowerCase() !== target.toLowerCase() &&
        !distractors.includes(w.target_word)
    );
    for (const w of shuffleArray(remaining)) {
      distractors.push(w.target_word);
      if (distractors.length >= count - 1) break;
    }
  }

  return shuffleArray([target, ...distractors.slice(0, count - 1)]);
}

/**
 * Splits a German word into 2-3 morpheme/syllable tiles and provides 1-2 distractor tiles.
 */
export function generateWordTiles(
  targetWord: WordEntity,
  _allWords?: WordEntity[]
): {
  tiles: string[];
  targetChunks: string[];
  targetAnswer: string;
} {
  const word = targetWord.target_word;
  let targetChunks: string[] = [];

  // Syllable / morpheme splitting tailored to German phonotactics
  if (word.length <= 3) {
    targetChunks = [word.slice(0, 1), word.slice(1)];
  } else if (word.endsWith("en") && word.length >= 5) {
    targetChunks = [word.slice(0, -2), "en"];
  } else if (word.endsWith("el") && word.length >= 5) {
    targetChunks = [word.slice(0, -2), "el"];
  } else if (word.endsWith("er") && word.length >= 5) {
    targetChunks = [word.slice(0, -2), "er"];
  } else if (word.length >= 8) {
    const p1 = Math.floor(word.length / 3);
    const p2 = Math.floor((2 * word.length) / 3);
    targetChunks = [word.slice(0, p1), word.slice(p1, p2), word.slice(p2)];
  } else {
    const mid = Math.ceil(word.length / 2);
    targetChunks = [word.slice(0, mid), word.slice(mid)];
  }

  // Plausible distractors (linguistic suffixes and cognate fragments)
  const distractors: string[] = [];
  const cognate = targetWord.english_cognate ? targetWord.english_cognate.toLowerCase() : "";
  if (cognate && cognate !== word.toLowerCase() && cognate.length >= 3) {
    distractors.push(cognate.slice(-2));
  }

  const commonDistractors = ["st", "ung", "te", "heit", "isch", "ig", "keit"];
  for (const d of commonDistractors) {
    if (!targetChunks.includes(d) && !distractors.includes(d)) {
      distractors.push(d);
      if (distractors.length >= 2) break;
    }
  }

  const allTiles = shuffleArray([...targetChunks, ...distractors.slice(0, 2)]);
  return {
    tiles: allTiles,
    targetChunks,
    targetAnswer: word,
  };
}
