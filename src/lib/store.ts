"use client";

// ponytail: lightweight zustand store with localStorage persistence and word-level state

import { create } from "zustand";
import type { LessonProgress, LessonStar, MasteryState, ReviewMode, SRSCard } from "./types";
import { createInitialCard, gradeCard, isMastered, type ReviewGrade } from "./srs";
import { applyTheme, DEFAULT_THEME } from "@/data/themes";
import { applyFont, DEFAULT_FONT } from "@/data/fonts";
import { type CustomizationSettings, DEFAULT_SETTINGS } from "@/data/settings";
import { applyAppearanceSettings } from "./appearance";
import { soundEngine } from "./sound";

export interface ToleranceSettings {
  umlautTolerance: boolean;
  capitalizationTolerance: boolean;
  umlautDismissals: number;
  capitalizationDismissals: number;
}

export interface AppState {
  completedLessons: number[];
  currentLessonId: number;
  lessonProgress: Record<number, LessonProgress>;
  /** gold = completed; purple = flawless first-try run (retry queue untouched). Purple is never downgraded. */
  lessonStars: Record<number, LessonStar>;
  wordMastery: Record<string, MasteryState>;
  srsCards: Record<string, SRSCard>;
  weeklyActivity: boolean[]; // 7 days Mon-Sun
  lastActivityWeek?: string;
  activeWordDrawerId: string | null;
  tolerance: ToleranceSettings;
  preferredReviewMode: ReviewMode;
  hasCompletedOnboarding: boolean;
  isOnboardingOpen: boolean;
  hasSeenGenderIntro: boolean;
  theme: string;
  isThemeSelectorOpen: boolean;
  font: string;
  isFontSelectorOpen: boolean;
  settings: CustomizationSettings;

  // Actions
  updateSetting: <K extends keyof CustomizationSettings>(key: K, value: CustomizationSettings[K]) => void;
  resetSettings: () => void;
  setTheme: (theme: string) => void;
  openThemeSelector: () => void;
  closeThemeSelector: () => void;
  setFont: (font: string) => void;
  openFontSelector: () => void;
  closeFontSelector: () => void;
  markWordExplored: (wordId: string) => void;
  markWordEncountered: (wordId: string) => void;
  markWordsEncountered: (wordIds: string[]) => void;
  markWordMastered: (wordId: string) => void;
  completeLesson: (lessonId: number, opts?: { perfect?: boolean }) => void;
  setLessonProgress: (lessonId: number, progress: LessonProgress) => void;
  recordReview: (wordId: string, grade: ReviewGrade) => void;
  setPreferredReviewMode: (mode: ReviewMode) => void;
  completeOnboarding: () => void;
  openOnboarding: () => void;
  closeOnboarding: () => void;
  dismissGenderIntro: () => void;
  openGenderIntro: () => void;
  openWordDrawer: (wordId: string) => void;
  closeWordDrawer: () => void;
  setUmlautTolerance: (enabled: boolean) => void;
  setCapitalizationTolerance: (enabled: boolean) => void;
  dismissUmlautPrompt: () => void;
  dismissCapitalizationPrompt: () => void;
  logDailyActivity: () => void;
  resetProgress: () => void;
  hydrateFromStorage: () => void;
  importBackupState: (payload: any) => boolean;
}

export const STORAGE_KEY = "brucke_app_state_v1";
export const STORAGE_COOKIE_KEY = "brucke_progress";

export function getWeekString(date = new Date()): string {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${weekNo}`;
}

export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^|;\\s*)" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[2]) : null;
}

export function setCookie(name: string, value: string, days = 365) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  const isSecure = typeof location !== "undefined" && location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax${isSecure}`;
}

export function deleteCookie(name: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
}

export function loadSavedState(): Partial<AppState> {
  if (typeof window === "undefined") return {};

  let parsed: any = null;
  // 1. Try localStorage
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      parsed = JSON.parse(raw);
    }
  } catch {}

  // 2. Fallback to cookie storage
  if (!parsed) {
    try {
      const rawCookie = getCookie(STORAGE_COOKIE_KEY);
      if (rawCookie) {
        parsed = JSON.parse(rawCookie);
      }
    } catch {}
  }

  if (parsed && typeof parsed === "object") {
    // ponytail: defensive schema defaults preventing corrupted storage crashes
    if (!Array.isArray(parsed.completedLessons)) parsed.completedLessons = [];
    if (!parsed.lessonProgress || typeof parsed.lessonProgress !== "object" || Array.isArray(parsed.lessonProgress)) parsed.lessonProgress = {};
    if (!parsed.lessonStars || typeof parsed.lessonStars !== "object" || Array.isArray(parsed.lessonStars)) parsed.lessonStars = {};
    if (!parsed.wordMastery || typeof parsed.wordMastery !== "object") parsed.wordMastery = {};
    if (!parsed.srsCards || typeof parsed.srsCards !== "object") parsed.srsCards = {};
    if (!Array.isArray(parsed.weeklyActivity)) parsed.weeklyActivity = [false, false, false, false, false, false, false];
    if (parsed.settings) {
      parsed.settings = { ...DEFAULT_SETTINGS, ...parsed.settings };
      if (parsed.settings.quickRestart === "enter") {
        parsed.settings.quickRestart = DEFAULT_SETTINGS.quickRestart;
      }
    }
    return parsed;
  }

  return {};
}

let lastSerialized = "";

export function saveState(state: AppState) {
  if (typeof window === "undefined") return;
  const toPersist = {
    completedLessons: state.completedLessons,
    currentLessonId: state.currentLessonId,
    lessonProgress: state.lessonProgress,
    lessonStars: state.lessonStars,
    wordMastery: state.wordMastery,
    srsCards: state.srsCards,
    weeklyActivity: state.weeklyActivity,
    lastActivityWeek: state.lastActivityWeek,
    tolerance: state.tolerance,
    preferredReviewMode: state.preferredReviewMode,
    hasCompletedOnboarding: state.hasCompletedOnboarding,
    hasSeenGenderIntro: state.hasSeenGenderIntro,
    theme: state.theme,
    font: state.font,
    settings: state.settings,
  };
  const serialized = JSON.stringify(toPersist);
  if (serialized === lastSerialized) return;
  lastSerialized = serialized;

  // 1. Save to localStorage
  try {
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch {}

  // 2. Also save to cookie with strict encoded size guard <= 2048 bytes (prevents HTTP 431)
  try {
    const lean = {
      completedLessons: state.completedLessons,
      currentLessonId: state.currentLessonId,
      wordMastery: state.wordMastery,
      hasCompletedOnboarding: state.hasCompletedOnboarding,
      hasSeenGenderIntro: state.hasSeenGenderIntro,
      theme: state.theme,
      font: state.font,
    };
    const leanJson = JSON.stringify(lean);
    if (encodeURIComponent(leanJson).length <= 2048) {
      setCookie(STORAGE_COOKIE_KEY, leanJson, 365);
    } else {
      const minimal = JSON.stringify({ theme: state.theme, font: state.font });
      setCookie(STORAGE_COOKIE_KEY, minimal, 365);
    }
  } catch {}
}

const initialSaved = loadSavedState();

export const useAppStore = create<AppState>((set, get) => ({
  completedLessons: initialSaved.completedLessons || [],
  currentLessonId: initialSaved.currentLessonId || 1,
  lessonProgress: initialSaved.lessonProgress || {},
  lessonStars: initialSaved.lessonStars || {},
  wordMastery: initialSaved.wordMastery || {},
  srsCards: initialSaved.srsCards || {},
  weeklyActivity: initialSaved.weeklyActivity || [false, false, false, false, false, false, false],
  lastActivityWeek: (initialSaved as any)?.lastActivityWeek || getWeekString(),
  activeWordDrawerId: null,
  preferredReviewMode: (initialSaved.preferredReviewMode as ReviewMode) || "flashcard",
  hasCompletedOnboarding: initialSaved.hasCompletedOnboarding || false,
  isOnboardingOpen: false,
  hasSeenGenderIntro: initialSaved.hasSeenGenderIntro || false,
  theme: (initialSaved as any)?.theme || DEFAULT_THEME,
  isThemeSelectorOpen: false,
  font: (initialSaved as any)?.font || DEFAULT_FONT,
  isFontSelectorOpen: false,
  settings: initialSaved.settings ? { ...DEFAULT_SETTINGS, ...initialSaved.settings } : DEFAULT_SETTINGS,
  tolerance: initialSaved.tolerance || {
    umlautTolerance: initialSaved.settings?.lazyMode || false,
    capitalizationTolerance: initialSaved.settings?.capitalizationTolerance || false,
    umlautDismissals: 0,
    capitalizationDismissals: 0,
  },

  updateSetting: (key, value) => {
    set((s) => {
      const nextSettings = { ...s.settings, [key]: value };
      applyAppearanceSettings(nextSettings);
      if (key === "playSoundOnClick" && typeof value === "string") {
        void soundEngine.preloadClickSound(value);
      }
      const nextTolerance = { ...s.tolerance };
      if (key === "lazyMode") {
        nextTolerance.umlautTolerance = Boolean(value);
      }
      if (key === "capitalizationTolerance") {
        nextTolerance.capitalizationTolerance = Boolean(value);
      }
      const next = { ...s, settings: nextSettings, tolerance: nextTolerance };
      saveState(next);
      return next;
    });
  },

  resetSettings: () => {
    set((s) => {
      const nextSettings = { ...DEFAULT_SETTINGS };
      applyAppearanceSettings(nextSettings);
      const nextTolerance = {
        ...s.tolerance,
        umlautTolerance: DEFAULT_SETTINGS.lazyMode,
        capitalizationTolerance: DEFAULT_SETTINGS.capitalizationTolerance,
      };
      const next = { ...s, settings: nextSettings, tolerance: nextTolerance };
      saveState(next);
      return next;
    });
  },

  setTheme: (theme: string) => {
    applyTheme(theme);
    set((s) => {
      const next = { ...s, theme };
      saveState(next);
      return next;
    });
  },

  openThemeSelector: () => {
    set({ isThemeSelectorOpen: true });
  },

  closeThemeSelector: () => {
    set({ isThemeSelectorOpen: false });
  },

  setFont: (font: string) => {
    applyFont(font);
    set((s) => {
      const next = { ...s, font };
      saveState(next);
      return next;
    });
  },

  openFontSelector: () => {
    set({ isFontSelectorOpen: true });
  },

  closeFontSelector: () => {
    set({ isFontSelectorOpen: false });
  },

  completeOnboarding: () => {
    set((s) => {
      const next = { ...s, hasCompletedOnboarding: true, isOnboardingOpen: false };
      saveState(next);
      return next;
    });
  },

  openOnboarding: () => {
    set({ isOnboardingOpen: true });
  },

  closeOnboarding: () => {
    set({ isOnboardingOpen: false });
  },

  dismissGenderIntro: () => {
    set((s) => {
      const next = { ...s, hasSeenGenderIntro: true };
      saveState(next);
      return next;
    });
  },

  openGenderIntro: () => {
    set((s) => {
      const next = { ...s, hasSeenGenderIntro: false };
      saveState(next);
      return next;
    });
  },

  setPreferredReviewMode: (mode) => {
    set((s) => {
      const next = { ...s, preferredReviewMode: mode };
      saveState(next);
      return next;
    });
  },

  markWordExplored: (wordId) => {
    const id = wordId.trim();
    set((s) => {
      const current = s.wordMastery[id];
      if (current === "explored" || current === "encountered" || current === "mastered") return s;
      const updated = { ...s.wordMastery, [id]: "explored" as MasteryState };
      const next = { ...s, wordMastery: updated };
      saveState(next);
      return next;
    });
  },

  markWordEncountered: (wordId) => {
    const id = wordId.trim();
    set((s) => {
      const current = s.wordMastery[id];
      if (current === "mastered" || (current === "encountered" && s.srsCards[id])) return s;
      const updated = { ...s.wordMastery, [id]: "encountered" as MasteryState };
      // Also register card in SRS if not present
      const srsCards = { ...s.srsCards };
      if (!srsCards[id]) {
        srsCards[id] = createInitialCard(id);
      }
      const next = { ...s, wordMastery: updated, srsCards };
      saveState(next);
      return next;
    });
  },

  markWordsEncountered: (wordIds) => {
    set((s) => {
      const updatedMastery = { ...s.wordMastery };
      const srsCards = { ...s.srsCards };
      let changed = false;

      for (const rawId of wordIds) {
        const wordId = rawId.trim();
        const current = updatedMastery[wordId];
        if (current !== "mastered") {
          if (current !== "encountered") {
            updatedMastery[wordId] = "encountered";
            changed = true;
          }
          if (!srsCards[wordId]) {
            srsCards[wordId] = createInitialCard(wordId);
            changed = true;
          }
        }
      }

      if (!changed) return s;
      const next = { ...s, wordMastery: updatedMastery, srsCards };
      saveState(next);
      return next;
    });
  },

  markWordMastered: (wordId) => {
    const id = wordId.trim();
    set((s) => {
      if (s.wordMastery[id] === "mastered") return s;
      const updated = { ...s.wordMastery, [id]: "mastered" as MasteryState };
      const next = { ...s, wordMastery: updated };
      saveState(next);
      return next;
    });
  },

  completeLesson: (lessonId, opts) => {
    set((s) => {
      const nextStars =
        opts?.perfect || s.lessonStars[lessonId] === "purple"
          ? { ...s.lessonStars, [lessonId]: "purple" as LessonStar }
          : s.lessonStars[lessonId]
          ? s.lessonStars
          : { ...s.lessonStars, [lessonId]: "gold" as LessonStar };
      if (s.completedLessons.includes(lessonId) && s.currentLessonId >= lessonId + 1 && nextStars === s.lessonStars) return s;
      const completed = s.completedLessons.includes(lessonId)
        ? s.completedLessons
        : [...s.completedLessons, lessonId];
      const nextLesson = Math.max(s.currentLessonId, lessonId + 1);
      const next = { ...s, completedLessons: completed, currentLessonId: nextLesson, lessonStars: nextStars };
      saveState(next);
      return next;
    });
    get().logDailyActivity();
  },

  setLessonProgress: (lessonId, progress) => {
    set((s) => {
      const current = s.lessonProgress[lessonId];
      if (
        current &&
        current.segment === progress.segment &&
        current.practiceIndex === progress.practiceIndex &&
        current.everQueued === progress.everQueued &&
        current.completedSegments.length === progress.completedSegments.length &&
        current.completedSegments.every((segment, index) => segment === progress.completedSegments[index])
      ) {
        return s;
      }
      const next = {
        ...s,
        lessonProgress: { ...s.lessonProgress, [lessonId]: progress },
      };
      saveState(next);
      return next;
    });
  },

  recordReview: (wordId, grade) => {
    const id = wordId.trim();
    set((s) => {
      const currentCard = s.srsCards[id] || createInitialCard(id);
      const updatedCard = gradeCard(currentCard, grade);
      const srsCards = { ...s.srsCards, [id]: updatedCard };
      let wordMastery = { ...s.wordMastery };

      if (isMastered(updatedCard)) {
        wordMastery[id] = "mastered";
      } else if (!wordMastery[id] || wordMastery[id] === "unexplored") {
        wordMastery[id] = "encountered";
      }

      const next = { ...s, srsCards, wordMastery };
      saveState(next);
      return next;
    });
    get().logDailyActivity();
  },

  openWordDrawer: (wordId) => {
    set({ activeWordDrawerId: wordId });
    get().markWordExplored(wordId);
  },

  closeWordDrawer: () => {
    set({ activeWordDrawerId: null });
  },

  setUmlautTolerance: (enabled) => {
    set((s) => {
      // keep settings in sync so the settings page and the in-lesson prompt agree
      const settings = { ...s.settings, lazyMode: enabled };
      const next = { ...s, settings, tolerance: { ...s.tolerance, umlautTolerance: enabled } };
      saveState(next);
      return next;
    });
  },

  setCapitalizationTolerance: (enabled) => {
    set((s) => {
      const settings = { ...s.settings, capitalizationTolerance: enabled };
      const next = { ...s, settings, tolerance: { ...s.tolerance, capitalizationTolerance: enabled } };
      saveState(next);
      return next;
    });
  },

  dismissUmlautPrompt: () => {
    set((s) => {
      const count = s.tolerance.umlautDismissals + 1;
      const next = { ...s, tolerance: { ...s.tolerance, umlautDismissals: count } };
      saveState(next);
      return next;
    });
  },

  dismissCapitalizationPrompt: () => {
    set((s) => {
      const count = s.tolerance.capitalizationDismissals + 1;
      const next = { ...s, tolerance: { ...s.tolerance, capitalizationDismissals: count } };
      saveState(next);
      return next;
    });
  },

  logDailyActivity: () => {
    set((s) => {
      const now = new Date();
      const currentWeek = getWeekString(now);
      const isNewWeek = Boolean(s.lastActivityWeek && s.lastActivityWeek !== currentWeek);
      const day = (now.getDay() + 6) % 7; // Monday = 0
      const updated = isNewWeek ? [false, false, false, false, false, false, false] : [...s.weeklyActivity];
      updated[day] = true;
      const next = { ...s, weeklyActivity: updated, lastActivityWeek: currentWeek };
      saveState(next);
      return next;
    });
  },

  resetProgress: () => {
    const emptyState = {
      completedLessons: [],
      currentLessonId: 1,
      lessonProgress: {},
      lessonStars: {},
      wordMastery: {},
      srsCards: {},
      weeklyActivity: [false, false, false, false, false, false, false],
      activeWordDrawerId: null,
      preferredReviewMode: "flashcard" as ReviewMode,
      hasCompletedOnboarding: false,
      isOnboardingOpen: false,
      hasSeenGenderIntro: false,
      theme: DEFAULT_THEME,
      isThemeSelectorOpen: false,
      font: DEFAULT_FONT,
      isFontSelectorOpen: false,
      settings: DEFAULT_SETTINGS,
      tolerance: {
        umlautTolerance: false,
        capitalizationTolerance: false,
        umlautDismissals: 0,
        capitalizationDismissals: 0,
      },
    };
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
      try {
        deleteCookie(STORAGE_COOKIE_KEY);
      } catch {}
    }
    lastSerialized = "";
    applyTheme(DEFAULT_THEME);
    applyFont(DEFAULT_FONT);
    applyAppearanceSettings(DEFAULT_SETTINGS);
    set(emptyState);
  },

  importBackupState: (payload: any) => {
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) return false;
    // an object with none of our fields is not a backup — say so instead of
    // reporting success while restoring nothing
    const RECOGNIZED_FIELDS = [
      "settings",
      "completedLessons",
      "currentLessonId",
      "lessonProgress",
      "lessonStars",
      "wordMastery",
      "srsCards",
      "weeklyActivity",
      "lastActivityWeek",
      "preferredReviewMode",
      "hasCompletedOnboarding",
      "hasSeenGenderIntro",
      "theme",
      "font",
    ];
    if (!RECOGNIZED_FIELDS.some((field) => field in payload)) return false;
    set((s) => {
      const nextSettings = payload.settings && typeof payload.settings === "object"
        ? { ...s.settings, ...payload.settings }
        : s.settings;
      const currentTheme = (typeof payload.theme === "string" && payload.theme) || s.theme;
      const currentFont = (typeof payload.font === "string" && payload.font) || s.font;

      applyTheme(currentTheme);
      applyFont(currentFont);

      let completedLessons = s.completedLessons;
      if (Array.isArray(payload.completedLessons)) {
        completedLessons = payload.completedLessons
          .map((item: any) => {
            if (typeof item === "number") return item;
            if (typeof item === "string") {
              const parsed = parseInt(item.replace(/[^\d]/g, ""), 10);
              return isNaN(parsed) ? null : parsed;
            }
            return null;
          })
          .filter((n: any): n is number => typeof n === "number");
      }

      let currentLessonId = s.currentLessonId;
      if (typeof payload.currentLessonId === "number") {
        currentLessonId = payload.currentLessonId;
      } else if (typeof payload.currentLessonId === "string") {
        const parsed = parseInt(payload.currentLessonId.replace(/[^\d]/g, ""), 10);
        if (!isNaN(parsed)) currentLessonId = parsed;
      }

      const lessonProgress = payload.lessonProgress && typeof payload.lessonProgress === "object"
        ? { ...s.lessonProgress, ...payload.lessonProgress }
        : s.lessonProgress;

      const lessonStars = payload.lessonStars && typeof payload.lessonStars === "object"
        ? { ...s.lessonStars, ...payload.lessonStars }
        : s.lessonStars;

      const wordMastery = payload.wordMastery && typeof payload.wordMastery === "object"
        ? { ...s.wordMastery, ...payload.wordMastery }
        : s.wordMastery;

      let srsCards = s.srsCards;
      if (Array.isArray(payload.srsCards)) {
        let cardMap: Record<string, SRSCard> = { ...s.srsCards };
        payload.srsCards.forEach((c: any) => {
          // "__proto__" via plain assignment swaps the object's prototype —
          // skip it so a hostile backup can't inject inherited SRS state
          if (c && typeof c.id === "string" && c.id && c.id !== "__proto__") {
            cardMap[c.id] = c;
          }
        });
        srsCards = cardMap;
      } else if (payload.srsCards && typeof payload.srsCards === "object") {
        srsCards = { ...s.srsCards, ...payload.srsCards };
      }

      const weeklyActivity = Array.isArray(payload.weeklyActivity) && payload.weeklyActivity.length === 7
        ? payload.weeklyActivity
        : s.weeklyActivity;

      const VALID_REVIEW_MODES: ReviewMode[] = ["flashcard", "mcq", "tiles", "typing"];
      const nextPreferredReviewMode = VALID_REVIEW_MODES.includes(payload.preferredReviewMode)
        ? payload.preferredReviewMode
        : s.preferredReviewMode;
      const nextHasCompletedOnboarding =
        typeof payload.hasCompletedOnboarding === "boolean" ? payload.hasCompletedOnboarding : s.hasCompletedOnboarding;
      const nextHasSeenGenderIntro =
        typeof payload.hasSeenGenderIntro === "boolean" ? payload.hasSeenGenderIntro : s.hasSeenGenderIntro;
      const nextLastActivityWeek = typeof payload.lastActivityWeek === "string" && payload.lastActivityWeek
        ? payload.lastActivityWeek
        : s.lastActivityWeek;

      const nextTolerance = {
        ...s.tolerance,
        umlautTolerance: typeof nextSettings.lazyMode === "boolean" ? nextSettings.lazyMode : s.tolerance.umlautTolerance,
        capitalizationTolerance: typeof nextSettings.capitalizationTolerance === "boolean" ? nextSettings.capitalizationTolerance : s.tolerance.capitalizationTolerance,
      };

      const next: AppState = {
        ...s,
        completedLessons,
        currentLessonId,
        lessonProgress,
        lessonStars,
        wordMastery,
        srsCards,
        weeklyActivity,
        lastActivityWeek: nextLastActivityWeek,
        preferredReviewMode: nextPreferredReviewMode,
        hasCompletedOnboarding: nextHasCompletedOnboarding,
        hasSeenGenderIntro: nextHasSeenGenderIntro,
        settings: nextSettings,
        tolerance: nextTolerance,
        theme: currentTheme,
        font: currentFont,
      };

      applyAppearanceSettings(nextSettings);
      saveState(next);
      return next;
    });
    return true;
  },

  hydrateFromStorage: () => {
    if (typeof window === "undefined") return;
    const saved = loadSavedState();
    if (saved && Object.keys(saved).length > 0) {
      set((s) => {
        const completed = typeof saved.hasCompletedOnboarding === "boolean"
          ? saved.hasCompletedOnboarding
          : s.hasCompletedOnboarding;
        const currentTheme = (saved as any).theme || s.theme || DEFAULT_THEME;
        applyTheme(currentTheme);

        const currentFont = (saved as any).font || s.font || DEFAULT_FONT;
        applyFont(currentFont);

        return {
          ...s,
          completedLessons: Array.isArray(saved.completedLessons) && saved.completedLessons.length > 0
            ? saved.completedLessons
            : s.completedLessons,
          currentLessonId: saved.currentLessonId ? Math.max(s.currentLessonId, saved.currentLessonId) : s.currentLessonId,
          lessonProgress: { ...s.lessonProgress, ...((saved as any).lessonProgress || {}) },
          lessonStars: { ...s.lessonStars, ...(((saved as any).lessonStars as Record<number, LessonStar>) || {}) },
          wordMastery: { ...s.wordMastery, ...(saved.wordMastery || {}) },
          srsCards: { ...s.srsCards, ...(saved.srsCards || {}) },
          weeklyActivity: Array.isArray(saved.weeklyActivity) ? saved.weeklyActivity : s.weeklyActivity,
          lastActivityWeek: (saved as any).lastActivityWeek || s.lastActivityWeek,
          preferredReviewMode: saved.preferredReviewMode || s.preferredReviewMode,
          theme: currentTheme,
          font: currentFont,
          hasCompletedOnboarding: completed,
          isOnboardingOpen: !completed, // Automatically trigger onboarding on first visit
          hasSeenGenderIntro: typeof saved.hasSeenGenderIntro === "boolean" ? saved.hasSeenGenderIntro : s.hasSeenGenderIntro,
          tolerance: saved.tolerance ? { ...s.tolerance, ...saved.tolerance } : s.tolerance,
          settings: saved.settings ? { ...DEFAULT_SETTINGS, ...saved.settings } : s.settings,
        };
      });
      const latestSettings = useAppStore.getState().settings;
      applyAppearanceSettings(latestSettings);
      if (latestSettings.playSoundOnClick !== "off") {
        void soundEngine.preloadClickSound(latestSettings.playSoundOnClick);
      }
    } else {
      // Clean slate first-time user: trigger onboarding!
      applyTheme(DEFAULT_THEME);
      applyFont(DEFAULT_FONT);
      applyAppearanceSettings(DEFAULT_SETTINGS);
      set((s) => ({ ...s, isOnboardingOpen: !s.hasCompletedOnboarding }));
    }
  },
}));

// Auto-hydrate on client load if running in browser
if (typeof window !== "undefined") {
  const initial = loadSavedState();
  applyTheme((initial as any)?.theme || DEFAULT_THEME);
  applyFont((initial as any)?.font || DEFAULT_FONT);
  if (initial.settings) {
    applyAppearanceSettings({ ...DEFAULT_SETTINGS, ...initial.settings });
  } else {
    applyAppearanceSettings(DEFAULT_SETTINGS);
  }
}
