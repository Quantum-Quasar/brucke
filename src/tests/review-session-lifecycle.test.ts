import { describe, it, expect, beforeEach, beforeAll, afterAll } from "vitest";
import { useAppStore } from "../lib/store";
import { compendium } from "../data/compendium";
import { createInitialCard, gradeCard, isMastered, getDueCards, getWeakestCards, getCardsByShift } from "../lib/srs";
import type { ReviewGrade } from "../lib/srs";
import type { WordEntity } from "../lib/types";

class LocalStorageMock {
  private store: Record<string, string> = {};
  getItem(key: string) {
    return this.store[key] || null;
  }
  setItem(key: string, value: string) {
    this.store[key] = String(value);
  }
  removeItem(key: string) {
    delete this.store[key];
  }
  clear() {
    this.store = {};
  }
}

describe("Full Review Session Lifecycle Integration", () => {
  beforeAll(() => {
    const mockStorage = new LocalStorageMock();
    (globalThis as any).window = globalThis;
    (globalThis as any).localStorage = mockStorage;
    (globalThis as any).document = { cookie: "" };
  });

  afterAll(() => {
    delete (globalThis as any).window;
    delete (globalThis as any).localStorage;
    delete (globalThis as any).document;
  });

  beforeEach(() => {
    (globalThis as any).localStorage.clear();
    (globalThis as any).document.cookie = "";
    useAppStore.getState().resetProgress();
  });

  it("assembles review decks by category and links each card to a valid Compendium entity", () => {
    const store = useAppStore.getState();

    // Seed cards for multiple words across different shift families
    const seedWords = ["hand", "wasser", "bruder", "hoffen", "machen"];
    for (const id of seedWords) {
      store.markWordEncountered(id);
    }

    const currentState = useAppStore.getState();
    const cards = currentState.srsCards;
    expect(Object.keys(cards)).toHaveLength(5);

    // 1. Due Deck: All newly seeded cards are due today
    const dueCards = getDueCards(cards);
    expect(dueCards.length).toBe(5);
    for (const card of dueCards) {
      const entity = compendium.words[card.word_id];
      expect(entity).toBeDefined();
      expect(entity.target_word).toBeTruthy();
    }

    // 2. Sound Shift Deck: Filter by th_to_d (should include Bruder)
    const dentalShiftCards = getCardsByShift(cards, compendium.words, "th_to_d");
    expect(dentalShiftCards.length).toBeGreaterThanOrEqual(1);
    expect(dentalShiftCards.some((c) => c.word_id === "bruder")).toBe(true);

    // 3. Weakest Deck: Seed a lapse and verify sorting
    store.recordReview("wasser", 1); // Grade 1 = Again (failure)
    const afterLapseState = useAppStore.getState();
    const weakestCards = getWeakestCards(afterLapseState.srsCards);
    expect(weakestCards.length).toBeGreaterThanOrEqual(1);
    expect(weakestCards[0].word_id).toBe("wasser");
    expect(weakestCards[0].lapses).toBe(1);
  });

  it("simulates a multi-card session tracking grade effects, intervals, and mastery transitions", () => {
    const store = useAppStore.getState();
    const wordId = "apfel";

    // Start with an unexplored word
    expect(store.wordMastery[wordId] || "unexplored").toBe("unexplored");

    // Card 1 Review: Grade 1 (Again/Fail)
    store.recordReview(wordId, 1);
    let state = useAppStore.getState();
    let card = state.srsCards[wordId];
    expect(card).toBeDefined();
    expect(card.repetitions).toBe(0);
    expect(card.lapses).toBe(1);
    expect(card.interval).toBe(1);
    expect(state.wordMastery[wordId]).toBe("encountered");
    expect(isMastered(card)).toBe(false);

    // Card 2 Review: Grade 3 (Hard)
    store.recordReview(wordId, 3);
    state = useAppStore.getState();
    card = state.srsCards[wordId];
    expect(card.repetitions).toBe(1);
    expect(card.interval).toBe(1);
    expect(card.ease_factor).toBeLessThan(2.5); // Ease decreases on Hard
    expect(state.wordMastery[wordId]).toBe("encountered");
    expect(isMastered(card)).toBe(false);

    // Card 3 Review: Grade 4 (Good)
    store.recordReview(wordId, 4);
    state = useAppStore.getState();
    card = state.srsCards[wordId];
    expect(card.repetitions).toBe(2);
    expect(card.interval).toBe(6); // Second successful interval is 6 days
    expect(state.wordMastery[wordId]).toBe("encountered");
    expect(isMastered(card)).toBe(false);

    // Card 4 Review: Grade 5 (Easy) -> Triggers Mastery
    store.recordReview(wordId, 5);
    state = useAppStore.getState();
    card = state.srsCards[wordId];
    expect(card.repetitions).toBe(3);
    expect(card.interval).toBeGreaterThanOrEqual(7);
    expect(isMastered(card)).toBe(true);
    expect(state.wordMastery[wordId]).toBe("mastered");
  });

  it("calculates session statistics and persists daily activity marks", () => {
    const store = useAppStore.getState();
    const sessionWords = ["tag", "zeit", "buch", "trinken", "besser"];

    // Seed session words
    for (const id of sessionWords) {
      store.markWordEncountered(id);
    }

    const grades: ReviewGrade[] = [4, 4, 1, 5, 4]; // 4 success, 1 failure
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < sessionWords.length; i++) {
      const grade = grades[i];
      store.recordReview(sessionWords[i], grade);
      if (grade >= 3) {
        successCount++;
      } else {
        failCount++;
      }
    }

    expect(successCount).toBe(4);
    expect(failCount).toBe(1);
    const accuracy = Math.round((successCount / sessionWords.length) * 100);
    expect(accuracy).toBe(80);

    // Verify weekly activity logged
    const finalState = useAppStore.getState();
    const todayDay = new Date().getDay();
    const activeDayIdx = todayDay === 0 ? 6 : todayDay - 1;
    expect(finalState.weeklyActivity[activeDayIdx]).toBe(true);
  });

  it("handles empty decks and full queue completion gracefully", () => {
    const store = useAppStore.getState();

    // Empty state: no cards scheduled
    const emptyCards = store.srsCards;
    const due = getDueCards(emptyCards);
    expect(due).toEqual([]);

    // Single card queue completion
    store.markWordEncountered("nacht");
    const singleQueue = getDueCards(useAppStore.getState().srsCards);
    expect(singleQueue).toHaveLength(1);

    // Process and push due date into future
    store.recordReview("nacht", 4);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const todayStr = new Date().toISOString().split("T")[0];

    const remainingDue = getDueCards(useAppStore.getState().srsCards, todayStr);
    expect(remainingDue).toHaveLength(0); // Deck is now 100% complete for today
  });
});
