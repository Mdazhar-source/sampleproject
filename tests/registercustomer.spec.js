import {test, expect} from 'playwright/test';
import { faker } from '@faker-js/faker';

test('registercustomerspec', async ({ page }) => {

 const randomName = faker.person.fullName();
// const randomEmail = faker.internet.email();

const context = await page.$({
    ignoreHTTPSErrors: true, // 👈 Ignore SSL certificate errors
});

await page.goto('https://gtest.c2btech.com/admin/signin');
//const page = await context.newPage();
 
 await page.locator('#email').click();

 await page.locator('#email').fill(randomName);

 await page.locator('#password').fill("PASpas@12");

//  console.log(`Using Name: ${randomName}, Email: ${randomEmail}`);

 await page.locator('#login-submit').click();

 //await page.close();
 
});1