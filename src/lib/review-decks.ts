// Pure helpers for building review decks: what counts as "learned", which words
// came from the lessons you actually finished, and how to scope/size a session.

import type { Lesson, MasteryState, SRSCard } from "./types";
import { shuffleArray } from "./review-modes";

/** Which words a scoped deck (shift family / domain) should include. */
export type LearnedFilter = "all" | "learned" | "new";

/** Session size choices; 0 = the whole deck. */
export const SESSION_SIZES = [10, 20, 50, 0] as const;
export type SessionSize = (typeof SESSION_SIZES)[number];

/**
 * A word is "learned" once a lesson showed it or you reviewed it.
 * `explored` (e.g. peeked at in the atlas) does not count as learned.
 */
export function isWordLearned(
  wordId: string,
  wordMastery: Record<string, MasteryState>,
  srsCards: Record<string, SRSCard>
): boolean {
  const m = wordMastery[wordId];
  return m === "encountered" || m === "mastered" || Boolean(srsCards[wordId]?.last_reviewed);
}

export function filterByLearned<T extends { id: string }>(
  words: T[],
  filter: LearnedFilter,
  wordMastery: Record<string, MasteryState>,
  srsCards: Record<string, SRSCard>
): T[] {
  if (filter === "all") return words;
  return words.filter((w) => isWordLearned(w.id, wordMastery, srsCards) === (filter === "learned"));
}

/**
 * Word ids taught by the most recently completed lessons (newest first).
 * `completedLessons` is in completion order, so the tail is the most recent.
 */
export function getRecentLessonWordIds(
  lessons: Lesson[],
  completedLessons: number[],
  lessonCount = 3,
  validIds?: Set<string>
): string[] {
  const byId = new Map(lessons.map((l) => [l.id, l]));
  const ids: string[] = [];
  const seen = new Set<string>();
  for (const lessonId of completedLessons.slice(-lessonCount).reverse()) {
    for (const wid of byId.get(lessonId)?.word_ids ?? []) {
      if (seen.has(wid) || (validIds && !validIds.has(wid))) continue;
      seen.add(wid);
      ids.push(wid);
    }
  }
  return ids;
}

/** Most overdue first, then lowest ease (hardest) first. */
export function sortDueCards(cards: SRSCard[]): SRSCard[] {
  return [...cards].sort(
    (a, b) => a.due_date.localeCompare(b.due_date) || a.ease_factor - b.ease_factor
  );
}

/**
 * Words that are actually hard: lapses first, then "I guessed" answers,
 * then low ease. Includes guessed-but-never-lapsed words, which the plain
 * lapses filter missed.
 */
export function rankWeakestCards(cards: Record<string, SRSCard>, limit = 15): SRSCard[] {
  return Object.values(cards)
    .filter((c) => c.lapses > 0 || (c.guessed ?? 0) > 0)
    .sort(
      (a, b) =>
        b.lapses - a.lapses ||
        (b.guessed ?? 0) - (a.guessed ?? 0) ||
        a.ease_factor - b.ease_factor
    )
    .slice(0, limit);
}

/** Shuffle (optional) and cap a deck to the chosen session size. */
export function prepareSession<T>(cards: T[], size: SessionSize, shuffle: boolean): T[] {
  const ordered = shuffle ? shuffleArray(cards) : cards;
  return size > 0 ? ordered.slice(0, size) : ordered;
}
