import { describe, it, expect } from "vitest";
import {
  computeLetterDiff,
  getLevenshteinDistance,
  evaluateAnswerAccuracy,
  evaluateBestOf,
} from "../lib/letter-diff";

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
    expect(getLevenshteinDistance("kitten", "sitting")).toBe(3);
    expect(getLevenshteinDistance("Wasser", "Wasser")).toBe(0);
    expect(getLevenshteinDistance("Wasser", "wassser")).toBe(2);
    expect(getLevenshteinDistance("wasser", "wassser")).toBe(1);
  });

  it("evaluates accuracy with three-tier feedback (exact, almost, incorrect)", () => {
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

  it("applies capitalization tolerance as exact match", () => {
    expect(evaluateAnswerAccuracy("wasser", "Wasser", { capitalizationTolerance: true })).toEqual({
      accuracy: "exact",
    });
    // without the option the same input stays almost/case
    expect(evaluateAnswerAccuracy("wasser", "Wasser", {}).accuracy).toBe("almost");
  });

  it("applies umlaut tolerance to case-matching inputs as exact match", () => {
    // all-caps input is not case-correct, even though umlauts are tolerated
    const capsResult = evaluateAnswerAccuracy("STRASSE", "Straße", { umlautTolerance: true });
    expect(capsResult.accuracy).toBe("almost");
    expect(capsResult.reason).toBe("case");
    // standard capitalized substitution is exact
    expect(evaluateAnswerAccuracy("Strasse", "Straße", { umlautTolerance: true })).toEqual({ accuracy: "exact" });
    // lowercase input of a capitalized noun: umlaut tolerated but capitalization error remains
    const lowerResult = evaluateAnswerAccuracy("strasse", "Straße", { umlautTolerance: true });
    expect(lowerResult.accuracy).toBe("almost");
    expect(lowerResult.reason).toBe("case");
    // digraph expansions (ae/oe/ue/ss) count as umlaut substitutions
    expect(evaluateAnswerAccuracy("Kaese", "Käse", { umlautTolerance: true, capitalizationTolerance: true })).toEqual({
      accuracy: "exact",
    });
    // without tolerance, the digraph input stays almost/umlaut
    expect(evaluateAnswerAccuracy("Kaese", "Käse").accuracy).toBe("almost");
  });

  it("guards against huge pasted input", () => {
    const long = "a".repeat(250);
    expect(evaluateAnswerAccuracy(long, "Wasser").accuracy).toBe("incorrect");
    expect(getLevenshteinDistance("a".repeat(40), "b".repeat(10))).toBe(30);
  });
});

describe("Sentence punctuation and tile readings", () => {
  const opts = { umlautTolerance: false, capitalizationTolerance: false };

  it("ignores commas inside a sentence — tiles can never produce them", () => {
    expect(
      evaluateAnswerAccuracy("Einen Moment bitte die Kanne ist heiß", "Einen Moment, bitte, die Kanne ist heiß", opts)
    ).toEqual({ accuracy: "exact" });
    expect(
      evaluateAnswerAccuracy("Die Abfahrt ist früh die Ankunft ist spät", "Die Abfahrt ist früh, die Ankunft ist spät", opts).accuracy
    ).toBe("exact");
  });

  it("still accepts the commas when the learner types them", () => {
    expect(evaluateAnswerAccuracy("Das Buch, das ich lese", "Das Buch, das ich lese", opts).accuracy).toBe("exact");
  });

  it("still catches real mistakes in a comma sentence, and quotes the target with its commas", () => {
    const r = evaluateAnswerAccuracy("das Buch das ich lese", "Das Buch, das ich lese", opts);
    expect(r.accuracy).toBe("almost");
    expect(r.warningNote).toContain("Das Buch, das ich lese");
  });

  it("reads 'das' + 'Wass' + 'er' as one assembled word", () => {
    expect(evaluateAnswerAccuracy("das Wass er", "das Wasser", opts).accuracy).not.toBe("exact");
    const best = evaluateBestOf(["das Wass er", "das Wasser"], "das Wasser", opts);
    expect(best.result.accuracy).toBe("exact");
    expect(best.answer).toBe("das Wasser");
  });

  it("keeps the first reading when no reading is better", () => {
    const best = evaluateBestOf(["ich lernt", "ich lernt"], "ich lerne", opts);
    expect(best.answer).toBe("ich lernt");
  });
});
