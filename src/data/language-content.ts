// ponytail: per-language content registry. Only languages with authored
// curriculum are "available"; everything else gets an empty bundle so pages
// can render graceful coming-soon states.
//
// German content stays in its existing modules (compendium.ts, curriculum.ts,
// lessons.ts, phonetics.ts, insights.json) — this file just scopes it behind
// the active language id. Adding content for a new language means authoring a
// bundle here and flipping its status to "available" in languages.ts.

import { compendium as germanCompendium } from "./compendium";
import { TOPICS, TRAIL_BRANCHES, TRAIL_GATES, TOTAL_TOPICS } from "./curriculum";
import { LESSONS as GERMAN_LESSONS } from "./lessons";
import germanInsights from "./insights.json";
import type { CompendiumData, DailyInsight, Lesson } from "@/lib/types";
import type { LessonShell, TrailBranch, TrailGate, TopicCluster } from "@/lib/types";
import { DEFAULT_LANGUAGE_ID } from "./languages";

/** A compendium-shaped bundle with nothing in it (for coming-soon languages). */
export const EMPTY_COMPENDIUM: CompendiumData = {
  words: {},
  wordList: [],
  shifts: {},
  compounds: [],
  falseFriends: [],
  dailyInsights: [],
};

export interface LanguageContent {
  compendium: CompendiumData | null;
  topics: TopicCluster[];
  trailBranches: TrailBranch[];
  trailGates: TrailGate[];
  totalTopics: number;
  lessons: Lesson[];
  insights: DailyInsight[];
}

const EMPTY_CONTENT: LanguageContent = {
  compendium: null,
  topics: [],
  trailBranches: [],
  trailGates: [],
  totalTopics: 0,
  lessons: [],
  insights: [],
};

const GERMAN_CONTENT: LanguageContent = {
  compendium: germanCompendium,
  topics: TOPICS,
  trailBranches: TRAIL_BRANCHES,
  trailGates: TRAIL_GATES,
  totalTopics: TOTAL_TOPICS,
  lessons: GERMAN_LESSONS,
  insights: germanInsights as DailyInsight[],
};

const CONTENT_MAP: Record<string, LanguageContent> = {
  de: GERMAN_CONTENT,
};

/** Content bundle for a language id — empty bundle when nothing is authored yet. */
export function getLanguageContent(languageId: string): LanguageContent {
  return CONTENT_MAP[languageId] ?? EMPTY_CONTENT;
}

/** Total vocabulary words across the language's compendium (0 when unavailable). */
export function getTotalWordCount(languageId: string): number {
  const content = getLanguageContent(languageId);
  if (!content.compendium) return 0;
  return Object.keys(content.compendium.words).length;
}

/** Convenience for the default (German) content, for German-specific tooling. */
export const DEFAULT_CONTENT: LanguageContent = getLanguageContent(DEFAULT_LANGUAGE_ID);
