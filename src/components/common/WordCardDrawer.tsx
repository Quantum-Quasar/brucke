"use client";

// ponytail: native css slide-over drawer and mobile bottom sheet with zero heavy drawer libs

import React, { useRef } from "react";
import Link from "next/link";
import { X, ExternalLink, Compass, BookOpen, CheckCircle2, Circle, Disc, Minus, Volume2 } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { GenderBadge } from "@/components/common/GenderBadge";
import { playGermanAudio } from "@/lib/audio";
import { compendium as data } from "@/data/compendium";
import { getWordEntity, WORD_LESSON_MAP } from "@/lib/word-entities";
import type { WordEntity } from "@/lib/types";
import { useDialogFocus } from "@/lib/use-dialog-focus";

export const WordCardDrawer: React.FC = () => {
  const activeWordId = useAppStore((s) => s.activeWordDrawerId);
  const closeDrawer = useAppStore((s) => s.closeWordDrawer);
  const mastery = useAppStore((s) => (activeWordId ? s.wordMastery[activeWordId] || "unexplored" : "unexplored"));
  const dialogRef = useRef<HTMLDivElement>(null);

  useDialogFocus({
    open: Boolean(activeWordId),
    containerRef: dialogRef,
    onEscape: closeDrawer,
  });

  if (!activeWordId) return null;

  const word: WordEntity | undefined = getWordEntity(activeWordId);

  if (!word) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Word details unavailable"
          className="bg-[var(--bg-color)] border border-[var(--sub-color)]/30 p-6 rounded-lg max-w-sm w-full text-center space-y-3"
        >
          <p className="text-sm font-mono text-[var(--sub-color)]">word details not found for &quot;{activeWordId}&quot;</p>
          <button
            onClick={closeDrawer}
            className="px-4 py-1.5 bg-[var(--main-color)] text-[var(--bg-color)] font-mono font-bold rounded text-xs"
          >
            close
          </button>
        </div>
      </div>
    );
  }

  const shiftFamily = word.sound_shift_ids[0] ? data.shifts[word.sound_shift_ids[0]] : null;
  const lessonId = word ? WORD_LESSON_MAP[word.id] : undefined;
  const relatedCompounds = data.compounds.filter(
    (c) => c.compound.toLowerCase().includes(word.target_word.toLowerCase()) || c.literal_morphemes.toLowerCase().includes(word.target_word.toLowerCase())
  );

  const getMasteryBadge = () => {
    switch (mastery) {
      case "mastered":
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-bold border border-[var(--main-color)]/40 bg-[var(--main-color)]/10 text-[var(--main-color)]">
            <CheckCircle2 className="w-3 h-3" /> mastered
          </span>
        );
      case "encountered":
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-bold border border-[var(--sub-color)]/40 bg-[var(--sub-color)]/10 text-[var(--sub-color)]">
            <Disc className="w-3 h-3" /> encountered
          </span>
        );
      case "explored":
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-bold border border-[var(--text-color)]/40 bg-[var(--text-color)]/10 text-[var(--text-color)]">
            <Circle className="w-3 h-3" /> explored
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono border border-[var(--sub-color)]/20 bg-[var(--sub-alt-color)] text-[var(--sub-color)]">
            <Minus className="w-3 h-3" /> unexplored
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 transition-opacity animate-in fade-in duration-200">
      {/* Backdrop click to dismiss */}
      <div className="absolute inset-0" onClick={closeDrawer} />

      {/* Drawer Panel: Slide-over on desktop, bottom-sheet on mobile */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="word-drawer-title"
        className="relative z-10 flex flex-col w-full sm:max-w-md h-full sm:h-auto sm:min-h-full bg-[var(--bg-color)] border-l border-[var(--sub-color)]/20 shadow-2xl overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[var(--bg-color)] border-b border-[var(--sub-color)]/20">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--sub-color)]">word</span>
            {getMasteryBadge()}
          </div>
          <button
            onClick={closeDrawer}
            className="p-1 rounded text-[var(--sub-color)] hover:text-[var(--text-color)] hover:bg-[var(--sub-alt-color)] transition flex items-center gap-1"
            aria-label="Close word drawer"
          >
            <span className="keycap text-[10px]">esc</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Word Content */}
        <div className="p-6 space-y-6">
          {/* Main Word + Pronunciation */}
          <div>
            <div className="flex items-center gap-3">
              <GenderBadge gender={word.gender} size="lg" showLabel />
              <h2 id="word-drawer-title" className="text-3xl font-mono font-bold text-[var(--main-color)] tracking-tight">{word.target_word}</h2>
              <button
                type="button"
                onClick={() => playGermanAudio(word.gender ? `${word.gender} ${word.target_word}` : word.target_word)}
                className="p-1.5 rounded bg-[var(--sub-alt-color)] hover:bg-[var(--main-color)]/10 text-[var(--main-color)] border border-[var(--sub-color)]/20 transition cursor-pointer"
                title={`Listen to "${word.gender ? `${word.gender} ` : ""}${word.target_word}"`}
                aria-label={`Listen to German pronunciation of ${word.gender ? `${word.gender} ` : ""}${word.target_word}`}
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-3 mt-2 text-xs text-[var(--sub-color)] font-mono">
              <span>{word.ipa}</span>
              <span>·</span>
              <span className="text-[var(--text-color)]">&quot;{word.english_meaning}&quot;</span>
            </div>
          </div>

          {/* Sound Shift Card */}
          <div className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--main-color)]">shift rule</div>
            <div className="flex items-center justify-between">
              <div className="text-sm font-mono text-[var(--text-color)]">
                <span className="text-[var(--sub-color)]">{word.english_cognate}</span>
                <span className="mx-2 text-[var(--main-color)]">→</span>
                <span className="text-[var(--main-color)] font-bold">{word.target_word}</span>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--bg-color)] text-[var(--main-color)] border border-[var(--sub-color)]/20">
                {word.shift_rule}
              </span>
            </div>
            <p className="text-xs font-mono text-[var(--sub-color)] leading-relaxed pt-1">{word.etymology_derivation}</p>
          </div>

          {/* Cross-Layer Links */}
          <div className="space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--sub-color)]">connections</div>
            <div className="grid grid-cols-1 gap-2">
              {lessonId && (
                <Link
                  href={`/trail/${lessonId}`}
                  onClick={closeDrawer}
                  className="flex items-center justify-between p-3 rounded-lg bg-[var(--sub-alt-color)] hover:border-[var(--main-color)] border border-[var(--sub-color)]/20 text-xs font-mono text-[var(--text-color)] transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-[var(--main-color)]" />
                    <span>lesson {lessonId}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--sub-color)] group-hover:text-[var(--main-color)] transition" />
                </Link>
              )}

              {shiftFamily && (
                <Link
                  href={`/atlas/${shiftFamily.id}`}
                  onClick={closeDrawer}
                  className="flex items-center justify-between p-3 rounded-lg bg-[var(--sub-alt-color)] hover:border-[var(--main-color)] border border-[var(--sub-color)]/20 text-xs font-mono text-[var(--text-color)] transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <Compass className="w-4 h-4 text-[var(--main-color)]" />
                    <span>atlas: {shiftFamily.symbol} constellation</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--sub-color)] group-hover:text-[var(--main-color)] transition" />
                </Link>
              )}
            </div>
          </div>

          {/* Context Phrase / Example */}
          <div className="p-4 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 space-y-1.5 font-mono">
            <div className="text-xs uppercase tracking-wider text-[var(--sub-color)]">context</div>
            <p className="text-sm text-[var(--text-color)] font-medium">&quot;{word.context_phrase}&quot;</p>
            <p className="text-xs text-[var(--sub-color)]">{word.context_translation}</p>
          </div>

          {/* Related Compounds (if any) */}
          {relatedCompounds.length > 0 && (
            <div className="space-y-2 font-mono">
              <div className="text-xs uppercase tracking-wider text-[var(--sub-color)]">related compounds</div>
              <div className="space-y-1.5">
                {relatedCompounds.map((comp) => (
                  <div key={comp.id} className="p-3 rounded-lg bg-[var(--sub-alt-color)] border border-[var(--sub-color)]/20 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[var(--main-color)]">{comp.compound}</span>
                      <span className="text-[var(--sub-color)]">{comp.real_meaning}</span>
                    </div>
                    <p className="text-[var(--sub-color)] text-[11px]">{comp.lore}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
