import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://edu-all-k8z7.vercel.app/");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Career/);
  });

 

  test("should navigate to the career page", async ({ page }) => {

    // Navigate to the career page
    await page.goto('https://edu-all-k8z7.vercel.app/career');

    // Example: Assuming there is a list of careers with a specific selector
  const careerSelector = '.item';

  // Wait for the career list to be present in the DOM
  await page.waitForSelector(careerSelector);

  // Get the list of careers
  const careers = await page.$$eval(careerSelector, (items) => items.map((item) => item.textContent));

  // Iterate through each career and click to reveal categories
  for (let i = 0; i < careers.length; i++) {
    // Click on the career item
    await page.click(`text=${careers[i]}`);

    // Example: Assuming there is a list of categories with a specific selector
    const categorySelector = '.category-item';

    // Wait for the category list to be present in the DOM
    await page.waitForSelector(categorySelector);

    // Get the list of categories
    const categories = await page.$$eval(categorySelector, (items) => items.map((item) => item.textContent));

    // Example: Verify that the list of categories is not empty
    expect(categories.length).toBeGreaterThan(0);

    // Output the categories for demonstration purposes
    console.log(`Categories for ${careers[i]}:`, categories);

    // You can add more specific assertions based on your application's behavior
  }

  });
});

