export const TOTAL_COMPENDIUM_WORDS = 619;

export type Gender = "der" | "die" | "das";

export type MasteryState = "unexplored" | "explored" | "encountered" | "mastered";

export type ReviewMode = "flashcard" | "mcq" | "tiles" | "typing";

export type LessonSegment = "hook" | "pattern" | "table" | "practice" | "summary";

export interface LessonProgress {
  segment: LessonSegment;
  practiceIndex: number;
  completedSegments: LessonSegment[];
  /** true once any exercise was queued for retry this lesson — a purple star requires it to stay false */
  everQueued?: boolean;
}

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
  /** Thematic domain (family, colors, food, …) used by the Review Hub domain decks. */
  domain?: string;
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
  | "reverse_cognate"
  | "transcribe"
  | "literal_gloss";

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

/** TM-3: process affirmation shown on success; authored override for the common wrong answer. */
export interface ExerciseDiagnosis {
  slip: string;
  cue: string;
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
  options?: string[]; // For shift_select, literal_gloss, or multiple choice
  tile_options?: string[]; // For morpheme_tiles
  target_tiles?: string[]; // For morpheme_tiles assembly
  matching_pairs?: MatchingPairItem[]; // For matching_pairs cards
  word_bank?: string[]; // For syntax_builder / transcribe chips
  explanation?: string;
  /** TM-3: restates the process on a correct answer (≤ 140 chars), instead of "Spot on!". */
  affirmation?: string;
  /** TM-3: authored override for the common wrong answer on this exercise. */
  diagnosis?: ExerciseDiagnosis;
  // --- transcribe (TM-1): the thought the learner must render into German ---
  idea?: string;
  cues?: string[]; // 1–3 scaled prompts, ordered easy→late, revealed on demand or on failure
  // --- literal_gloss (TM-2): the German sentence and its natural English ---
  german?: string;
  natural?: string;
}

/**
 * TM-1 production drill: idea in, elements chosen, order decided, German out.
 * `word_bank` must contain every word of `target_answer` plus 1–3 plausible distractors —
 * a transcribe without distractors is a syntax_builder in disguise.
 */
export interface TranscribeExercise extends ExerciseItem {
  type: "transcribe";
  idea: string;
  cues: string[];
  word_bank: string[];
}

/**
 * TM-2 direct translation: pick the English rendering that is built the German way.
 * Exactly one option is the word-for-word one (`target_answer`); the rest are natural
 * or differently-wrong. The odd English is the lesson — never a model to produce.
 */
export interface LiteralGlossExercise extends ExerciseItem {
  type: "literal_gloss";
  german: string;
  natural: string;
  options: string[];
}

/** TM-5a: one deliberate, ungraded friction point at the end of a lesson's practice. */
export interface LessonTwist {
  prompt: string;
  target_answer: string;
  word_bank?: string[];
  explanation: string;
}

export interface Footnote {
  marker: string;
  title: string;
  content: string;
  /** TM-5b: a genuine tangent — cued as such so the learner knows it is not key material. */
  interest?: boolean;
}

export interface LessonSection {
  title: string;
  content: string;
  footnotes?: Footnote[];
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
  /** TM-5a: rendered after the last exercise, before the reinforcement queue. Ungraded, skippable. */
  twist?: LessonTwist;
  summary: {
    outcome: string;
    use_example: { german: string; english: string };
    takeaway: string;
    curiosity_teaser: string;
  };
}

// ---------------------------------------------------------------------------
// Baba-style Trail Map — curriculum shells & node graph
// ---------------------------------------------------------------------------

/** One shell lesson on the map. Hollow shells carry only a title + authoring plan. */
export interface LessonShell {
  /** Globally unique node id. Cores reuse the topic id (1–30); sprigs & branches use offset series. */
  id: number;
  title: string;
  /** One-line plan of what the future content should cover (for the content author). */
  plan: string;
  /** true when a fully authored Lesson exists for this shell in data/lessons.ts */
  authored?: boolean;
}

/** A topic = one cluster ("bunch") on the trail. The spine passes through every core. */
export interface TopicCluster {
  /** 1–30. Equals the core lesson id. */
  id: number;
  title: string;
  /** One-line description shown on the map signpost and in the node drawer. */
  blurb: string;
  /** The main-line lesson of the topic (id === topic id). */
  core: LessonShell;
  /** Optional side lessons of the same topic; all attach to the core (individually skippable). */
  sprigs: LessonShell[];
}

/** A support-material branch: a mini path of 1–3 optional lessons hanging off an attach node. */
export interface TrailBranch {
  /** 5000-series unique id of the branch (lessons get branchId+1, +2, …). */
  id: number;
  /** Node id the branch hangs from (usually a core). */
  attach: number;
  title: string;
  blurb: string;
  /** Ordered mini path; lesson i unlocks the next. */
  lessons: LessonShell[];
}

/** Golden star for a completed lesson; purple for a flawless first-try run (retry queue untouched). */
export type LessonStar = "gold" | "purple";

/**
 * A star gate between topic families. It sits after `afterTopic`'s core and blocks
 * every later topic until `requiredStars` have been earned within the stretch the
 * gate closes (topics after the previous gate up to and including `afterTopic`).
 * Thresholds sit deliberately between the minimum (all cores) and the maximum
 * (every lesson in the stretch) so learners must also clear side lessons.
 */
export interface TrailGate {
  id: number;
  afterTopic: number;
  requiredStars: number;
  title: string;
  /** why the gate sits exactly here — shown in the gate drawer */
  why: string;
}

export interface CompendiumData {
  words: Record<string, WordEntity>;
  wordList: WordEntity[];
  shifts: Record<string, ShiftFamily>;
  compounds: CompoundCalque[];
  falseFriends: FalseFriend[];
  dailyInsights: DailyInsight[];
}
