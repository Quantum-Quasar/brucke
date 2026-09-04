"use client";

// ponytail: lightweight zustand store with localStorage persistence and word-level state

import { create } from "zustand";
import type { MasteryState, ReviewMode, SRSCard } from "./types";
import { createInitialCard, gradeCard, isMastered, type ReviewGrade } from "./srs";

export interface ToleranceSettings {
  umlautTolerance: boolean;
  capitalizationTolerance: boolean;
  umlautDismissals: number;
  capitalizationDismissals: number;
}

export interface AppState {
  completedLessons: number[];
  currentLessonId: number;
  wordMastery: Record<string, MasteryState>;
  srsCards: Record<string, SRSCard>;
  weeklyActivity: boolean[]; // 7 days Mon-Sun
  activeWordDrawerId: string | null;
  tolerance: ToleranceSettings;
  preferredReviewMode: ReviewMode;
  hasCompletedOnboarding: boolean;
  isOnboardingOpen: boolean;

  // Actions
  markWordExplored: (wordId: string) => void;
  markWordEncountered: (wordId: string) => void;
  markWordMastered: (wordId: string) => void;
  completeLesson: (lessonId: number) => void;
  recordReview: (wordId: string, grade: ReviewGrade) => void;
  setPreferredReviewMode: (mode: ReviewMode) => void;
  completeOnboarding: () => void;
  openOnboarding: () => void;
  closeOnboarding: () => void;
  openWordDrawer: (wordId: string) => void;
  closeWordDrawer: () => void;
  setUmlautTolerance: (enabled: boolean) => void;
  setCapitalizationTolerance: (enabled: boolean) => void;
  dismissUmlautPrompt: () => void;
  dismissCapitalizationPrompt: () => void;
  logDailyActivity: () => void;
  resetProgress: () => void;
  hydrateFromStorage: () => void;
}

export const STORAGE_KEY = "brucke_app_state_v1";
export const STORAGE_COOKIE_KEY = "brucke_progress";

export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^|;\\s*)" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[2]) : null;
}

export function setCookie(name: string, value: string, days = 365) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

export function deleteCookie(name: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
}

export function loadSavedState(): Partial<AppState> {
  if (typeof window === "undefined") return {};

  // 1. Try localStorage
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") return parsed;
    }
  } catch {}

  // 2. Fallback to cookie storage
  try {
    const rawCookie = getCookie(STORAGE_COOKIE_KEY);
    if (rawCookie) {
      const parsed = JSON.parse(rawCookie);
      if (parsed && typeof parsed === "object") return parsed;
    }
  } catch {}

  return {};
}

export function saveState(state: AppState) {
  if (typeof window === "undefined") return;
  const toPersist = {
    completedLessons: state.completedLessons,
    currentLessonId: state.currentLessonId,
    wordMastery: state.wordMastery,
    srsCards: state.srsCards,
    weeklyActivity: state.weeklyActivity,
    tolerance: state.tolerance,
    preferredReviewMode: state.preferredReviewMode,
    hasCompletedOnboarding: state.hasCompletedOnboarding,
  };
  const serialized = JSON.stringify(toPersist);

  // 1. Save to localStorage
  try {
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch {}

  // 2. Also save to cookie for durable local browser persistence
  try {
    setCookie(STORAGE_COOKIE_KEY, serialized, 365);
  } catch {}
}

const initialSaved = loadSavedState();

export const useAppStore = create<AppState>((set, get) => ({
  completedLessons: initialSaved.completedLessons || [],
  currentLessonId: initialSaved.currentLessonId || 1,
  wordMastery: initialSaved.wordMastery || {},
  srsCards: initialSaved.srsCards || {},
  weeklyActivity: initialSaved.weeklyActivity || [true, true, false, false, false, false, false],
  activeWordDrawerId: null,
  preferredReviewMode: (initialSaved.preferredReviewMode as ReviewMode) || "flashcard",
  hasCompletedOnboarding: initialSaved.hasCompletedOnboarding || false,
  isOnboardingOpen: false,
  tolerance: initialSaved.tolerance || {
    umlautTolerance: false,
    capitalizationTolerance: false,
    umlautDismissals: 0,
    capitalizationDismissals: 0,
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

  setPreferredReviewMode: (mode) => {
    set((s) => {
      const next = { ...s, preferredReviewMode: mode };
      saveState(next);
      return next;
    });
  },

  markWordExplored: (wordId) => {
    set((s) => {
      const current = s.wordMastery[wordId];
      if (current === "encountered" || current === "mastered") return s;
      const updated = { ...s.wordMastery, [wordId]: "explored" as MasteryState };
      const next = { ...s, wordMastery: updated };
      saveState(next);
      return next;
    });
  },

  markWordEncountered: (wordId) => {
    set((s) => {
      const current = s.wordMastery[wordId];
      if (current === "mastered") return s;
      const updated = { ...s.wordMastery, [wordId]: "encountered" as MasteryState };
      // Also register card in SRS if not present
      const srsCards = { ...s.srsCards };
      if (!srsCards[wordId]) {
        srsCards[wordId] = createInitialCard(wordId);
      }
      const next = { ...s, wordMastery: updated, srsCards };
      saveState(next);
      return next;
    });
  },

  markWordMastered: (wordId) => {
    set((s) => {
      const updated = { ...s.wordMastery, [wordId]: "mastered" as MasteryState };
      const next = { ...s, wordMastery: updated };
      saveState(next);
      return next;
    });
  },

  completeLesson: (lessonId) => {
    set((s) => {
      const completed = s.completedLessons.includes(lessonId)
        ? s.completedLessons
        : [...s.completedLessons, lessonId];
      const nextLesson = Math.max(s.currentLessonId, lessonId + 1);
      const next = { ...s, completedLessons: completed, currentLessonId: nextLesson };
      saveState(next);
      return next;
    });
  },

  recordReview: (wordId, grade) => {
    set((s) => {
      const currentCard = s.srsCards[wordId] || createInitialCard(wordId);
      const updatedCard = gradeCard(currentCard, grade);
      const srsCards = { ...s.srsCards, [wordId]: updatedCard };
      let wordMastery = { ...s.wordMastery };

      if (isMastered(updatedCard)) {
        wordMastery[wordId] = "mastered";
      } else if (!wordMastery[wordId] || wordMastery[wordId] === "unexplored") {
        wordMastery[wordId] = "encountered";
      }

      const next = { ...s, srsCards, wordMastery };
      saveState(next);
      return next;
    });
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
      const next = { ...s, tolerance: { ...s.tolerance, umlautTolerance: enabled } };
      saveState(next);
      return next;
    });
  },

  setCapitalizationTolerance: (enabled) => {
    set((s) => {
      const next = { ...s, tolerance: { ...s.tolerance, capitalizationTolerance: enabled } };
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
      const day = (new Date().getDay() + 6) % 7; // Monday = 0
      const updated = [...s.weeklyActivity];
      updated[day] = true;
      const next = { ...s, weeklyActivity: updated };
      saveState(next);
      return next;
    });
  },

  resetProgress: () => {
    const emptyState = {
      completedLessons: [],
      currentLessonId: 1,
      wordMastery: {},
      srsCards: {},
      weeklyActivity: [false, false, false, false, false, false, false],
      activeWordDrawerId: null,
      preferredReviewMode: "flashcard" as ReviewMode,
      hasCompletedOnboarding: false,
      isOnboardingOpen: false,
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
    set(emptyState);
  },

  hydrateFromStorage: () => {
    if (typeof window === "undefined") return;
    const saved = loadSavedState();
    if (saved && Object.keys(saved).length > 0) {
      set((s) => {
        const completed = typeof saved.hasCompletedOnboarding === "boolean"
          ? saved.hasCompletedOnboarding
          : s.hasCompletedOnboarding;

        return {
          ...s,
          completedLessons: Array.isArray(saved.completedLessons) && saved.completedLessons.length > 0
            ? saved.completedLessons
            : s.completedLessons,
          currentLessonId: saved.currentLessonId ? Math.max(s.currentLessonId, saved.currentLessonId) : s.currentLessonId,
          wordMastery: { ...s.wordMastery, ...(saved.wordMastery || {}) },
          srsCards: { ...s.srsCards, ...(saved.srsCards || {}) },
          weeklyActivity: Array.isArray(saved.weeklyActivity) ? saved.weeklyActivity : s.weeklyActivity,
          preferredReviewMode: saved.preferredReviewMode || s.preferredReviewMode,
          hasCompletedOnboarding: completed,
          isOnboardingOpen: !completed, // Automatically trigger onboarding on first visit
          tolerance: saved.tolerance ? { ...s.tolerance, ...saved.tolerance } : s.tolerance,
        };
      });
    } else {
      // Clean slate first-time user: trigger onboarding!
      set((s) => ({ ...s, isOnboardingOpen: !s.hasCompletedOnboarding }));
    }
  },
}));

// Auto-hydrate on client load if running in browser
if (typeof window !== "undefined") {
  setTimeout(() => {
    useAppStore.getState().hydrateFromStorage();
  }, 0);
}
