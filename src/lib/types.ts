export type Gender = "der" | "die" | "das";

export type MasteryState = "unexplored" | "explored" | "encountered" | "mastered";

export type ReviewMode = "flashcard" | "mcq" | "tiles" | "typing";

export interface WordEntity {
  id: string;
  target_word: string;
  english_cognate: string;
  english_meaning: string;
  gender: Gender | null;
  ipa: string;
  sound_shift_ids: string[];
  shift_rule: string;
  context_phrase: string;
  context_translation: string;
  etymology_derivation: string;
  lesson_index?: number;
}

export interface ShiftFamily {
  id: string;
  name: string;
  symbol: string;
  phonetic_rule: string;
  historical_linguistics: string;
  philological_note: string;
  literature_source: string;
  word_ids: string[];
}

export interface CompoundCalque {
  id: string;
  compound: string;
  gender: Gender | null;
  literal_morphemes: string;
  real_meaning: string;
  english_counterpart: string;
  lore: string;
}

export interface FalseFriend {
  id: string;
  german_word: string;
  looks_like: string;
  actual_meaning: string;
  trap_note: string;
}

export interface DailyInsight {
  day: number;
  german_expression: string;
  english_meaning: string;
  cultural_etymology: string;
  takeaway_principle: string;
}

export interface SRSCard {
  word_id: string;
  interval: number; // days
  repetitions: number;
  ease_factor: number; // default 2.5
  due_date: string; // ISO date
  lapses: number;
  last_reviewed: string | null;
}

export type ExerciseType =
  | "morpheme_tiles"
  | "matching_pairs"
  | "shift_select"
  | "syntax_builder"
  | "derive"
  | "reverse_cognate";

export interface MatchingPairItem {
  id: string;
  english: string;
  german: string;
}

export interface VocabHint {
  word: string;
  translation: string;
  note?: string;
}

export interface ExerciseItem {
  id: string;
  type: ExerciseType;
  prompt: string;
  english_hint?: string;
  shift_hint?: string;
  target_answer: string;
  meaning?: string;
  vocab_hints?: VocabHint[];
  options?: string[]; // For shift_select or multiple choice
  tile_options?: string[]; // For morpheme_tiles
  target_tiles?: string[]; // For morpheme_tiles assembly
  matching_pairs?: MatchingPairItem[]; // For matching_pairs cards
  word_bank?: string[]; // For syntax_builder tiles
  explanation?: string;
}

export interface LessonSection {
  title: string;
  content: string;
  footnotes?: Array<{ marker: string; title: string; content: string }>;
  linguist_note?: string;
}

export interface Lesson {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  phase: number;
  shift_categories: string[];
  word_ids: string[];
  hook: LessonSection;
  pattern: LessonSection;
  table_word_ids: string[];
  exercises: ExerciseItem[];
  summary: {
    takeaway: string;
    curiosity_teaser: string;
  };
}

export interface CompendiumData {
  words: Record<string, WordEntity>;
  wordList: WordEntity[];
  shifts: Record<string, ShiftFamily>;
  compounds: CompoundCalque[];
  falseFriends: FalseFriend[];
  dailyInsights: DailyInsight[];
}
