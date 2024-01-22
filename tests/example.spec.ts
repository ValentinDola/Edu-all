import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("http://localhost:3000");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Career/);
  });

  test("should navigate to the login page and signin", async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)

    // Go to the login page
    await page.goto("http://localhost:3000/login");

    
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
    const assessmentPageUrl = 'http://localhost:3000/assessment'; // Replace with the actual URL of your login page
    const currentUrl = page.url();
    expect(currentUrl).toBe(assessmentPageUrl);
  });

  test("should navigate to the career page", async ({ page }) => {

    // Navigate to the career page
    await page.goto('http://localhost:3000/career');

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

test('Universtity Page Test', async ({ page }) => {
  // Navigate to the data page
  await page.goto('http://localhost:3000/unis'); // Replace with your actual data page URL

  // Example: Assuming there is a list of data items with a specific selector
  const dataItemSelector = '.unis';

  // Wait for the data items to be present in the DOM
  await page.waitForSelector(dataItemSelector);

  // Get the list of data items
  const dataItems = await page.$$eval(dataItemSelector, (items) =>
    items.map((item) => {
      const name = item.querySelector('.name')?.textContent || '';
      const nickname = item.querySelector('.nickname')?.textContent || '';
      const location = item.querySelector('.location')?.textContent || '';
      const type = item.querySelector('.type')?.textContent || '';
      const logoPresent = item.querySelector('img') !== null;

      return {
        name,
        nickname,
        location,
        type,
        logoPresent,
      };
    })
  );

  // Iterate through each data item and make assertions
  for (let i = 0; i < dataItems.length; i++) {
    const item = dataItems[i];

    // Example: Assert that the name is present
    expect(item.name).toBeTruthy();

    // Example: Assert that the nickname is present
    expect(item.nickname).toBeTruthy();

    // Example: Assert that the location is present
    expect(item.location).toBeTruthy();

    // Example: Assert that the type is present
    expect(item.type).toBeTruthy();

    // Example: Assert that the logo is either an image or a "No Logo" text
    if (item.logoPresent) {
      expect(await page.$(`.unis:nth-child(${i + 1}) img`)).not.toBeNull();
    } else {
      expect(await page.textContent(`.unis:nth-child(${i + 1}) p.text-base`)).toContain('No Logo');
    }

    // Output information for demonstration purposes
    console.log(`Data item ${i + 1}:`, item);
  }
});


  // test("should navigate to the assessment page and fill all the fields", async ({
  //   page,
  // }) => {
  //   // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)

  //   // Go to the assessment page
  //   await page.goto("http://localhost:3000/assessment");

  //    // Example: Assuming the select input has a title attribute equal to "month"
  // const selectInputSelector = 'select[data-testid="month"]';

  

  // // Example: Interact with the select input (select a specific option)
  // await page.selectOption(selectInputSelector, 'March');

  // // Example: Verify the selected option
  // const selectedOption = await page.$eval(selectInputSelector, (select) => select.value);
  // expect(selectedOption).toBe('March');

  // });
});

