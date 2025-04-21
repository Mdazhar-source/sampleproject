// register-customer.spec.ts
import { test, request, expect } from '@playwright/test';

test('sales invoice via API', async () => {
    const token = '2857|JjqbbvnnplhaxN1HO7GuIpvRqy2OJ0HKgPpby5Ote81c7523'; // Replace with actual token

    // Step 1: Create API context with Authorization header
    const apiContext = await request.newContext({
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

  const registrationPayload = {
     "customer_id" : "CUST-13677",
     "end_point":"https://v1prepaid.smhrp01.app"

  };

  const response = await apiContext.post('https://testscp.haroob.com/api/salesinvoicelist', {
    data: registrationPayload
  });

  // Step 4: Check the response
 // expect(response.ok()).toBeTruthy();
 const status = response.status();
 const body = await response.text(); // use text() for raw debugging

 console.log('Status Code:', status);
 console.log('Response Body:', body);

});
