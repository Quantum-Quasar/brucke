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
