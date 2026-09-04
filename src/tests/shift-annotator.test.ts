import { describe, it, expect } from "vitest";
import { alignShiftPair } from "../lib/shift-annotator";

describe("Shift Annotator Letter Alignment", () => {
  it("aligns P → FF in hope → hoffen", () => {
    const pair = alignShiftPair("hope", "hoffen");
    expect(pair.englishSegments.find((s) => s.isChanged)?.text).toBe("p");
    expect(pair.germanSegments.find((s) => s.isChanged)?.text).toBe("ff");
    expect(pair.shiftRule).toContain("P → FF");
  });

  it("aligns T → SS in water → Wasser", () => {
    const pair = alignShiftPair("water", "Wasser");
    expect(pair.englishSegments.find((s) => s.isChanged)?.text).toBe("t");
    expect(pair.germanSegments.find((s) => s.isChanged)?.text).toBe("ss");
    expect(pair.shiftRule).toContain("T → SS");
  });

  it("aligns TH → D in think → denken", () => {
    const pair = alignShiftPair("think", "denken");
    expect(pair.englishSegments.find((s) => s.isChanged)?.text).toBe("th");
    expect(pair.germanSegments.find((s) => s.isChanged)?.text).toBe("d");
    expect(pair.shiftRule).toContain("TH → D");
  });

  it("aligns K → CH in make → machen", () => {
    const pair = alignShiftPair("make", "machen");
    expect(pair.englishSegments.find((s) => s.isChanged)?.text).toBe("k");
    expect(pair.germanSegments.find((s) => s.isChanged)?.text).toBe("ch");
    expect(pair.shiftRule).toContain("K → CH");
  });

  it("handles direct cognate words without false highlight", () => {
    const pair = alignShiftPair("arm", "Arm");
    expect(pair.englishSegments.every((s) => !s.isChanged)).toBe(true);
    expect(pair.germanSegments.every((s) => !s.isChanged)).toBe(true);
  });
});
