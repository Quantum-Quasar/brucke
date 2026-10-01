"use client";

// TM-5a: the Twist card — deliberate, ungraded friction at the end of practice
// (guidebook §1.3: artificial friction breaks automatism on purpose; §1.9: ask for
// the sentence again — not from memory, but thinking it through again). Never gates,
// never grades, never touches the retry queue or star logic: friction, not a fence.

import React, { useState, useRef } from "react";
import { Zap, Eye, SkipForward, Check, RotateCcw } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { soundEngine } from "@/lib/sound";
import type { LessonTwist } from "@/lib/types";

interface TwistCardProps {
  twist: LessonTwist;
  /** done(meetAgain) — meetAgain re-surfaces the twist at the end of the session (in-memory only) */
  onDone: (meetAgain: boolean) => void;
}

export const TwistCard: React.FC<TwistCardProps> = ({ twist, onDone }) => {
  const [userInput, setUserInput] = useState("");
  const [revealed, setRevealed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const settings = useAppStore((s) => s.settings);

  const wordBank = (twist.word_bank || []).map((w) => w.replace(/[.,!?;:]+$/, ""));

  const insertWord = (word: string) => {
    void soundEngine.playClick(settings.playSoundOnClick, settings.soundVolume);
    setUserInput((prev) => (!prev ? word : prev.endsWith(" ") ? prev + word : `${prev} ${word}`));
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleReveal = () => {
    void soundEngine.playClick(settings.playSoundOnClick, settings.soundVolume);
    setRevealed(true);
  };

  // Enter: reveal while answering, confirm "Got it" once revealed
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInput = document.activeElement === inputRef.current;
      if (e.key === "Enter" && !isInput) {
        e.preventDefault();
        if (!revealed) handleReveal();
        else onDone(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [revealed, onDone]);

  return (
    <div className="p-6 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--main-color)]/40 space-y-5 shadow-lg font-mono animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--sub-color)]/15 pb-3">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-[var(--main-color)]" />
          <span className="text-xs uppercase tracking-wider text-[var(--main-color)] font-semibold">
            twist
          </span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-color)] text-[var(--sub-color)] border border-[var(--sub-color)]/20 uppercase tracking-wider">
          ungraded · think it through again
        </span>
      </div>

      <p className="text-base text-[var(--text-color)] font-bold leading-snug">{twist.prompt}</p>
      <p className="text-[11px] text-[var(--sub-color)] italic -mt-3">
        Not from memory — think it through again.
      </p>

      {!revealed ? (
        <>
          <div className="space-y-3">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="your german..."
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/30 text-[var(--main-color)] text-lg font-bold font-mono outline-none focus:border-[var(--main-color)] transition placeholder:text-[var(--sub-color)]/40"
            />
            {wordBank.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {wordBank.map((word, i) => (
                  <button
                    key={`${word}-${i}`}
                    type="button"
                    onClick={() => insertWord(word)}
                    className="px-3 py-1.5 rounded-lg border text-xs font-mono transition cursor-pointer border-[var(--sub-color)]/20 bg-[var(--bg-color)] hover:border-[var(--main-color)] text-[var(--text-color)]"
                  >
                    {word}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="pt-3 border-t border-[var(--sub-color)]/15 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => onDone(false)}
              className="text-xs font-mono text-[var(--sub-color)] hover:text-[var(--text-color)] transition cursor-pointer flex items-center gap-1.5"
            >
              <SkipForward className="w-3.5 h-3.5" />
              <span>Skip — I&apos;ll meet it in review</span>
            </button>
            <button
              type="button"
              onClick={handleReveal}
              className="px-5 py-2 rounded-lg bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-mono font-bold text-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>reveal</span>
              {settings.showKeyTips && <span className="keycap text-[10px]">enter</span>}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="p-4 rounded-lg bg-[var(--bg-color)] border border-[var(--main-color)]/30 space-y-2">
            <div>
              <span className="text-[11px] font-mono text-[var(--sub-color)] uppercase tracking-wider block">
                the german:
              </span>
              <div className="text-xl font-bold text-[var(--main-color)]">
                {twist.target_answer}
              </div>
            </div>
            {userInput.trim() && userInput.trim() !== twist.target_answer && (
              <div className="text-xs text-[var(--sub-color)] font-mono">
                yours: <span className="text-[var(--text-color)]">{userInput.trim()}</span>
              </div>
            )}
            <div className="pt-2 border-t border-[var(--sub-color)]/15 text-xs text-[var(--sub-color)] leading-relaxed">
              {twist.explanation}
            </div>
          </div>
          <div className="pt-3 border-t border-[var(--sub-color)]/15 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => onDone(true)}
              className="px-4 py-2 rounded-lg bg-[var(--bg-color)] border border-[var(--sub-color)]/20 text-[var(--sub-color)] hover:text-[var(--text-color)] font-mono font-bold text-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>not yet — meet it again</span>
            </button>
            <button
              type="button"
              onClick={() => onDone(false)}
              className="px-5 py-2 rounded-lg bg-[var(--main-color)] hover:opacity-90 text-[var(--bg-color)] font-mono font-bold text-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>got it</span>
              {settings.showKeyTips && <span className="keycap text-[10px]">enter</span>}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
