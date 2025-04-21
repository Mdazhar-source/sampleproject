import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

//let testData = {};

test('Login with random credentials', async ({ browser }) => {

      // Launch a new browser context with HTTPS errors ignored
  const context = await browser.newContext({
    ignoreHTTPSErrors: true,
  });

  const page = await context.newPage();

  const randomName1 = faker.person.firstName();
  const randomName2 = faker.person.firstName();
  const randomName3 = faker.person.firstName();
  //const randomPhoneNumber1 = (800000000 + Math.floor(Math.random() * 100000000)).toString();
  //const randomPhoneNumber2 = (700000000 + Math.floor(Math.random() * 100000000)).toString();
  function generatePhoneNumber(startDigit = '9') {
    return startDigit + Math.floor(100000000 + Math.random() * 900000000).toString();
  }
  
  const randomPhoneNumber1 = generatePhoneNumber('7');
  const randomPhoneNumber2 = generatePhoneNumber('8');
 // const phone3 = generatePhoneNumber('9');

  test.setTimeout(500_000); // Increase timeout 
    // Navigate to login page
    await page.goto('https://gtest.c2btech.com/admin/signin');

      // Fill in login form
  await page.locator('input[name="email"]').fill("teller@coh.com");
  await page.locator('input[name="password"]').fill("CoNfIrM1@3");

  await page.locator('input[type="submit"]').click({ timeout: 8000 });
  await page.reload();
 // await page.getByRole('input', { value: 'Sign In' }).click();
//  await page.locator('[type="submit"]').click();
await page.waitForSelector('//ul[@class="top-menu"]/li[1]');
const registercustomer = page.locator('//ul[@class="top-menu"]/li[1]');
await registercustomer.click({ timeout: 8000 });
//await page.locator('//ul[@class="top-menu"]/li/[1]').click({ timeout: 3000 });;

await page.locator('select[name="customer_type"]').selectOption({ index: 0 });
await page.waitForTimeout(5000);
await page.locator('select[name="customer_type"]').selectOption({ index: 1 });

await page.locator('input[name="first_name"]').fill(randomName1);
await page.locator('input[name="second_name"]').fill(randomName2);
await page.locator('input[name="third_name"]').fill(randomName3);
await page.locator('input[name="fourth_name"]').fill("test");
await page.locator('input[name="date_of_birth"]').fill('2000-01-01');
await page.locator('input[name="place_of_birth"]').fill("eyl");
await page.locator('input[name="gender"][value="Male"]').check(); // Select Male

await page.locator('select[name="phone_carrier"]').selectOption({ index: 1 });
await page.waitForSelector('#phone_carrier', { timeout: 5000 });
await page.locator('input[name="mobile_1"]').fill(randomPhoneNumber1);
await page.locator('select[name="phone_carrier2"]').selectOption({ index: 1 });
await page.waitForSelector('#mobile_2', { timeout: 5000 });
await page.locator('input[name="mobile_2"]').fill(randomPhoneNumber2);
await page.locator('input[name="email"]').fill("test@test.com");
await page.locator('input[name="location_reference"]').fill("eyl");
await page.waitForTimeout(3000);
//await page.locator('select[name="district"]').selectOption({ index: 0 });

await page.locator('select[name="district"]').selectOption({ index: 1 });
await page.waitForTimeout(3000);

await page.locator('select[name="sub_division"]').selectOption({ index: 1 });
await page.locator('input[name="area"]').fill("A");
await page.locator('input[name="block"]').fill("A");

await page.waitForSelector('#save-customer', { timeout: 10000 });
await page.locator('input[id="save-customer"]').click();

const customerrefno1 = await page.locator('//table[@id="customer"]/tbody/tr[1]/td[2]/p/b').textContent();
const customerrefno2 = console.log('customer ref no :', customerrefno1);

const registerproperty = page.locator('//ul[@class="top-menu"]/li[2]');
await registerproperty.click({ timeout: 8000 });

await page.locator('input[name="legacy_file_number"]').fill("4333");
await page.locator('input[name="reference_number"]').fill("1234");
await page.locator('input[name="location_reference"]').fill("eyl");
//await page.waitForSelector('#district', { timeout: 10000 });
await page.waitForTimeout(3000);
await page.locator('select[name="district"]').selectOption({ index: 2 });
await page.waitForTimeout(5000);
await page.locator('select[name="sub_division"]').selectOption({ index: 2 });
await page.waitForTimeout(3000);
await page.fill('input[name="area"]', "A");
await page.locator('input[name="block"]').fill("A");
await page.locator('select[name="down_town"]').selectOption({ index: 1 });
await page.locator('select[name="building"]').selectOption({ index: 2 });
await page.locator('select[name="north"]').selectOption({ index: 2 });
await page.locator('select[name="south"]').selectOption({ index: 2 });
await page.locator('select[name="east"]').selectOption({ index: 2 });
await page.locator('select[name="west"]').selectOption({ index: 2 });
await page.locator('input[name="size"]').fill("10*10");
await page.locator('input[name="parcel_area_sqm"]').fill("100");
await page.locator('select[name="property_usage"]').selectOption({ index: 2 });
await page.locator('select[name="property_wall"]').selectOption({ index: 1 });
await page.locator('select[name="farm_id"]').selectOption({ index: 1 });
await page.locator('#select').click();
await page.locator('input[name="customer_identification_no"]').fill(customerrefno1);
await page.locator('button[id="customer_search"]').click();
await page.waitForTimeout(5000);
await page.locator('button[id="select"]').click();
await page.locator('input[id="save-register-property"]').click();

//const propertyrefno1 = await page.locator('//table[id="users"]/tbody/tr[1]/td[2]/b/a').textContent();
const propertyrefno1 = await page.locator('table tr:nth-child(1) td:nth-child(2) b a').innerText();
await page.waitForTimeout(5000);
const propertyrefno2 = console.log('property ref no :', propertyrefno1);
const newapplication = page.locator('//ul[@class="top-menu"]/li[3]').click();
await page.waitForTimeout(5000);

/*
await page.locator('select[name="purpose_of_registration"]').selectOption({ index: 1 });
await page.locator('select[name="referral"]').selectOption({ index: 1 });
await page.locator('select[name="registered_by"]').selectOption({ index: 1 });
await page.locator('select[name="registration_type"]').selectOption({ index: 2 });
await page.locator('select[name="service"]').selectOption({ index: 1 });
await page.locator('input[value="Start"]').click();
//await page.reload();
await page.waitForTimeout(10000);
const link = page.getByRole('link', { name: 'Select Property ' });
link.click();
await page.locator('input[class="form-control input-sm"]').fill(propertyrefno1);
await page.waitForTimeout(4000);
await page.locator('button#select').nth(0).click();
//await page.locator('input[name="customer_identification_no"]').fill(propertyrefno1);
await page.waitForTimeout(5000);
//window.scrollTo(0, document.body.scrollHeight);
await page.mouse.wheel(0, 1000);
//await page.keyboard.press('PageDown');
const link1 = page.getByRole('link', { name: ' Next' });
link1.click();
await page.waitForTimeout(2000);
const link2 = page.getByRole('link', { name: 'Add Buyers ' });
link2.click();  
await page.locator('input[name="customer_identification_no"]').fill(customerrefno1);
await page.locator('button[id="customer_search"]').click();
await page.waitForTimeout(5000);
await page.locator('button#select123').nth(0).click();
await page.waitForTimeout(4000);
await page.mouse.wheel(0, 1000);
const link3 = page.getByRole('link', { name:  ' Next ' });
link3.click();
await page.locator('input[name="settlement_amount"]').fill("2000");
const link4 = page.getByRole('link', { name:  'Select Notary'  });
link4.click();
await page.waitForTimeout(3000);
await page.locator('button#select123').nth(0).click();
await page.mouse.wheel(0, 1000);
const link5 = page.getByRole('link', { name:  ' Next ' });
link5.click();
await page.waitForTimeout(5000);
const link6 = page.getByRole('link', { name:  ' Finish ' });
link6.click();ss
await page.waitForTimeout(10000);
await page.keyboard.press('PageDown');
*/
await page.pause();

});