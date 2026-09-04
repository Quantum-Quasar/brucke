import { describe, it, expect } from "vitest";
import { createInitialCard, gradeCard, isMastered, getDueCards, getWeakestCards } from "../lib/srs";

describe("SM-2 Spaced Repetition Engine", () => {
  it("initializes a card due today", () => {
    const card = createInitialCard("hoffen");
    expect(card.word_id).toBe("hoffen");
    expect(card.interval).toBe(0);
    expect(card.repetitions).toBe(0);
    expect(card.ease_factor).toBe(2.5);
    expect(card.lapses).toBe(0);
  });

  it("calculates correct progression for successful reviews (Good / Easy)", () => {
    let card = createInitialCard("hoffen");
    const today = new Date("2026-09-05");

    // 1st review (Good = 4)
    card = gradeCard(card, 4, today);
    expect(card.repetitions).toBe(1);
    expect(card.interval).toBe(1);

    // 2nd review (Good = 4)
    const day2 = new Date("2026-09-06");
    card = gradeCard(card, 4, day2);
    expect(card.repetitions).toBe(2);
    expect(card.interval).toBe(6);

    // 3rd review (Good = 4)
    const day8 = new Date("2026-09-12");
    card = gradeCard(card, 4, day8);
    expect(card.repetitions).toBe(3);
    expect(card.interval).toBeGreaterThanOrEqual(14);
    expect(isMastered(card)).toBe(true);
  });

  it("resets interval and increments lapses on failure (Again = 1)", () => {
    let card = createInitialCard("helfen");
    card = gradeCard(card, 4); // Rep 1
    card = gradeCard(card, 4); // Rep 2

    // Lapse
    card = gradeCard(card, 1);
    expect(card.repetitions).toBe(0);
    expect(card.interval).toBe(1);
    expect(card.lapses).toBe(1);
    expect(isMastered(card)).toBe(false);
  });

  it("filters due cards and weakest cards accurately", () => {
    const cards = {
      hoffen: { ...createInitialCard("hoffen"), due_date: "2026-09-04", lapses: 1 },
      helfen: { ...createInitialCard("helfen"), due_date: "2026-09-05", lapses: 3 },
      schlafen: { ...createInitialCard("schlafen"), due_date: "2026-09-10", lapses: 0 },
    };

    const dueToday = getDueCards(cards, "2026-09-05");
    expect(dueToday.length).toBe(2);
    expect(dueToday.map((c) => c.word_id)).toContain("hoffen");
    expect(dueToday.map((c) => c.word_id)).toContain("helfen");

    const weakest = getWeakestCards(cards);
    expect(weakest[0].word_id).toBe("helfen");
    expect(weakest[1].word_id).toBe("hoffen");
  });
});
