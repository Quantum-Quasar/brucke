import { describe, it, expect } from "vitest";
import { lemmatizeEnglish } from "../lib/lemmatizer";

describe("English Lemmatizer", () => {
  it("strips leading articles and infinitive markers", () => {
    expect(lemmatizeEnglish("to drink")).toBe("drink");
    expect(lemmatizeEnglish("the water")).toBe("water");
    expect(lemmatizeEnglish("a ship")).toBe("ship");
    expect(lemmatizeEnglish("an apple")).toBe("apple");
  });

  it("normalizes irregular strong verbs to infinitive lemmas", () => {
    expect(lemmatizeEnglish("drank")).toBe("drink");
    expect(lemmatizeEnglish("thought")).toBe("think");
    expect(lemmatizeEnglish("broke")).toBe("break");
    expect(lemmatizeEnglish("sang")).toBe("sing");
    expect(lemmatizeEnglish("swam")).toBe("swim");
    expect(lemmatizeEnglish("found")).toBe("find");
    expect(lemmatizeEnglish("slept")).toBe("sleep");
  });

  it("handles continuous participles (-ing)", () => {
    expect(lemmatizeEnglish("hoping")).toBe("hope");
    expect(lemmatizeEnglish("making")).toBe("make");
    expect(lemmatizeEnglish("drinking")).toBe("drink");
    expect(lemmatizeEnglish("sleeping")).toBe("sleep");
    expect(lemmatizeEnglish("swimming")).toBe("swim");
  });

  it("handles regular past tense (-ed)", () => {
    expect(lemmatizeEnglish("helped")).toBe("help");
    expect(lemmatizeEnglish("hoped")).toBe("hope");
    expect(lemmatizeEnglish("lived")).toBe("live");
  });

  it("handles plural nouns (-s / -es)", () => {
    expect(lemmatizeEnglish("waters")).toBe("water");
    expect(lemmatizeEnglish("apples")).toBe("apple");
    expect(lemmatizeEnglish("ships")).toBe("ship");
    expect(lemmatizeEnglish("brothers")).toBe("brother");
  });
});
