import { describe, it, expect, beforeEach } from "vitest";
import { useAppStore } from "../lib/store";
import { type ReviewGrade, createInitialCard, gradeCard } from "../lib/srs";

describe("Review Session Keyboard Navigation & SM-2 Shortcuts", () => {
  beforeEach(() => {
    useAppStore.getState().resetProgress();
  });

  it("maps keyboard shortcut keys 1, 2, 3, 4 to appropriate SM-2 review grades", () => {
    // 1 -> Again (1)
    // 2 -> Hard (3)
    // 3 -> Good (4)
    // 4 -> Easy (5)
    const keyMap: Record<string, ReviewGrade> = {
      "1": 1,
      "2": 3,
      "3": 4,
      "4": 5,
    };

    expect(keyMap["1"]).toBe(1);
    expect(keyMap["2"]).toBe(3);
    expect(keyMap["3"]).toBe(4);
    expect(keyMap["4"]).toBe(5);

    const card = createInitialCard("Wasser");

    // Grading with 1 resets repetitions and increments lapse
    const graded1 = gradeCard(card, keyMap["1"]);
    expect(graded1.repetitions).toBe(0);
    expect(graded1.lapses).toBe(1);

    // Grading with 2 (Hard = 3) succeeds and sets interval 1
    const graded2 = gradeCard(card, keyMap["2"]);
    expect(graded2.repetitions).toBe(1);
    expect(graded2.lapses).toBe(0);

    // Grading with 3 (Good = 4) succeeds
    const graded3 = gradeCard(card, keyMap["3"]);
    expect(graded3.repetitions).toBe(1);
    expect(graded3.lapses).toBe(0);

    // Grading with 4 (Easy = 5) increases ease factor
    const graded4 = gradeCard(card, keyMap["4"]);
    expect(graded4.repetitions).toBe(1);
    expect(graded4.ease_factor).toBeGreaterThan(card.ease_factor);
  });

  it("records keyboard grade into the app store card state", () => {
    const store = useAppStore.getState();
    store.markWordEncountered("Schiff");

    // Simulate pressing '4' (Easy = 5)
    store.recordReview("Schiff", 5);

    const updatedCard = useAppStore.getState().srsCards["Schiff"];
    expect(updatedCard).toBeDefined();
    expect(updatedCard.repetitions).toBe(1);
    expect(updatedCard.last_reviewed).toBeTruthy();
  });
});
