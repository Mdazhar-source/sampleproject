import {test,expect} from 'playwright/test';

test ('Locators', async ({page}) => {

    await page.goto("https://teams.haroob.com/login");

    await page.locator('#username').click();

    await page.locator('#username').fill("Mohammed.Azharddin");

    await page.locator('#password').fill("Password@12345");

    await page.locator('#login-submit').click();

    await page.close();
    
});