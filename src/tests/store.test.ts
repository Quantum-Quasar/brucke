import { describe, it, expect, beforeEach, beforeAll, afterAll } from "vitest";
import { useAppStore, STORAGE_KEY, STORAGE_COOKIE_KEY, getCookie, setCookie } from "../lib/store";

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

describe("App Store & User Progress State", () => {
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

  it("persists progress to both localStorage and local cookies", () => {
    const store = useAppStore.getState();
    store.completeLesson(1);
    store.markWordMastered("Wasser");

    // Check localStorage
    const localRaw = localStorage.getItem(STORAGE_KEY);
    expect(localRaw).toBeTruthy();
    const parsedLocal = JSON.parse(localRaw!);
    expect(parsedLocal.completedLessons).toContain(1);
    expect(parsedLocal.wordMastery["Wasser"]).toBe("mastered");

    // Check cookie
    const cookieVal = getCookie(STORAGE_COOKIE_KEY);
    expect(cookieVal).toBeTruthy();
    const parsedCookie = JSON.parse(cookieVal!);
    expect(parsedCookie.completedLessons).toContain(1);
    expect(parsedCookie.wordMastery["Wasser"]).toBe("mastered");
  });

  it("hydrates from cookie if localStorage is cleared", () => {
    const sampleState = {
      completedLessons: [1, 2],
      currentLessonId: 3,
      wordMastery: { Schiff: "mastered" },
      srsCards: {},
      weeklyActivity: [true, false, false, false, false, false, false],
      tolerance: {
        umlautTolerance: true,
        capitalizationTolerance: false,
        umlautDismissals: 0,
        capitalizationDismissals: 0,
      },
    };
    setCookie(STORAGE_COOKIE_KEY, JSON.stringify(sampleState));
    localStorage.removeItem(STORAGE_KEY);

    useAppStore.getState().hydrateFromStorage();

    const state = useAppStore.getState();
    expect(state.completedLessons).toEqual([1, 2]);
    expect(state.currentLessonId).toBe(3);
    expect(state.wordMastery["Schiff"]).toBe("mastered");
    expect(state.tolerance.umlautTolerance).toBe(true);
  });
});
