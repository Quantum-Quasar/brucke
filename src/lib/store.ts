"use client";

// ponytail: lightweight zustand store with localStorage persistence and word-level state

import { create } from "zustand";
import type { MasteryState, SRSCard } from "./types";
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

  // Actions
  markWordExplored: (wordId: string) => void;
  markWordEncountered: (wordId: string) => void;
  markWordMastered: (wordId: string) => void;
  completeLesson: (lessonId: number) => void;
  recordReview: (wordId: string, grade: ReviewGrade) => void;
  openWordDrawer: (wordId: string) => void;
  closeWordDrawer: () => void;
  setUmlautTolerance: (enabled: boolean) => void;
  setCapitalizationTolerance: (enabled: boolean) => void;
  dismissUmlautPrompt: () => void;
  dismissCapitalizationPrompt: () => void;
  logDailyActivity: () => void;
  resetProgress: () => void;
}

const STORAGE_KEY = "brucke_app_state_v1";

function loadSavedState(): Partial<AppState> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveState(state: AppState) {
  if (typeof window === "undefined") return;
  try {
    const toPersist = {
      completedLessons: state.completedLessons,
      currentLessonId: state.currentLessonId,
      wordMastery: state.wordMastery,
      srsCards: state.srsCards,
      weeklyActivity: state.weeklyActivity,
      tolerance: state.tolerance,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toPersist));
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
  tolerance: initialSaved.tolerance || {
    umlautTolerance: false,
    capitalizationTolerance: false,
    umlautDismissals: 0,
    capitalizationDismissals: 0,
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
      tolerance: {
        umlautTolerance: false,
        capitalizationTolerance: false,
        umlautDismissals: 0,
        capitalizationDismissals: 0,
      },
    };
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
    set(emptyState);
  },
}));
