import { expect, test } from "@playwright/test";
import type { SRSCard } from "@/lib/types";

// Browser smoke suite: onboarding, lesson progress, review + SRS persistence,
// keyboard navigation, and static-route boundaries. Unit-level coverage for
// the same machinery lives in src/tests/ — these tests only pin down what
// breaks in a real browser (hydration, storage, routing, event handling).

const STORAGE_KEY = "brucke_app_state_v1";

/** Read the persisted app state from the page's localStorage. */
async function readAppState(page: import("@playwright/test").Page): Promise<any> {
  return page.evaluate((key) => {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  }, STORAGE_KEY);
}

test.describe("browser smoke", () => {
  test("onboarding opens on first visit and stays dismissed after skipping", async ({ page }) => {
    await page.goto("/");

    const dialog = page.locator('div[aria-label="Brücke onboarding"]');
    await expect(dialog).toBeVisible();

    await dialog.getByRole("button", { name: /skip/i }).click();
    await expect(dialog).toBeHidden();

    // the dismissal must survive a reload (persisted hasCompletedOnboarding)
    await page.reload();
    await expect(page.locator('div[aria-label="Brücke onboarding"]')).toBeHidden();
    const state = await readAppState(page);
    expect(state?.hasCompletedOnboarding).toBe(true);
  });

  // Every test below gets a fresh browser context, so the persisted state is
  // seeded before any page script runs — otherwise the onboarding modal opens
  // after hydration and intercepts every click.
  test.describe("with onboarding already completed", () => {
    test.beforeEach(async ({ page }) => {
      await page.addInitScript(
        ([key]) => {
          // seed once per context: on reloads the app's own saved state must
          // survive, so only fill an empty store
          if (!window.localStorage.getItem(key)) {
            window.localStorage.setItem(key, JSON.stringify({ hasCompletedOnboarding: true }));
          }
        },
        [STORAGE_KEY]
      );
    });

    test("lesson wizard advances a segment and persists progress across reload", async ({ page }) => {
      await page.goto("/trail/1");
      const nextPattern = page.getByRole("button", { name: /next: pattern/i });
      await expect(nextPattern).toBeVisible();

      // On a fresh dev-server page the click can land before React hydrates
      // and get swallowed — retry until the wizard actually advances.
      const nextTable = page.getByRole("button", { name: /next: transformation table/i });
      await expect(async () => {
        await nextPattern.click();
        await expect(nextTable).toBeVisible();
      }).toPass({ timeout: 30_000 });

      const state = await readAppState(page);
      expect(state?.lessonProgress?.["1"]?.segment).toBe("pattern");

      // progress survives a reload
      await page.reload();
      await expect(nextTable).toBeVisible();
    });

    test("review session: keyboard reveal + SM-2 grading persist to SRS storage", async ({ page }) => {
      await page.goto("/review");

      // start the "recent lessons" deck (always 20 words for the default language)
      await page.getByRole("button", { name: /review recent/i }).click();

      // the review-style selector opens; pick flashcards
      await expect(page.locator("#review-style-title")).toBeVisible();
      await page.getByRole("button", { name: /recall \(flashcard\)/i }).click();

      await expect(page.getByText(/card 1 \/ 20/i)).toBeVisible();

      // keyboard: space reveals, "3" grades Good → SM-2 advances to card 2
      await page.keyboard.press("Space");
      await expect(page.getByRole("button", { name: /^good/i })).toBeVisible();
      await page.keyboard.press("3");
      await expect(page.getByText(/card 2 \/ 20/i)).toBeVisible();

      // the graded card landed in persistent SRS storage
      const state = await readAppState(page);
      const graded = Object.values(state?.srsCards ?? {}).filter(
        (card: any) => card?.repetitions >= 1
      );
      expect(graded.length).toBeGreaterThanOrEqual(1);

      // back returns to the first card, which must be un-revealed and answerable
      await page.getByRole("button", { name: /^back/i }).click();
      await expect(page.getByText(/card 1 \/ 20/i)).toBeVisible();
      await expect(page.getByRole("button", { name: /show answer/i })).toBeVisible();
      await expect(page.getByRole("button", { name: /^back/i })).toBeDisabled();

      // escape exits the session cleanly back to the deck hub
      await page.keyboard.press("Escape");
      await expect(page.getByRole("heading", { name: /due today/i })).toBeVisible();
    });

    test("review session: back after grading restores the card so the re-grade counts once", async ({ page }) => {
      await page.goto("/review");

      // "recent lessons" is deterministic in word order; card 1 is a known word
      await page.getByRole("button", { name: /review recent/i }).click();
      await expect(page.locator("#review-style-title")).toBeVisible();
      await page.getByRole("button", { name: /recall \(flashcard\)/i }).click();
      await expect(page.getByText(/card 1 \/ 20/i)).toBeVisible();

      // grade card 1 Easy, then go back and grade it Hard instead
      await page.keyboard.press("Space");
      await page.keyboard.press("4");
      await expect(page.getByText(/card 2 \/ 20/i)).toBeVisible();

      const easyState = await readAppState(page);
      await page.keyboard.press("ArrowLeft");
      await expect(page.getByText(/card 1 \/ 20/i)).toBeVisible();

      await page.keyboard.press("Space");
      await page.keyboard.press("2"); // Hard
      await expect(page.getByText(/card 2 \/ 20/i)).toBeVisible();

      const state = await readAppState(page);
      const firstWordId = Object.keys(easyState?.srsCards ?? {})[0];
      const finalCard = state?.srsCards?.[firstWordId];

      // the card went back to its pre-session state, so the Hard grade is the
      // only graded step — interval stays at the first successful step (1 day)
      // instead of compounding from the Easy schedule
      expect(finalCard?.repetitions).toBe(1);
      expect(finalCard?.lapses).toBe(0);
      expect(finalCard?.interval).toBe(1);

      // exactly one card was graded in this session
      const gradedCount = Object.values(state?.srsCards ?? {}).filter(
        (card) => (card as SRSCard | undefined) !== undefined &&
          (card as SRSCard).repetitions >= 1
      ).length;
      expect(gradedCount).toBe(1);
    });

    test("static routes render and unknown dynamic params 404", async ({ page }) => {
      // a valid atlas family route (dynamicParams = false must not break it)
      await page.goto("/atlas/th_to_d");
      await expect(page.getByText(/Dental Shift/i).first()).toBeVisible();

      // unknown lesson and family ids must 404, not render or server-render dynamically
      const lessonResponse = await page.goto("/trail/999999");
      expect(lessonResponse?.status()).toBe(404);
      const familyResponse = await page.goto("/atlas/not_a_family");
      expect(familyResponse?.status()).toBe(404);
    });
  });
});
