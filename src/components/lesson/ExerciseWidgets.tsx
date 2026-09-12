"use client";

// ponytail: comprehensive bite-sized exercise widget with tile assembly, matching cards, empty input protection, and error sheet

import React, { useState, useEffect, useRef } from "react";
import { Check, AlertCircle, Sparkles } from "lucide-react";
import { GermanCharBar } from "@/components/common/GermanCharBar";
import { ErrorFeedbackSheet } from "./ErrorFeedbackSheet";
import { SuccessFeedbackSheet } from "./SuccessFeedbackSheet";
import { evaluateAnswerAccuracy } from "@/lib/letter-diff";
import { useAppStore } from "@/lib/store";
import type { ExerciseItem } from "@/lib/types";

interface ExerciseWidgetProps {
  exercise: ExerciseItem;
  onSuccess: () => void;
  onError: (errorType: "spelling" | "umlaut" | "capitalization") => void;
  isRetry?: boolean;
}

export const ExerciseWidget: React.FC<ExerciseWidgetProps> = ({
  exercise,
  onSuccess,
  onError,
  isRetry = false,
}) => {
  const [userInput, setUserInput] = useState("");
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [status, setStatus] = useState<"idle" | "correct" | "almost" | "incorrect">("idle");
  const [sheetVariant, setSheetVariant] = useState<"exact" | "almost">("exact");
  const [verifiedAttemptText, setVerifiedAttemptText] = useState("");
  const [almostWarningNote, setAlmostWarningNote] = useState<string | undefined>(undefined);
  const [feedbackNote, setFeedbackNote] = useState<string | null>(null);
  const [showErrorSheet, setShowErrorSheet] = useState(false);
  const [showSuccessSheet, setShowSuccessSheet] = useState(false);
  const [failedAttemptText, setFailedAttemptText] = useState("");

  // Matching pairs state
  const [selectedEnglish, setSelectedEnglish] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]); // list of matched pair IDs

  const inputRef = useRef<HTMLInputElement>(null);
  const tolerance = useAppStore((s) => s.tolerance);

  const displayGermanPairs = React.useMemo(() => {
    if (!exercise.matching_pairs) return [];
    const pairs = [...exercise.matching_pairs];
    if (pairs.length <= 1) return pairs;
    // Deterministic offset so rows don't line up trivially
    return [pairs[pairs.length - 1], ...pairs.slice(0, pairs.length - 1)];
  }, [exercise.matching_pairs]);

  // Anti-spoiler: strip trailing periods / full stops and punctuation from tiles so the last word is never leaked
  const sanitizedWordBank = React.useMemo(() => {
    return (exercise.word_bank || []).map((w) => w.replace(/[.,!?;:]+$/, ""));
  }, [exercise.word_bank]);

  const sanitizedTileOptions = React.useMemo(() => {
    return (exercise.tile_options || []).map((t) => t.replace(/[.,!?;:]+$/, ""));
  }, [exercise.tile_options]);

  useEffect(() => {
    setUserInput("");
    setSelectedIndices([]);
    setSelectedEnglish(null);
    setMatchedPairs([]);
    setStatus("idle");
    setSheetVariant("exact");
    setVerifiedAttemptText("");
    setAlmostWarningNote(undefined);
    setFeedbackNote(null);
    setShowErrorSheet(false);
    setShowSuccessSheet(false);
    setFailedAttemptText("");

    if (exercise.type === "derive" || exercise.type === "reverse_cognate") {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [exercise]);

  // Keyboard shortcut listener for all exercise types:
  // - Enter: verify current answer
  // - Shift select: 1-4
  // - Morpheme tiles: 1-9 to pick, Backspace to unpick
  // - Syntax builder: 1-9 to pick, Backspace to unpick
  // - Matching pairs: 1-N for English, then 1-N for German, Escape to deselect
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when feedback modal sheets are up (they handle their own Enter/Space)
      if (showErrorSheet || showSuccessSheet) return;

      const isInput = document.activeElement === inputRef.current;

      // 1. Enter key: verify
      if (e.key === "Enter") {
        e.preventDefault();
        handleVerify();
        return;
      }

      // If user is actively typing in the derivation text input, allow standard text input
      if (isInput) return;

      // 2. Multiple choice shift select (1-9)
      if (exercise.type === "shift_select" && exercise.options && status === "idle") {
        const num = parseInt(e.key, 10);
        if (!isNaN(num) && num >= 1 && num <= exercise.options.length) {
          e.preventDefault();
          handleShiftOptionSelect(exercise.options[num - 1]);
          return;
        }
      }

      // 3. Morpheme tiles (1-9 to pick, Backspace to undo)
      if (exercise.type === "morpheme_tiles" && sanitizedTileOptions.length > 0 && status === "idle") {
        if (e.key === "Backspace") {
          e.preventDefault();
          if (selectedIndices.length > 0) {
            unpickTilePosition(selectedIndices.length - 1);
          }
          return;
        }
        const num = parseInt(e.key, 10);
        if (!isNaN(num) && num >= 1 && num <= sanitizedTileOptions.length) {
          e.preventDefault();
          const targetIdx = num - 1;
          if (!selectedIndices.includes(targetIdx)) {
            pickTileIndex(targetIdx);
          }
          return;
        }
      }

      // 4. Satzklammer Syntax builder (1-9 to pick, Backspace to undo)
      if (exercise.type === "syntax_builder" && sanitizedWordBank.length > 0 && status === "idle") {
        if (e.key === "Backspace") {
          e.preventDefault();
          if (selectedIndices.length > 0) {
            unpickTilePosition(selectedIndices.length - 1);
          }
          return;
        }
        const num = parseInt(e.key, 10);
        if (!isNaN(num) && num >= 1 && num <= sanitizedWordBank.length) {
          e.preventDefault();
          const targetIdx = num - 1;
          if (!selectedIndices.includes(targetIdx)) {
            pickTileIndex(targetIdx);
          }
          return;
        }
      }

      // 5. Cognate matching cards:
      // If no English pair selected yet: 1-N selects available English card
      // If English pair selected: 1-N selects available German card; Escape cancels selection
      if (exercise.type === "matching_pairs" && exercise.matching_pairs && status === "idle") {
        if (e.key === "Escape") {
          e.preventDefault();
          setSelectedEnglish(null);
          return;
        }
        const num = parseInt(e.key, 10);
        if (!isNaN(num) && num >= 1) {
          if (!selectedEnglish) {
            const unmatched = exercise.matching_pairs.filter((p) => !matchedPairs.includes(p.id));
            if (num <= unmatched.length) {
              e.preventDefault();
              setSelectedEnglish(unmatched[num - 1].english);
              return;
            }
          } else {
            const unmatched = displayGermanPairs.filter((p) => !matchedPairs.includes(p.id));
            if (num <= unmatched.length) {
              e.preventDefault();
              const chosen = unmatched[num - 1];
              handleSelectGerman(chosen.german, chosen.id, chosen.english);
              return;
            }
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [userInput, selectedIndices, matchedPairs, selectedEnglish, displayGermanPairs, status, showErrorSheet, showSuccessSheet, exercise]);

  const handleInputChange = (val: string) => {
    setUserInput(val);
    if (status !== "idle") setStatus("idle");
    setFeedbackNote(null);
  };

  const handleVerify = () => {
    inputRef.current?.blur();
    let answerToCheck = userInput.trim();

    // 1. Morpheme tiles or Syntax builder
    const expected = exercise.target_answer.trim();
    if (exercise.type === "morpheme_tiles") {
      const options = sanitizedTileOptions;
      const selectedTiles = selectedIndices.map((i) => options[i] || "");
      const cleanTiles = selectedTiles.map((t) => t.replace(/^-/, ""));
      const joinedDirect = cleanTiles.join("").trim();
      const joinedSpace = selectedTiles.join(" ").trim();
      answerToCheck = expected.includes(" ") ? joinedSpace : joinedDirect;
    } else if (exercise.type === "syntax_builder") {
      const options = sanitizedWordBank;
      const selectedTiles = selectedIndices.map((i) => options[i] || "");
      answerToCheck = selectedTiles.join(" ").trim();
    } else if (exercise.type === "matching_pairs") {
      // Handled interactively on match
      return;
    }

    // EMPTY INPUT GUARD: Don't fail the user if nothing has been entered!
    if (!answerToCheck) {
      setFeedbackNote("Please enter or select an answer before verifying.");
      return;
    }

    // Three-tier evaluation: Spot On (Green), Almost Right (Yellow), Obviously Wrong (Red)
    const evaluation = evaluateAnswerAccuracy(answerToCheck, expected);

    if (evaluation.accuracy === "exact") {
      setStatus("correct");
      setFeedbackNote("Spot On! Perfect.");
      setSheetVariant("exact");
      setVerifiedAttemptText(answerToCheck);
      setAlmostWarningNote(undefined);
      setShowSuccessSheet(true);
      return;
    }

    if (evaluation.accuracy === "almost") {
      setStatus("almost");
      setFeedbackNote(evaluation.warningNote || `Almost right! Note standard spelling: "${expected}"`);
      setSheetVariant("almost");
      setVerifiedAttemptText(answerToCheck);
      setAlmostWarningNote(evaluation.warningNote);
      setShowSuccessSheet(true);
      return;
    }

    // Otherwise standard error (obviously wrong)
    setStatus("incorrect");
    onError(
      evaluation.reason === "umlaut"
        ? "umlaut"
        : evaluation.reason === "case"
        ? "capitalization"
        : "spelling"
    );
    setFailedAttemptText(answerToCheck);
    setShowErrorSheet(true);
  };

  const handleShiftOptionSelect = (option: string) => {
    const evaluation = evaluateAnswerAccuracy(option, exercise.target_answer);
    if (evaluation.accuracy === "exact") {
      setStatus("correct");
      setFeedbackNote("Spot On! Perfect.");
      setSheetVariant("exact");
      setVerifiedAttemptText(option);
      setAlmostWarningNote(undefined);
      setShowSuccessSheet(true);
    } else if (evaluation.accuracy === "almost") {
      setStatus("almost");
      setFeedbackNote(evaluation.warningNote || "Almost right!");
      setSheetVariant("almost");
      setVerifiedAttemptText(option);
      setAlmostWarningNote(evaluation.warningNote);
      setShowSuccessSheet(true);
    } else {
      setStatus("incorrect");
      onError("spelling");
      setFailedAttemptText(option);
      setShowErrorSheet(true);
    }
  };

  const pickTileIndex = (idx: number) => {
    if (status !== "idle" && status !== "incorrect") return;
    if (status === "incorrect") setStatus("idle");
    if (selectedIndices.includes(idx)) return;
    setFeedbackNote(null);
    setSelectedIndices((prev) => [...prev, idx]);
  };

  const unpickTilePosition = (rackPosition: number) => {
    if (status !== "idle" && status !== "incorrect") return;
    if (status === "incorrect") setStatus("idle");
    setFeedbackNote(null);
    setSelectedIndices((prev) => prev.filter((_, i) => i !== rackPosition));
  };

  // Matching pair selection
  const handleSelectEnglish = (en: string) => {
    if (status !== "idle" && status !== "incorrect") return;
    if (status === "incorrect") setStatus("idle");
    setSelectedEnglish(en);
  };

  const handleSelectGerman = (de: string, pairId: string, pairEn: string) => {
    if (status !== "idle" && status !== "incorrect") return;
    if (status === "incorrect") setStatus("idle");
    if (!selectedEnglish) {
      setFeedbackNote("Select an English word on the left first.");
      return;
    }

    if (selectedEnglish === pairEn) {
      const updated = [...matchedPairs, pairId];
      setMatchedPairs(updated);
      setSelectedEnglish(null);
      setFeedbackNote(null);

      if (exercise.matching_pairs && updated.length === exercise.matching_pairs.length) {
        setStatus("correct");
        setFeedbackNote("All pairs matched perfectly!");
        setShowSuccessSheet(true);
      }
    } else {
      setFeedbackNote(`"${selectedEnglish}" does not match "${de}". Try again!`);
      setSelectedEnglish(null);
      onError("spelling");
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-[#1C1D2B] border border-white/10 space-y-5 shadow-xl">
      {/* Exercise Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            {isRetry
              ? "🔄 End-of-Lesson Retry"
              : exercise.type === "morpheme_tiles"
              ? "Tile Morpheme Assembly"
              : exercise.type === "matching_pairs"
              ? "Cognate Matching Cards"
              : exercise.type === "shift_select"
              ? "Shift Pattern Recognition"
              : exercise.type === "syntax_builder"
              ? "Sentence Construction"
              : "Rule Application"}
          </span>
        </div>

        {exercise.shift_hint && (
          <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/20 font-bold">
            {exercise.shift_hint}
          </span>
        )}
      </div>

      <p className="text-lg text-slate-100 font-medium leading-snug">{exercise.prompt}</p>

      {/* Pre-exercise Vocabulary Hints for newly introduced words (e.g. mit = with) */}
      {exercise.vocab_hints && exercise.vocab_hints.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs animate-in fade-in">
          <span className="font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Word Clue:
          </span>
          {exercise.vocab_hints.map((hint) => (
            <span
              key={hint.word}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-slate-200"
            >
              <strong className="text-amber-300 font-mono font-bold">{hint.word}</strong>
              <span className="text-slate-400">=</span>
              <span className="font-medium text-slate-100">{hint.translation}</span>
              {hint.note && <span className="text-slate-400 text-[11px] italic">({hint.note})</span>}
            </span>
          ))}
        </div>
      )}

      {/* 1. Morpheme Tile Assembly (Scaffolded Beginner) */}
      {exercise.type === "morpheme_tiles" && sanitizedTileOptions.length > 0 && (
        <div className="space-y-4">
          {/* Target Assembly Slot */}
          <div className="min-h-[58px] p-3 rounded-xl bg-[#161722] border-2 border-dashed border-white/20 flex flex-wrap gap-2 items-center justify-center">
            {selectedIndices.length === 0 ? (
              <span className="text-xs font-mono text-slate-500 italic">
                Tap tiles or press 1–{sanitizedTileOptions.length} to assemble word...
              </span>
            ) : (
              selectedIndices.map((tileIdx, pos) => (
                <button
                  key={`${sanitizedTileOptions[tileIdx]}-${tileIdx}-${pos}`}
                  onClick={() => unpickTilePosition(pos)}
                  className="px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/50 text-base font-bold hover:bg-amber-500/30 transition active:scale-95 flex items-center gap-1.5"
                  title="Click or press Backspace to unpick"
                >
                  <span>{sanitizedTileOptions[tileIdx]}</span>
                  <span className="text-[10px] text-amber-400/60 font-mono font-normal">×</span>
                </button>
              ))
            )}
          </div>

          {/* Tile Options Bank */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-1">
            {sanitizedTileOptions.map((tile, i) => {
              const isUsed = selectedIndices.includes(i);
              return (
                <button
                  key={`${tile}-${i}`}
                  type="button"
                  onClick={() => pickTileIndex(i)}
                  disabled={isUsed || status === "correct" || status === "almost"}
                  className={`px-4 py-2.5 rounded-xl border text-sm font-semibold transition active:scale-95 flex items-center gap-2 ${
                    isUsed
                      ? "opacity-25 border-white/5 bg-white/5 text-slate-600 cursor-not-allowed"
                      : "border-white/15 bg-white/10 hover:bg-white/15 text-slate-200 shadow-sm hover:border-amber-400/40"
                  }`}
                >
                  <kbd className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/40 text-slate-400 border border-white/10">
                    {i + 1}
                  </kbd>
                  <span>{tile}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. Cognate Matching Cards */}
      {exercise.type === "matching_pairs" && exercise.matching_pairs && (
        <div className="grid grid-cols-2 gap-4 pt-1">
          {/* Left Column: English Cognates */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                English Cognates
              </span>
              {!selectedEnglish && (
                <span className="text-[10px] font-mono text-amber-400/80">
                  Press 1–{exercise.matching_pairs.filter((p) => !matchedPairs.includes(p.id)).length}
                </span>
              )}
            </div>
            {exercise.matching_pairs.map((pair) => {
              const isMatched = matchedPairs.includes(pair.id);
              const isSelected = selectedEnglish === pair.english;
              const unmatchedIndex = !isMatched
                ? exercise.matching_pairs!.filter((p) => !matchedPairs.includes(p.id)).findIndex((p) => p.id === pair.id)
                : -1;
              return (
                <button
                  key={`en_${pair.id}`}
                  type="button"
                  onClick={() => handleSelectEnglish(pair.english)}
                  disabled={isMatched}
                  className={`w-full p-3 rounded-xl border text-sm font-medium transition text-left flex items-center justify-between ${
                    isMatched
                      ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-400 opacity-60"
                      : isSelected
                      ? "bg-amber-500/20 border-amber-400 text-amber-300 ring-2 ring-amber-400/30 font-bold"
                      : "bg-white/5 border-white/10 hover:bg-white/10 text-slate-200"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {unmatchedIndex !== -1 && (
                      <kbd className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/40 text-slate-400 border border-white/10">
                        {unmatchedIndex + 1}
                      </kbd>
                    )}
                    <span>{pair.english}</span>
                  </span>
                  {isMatched && <Check className="w-4 h-4 text-emerald-400" />}
                </button>
              );
            })}
          </div>

          {/* Right Column: Shifted German Targets */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                German Shifted
              </span>
              {selectedEnglish && (
                <span className="text-[10px] font-mono text-cyan-400/80">
                  Press 1–{displayGermanPairs.filter((p) => !matchedPairs.includes(p.id)).length} · Esc
                </span>
              )}
            </div>
            {displayGermanPairs.map((pair) => {
              const isMatched = matchedPairs.includes(pair.id);
              const unmatchedIndex = !isMatched
                ? displayGermanPairs.filter((p) => !matchedPairs.includes(p.id)).findIndex((p) => p.id === pair.id)
                : -1;
              return (
                <button
                  key={`de_${pair.id}`}
                  type="button"
                  onClick={() => handleSelectGerman(pair.german, pair.id, pair.english)}
                  disabled={isMatched}
                  className={`w-full p-3 rounded-xl border text-sm font-semibold transition text-left flex items-center justify-between ${
                    isMatched
                      ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-400 opacity-60"
                      : "bg-white/5 border-white/10 hover:bg-white/10 text-amber-400"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {selectedEnglish && unmatchedIndex !== -1 && (
                      <kbd className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/40 text-cyan-300 border border-cyan-500/30">
                        {unmatchedIndex + 1}
                      </kbd>
                    )}
                    <span>{pair.german}</span>
                  </span>
                  {isMatched && <Check className="w-4 h-4 text-emerald-400" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Typing Derivation Input */}
      {(exercise.type === "derive" || exercise.type === "reverse_cognate") && (
        <div className="space-y-3">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleVerify();
                }
              }}
              readOnly={status === "correct" || status === "almost"}
              placeholder={exercise.english_hint ? `Type German (e.g. ${exercise.english_hint})` : "Type answer..."}
              className="w-full px-4 py-3.5 rounded-xl bg-[#161722] border border-white/15 text-amber-300 text-xl font-bold placeholder-slate-500 outline-none focus:border-amber-400/60 transition shadow-inner"
            />
          </div>

          <GermanCharBar onInsert={(char) => handleInputChange(userInput + char)} />
        </div>
      )}

      {/* 4. Multiple Choice Shift Select */}
      {exercise.type === "shift_select" && exercise.options && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {exercise.options.map((opt, i) => (
            <button
              key={opt}
              type="button"
              onClick={() => handleShiftOptionSelect(opt)}
              disabled={status !== "idle"}
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-98 border border-white/10 text-sm font-mono text-slate-200 transition text-left group"
            >
              <span className="group-hover:text-amber-300 font-bold">{opt}</span>
              <kbd className="text-xs text-slate-500 bg-black/40 px-2 py-0.5 rounded border border-white/10">
                {i + 1}
              </kbd>
            </button>
          ))}
        </div>
      )}

      {/* 5. Satzklammer Syntax Builder Tiles */}
      {exercise.type === "syntax_builder" && sanitizedWordBank.length > 0 && (
        <div className="space-y-3">
          <div className="min-h-[58px] p-3 rounded-xl bg-[#161722] border border-dashed border-white/20 flex flex-wrap gap-2 items-center">
            {selectedIndices.length === 0 ? (
              <span className="text-xs font-mono text-slate-500 italic pl-2">
                Tap tiles or press 1–{sanitizedWordBank.length} in sentence sequence...
              </span>
            ) : (
              selectedIndices.map((tileIdx, pos) => (
                <button
                  key={`${sanitizedWordBank[tileIdx]}-${tileIdx}-${pos}`}
                  onClick={() => unpickTilePosition(pos)}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-sm font-medium hover:bg-amber-500/30 transition flex items-center gap-1.5"
                  title="Click or press Backspace to unpick"
                >
                  <span>{sanitizedWordBank[tileIdx]}</span>
                  <span className="text-[10px] text-amber-400/60 font-mono font-normal">×</span>
                </button>
              ))
            )}
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {sanitizedWordBank.map((tile, i) => {
              const isUsed = selectedIndices.includes(i);
              return (
                <button
                  key={`${tile}-${i}`}
                  onClick={() => pickTileIndex(i)}
                  disabled={isUsed || status === "correct" || status === "almost"}
                  className={`px-3.5 py-2 rounded-xl border text-sm font-medium transition active:scale-95 flex items-center gap-2 ${
                    isUsed
                      ? "opacity-25 border-white/5 bg-white/5 text-slate-600 cursor-not-allowed"
                      : "border-white/15 bg-white/10 hover:bg-white/15 text-slate-200 hover:border-amber-400/40"
                  }`}
                >
                  <kbd className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/40 text-slate-400 border border-white/10">
                    {i + 1}
                  </kbd>
                  <span>{tile}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Footer Actions & Notifications */}
      <div className="pt-3 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          {feedbackNote && (
            <p
              className={`text-xs font-medium flex items-center gap-1.5 ${
                status === "correct"
                  ? "text-emerald-400"
                  : status === "almost"
                  ? "text-amber-400 font-semibold"
                  : status === "incorrect"
                  ? "text-rose-400"
                  : "text-amber-400"
              }`}
            >
              {status === "correct" ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : status === "almost" ? (
                <Sparkles className="w-4 h-4 text-amber-400" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
              <span>{feedbackNote}</span>
            </p>
          )}
        </div>

        {status !== "correct" && status !== "almost" && exercise.type !== "shift_select" && exercise.type !== "matching_pairs" && (
          <button
            type="button"
            onClick={handleVerify}
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition active:scale-95 cursor-pointer ml-auto shadow-md shadow-amber-500/20"
          >
            Verify [Enter]
          </button>
        )}
      </div>

      {/* Error Breakdown Pop-up / Bottom Sheet */}
      {showErrorSheet && (
        <ErrorFeedbackSheet
          userInput={failedAttemptText}
          expectedAnswer={exercise.target_answer}
          englishPrompt={exercise.prompt}
          shiftRule={exercise.shift_hint}
          explanation={exercise.explanation}
          onContinue={() => {
            setShowErrorSheet(false);
            setStatus("idle");
            setFeedbackNote(null);
            if (isRetry) {
              // In retry mode, stay on current exercise and reset input so user can try again
              setUserInput("");
              setSelectedIndices([]);
              setTimeout(() => inputRef.current?.focus(), 50);
            } else {
              // In normal flow, exercise was appended to retry queue, advance
              onSuccess();
            }
          }}
        />
      )}

      {/* Success / Almost Right Breakdown Pop-up / Bottom Sheet */}
      {showSuccessSheet && (
        <SuccessFeedbackSheet
          targetAnswer={exercise.target_answer}
          meaning={exercise.meaning}
          explanation={exercise.explanation}
          vocabHints={exercise.vocab_hints}
          shiftRule={exercise.shift_hint}
          variant={sheetVariant}
          userAttempt={verifiedAttemptText}
          warningNote={almostWarningNote}
          onContinue={() => {
            setShowSuccessSheet(false);
            setStatus("idle");
            setFeedbackNote(null);
            onSuccess();
          }}
        />
      )}
    </div>
  );
};
