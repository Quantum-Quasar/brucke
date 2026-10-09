"use client";

// ponytail: lightweight zustand store with localStorage persistence and word-level state

import { create } from "zustand";
import type { LessonProgress, LessonStar, MasteryState, ReviewMode, SRSCard } from "./types";
import { createInitialCard, gradeCard, isMastered, type ReviewGrade } from "./srs";
import { applyTheme, DEFAULT_THEME } from "@/data/themes";
import { applyFont, DEFAULT_FONT } from "@/data/fonts";
import { type CustomizationSettings, DEFAULT_SETTINGS } from "@/data/settings";
import { DEFAULT_LANGUAGE_ID, getLanguageDefinition, isValidLanguageId } from "@/data/languages";
import { applyAppearanceSettings } from "./appearance";
import { soundEngine } from "./sound";

export interface ToleranceSettings {
  umlautTolerance: boolean;
  capitalizationTolerance: boolean;
  umlautDismissals: number;
  capitalizationDismissals: number;
}

/**
 * Everything that is language-scoped in a learner's progress. The store keeps
 * the ACTIVE language's slice mirrored onto the top-level fields
 * (completedLessons, wordMastery, …) so the rest of the app reads them
 * unchanged; switching languages swaps the mirrored slice.
 */
export interface LanguageProgress {
  completedLessons: number[];
  currentLessonId: number;
  lessonProgress: Record<number, LessonProgress>;
  lessonStars: Record<number, LessonStar>;
  wordMastery: Record<string, MasteryState>;
  srsCards: Record<string, SRSCard>;
  weeklyActivity: boolean[]; // 7 days Mon-Sun
  lastActivityWeek?: string;
}

export interface AppState {
  /** which language the user is currently learning (global preference) */
  activeLanguageId: string;
  /** per-language progress; the active slice is mirrored to the fields above */
  progressByLanguage: Record<string, LanguageProgress>;
  /** languages whose onboarding introduction has been seen */
  seenIntroLanguages: string[];
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
  /** when onboarding auto-opens from a language switch: which language's intro to play (transient) */
  onboardingIntroLanguage: string | null;
  hasSeenGenderIntro: boolean;
  theme: string;
  isThemeSelectorOpen: boolean;
  font: string;
  isFontSelectorOpen: boolean;
  settings: CustomizationSettings;

  // Actions
  setActiveLanguage: (languageId: string) => void;
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
  importBackupState: (payload: unknown) => boolean;
}

export const STORAGE_KEY = "brucke_app_state_v1";
export const STORAGE_COOKIE_KEY = "brucke_progress";

export function getWeekString(date = new Date()): string {
  // purely local time: keyed by the local Monday of that week — never mixes
  // local getters with UTC setters
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const dayNum = (d.getDay() + 6) % 7; // Monday = 0
  d.setDate(d.getDate() - dayNum);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-W${mm}-${dd}`;
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

/** Structural guard for persisted-state and backup payloads: any non-null,
 * non-array object qualifies. Field-level validation and defaults are applied
 * afterwards (normalizeParsedState), so a partial payload is repaired —
 * never a crash and never a reason to discard the other store. */
export function isPlausibleStateObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseStoredJson(raw: string | null): unknown {
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function loadSavedState(): Partial<AppState> {
  if (typeof window === "undefined") return {};

  // Parse BOTH stores before choosing a base: a valid-but-truncated
  // localStorage payload must not bury recoverable cookie data. The cookie
  // write runs in the same saveState pass as localStorage, so it is never
  // staler than the localStorage snapshot it accompanies.
  const local = parseStoredJson(localStorage.getItem(STORAGE_KEY));
  const cookie = parseStoredJson(getCookie(STORAGE_COOKIE_KEY));

  let parsed: Record<string, unknown> | null = null;
  if (isPlausibleStateObject(local) && isPlausibleStateObject(cookie)) {
    // Field-level merge: localStorage wins for every field it actually has;
    // the cookie fills whatever the localStorage payload is missing.
    parsed = { ...cookie, ...local };
  } else if (isPlausibleStateObject(local)) {
    parsed = local;
  } else if (isPlausibleStateObject(cookie)) {
    parsed = cookie;
  }

  if (parsed) {
    return normalizeParsedState(parsed);
  }
  return {};
}

export const isDangerousKey = (key: string): boolean =>
  key === "__proto__" || key === "constructor" || key === "prototype" || key === "toString" || key === "valueOf";

/** Applies schema defaults & legacy migrations to a parsed persisted-state
 * object (mutates and returns it). */
function normalizeParsedState(parsed: Record<string, any>): Partial<AppState> {
  // ponytail: defensive schema defaults preventing corrupted storage crashes
  if (!Array.isArray(parsed.completedLessons)) parsed.completedLessons = [];
  if (!parsed.lessonProgress || typeof parsed.lessonProgress !== "object" || Array.isArray(parsed.lessonProgress)) parsed.lessonProgress = {};
  if (!parsed.lessonStars || typeof parsed.lessonStars !== "object" || Array.isArray(parsed.lessonStars)) parsed.lessonStars = {};
  if (!parsed.wordMastery || typeof parsed.wordMastery !== "object" || Array.isArray(parsed.wordMastery)) parsed.wordMastery = {};
  if (!parsed.srsCards || typeof parsed.srsCards !== "object" || Array.isArray(parsed.srsCards)) parsed.srsCards = {};
  const rawId = Number(parsed.currentLessonId);
  parsed.currentLessonId = Number.isInteger(rawId) && rawId >= 1 ? rawId : 1;
  if (!Array.isArray(parsed.weeklyActivity)) parsed.weeklyActivity = [false, false, false, false, false, false, false];
  if (parsed.settings) {
    parsed.settings = { ...DEFAULT_SETTINGS, ...parsed.settings };
    // "enter" and "tab" were removed (tab hijacks keyboard focus navigation);
    // ensure quickRestart is valid
    if (parsed.settings.quickRestart !== "off" && parsed.settings.quickRestart !== "esc") {
      parsed.settings.quickRestart = DEFAULT_SETTINGS.quickRestart;
    }
  }

  // Language slices: pre-multi-language saves kept progress only on the top
  // level — migrate it into the default language's slice so nobody loses a
  // day of German progress.
  if (!parsed.activeLanguageId || !isValidLanguageId(parsed.activeLanguageId)) {
    parsed.activeLanguageId = DEFAULT_LANGUAGE_ID;
  }
  // languages without content are hidden from the UI — anyone parked on one
  // (e.g. from before it was pulled) gets moved back to the default language
  if (getLanguageDefinition(parsed.activeLanguageId).status !== "available") {
    parsed.activeLanguageId = DEFAULT_LANGUAGE_ID;
  }
  if (!parsed.progressByLanguage || typeof parsed.progressByLanguage !== "object" || Array.isArray(parsed.progressByLanguage)) {
    parsed.progressByLanguage = {};
  }
  if (!Array.isArray(parsed.seenIntroLanguages)) parsed.seenIntroLanguages = [];
  if (!parsed.progressByLanguage[parsed.activeLanguageId]) {
    parsed.progressByLanguage[parsed.activeLanguageId] = {
      completedLessons: parsed.completedLessons,
      currentLessonId: parsed.currentLessonId,
      lessonProgress: parsed.lessonProgress,
      lessonStars: parsed.lessonStars,
      wordMastery: parsed.wordMastery,
      srsCards: parsed.srsCards,
      weeklyActivity: parsed.weeklyActivity,
      lastActivityWeek: parsed.lastActivityWeek,
    };
  }
  // The top-level fields always mirror the active language's slice.
  const activeSlice = parsed.progressByLanguage[parsed.activeLanguageId];
  if (activeSlice && typeof activeSlice === "object") {
    if (!Array.isArray(activeSlice.completedLessons)) activeSlice.completedLessons = [];
    if (!activeSlice.lessonProgress || typeof activeSlice.lessonProgress !== "object" || Array.isArray(activeSlice.lessonProgress)) activeSlice.lessonProgress = {};
    if (!activeSlice.lessonStars || typeof activeSlice.lessonStars !== "object" || Array.isArray(activeSlice.lessonStars)) activeSlice.lessonStars = {};
    if (!activeSlice.wordMastery || typeof activeSlice.wordMastery !== "object" || Array.isArray(activeSlice.wordMastery)) activeSlice.wordMastery = {};
    if (!activeSlice.srsCards || typeof activeSlice.srsCards !== "object" || Array.isArray(activeSlice.srsCards)) activeSlice.srsCards = {};
    if (!Array.isArray(activeSlice.weeklyActivity)) activeSlice.weeklyActivity = [false, false, false, false, false, false, false];
    parsed.completedLessons = activeSlice.completedLessons;
    const rawSliceId = Number(activeSlice.currentLessonId);
    activeSlice.currentLessonId = Number.isInteger(rawSliceId) && rawSliceId >= 1 ? rawSliceId : parsed.currentLessonId;
    parsed.currentLessonId = activeSlice.currentLessonId;
    parsed.lessonProgress = activeSlice.lessonProgress;
    parsed.lessonStars = activeSlice.lessonStars;
    parsed.wordMastery = activeSlice.wordMastery;
    parsed.srsCards = activeSlice.srsCards;
    parsed.weeklyActivity = activeSlice.weeklyActivity;
    parsed.lastActivityWeek = activeSlice.lastActivityWeek;
  }
  return parsed;
}

let lastSerialized = "";

// the auto-open of onboarding on first visit must only ever happen once per
// page load — cross-tab `storage` events re-run hydrateFromStorage and must
// not yank the intro open over whatever the user is doing now
let hasAutoOpenedOnboarding = false;

export function saveState(state: AppState) {
  if (typeof window === "undefined") return;
  // the active language's slice is derived from the mirrored top-level fields
  const progressByLanguage: Record<string, LanguageProgress> = {
    ...state.progressByLanguage,
    [state.activeLanguageId]: {
      completedLessons: state.completedLessons,
      currentLessonId: state.currentLessonId,
      lessonProgress: state.lessonProgress,
      lessonStars: state.lessonStars,
      wordMastery: state.wordMastery,
      srsCards: state.srsCards,
      weeklyActivity: state.weeklyActivity,
      lastActivityWeek: state.lastActivityWeek,
    },
  };
  const toPersist = {
    activeLanguageId: state.activeLanguageId,
    progressByLanguage,
    seenIntroLanguages: state.seenIntroLanguages,
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
      activeLanguageId: state.activeLanguageId,
      progressByLanguage,
      seenIntroLanguages: state.seenIntroLanguages,
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
      const minimal = JSON.stringify({
        theme: state.theme,
        font: state.font,
        activeLanguageId: state.activeLanguageId,
        seenIntroLanguages: state.seenIntroLanguages,
      });
      setCookie(STORAGE_COOKIE_KEY, minimal, 365);
    }
  } catch {}
}

const initialSaved = loadSavedState();

export const useAppStore = create<AppState>((set, get) => ({
  activeLanguageId: initialSaved.activeLanguageId || DEFAULT_LANGUAGE_ID,
  progressByLanguage: initialSaved.progressByLanguage || {},
  seenIntroLanguages: initialSaved.seenIntroLanguages || [],
  completedLessons: initialSaved.completedLessons || [],
  currentLessonId: initialSaved.currentLessonId || 1,
  lessonProgress: initialSaved.lessonProgress || {},
  lessonStars: initialSaved.lessonStars || {},
  wordMastery: initialSaved.wordMastery || {},
  srsCards: initialSaved.srsCards || {},
  weeklyActivity: initialSaved.weeklyActivity || [false, false, false, false, false, false, false],
  lastActivityWeek: initialSaved.lastActivityWeek || getWeekString(),
  activeWordDrawerId: null,
  preferredReviewMode: (initialSaved.preferredReviewMode as ReviewMode) || "flashcard",
  hasCompletedOnboarding: initialSaved.hasCompletedOnboarding || false,
  isOnboardingOpen: false,
  onboardingIntroLanguage: null,
  hasSeenGenderIntro: initialSaved.hasSeenGenderIntro || false,
  theme: initialSaved.theme || DEFAULT_THEME,
  isThemeSelectorOpen: false,
  font: initialSaved.font || DEFAULT_FONT,
  isFontSelectorOpen: false,
  settings: initialSaved.settings ? { ...DEFAULT_SETTINGS, ...initialSaved.settings } : DEFAULT_SETTINGS,
  tolerance: initialSaved.tolerance || {
    umlautTolerance: initialSaved.settings?.lazyMode || false,
    capitalizationTolerance: initialSaved.settings?.capitalizationTolerance || false,
    umlautDismissals: 0,
    capitalizationDismissals: 0,
  },

  setActiveLanguage: (languageId) => {
    if (!isValidLanguageId(languageId)) return;
    set((s) => {
      if (s.activeLanguageId === languageId) return s;
      // park the outgoing language's mirrored progress, then restore the
      // incoming language's slice (or a fresh one for a first-time language)
      const progressByLanguage = {
        ...s.progressByLanguage,
        [s.activeLanguageId]: {
          completedLessons: s.completedLessons,
          currentLessonId: s.currentLessonId,
          lessonProgress: s.lessonProgress,
          lessonStars: s.lessonStars,
          wordMastery: s.wordMastery,
          srsCards: s.srsCards,
          weeklyActivity: s.weeklyActivity,
          lastActivityWeek: s.lastActivityWeek,
        },
      };
      const incoming = progressByLanguage[languageId];
      // the intro is not marked seen at selection time — only completing the
      // wizard (completeOnboarding) marks it, so an early dismissal replays it
      const next: AppState = {
        ...s,
        activeLanguageId: languageId,
        progressByLanguage,
        completedLessons: incoming?.completedLessons || [],
        currentLessonId: incoming?.currentLessonId || 1,
        lessonProgress: incoming?.lessonProgress || {},
        lessonStars: incoming?.lessonStars || {},
        wordMastery: incoming?.wordMastery || {},
        srsCards: incoming?.srsCards || {},
        weeklyActivity: incoming?.weeklyActivity || [false, false, false, false, false, false, false],
        lastActivityWeek: incoming?.lastActivityWeek,
        activeWordDrawerId: null,
        // a language's introduction plays the first time it is chosen
        isOnboardingOpen: !s.seenIntroLanguages.includes(languageId),
        onboardingIntroLanguage: s.seenIntroLanguages.includes(languageId) ? null : languageId,
      };
      saveState(next);
      return next;
    });
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
      const seenIntroLanguages = s.seenIntroLanguages.includes(s.activeLanguageId)
        ? s.seenIntroLanguages
        : [...s.seenIntroLanguages, s.activeLanguageId];
      // TM-4a: the primer sits inside onboarding, so completing or skipping the
      // wizard marks it seen (additive settings key; everything else untouched)
      const settings = { ...s.settings, posturePrimerSeen: true };
      const next = { ...s, hasCompletedOnboarding: true, isOnboardingOpen: false, onboardingIntroLanguage: null, seenIntroLanguages, settings };
      saveState(next);
      return next;
    });
  },

  openOnboarding: () => {
    set({ isOnboardingOpen: true, onboardingIntroLanguage: null });
  },

  closeOnboarding: () => {
    // dismissing (skip/escape) closes the intro but leaves the language out of
    // seenIntroLanguages so its intro can replay; still counts as onboarding
    // having been dealt with, to avoid nagging on every fresh load
    const settings = { ...get().settings, posturePrimerSeen: true };
    const next = { isOnboardingOpen: false, onboardingIntroLanguage: null, hasCompletedOnboarding: true, settings };
    set(next);
    saveState({ ...get(), ...next });
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
      activeLanguageId: DEFAULT_LANGUAGE_ID,
      progressByLanguage: {},
      seenIntroLanguages: [],
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
      onboardingIntroLanguage: null,
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

  importBackupState: (rawPayload: unknown) => {
    // the boundary type is `unknown` — everything below narrows defensively
    // before use, so a hostile or malformed backup can only be ignored
    const payload = rawPayload as Record<string, any>;
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) return false;
    // an object with none of our fields is not a backup — say so instead of
    // reporting success while restoring nothing
    const RECOGNIZED_FIELDS = [
      "settings",
      "activeLanguageId",
      "progressByLanguage",
      "seenIntroLanguages",
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
          .map((item: unknown) => {
            if (typeof item === "number") return item;
            if (typeof item === "string") {
              const parsed = parseInt(item.replace(/[^\d]/g, ""), 10);
              return isNaN(parsed) ? null : parsed;
            }
            return null;
          })
          .filter((n: unknown): n is number => typeof n === "number");
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

      let wordMastery = s.wordMastery;
      if (payload.wordMastery && typeof payload.wordMastery === "object" && !Array.isArray(payload.wordMastery)) {
        let masteryMap: Record<string, MasteryState> = { ...s.wordMastery };
        for (const [k, v] of Object.entries(payload.wordMastery)) {
          if (k && !isDangerousKey(k)) {
            masteryMap[k] = v as MasteryState;
          }
        }
        wordMastery = masteryMap;
      }

      let srsCards = s.srsCards;
      if (Array.isArray(payload.srsCards)) {
        let cardMap: Record<string, SRSCard> = { ...s.srsCards };
        payload.srsCards.forEach((c: unknown) => {
          // "__proto__" and prototype pollution keys via plain assignment swap the object's prototype —
          // skip them so a hostile backup can't inject inherited SRS state
          if (c && typeof c === "object" && "id" in c) {
            const cardId = c.id;
            if (typeof cardId === "string" && cardId && !isDangerousKey(cardId)) {
              cardMap[cardId] = c as unknown as SRSCard;
            }
          }
        });
        srsCards = cardMap;
      } else if (payload.srsCards && typeof payload.srsCards === "object") {
        let cardMap: Record<string, SRSCard> = { ...s.srsCards };
        for (const [cardId, card] of Object.entries(payload.srsCards)) {
          if (cardId && !isDangerousKey(cardId) && card && typeof card === "object") {
            cardMap[cardId] = card as unknown as SRSCard;
          }
        }
        srsCards = cardMap;
      }

      const weeklyActivity = Array.isArray(payload.weeklyActivity) && payload.weeklyActivity.length === 7
        ? payload.weeklyActivity
        : s.weeklyActivity;

      const VALID_REVIEW_MODES: ReviewMode[] = ["flashcard", "mcq", "tiles", "typing"];
      const rawReviewMode = payload.preferredReviewMode as ReviewMode;
      const nextPreferredReviewMode = VALID_REVIEW_MODES.includes(rawReviewMode)
        ? rawReviewMode
        : s.preferredReviewMode;
      const nextHasCompletedOnboarding =
        typeof payload.hasCompletedOnboarding === "boolean" ? payload.hasCompletedOnboarding : s.hasCompletedOnboarding;
      const nextHasSeenGenderIntro =
        typeof payload.hasSeenGenderIntro === "boolean" ? payload.hasSeenGenderIntro : s.hasSeenGenderIntro;
      const nextLastActivityWeek = typeof payload.lastActivityWeek === "string" && payload.lastActivityWeek
        ? payload.lastActivityWeek
        : s.lastActivityWeek;

      // Language identity & slices. A pre-multi-language backup (no
      // progressByLanguage) carries one language's progress on the top level —
      // attribute it to the backup's own active language, not the current one.
      const backupLanguageId =
        typeof payload.activeLanguageId === "string" && isValidLanguageId(payload.activeLanguageId)
          ? payload.activeLanguageId
          : s.activeLanguageId;
      let progressByLanguage = { ...s.progressByLanguage };
      if (payload.progressByLanguage && typeof payload.progressByLanguage === "object" && !Array.isArray(payload.progressByLanguage)) {
        for (const [langId, slice] of Object.entries(payload.progressByLanguage)) {
          if (isValidLanguageId(langId) && !isDangerousKey(langId) && slice && typeof slice === "object" && !Array.isArray(slice)) {
            const cleanSlice: LanguageProgress = { ...(progressByLanguage[langId] || {}), ...(slice as LanguageProgress) };
            if (cleanSlice.srsCards && typeof cleanSlice.srsCards === "object" && !Array.isArray(cleanSlice.srsCards)) {
              const safeCards: Record<string, SRSCard> = {};
              for (const [cId, card] of Object.entries(cleanSlice.srsCards)) {
                if (cId && !isDangerousKey(cId)) {
                  safeCards[cId] = card;
                }
              }
              cleanSlice.srsCards = safeCards;
            }
            progressByLanguage[langId] = cleanSlice;
          }
        }
      } else if (
        backupLanguageId !== s.activeLanguageId &&
        !isDangerousKey(backupLanguageId) &&
        (Array.isArray(payload.completedLessons) ||
          (payload.wordMastery && typeof payload.wordMastery === "object"))
      ) {
        progressByLanguage[backupLanguageId] = {
          completedLessons: Array.isArray(payload.completedLessons) ? completedLessons : progressByLanguage[backupLanguageId]?.completedLessons || [],
          currentLessonId: typeof currentLessonId === "number" ? currentLessonId : 1,
          lessonProgress: (payload.lessonProgress && typeof payload.lessonProgress === "object" ? payload.lessonProgress : {}) as Record<number, LessonProgress>,
          lessonStars: (payload.lessonStars && typeof payload.lessonStars === "object" ? payload.lessonStars : {}) as Record<number, LessonStar>,
          wordMastery: (payload.wordMastery && typeof payload.wordMastery === "object" ? payload.wordMastery : {}) as Record<string, MasteryState>,
          srsCards: srsCards as Record<string, SRSCard>,
          weeklyActivity: Array.isArray(payload.weeklyActivity) ? weeklyActivity : [false, false, false, false, false, false, false],
          lastActivityWeek: typeof payload.lastActivityWeek === "string" ? payload.lastActivityWeek : undefined,
        };
      }
      const nextSeenIntroLanguages = Array.isArray(payload.seenIntroLanguages)
        ? Array.from(new Set([...s.seenIntroLanguages, ...payload.seenIntroLanguages.filter((x: unknown) => typeof x === "string")]))
        : s.seenIntroLanguages;

      const nextTolerance = {
        ...s.tolerance,
        umlautTolerance: typeof nextSettings.lazyMode === "boolean" ? nextSettings.lazyMode : s.tolerance.umlautTolerance,
        capitalizationTolerance: typeof nextSettings.capitalizationTolerance === "boolean" ? nextSettings.capitalizationTolerance : s.tolerance.capitalizationTolerance,
      };

      const next: AppState = {
        ...s,
        activeLanguageId: backupLanguageId,
        progressByLanguage,
        seenIntroLanguages: nextSeenIntroLanguages,
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
        const currentTheme = saved.theme || s.theme || DEFAULT_THEME;
        applyTheme(currentTheme);

        const currentFont = saved.font || s.font || DEFAULT_FONT;
        applyFont(currentFont);

        const nextLang = saved.activeLanguageId || s.activeLanguageId;
        const isLangSwitch = Boolean(saved.activeLanguageId && saved.activeLanguageId !== s.activeLanguageId);
        const activeSlice = saved.progressByLanguage?.[nextLang];

        return {
          ...s,
          activeLanguageId: nextLang,
          progressByLanguage: { ...s.progressByLanguage, ...(saved.progressByLanguage || {}) },
          seenIntroLanguages: Array.isArray(saved.seenIntroLanguages)
            ? Array.from(new Set([...s.seenIntroLanguages, ...saved.seenIntroLanguages]))
            : s.seenIntroLanguages,
          completedLessons: isLangSwitch
            ? (Array.isArray(saved.completedLessons) ? saved.completedLessons : (activeSlice?.completedLessons ?? []))
            : (Array.isArray(saved.completedLessons)
              ? Array.from(new Set([...s.completedLessons, ...saved.completedLessons]))
              : s.completedLessons),
          currentLessonId: isLangSwitch
            ? (saved.currentLessonId ?? activeSlice?.currentLessonId ?? 1)
            : (saved.currentLessonId ? Math.max(s.currentLessonId, saved.currentLessonId) : s.currentLessonId),
          lessonProgress: isLangSwitch
            ? (saved.lessonProgress ?? activeSlice?.lessonProgress ?? {})
            : { ...s.lessonProgress, ...(saved.lessonProgress || {}) },
          lessonStars: isLangSwitch
            ? (saved.lessonStars ?? activeSlice?.lessonStars ?? {})
            : { ...s.lessonStars, ...(saved.lessonStars || {}) },
          wordMastery: isLangSwitch
            ? (saved.wordMastery ?? activeSlice?.wordMastery ?? {})
            : { ...s.wordMastery, ...(saved.wordMastery || {}) },
          srsCards: isLangSwitch
            ? (saved.srsCards ?? activeSlice?.srsCards ?? {})
            : { ...s.srsCards, ...(saved.srsCards || {}) },
          weeklyActivity: isLangSwitch
            ? (Array.isArray(saved.weeklyActivity) ? saved.weeklyActivity : (activeSlice?.weeklyActivity ?? [false, false, false, false, false, false, false]))
            : (Array.isArray(saved.weeklyActivity) ? saved.weeklyActivity : s.weeklyActivity),
          lastActivityWeek: isLangSwitch
            ? (saved.lastActivityWeek ?? activeSlice?.lastActivityWeek ?? undefined)
            : (saved.lastActivityWeek || s.lastActivityWeek),
          theme: currentTheme,
          font: currentFont,
          hasCompletedOnboarding: completed,
          // first visit auto-opens onboarding; later (cross-tab) hydrations
          // must never reopen or close an in-progress intro
          ...(hasAutoOpenedOnboarding ? {} : { isOnboardingOpen: !completed }),
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
    } else if (!hasAutoOpenedOnboarding) {
      // Clean slate first-time user: trigger onboarding (once per page load)!
      applyTheme(DEFAULT_THEME);
      applyFont(DEFAULT_FONT);
      applyAppearanceSettings(DEFAULT_SETTINGS);
      set((s) => ({ ...s, isOnboardingOpen: !s.hasCompletedOnboarding }));
    }
    hasAutoOpenedOnboarding = true;
  },
}));

// Auto-hydrate on client load if running in browser
if (typeof window !== "undefined") {
  const initial = loadSavedState();
  applyTheme(initial.theme || DEFAULT_THEME);
  applyFont(initial.font || DEFAULT_FONT);
  if (initial.settings) {
    applyAppearanceSettings({ ...DEFAULT_SETTINGS, ...initial.settings });
  } else {
    applyAppearanceSettings(DEFAULT_SETTINGS);
  }
}
