import { describe, it, expect, beforeAll, afterAll, beforeEach } from "vitest";
import {
  loadSavedState,
  isPlausibleStateObject,
  useAppStore,
  saveState,
  STORAGE_KEY,
  STORAGE_COOKIE_KEY,
} from "../lib/store";

// Persistence boundary contract:
// - a valid-but-incomplete localStorage payload must NOT bury recoverable
//   cookie data (field-level merge, localStorage wins for fields it has)
// - invalid JSON falls back to whichever store parses
// - pre-multi-language payloads migrate into the default language slice
// - importBackupState accepts partial backups and rejects non-objects

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

const WEEK = [true, false, false, false, false, false, false];

/** A lean cookie payload in the exact shape saveState() writes. */
function leanCookie(overrides: Record<string, unknown> = {}) {
  return {
    activeLanguageId: "de",
    progressByLanguage: {
      de: {
        completedLessons: [1, 2, 3],
        currentLessonId: 4,
        lessonProgress: {},
        lessonStars: {},
        wordMastery: { haus: "mastered" },
        srsCards: {},
        weeklyActivity: WEEK,
        lastActivityWeek: undefined,
      },
    },
    completedLessons: [1, 2, 3],
    currentLessonId: 4,
    wordMastery: { haus: "mastered" },
    hasCompletedOnboarding: true,
    hasSeenGenderIntro: true,
    theme: "monokai",
    font: "jetbrains-mono",
    seenIntroLanguages: ["de"],
    ...overrides,
  };
}

describe("Persistence validation & dual-store fallback merging", () => {
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

  describe("isPlausibleStateObject schema guard", () => {
    it("accepts plain objects only", () => {
      expect(isPlausibleStateObject({})).toBe(true);
      expect(isPlausibleStateObject({ completedLessons: [] })).toBe(true);
      expect(isPlausibleStateObject(null)).toBe(false);
      expect(isPlausibleStateObject(undefined)).toBe(false);
      expect(isPlausibleStateObject([])).toBe(false);
      expect(isPlausibleStateObject("state")).toBe(false);
      expect(isPlausibleStateObject(42)).toBe(false);
      expect(isPlausibleStateObject(true)).toBe(false);
    });
  });

  describe("cookie/localStorage fallback merging", () => {
    it("recovers progress from the cookie when localStorage is valid but incomplete", () => {
      // a truncated localStorage save: only appearance settings survived
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ theme: "nord", settings: { lazyMode: true } })
      );
      (globalThis as any).document.cookie = "";
      const cookieJson = JSON.stringify(leanCookie());
      (globalThis as any).document.cookie = `${STORAGE_COOKIE_KEY}=${encodeURIComponent(cookieJson)}`;

      const saved = loadSavedState();

      // cookie data recovered…
      expect(saved.completedLessons).toEqual([1, 2, 3]);
      expect(saved.currentLessonId).toBe(4);
      expect(saved.wordMastery?.["haus"]).toBe("mastered");
      expect(saved.progressByLanguage?.de?.completedLessons).toEqual([1, 2, 3]);
      expect(saved.hasCompletedOnboarding).toBe(true);
      // …and localStorage fields still win for what it actually has
      expect(saved.theme).toBe("nord");
      expect(saved.settings?.lazyMode).toBe(true);
    });

    it("lets localStorage win for fields it has; the cookie only fills gaps", () => {
      // a truncated localStorage save: only appearance settings survived
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ theme: "nord", settings: { lazyMode: true } })
      );
      const cookieJson = JSON.stringify(leanCookie());
      (globalThis as any).document.cookie = `${STORAGE_COOKIE_KEY}=${encodeURIComponent(cookieJson)}`;

      const saved = loadSavedState();
      // localStorage fields win…
      expect(saved.theme).toBe("nord");
      expect(saved.settings?.lazyMode).toBe(true);
      // …cookie fills the missing progress fields
      expect(saved.completedLessons).toEqual([1, 2, 3]);
      expect(saved.wordMastery?.["haus"]).toBe("mastered");
      expect(saved.hasCompletedOnboarding).toBe(true);
    });

    it("falls back to the cookie entirely when localStorage JSON is invalid", () => {
      localStorage.setItem(STORAGE_KEY, "{not valid json");
      const cookieJson = JSON.stringify(leanCookie());
      (globalThis as any).document.cookie = `${STORAGE_COOKIE_KEY}=${encodeURIComponent(cookieJson)}`;

      const saved = loadSavedState();
      expect(saved.completedLessons).toEqual([1, 2, 3]);
      expect(saved.theme).toBe("monokai");
    });

    it("returns an empty state (no throw) when both stores are unreadable", () => {
      localStorage.setItem(STORAGE_KEY, "{oops");
      (globalThis as any).document.cookie = `${STORAGE_COOKIE_KEY}=${encodeURIComponent("{also bad")}`;
      expect(loadSavedState()).toEqual({});
    });
  });

  describe("partial migrations", () => {
    it("migrates a pre-multi-language payload into the default language slice", () => {
      // legacy saves kept progress on the top level with no language fields
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          completedLessons: [4, 5],
          currentLessonId: 6,
          lessonProgress: {},
          lessonStars: {},
          wordMastery: { tag: "encountered" },
          srsCards: {},
          weeklyActivity: WEEK,
        })
      );

      const saved = loadSavedState();
      expect(saved.activeLanguageId).toBe("de");
      expect(saved.progressByLanguage?.de?.completedLessons).toEqual([4, 5]);
      expect(saved.progressByLanguage?.de?.wordMastery).toEqual({ tag: "encountered" });
      // top level mirrors the active slice
      expect(saved.completedLessons).toEqual([4, 5]);
      expect(saved.currentLessonId).toBe(6);
    });

    it("repairs every missing field of a partial payload without throwing", () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme: "nord" }));
      const saved = loadSavedState();
      expect(saved.completedLessons).toEqual([]);
      expect(saved.srsCards).toEqual({});
      expect(saved.wordMastery).toEqual({});
      expect(saved.weeklyActivity).toHaveLength(7);
      expect(saved.activeLanguageId).toBe("de");
      expect(saved.theme).toBe("nord");
    });

    it("repairs a merged cookie+localStorage payload field by field", () => {
      // localStorage kept only srsCards; an older lean cookie kept only the
      // top-level lesson list — the merged payload assembles both halves
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ srsCards: { haus: { word_id: "haus", interval: 1, repetitions: 1, ease_factor: 2.5, due_date: "2026-01-01", lapses: 0, last_reviewed: null } } })
      );
      const { progressByLanguage: _slice, ...leanNoSlice } = leanCookie();
      const cookieJson = JSON.stringify(leanNoSlice);
      (globalThis as any).document.cookie = `${STORAGE_COOKIE_KEY}=${encodeURIComponent(cookieJson)}`;

      const saved = loadSavedState();
      expect(saved.completedLessons).toEqual([1, 2, 3]);
      expect(saved.srsCards?.["haus"]?.interval).toBe(1);
      // the migrated active slice assembles both halves
      expect(saved.progressByLanguage?.de?.srsCards["haus"]?.word_id).toBe("haus");
      expect(saved.progressByLanguage?.de?.completedLessons).toEqual([1, 2, 3]);
    });
  });

  describe("importBackupState partial-backup handling", () => {
    it("rejects non-object payloads", () => {
      expect(useAppStore.getState().importBackupState(null)).toBe(false);
      expect(useAppStore.getState().importBackupState("backup")).toBe(false);
      expect(useAppStore.getState().importBackupState(42)).toBe(false);
      expect(useAppStore.getState().importBackupState([1, 2])).toBe(false);
    });

    it("restores a partial backup's progress lists wholesale, coercing lesson strings", () => {
      const store = useAppStore.getState();
      store.completeLesson(1);
      expect(useAppStore.getState().completedLessons).toEqual([1]);

      // a backup carries its own progress snapshot — its list replaces the
      // current one (numeric strings are coerced, junk is dropped)
      expect(useAppStore.getState().importBackupState({ completedLessons: [2, "lesson 3", "no digits"] })).toBe(true);
      const state = useAppStore.getState();
      expect(state.completedLessons).toEqual([2, 3]);
      // untouched fields keep their previous values
      expect(state.settings.lazyMode).toBe(false);
      expect(state.theme).toBeTruthy();
    });

    it("applies a settings-only backup without touching progress", () => {
      const store = useAppStore.getState();
      store.completeLesson(7);
      const before = useAppStore.getState().completedLessons;

      expect(useAppStore.getState().importBackupState({ settings: { lazyMode: true } })).toBe(true);
      const state = useAppStore.getState();
      expect(state.settings.lazyMode).toBe(true);
      expect(state.tolerance.umlautTolerance).toBe(true);
      expect(state.completedLessons).toEqual(before);
    });

    it("round-trips through saveState and rehydrates merged", () => {
      const store = useAppStore.getState();
      store.completeLesson(1);
      store.markWordEncountered("haus");
      saveState(useAppStore.getState());

      // simulate a later save that lost everything but the theme
      const full = JSON.parse(localStorage.getItem(STORAGE_KEY)!);
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme: full.theme }));

      const saved = loadSavedState();
      expect(saved.completedLessons).toEqual([1]);
      expect(saved.srsCards?.["haus"]).toBeDefined();
    });
  });
});
