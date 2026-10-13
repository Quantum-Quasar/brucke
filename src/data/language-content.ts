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
import { frenchCompendium } from "./french/compendium-fr";
import { FR_TOPICS, FR_TRAIL_BRANCHES, FR_TRAIL_GATES, FR_TOTAL_TOPICS } from "./french/curriculum-fr";
import { FR_LESSONS } from "./french/lessons-fr";
import { FRENCH_INSIGHTS } from "./french/insights-fr";
import { spanishCompendium } from "./spanish/compendium-es";
import { ES_TOPICS, ES_TRAIL_BRANCHES, ES_TRAIL_GATES, ES_TOTAL_TOPICS } from "./spanish/curriculum-es";
import { ES_LESSONS } from "./spanish/lessons-es";
import { SPANISH_INSIGHTS } from "./spanish/insights-es";
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

const FRENCH_CONTENT: LanguageContent = {
  compendium: frenchCompendium,
  topics: FR_TOPICS,
  trailBranches: FR_TRAIL_BRANCHES,
  trailGates: FR_TRAIL_GATES,
  totalTopics: FR_TOTAL_TOPICS,
  lessons: FR_LESSONS,
  insights: FRENCH_INSIGHTS,
};

const SPANISH_CONTENT: LanguageContent = {
  compendium: spanishCompendium,
  topics: ES_TOPICS,
  trailBranches: ES_TRAIL_BRANCHES,
  trailGates: ES_TRAIL_GATES,
  totalTopics: ES_TOTAL_TOPICS,
  lessons: ES_LESSONS,
  insights: SPANISH_INSIGHTS,
};

const CONTENT_MAP: Record<string, LanguageContent> = {
  de: GERMAN_CONTENT,
  es: SPANISH_CONTENT,
  fr: FRENCH_CONTENT,
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

/**
 * Next authored spine core after the given node, in the active language's own
 * curriculum (null = caught up). Mirrors data/curriculum.ts's German helper:
 * core ids only, ordered by topic.
 */
export function getNextPlayableLessonIdFor(languageId: string, currentId: number): number | null {
  const content = getLanguageContent(languageId);
  for (const topic of content.topics) {
    if (topic.core.id > currentId && topic.id <= content.totalTopics && topic.core.authored) {
      return topic.core.id;
    }
  }
  return null;
}
