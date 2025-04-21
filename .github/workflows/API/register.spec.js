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
    "username": "vikarm",
    "email": "vikarm@gmail.com",
    "password": "1234",
    "password_confirmation": "1234",
    "tos": "yes",
    "phone": "555",
    "name" : "vik"

  };

  const response = await apiContext.post('https://testscp.haroob.com/api/register', {
    data: Payload
  });

  // Step 4: Check the response
 // expect(response.ok()).toBeTruthy();
 const status = response.status();
 const body = await response.text(); // use text() for raw debugging

 console.log('Status Code:', status);
 console.log('Response Body:', body);

});
