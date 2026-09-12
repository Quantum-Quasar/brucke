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

  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

export type AnswerAccuracy = "exact" | "almost" | "incorrect";

export interface EvaluationResult {
  accuracy: AnswerAccuracy;
  warningNote?: string;
  reason?: "case" | "umlaut" | "typo";
}

export function evaluateAnswerAccuracy(userInput: string, expected: string): EvaluationResult {
  const user = userInput.trim();
  const target = expected.trim();

  // 1. Exact match -> Spot on! (Green)
  if (user === target) {
    return { accuracy: "exact" };
  }

  const normalizeUmlauts = (s: string) =>
    s.replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "ss");

  const userLower = user.toLowerCase();
  const targetLower = target.toLowerCase();

  // 2. Case difference (e.g. German noun not capitalized) -> Yellow
  if (userLower === targetLower) {
    return {
      accuracy: "almost",
      reason: "case",
      warningNote: `Almost right! Note that German nouns are capitalized: "${target}"`,
    };
  }

  // 3. Umlaut difference (e.g. a instead of ä, or ss instead of ß) -> Yellow
  if (normalizeUmlauts(userLower) === normalizeUmlauts(targetLower)) {
    return {
      accuracy: "almost",
      reason: "umlaut",
      warningNote: `Almost right! Note that standard German spelling uses umlauts: "${target}"`,
    };
  }

  // 4. Minor single-character typo for words with length >= 4 -> Yellow
  if (target.length >= 4 && getLevenshteinDistance(userLower, targetLower) === 1) {
    return {
      accuracy: "almost",
      reason: "typo",
      warningNote: `Almost right! Watch out for minor typos: "${target}" (you typed: "${user}")`,
    };
  }

  // 5. Otherwise incorrect -> Red
  return { accuracy: "incorrect" };
}
