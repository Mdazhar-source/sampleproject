// register-customer.spec.ts
import { test, request, expect } from '@playwright/test';

test('Register a new customer via API', async () => {
    const token = '2857|JjqbbvnnplhaxN1HO7GuIpvRqy2OJ0HKgPpby5Ote81c7523'; // Replace with actual token

    // Step 1: Create API context with Authorization header
    const apiContext = await request.newContext({
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

  const registrationPayload = {
    project: 'NUWACO',
    account_number: 'CUST-13867',
    meter_number: '111555',
    name: 'xxx',
    mobile: '00000',
    status: '1',
    end_point: 'https://v1prepaid.smhrp01.app'

  };

  const response = await apiContext.post('https://testscp.haroob.com/api/add_account_details', {
    data: registrationPayload
  });

  // Step 4: Check the response
 // expect(response.ok()).toBeTruthy();
 const status = response.status();
 const body = await response.text(); // use text() for raw debugging

 console.log('Status Code:', status);
 console.log('Response Body:', body);

});
