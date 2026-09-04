"use client";

// ponytail: cohesive review hub with 4 decks and sm-2 grading

import React, { useState } from "react";
import { RotateCcw, Flame, CheckCircle2, Clock, Zap, Layers, ChevronRight, Check } from "lucide-react";
import { ShiftPair } from "@/components/common/ShiftPair";
import { GermanCharBar } from "@/components/common/GermanCharBar";
import { useAppStore } from "@/lib/store";
import { getDueCards, getWeakestCards, type ReviewGrade } from "@/lib/srs";
import compendium from "@/data/compendium.json";
import type { CompendiumData, SRSCard, WordEntity } from "@/lib/types";

const data = compendium as unknown as CompendiumData;

type DeckType = "due" | "shift" | "weakest" | "recent";

export default function ReviewPage() {
  const [activeDeck, setActiveDeck] = useState<DeckType | null>(null);
  const [selectedShiftId, setSelectedShiftId] = useState<string>("p_to_pf_f");
  const [sessionCards, setSessionCards] = useState<SRSCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [inputGuess, setInputGuess] = useState("");

  const srsCards = useAppStore((s) => s.srsCards);
  const wordMastery = useAppStore((s) => s.wordMastery);
  const recordReview = useAppStore((s) => s.recordReview);

  const dueCards = getDueCards(srsCards);
  const weakestCards = getWeakestCards(srsCards);

  // Deck selector handlers
  const startDeck = (deck: DeckType, customCards?: SRSCard[]) => {
    setActiveDeck(deck);
    setCurrentIndex(0);
    setIsRevealed(false);
    setInputGuess("");

    if (customCards) {
      setSessionCards(customCards);
      return;
    }

    if (deck === "due") {
      setSessionCards(dueCards);
    } else if (deck === "weakest") {
      setSessionCards(weakestCards);
    } else if (deck === "shift") {
      const shiftCards = Object.values(srsCards).filter((c) => {
        const w = data.words[c.word_id];
        return w && w.sound_shift_ids.includes(selectedShiftId);
      });
      setSessionCards(shiftCards);
    } else if (deck === "recent") {
      const recentWords = data.wordList.slice(0, 20);
      const recentCards = recentWords.map((w) => srsCards[w.id] || {
        word_id: w.id,
        interval: 1,
        repetitions: 0,
        ease_factor: 2.5,
        due_date: new Date().toISOString().split("T")[0],
        lapses: 0,
        last_reviewed: null,
      });
      setSessionCards(recentCards);
    }
  };

  const handleGrade = (grade: ReviewGrade) => {
    const card = sessionCards[currentIndex];
    if (card) {
      recordReview(card.word_id, grade);
    }

    setIsRevealed(false);
    setInputGuess("");
    if (currentIndex + 1 < sessionCards.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      setActiveDeck(null); // Finish session
    }
  };

  const currentCard = sessionCards[currentIndex];
  const currentWord: WordEntity | undefined = currentCard ? data.words[currentCard.word_id] : undefined;

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
          <span className="text-emerald-400 font-bold">{masteredCount} Mastered ✓</span>
          <span className="text-amber-400 font-bold">{activeCount} In Active SRS 🔄</span>
          <span className="text-cyan-400 font-bold">{dueCards.length} Due Today ⚡</span>
        </div>
        <span className="text-slate-500">SM-2 Spaced Retrieval</span>
      </div>

      {/* ACTIVE REVIEW SESSION MODAL / CARD */}
      {activeDeck && currentCard && currentWord ? (
        <div className="p-6 sm:p-8 rounded-2xl bg-[#1C1D2B] border-2 border-cyan-500/40 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Review Card {currentIndex + 1} of {sessionCards.length}
            </span>
            <button
              onClick={() => setActiveDeck(null)}
              className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5"
            >
              Exit Session
            </button>
          </div>

          {/* Front Prompt */}
          <div className="text-center space-y-2 py-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Shift Rule: {currentWord.shift_rule}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
              {currentWord.english_cognate}
            </h2>
            <p className="text-sm text-slate-400 italic">&quot;{currentWord.english_meaning}&quot;</p>
          </div>

          {/* User Input or Direct Reveal */}
          {!isRevealed ? (
            <div className="space-y-4 max-w-md mx-auto">
              <input
                type="text"
                value={inputGuess}
                onChange={(e) => setInputGuess(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && setIsRevealed(true)}
                placeholder="Type German derivation (or press Space to reveal)..."
                className="w-full px-4 py-3 rounded-xl bg-[#161722] border border-white/15 text-amber-300 text-center font-bold text-lg outline-none focus:border-cyan-400"
              />
              <GermanCharBar onInsert={(c) => setInputGuess((prev) => prev + c)} />
              <button
                type="button"
                onClick={() => setIsRevealed(true)}
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition cursor-pointer"
              >
                Show Answer [Enter / Space]
              </button>
            </div>
          ) : (
            /* Back: Revealed Answer with Static Shift Annotation & Grading Buttons */
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
                <div className="text-xs font-mono text-slate-400">{currentWord.ipa}</div>
                <p className="text-xs text-slate-300 max-w-md mx-auto">{currentWord.etymology_derivation}</p>
                <div className="p-2.5 rounded-lg bg-black/30 text-xs text-amber-200 italic max-w-md mx-auto">
                  &quot;{currentWord.context_phrase}&quot;
                </div>
              </div>

              {/* SM-2 Grade Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => handleGrade(1)}
                  className="p-3 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 font-semibold text-xs flex flex-col items-center gap-1 transition active:scale-95"
                >
                  <span className="text-sm font-bold">Again (1d)</span>
                  <span className="text-[10px] font-mono text-rose-400/80">Forgot [1]</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleGrade(3)}
                  className="p-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 font-semibold text-xs flex flex-col items-center gap-1 transition active:scale-95"
                >
                  <span className="text-sm font-bold">Hard (3d)</span>
                  <span className="text-[10px] font-mono text-amber-400/80">Struggled [2]</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleGrade(4)}
                  className="p-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-semibold text-xs flex flex-col items-center gap-1 transition active:scale-95"
                >
                  <span className="text-sm font-bold">Good (6d)</span>
                  <span className="text-[10px] font-mono text-emerald-400/80">Standard [3]</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleGrade(5)}
                  className="p-3 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 font-semibold text-xs flex flex-col items-center gap-1 transition active:scale-95"
                >
                  <span className="text-sm font-bold">Easy (14d)</span>
                  <span className="text-[10px] font-mono text-cyan-400/80">Intuitive [4]</span>
                </button>
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
                  {dueCards.length} Cards ⚡
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Scheduled by SM-2 spacing interval for optimal memory consolidation.
              </p>
            </div>

            <button
              onClick={() => startDeck("due")}
              disabled={dueCards.length === 0}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition ${
                dueCards.length > 0
                  ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950 cursor-pointer"
                  : "bg-white/5 text-slate-600 cursor-not-allowed border border-white/5"
              }`}
            >
              {dueCards.length > 0 ? "Start Due Review →" : "No Due Reviews"}
            </button>
          </div>

          {/* 3 Secondary Decks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* By Shift Deck */}
            <div className="p-5 rounded-2xl bg-[#1C1D2B] border border-white/10 space-y-3 flex flex-col justify-between">
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
                onClick={() => startDeck("shift")}
                className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition"
              >
                Review Shift Family
              </button>
            </div>

            {/* Weakest Words Deck */}
            <div className="p-5 rounded-2xl bg-[#1C1D2B] border border-white/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-amber-400">
                  <Flame className="w-4 h-4" />
                  <h4 className="text-sm font-bold text-slate-100">Weakest Words</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Focus on words that caused repeated lapses or hesitation.
                </p>
                <div className="text-xs font-mono text-amber-400 pt-1">
                  {weakestCards.length} Words with Lapses
                </div>
              </div>

              <button
                onClick={() => startDeck("weakest")}
                disabled={weakestCards.length === 0}
                className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition disabled:opacity-40"
              >
                Review Weakest
              </button>
            </div>

            {/* Recent Lessons Deck */}
            <div className="p-5 rounded-2xl bg-[#1C1D2B] border border-white/10 space-y-3 flex flex-col justify-between">
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
                onClick={() => startDeck("recent")}
                className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition"
              >
                Review Recent
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
