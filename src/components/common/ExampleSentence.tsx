"use client";

import React from "react";
import { highlightWord } from "@/lib/sentence";

/** A German example sentence with the taught word highlighted, plus its English translation. */
export function ExampleSentence({
  sentence,
  translation,
  word,
  className = "",
}: {
  sentence: string;
  translation?: string;
  word: string;
  className?: string;
}) {
  const segments = highlightWord(sentence, word);
  return (
    <div className={`space-y-1 ${className}`}>
      <p lang="de" className="text-sm text-[var(--text-color)] font-medium">
        &quot;
        {segments.map((seg, i) =>
          seg.hit ? (
            <mark
              key={i}
              className="bg-[var(--main-color)]/20 text-[var(--main-color)] font-bold rounded px-0.5"
            >
              {seg.text}
            </mark>
          ) : (
            <React.Fragment key={i}>{seg.text}</React.Fragment>
          )
        )}
        &quot;
      </p>
      {translation && <p className="text-xs text-[var(--sub-color)]">{translation}</p>}
    </div>
  );
}
