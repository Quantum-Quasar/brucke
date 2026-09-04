"use client";

import React from "react";

interface GermanCharBarProps {
  onInsert: (char: string) => void;
  className?: string;
}

const CHARACTERS = [
  { char: "ä", digraph: "ae", shortcut: "Alt+A" },
  { char: "ö", digraph: "oe", shortcut: "Alt+O" },
  { char: "ü", digraph: "ue", shortcut: "Alt+U" },
  { char: "ß", digraph: "ss", shortcut: "Alt+S" },
  { char: "Ä", digraph: "Ae", shortcut: "Alt+Shift+A" },
  { char: "Ö", digraph: "Oe", shortcut: "Alt+Shift+O" },
  { char: "Ü", digraph: "Ue", shortcut: "Alt+Shift+U" },
];

export const GermanCharBar: React.FC<GermanCharBarProps> = ({ onInsert, className = "" }) => {
  return (
    <div className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-lg bg-[#181926] border border-white/10 ${className}`}>
      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 px-1.5 hidden sm:inline">
        Umlauts:
      </span>
      {CHARACTERS.map((item) => (
        <button
          key={item.char}
          type="button"
          onClick={() => onInsert(item.char)}
          title={`Digraph: ${item.digraph} · Shortcut: ${item.shortcut}`}
          className="group relative flex flex-col items-center justify-center min-w-[32px] sm:min-w-[36px] h-9 px-2 rounded-md bg-white/5 hover:bg-white/10 active:scale-95 border border-white/5 transition"
        >
          <span className="text-sm font-semibold text-amber-300 group-hover:text-amber-200">{item.char}</span>
          <span className="text-[9px] font-mono text-slate-500 leading-none hidden sm:block">
            {item.digraph}
          </span>
        </button>
      ))}
    </div>
  );
};
