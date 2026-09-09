"use client";

// ponytail: cohesive multi-modal review hub with 4 decks, selectable review styles, and unified SM-2 grading

import React, { useState, useEffect, useRef, useMemo } from "react";
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
  HelpCircle,
  Volume2,
} from "lucide-react";
import { ShiftPair } from "@/components/common/ShiftPair";
import { GermanCharBar } from "@/components/common/GermanCharBar";
import { GenderBadge } from "@/components/common/GenderBadge";
import { GenderGuideBanner } from "@/components/common/GenderGuideBanner";
import { useAppStore } from "@/lib/store";
import { getDueCards, getWeakestCards, type ReviewGrade } from "@/lib/srs";
import { generateMCQOptions, generateWordTiles } from "@/lib/review-modes";
import { playGermanAudio } from "@/lib/audio";
import { computeLetterDiff } from "@/lib/letter-diff";
import compendium from "@/data/compendium.json";
import type { CompendiumData, ReviewMode, SRSCard, WordEntity } from "@/lib/types";

const data = compendium as unknown as CompendiumData;

type DeckType = "due" | "shift" | "weakest" | "recent" | "compounds";

export default function ReviewPage() {
  const [mounted, setMounted] = useState(false);
  const [activeDeck, setActiveDeck] = useState<DeckType | null>(null);
  const [selectedShiftId, setSelectedShiftId] = useState<string>("p_to_pf_f");
  const [sessionCards, setSessionCards] = useState<SRSCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  // Review Style Mode State
  const preferredReviewMode = useAppStore((s) => s.preferredReviewMode);
  const setPreferredReviewMode = useAppStore((s) => s.setPreferredReviewMode);
  const [reviewMode, setReviewMode] = useState<ReviewMode>(preferredReviewMode || "flashcard");
  const [isModeSelectorOpen, setIsModeSelectorOpen] = useState(false);
  const [rememberPreference, setRememberPreference] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mode-Specific Interactive State
  const [inputGuess, setInputGuess] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedTiles, setSelectedTiles] = useState<string[]>([]);
  const [availableTiles, setAvailableTiles] = useState<string[]>([]);
  const [currentAutoGrade, setCurrentAutoGrade] = useState<ReviewGrade | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const srsCards = useAppStore((s) => s.srsCards);
  const wordMastery = useAppStore((s) => s.wordMastery);
  const recordReview = useAppStore((s) => s.recordReview);

  const dueCards = getDueCards(srsCards);
  const weakestCards = getWeakestCards(srsCards);

  // Sync preferred review mode from store when hydrated
  useEffect(() => {
    if (preferredReviewMode) {
      setReviewMode(preferredReviewMode);
    }
  }, [preferredReviewMode]);

  // Comprehensive words map combining standard vocabulary, compound calques, and false friend traps
  const allWordsMap: Record<string, WordEntity> = useMemo(() => {
    const map: Record<string, WordEntity> = { ...data.words };
    data.compounds.forEach((c) => {
      const cleanWord = c.compound.replace(/^(der|die|das)\s+/i, "");
      map[`compound_${c.id}`] = {
        id: `compound_${c.id}`,
        target_word: cleanWord,
        english_cognate: c.literal_morphemes,
        english_meaning: `${c.real_meaning} (lit. "${c.literal_morphemes}")`,
        gender: c.gender,
        ipa: "/kɔmˈpoːzɪtʊm/",
        sound_shift_ids: [],
        shift_rule: "Compound Calque",
        context_phrase: c.compound,
        context_translation: `${c.english_counterpart} (${c.literal_morphemes})`,
        etymology_derivation: c.lore,
      };
    });
    data.falseFriends.forEach((f) => {
      map[`trap_${f.id}`] = {
        id: `trap_${f.id}`,
        target_word: f.german_word,
        english_cognate: `≠ ${f.looks_like}`,
        english_meaning: f.actual_meaning,
        gender: null,
        ipa: "/faɫʃɐ fʁɔʏ̯nt/",
        sound_shift_ids: [],
        shift_rule: "False Friend Trap",
        context_phrase: `${f.german_word} means "${f.actual_meaning}"`,
        context_translation: `NOT English "${f.looks_like}"!`,
        etymology_derivation: f.trap_note,
      };
    });
    return map;
  }, []);

  const compoundCards: SRSCard[] = useMemo(() => {
    const items: SRSCard[] = [];
    data.compounds.forEach((c) => {
      const id = `compound_${c.id}`;
      items.push(
        srsCards[id] || {
          word_id: id,
          interval: 1,
          repetitions: 0,
          ease_factor: 2.5,
          due_date: new Date().toISOString().split("T")[0],
          lapses: 0,
          last_reviewed: null,
        }
      );
    });
    data.falseFriends.forEach((f) => {
      const id = `trap_${f.id}`;
      items.push(
        srsCards[id] || {
          word_id: id,
          interval: 1,
          repetitions: 0,
          ease_factor: 2.5,
          due_date: new Date().toISOString().split("T")[0],
          lapses: 0,
          last_reviewed: null,
        }
      );
    });
    return items;
  }, [srsCards]);

  // 1-Click direct deck start
  const startDeck = (deck: DeckType, customCards?: SRSCard[]) => {
    setActiveDeck(deck);
    setCurrentIndex(0);
    setIsRevealed(false);
    setInputGuess("");
    setSelectedOption(null);
    setSelectedTiles([]);
    setCurrentAutoGrade(null);

    if (customCards) {
      setSessionCards(customCards);
      return;
    }

    if (deck === "due") {
      setSessionCards(dueCards);
    } else if (deck === "weakest") {
      setSessionCards(weakestCards);
    } else if (deck === "shift") {
      const family = data.shifts[selectedShiftId];
      const familyWordIds = family ? family.word_ids : [];
      const shiftCards = familyWordIds.map(
        (wid: string) =>
          srsCards[wid] || {
            word_id: wid,
            interval: 1,
            repetitions: 0,
            ease_factor: 2.5,
            due_date: new Date().toISOString().split("T")[0],
            lapses: 0,
            last_reviewed: null,
          }
      );
      setSessionCards(shiftCards);
    } else if (deck === "recent") {
      const recentWords = data.wordList.slice(0, 20);
      const recentCards = recentWords.map(
        (w) =>
          srsCards[w.id] || {
            word_id: w.id,
            interval: 1,
            repetitions: 0,
            ease_factor: 2.5,
            due_date: new Date().toISOString().split("T")[0],
            lapses: 0,
            last_reviewed: null,
          }
      );
      setSessionCards(recentCards);
    } else if (deck === "compounds") {
      setSessionCards(compoundCards);
    }
  };

  // 1-Click start into user's current reviewMode
  const requestDeckStart = (deck: DeckType, customCards?: SRSCard[]) => {
    startDeck(deck, customCards);
  };

  // Execute deck start with selected mode (e.g. from modal style chooser)
  const selectModeAndStart = (mode: ReviewMode) => {
    setReviewMode(mode);
    if (rememberPreference) {
      setPreferredReviewMode(mode);
    }
    setIsModeSelectorOpen(false);
  };

  const currentCard = sessionCards[currentIndex];
  const currentWord: WordEntity | undefined = currentCard ? allWordsMap[currentCard.word_id] : undefined;

  // MCQ Options for current card
  const mcqOptions = useMemo(() => {
    if (!currentWord) return [];
    return generateMCQOptions(currentWord, data.wordList, 4);
  }, [currentWord?.id]);

  // Tiles for current card
  const tileData = useMemo(() => {
    if (!currentWord) return { tiles: [], targetChunks: [], targetAnswer: "" };
    return generateWordTiles(currentWord, data.wordList);
  }, [currentWord?.id]);

  // Reset interactive state per card
  useEffect(() => {
    setIsRevealed(false);
    setInputGuess("");
    setSelectedOption(null);
    setSelectedTiles([]);
    setCurrentAutoGrade(null);
    if (tileData) {
      setAvailableTiles(tileData.tiles);
    }
  }, [currentCard?.word_id, currentIndex, tileData]);

  // SM-2 Review Grade Handler
  const handleGrade = (grade: ReviewGrade) => {
    const card = sessionCards[currentIndex];
    if (card) {
      recordReview(card.word_id, grade);
    }

    setIsRevealed(false);
    setInputGuess("");
    setSelectedOption(null);
    setSelectedTiles([]);
    setCurrentAutoGrade(null);

    if (currentIndex + 1 < sessionCards.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      setActiveDeck(null); // Finish session
    }
  };

  // MCQ Selection Handler
  const handleSelectMCQ = (option: string) => {
    if (isRevealed || !currentWord) return;
    setSelectedOption(option);
    const isCorrect = option.toLowerCase() === currentWord.target_word.toLowerCase();
    setCurrentAutoGrade(isCorrect ? 4 : 1);
    setIsRevealed(true);
  };

  // Tile Selection Handlers
  const handlePickTile = (tile: string, index: number) => {
    if (isRevealed) return;
    const nextAvailable = [...availableTiles];
    nextAvailable.splice(index, 1);
    setAvailableTiles(nextAvailable);
    setSelectedTiles((prev) => [...prev, tile]);
  };

  const handleUnpickTile = (tile: string, index: number) => {
    if (isRevealed) return;
    const nextSelected = [...selectedTiles];
    nextSelected.splice(index, 1);
    setSelectedTiles(nextSelected);
    setAvailableTiles((prev) => [...prev, tile]);
  };

  const handleResetTiles = () => {
    if (isRevealed || !tileData) return;
    setSelectedTiles([]);
    setAvailableTiles(tileData.tiles);
  };

  const handleCheckTiles = () => {
    if (isRevealed || !currentWord) return;
    const assembled = selectedTiles.join("");
    const isCorrect = assembled.toLowerCase() === currentWord.target_word.toLowerCase();
    setCurrentAutoGrade(isCorrect ? 4 : 1);
    setIsRevealed(true);
  };

  const handleCheckTyping = () => {
    if (isRevealed || !currentWord) return;
    const guess = inputGuess.trim();
    if (guess.length > 0) {
      const isCorrect = guess.toLowerCase() === currentWord.target_word.toLowerCase();
      setCurrentAutoGrade(isCorrect ? 4 : 1);
    }
    setIsRevealed(true);
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
  //     - Typing: Enter reveals, Space reveals if empty
  //   - Revealed: 1-4 grades, Space/Enter quick-advances with auto-grade or Good (4)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
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
        }
        return;
      }

      // 2. No active session
      if (!activeDeck || sessionCards.length === 0) return;

      // Escape exits session
      if (e.key === "Escape") {
        e.preventDefault();
        setActiveDeck(null);
        return;
      }

      // If user is inside an input other than our review input, ignore
      if (e.target instanceof HTMLInputElement && e.target !== inputRef.current) {
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
          } else if (e.key === " " || e.code === "Space") {
            if (e.target === inputRef.current && inputGuess.trim().length > 0) {
              return;
            }
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
            playGermanAudio(spoken);
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
    inputGuess,
    currentAutoGrade,
    currentIndex,
  ]);

  const masteredCount = Object.values(wordMastery).filter((m) => m === "mastered").length;
  const activeCount = Object.keys(srsCards).length - masteredCount;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Etymological Spaced Repetition</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">Review Hub</h1>
        <p className="text-slate-400 text-sm">
          Review words by historical shift family or algorithmic urgency using the SM-2 interval engine.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="p-4 rounded-xl bg-[#161722] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-6">
          <span className="text-emerald-400 font-bold">{mounted ? masteredCount : 0} Mastered ✓</span>
          <span className="text-amber-400 font-bold">{mounted ? activeCount : 0} In Active SRS 🔄</span>
          <span className="text-cyan-400 font-bold">{mounted ? dueCards.length : 0} Due Today ⚡</span>
        </div>
        <div className="flex items-center gap-4">
          <GenderGuideBanner compact />
          <div className="flex items-center gap-2 text-slate-400">
            <span>Style:</span>
            <select
              value={reviewMode}
              onChange={(e) => {
                const mode = e.target.value as ReviewMode;
                setReviewMode(mode);
                setPreferredReviewMode(mode);
              }}
              className="bg-[#1C1D2B] border border-white/15 hover:border-cyan-400 rounded px-2 py-0.5 text-xs font-mono text-cyan-300 outline-none cursor-pointer transition"
              title="Set default review style"
            >
              <option value="flashcard" className="bg-[#1C1D2B] text-slate-200">📇 Quick Flip</option>
              <option value="mcq" className="bg-[#1C1D2B] text-slate-200">🔘 MCQ</option>
              <option value="tiles" className="bg-[#1C1D2B] text-slate-200">🧩 Tiles</option>
              <option value="typing" className="bg-[#1C1D2B] text-slate-200">✍️ Typing</option>
            </select>
            <button
              type="button"
              onClick={() => setIsModeSelectorOpen(true)}
              className="text-[11px] font-mono text-slate-400 hover:text-cyan-300 underline underline-offset-2 ml-1 cursor-pointer"
              title="Learn about review styles"
            >
              Guide
            </button>
          </div>
        </div>
      </div>

      {/* Gender Guide Banner (Dismissible on first encounter) */}
      <GenderGuideBanner />

      {/* ACTIVE REVIEW SESSION MODAL / CARD */}
      {activeDeck && currentCard && currentWord ? (
        <div className="p-6 sm:p-8 rounded-2xl bg-[#1C1D2B] border-2 border-cyan-500/40 shadow-2xl space-y-6 animate-in fade-in duration-150">
          {/* Card Header: Counter, Style Switcher, Exit */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Card {currentIndex + 1} of {sessionCards.length}
              </span>

              {/* Mid-Session Style Switcher */}
              <div className="flex items-center gap-1.5 bg-black/40 border border-white/10 px-2 py-0.5 rounded-lg">
                <span className="text-[11px] font-mono text-slate-400">Style:</span>
                <select
                  value={reviewMode}
                  onChange={(e) => {
                    const mode = e.target.value as ReviewMode;
                    setReviewMode(mode);
                    setPreferredReviewMode(mode);
                  }}
                  className="bg-transparent text-xs font-mono text-cyan-300 outline-none cursor-pointer"
                  title="Switch Review Style mid-session"
                >
                  <option value="flashcard" className="bg-[#1C1D2B] text-slate-200">
                    📇 Quick Flip
                  </option>
                  <option value="mcq" className="bg-[#1C1D2B] text-slate-200">
                    🔘 Multiple Choice
                  </option>
                  <option value="tiles" className="bg-[#1C1D2B] text-slate-200">
                    🧩 Tile Builder
                  </option>
                  <option value="typing" className="bg-[#1C1D2B] text-slate-200">
                    ✍️ Typing (Last)
                  </option>
                </select>
              </div>
            </div>

            <button
              type="button"
              tabIndex={-1}
              onClick={() => setActiveDeck(null)}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") e.preventDefault();
              }}
              className="text-xs font-mono text-slate-400 hover:text-white px-2.5 py-1 rounded bg-white/5 border border-white/5 hover:bg-white/10 transition cursor-pointer"
              title="Exit Session (Esc)"
            >
              Exit Session [Esc]
            </button>
          </div>

          {/* Front Prompt */}
          <div className="text-center space-y-2 py-2">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Shift Rule: {currentWord.shift_rule}
              </span>
              {currentWord.gender && (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-white/10 bg-white/5 text-slate-400">
                  Gender: [ der / die / das ? ]
                </span>
              )}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
              {currentWord.english_cognate}
            </h2>
            <p className="text-sm text-slate-400 italic">&quot;{currentWord.english_meaning}&quot;</p>
          </div>

          {/* MODE 1: QUICK FLIP (FLASHCARD) */}
          {reviewMode === "flashcard" && !isRevealed && (
            <div className="space-y-4 max-w-md mx-auto text-center py-4">
              <p className="text-xs text-slate-400">
                Recall the German twin in your mind, then flip to verify.
              </p>
              <button
                type="button"
                onClick={() => setIsRevealed(true)}
                className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition cursor-pointer active:scale-95 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
              >
                <span>Show Answer / Flip Card</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/20 text-slate-950 font-bold">
                  Space / Enter
                </span>
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

                  let buttonStyle = "bg-[#161722] hover:bg-white/10 border-white/10 text-slate-200";
                  if (isRevealed) {
                    if (isTarget) {
                      buttonStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold shadow-lg shadow-emerald-500/10";
                    } else if (isSelected && !isTarget) {
                      buttonStyle = "bg-rose-500/20 border-rose-500 text-rose-300 line-through";
                    } else {
                      buttonStyle = "bg-[#161722]/60 border-white/5 text-slate-500 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={opt}
                      type="button"
                      disabled={isRevealed}
                      onClick={() => handleSelectMCQ(opt)}
                      className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition active:scale-95 cursor-pointer ${buttonStyle}`}
                    >
                      <span className="font-semibold text-sm">{opt}</span>
                      <div className="flex items-center gap-1.5">
                        {isRevealed && isTarget && <Check className="w-4 h-4 text-emerald-400" />}
                        {isRevealed && isSelected && !isTarget && <X className="w-4 h-4 text-rose-400" />}
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                          [{idx + 1}]
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {!isRevealed && (
                <div className="text-center text-[11px] font-mono text-slate-400 pt-1">
                  Press keys <span className="text-cyan-300 font-bold">[1]</span>,{" "}
                  <span className="text-cyan-300 font-bold">[2]</span>,{" "}
                  <span className="text-cyan-300 font-bold">[3]</span>, or{" "}
                  <span className="text-cyan-300 font-bold">[4]</span> to select
                </div>
              )}
            </div>
          )}

          {/* MODE 3: TILE BUILDER */}
          {reviewMode === "tiles" && (
            <div className="space-y-4 max-w-lg mx-auto py-2">
              {/* Selected Tiles Assembly Rack */}
              <div className="p-3.5 rounded-xl bg-[#161722] border border-white/15 min-h-[60px] flex flex-wrap items-center justify-center gap-2">
                {selectedTiles.length === 0 ? (
                  <span className="text-xs text-slate-500 italic">Tap tiles below to assemble word...</span>
                ) : (
                  selectedTiles.map((tile, idx) => (
                    <button
                      key={`${tile}-${idx}`}
                      type="button"
                      disabled={isRevealed}
                      onClick={() => handleUnpickTile(tile, idx)}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-rose-500/20 border border-cyan-500/40 hover:border-rose-500/40 text-cyan-200 font-bold font-mono text-sm transition cursor-pointer"
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
                        className="px-3.5 py-2 rounded-xl bg-[#222436] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-400 text-slate-200 font-bold font-mono text-sm transition cursor-pointer active:scale-95 shadow"
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
                      className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-400 transition cursor-pointer disabled:opacity-40"
                    >
                      Reset Rack
                    </button>

                    <button
                      type="button"
                      onClick={handleCheckTiles}
                      disabled={selectedTiles.length === 0}
                      className="px-6 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition cursor-pointer disabled:opacity-40 shadow-md shadow-cyan-500/20"
                    >
                      Check Answer [Enter]
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsRevealed(true)}
                      className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-400 transition cursor-pointer"
                    >
                      Show [Space]
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* MODE 4: DERIVATION TYPING (LAST) */}
          {reviewMode === "typing" && !isRevealed && (
            <div className="space-y-4 max-w-md mx-auto">
              <input
                ref={inputRef}
                type="text"
                value={inputGuess}
                onChange={(e) => setInputGuess(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleCheckTyping();
                  } else if ((e.key === " " || e.code === "Space") && inputGuess.trim() === "") {
                    e.preventDefault();
                    handleCheckTyping();
                  }
                }}
                placeholder="Type German derivation (or press Space / Enter)..."
                className="w-full px-4 py-3 rounded-xl bg-[#161722] border border-white/15 text-amber-300 text-center font-bold text-lg outline-none focus:border-cyan-400"
              />
              <GermanCharBar onInsert={(c) => setInputGuess((prev) => prev + c)} />
              <button
                type="button"
                onClick={handleCheckTyping}
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition cursor-pointer active:scale-95 shadow-lg shadow-cyan-500/20"
              >
                Show Answer [Enter / Space]
              </button>
            </div>
          )}

          {/* REVEALED CARD CONTENT & SM-2 GRADING (COMMON TO ALL MODES) */}
          {isRevealed && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-4 rounded-xl bg-[#161722] border border-white/10 text-center space-y-3">
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
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center space-y-1 max-w-md mx-auto">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Your Attempt:
                    </span>
                    <div className="text-base font-mono tracking-wide flex items-center justify-center gap-0.5">
                      {computeLetterDiff(inputGuess.trim(), currentWord.target_word).userChars.map((c, i) => (
                        <span
                          key={i}
                          className={
                            c.status === "correct"
                              ? "text-emerald-400 font-bold"
                              : "text-rose-400 font-bold underline decoration-rose-500 decoration-2 bg-rose-500/15 px-0.5 rounded"
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
                      playGermanAudio(spoken);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 border border-amber-400/20 text-xs font-mono transition cursor-pointer"
                    title="Listen to German pronunciation [R]"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Listen [R]</span>
                  </button>
                  <span className="text-xs font-mono text-slate-400">{currentWord.ipa}</span>
                </div>
                <p className="text-xs text-slate-300 max-w-md mx-auto">{currentWord.etymology_derivation}</p>
                <div className="p-2.5 rounded-lg bg-black/30 text-xs text-amber-200 italic max-w-md mx-auto">
                  &quot;{currentWord.context_phrase}&quot;
                </div>
              </div>

              {/* SM-2 Grade Buttons */}
              <div className="space-y-2 pt-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => handleGrade(1)}
                    className="p-3.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 font-semibold text-xs flex flex-col items-center gap-1.5 transition active:scale-95 cursor-pointer"
                  >
                    <span className="text-sm font-bold">Again</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
                      Press [1]
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleGrade(3)}
                    className="p-3.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 font-semibold text-xs flex flex-col items-center gap-1.5 transition active:scale-95 cursor-pointer"
                  >
                    <span className="text-sm font-bold">Hard</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                      Press [2]
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleGrade(4)}
                    className="p-3.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border-2 border-emerald-500/50 text-emerald-300 font-semibold text-xs flex flex-col items-center gap-1.5 transition active:scale-95 cursor-pointer shadow-lg shadow-emerald-500/10"
                  >
                    <span className="text-sm font-bold">Good</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                      Press [3] / Space
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleGrade(5)}
                    className="p-3.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 font-semibold text-xs flex flex-col items-center gap-1.5 transition active:scale-95 cursor-pointer"
                  >
                    <span className="text-sm font-bold">Easy</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
                      Press [4]
                    </span>
                  </button>
                </div>
                <div className="text-center text-[11px] font-mono text-slate-400">
                  Keyboard shortcuts: press <span className="text-amber-300 font-bold">1</span>, <span className="text-amber-300 font-bold">2</span>, <span className="text-emerald-300 font-bold">3</span>, or <span className="text-cyan-300 font-bold">4</span> (or <span className="text-white font-bold">Space/Enter</span> for Good)
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* DECK SELECTOR */
        <div className="space-y-6">
          {/* Deck 1: Due Today */}
          <div className="p-6 rounded-2xl bg-[#1C1D2B] border border-white/10 hover:border-cyan-500/40 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold text-slate-100">Due Today Deck</h3>
                <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {mounted ? dueCards.length : 0} Cards ⚡
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Scheduled by SM-2 spacing interval for optimal memory consolidation.
              </p>
            </div>

            <button
              onClick={() => requestDeckStart("due")}
              disabled={dueCards.length === 0}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition ${
                dueCards.length > 0
                  ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950 cursor-pointer shadow-lg shadow-cyan-500/20"
                  : "bg-white/5 text-slate-600 cursor-not-allowed border border-white/5"
              }`}
            >
              {dueCards.length > 0 ? "Start Due Review →" : "No Due Reviews"}
            </button>
          </div>

          {/* 4 Secondary Decks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* By Shift Deck */}
            <div className="p-5 rounded-2xl bg-[#1C1D2B] border border-white/10 space-y-3 flex flex-col justify-between hover:border-cyan-500/30 transition">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Layers className="w-4 h-4" />
                  <h4 className="text-sm font-bold text-slate-100">By Shift Family</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Review all words belonging to a single structural consonant shift.
                </p>

                <select
                  value={selectedShiftId}
                  onChange={(e) => setSelectedShiftId(e.target.value)}
                  className="w-full mt-2 px-3 py-1.5 rounded-lg bg-[#161722] border border-white/10 text-xs font-mono text-slate-200 outline-none"
                >
                  {Object.values(data.shifts).map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.symbol} ({s.word_ids.length} words)
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => requestDeckStart("shift")}
                className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition cursor-pointer"
              >
                Review Shift Family
              </button>
            </div>

            {/* Weakest Words Deck */}
            <div className="p-5 rounded-2xl bg-[#1C1D2B] border border-white/10 space-y-3 flex flex-col justify-between hover:border-amber-500/30 transition">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-400">
                  <Flame className="w-4 h-4" />
                  <h4 className="text-sm font-bold text-slate-100">Weakest Words</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Focus on words that caused repeated lapses or hesitation.
                </p>
                <div className="text-xs font-mono text-amber-400 pt-1">
                  {mounted ? weakestCards.length : 0} Words with Lapses
                </div>
              </div>

              <button
                onClick={() => requestDeckStart("weakest")}
                disabled={weakestCards.length === 0}
                className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition disabled:opacity-40 cursor-pointer"
              >
                Review Weakest
              </button>
            </div>

            {/* Recent Lessons Deck */}
            <div className="p-5 rounded-2xl bg-[#1C1D2B] border border-white/10 space-y-3 flex flex-col justify-between hover:border-emerald-500/30 transition">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <h4 className="text-sm font-bold text-slate-100">Recent Lessons</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Reinforce vocabulary encountered across your most recent Trail lessons.
                </p>
                <div className="text-xs font-mono text-emerald-400 pt-1">
                  20 Core Words
                </div>
              </div>

              <button
                onClick={() => requestDeckStart("recent")}
                className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition cursor-pointer"
              >
                Review Recent
              </button>
            </div>

            {/* Compound Calques & Traps Deck */}
            <div className="p-5 rounded-2xl bg-[#1C1D2B] border border-white/10 space-y-3 flex flex-col justify-between hover:border-purple-500/40 transition">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-purple-400">
                  <Sparkles className="w-4 h-4" />
                  <h4 className="text-sm font-bold text-slate-100">Compounds & Traps</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Review literal calques (Handschuh, Flugzeug) and false friends (Gift, bald).
                </p>
                <div className="text-xs font-mono text-purple-400 pt-1">
                  {data.compounds.length + data.falseFriends.length} Compounds & Traps
                </div>
              </div>

              <button
                onClick={() => startDeck("compounds")}
                className="w-full py-2 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-xs font-semibold text-purple-200 transition cursor-pointer"
              >
                Review Compounds
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REVIEW STYLE SELECTION MODAL */}
      {isModeSelectorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-xl rounded-2xl bg-[#1C1D2B] border border-cyan-500/40 shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                Select Review Style
              </span>
              <h2 className="text-2xl font-extrabold text-slate-100">How do you want to review?</h2>
              <p className="text-xs text-slate-400">
                All styles review the same SM-2 cards queue and update intervals globally.
              </p>
            </div>

            <div className="space-y-3">
              {/* Option 1: Quick Flip (Flashcards) */}
              <button
                type="button"
                onClick={() => selectModeAndStart("flashcard")}
                className="w-full text-left p-4 rounded-xl bg-[#161722] hover:bg-[#1f2130] border border-cyan-500/30 hover:border-cyan-400 transition cursor-pointer flex items-center justify-between group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📇</span>
                    <span className="font-bold text-slate-100 group-hover:text-cyan-300 transition">
                      Quick Flip (Flashcard)
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Recommended
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Zero typing. Recall in your mind, press Space to reveal, rate 1–4.
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10 group-hover:border-cyan-400/50">
                  Press [1]
                </span>
              </button>

              {/* Option 2: Multiple Choice (MCQ) */}
              <button
                type="button"
                onClick={() => selectModeAndStart("mcq")}
                className="w-full text-left p-4 rounded-xl bg-[#161722] hover:bg-[#1f2130] border border-white/10 hover:border-cyan-400 transition cursor-pointer flex items-center justify-between group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🔘</span>
                    <span className="font-bold text-slate-100 group-hover:text-cyan-300 transition">
                      Multiple Choice (MCQ)
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Active Recognition
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Pick the German word from 4 options. Press 1–4 keys or click.
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10 group-hover:border-cyan-400/50">
                  Press [2]
                </span>
              </button>

              {/* Option 3: Tile Builder */}
              <button
                type="button"
                onClick={() => selectModeAndStart("tiles")}
                className="w-full text-left p-4 rounded-xl bg-[#161722] hover:bg-[#1f2130] border border-white/10 hover:border-cyan-400 transition cursor-pointer flex items-center justify-between group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🧩</span>
                    <span className="font-bold text-slate-100 group-hover:text-cyan-300 transition">
                      Tile Builder
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Morpheme Assembly
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Tap letter & syllable tiles into place to assemble the German cognate.
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10 group-hover:border-cyan-400/50">
                  Press [3]
                </span>
              </button>

              {/* Option 4: Derivation Typing (Last) */}
              <button
                type="button"
                onClick={() => selectModeAndStart("typing")}
                className="w-full text-left p-4 rounded-xl bg-[#161722] hover:bg-[#1f2130] border border-white/10 hover:border-cyan-400 transition cursor-pointer flex items-center justify-between group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">✍️</span>
                    <span className="font-bold text-slate-100 group-hover:text-cyan-300 transition">
                      Derivation Typing
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      Deep Active Recall
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Type the German word letter-by-letter with umlaut shortcuts.
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10 group-hover:border-cyan-400/50">
                  Press [4]
                </span>
              </button>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberPreference}
                  onChange={(e) => setRememberPreference(e.target.checked)}
                  className="rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-0"
                />
                Remember as default style
              </label>

              <button
                type="button"
                onClick={() => setIsModeSelectorOpen(false)}
                className="text-xs font-mono text-slate-400 hover:text-white px-3 py-1.5 rounded hover:bg-white/5 transition cursor-pointer"
              >
                Cancel [Esc]
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
