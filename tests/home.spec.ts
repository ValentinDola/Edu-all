import { test, expect } from "@playwright/test";

test("system test", async ({ page }) => {
    // Set a longer timeout for this test
    test.setTimeout(120000);

    // Navigate to the home page
    await page.goto("https://edu-all-k8z7.vercel.app/");

    // Navigate to the 'Career' section
    await page.getByRole("link", { name: "Career", exact: true }).click();

    // Navigate to a specific career category
    await page
        .locator("div")
        .filter({ hasText: /^Architecture and Engineering Occupations$/ })
        .click();

    // Navigate to a specific career within the category
    await page.getByRole("link", { name: "Agricultural Engineers" }).click();

    // Switch between different tabs
    await page.getByRole("tab", { name: "Education" }).click();
    await page.getByRole("tab", { name: "Schools" }).click();
    await page.getByRole("tab", { name: "Skills" }).click();
    await page.getByRole("tab", { name: "Salary" }).click();

    // Go back to the 'Career' section
    await page.getByRole("link", { name: "Career" }).click();
    
    // ... (Continue with more actions)
    
    // Perform actions on the registration page
    await page.getByPlaceholder("Full Name").click();
    await page.getByPlaceholder("Full Name").fill("Kevin WAGNER");
    await page.getByPlaceholder("Email Address").click();
    await page.getByPlaceholder("Email Address").fill("wagnerkevin@gmail.com");
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder("Password").fill("wagnerkevin0099");
    await page.getByRole("button", { name: "Register" }).click();

    // Navigate to the login page
    await page.goto("https://edu-all-k8z7.vercel.app/login");

    // Perform login actions
    await page.getByPlaceholder("Email Address").click();
    await page.getByPlaceholder("Email Address").fill("wagnerkevin@gmail.com");
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder("Password").fill("wagnerkevin0099");
    await page.getByRole("button", { name: "Login" }).click();

    // Perform actions on the assessment form
    await page.getByTestId('month').selectOption('February');
    await page.getByTestId('day').selectOption('3');
    // ... (Continue with more assessment form actions)

    // Navigate to the result page
    await page.getByTestId('button').click();
    

    // Perform actions on the user profile
    await page.getByLabel('avatar').click();
    await page.getByLabel('Profile').click();
    await page.getByLabel('avatar').click();
    await page.getByLabel('Log').click();

    await page.goto('https://edu-all-k8z7.vercel.app/');
  await page.getByRole('link', { name: 'Universities' }).click();
  await page.getByPlaceholder('University').click();
  await page.getByPlaceholder('University').fill('ghana');
});
