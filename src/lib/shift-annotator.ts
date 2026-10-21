// ponytail: direct consonant & suffix shift letter alignment without heavy diff dependencies

export interface TextSegment {
  text: string;
  isChanged: boolean;
}

export interface AnnotatedShiftPair {
  englishSegments: TextSegment[];
  germanSegments: TextSegment[];
  shiftRule: string;
}

// Known consonant and suffix replacement rules across German, French, and Spanish
const SHIFT_RULES_PATTERNS = [
  // German High German Consonant Shift patterns
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
  // Spanish Romance & Castilian Shift patterns
  { en: "tion", de: "ción", label: "-TION → -CIÓN" },
  { en: "ty", de: "dad", label: "-TY → -DAD" },
  { en: "ty", de: "tad", label: "-TY → -TAD" },
  { en: "ous", de: "oso", label: "-OUS → -OSO" },
  { en: "ct", de: "ch", label: "-CT- → -CH-" },
  { en: "pl", de: "ll", label: "PL → LL" },
  { en: "cl", de: "ll", label: "CL → LL" },
  { en: "fl", de: "ll", label: "FL → LL" },
  { en: "f", de: "h", label: "F → H" },
  { en: "li", de: "j", label: "LI → J" },
  // French Norman & Francien Shift patterns
  { en: "ty", de: "ité", label: "-TY → -ITÉ" },
  { en: "ty", de: "té", label: "-TY → -TÉ" },
  { en: "or", de: "eur", label: "-OR → -EUR" },
  { en: "our", de: "eur", label: "-OUR → -EUR" },
  { en: "ous", de: "eux", label: "-OUS → -EUX" },
  { en: "st", de: "êt", label: "ST → ÊT" },
  { en: "st", de: "ôt", label: "ST → ÔT" },
  { en: "st", de: "ît", label: "ST → ÎT" },
  { en: "st", de: "ât", label: "ST → ÂT" },
  { en: "w", de: "gu", label: "W → GU" },
  { en: "ca", de: "cha", label: "CA → CHA" },
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
  const cacheKey = JSON.stringify([english, german, fallbackRule ?? ""]);
  const cached = alignCache.get(cacheKey);
  if (cached) return cached;

  const enLower = english.toLowerCase();
  const deLower = german.toLowerCase();

  const rules = fallbackRule
    ? [
        ...SHIFT_RULES_PATTERNS.filter((r) => r.label.toLowerCase() === fallbackRule.toLowerCase() || fallbackRule.toLowerCase().includes(r.label.toLowerCase())),
        ...SHIFT_RULES_PATTERNS.filter((r) => r.label.toLowerCase() !== fallbackRule.toLowerCase() && !fallbackRule.toLowerCase().includes(r.label.toLowerCase())),
      ]
    : SHIFT_RULES_PATTERNS;

  for (const rule of rules) {
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
