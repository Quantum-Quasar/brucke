import { describe, it, expect } from "vitest";
import { diagnoseAttempt, affirmationFor, resolveShiftFamilyName } from "../lib/shift-diagnosis";
import { whisperCuesForLesson, POSTURE_CUES } from "../data/posture-cues";

describe("TM-3 shift diagnosis: name the slip, not just the diff", () => {
  it("fires the labial-shift message when the English P survived", () => {
    const d = diagnoseAttempt("hoffen", "hopen");
    expect(d).not.toBeNull();
    expect(d!.slip).toBe("the English P survived");
    expect(d!.cue).toContain("hoffen");
  });

  it("fires the sibilant-shift message for a kept English T (Wasser vs watter)", () => {
    const d = diagnoseAttempt("Wasser", "watter");
    expect(d).not.toBeNull();
    expect(d!.slip).toBe("the English T survived");
  });

  it("fires the stop-shift message for a kept English D (Tag vs dag)", () => {
    const d = diagnoseAttempt("Tag", "dag");
    expect(d).not.toBeNull();
    expect(d!.slip).toBe("the English D survived");
  });

  it("fires the velar-shift message for a kept English K (machen vs maken)", () => {
    const d = diagnoseAttempt("machen", "maken");
    expect(d).not.toBeNull();
    expect(d!.slip).toBe("the English K survived");
  });

  it("fires the dental-shift message when TH survived (drei vs threi)", () => {
    const d = diagnoseAttempt("drei", "threi");
    expect(d).not.toBeNull();
    expect(d!.slip).toBe("the English TH survived");
  });

  it("fires the palatal/guttural message for y and gh slips", () => {
    expect(diagnoseAttempt("sagen", "sayen")?.slip).toBe("the ghost letter stayed silent");
    expect(diagnoseAttempt("Nacht", "naght")?.slip).toBe("the ghost letter stayed silent");
  });

  it("fires the ablaut message when the vowel melody was flattened (käme vs kam)", () => {
    const d = diagnoseAttempt("käme", "kam");
    expect(d).not.toBeNull();
    expect(d!.slip).toBe("the vowel melody was flattened");
  });

  it("fires the -ieren message when the Romance stamp was dropped", () => {
    const d = diagnoseAttempt("reparieren", "repariren");
    expect(d).not.toBeNull();
    expect(d!.slip).toBe("the -ieren stamp was dropped");
  });

  it("fires the sch-spelling message for the bare-S slip (schlafen vs slafen)", () => {
    const d = diagnoseAttempt("schlafen", "slafen");
    expect(d).not.toBeNull();
    expect(d!.cue).toContain("schlafen");
  });

  it("returns null for unrelated misspellings and for the exact answer", () => {
    expect(diagnoseAttempt("Haus", "Mauss")).toBeNull();
    expect(diagnoseAttempt("Haus", "Häuser")).toBeNull();
    expect(diagnoseAttempt("Wasser", "Wasser")).toBeNull();
    expect(diagnoseAttempt("", "x")).toBeNull();
  });
});

describe("TM-3 process affirmations", () => {
  it("authored affirmation wins", () => {
    expect(affirmationFor("You kept the bracket closed.", "TH → D")).toBe(
      "You kept the bracket closed."
    );
  });

  it("fallback restates the Atlas family when a shift_hint is present", () => {
    expect(affirmationFor(undefined, "TH → D")).toBe(
      "The Dental Shift (TH → D) again — you're starting to hear it everywhere."
    );
    expect(affirmationFor(undefined, "P → F")).toBe(
      "The Labial Shift (P → PF / F) again — you're starting to hear it everywhere."
    );
  });

  it("non-family hints are echoed, and nothing fires without a hint", () => {
    expect(affirmationFor(undefined, "The 'Him-Case'")).toContain("The 'Him-Case' again");
    expect(affirmationFor(undefined, undefined)).toBeUndefined();
  });
});

describe("shift_hint → Atlas family resolution", () => {
  it("matches full symbols and left-hand sides, falling back to the hint", () => {
    expect(resolveShiftFamilyName("K → CH")).toBe("The Velar Shift (K → CH)");
    expect(resolveShiftFamilyName("T → SS")).toBe("The Sibilant Shift (T → S / SS / Z)");
    expect(resolveShiftFamilyName("du -st (thou -st)")).toBe("du -st (thou -st)");
  });
});

describe("TM-4b whisper-cues: sparse, deterministic, never repeated", () => {
  it("produces the same plan for the same lesson", () => {
    const types = ["matching_pairs", "shift_select", "derive", "syntax_builder", "transcribe"] as const;
    const a = whisperCuesForLesson(7, [...types], true);
    const b = whisperCuesForLesson(7, [...types], true);
    expect(a).toEqual(b);
  });

  it("renders at most twice per lesson, only before e1 and e4", () => {
    const types = ["matching_pairs", "shift_select", "derive", "syntax_builder", "transcribe"] as const;
    const plan = whisperCuesForLesson(12, [...types], true);
    const positions = Object.keys(plan).map(Number);
    expect(positions.length).toBeLessThanOrEqual(2);
    positions.forEach((p) => {
      expect([0, 3]).toContain(p);
    });
    const texts = Object.values(plan);
    expect(new Set(texts).size).toBe(texts.length);
  });

  it("never repeats a line even when both slots share one small pool", () => {
    const types = ["derive", "shift_select", "matching_pairs", "derive", "transcribe"] as const;
    for (let lessonId = 1; lessonId <= 60; lessonId++) {
      const plan = whisperCuesForLesson(lessonId, [...types], true);
      const texts = Object.values(plan);
      expect(new Set(texts).size).toBe(texts.length);
      texts.forEach((t) => expect(t.length).toBeGreaterThan(0));
    }
  });

  it("is silent when disabled and falls back to the default pool for unknown types", () => {
    expect(whisperCuesForLesson(3, ["derive", "shift_select", "matching_pairs", "derive", "transcribe"], false)).toEqual({});
    const types = ["morpheme_tiles", "shift_select", "matching_pairs", "morpheme_tiles", "syntax_builder"] as const;
    const plan = whisperCuesForLesson(3, [...types], true);
    Object.values(plan).forEach((t) => {
      expect([...POSTURE_CUES.default, ...POSTURE_CUES.syntax_builder, ...POSTURE_CUES.matching_pairs]).toContain(t);
    });
  });
});
