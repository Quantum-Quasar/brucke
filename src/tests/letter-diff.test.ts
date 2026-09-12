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

    // Infinitive stem checking (e.g. "trink" vs "trinken", "wander" vs "wandern")
    const stemResult = evaluateAnswerAccuracy("trink", "trinken");
    expect(stemResult.accuracy).toBe("almost");
    expect(stemResult.reason).toBe("infinitive");
    expect(stemResult.warningNote).toContain("infinitive ending \"-en\"");

    const conjugatedResult = evaluateAnswerAccuracy("trinke", "trinken");
    expect(conjugatedResult.accuracy).toBe("almost");
    expect(conjugatedResult.reason).toBe("infinitive");

    const nEndingResult = evaluateAnswerAccuracy("wander", "wandern");
    expect(nEndingResult.accuracy).toBe("almost");
    expect(nEndingResult.reason).toBe("infinitive");
    expect(nEndingResult.warningNote).toContain("infinitive ending \"-n\"");

    // Article omission / inclusion checking (e.g. "Wasser" vs "das Wasser")
    const articleResult = evaluateAnswerAccuracy("Wasser", "das Wasser");
    expect(articleResult.accuracy).toBe("almost");
    expect(articleResult.reason).toBe("article");
    expect(articleResult.warningNote).toContain("gender article");

    // Punctuation and full stop normalization (e.g. "Ich kann kommen." vs "Ich kann kommen")
    expect(evaluateAnswerAccuracy("Ich kann kommen", "Ich kann kommen.")).toEqual({ accuracy: "exact" });
    expect(evaluateAnswerAccuracy("Ich kann kommen.", "Ich kann kommen")).toEqual({ accuracy: "exact" });
    expect(evaluateAnswerAccuracy("Ein Glas Wasser bitte!", "Ein Glas Wasser bitte")).toEqual({ accuracy: "exact" });
  });
});
