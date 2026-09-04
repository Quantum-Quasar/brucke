import { describe, it, expect, beforeEach } from "vitest";
import { useAppStore } from "../lib/store";

describe("App Store & User Progress State", () => {
  beforeEach(() => {
    useAppStore.getState().resetProgress();
  });

  it("initializes with default values", () => {
    const state = useAppStore.getState();
    expect(state.completedLessons).toEqual([]);
    expect(state.currentLessonId).toBe(1);
    expect(state.wordMastery).toEqual({});
    expect(state.tolerance.umlautTolerance).toBe(false);
    expect(state.tolerance.capitalizationTolerance).toBe(false);
  });

  it("transitions mastery states: unexplored -> explored -> encountered -> mastered", () => {
    const store = useAppStore.getState();

    // 1. Explored
    store.markWordExplored("hoffen");
    expect(useAppStore.getState().wordMastery["hoffen"]).toBe("explored");

    // 2. Encountered
    store.markWordEncountered("hoffen");
    expect(useAppStore.getState().wordMastery["hoffen"]).toBe("encountered");
    expect(useAppStore.getState().srsCards["hoffen"]).toBeDefined();

    // Explored should not downgrade encountered
    store.markWordExplored("hoffen");
    expect(useAppStore.getState().wordMastery["hoffen"]).toBe("encountered");

    // 3. Mastered
    store.markWordMastered("hoffen");
    expect(useAppStore.getState().wordMastery["hoffen"]).toBe("mastered");
  });

  it("advances lessons on completion", () => {
    const store = useAppStore.getState();
    store.completeLesson(1);
    expect(useAppStore.getState().completedLessons).toContain(1);
    expect(useAppStore.getState().currentLessonId).toBe(2);
  });

  it("manages independent tolerance settings and dismissal thresholds", () => {
    const store = useAppStore.getState();

    store.setUmlautTolerance(true);
    expect(useAppStore.getState().tolerance.umlautTolerance).toBe(true);
    expect(useAppStore.getState().tolerance.capitalizationTolerance).toBe(false);

    store.dismissUmlautPrompt();
    expect(useAppStore.getState().tolerance.umlautDismissals).toBe(1);

    store.dismissUmlautPrompt();
    expect(useAppStore.getState().tolerance.umlautDismissals).toBe(2);
  });
});
