// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');

test('User can log in', async ({ browser }) => {

const context = await browser.newContext({
        ignoreHTTPSErrors: true,
});
const page = await context.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('teller@coh.com', 'PASpas@12');

  // Assert something after login
  //await expect(page.locator('text=Welcome')).toBeVisible();
});