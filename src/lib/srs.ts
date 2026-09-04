// ponytail: standard SM-2 algorithm with word-level isolation

import type { SRSCard, WordEntity } from "./types";

export type ReviewGrade = 1 | 3 | 4 | 5; // 1 = Again, 3 = Hard, 4 = Good, 5 = Easy

export function createInitialCard(word_id: string): SRSCard {
  return {
    word_id,
    interval: 0,
    repetitions: 0,
    ease_factor: 2.5,
    due_date: new Date().toISOString().split("T")[0],
    lapses: 0,
    last_reviewed: null,
  };
}

export function gradeCard(card: SRSCard, grade: ReviewGrade, now = new Date()): SRSCard {
  let { interval, repetitions, ease_factor, lapses } = card;

  if (grade < 3) {
    // Failure (Again)
    repetitions = 0;
    interval = 1;
    lapses += 1;
  } else {
    // Success (Hard, Good, Easy)
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * ease_factor);
    }
    repetitions += 1;

    // SM-2 Ease Factor formula
    ease_factor = ease_factor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
    if (ease_factor < 1.3) ease_factor = 1.3;
  }

  // Calculate next due date
  const nextDue = new Date(now.getTime());
  nextDue.setDate(nextDue.getDate() + interval);
  const due_date = nextDue.toISOString().split("T")[0];

  return {
    ...card,
    interval,
    repetitions,
    ease_factor: Number(ease_factor.toFixed(2)),
    due_date,
    lapses,
    last_reviewed: now.toISOString(),
  };
}

export function isMastered(card: SRSCard): boolean {
  // Mastery criteria: at least 3 successful consecutive reviews without current lapse
  return card.repetitions >= 3 && card.interval >= 7;
}

export function getDueCards(cards: Record<string, SRSCard>, today = new Date().toISOString().split("T")[0]): SRSCard[] {
  return Object.values(cards).filter((c) => c.due_date <= today);
}

export function getWeakestCards(cards: Record<string, SRSCard>, limit = 15): SRSCard[] {
  return Object.values(cards)
    .filter((c) => c.lapses > 0)
    .sort((a, b) => b.lapses - a.lapses)
    .slice(0, limit);
}

export function getCardsByShift(
  cards: Record<string, SRSCard>,
  words: Record<string, WordEntity>,
  shiftId: string
): SRSCard[] {
  return Object.values(cards).filter((c) => {
    const word = words[c.word_id];
    return word && word.sound_shift_ids.includes(shiftId);
  });
}
