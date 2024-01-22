import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://edu-all-k8z7.vercel.app/");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Career/);
  });
    
    test('Universtity Page Test', async ({ page }) => {
    // Navigate to the data page
    await page.goto('https://edu-all-k8z7.vercel.app/unis', { timeout: 60000 }); // Replace with your actual data page URL

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

});

