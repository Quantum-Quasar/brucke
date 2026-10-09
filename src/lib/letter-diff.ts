// ponytail: concise character-level diff comparing user input against expected target

export interface DiffChar {
  char: string;
  status: "correct" | "incorrect" | "missing";
}

export function computeLetterDiff(userInput: string, expected: string): {
  userChars: DiffChar[];
  expectedChars: DiffChar[];
  isMatch: boolean;
} {
  const user = userInput.trim();
  const target = expected.trim();

  if (user === target) {
    return {
      userChars: user.split("").map((c) => ({ char: c, status: "correct" })),
      expectedChars: target.split("").map((c) => ({ char: c, status: "correct" })),
      isMatch: true,
    };
  }

  // Character-by-character alignment
  const maxLen = Math.max(user.length, target.length);
  const userChars: DiffChar[] = [];
  const expectedChars: DiffChar[] = [];

  for (let i = 0; i < maxLen; i++) {
    const u = user[i];
    const t = target[i];

    if (u !== undefined && t !== undefined) {
      if (u === t) {
        userChars.push({ char: u, status: "correct" });
        expectedChars.push({ char: t, status: "correct" });
      } else {
        userChars.push({ char: u, status: "incorrect" });
        expectedChars.push({ char: t, status: "incorrect" });
      }
    } else if (u !== undefined && t === undefined) {
      // Extra characters in user input
      userChars.push({ char: u, status: "incorrect" });
    } else if (u === undefined && t !== undefined) {
      // Missing characters in user input
      expectedChars.push({ char: t, status: "missing" });
    }
  }

  return {
    userChars,
    expectedChars,
    isMatch: false,
  };
}

export function getLevenshteinDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  // ponytail: length difference upper bound guard
  const lenDiff = Math.abs(a.length - b.length);
  if (lenDiff > 20) return lenDiff;

  // ponytail: O(N) space using two rolling rows instead of full O(M*N) 2D matrix
  let prev = Array.from({ length: a.length + 1 }, (_, i) => i);
  let curr = new Array(a.length + 1);

  for (let i = 1; i <= b.length; i++) {
    curr[0] = i;
    const bChar = b.charAt(i - 1);
    for (let j = 1; j <= a.length; j++) {
      if (bChar === a.charAt(j - 1)) {
        curr[j] = prev[j - 1];
      } else {
        curr[j] = Math.min(
          prev[j - 1] + 1, // substitution
          curr[j - 1] + 1, // insertion
          prev[j] + 1      // deletion
        );
      }
    }
    const temp = prev;
    prev = curr;
    curr = temp;
  }
  return prev[a.length];
}

export type AnswerAccuracy = "exact" | "almost" | "incorrect";

export interface EvaluationResult {
  accuracy: AnswerAccuracy;
  warningNote?: string;
  reason?: "case" | "umlaut" | "typo" | "infinitive" | "article";
}

export interface EvaluationOptions {
  umlautTolerance?: boolean;
  capitalizationTolerance?: boolean;
}

const stripTrailingPunctuation = (s: string) => s.replace(/[.,!?;:]+$/, "").trim();

// Commas inside a sentence are punctuation, not spelling. Tile exercises cannot
// produce them (tiles drop trailing punctuation) and a learner who types a
// sentence without them has still said the German correctly, so they are
// ignored when comparing — the learner still sees the target with its commas.
const foldCommas = (s: string) =>
  stripTrailingPunctuation(s).replace(/\s*,\s*/g, " ").replace(/\s{2,}/g, " ").trim();

export function evaluateAnswerAccuracy(
  userInput: string,
  expected: string,
  options?: EvaluationOptions
): EvaluationResult {
  const result = evaluateFolded(foldCommas(userInput), foldCommas(expected), options);
  if (result.warningNote) {
    // keep the commas visible when we quote the target back to the learner
    const folded = foldCommas(expected);
    const shown = stripTrailingPunctuation(expected);
    if (folded !== shown) {
      return { ...result, warningNote: result.warningNote.split(`"${folded}"`).join(`"${shown}"`) };
    }
  }
  return result;
}

const ACCURACY_RANK: Record<AnswerAccuracy, number> = { exact: 2, almost: 1, incorrect: 0 };

/**
 * Grade several equivalent readings of the same answer and keep the best one.
 * Used by tile exercises, where a learner who builds "das" + "Wass" + "er" has
 * assembled one word, not four.
 */
export function evaluateBestOf(
  candidates: string[],
  expected: string,
  options?: EvaluationOptions
): { result: EvaluationResult; answer: string } {
  let best = { result: evaluateAnswerAccuracy(candidates[0] ?? "", expected, options), answer: candidates[0] ?? "" };
  for (const candidate of candidates.slice(1)) {
    const result = evaluateAnswerAccuracy(candidate, expected, options);
    if (ACCURACY_RANK[result.accuracy] > ACCURACY_RANK[best.result.accuracy]) {
      best = { result, answer: candidate };
    }
  }
  return best;
}

function evaluateFolded(
  user: string,
  target: string,
  options?: EvaluationOptions
): EvaluationResult {

  // ponytail: guard against huge pasted text
  if (Math.abs(user.length - target.length) > 10 || user.length > 200) {
    return { accuracy: "incorrect" };
  }

  // 1. Exact match -> Spot on! (Green)
  if (user === target) {
    return { accuracy: "exact" };
  }

  const userLower = user.toLowerCase();
  const targetLower = target.toLowerCase();

  // 2. Case difference (e.g. German noun not capitalized)
  if (userLower === targetLower) {
    if (options?.capitalizationTolerance) {
      return { accuracy: "exact" };
    }
    return {
      accuracy: "almost",
      reason: "case",
      warningNote: `Almost right! Note that German nouns are capitalized: "${target}"`,
    };
  }

  const normalizeUmlauts = (s: string) =>
    s.replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "ss");

  const normalizeDigraphs = (s: string) =>
    s.replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss");

  const matchesUmlauts =
    normalizeUmlauts(userLower) === normalizeUmlauts(targetLower) ||
    normalizeDigraphs(userLower) === normalizeDigraphs(targetLower) ||
    normalizeUmlauts(userLower.replace(/ae/g, "a").replace(/oe/g, "o").replace(/ue/g, "u")) ===
      normalizeUmlauts(targetLower.replace(/ae/g, "a").replace(/oe/g, "o").replace(/ue/g, "u"));

  // 3. Umlaut difference (e.g. a/ae instead of ä, or ss instead of ß)
  if (matchesUmlauts) {
    if (options?.umlautTolerance) {
      // If umlauts are tolerated, check if capitalization tolerance is also respected or if case matches
      // capitalization style must match (all-lower vs capitalized-first vs
      // other): "WASSER" must not count as case-correct just for containing caps
      const lettersOf = (s: string) => s.replace(/[^A-Za-zÄÖÜäöüß]/g, "");
      const caseStyle = (s: string) => {
        const l = lettersOf(s);
        if (l === l.toLowerCase()) return "lower";
        if (l[0] === l[0].toUpperCase() && l.slice(1) === l.slice(1).toLowerCase()) return "capitalized";
        return "other";
      };
      const caseMatches = caseStyle(user) === caseStyle(target);
      if (options.capitalizationTolerance || caseMatches) {
        return { accuracy: "exact" };
      }
      return {
        accuracy: "almost",
        reason: "case",
        warningNote: `Almost right! Note that German nouns are capitalized: "${target}"`,
      };
    }
    return {
      accuracy: "almost",
      reason: "umlaut",
      warningNote: `Almost right! Note that standard German spelling uses umlauts: "${target}"`,
    };
  }

  // 4. Missing verb infinitive ending (-en or -n, e.g. "trink" instead of "trinken") -> Yellow
  if (targetLower.endsWith("en")) {
    const stem = targetLower.slice(0, -2);
    if (
      userLower === stem ||
      normalizeUmlauts(userLower) === normalizeUmlauts(stem)
    ) {
      return {
        accuracy: "almost",
        reason: "infinitive",
        warningNote: `Almost right! German verbs use the infinitive ending "-en": "${target}" (you wrote the stem "${user}")`,
      };
    }
    const conjugatedE = targetLower.slice(0, -1); // e.g. "trinke" instead of "trinken"
    if (
      userLower === conjugatedE ||
      normalizeUmlauts(userLower) === normalizeUmlauts(conjugatedE)
    ) {
      return {
        accuracy: "almost",
        reason: "infinitive",
        warningNote: `Almost right! Note the infinitive ending is "-en": "${target}" (you wrote "${user}")`,
      };
    }
  } else if (targetLower.endsWith("n")) {
    const stem = targetLower.slice(0, -1);
    if (
      userLower === stem ||
      normalizeUmlauts(userLower) === normalizeUmlauts(stem)
    ) {
      return {
        accuracy: "almost",
        reason: "infinitive",
        warningNote: `Almost right! German verbs use the infinitive ending "-n": "${target}" (you wrote the stem "${user}")`,
      };
    }
  }

  // Also check if user typed infinitive when target was bare stem (e.g. "trinken" when target was "trink")
  if (userLower.endsWith("en") && userLower.slice(0, -2) === targetLower) {
    return {
      accuracy: "almost",
      reason: "infinitive",
      warningNote: `Almost right! The prompt called for the bare stem: "${target}"`,
    };
  }

  // 5. Gender article inclusion or omission (e.g. "Wasser" vs "das Wasser") -> Yellow
  const stripArticle = (s: string) => s.replace(/^(der|die|das|den|dem|des|ein|eine|einen|einem|einer|eines|kein|keine|keinen|keinem|keiner|keines)\s+/i, "").trim();
  const targetStripped = stripArticle(targetLower);
  const userStripped = stripArticle(userLower);

  if (userLower === targetStripped && userLower !== targetLower) {
    return {
      accuracy: "almost",
      reason: "article",
      warningNote: `Almost right! Remember the gender article: "${target}"`,
    };
  }
  if (userStripped === targetLower && userStripped !== userLower) {
    return {
      accuracy: "almost",
      reason: "article",
      warningNote: `Almost right! The prompt only required the word: "${target}"`,
    };
  }

  // 6. Minor single-character typo for words with length >= 4 -> Yellow
  if (target.length >= 4 && getLevenshteinDistance(userLower, targetLower) === 1) {
    return {
      accuracy: "almost",
      reason: "typo",
      warningNote: `Almost right! Watch out for minor typos: "${target}" (you typed: "${user}")`,
    };
  }

  // 7. Otherwise incorrect -> Red
  return { accuracy: "incorrect" };
}
