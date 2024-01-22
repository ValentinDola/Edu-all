import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://edu-all-k8z7.vercel.app/");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Career/);
  });

  

  test("Registration Page Test", async ({ page }) => {
    // Navigate to the registration page
    await page.goto("https://edu-all-k8z7.vercel.app/register", {
      timeout: 60000,
    }); // Replace with your actual registration page URL
      
       // Get the input and fill it with a valid email address
      await page.getByPlaceholder("Full Name").fill("Koukou KAKA");

     // Get the input and fill it with a valid email address
      await page.getByPlaceholder("Email Address").fill("dector@skiff.com");

      // Get the input and fill it with a valid password
    await page.getByPlaceholder("Password").fill("coffeeezeela00");

   

    // Submit the registration form
    await Promise.all([
      page.waitForNavigation(), // Wait for the navigation after submitting the form
      await page.getByText("Register").click()
    ]);

    // Verify that the user is redirected to the login page (change the URL accordingly)
    const currentUrl = page.url();
    expect(currentUrl).toBe("https://edu-all-k8z7.vercel.app/login"); // Replace with the expected login page URL

    // Check for the presence of success or error messages based on your application's behavior
    // Assuming the presence of an error message on registration failure
    const errorMessage = await page.textContent(".error-message"); // Replace with your actual error message selector

    if (errorMessage) {
      // Registration failed
      console.error("Registration failed:", errorMessage);
      expect(errorMessage).toContain("User with this email already exists.");
    } else {
      // Registration succeeded, continue with additional assertions or navigate to the login page
      console.log("Registration successful!");
    }

    // You can add more assertions based on your application's behavior
    // For example, check for the presence of success messages, error messages, or other UI elements
  });
});
