import { test, expect } from "@playwright/test";


test("system test", async ({ page }) => {
  await page.goto("https://edu-all-k8z7.vercel.app/");
  await page.getByRole("link", { name: "Career", exact: true }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Architecture and Engineering Occupations$/ })
    .click();
  await page.getByRole("link", { name: "Agricultural Engineers" }).click();
  await page.getByRole("tab", { name: "Education" }).click();
  await page.getByRole("tab", { name: "Schools" }).click();
  await page.getByRole("tab", { name: "Skills" }).click();
  await page.getByRole("tab", { name: "Salary" }).click();
  await page.getByRole("link", { name: "Career" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Architecture and Engineering Occupations$/ })
    .click();
  await page
    .getByRole("link", { name: "Architects, Except Landscape" })
    .click();
  await page.getByRole("tab", { name: "Overview" }).click();
  await page.getByRole("tab", { name: "Education" }).click();
  await page.getByRole("tab", { name: "Schools" }).click();
  await page.getByRole("tab", { name: "Skills" }).click();
  await page.getByRole("tab", { name: "Salary" }).click();
  await page.getByRole("link", { name: "Universities" }).click();
  await page.getByRole("link", { name: "FAQ'S" }).click();
  await page.getByRole("button", { name: "What is Educational" }).click();
  await page.getByRole("button", { name: "How do Educational" }).click();
    await page.getByRole("button", { name: "What are the benefits of" }).click();
  await page.getByRole("link", { name: "SIGN UP" }).click();
  await page.getByPlaceholder("Full Name").click();
  await page.getByPlaceholder("Full Name").fill("Kevin ");
  await page.getByPlaceholder("Full Name").press("CapsLock");
  await page.getByPlaceholder("Full Name").fill("Kevin WAGNER");
  await page.getByPlaceholder("Full Name").press("CapsLock");
  await page.getByPlaceholder("Email Address").click();
  await page.getByPlaceholder("Email Address").fill("wagnerkevin");
  await page.getByPlaceholder("Email Address").click();
  await page.getByPlaceholder("Email Address").fill("wagnerkevin@gmail.com");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("wagnerkevin0099");
  await page.getByRole("button", { name: "Register" }).click();
  await page.getByPlaceholder("Email Address").click();
  await page.getByPlaceholder("Email Address").fill("wagnerkevin@gmail.com");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("wagnerkevin0099");
    await page.getByRole("button", { name: "Login" }).click();
    await page.getByTestId('month').selectOption('February');
  await page.getByTestId('day').selectOption('3');
  await page.getByTestId('year').selectOption('1997');
  await page.getByTestId('ethnic').selectOption('Afro-Caribbean');
  await page.locator('label').filter({ hasText: 'Female' }).locator('span').first().click();
  await page.getByTestId('graduation').selectOption('2020');
  await page.getByTestId('currently').selectOption('4YearCollege');
  await page.getByTestId('region').selectOption('Bono East');
  await page.getByTestId('type').selectOption('private');
  await page.getByTestId('skill').selectOption('Critical Thinking');
  await page.getByTestId('career').selectOption('Cryptocurrency Analyst');
  await page.getByTestId('button').click();
  await page.goto('https://edu-all-k8z7.vercel.app/result');
  await page.getByRole('tab', { name: 'My Colleges' }).click();
  await page.getByRole('tab', { name: 'My Careers' }).click();
  await page.locator('li').filter({ hasText: 'Psychology' }).click();
  await page.getByRole('tab', { name: 'Careers' }).click();
  await page.getByRole('tab', { name: 'Description' }).click();
  await page.getByLabel('Close').click();
  await page.locator('li').filter({ hasText: 'English Literature' }).click();
  await page.getByRole('tab', { name: 'Careers' }).click();
  await page.getByLabel('Close').click();
  await page.getByLabel('avatar').click();
  await page.getByLabel('Profile').click();
});
