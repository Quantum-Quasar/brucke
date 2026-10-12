import { describe, it, expect } from "vitest";
import { highlightWord, clozeSentence } from "../lib/sentence";
import data from "../data/compendium.json";

const hits = (s: string, w: string) => highlightWord(s, w).filter((x) => x.hit).map((x) => x.text);

describe("sentence highlighting", () => {
  it("finds exact words, inflections, plurals and umlauts", () => {
    expect(hits("Mein Arm tut weh.", "Arm")).toEqual(["Arm"]);
    expect(hits("Im Winter trage ich warme Handschuhe.", "der Handschuh")).toEqual(["Handschuhe"]);
    expect(hits("Der Kuchen hat Nüsse und Schokolade.", "Nuss")).toEqual(["Nüsse"]);
    expect(hits("Wie ist deine Telefonnummer?", "Nummer")).toEqual(["Telefonnummer"]);
  });
  it("highlights both parts of a separable verb", () => {
    expect(hits("Ich stehe früh auf.", "aufstehen")).toEqual(["stehe", "auf"]);
  });
  it("returns one plain segment when nothing matches", () => {
    expect(highlightWord("Es tut mir leid.", "tun")).toEqual([{ text: "Es tut mir leid.", hit: false }]);
  });
  it("builds a cloze and reassembles the original text otherwise", () => {
    expect(clozeSentence("Mein Arm tut weh.", "Arm")).toBe("Mein ____ tut weh.");
    expect(clozeSentence("Es tut mir leid.", "tun")).toBeNull();
    const s = "Ich stehe früh auf.";
    expect(highlightWord(s, "aufstehen").map((x) => x.text).join("")).toBe(s);
  });
  it("locates the word in the vast majority of authored sentences", () => {
    const words = Object.values(data.words) as Array<{ target_word: string; context_phrase: string }>;
    const found = words.filter((w) => highlightWord(w.context_phrase, w.target_word).some((s) => s.hit));
    expect(found.length / words.length).toBeGreaterThan(0.97);
  });
  it("every compound and false friend has a real example sentence with a translation", () => {
    for (const c of [...data.compounds, ...data.falseFriends]) {
      expect(c.example_sentence, c.id).toBeTruthy();
      expect(c.example_translation, c.id).toBeTruthy();
      expect(c.example_sentence!.split(/\s+/).length, c.id).toBeGreaterThanOrEqual(3);
    }
  });
});
