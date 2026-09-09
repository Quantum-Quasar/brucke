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

    const whitespaceResult = playGermanAudio("   ");
    expect(whitespaceResult).toBe(false);
  });

  it("configures utterance with de-DE locale and 0.92 rate when browser speech synthesis is present", () => {
    let capturedUtterance: any = null;
    let cancelCalled = false;
    let spoken = false;

    const mockVoices = [
      { name: "English Voice", lang: "en-US" },
      { name: "German Voice", lang: "de-DE" },
    ];

    (globalThis as any).window = {
      speechSynthesis: {
        cancel: () => {
          cancelCalled = true;
        },
        getVoices: () => mockVoices,
        speak: (utt: any) => {
          capturedUtterance = utt;
          spoken = true;
        },
        onvoiceschanged: null,
      },
    };
    (globalThis as any).SpeechSynthesisUtterance = function (text: string) {
      this.text = text;
      this.lang = "";
      this.rate = 1;
      this.pitch = 1;
      this.voice = null;
    };

    const res = playGermanAudio("[der] Wasser");
    expect(res).toBe(true);
    expect(cancelCalled).toBe(true);
    expect(spoken).toBe(true);
    expect(capturedUtterance).toBeDefined();
    expect(capturedUtterance.text).toBe("Wasser");
    expect(capturedUtterance.lang).toBe("de-DE");
    expect(capturedUtterance.rate).toBe(0.92);
    expect(capturedUtterance.voice?.lang).toBe("de-DE");

    delete (globalThis as any).window;
    delete (globalThis as any).SpeechSynthesisUtterance;
  });
});
