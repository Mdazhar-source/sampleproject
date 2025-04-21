import {test,expect} from 'playwright/test';
import { faker } from '@faker-js/faker';

test('dynamicloginspec', async ({ page }) => {

    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();

    
    await page.goto("https://teams.haroob.com/login");

    await page.locator('#username').click();

    await page.locator('#username').fill(randomName);

    await page.locator('#password').fill(randomEmail);

    console.log(`Using Name: ${randomName}, Email: ${randomEmail}`);

    await page.locator('#login-submit').click();

    //await page.close();
    
});