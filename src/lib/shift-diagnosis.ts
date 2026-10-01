// TM-3 slip diagnosis: map an incorrect attempt back to the sound-shift law the
// learner violated, so the error sheet can say WHY and not just WHERE (guidebook §1.9).
// Detection mechanic: apply the family's letter law to the attempt (the English-side
// letter becomes the German-side output) — if that transformed attempt is within a
// small edit distance of the target, the attempt is the English-side spelling of the
// target and the family's message fires. Authored per-exercise diagnoses always win
// (handled by the caller). A single-char Levenshtein typo grades `almost` upstream and
// never reaches this path.

import { getLevenshteinDistance } from "./letter-diff";
import { GERMAN_DIAGNOSIS, type DiagnosisRow } from "@/data/shift-diagnosis-table";
import { compendium } from "@/data/compendium";
import type { ExerciseDiagnosis } from "./types";

export type DiagnosisTable = Record<string, DiagnosisRow>;
export type Diagnosis = ExerciseDiagnosis;

const LENGTH_DIFF_GUARD = 10;

const stripTrailingPunctuation = (s: string) => s.trim().replace(/[.,!?;:]+$/, "");
const lowercase = (s: string) => stripTrailingPunctuation(s).toLowerCase();

interface LetterLaw {
  family: string;
  from: string;
  to: string[];
  tolerance: number;
}

// Digraph laws before single letters (th before t, gh before g, sh before s) so the
// more specific reading wins.
const LETTER_LAWS: LetterLaw[] = [
  { family: "th_to_d", from: "th", to: ["d"], tolerance: 1 },
  { family: "y_gh_to_g_ch", from: "gh", to: ["ch"], tolerance: 1 },
  { family: "sch_spelling", from: "s", to: ["sch"], tolerance: 1 },
  { family: "p_to_pf_f", from: "p", to: ["pf", "ff", "f"], tolerance: 1 },
  { family: "t_to_s_ss_z", from: "t", to: ["ss", "s", "ß", "z"], tolerance: 1 },
  { family: "k_to_ch", from: "k", to: ["ch"], tolerance: 1 },
  { family: "d_to_t", from: "d", to: ["t"], tolerance: 1 },
  { family: "v_to_b", from: "v", to: ["b"], tolerance: 1 },
  { family: "v_to_b", from: "f", to: ["b"], tolerance: 1 },
  { family: "y_gh_to_g_ch", from: "y", to: ["g"], tolerance: 1 },
];

const VOWELS = /[aeiouäöü]/g;

function diagnoseAblaut(target: string, attempt: string, table: DiagnosisTable): Diagnosis | null {
  const targetSkeleton = target.replace(VOWELS, "");
  const attemptSkeleton = attempt.replace(VOWELS, "");
  if (!targetSkeleton || targetSkeleton !== attemptSkeleton) return null;
  const targetVowels = target.match(VOWELS)?.join("") ?? "";
  const attemptVowels = attempt.match(VOWELS)?.join("") ?? "";
  if (targetVowels === attemptVowels) return null;
  return table.strong_verbs_ablaut ?? null;
}

function diagnoseIeren(target: string, attempt: string, table: DiagnosisTable): Diagnosis | null {
  if (!target.endsWith("ieren") || attempt.endsWith("ieren")) return null;
  if (getLevenshteinDistance(attempt, target) > 3) return null;
  return table.latin_ieren ?? null;
}

/**
 * Diagnose an incorrect attempt against its target. Returns null when no shift law
 * explains the slip (the generic error sheet is shown, as today). `shiftHint` is
 * accepted for API completeness with the plan; authored per-exercise diagnoses are
 * resolved by the caller and take precedence over everything computed here.
 */
export function diagnoseAttempt(
  target: string,
  attempt: string,
  _shiftHint?: string,
  table: DiagnosisTable = GERMAN_DIAGNOSIS
): Diagnosis | null {
  const t = lowercase(target);
  const a = lowercase(attempt);
  if (!t || !a || t === a) return null;
  if (Math.abs(t.length - a.length) > LENGTH_DIFF_GUARD) return null;

  for (const law of LETTER_LAWS) {
    if (!a.includes(law.from)) continue;
    for (const to of law.to) {
      const transformed = a.split(law.from).join(to);
      if (getLevenshteinDistance(transformed, t) <= law.tolerance) {
        return table[law.family] ?? null;
      }
    }
  }

  return diagnoseIeren(t, a, table) ?? diagnoseAblaut(t, a, table);
}

/**
 * TM-3 affirmation: the authored process-affirmation, or the auto-fallback
 * "{family name} again — you're starting to hear it everywhere." when the exercise
 * carries a shift_hint. Undefined when neither exists.
 */
export function affirmationFor(affirmation: string | undefined, shiftHint: string | undefined): string | undefined {
  if (affirmation) return affirmation;
  if (!shiftHint) return undefined;
  return `${resolveShiftFamilyName(shiftHint)} again — you're starting to hear it everywhere.`;
}

const FAMILY_SYMBOLS: { id: string; name: string; symbol: string }[] = Object.values(compendium.shifts).map((s) => ({
  id: s.id,
  name: s.name,
  symbol: s.symbol,
}));

/**
 * Resolve a free-text shift_hint ("P → F", "TH → D") to the Atlas family display name
 * ("The Labial Shift (P → PF / F)"). Matches the full symbol, then the left-hand side
 * of the arrow. Falls back to the hint text itself for non-family hints
 * ("The 'Him-Case'", "du -st (thou -st)").
 */
export function resolveShiftFamilyName(shiftHint: string): string {
  const hint = shiftHint.trim();
  const hintLhs = hint.split("→")[0]?.trim().toUpperCase();
  let lhsMatch: string | null = null;
  for (const family of FAMILY_SYMBOLS) {
    if (family.symbol.toUpperCase() === hint.toUpperCase()) return family.name;
    if (hintLhs && family.symbol.split("→")[0]?.trim().toUpperCase() === hintLhs) lhsMatch = family.name;
  }
  return lhsMatch ?? hint;
}
