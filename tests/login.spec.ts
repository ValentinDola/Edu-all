import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://edu-all-k8z7.vercel.app/");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Career/);
  });

  test("should navigate to the login page and signin", async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)

    // Go to the login page
    await page.goto("https://edu-all-k8z7.vercel.app/login");

    
      // Get the input and fill it with a valid email address
      await page.getByPlaceholder("Email Address").fill("dector@skiff.com");

      // Get the input and fill it with a valid password
    await page.getByPlaceholder("Password").fill("coffeeezeela00");
    
    // Submit the registration form
    await Promise.all([
      page.waitForNavigation(), // Wait for the navigation after submitting the form
      await page.getByText("Login").click()
    ]);
  

    // Check if the current URL is the login page
    const assessmentPageUrl = "https://edu-all-k8z7.vercel.app/assessment"; // Replace with the actual URL of your login page
    const currentUrl = page.url();
    expect(currentUrl).toBe(assessmentPageUrl);
  });
});

