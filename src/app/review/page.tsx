"use client";

// ponytail: cohesive multi-modal review hub with 4 decks, selectable review styles, and unified SM-2 grading

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import {
  RotateCcw,
  Flame,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  Check,
  X,
  RefreshCw,
  Globe,
  HelpCircle,
  Volume2,
  AlertCircle,
} from "lucide-react";
import { ShiftPair } from "@/components/common/ShiftPair";
import { GermanCharBar } from "@/components/common/GermanCharBar";
import { GenderBadge } from "@/components/common/GenderBadge";
import { GenderGuideBanner } from "@/components/common/GenderGuideBanner";
import { useAppStore } from "@/lib/store";
import { getDueCards, getWeakestCards, localDateKey, type ReviewGrade } from "@/lib/srs";
import { generateMCQOptions, generateWordTiles } from "@/lib/review-modes";
import { getAtlasFamilies } from "@/lib/atlas-families";
import { playTargetAudio } from "@/lib/audio";
import { computeLetterDiff, evaluateAnswerAccuracy } from "@/lib/letter-diff";
import { soundEngine } from "@/lib/sound";
import { getLanguageDefinition } from "@/data/languages";
import { getLanguageContent, EMPTY_COMPENDIUM } from "@/data/language-content";
import { getWordEntityMap } from "@/lib/word-entities";
import type { ReviewMode, SRSCard, WordEntity } from "@/lib/types";
import { useDialogFocus } from "@/lib/use-dialog-focus";

type DeckType = "due" | "shift" | "weakest" | "recent" | "compounds" | "domain" | "everything";

/** Sentinel select value meaning "every family" / "every domain". */
const ALL_ID = "all";

interface PendingDeckStart {
  deck: DeckType;
  customCards?: SRSCard[];
  /** Human label for the mode-selector title (e.g. a domain's display name). */
  deckLabel?: string;
}

interface ReviewSessionStats {
  reviewed: number;
  correct: number;
  again: number;
  hard: number;
  easy: number;
}

const EMPTY_SESSION_STATS: ReviewSessionStats = {
  reviewed: 0,
  correct: 0,
  again: 0,
  hard: 0,
  easy: 0,
};

export default function ReviewPage() {
  const activeLanguageId = useAppStore((s) => s.activeLanguageId);
  const language = getLanguageDefinition(activeLanguageId);
  const content = getLanguageContent(activeLanguageId);
  // coming-soon languages get an empty compendium; the page shows a
  // construction notice instead of German content below
  const data = content.compendium ?? EMPTY_COMPENDIUM;
  const [mounted, setMounted] = useState(false);
  const [activeDeck, setActiveDeck] = useState<DeckType | null>(null);
  const [selectedShiftId, setSelectedShiftId] = useState<string>("p_to_pf_f");
  const [selectedDomainId, setSelectedDomainId] = useState<string>("");
  const [sessionCards, setSessionCards] = useState<SRSCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isCapsLock, setIsCapsLock] = useState(false);
  const [sessionStats, setSessionStats] = useState<ReviewSessionStats>(EMPTY_SESSION_STATS);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [completedDeck, setCompletedDeck] = useState<DeckType | null>(null);

  // Review Style Mode State
  const preferredReviewMode = useAppStore((s) => s.preferredReviewMode);
  const setPreferredReviewMode = useAppStore((s) => s.setPreferredReviewMode);
  const settings = useAppStore((s) => s.settings);
  const [reviewMode, setReviewMode] = useState<ReviewMode>(preferredReviewMode || "flashcard");
  const [isModeSelectorOpen, setIsModeSelectorOpen] = useState(false);
  const [pendingDeck, setPendingDeck] = useState<PendingDeckStart | null>(null);
  const [rememberPreference, setRememberPreference] = useState(true);
  const modeDialogRef = useRef<HTMLDivElement>(null);

  const closeModeSelector = () => {
    setIsModeSelectorOpen(false);
    setPendingDeck(null);
  };

  useDialogFocus({
    open: isModeSelectorOpen,
    containerRef: modeDialogRef,
    onEscape: closeModeSelector,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mode-Specific Interactive State
  const [inputGuess, setInputGuess] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedTiles, setSelectedTiles] = useState<string[]>([]);
  const [availableTiles, setAvailableTiles] = useState<string[]>([]);
  const [currentAutoGrade, setCurrentAutoGrade] = useState<ReviewGrade | null>(null);
  const [currentFeedbackNote, setCurrentFeedbackNote] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const srsCards = useAppStore((s) => s.srsCards);
  const wordMastery = useAppStore((s) => s.wordMastery);
  const recordReview = useAppStore((s) => s.recordReview);

  const dueCards = getDueCards(srsCards);
  const weakestCards = getWeakestCards(srsCards);

  /** Fresh un-seen SM-2 card, so a word with no history is still reviewable. */
  const blankCard = useCallback(
    (wordId: string): SRSCard =>
      srsCards[wordId] || {
        word_id: wordId,
        interval: 1,
        repetitions: 0,
        ease_factor: 2.5,
        due_date: localDateKey(),
        lapses: 0,
        last_reviewed: null,
      },
    [srsCards]
  );

  // Atlas families include the nine authored shifts plus the unshifted layer,
  // so "all families" genuinely spans the whole dictionary.
  const atlasFamilies = useMemo(() => getAtlasFamilies(data), [data]);

  // Sync preferred review mode from store when hydrated
  useEffect(() => {
    if (preferredReviewMode) {
      setReviewMode(preferredReviewMode);
    }
  }, [preferredReviewMode]);

  // Shared map keeps core words, compound calques, and false friends on the same detail path.
  const allWordsMap: Record<string, WordEntity> = getWordEntityMap(activeLanguageId);

  const compoundCards: SRSCard[] = useMemo(() => {
    const fallback = (): SRSCard => ({
      word_id: "",
      interval: 1,
      repetitions: 0,
      ease_factor: 2.5,
      due_date: localDateKey(),
      lapses: 0,
      last_reviewed: null,
    });
    const items: SRSCard[] = [];
    data.compounds.forEach((c) => {
      const id = `compound_${c.id}`;
      items.push(srsCards[id] || { ...fallback(), word_id: id });
    });
    data.falseFriends.forEach((f) => {
      const id = `trap_${f.id}`;
      items.push(srsCards[id] || { ...fallback(), word_id: id });
    });
    return items;
  }, [srsCards, data]);

  // Thematic domain decks: the full compendium sliced by each word's domain.
  // Deliberately NOT gated by encounter history — every word in the compendium
  // is reviewable immediately, even if it never appeared in a lesson.
  const domainGroups: Array<{ id: string; label: string; words: WordEntity[] }> = useMemo(() => {
    const map = new Map<string, WordEntity[]>();
    for (const word of data.wordList) {
      const d = word.domain || "general";
      const bucket = map.get(d);
      if (bucket) bucket.push(word);
      else map.set(d, [word]);
    }
    const label = (id: string) =>
      ({
        body: "Body & Health",
        colors: "Colors",
        core: "Core Shift Words",
        countries: "Countries",
        directions: "Directions",
        emotions: "Emotions",
        family: "Family",
        food: "Food & Drink",
        general: "General",
        hobbies: "Hobbies",
        home: "Home",
        months: "Months",
        nature: "Nature & Animals",
        numbers: "Numbers",
        people: "People & Places",
        professions: "Professions",
        seasons: "Seasons",
        shopping: "Shopping & Money",
        survival: "Survival Phrases",
        time: "Time",
        travel: "Travel & Town",
        weather: "Weather",
        clothing: "Clothing",
        adjectives: "Adjectives",
      }[id] || id.charAt(0).toUpperCase() + id.slice(1));
    return Array.from(map.entries())
      .map(([id, words]) => ({ id, label: label(id), words }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [data]);

  useEffect(() => {
    if (!selectedDomainId && domainGroups.length > 0) {
      setSelectedDomainId(domainGroups[0].id);
    }
  }, [domainGroups, selectedDomainId]);

  // "Review everything": the entire dictionary, every thematic domain, plus the
  // compound calques and false-friend traps — the longest possible session.
  const everythingCards: SRSCard[] = useMemo(
    () => [...data.wordList.map((w) => blankCard(w.id)), ...compoundCards],
    [blankCard, data, compoundCards]
  );

  /** Every word covered by the atlas, de-duplicated across overlapping families. */
  const allFamilyWordIds = useMemo(
    () => Array.from(new Set(atlasFamilies.flatMap((f) => f.word_ids))),
    [atlasFamilies]
  );

  const shiftDeckSize =
    selectedShiftId === ALL_ID ? allFamilyWordIds.length : (data.shifts[selectedShiftId]?.word_ids.length ?? 0);

  const domainDeckSize =
    selectedDomainId === ALL_ID
      ? data.wordList.length
      : (domainGroups.find((g) => g.id === selectedDomainId)?.words.length ?? 0);

  // 1-Click direct deck start
  const startDeck = (deck: DeckType, customCards?: SRSCard[]) => {
    setActiveDeck(deck);
    setCurrentIndex(0);
    setIsRevealed(false);
    setInputGuess("");
    setSelectedOption(null);
    setSelectedTiles([]);
    setCurrentAutoGrade(null);
    setCurrentFeedbackNote(null);
    setSessionStats(EMPTY_SESSION_STATS);
    setSessionComplete(false);
    setCompletedDeck(null);

    if (customCards) {
      setSessionCards(customCards);
      return;
    }

    if (deck === "due") {
      setSessionCards(dueCards);
    } else if (deck === "weakest") {
      setSessionCards(weakestCards);
    } else if (deck === "shift") {
      // "all" merges every atlas family (nine shifts + the unshifted layer).
      const selectedFamilies =
        selectedShiftId === ALL_ID ? atlasFamilies : [data.shifts[selectedShiftId]].filter(Boolean);
      const familyWordIds = Array.from(new Set(selectedFamilies.flatMap((f) => f.word_ids)));
      setSessionCards(familyWordIds.map(blankCard));
    } else if (deck === "recent") {
      const recentWords = data.wordList.slice(0, 20);
      const recentCards = recentWords.map((w) => blankCard(w.id));
      setSessionCards(recentCards);
    } else if (deck === "compounds") {
      setSessionCards(compoundCards);
    } else if (deck === "domain") {
      const domainWords =
        selectedDomainId === ALL_ID
          ? domainGroups.flatMap((g) => g.words)
          : (domainGroups.find((g) => g.id === selectedDomainId)?.words ?? []);
      setSessionCards(domainWords.map((w) => blankCard(w.id)));
    } else if (deck === "everything") {
      setSessionCards(everythingCards);
    }
  };

  // Request deck start: prompts the 4 review style options
  const requestDeckStart = (deck: DeckType, customCards?: SRSCard[], deckLabel?: string) => {
    setPendingDeck({ deck, customCards, deckLabel });
    setIsModeSelectorOpen(true);
  };

  // Execute deck start with selected mode (e.g. from modal style chooser or hotkeys 1-4)
  const selectModeAndStart = (mode: ReviewMode) => {
    setReviewMode(mode);
    if (rememberPreference) {
      setPreferredReviewMode(mode);
    }
    setIsModeSelectorOpen(false);

    if (pendingDeck) {
      startDeck(pendingDeck.deck, pendingDeck.customCards);
      setPendingDeck(null);
    }
  };

  const currentCard = sessionCards[currentIndex];
  const currentWord: WordEntity | undefined = currentCard ? allWordsMap[currentCard.word_id] : undefined;

  // MCQ Options for current card
  const mcqOptions = useMemo(() => {
    if (!currentWord) return [];
    return generateMCQOptions(currentWord, data.wordList, 4);
  }, [currentWord, data]);

  // Tiles for current card
  const tileData = useMemo(() => {
    if (!currentWord) return { tiles: [], targetChunks: [], targetAnswer: "" };
    return generateWordTiles(currentWord, data.wordList);
  }, [currentWord, data]);

  // Reset interactive state per card
  useEffect(() => {
    setIsRevealed(false);
    setInputGuess("");
    setSelectedOption(null);
    setSelectedTiles([]);
    setCurrentAutoGrade(null);
    setCurrentFeedbackNote(null);
    if (tileData) {
      setAvailableTiles(tileData.tiles);
    }
  }, [currentCard?.word_id, currentIndex, tileData]);

  // SM-2 Review Grade Handler
  const handleGrade = (grade: ReviewGrade) => {
    if (!currentCard || !isRevealed) return;

    if (grade === 1) {
      void soundEngine.playError(settings.playSoundOnError, settings.soundVolume);
    } else {
      void soundEngine.playClick(settings.playSoundOnClick, settings.soundVolume);
    }

    recordReview(currentCard.word_id, grade);

    const nextStats: ReviewSessionStats = {
      reviewed: sessionStats.reviewed + 1,
      correct: sessionStats.correct + (grade >= 3 ? 1 : 0),
      again: sessionStats.again + (grade === 1 ? 1 : 0),
      hard: sessionStats.hard + (grade === 3 ? 1 : 0),
      easy: sessionStats.easy + (grade === 5 ? 1 : 0),
    };
    setSessionStats(nextStats);

    setIsRevealed(false);
    setInputGuess("");
    setSelectedOption(null);
    setSelectedTiles([]);
    setCurrentAutoGrade(null);
    setCurrentFeedbackNote(null);

    if (currentIndex + 1 < sessionCards.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      setCompletedDeck(activeDeck);
      setSessionComplete(true);
      setActiveDeck(null); // Finish session
    }
  };

  const exitDeck = () => {
    setActiveDeck(null);
    setSessionComplete(false);
    setCompletedDeck(null);
    setSessionStats(EMPTY_SESSION_STATS);
    setIsRevealed(false);
    setCurrentAutoGrade(null);
    setCurrentFeedbackNote(null);
  };

  // MCQ Selection Handler
  const handleSelectMCQ = (option: string) => {
    if (isRevealed || !currentWord) return;
    setSelectedOption(option);
    const isCorrect = option.toLowerCase() === currentWord.target_word.toLowerCase();
    if (isCorrect) {
      void soundEngine.playClick(settings.playSoundOnClick, settings.soundVolume);
    } else {
      void soundEngine.playError(settings.playSoundOnError, settings.soundVolume);
    }
    setCurrentAutoGrade(isCorrect ? 4 : 1);
    setCurrentFeedbackNote(null);
    setIsRevealed(true);
  };

  // Tile Selection Handlers
  const handlePickTile = (tile: string, index: number) => {
    if (isRevealed) return;
    void soundEngine.playClick(settings.playSoundOnClick, settings.soundVolume);
    const nextAvailable = [...availableTiles];
    nextAvailable.splice(index, 1);
    setAvailableTiles(nextAvailable);
    setSelectedTiles((prev) => [...prev, tile]);
  };

  const handleUnpickTile = (tile: string, index: number) => {
    if (isRevealed) return;
    void soundEngine.playClick(settings.playSoundOnClick, settings.soundVolume);
    const nextSelected = [...selectedTiles];
    nextSelected.splice(index, 1);
    setSelectedTiles(nextSelected);
    setAvailableTiles((prev) => [...prev, tile]);
  };

  const handleResetTiles = () => {
    if (isRevealed || !tileData) return;
    void soundEngine.playClick(settings.playSoundOnClick, settings.soundVolume);
    setSelectedTiles([]);
    setAvailableTiles(tileData.tiles);
  };

  const handleCheckTiles = () => {
    if (isRevealed || !currentWord) return;
    const assembled = selectedTiles.join("");
    const isCorrect = assembled.toLowerCase() === currentWord.target_word.toLowerCase();
    if (isCorrect) {
      void soundEngine.playClick(settings.playSoundOnClick, settings.soundVolume);
    } else {
      void soundEngine.playError(settings.playSoundOnError, settings.soundVolume);
    }
    setCurrentAutoGrade(isCorrect ? 4 : 1);
    setCurrentFeedbackNote(null);
    setIsRevealed(true);
  };

  const handleCheckTyping = () => {
    if (isRevealed || !currentWord) return;
    const guess = inputGuess.trim();
    if (!guess) {
      setCurrentFeedbackNote("Type an answer before checking.");
      return;
    }

    const evalOptions = {
      umlautTolerance: Boolean(settings.lazyMode),
      capitalizationTolerance: Boolean(settings.capitalizationTolerance),
    };
    const evaluation = evaluateAnswerAccuracy(guess, currentWord.target_word, evalOptions);
    if (evaluation.accuracy === "exact") {
      void soundEngine.playClick(settings.playSoundOnClick, settings.soundVolume);
      setCurrentAutoGrade(4);
      setCurrentFeedbackNote(null);
    } else if (evaluation.accuracy === "almost") {
      // A near miss should be corrected, not punished like a completely wrong answer.
      void soundEngine.playClick(settings.playSoundOnClick, settings.soundVolume);
      setCurrentAutoGrade(3);
      setCurrentFeedbackNote(evaluation.warningNote || "Almost right — review the standard spelling.");
    } else {
      void soundEngine.playError(settings.playSoundOnError, settings.soundVolume);
      setCurrentAutoGrade(1);
      setCurrentFeedbackNote(null);
    }
    setIsRevealed(true);
  };

  const handleTypingInputChange = (val: string) => {
    if (val.length > inputGuess.length) {
      if (settings.stopOnError === "letter" && currentWord) {
        const nextCharIndex = inputGuess.length;
        const expectedTarget = currentWord.target_word;
        if (nextCharIndex < expectedTarget.length) {
          const valChar = val[nextCharIndex].toLowerCase();
          const targetChar = expectedTarget[nextCharIndex].toLowerCase();
          const normalizeChar = (c: string) =>
            c.replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "s");
          const isMatch =
            valChar === targetChar ||
            (settings.lazyMode && normalizeChar(valChar) === normalizeChar(targetChar));
          if (!isMatch) {
            void soundEngine.playError(settings.playSoundOnError, settings.soundVolume);
            return;
          }
        }
      }
      void soundEngine.playClick(settings.playSoundOnClick, settings.soundVolume);
    } else if (val.length < inputGuess.length) {
      void soundEngine.playClick(settings.playSoundOnClick, settings.soundVolume);
    }
    setInputGuess(val);
    setCurrentFeedbackNote(null);
  };

  // Auto-focus input when in typing mode unrevealed
  useEffect(() => {
    if (activeDeck && !isRevealed && reviewMode === "typing") {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeDeck, currentIndex, isRevealed, reviewMode]);

  // Global review keyboard controls:
  // - In Modal: 1-4 chooses style, Esc cancels
  // - In Session:
  //   - Escape: Exit review session cleanly
  //   - Unrevealed:
  //     - Flashcard: Space/Enter reveals
  //     - MCQ: 1-4 selects options
  //     - Tiles: Enter checks, Space reveals
  //     - Typing: Enter checks the typed answer
  //   - Revealed: 1-4 grades, Space/Enter quick-advances with auto-grade or Good (4)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.getModifierState) {
        setIsCapsLock(e.getModifierState("CapsLock"));
      }

      // Quick restart hotkey
      if (
        activeDeck &&
        settings.quickRestart === "esc" &&
        e.key === "Escape" &&
        isRevealed
      ) {
        e.preventDefault();
        setIsRevealed(false);
        setInputGuess("");
        setSelectedOption(null);
        setSelectedTiles([]);
        setCurrentAutoGrade(null);
    setCurrentFeedbackNote(null);
        if (tileData) setAvailableTiles(tileData.tiles);
        return;
      }

      // 1. Mode selector modal hotkeys
      if (isModeSelectorOpen) {
        if (e.key === "1") {
          e.preventDefault();
          selectModeAndStart("flashcard");
        } else if (e.key === "2") {
          e.preventDefault();
          selectModeAndStart("mcq");
        } else if (e.key === "3") {
          e.preventDefault();
          selectModeAndStart("tiles");
        } else if (e.key === "4") {
          e.preventDefault();
          selectModeAndStart("typing");
        } else if (e.key === "Escape") {
          e.preventDefault();
          setIsModeSelectorOpen(false);
          setPendingDeck(null);
        }
        return;
      }

      // 2. No active session
      if (!activeDeck || sessionCards.length === 0) return;

      // Escape exits session
      if (e.key === "Escape") {
        e.preventDefault();
        exitDeck();
        return;
      }

      // If user is inside an input other than our review input, ignore
      if (e.target instanceof HTMLInputElement && e.target !== inputRef.current) {
        return;
      }

      // Confidence mode: blocks backspacing in typing review
      if (e.target === inputRef.current && settings.confidenceMode === "on" && e.key === "Backspace") {
        e.preventDefault();
        return;
      }

      // 3. Card is UNREVEALED
      if (!isRevealed) {
        if (reviewMode === "flashcard") {
          if (e.key === "Enter" || e.key === " " || e.code === "Space") {
            e.preventDefault();
            setIsRevealed(true);
          }
        } else if (reviewMode === "mcq") {
          if (e.key === "1" || e.code === "Digit1" || e.code === "Numpad1") {
            e.preventDefault();
            if (mcqOptions[0]) handleSelectMCQ(mcqOptions[0]);
          } else if (e.key === "2" || e.code === "Digit2" || e.code === "Numpad2") {
            e.preventDefault();
            if (mcqOptions[1]) handleSelectMCQ(mcqOptions[1]);
          } else if (e.key === "3" || e.code === "Digit3" || e.code === "Numpad3") {
            e.preventDefault();
            if (mcqOptions[2]) handleSelectMCQ(mcqOptions[2]);
          } else if (e.key === "4" || e.code === "Digit4" || e.code === "Numpad4") {
            e.preventDefault();
            if (mcqOptions[3]) handleSelectMCQ(mcqOptions[3]);
          } else if (e.key === "Enter" || e.key === " " || e.code === "Space") {
            e.preventDefault();
            setIsRevealed(true);
          }
        } else if (reviewMode === "tiles") {
          if (e.key === "Enter") {
            e.preventDefault();
            if (selectedTiles.length > 0) {
              handleCheckTiles();
            } else {
              setIsRevealed(true);
            }
          } else if (e.key === " " || e.code === "Space") {
            e.preventDefault();
            setIsRevealed(true);
          } else if (e.key === "Backspace") {
            e.preventDefault();
            if (selectedTiles.length > 0) {
              const lastIdx = selectedTiles.length - 1;
              const lastTile = selectedTiles[lastIdx];
              handleUnpickTile(lastTile, lastIdx);
            }
          } else if (/^[a-zA-ZäöüÄÖÜß]$/.test(e.key)) {
            const matchIdx = availableTiles.findIndex((t) =>
              t.toLowerCase().startsWith(e.key.toLowerCase())
            );
            if (matchIdx !== -1) {
              e.preventDefault();
              handlePickTile(availableTiles[matchIdx], matchIdx);
            }
          }
        } else if (reviewMode === "typing") {
          if (e.key === "Enter") {
            e.preventDefault();
            handleCheckTyping();
          } else if ((e.key === " " || e.code === "Space") && e.target !== inputRef.current) {
            e.preventDefault();
            handleCheckTyping();
          }
        }
      } else {
        // 4. Card is REVEALED: Pronunciation audio hotkey
        if (e.key === "r" || e.key === "R" || e.key === "a" || e.key === "A") {
          e.preventDefault();
          if (currentWord) {
            const spoken = currentWord.gender ? `${currentWord.gender} ${currentWord.target_word}` : currentWord.target_word;
            playTargetAudio(spoken, language.ttsLocale);
          }
          return;
        }

        // SM-2 1-4 grading & quick advance
        if (e.key === "1" || e.code === "Digit1" || e.code === "Numpad1") {
          e.preventDefault();
          handleGrade(1);
        } else if (e.key === "2" || e.code === "Digit2" || e.code === "Numpad2") {
          e.preventDefault();
          handleGrade(3);
        } else if (e.key === "3" || e.code === "Digit3" || e.code === "Numpad3") {
          e.preventDefault();
          handleGrade(4);
        } else if (e.key === "4" || e.code === "Digit4" || e.code === "Numpad4") {
          e.preventDefault();
          handleGrade(5);
        } else if (e.key === "Enter" || e.key === " " || e.code === "Space") {
          e.preventDefault();
          handleGrade(currentAutoGrade || 4);
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [
    isModeSelectorOpen,
    activeDeck,
    sessionCards,
    isRevealed,
    reviewMode,
    mcqOptions,
    selectedTiles,
    availableTiles,
    currentWord,
    currentAutoGrade,
    currentIndex,
    sessionStats,
    settings,
  ]);

  const masteredCount = Object.values(wordMastery).filter((m) => m === "mastered").length;
  const activeCount = Object.keys(srsCards).length - masteredCount;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--main-color)] font-semibold">
          <RotateCcw className="w-3.5 h-3.5" />
          <span>spaced repetition</span>
        </div>
        <h1 className="text-2xl font-bold font-mono text-[var(--text-color)] tracking-tight">review</h1>
        <p className="text-[var(--sub-color)] text-xs font-mono">
          recall practice powered by historical sound shifts and the sm-2 interval algorithm.
        </p>
      </div>

      {language.status !== "available" && (
        <div className="p-8 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 text-center space-y-3">
          <Clock className="w-8 h-8 text-[var(--main-color)] mx-auto" />
          <h2 className="text-base font-bold font-mono text-[var(--text-color)]">
            review comes with the {language.name.toLowerCase()} trail
          </h2>
          <p className="text-xs font-mono text-[var(--sub-color)] max-w-md mx-auto leading-relaxed">
            spaced repetition unlocks as soon as {language.name} content is authored. switch languages
            from settings — each language keeps its own review queue.
          </p>
        </div>
      )}

      {language.status === "available" && (
      <>
      {/* Stats Bar */}
      <div className="p-3 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-6">
          <span className="text-[var(--main-color)] font-bold">{mounted ? masteredCount : 0} mastered</span>
          <span className="text-[var(--sub-color)] font-bold">{mounted ? activeCount : 0} in queue</span>
          <span className="text-[var(--text-color)] font-bold">{mounted ? dueCards.length : 0} due today</span>
        </div>
        <div className="flex items-center gap-4">
          <GenderGuideBanner compact />
          <div className="flex items-center gap-2 text-[var(--sub-color)]">
            <span>style:</span>
            <select
              value={reviewMode}
              onChange={(e) => {
                const mode = e.target.value as ReviewMode;
                setReviewMode(mode);
                setPreferredReviewMode(mode);
              }}
              className="bg-[var(--bg-color)] border border-[var(--sub-color)]/25 hover:border-[var(--main-color)] rounded px-2 py-0.5 text-xs font-mono text-[var(--main-color)] outline-none cursor-pointer transition"
              title="Set default review style"
            >
              <option value="flashcard" className="bg-[var(--bg-color)] text-[var(--text-color)]">recall</option>
              <option value="mcq" className="bg-[var(--bg-color)] text-[var(--text-color)]">mcq</option>
              <option value="tiles" className="bg-[var(--bg-color)] text-[var(--text-color)]">tiles</option>
              <option value="typing" className="bg-[var(--bg-color)] text-[var(--text-color)]">typing</option>
            </select>
            <button
              type="button"
              onClick={() => {
                setPendingDeck(null);
                setIsModeSelectorOpen(true);
              }}
              className="text-[11px] font-mono text-[var(--sub-color)] hover:text-[var(--main-color)] underline underline-offset-2 ml-1 cursor-pointer"
              title="Select review style"
            >
              change style
            </button>
          </div>
        </div>
      </div>

      {/* Gender Guide Banner (Dismissible on first encounter) */}
      <GenderGuideBanner />

      {/* ACTIVE REVIEW SESSION MODAL / CARD */}
      {activeDeck && currentCard && currentWord ? (
        <div className="p-6 sm:p-8 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 shadow-md space-y-6 animate-in fade-in duration-150">
          {/* Card Header: Counter, Style Switcher, Exit */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--sub-color)]/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[var(--sub-color)] uppercase tracking-wider">
                card {currentIndex + 1} / {sessionCards.length}
              </span>

              {/* Mid-Session Style Switcher */}
              <div className="flex items-center gap-1.5 bg-[var(--bg-color)] border border-[var(--sub-color)]/25 px-2 py-0.5 rounded">
                <span className="text-[11px] font-mono text-[var(--sub-color)]">style:</span>
                <select
                  value={reviewMode}
                  onChange={(e) => {
                    const mode = e.target.value as ReviewMode;
                    setReviewMode(mode);
                    setPreferredReviewMode(mode);
                  }}
                  className="bg-transparent text-xs font-mono text-[var(--main-color)] outline-none cursor-pointer"
                  title="Switch Review Style mid-session"
                >
                  <option value="flashcard" className="bg-[var(--bg-color)] text-[var(--text-color)]">
                    recall
                  </option>
                  <option value="mcq" className="bg-[var(--bg-color)] text-[var(--text-color)]">
                    mcq
                  </option>
                  <option value="tiles" className="bg-[var(--bg-color)] text-[var(--text-color)]">
                    tiles
                  </option>
                  <option value="typing" className="bg-[var(--bg-color)] text-[var(--text-color)]">
                    typing
                  </option>
                </select>
              </div>
            </div>

            <button
              type="button"
              tabIndex={-1}
              onClick={exitDeck}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") e.preventDefault();
              }}
              className="text-xs font-mono text-[var(--sub-color)] hover:text-[var(--text-color)] px-2.5 py-1 rounded bg-[var(--bg-color)] border border-[var(--sub-color)]/20 transition cursor-pointer flex items-center gap-1.5"
              title="Exit Session (Esc)"
            >
              <span>exit</span>
              <span className="keycap text-[10px]">esc</span>
            </button>
          </div>

          {/* Front Prompt */}
          <div className="text-center space-y-2 py-2">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-mono text-[var(--sub-color)] uppercase tracking-widest">
                shift: {currentWord.shift_rule}
              </span>
              {currentWord.gender && (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-[var(--sub-color)]/20 bg-[var(--bg-color)] text-[var(--sub-color)]">
                  gender: [ der / die / das ? ]
                </span>
              )}
              {!wordMastery[currentCard.word_id] && (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-[var(--main-color)]/30 bg-[var(--main-color)]/10 text-[var(--main-color)]">
                  new word
                </span>
              )}
            </div>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-[var(--text-color)]">
              {currentWord.english_cognate}
            </h2>
            <p className="text-sm font-mono text-[var(--sub-color)]">&quot;{currentWord.english_meaning}&quot;</p>
          </div>

          {/* MODE 1: QUICK FLIP (FLASHCARD) */}
          {reviewMode === "flashcard" && !isRevealed && (
            <div className="space-y-4 max-w-md mx-auto text-center py-4">
              <p className="text-xs font-mono text-[var(--sub-color)]">
                recall the german twin in your mind, then reveal.
              </p>
              <button
                type="button"
                onClick={() => setIsRevealed(true)}
                className="w-full py-3.5 rounded-lg bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-mono font-bold text-sm transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>show answer</span>
                {settings.showKeyTips && (
                  <span className="keycap text-[11px]">space</span>
                )}
              </button>
            </div>
          )}

          {/* MODE 2: MULTIPLE CHOICE (MCQ) */}
          {reviewMode === "mcq" && (
            <div className="space-y-4 max-w-lg mx-auto py-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {mcqOptions.map((opt, idx) => {
                  const isTarget = opt.toLowerCase() === currentWord.target_word.toLowerCase();
                  const isSelected = selectedOption === opt;

                  let buttonStyle = "bg-[var(--bg-color)] hover:border-[var(--main-color)]/50 border-[var(--sub-color)]/20 text-[var(--text-color)]";
                  if (isRevealed) {
                    if (isTarget) {
                      buttonStyle = "bg-[var(--main-color)]/15 border-[var(--main-color)] text-[var(--main-color)] font-bold";
                    } else if (isSelected && !isTarget) {
                      buttonStyle = "bg-[var(--error-color)]/15 border-[var(--error-color)] text-[var(--error-color)] line-through";
                    } else {
                      buttonStyle = "bg-[var(--bg-color)]/50 border-[var(--sub-color)]/10 text-[var(--sub-color)] opacity-40";
                    }
                  }

                  return (
                    <button
                      key={opt}
                      type="button"
                      disabled={isRevealed}
                      onClick={() => handleSelectMCQ(opt)}
                      className={`p-3 rounded-lg border text-left flex items-center justify-between transition cursor-pointer font-mono ${buttonStyle}`}
                    >
                      <span className="font-semibold text-sm">{opt}</span>
                      <div className="flex items-center gap-1.5">
                        {isRevealed && isTarget && <Check className="w-4 h-4 text-[var(--main-color)]" />}
                        {isRevealed && isSelected && !isTarget && <X className="w-4 h-4 text-[var(--error-color)]" />}
                        {settings.showKeyTips && (
                          <span className="keycap text-[10px]">
                            {idx + 1}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {!isRevealed && settings.showKeyTips && (
                <div className="text-center text-[11px] font-mono text-[var(--sub-color)] pt-1 flex items-center justify-center gap-1">
                  <span>press</span>
                  <span className="keycap text-[10px]">1</span>
                  <span className="keycap text-[10px]">2</span>
                  <span className="keycap text-[10px]">3</span>
                  <span className="keycap text-[10px]">4</span>
                  <span>to select</span>
                </div>
              )}
            </div>
          )}

          {/* MODE 3: TILE BUILDER */}
          {reviewMode === "tiles" && (
            <div className="space-y-4 max-w-lg mx-auto py-2">
              {/* Selected Tiles Assembly Rack */}
              <div className="p-3.5 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/25 min-h-[60px] flex flex-wrap items-center justify-center gap-2">
                {selectedTiles.length === 0 ? (
                  <span className="text-xs font-mono text-[var(--sub-color)]/60 italic">tap tiles below to assemble word...</span>
                ) : (
                  selectedTiles.map((tile, idx) => (
                    <button
                      key={`${tile}-${idx}`}
                      type="button"
                      disabled={isRevealed}
                      onClick={() => handleUnpickTile(tile, idx)}
                      className="px-3 py-1.5 rounded bg-[var(--main-color)]/15 hover:bg-[var(--error-color)]/20 border border-[var(--main-color)]/40 hover:border-[var(--error-color)]/40 text-[var(--main-color)] hover:text-[var(--error-color)] font-bold font-mono text-sm transition cursor-pointer"
                      title="Tap to remove"
                    >
                      {tile}
                    </button>
                  ))
                )}
              </div>

              {/* Available Tile Bank */}
              {!isRevealed && (
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {availableTiles.map((tile, idx) => (
                      <button
                        key={`${tile}-${idx}`}
                        type="button"
                        onClick={() => handlePickTile(tile, idx)}
                        className="px-3.5 py-2 rounded-lg bg-[var(--bg-color)] hover:border-[var(--main-color)] border border-[var(--sub-color)]/25 text-[var(--text-color)] font-bold font-mono text-sm transition cursor-pointer active:scale-95"
                      >
                        {tile}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleResetTiles}
                      disabled={selectedTiles.length === 0}
                      className="px-3 py-1.5 rounded-lg bg-[var(--bg-color)] hover:bg-[var(--sub-color)]/10 border border-[var(--sub-color)]/20 text-xs font-mono text-[var(--sub-color)] transition cursor-pointer disabled:opacity-40"
                    >
                      reset
                    </button>

                    <button
                      type="button"
                      onClick={handleCheckTiles}
                      disabled={selectedTiles.length === 0}
                      className="px-5 py-1.5 rounded-lg bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-bold text-xs font-mono transition cursor-pointer disabled:opacity-40 flex items-center gap-1.5"
                    >
                      <span>check</span>
                      {settings.showKeyTips && (
                        <span className="keycap text-[10px]">enter</span>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsRevealed(true)}
                      className="px-3 py-1.5 rounded-lg bg-[var(--bg-color)] hover:bg-[var(--sub-color)]/10 border border-[var(--sub-color)]/20 text-xs font-mono text-[var(--sub-color)] transition cursor-pointer flex items-center gap-1.5"
                    >
                      <span>show</span>
                      {settings.showKeyTips && (
                        <span className="keycap text-[10px]">space</span>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* MODE 4: DERIVATION TYPING (LAST) */}
          {reviewMode === "typing" && !isRevealed && (
            <div className="space-y-4 max-w-md mx-auto">
              {settings.capsLockWarning && isCapsLock && (
                <div className="flex items-center justify-center gap-1.5 text-xs text-[var(--error-color)] font-mono animate-pulse">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>caps lock is on</span>
                </div>
              )}
              <input
                ref={inputRef}
                type="text"
                value={inputGuess}
                onChange={(e) => handleTypingInputChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.getModifierState) {
                    setIsCapsLock(e.getModifierState("CapsLock"));
                  }
                  if (settings.confidenceMode === "on" && e.key === "Backspace") {
                    e.preventDefault();
                    return;
                  }
                  if (settings.quickRestart === "esc" && e.key === "Escape") {
                    e.preventDefault();
                    setInputGuess("");
                    return;
                  }
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.stopPropagation();
                    handleCheckTyping();
                  }
                }}
                placeholder="type german derivation..."
                className="w-full px-4 py-3 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/30 text-[var(--main-color)] text-center font-mono font-bold text-lg outline-none focus:border-[var(--main-color)] placeholder:text-[var(--sub-color)]/40 transition"
              />
              {(settings.showCharBar === "always" || settings.showCharBar === "on_focus") && (
                <GermanCharBar onInsert={(c) => handleTypingInputChange(inputGuess + c)} />
              )}
              {currentFeedbackNote && (
                <p role="alert" className="text-center text-xs font-mono text-[var(--main-color)]">
                  {currentFeedbackNote}
                </p>
              )}
              <button
                type="button"
                onClick={handleCheckTyping}
                className="w-full py-3 rounded-lg bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-mono font-bold text-sm transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>check answer</span>
                {settings.showKeyTips && (
                  <span className="keycap text-[10px]">enter</span>
                )}
              </button>
            </div>
          )}

          {/* REVEALED CARD CONTENT & SM-2 GRADING (COMMON TO ALL MODES) */}
          {isRevealed && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {currentFeedbackNote && (
                <p
                  role="status"
                  className="text-center text-xs font-mono text-[var(--main-color)] border border-[var(--main-color)]/30 bg-[var(--main-color)]/10 rounded px-3 py-2"
                >
                  {currentFeedbackNote}
                </p>
              )}
              <div className="p-5 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/20 text-center space-y-3">
                <ShiftPair
                  english={currentWord.english_cognate}
                  german={currentWord.target_word}
                  gender={currentWord.gender}
                  rule={currentWord.shift_rule}
                  wordId={currentWord.id}
                  className="text-lg px-4 py-2"
                />

                {/* Character-level Diff for Typing Mode */}
                {reviewMode === "typing" && inputGuess.trim().length > 0 && (
                  <div className="p-3 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 text-center space-y-1 max-w-md mx-auto">
                    <span className="text-[11px] font-mono text-[var(--sub-color)] uppercase tracking-wider block">
                      your attempt:
                    </span>
                    <div className="text-base font-mono tracking-wide flex items-center justify-center gap-0.5">
                      {computeLetterDiff(inputGuess.trim(), currentWord.target_word).userChars.map((c, i) => (
                        <span
                          key={i}
                          className={
                            c.status === "correct"
                              ? "text-[var(--main-color)] font-bold"
                              : "text-[var(--error-color)] font-bold underline decoration-[var(--error-color)] decoration-2 bg-[var(--error-color)]/10 px-0.5 rounded"
                          }
                        >
                          {c.char}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const spoken = currentWord.gender ? `${currentWord.gender} ${currentWord.target_word}` : currentWord.target_word;
                      playTargetAudio(spoken, language.ttsLocale);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[var(--sub-alt-color)] hover:bg-[var(--main-color)]/10 text-[var(--main-color)] border border-[var(--sub-color)]/20 text-xs font-mono transition cursor-pointer"
                    title="Listen to pronunciation [R]"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>listen</span>
                    {settings.showKeyTips && (
                      <span className="keycap text-[10px]">r</span>
                    )}
                  </button>
                  <span className="text-xs font-mono text-[var(--sub-color)]">{currentWord.ipa}</span>
                </div>
                <p className="text-xs font-mono text-[var(--sub-color)] max-w-md mx-auto">{currentWord.etymology_derivation}</p>
                <div className="p-2.5 rounded bg-[var(--sub-alt-color)] text-xs font-mono text-[var(--text-color)] italic max-w-md mx-auto border border-[var(--sub-color)]/15">
                  &quot;{currentWord.context_phrase}&quot;
                </div>
              </div>

              {/* SM-2 Grade Buttons */}
              <div className="space-y-2 pt-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => handleGrade(1)}
                    className="p-3.5 rounded-lg bg-[var(--error-color)]/10 hover:bg-[var(--error-color)]/20 border border-[var(--error-color)]/30 text-[var(--error-color)] font-semibold text-xs flex flex-col items-center gap-1.5 transition cursor-pointer"
                  >
                    <span className="text-sm font-bold font-mono">again</span>
                    {settings.showKeyTips && (
                      <span className="keycap text-[10px]">1</span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleGrade(3)}
                    className="p-3.5 rounded-lg bg-[var(--sub-color)]/10 hover:bg-[var(--sub-color)]/20 border border-[var(--sub-color)]/30 text-[var(--sub-color)] font-semibold text-xs flex flex-col items-center gap-1.5 transition cursor-pointer"
                  >
                    <span className="text-sm font-bold font-mono">hard</span>
                    {settings.showKeyTips && (
                      <span className="keycap text-[10px]">2</span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleGrade(4)}
                    className="p-3.5 rounded-lg bg-[var(--main-color)]/15 hover:bg-[var(--main-color)]/25 border-2 border-[var(--main-color)] text-[var(--main-color)] font-semibold text-xs flex flex-col items-center gap-1.5 transition cursor-pointer"
                  >
                    <span className="text-sm font-bold font-mono">good</span>
                    {settings.showKeyTips && (
                      <span className="keycap text-[10px]">3 / space</span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleGrade(5)}
                    className="p-3.5 rounded-lg bg-[var(--text-color)]/10 hover:bg-[var(--text-color)]/20 border border-[var(--text-color)]/30 text-[var(--text-color)] font-semibold text-xs flex flex-col items-center gap-1.5 transition cursor-pointer"
                  >
                    <span className="text-sm font-bold font-mono">easy</span>
                    {settings.showKeyTips && (
                      <span className="keycap text-[10px]">4</span>
                    )}
                  </button>
                </div>
                {settings.showKeyTips && (
                  <div className="text-center text-[11px] font-mono text-[var(--sub-color)] flex items-center justify-center gap-1">
                    <span>shortcuts:</span>
                    <span className="keycap text-[10px]">1</span>
                    <span className="keycap text-[10px]">2</span>
                    <span className="keycap text-[10px]">3</span>
                    <span className="keycap text-[10px]">4</span>
                    <span>(or</span>
                    <span className="keycap text-[10px]">space</span>
                    <span>for good)</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          {sessionComplete && (
            <section className="p-6 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--main-color)]/40 space-y-4" role="status">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--main-color)] font-semibold">
                <CheckCircle2 className="w-4 h-4" /> review complete
              </div>
              <div>
                <h2 className="text-lg font-bold text-[var(--text-color)]">Nice work — session logged</h2>
                <p className="text-xs text-[var(--sub-color)] mt-1">
                  You completed {sessionStats.reviewed} {sessionStats.reviewed === 1 ? "card" : "cards"} in this session.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 rounded bg-[var(--bg-color)] border border-[var(--sub-color)]/20">
                  <div className="text-lg font-bold text-[var(--main-color)] font-mono">{sessionStats.correct}</div>
                  <div className="text-[10px] font-mono text-[var(--sub-color)]">successful</div>
                </div>
                <div className="p-3 rounded bg-[var(--bg-color)] border border-[var(--sub-color)]/20">
                  <div className="text-lg font-bold text-[var(--text-color)] font-mono">{sessionStats.again}</div>
                  <div className="text-[10px] font-mono text-[var(--sub-color)]">again</div>
                </div>
                <div className="p-3 rounded bg-[var(--bg-color)] border border-[var(--sub-color)]/20">
                  <div className="text-lg font-bold text-[var(--text-color)] font-mono">{sessionStats.hard + sessionStats.easy}</div>
                  <div className="text-[10px] font-mono text-[var(--sub-color)]">easy/hard</div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  disabled={!completedDeck}
                  onClick={() => {
                    if (completedDeck) startDeck(completedDeck);
                  }}
                  className="px-4 py-2 rounded bg-[var(--main-color)] text-[var(--bg-color)] font-bold text-xs font-mono hover:opacity-90 transition disabled:opacity-40"
                >
                  review again
                </button>
                <span className="text-[11px] font-mono text-[var(--sub-color)]">Your next intervals are saved automatically.</span>
              </div>
            </section>
          )}

          {/* DECK SELECTOR */}
          <div className="space-y-6">
          {/* Deck 1: Due Today */}
          <div className="p-6 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 hover:border-[var(--main-color)]/40 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[var(--main-color)]" />
                <h3 className="text-lg font-bold font-mono text-[var(--text-color)]">due today</h3>
                <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[var(--main-color)]/15 text-[var(--main-color)] border border-[var(--main-color)]/30">
                  {mounted ? dueCards.length : 0} cards
                </span>
              </div>
              <p className="text-xs font-mono text-[var(--sub-color)]">
                scheduled by sm-2 spacing interval for optimal memory consolidation.
              </p>
            </div>

            <button
              onClick={() => requestDeckStart("due")}
              disabled={dueCards.length === 0}
              className={`px-5 py-2.5 rounded-lg font-mono font-bold text-xs transition ${
                dueCards.length > 0
                  ? "bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] cursor-pointer"
                  : "bg-[var(--bg-color)] text-[var(--sub-color)] opacity-40 cursor-not-allowed border border-[var(--sub-color)]/20"
              }`}
            >
              {dueCards.length > 0 ? "start due review" : "no due reviews"}
            </button>
          </div>

          {/* 5 Secondary Decks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* By Shift Deck */}
            <div className="p-5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-3 flex flex-col justify-between hover:border-[var(--main-color)]/30 transition">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[var(--main-color)]">
                  <Layers className="w-4 h-4" />
                  <h4 className="text-sm font-bold font-mono text-[var(--text-color)]">by shift family</h4>
                </div>
                <p className="text-xs font-mono text-[var(--sub-color)]">
                  review all words belonging to a single structural consonant shift — or every family at once.
                </p>

                <select
                  value={selectedShiftId}
                  onChange={(e) => setSelectedShiftId(e.target.value)}
                  aria-label="Choose a sound-shift family to review"
                  className="w-full mt-2 px-3 py-1.5 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/20 text-xs font-mono text-[var(--text-color)] outline-none"
                >
                  <option value={ALL_ID}>
                    All families ({allFamilyWordIds.length} words)
                  </option>
                  {atlasFamilies.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.symbol} — {s.name} ({s.word_ids.length})
                    </option>
                  ))}
                </select>
                <div className="text-[11px] font-mono text-[var(--main-color)]">
                  {selectedShiftId === ALL_ID
                    ? `all ${atlasFamilies.length} families selected`
                    : `${data.shifts[selectedShiftId]?.phonetic_rule ?? ""}`}
                </div>
              </div>

              <button
                onClick={() =>
                  requestDeckStart(
                    "shift",
                    undefined,
                    selectedShiftId === ALL_ID ? "every shift family" : data.shifts[selectedShiftId]?.name
                  )
                }
                disabled={shiftDeckSize === 0}
                className="w-full py-2 rounded-lg bg-[var(--bg-color)] hover:bg-[var(--main-color)]/10 border border-[var(--sub-color)]/20 text-xs font-mono font-bold text-[var(--text-color)] hover:text-[var(--main-color)] transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                review shift family
              </button>
            </div>

            {/* Thematic Domain Deck */}
            <div className="p-5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-3 flex flex-col justify-between hover:border-[var(--main-color)]/30 transition">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[var(--main-color)]">
                  <Sparkles className="w-4 h-4" />
                  <h4 className="text-sm font-bold font-mono text-[var(--text-color)]">by domain</h4>
                </div>
                <p className="text-xs font-mono text-[var(--sub-color)]">
                  themed decks from the full compendium — new words appear here even before you meet them in a lesson.
                </p>

                <select
                  value={selectedDomainId}
                  onChange={(e) => setSelectedDomainId(e.target.value)}
                  aria-label="Choose a thematic domain to review"
                  className="w-full mt-2 px-3 py-1.5 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/20 text-xs font-mono text-[var(--text-color)] outline-none"
                >
                  <option value={ALL_ID}>All domains ({data.wordList.length} words)</option>
                  {domainGroups.map((g) => (
                    <option key={g.id} value={g.id}>
                      {g.label} ({g.words.length} words)
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() =>
                  requestDeckStart(
                    "domain",
                    undefined,
                    selectedDomainId === ALL_ID
                      ? "every domain"
                      : domainGroups.find((g) => g.id === selectedDomainId)?.label
                  )
                }
                disabled={domainDeckSize === 0}
                className="w-full py-2 rounded-lg bg-[var(--bg-color)] hover:bg-[var(--main-color)]/10 border border-[var(--sub-color)]/20 text-xs font-mono font-bold text-[var(--text-color)] hover:text-[var(--main-color)] transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                review domain
              </button>
            </div>

            {/* Weakest Words Deck */}
            <div className="p-5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-3 flex flex-col justify-between hover:border-[var(--main-color)]/30 transition">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[var(--error-color)]">
                  <Flame className="w-4 h-4" />
                  <h4 className="text-sm font-bold font-mono text-[var(--text-color)]">weakest words</h4>
                </div>
                <p className="text-xs font-mono text-[var(--sub-color)]">
                  focus on words that caused repeated lapses or hesitation.
                </p>
                <div className="text-xs font-mono text-[var(--error-color)] pt-1">
                  {mounted ? weakestCards.length : 0} words with lapses
                </div>
              </div>

              <button
                onClick={() => requestDeckStart("weakest")}
                disabled={weakestCards.length === 0}
                className="w-full py-2 rounded-lg bg-[var(--bg-color)] hover:bg-[var(--main-color)]/10 border border-[var(--sub-color)]/20 text-xs font-mono font-bold text-[var(--text-color)] hover:text-[var(--main-color)] transition disabled:opacity-40 cursor-pointer"
              >
                review weakest
              </button>
            </div>

            {/* Recent Lessons Deck */}
            <div className="p-5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-3 flex flex-col justify-between hover:border-[var(--main-color)]/30 transition">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[var(--main-color)]">
                  <CheckCircle2 className="w-4 h-4" />
                  <h4 className="text-sm font-bold font-mono text-[var(--text-color)]">recent lessons</h4>
                </div>
                <p className="text-xs font-mono text-[var(--sub-color)]">
                  reinforce vocabulary encountered across your most recent trail lessons.
                </p>
                <div className="text-xs font-mono text-[var(--main-color)] pt-1">
                  20 core words
                </div>
              </div>

              <button
                onClick={() => requestDeckStart("recent")}
                className="w-full py-2 rounded-lg bg-[var(--bg-color)] hover:bg-[var(--main-color)]/10 border border-[var(--sub-color)]/20 text-xs font-mono font-bold text-[var(--text-color)] hover:text-[var(--main-color)] transition cursor-pointer"
              >
                review recent
              </button>
            </div>

            {/* Compound Calques & Traps Deck */}
            <div className="p-5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-3 flex flex-col justify-between hover:border-[var(--main-color)]/30 transition">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[var(--sub-color)]">
                  <Sparkles className="w-4 h-4" />
                  <h4 className="text-sm font-bold font-mono text-[var(--text-color)]">compounds & traps</h4>
                </div>
                <p className="text-xs font-mono text-[var(--sub-color)]">
                  review literal calques (handschuh, flugzeug) and false friends (gift, bald).
                </p>
                <div className="text-xs font-mono text-[var(--sub-color)] pt-1">
                  {data.compounds.length + data.falseFriends.length} items
                </div>
              </div>

              <button
                onClick={() => requestDeckStart("compounds")}
                className="w-full py-2 rounded-lg bg-[var(--bg-color)] hover:bg-[var(--main-color)]/10 border border-[var(--sub-color)]/20 text-xs font-mono font-bold text-[var(--text-color)] hover:text-[var(--main-color)] transition cursor-pointer"
              >
                review compounds
              </button>
            </div>

            {/* Everything Deck */}
            <div className="p-5 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--main-color)]/40 space-y-3 flex flex-col justify-between transition">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[var(--main-color)]">
                  <Globe className="w-4 h-4" />
                  <h4 className="text-sm font-bold font-mono text-[var(--text-color)]">everything</h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[var(--main-color)]/15 text-[var(--main-color)] border border-[var(--main-color)]/30">
                    full run
                  </span>
                </div>
                <p className="text-xs font-mono text-[var(--sub-color)]">
                  no filter. every word in every family and domain, plus compounds and false-friend traps.
                </p>
                <div className="text-xs font-mono text-[var(--main-color)] pt-1">
                  {everythingCards.length} cards
                </div>
              </div>

              <button
                onClick={() => requestDeckStart("everything", undefined, "everything")}
                disabled={everythingCards.length === 0}
                className="w-full py-2 rounded-lg bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] text-xs font-mono font-bold transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                review everything
              </button>
            </div>
          </div>
        </div>
        </>
      )}
      </>
      )}

      {/* REVIEW STYLE SELECTION MODAL */}
      {isModeSelectorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-in fade-in duration-150">
          <div
            ref={modeDialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-style-title"
            className="w-full max-w-xl rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/30 shadow-2xl p-6 sm:p-8 space-y-6"
          >
            <div className="space-y-1">
              <span className="text-xs font-mono text-[var(--main-color)] uppercase tracking-widest font-semibold">
                review style
              </span>
              <h2 id="review-style-title" className="text-xl font-bold font-mono text-[var(--text-color)]">
                {pendingDeck
                  ? `how do you want to review ${
                      pendingDeck.deckLabel
                        ? pendingDeck.deckLabel
                        : pendingDeck.deck === "due"
                        ? "due cards"
                        : pendingDeck.deck === "shift"
                        ? selectedShiftId === ALL_ID
                          ? "every shift family"
                          : data.shifts[selectedShiftId]?.name ?? "shift family"
                        : pendingDeck.deck === "weakest"
                        ? "weakest words"
                        : pendingDeck.deck === "recent"
                        ? "recent lessons"
                        : pendingDeck.deck === "everything"
                        ? "everything"
                        : "compounds & traps"
                    }?`
                  : "how do you want to review?"}
              </h2>
              <p className="text-xs font-mono text-[var(--sub-color)]">
                pick your preferred exercise style below. all styles advance the same sm-2 interval queue.
              </p>
            </div>

            <div className="space-y-2.5">
              {/* Option 1: Free recall (flashcards) */}
              <button
                type="button"
                onClick={() => selectModeAndStart("flashcard")}
                className={`w-full text-left p-4 rounded-lg bg-[var(--sub-alt-color)] hover:border-[var(--main-color)] border transition cursor-pointer flex items-center justify-between group ${
                  reviewMode === "flashcard"
                    ? "border-[var(--main-color)] ring-1 ring-[var(--main-color)]/40"
                    : "border-[var(--sub-color)]/20"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold font-mono text-sm text-[var(--text-color)] group-hover:text-[var(--main-color)] transition">
                      recall (flashcard)
                    </span>
                    {reviewMode === "flashcard" ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[var(--main-color)]/15 text-[var(--main-color)] border border-[var(--main-color)]/30">
                        active
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[var(--sub-color)] bg-[var(--bg-color)] border border-[var(--sub-color)]/20">
                        recommended
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-[var(--sub-color)]">
                    zero typing. recall in your mind, press space to reveal, rate 1–4.
                  </p>
                </div>
                <span className="keycap text-xs">
                  1
                </span>
              </button>

              {/* Option 2: Multiple Choice (MCQ) */}
              <button
                type="button"
                onClick={() => selectModeAndStart("mcq")}
                className={`w-full text-left p-4 rounded-lg bg-[var(--sub-alt-color)] hover:border-[var(--main-color)] border transition cursor-pointer flex items-center justify-between group ${
                  reviewMode === "mcq"
                    ? "border-[var(--main-color)] ring-1 ring-[var(--main-color)]/40"
                    : "border-[var(--sub-color)]/20"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold font-mono text-sm text-[var(--text-color)] group-hover:text-[var(--main-color)] transition">
                      multiple choice (mcq)
                    </span>
                    {reviewMode === "mcq" && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[var(--main-color)]/15 text-[var(--main-color)] border border-[var(--main-color)]/30">
                        active
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-[var(--sub-color)]">
                    pick the german word from 4 options. press 1–4 keys or click.
                  </p>
                </div>
                <span className="keycap text-xs">
                  2
                </span>
              </button>

              {/* Option 3: Tile Builder */}
              <button
                type="button"
                onClick={() => selectModeAndStart("tiles")}
                className={`w-full text-left p-4 rounded-lg bg-[var(--sub-alt-color)] hover:border-[var(--main-color)] border transition cursor-pointer flex items-center justify-between group ${
                  reviewMode === "tiles"
                    ? "border-[var(--main-color)] ring-1 ring-[var(--main-color)]/40"
                    : "border-[var(--sub-color)]/20"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold font-mono text-sm text-[var(--text-color)] group-hover:text-[var(--main-color)] transition">
                      tile builder
                    </span>
                    {reviewMode === "tiles" && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[var(--main-color)]/15 text-[var(--main-color)] border border-[var(--main-color)]/30">
                        active
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-[var(--sub-color)]">
                    tap letter and morpheme tiles into place to assemble the cognate.
                  </p>
                </div>
                <span className="keycap text-xs">
                  3
                </span>
              </button>

              {/* Option 4: Derivation Typing (Last) */}
              <button
                type="button"
                onClick={() => selectModeAndStart("typing")}
                className={`w-full text-left p-4 rounded-lg bg-[var(--sub-alt-color)] hover:border-[var(--main-color)] border transition cursor-pointer flex items-center justify-between group ${
                  reviewMode === "typing"
                    ? "border-[var(--main-color)] ring-1 ring-[var(--main-color)]/40"
                    : "border-[var(--sub-color)]/20"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold font-mono text-sm text-[var(--text-color)] group-hover:text-[var(--main-color)] transition">
                      derivation typing
                    </span>
                    {reviewMode === "typing" && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[var(--main-color)]/15 text-[var(--main-color)] border border-[var(--main-color)]/30">
                        active
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-[var(--sub-color)]">
                    type the german word letter-by-letter with umlaut shortcuts.
                  </p>
                </div>
                <span className="keycap text-xs">
                  4
                </span>
              </button>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[var(--sub-color)]/20">
              <label className="flex items-center gap-2 text-xs font-mono text-[var(--sub-color)] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberPreference}
                  onChange={(e) => setRememberPreference(e.target.checked)}
                  className="rounded border-[var(--sub-color)]/30 bg-[var(--bg-color)] text-[var(--main-color)] focus:ring-0"
                />
                remember as default style
              </label>

              <button
                type="button"
                onClick={() => {
                  setIsModeSelectorOpen(false);
                  setPendingDeck(null);
                }}
                className="text-xs font-mono text-[var(--sub-color)] hover:text-[var(--text-color)] px-3 py-1.5 rounded hover:bg-[var(--sub-alt-color)] transition cursor-pointer flex items-center gap-1.5"
              >
                <span>cancel</span>
                <span className="keycap text-[10px]">esc</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
