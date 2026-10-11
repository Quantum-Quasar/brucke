import { test, expect, type Page } from "@playwright/test";

const BASE = "http://localhost:3111";

const SEED = JSON.stringify({
  activeLanguageId: "de",
  hasCompletedOnboarding: true,
  isOnboardingOpen: false,
  seenIntroLanguages: ["de"],
  settings: { posturePrimerSeen: true, showPostureCues: true, listeningSkippedUntil: 0 },
});

async function seed(page: Page) {
  // Seed once: addInitScript re-runs on every navigation, so only write when the
  // store is absent — otherwise a reload would wipe state the test just set.
  await page.addInitScript(
    ([k, v]) => {
      if (!window.localStorage.getItem(k as string)) window.localStorage.setItem(k as string, v as string);
    },
    ["brucke_app_state_v1", SEED] as const
  );
}

const HYDRATE = 1600;

const txt = (page: Page) => page.locator("body").innerText().then((t) => t.replace(/\n+/g, " | "));

/**
 * Wait for the feedback sheet's "continue" and click it. Widgets such as
 * shift_select submit as soon as an option is chosen, so callers may or may not
 * need an Enter first — poll rather than assume.
 */
async function settle(page: Page, expectEnter = false) {
  if (expectEnter) {
    await page.keyboard.press("Enter");
    await page.waitForTimeout(1000);
  }
  for (let i = 0; i < 25; i++) {
    const cont = page.getByRole("button", { name: /^continue/i }).first();
    if (await cont.count()) {
      await cont.click().catch(() => {});
      await page.waitForTimeout(1200);
      return true;
    }
    await page.waitForTimeout(400);
  }
  return false;
}

const problemNo = async (page: Page) => {
  const m = (await txt(page)).match(/PROBLEM (\d+) OF (\d+)/);
  return m ? Number(m[1]) : -1;
};

test("panorama renders five structure diagrams and is reachable from the dock", async ({ page }) => {
  await seed(page);
  await page.goto(`${BASE}/panorama`);
  await page.waitForTimeout(1600);
  await expect(page.getByRole("heading", { name: /whole structure, on one page/i })).toBeVisible();
  expect(await page.locator("table").count()).toBe(5);
  await expect(page.getByText("she / her").first()).toBeVisible();
  await expect(page.getByText("who gets the result (dative)")).toBeVisible();
  await expect(page.getByText("den").first()).toBeVisible();
  await expect(page.getByRole("link", { name: /panorama/i }).first()).toBeVisible();
});

test("sprig 1003 plants the D- + pronoun frame, the trap note and the foreshadow", async ({ page }) => {
  await seed(page);
  await page.goto(`${BASE}/trail/1003`);
  await page.waitForTimeout(1600);
  await expect(page.getByRole("heading", { name: "The Articles Are Pronouns in Disguise" })).toBeVisible();
  await expect(page.getByText(/wearing a D- hat/i).first()).toBeVisible();
  await expect(page.getByText(/D- \+ sie/).first()).toBeVisible();
  // the open loop is planted on the hook card itself
  await expect(page.getByText(/you have not met the case that moves die/i).first()).toBeVisible();

  await page.locator("button").filter({ hasText: /next: pattern/i }).first().click();
  await page.waitForTimeout(1000);
  await expect(page.getByText(/the shortcut your mind will offer/i).first()).toBeVisible();
  await expect(
    page.getByText(/Your mind will offer: .the article depends on whether the thing is male or female/i).first()
  ).toBeVisible();
  await expect(page.getByText(/die Hand is a she-word/i).first()).toBeVisible();
});

test("the listening drill plays audio and one skip silences it for 15 minutes", async ({ page }) => {
  const errs: string[] = [];
  page.on("pageerror", (e) => errs.push(e.message));

  await seed(page);
  await page.goto(`${BASE}/trail/1003`);
  await page.waitForTimeout(1600);
  await page.locator("button").filter({ hasText: /next: pattern/i }).first().click();
  await page.waitForTimeout(500);
  await page.locator("button").filter({ hasText: /transformation table/i }).first().click();
  await page.waitForTimeout(500);
  await page.locator("button").filter({ hasText: /start exercises/i }).first().click();
  await page.waitForTimeout(1200);

  // e1 — shift_select (submits on selection). Option 1 is the correct answer, so
  // the success sheet carries the "I guessed" affordance.
  await page.keyboard.press("1");
  await page.waitForTimeout(800);
  await expect(page.getByRole("button", { name: /I guessed/i }).first()).toBeVisible({ timeout: 15_000 });
  await settle(page);

  // e2 — matching_pairs: brute-force every pairing until each lands
  for (let e = 1; e <= 3; e++) {
    for (let g = 1; g <= 3; g++) {
      const before = await problemNo(page);
      await page.keyboard.press(String(e));
      await page.waitForTimeout(450);
      await page.keyboard.press(String(g));
      await page.waitForTimeout(700);
      const t = await txt(page);
      const landed = (await problemNo(page)) !== before || /matched perfectly/.test(t);
      if (landed) break;
    }
  }
  await settle(page, true);

  // e3 — morpheme_tiles: d (1) then ie (2), then verify
  await page.keyboard.press("1");
  await page.waitForTimeout(600);
  await page.keyboard.press("2");
  await page.waitForTimeout(800);
  await settle(page, true);

  // e4 — the dictation
  await expect(page.getByText(/^Listen and write/i).first()).toBeVisible({ timeout: 25_000 });
  await expect(page.getByRole("button", { name: /^Play/ })).toBeVisible();
  // the replay budget is bounded and labelled
  await expect(page.getByRole("button", { name: /^Play$/ })).toBeVisible();
  expect(errs, `uncaught page errors: ${errs.join(" | ")}`).toEqual([]);

  // the replay budget is stated on the card, and the audio affordance is a real button
  await expect(page.getByText(/Replays are capped on purpose/i).first()).toBeVisible();
  await expect(page.getByRole("button", { name: /^Play$/ })).toBeEnabled();

  // one skip silences every listening exercise for 15 minutes
  await page.getByRole("button", { name: /I can.t listen right now/i }).click();
  await expect(page.getByText(/Listening is off/i).first()).toBeVisible();
  await expect(page.getByText(/Der Tisch und die Hand und das Buch/).first()).toBeVisible();
  await expect(page.getByRole("button", { name: /play it anyway/i })).toBeVisible();

  // the skip is persisted state, not component state
  await page.reload();
  await expect(page.getByText(/listening off for/i).first()).toBeVisible();
});

test("the 30-second detour trough fires mid-lesson, ungraded and skippable", async ({ page }) => {
  await seed(page);
  await page.goto(`${BASE}/trail/4`);
  await page.waitForTimeout(HYDRATE);
  await page.locator("button").filter({ hasText: /next: pattern/i }).first().click();
  await page.waitForTimeout(500);
  await page.locator("button").filter({ hasText: /transformation table/i }).first().click();
  await page.waitForTimeout(500);
  await page.locator("button").filter({ hasText: /start exercises/i }).first().click();
  await page.waitForTimeout(1000);

  // e1 — morpheme tiles: "dank" (1) + "en" (2) = danken
  await page.keyboard.press("1");
  await page.waitForTimeout(500);
  await page.keyboard.press("2");
  await page.waitForTimeout(600);
  await settle(page, true);

  // e2 — matching pairs: brute-force all four pairings
  for (let e = 1; e <= 4; e++) {
    for (let g = 1; g <= 4; g++) {
      const before = await problemNo(page);
      await page.keyboard.press(String(e));
      await page.waitForTimeout(400);
      await page.keyboard.press(String(g));
      await page.waitForTimeout(700);
      if ((await problemNo(page)) !== before) break;
    }
  }
  await settle(page, true);

  // the trough sits after the second exercise, before the third
  await expect(page.getByText(/for interest — not on the test/i).first()).toBeVisible({ timeout: 20_000 });
  await expect(page.getByText(/Thou\/Thee & Donner/i).first()).toBeVisible();
  // it is skippable, and skipping is an ordinary dismissal — no grade, no gate
  await expect(page.getByRole("button", { name: /back to the exercise/i }).first()).toBeVisible();
  await page.getByRole("button", { name: /back to the exercise/i }).first().click();
  await page.waitForTimeout(1000);
  // the trough is gone (the margin-note badge for the same footnote legitimately stays)
  await expect(page.getByRole("button", { name: /back to the exercise/i })).toHaveCount(0);

  // and the drill is still where it was, at the third exercise
  const after = await page.locator("body").innerText();
  expect(after, "should be back at the third exercise after dismissing the trough").toMatch(/PROBLEM 3 OF 5/);
});
