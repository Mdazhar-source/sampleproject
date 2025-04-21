import { test } from '@playwright/test';

test('User can log in', async ({ browser }) => {

const context = await browser.newContext({
        ignoreHTTPSErrors: true,
});

const page = await context.newPage();

await page.goto('https://gtest.c2btech.com/admin/signin');

const loadTime = await page.evaluate(() => {
        const timing = window.performance.timing;
        return timing.loadEventEnd - timing.navigationStart;
      });
    
      expect(loadTime).toBeLessThan(5000); // milliseconds
    });