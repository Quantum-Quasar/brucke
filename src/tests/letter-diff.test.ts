import { describe, it, expect } from "vitest";
import { computeLetterDiff } from "../lib/letter-diff";

describe("Letter-by-Letter Diff", () => {
  it("marks exact matches as all correct", () => {
    const diff = computeLetterDiff("hoffen", "hoffen");
    expect(diff.isMatch).toBe(true);
    expect(diff.userChars.every((c) => c.status === "correct")).toBe(true);
  });

  it("identifies specific incorrect characters (e.g. hoppen vs hoffen)", () => {
    const diff = computeLetterDiff("hoppen", "hoffen");
    expect(diff.isMatch).toBe(false);
    expect(diff.userChars[0].status).toBe("correct"); // h
    expect(diff.userChars[1].status).toBe("correct"); // o
    expect(diff.userChars[2].status).toBe("incorrect"); // p instead of f
    expect(diff.userChars[3].status).toBe("incorrect"); // p instead of f
    expect(diff.userChars[4].status).toBe("correct"); // e
    expect(diff.userChars[5].status).toBe("correct"); // n
  });

  it("handles missing characters", () => {
    const diff = computeLetterDiff("hof", "hoffen");
    expect(diff.isMatch).toBe(false);
    expect(diff.expectedChars.some((c) => c.status === "missing")).toBe(true);
  });

  it("calculates Levenshtein distance accurately", () => {
    const { getLevenshteinDistance } = require("../lib/letter-diff");
    expect(getLevenshteinDistance("kitten", "sitting")).toBe(3);
    expect(getLevenshteinDistance("Wasser", "Wasser")).toBe(0);
    expect(getLevenshteinDistance("Wasser", "wassser")).toBe(2);
    expect(getLevenshteinDistance("wasser", "wassser")).toBe(1);
  });

  it("evaluates accuracy with three-tier feedback (exact, almost, incorrect)", () => {
    const { evaluateAnswerAccuracy } = require("../lib/letter-diff");
    expect(evaluateAnswerAccuracy("Wasser", "Wasser")).toEqual({ accuracy: "exact" });
    expect(evaluateAnswerAccuracy("wasser", "Wasser").accuracy).toBe("almost");
    expect(evaluateAnswerAccuracy("wasser", "Wasser").reason).toBe("case");
    expect(evaluateAnswerAccuracy("Apfel", "Äpfel").accuracy).toBe("almost");
    expect(evaluateAnswerAccuracy("Apfel", "Äpfel").reason).toBe("umlaut");
    expect(evaluateAnswerAccuracy("waser", "Wasser").accuracy).toBe("almost");
    expect(evaluateAnswerAccuracy("waser", "Wasser").reason).toBe("typo");
    expect(evaluateAnswerAccuracy("water", "Wasser").accuracy).toBe("incorrect");
  });
});
