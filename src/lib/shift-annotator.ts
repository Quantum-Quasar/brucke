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

const alignCache = new Map<string, AnnotatedShiftPair>();

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
      // Build English segments
      const englishSegments: TextSegment[] = [];
      if (enIdx > 0) {
        englishSegments.push({ text: english.slice(0, enIdx), isChanged: false });
      }
      englishSegments.push({ text: english.slice(enIdx, enIdx + rule.en.length), isChanged: true });
      if (enIdx + rule.en.length < english.length) {
        englishSegments.push({ text: english.slice(enIdx + rule.en.length), isChanged: false });
      }

      // Build German segments
      const germanSegments: TextSegment[] = [];
      if (deIdx > 0) {
        germanSegments.push({ text: german.slice(0, deIdx), isChanged: false });
      }
      germanSegments.push({ text: german.slice(deIdx, deIdx + rule.de.length), isChanged: true });
      if (deIdx + rule.de.length < german.length) {
        germanSegments.push({ text: german.slice(deIdx + rule.de.length), isChanged: false });
      }

      const result: AnnotatedShiftPair = {
        englishSegments,
        germanSegments,
        shiftRule: fallbackRule || rule.label,
      };
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
  alignCache.set(cacheKey, fallbackResult);
  return fallbackResult;
}
