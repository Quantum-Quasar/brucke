"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, Sparkles, AlertCircle, ExternalLink } from "lucide-react";
import { decodeWord, type DecoderResult } from "@/lib/decoder-engine";
import { useAppStore } from "@/lib/store";
import { ShiftPair } from "@/components/common/ShiftPair";
import { GenderBadge } from "@/components/common/GenderBadge";

interface DecoderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DecoderModal: React.FC<DecoderModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<DecoderResult | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const openWordDrawer = useAppStore((s) => s.openWordDrawer);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setResult(null);
    }
  }, [isOpen]);

  // Dismiss modal cleanly via Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResult(null);
      return;
    }
    const timer = setTimeout(() => {
      const res = decodeWord(query);
      setResult(res);
    }, 80);
    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-xl bg-[#1C1D2B] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Search Input Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-[#161722]">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type any English word (hope, water, think, brother, beautiful...)"
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm sm:text-base outline-none font-medium"
          />
          {query && (
            <button onClick={() => setQuery("")} className="p-1 text-slate-400 hover:text-white mr-2">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded text-xs font-mono bg-white/5 hover:bg-white/10 text-slate-400"
          >
            ESC
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 max-h-[65vh] overflow-y-auto space-y-4">
          {!query.trim() && (
            <div className="py-6 text-center space-y-3">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Quick Suggestions</p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {["hope", "water", "think", "brother", "apple", "sleep", "beautiful"].map((word) => (
                  <button
                    key={word}
                    onClick={() => setQuery(word)}
                    className="px-3 py-1 rounded-full text-xs bg-white/5 hover:bg-white/10 border border-white/5 text-slate-300 transition"
                  >
                    {word}
                  </button>
                ))}
              </div>
            </div>
          )}

          {result && result.type === "match" && (
            <div className="p-4 rounded-xl bg-[#242638] border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Shift Cognate Match
                </span>
                <button
                  onClick={() => {
                    onClose();
                    openWordDrawer(result.word.id);
                  }}
                  className="text-xs text-amber-400 hover:underline flex items-center gap-1"
                >
                  View Full Card <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              <div className="py-2">
                <ShiftPair
                  english={result.word.english_cognate}
                  german={result.word.target_word}
                  gender={result.word.gender}
                  rule={result.word.shift_rule}
                  wordId={result.word.id}
                  className="text-base"
                />
              </div>

              <p className="text-xs text-slate-400">{result.word.etymology_derivation}</p>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400 italic">&quot;{result.word.context_phrase}&quot;</span>
                <button
                  onClick={() => {
                    onClose();
                    router.push(`/decoder?q=${encodeURIComponent(query)}`);
                  }}
                  className="text-cyan-400 hover:underline flex items-center gap-1 font-mono"
                >
                  Open in Decoder <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}

          {result && result.type === "bridge" && (
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Latinate / Romance Bridge</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                &quot;{result.englishQuery}&quot; comes from <span className="font-semibold">{result.latinOrigin}</span>, so it does not participate in the Germanic consonant shifts.
              </p>
              <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1">
                <div className="text-xs text-slate-400">German equivalent:</div>
                <div className="text-lg font-bold text-amber-400 flex items-center gap-2">
                  {result.gender && <GenderBadge gender={result.gender} />}
                  <span>{result.germanTranslation}</span>
                </div>
                <p className="text-xs text-cyan-300">{result.etymologicalBridge}</p>
              </div>
            </div>
          )}

          {result && result.type === "no_match" && (
            <div className="py-8 text-center text-slate-400 text-sm">
              <p>No shift cognate found for &quot;{result.query}&quot;.</p>
              <p className="text-xs text-slate-400 mt-1">Try testing Germanic core words like water, think, hope, day, brother.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
