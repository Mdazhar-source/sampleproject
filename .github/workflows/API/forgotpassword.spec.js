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

  const Payload = {
    "email" : "create@test.com","phone" : "6666655555", "password" : "2222", "password_confirm" : "2222"
  };

  const response = await apiContext.post('https://testscp.haroob.com/api/forgot_password', {
    data: Payload
  });

  // Step 4: Check the response
 // expect(response.ok()).toBeTruthy();
 const status = response.status();
 const body = await response.text(); // use text() for raw debugging

 console.log('Status Code:', status);
 console.log('Response Body:', body);

});
