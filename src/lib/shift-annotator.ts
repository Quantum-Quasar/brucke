// ponytail: direct consonant shift letter alignment without heavy diff dependencies

export interface TextSegment {
  text: string;
  isChanged: boolean;
}

export interface AnnotatedShiftPair {
  englishSegments: TextSegment[];
  germanSegments: TextSegment[];
  shiftRule: string;
}

// Known consonant replacement rules for clean segmentation
const SHIFT_RULES_PATTERNS = [
  { en: "th", de: "d", label: "TH → D" },
  { en: "p", de: "pf", label: "P → PF" },
  { en: "p", de: "ff", label: "P → FF" },
  { en: "p", de: "f", label: "P → F" },
  { en: "t", de: "ss", label: "T → SS" },
  { en: "t", de: "s", label: "T → S" },
  { en: "t", de: "z", label: "T → Z" },
  { en: "t", de: "ß", label: "T → ß" },
  { en: "k", de: "ch", label: "K → CH" },
  { en: "c", de: "ch", label: "C → CH" },
  { en: "d", de: "t", label: "D → T" },
  { en: "v", de: "b", label: "V → B" },
  { en: "f", de: "b", label: "F → B" },
  { en: "y", de: "g", label: "Y → G" },
  { en: "gh", de: "ch", label: "GH → CH" },
];

const MAX_ALIGN_CACHE = 500;
const alignCache = new Map<string, AnnotatedShiftPair>();

// ponytail: inspectable cache bounds
export function getAlignCacheSize(): number {
  return alignCache.size;
}

function sliceSegments(word: string, idx: number, len: number): TextSegment[] {
  const segs: TextSegment[] = [];
  if (idx > 0) segs.push({ text: word.slice(0, idx), isChanged: false });
  segs.push({ text: word.slice(idx, idx + len), isChanged: true });
  if (idx + len < word.length) segs.push({ text: word.slice(idx + len), isChanged: false });
  return segs;
}

export function alignShiftPair(english: string, german: string, fallbackRule?: string): AnnotatedShiftPair {
  const cacheKey = `${english}|${german}|${fallbackRule || ""}`;
  const cached = alignCache.get(cacheKey);
  if (cached) return cached;

  const enLower = english.toLowerCase();
  const deLower = german.toLowerCase();

  for (const rule of SHIFT_RULES_PATTERNS) {
    const enIdx = enLower.indexOf(rule.en);
    const deIdx = deLower.indexOf(rule.de);

    if (enIdx !== -1 && deIdx !== -1) {
      const result: AnnotatedShiftPair = {
        englishSegments: sliceSegments(english, enIdx, rule.en.length),
        germanSegments: sliceSegments(german, deIdx, rule.de.length),
        shiftRule: fallbackRule || rule.label,
      };
      if (alignCache.size >= MAX_ALIGN_CACHE) {
        const oldestKey = alignCache.keys().next().value;
        if (oldestKey) alignCache.delete(oldestKey);
      }
      alignCache.set(cacheKey, result);
      return result;
    }
  }

  // Fallback: No obvious single consonant shift (e.g. direct cognate)
  const fallbackResult: AnnotatedShiftPair = {
    englishSegments: [{ text: english, isChanged: false }],
    germanSegments: [{ text: german, isChanged: false }],
    shiftRule: fallbackRule || "Cognate",
  };
  if (alignCache.size >= MAX_ALIGN_CACHE) {
    const oldestKey = alignCache.keys().next().value;
    if (oldestKey) alignCache.delete(oldestKey);
  }
  alignCache.set(cacheKey, fallbackResult);
  return fallbackResult;
}
