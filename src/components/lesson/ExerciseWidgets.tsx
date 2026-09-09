"use client";

// ponytail: comprehensive bite-sized exercise widget with tile assembly, matching cards, empty input protection, and error sheet

import React, { useState, useEffect, useRef } from "react";
import { Check, AlertCircle, Sparkles } from "lucide-react";
import { GermanCharBar } from "@/components/common/GermanCharBar";
import { ErrorFeedbackSheet } from "./ErrorFeedbackSheet";
import { SuccessFeedbackSheet } from "./SuccessFeedbackSheet";
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
  const [status, setStatus] = useState<"idle" | "correct" | "incorrect">("idle");
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

  useEffect(() => {
    setUserInput("");
    setSelectedIndices([]);
    setSelectedEnglish(null);
    setMatchedPairs([]);
    setStatus("idle");
    setFeedbackNote(null);
    setShowErrorSheet(false);
    setShowSuccessSheet(false);
    setFailedAttemptText("");

    if (exercise.type === "derive" || exercise.type === "reverse_cognate") {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [exercise]);

  // Keyboard shortcut listener for options (1-4) or Enter to verify
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && status === "idle" && !showErrorSheet && !showSuccessSheet) {
        e.preventDefault();
        handleVerify();
      } else if (exercise.type === "shift_select" && exercise.options && status === "idle" && !showErrorSheet && !showSuccessSheet) {
        const num = parseInt(e.key, 10);
        if (!isNaN(num) && num >= 1 && num <= exercise.options.length) {
          e.preventDefault();
          handleShiftOptionSelect(exercise.options[num - 1]);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [userInput, selectedIndices, matchedPairs, status, showErrorSheet, showSuccessSheet, exercise]);

  const handleInputChange = (val: string) => {
    setUserInput(val);
    setFeedbackNote(null);
  };

  const handleVerify = () => {
    let answerToCheck = userInput.trim();

    // 1. Morpheme tiles or Syntax builder
    const expected = exercise.target_answer.trim();
    if (exercise.type === "morpheme_tiles") {
      const options = exercise.tile_options || [];
      const selectedTiles = selectedIndices.map((i) => options[i] || "");
      const cleanTiles = selectedTiles.map((t) => t.replace(/^-/, ""));
      const joinedDirect = cleanTiles.join("").trim();
      const joinedSpace = selectedTiles.join(" ").trim();
      answerToCheck = expected.includes(" ") ? joinedSpace : joinedDirect;
    } else if (exercise.type === "syntax_builder") {
      const options = exercise.word_bank || [];
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

    // Check exact match
    if (answerToCheck === expected) {
      setStatus("correct");
      setFeedbackNote("Correct!");
      setShowSuccessSheet(true);
      return;
    }

    // Check Case-insensitive / Umlaut tolerance
    const normalizeUmlauts = (s: string) =>
      s.replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "ss");

    const isUmlautError =
      normalizeUmlauts(answerToCheck.toLowerCase()) === normalizeUmlauts(expected.toLowerCase()) &&
      answerToCheck.toLowerCase() !== expected.toLowerCase();

    const isCaseError =
      answerToCheck.toLowerCase() === expected.toLowerCase() && answerToCheck !== expected;

    if (isUmlautError) {
      if (tolerance.umlautTolerance) {
        setStatus("correct");
        setFeedbackNote(`Accepted! Note: standard spelling uses umlaut: "${expected}"`);
        setShowSuccessSheet(true);
        return;
      } else {
        setStatus("incorrect");
        onError("umlaut");
        setFailedAttemptText(answerToCheck);
        setShowErrorSheet(true);
        return;
      }
    }

    if (isCaseError) {
      if (tolerance.capitalizationTolerance) {
        setStatus("correct");
        setFeedbackNote(`Accepted! Note: German nouns are capitalized: "${expected}"`);
        setShowSuccessSheet(true);
        return;
      } else {
        setStatus("incorrect");
        onError("capitalization");
        setFailedAttemptText(answerToCheck);
        setShowErrorSheet(true);
        return;
      }
    }

    // Otherwise standard error
    setStatus("incorrect");
    onError("spelling");
    setFailedAttemptText(answerToCheck);
    setShowErrorSheet(true);
  };

  const handleShiftOptionSelect = (option: string) => {
    if (option === exercise.target_answer) {
      setStatus("correct");
      setFeedbackNote("Correct!");
      setShowSuccessSheet(true);
    } else {
      setStatus("incorrect");
      onError("spelling");
      setFailedAttemptText(option);
      setShowErrorSheet(true);
    }
  };

  const pickTileIndex = (idx: number) => {
    if (status !== "idle" || selectedIndices.includes(idx)) return;
    setFeedbackNote(null);
    setSelectedIndices((prev) => [...prev, idx]);
  };

  const unpickTilePosition = (rackPosition: number) => {
    if (status !== "idle") return;
    setFeedbackNote(null);
    setSelectedIndices((prev) => prev.filter((_, i) => i !== rackPosition));
  };

  // Matching pair selection
  const handleSelectEnglish = (en: string) => {
    if (status !== "idle") return;
    setSelectedEnglish(en);
  };

  const handleSelectGerman = (de: string, pairId: string, pairEn: string) => {
    if (status !== "idle") return;
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
      {exercise.type === "morpheme_tiles" && exercise.tile_options && (
        <div className="space-y-4">
          {/* Target Assembly Slot */}
          <div className="min-h-[58px] p-3 rounded-xl bg-[#161722] border-2 border-dashed border-white/20 flex flex-wrap gap-2 items-center justify-center">
            {selectedIndices.length === 0 ? (
              <span className="text-xs font-mono text-slate-500 italic">Tap tiles below to assemble word...</span>
            ) : (
              selectedIndices.map((tileIdx, pos) => (
                <button
                  key={`${exercise.tile_options![tileIdx]}-${tileIdx}-${pos}`}
                  onClick={() => unpickTilePosition(pos)}
                  className="px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/50 text-base font-bold hover:bg-amber-500/30 transition active:scale-95"
                >
                  {exercise.tile_options![tileIdx]}
                </button>
              ))
            )}
          </div>

          {/* Tile Options Bank */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-1">
            {exercise.tile_options.map((tile, i) => {
              const isUsed = selectedIndices.includes(i);
              return (
                <button
                  key={`${tile}-${i}`}
                  type="button"
                  onClick={() => pickTileIndex(i)}
                  disabled={isUsed || status !== "idle"}
                  className={`px-4 py-2.5 rounded-xl border text-sm font-semibold transition active:scale-95 ${
                    isUsed
                      ? "opacity-25 border-white/5 bg-white/5 text-slate-600 cursor-not-allowed"
                      : "border-white/15 bg-white/10 hover:bg-white/15 text-slate-200 shadow-sm"
                  }`}
                >
                  {tile}
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
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
              English Cognates
            </span>
            {exercise.matching_pairs.map((pair) => {
              const isMatched = matchedPairs.includes(pair.id);
              const isSelected = selectedEnglish === pair.english;
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
                  <span>{pair.english}</span>
                  {isMatched && <Check className="w-4 h-4 text-emerald-400" />}
                </button>
              );
            })}
          </div>

          {/* Right Column: Shifted German Targets */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
              German Shifted
            </span>
            {displayGermanPairs.map((pair) => {
              const isMatched = matchedPairs.includes(pair.id);
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
                  <span>{pair.german}</span>
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
              disabled={status === "correct"}
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
      {exercise.type === "syntax_builder" && exercise.word_bank && (
        <div className="space-y-3">
          <div className="min-h-[58px] p-3 rounded-xl bg-[#161722] border border-dashed border-white/20 flex flex-wrap gap-2 items-center">
            {selectedIndices.length === 0 ? (
              <span className="text-xs font-mono text-slate-500 italic pl-2">Tap tiles below in correct sentence sequence...</span>
            ) : (
              selectedIndices.map((tileIdx, pos) => (
                <button
                  key={`${exercise.word_bank![tileIdx]}-${tileIdx}-${pos}`}
                  onClick={() => unpickTilePosition(pos)}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-sm font-medium hover:bg-amber-500/30 transition"
                >
                  {exercise.word_bank![tileIdx]}
                </button>
              ))
            )}
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {exercise.word_bank.map((tile, i) => {
              const isUsed = selectedIndices.includes(i);
              return (
                <button
                  key={`${tile}-${i}`}
                  onClick={() => pickTileIndex(i)}
                  disabled={isUsed || status !== "idle"}
                  className={`px-3.5 py-2 rounded-xl border text-sm font-medium transition active:scale-95 ${
                    isUsed
                      ? "opacity-25 border-white/5 bg-white/5 text-slate-600 cursor-not-allowed"
                      : "border-white/15 bg-white/10 hover:bg-white/15 text-slate-200"
                  }`}
                >
                  {tile}
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
                  : status === "incorrect"
                  ? "text-rose-400"
                  : "text-amber-400"
              }`}
            >
              {status === "correct" ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
              <span>{feedbackNote}</span>
            </p>
          )}
        </div>

        {status === "idle" && exercise.type !== "shift_select" && exercise.type !== "matching_pairs" && (
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
            if (isRetry) {
              // In retry mode, stay on current exercise and reset input so user can try again
              setStatus("idle");
              setFeedbackNote(null);
              setUserInput("");
              setSelectedIndices([]);
            } else {
              // In normal flow, exercise was appended to retry queue, advance
              setTimeout(() => onSuccess(), 100);
            }
          }}
        />
      )}

      {/* Success Breakdown Pop-up / Bottom Sheet */}
      {showSuccessSheet && (
        <SuccessFeedbackSheet
          targetAnswer={exercise.target_answer}
          meaning={exercise.meaning}
          explanation={exercise.explanation}
          vocabHints={exercise.vocab_hints}
          shiftRule={exercise.shift_hint}
          onContinue={() => {
            setShowSuccessSheet(false);
            onSuccess();
          }}
        />
      )}
    </div>
  );
};
