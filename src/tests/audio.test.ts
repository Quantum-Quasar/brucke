import { describe, it, expect } from "vitest";
import { playGermanAudio } from "@/lib/audio";

describe("Native Speech Synthesis Audio Engine", () => {
  it("safely handles server-side or non-browser environments without crashing", () => {
    // In node/test environment, window or speechSynthesis might not be fully featured
    const result = playGermanAudio("Wasser");
    expect(typeof result).toBe("boolean");
  });

  it("handles empty or whitespace strings gracefully", () => {
    const result = playGermanAudio("");
    expect(result).toBe(false);
  });
});
