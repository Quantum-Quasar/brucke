import { expect, test } from "@playwright/test";

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

      // escape exits the session cleanly back to the deck hub
      await page.keyboard.press("Escape");
      await expect(page.getByRole("heading", { name: /due today/i })).toBeVisible();
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
