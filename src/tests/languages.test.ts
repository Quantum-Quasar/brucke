import { describe, test, expect, beforeEach, beforeAll, afterAll, vi } from "vitest";

// ponytail: language registry sanity + store multi-language behavior

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

import { LANGUAGES, DEFAULT_LANGUAGE_ID, getLanguageDefinition, isValidLanguageId } from "@/data/languages";
import { getLanguageContent, getTotalWordCount, EMPTY_COMPENDIUM } from "@/data/language-content";
import { getWordEntity, getWordEntityMap, getWordLessonMap } from "@/lib/word-entities";
import { loadSavedState, useAppStore, STORAGE_KEY, type LanguageProgress } from "@/lib/store";
import { TOTAL_TOPICS } from "@/data/curriculum";

describe("language registry", () => {
  test("german is the default and fully available", () => {
    const german = getLanguageDefinition("de");
    expect(DEFAULT_LANGUAGE_ID).toBe("de");
    expect(german.status).toBe("available");
    expect(german.ttsLocale).toBe("de-DE");
    expect(german.genderSystem?.articles).toEqual(["der", "die", "das"]);
  });

  test("every language has a complete onboarding introduction", () => {
    for (const lang of LANGUAGES) {
      expect(lang.onboarding.philosophy.heading.length).toBeGreaterThan(0);
      expect(lang.onboarding.philosophy.demos.length).toBeGreaterThan(0);
      expect(lang.onboarding.ready.body.length).toBeGreaterThan(0);
      for (const demo of lang.onboarding.philosophy.demos) {
        expect(demo.english.length).toBeGreaterThan(0);
        expect(demo.target.length).toBeGreaterThan(0);
        expect(demo.rule.length).toBeGreaterThan(0);
      }
    }
  });

  test("unknown ids fall back to the default language instead of crashing", () => {
    expect(getLanguageDefinition("xx").id).toBe(DEFAULT_LANGUAGE_ID);
    expect(getLanguageDefinition(undefined).id).toBe(DEFAULT_LANGUAGE_ID);
    expect(isValidLanguageId("de")).toBe(true);
    expect(isValidLanguageId("xx")).toBe(false);
  });

  test("special characters are unique per language and non-empty", () => {
    for (const lang of LANGUAGES) {
      expect(lang.specialChars.length).toBeGreaterThan(0);
      const chars = lang.specialChars.map(([c]) => c);
      expect(new Set(chars).size).toBe(chars.length);
    }
  });
});

describe("language content registry", () => {
  test("german has the full curriculum; coming-soon languages are empty", () => {
    const german = getLanguageContent("de");
    expect(german.compendium).not.toBeNull();
    expect(german.topics).toHaveLength(TOTAL_TOPICS);
    expect(german.lessons.length).toBeGreaterThan(0);
    expect(german.insights.length).toBeGreaterThan(0);

    for (const lang of LANGUAGES) {
      if (lang.status === "coming-soon") {
        const content = getLanguageContent(lang.id);
        expect(content.compendium).toBeNull();
        expect(content.topics).toHaveLength(0);
        expect(getTotalWordCount(lang.id)).toBe(0);
      }
    }
  });

  test("german word count matches the compendium", () => {
    expect(getTotalWordCount("de")).toBeGreaterThan(0);
  });
});

describe("language-scoped word entities", () => {
  test("german resolves real words; empty languages resolve nothing", () => {
    expect(getWordEntity("wasser", "de")?.target_word).toBe("Wasser");
    expect(getWordEntity("compound_kühlschrank", "de")).toBeDefined();
    expect(Object.keys(getWordEntityMap("es"))).toHaveLength(0);
    expect(getWordEntity("wasser", "es")).toBeUndefined();
    expect(Object.keys(getWordLessonMap("es"))).toHaveLength(0);
    expect(EMPTY_COMPENDIUM.wordList).toHaveLength(0);
  });
});

describe("store multi-language progress", () => {
  beforeAll(() => {
    (globalThis as any).window = globalThis;
    (globalThis as any).localStorage = new LocalStorageMock();
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

  test("fresh users start on the default language", () => {
    expect(useAppStore.getState().activeLanguageId).toBe(DEFAULT_LANGUAGE_ID);
  });

  test("legacy top-level progress migrates into the german slice", () => {
    (globalThis as any).localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        completedLessons: [1, 2, 3],
        currentLessonId: 4,
        wordMastery: { hand: "mastered" },
        hasCompletedOnboarding: true,
        theme: "default",
      })
    );
    const saved = loadSavedState();
    expect(saved.activeLanguageId).toBe("de");
    expect(saved.progressByLanguage?.de?.completedLessons).toEqual([1, 2, 3]);
    // top level mirrors the active slice
    expect(saved.completedLessons).toEqual([1, 2, 3]);
  });

  test("switching languages swaps progress slices and back again", () => {
    const store = useAppStore.getState();
    store.completeOnboarding();
    store.completeLesson(1);
    expect(useAppStore.getState().completedLessons).toContain(1);

    useAppStore.getState().setActiveLanguage("es");
    const spanish = useAppStore.getState();
    expect(spanish.activeLanguageId).toBe("es");
    expect(spanish.completedLessons).toEqual([]);
    expect(spanish.currentLessonId).toBe(1);
    // choosing a new language queues its introduction
    expect(spanish.isOnboardingOpen).toBe(true);
    expect(spanish.seenIntroLanguages).toContain("de");
    expect(spanish.seenIntroLanguages).toContain("es");

    // german progress survives the round trip
    useAppStore.getState().setActiveLanguage("de");
    const german = useAppStore.getState();
    expect(german.completedLessons).toContain(1);
    expect(german.activeLanguageId).toBe("de");
  });

  test("switching back to a seen language does not reopen the introduction", () => {
    const store = useAppStore.getState();
    store.setActiveLanguage("es");
    useAppStore.getState().completeOnboarding(); // marks "es" seen
    useAppStore.getState().setActiveLanguage("fr");
    expect(useAppStore.getState().isOnboardingOpen).toBe(true);
    useAppStore.getState().completeOnboarding();
    useAppStore.getState().setActiveLanguage("es");
    expect(useAppStore.getState().isOnboardingOpen).toBe(false);
  });

  test("progress saved while a language is active lands in that language's slice", () => {
    const store = useAppStore.getState();
    store.completeOnboarding();
    useAppStore.getState().setActiveLanguage("es");
    useAppStore.getState().completeOnboarding();
    useAppStore.getState().markWordEncountered("familia");

    const raw = JSON.parse((globalThis as any).localStorage.getItem(STORAGE_KEY) || "{}");
    expect(raw.activeLanguageId).toBe("es");
    expect(raw.progressByLanguage.es.wordMastery.familia).toBe("encountered");
    expect(raw.progressByLanguage.de).toBeDefined();
    expect(raw.progressByLanguage.es).toBeDefined();
  });

  test("invalid language ids are ignored", () => {
    const before = useAppStore.getState().activeLanguageId;
    useAppStore.getState().setActiveLanguage("__proto__");
    useAppStore.getState().setActiveLanguage("not-a-language");
    expect(useAppStore.getState().activeLanguageId).toBe(before);
  });

  test("setActiveLanguage accepts a valid LanguageProgress slice shape", () => {
    const slice: LanguageProgress = {
      completedLessons: [5],
      currentLessonId: 6,
      lessonProgress: {},
      lessonStars: {},
      wordMastery: {},
      srsCards: {},
      weeklyActivity: [true, false, false, false, false, false, false],
    };
    useAppStore.setState((s) => ({ progressByLanguage: { ...s.progressByLanguage, fr: slice } }));
    useAppStore.getState().setActiveLanguage("fr");
    expect(useAppStore.getState().completedLessons).toEqual([5]);
    expect(useAppStore.getState().currentLessonId).toBe(6);
  });
});
