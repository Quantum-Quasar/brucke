import { describe, expect, test } from "vitest";
import { lessonHref } from "@/lib/routes";

describe("language-scoped lesson URLs", () => {
  test("encode the language and lesson id", () => {
    expect(lessonHref("de", 1)).toBe("/trail/de/1");
    expect(lessonHref("fr", 1102)).toBe("/trail/fr/1102");
    expect(lessonHref("es", 30)).toBe("/trail/es/30");
  });
});
