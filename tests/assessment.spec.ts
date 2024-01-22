import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://edu-all-k8z7.vercel.app/");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Career/);
  });


  test("should navigate to the assessment page and fill all the fields", async ({
    page,
  }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)

    // Go to the assessment page
    await page.goto("http://localhost:3000/assessment");

     // Example: Assuming the select input has a title attribute equal to "month"
  const selectInputSelector = 'select[data-testid="month"]';

  

  // Example: Interact with the select input (select a specific option)
  await page.selectOption(selectInputSelector, 'March');

  // Example: Verify the selected option
  const selectedOption = await page.$eval(selectInputSelector, (select) => select.value);
  expect(selectedOption).toBe('March');

  });
});

