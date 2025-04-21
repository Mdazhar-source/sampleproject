// register-customer.spec.ts
import { test, request, expect } from '@playwright/test';

test('make payment via API', async () => {
    const token = '2857|JjqbbvnnplhaxN1HO7GuIpvRqy2OJ0HKgPpby5Ote81c7523'; // Replace with actual token

    // Step 1: Create API context with Authorization header
    const apiContext = await request.newContext({
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

  const Payload ={
    "amount": 1,
    "payment_date": "11-Feb-2025",
    "mode_of_payment": "SIINPAY",
    "payee_mobile_no": "9360120292",
    "reference_no": "PR96CD1E3A",
    "customer_reference_no": "CUST-13841",
    "invoice_no": "NU-INV-559564",
    "end_point": "https://v1prepaid.smhrp01.app/"
  };

  const response = await apiContext.post('https://testscp.haroob.com/api/make-payment', {
    data: Payload
  });

  // Step 4: Check the response
 // expect(response.ok()).toBeTruthy();
 const status = response.status();
 const body = await response.text(); // use text() for raw debugging

 console.log('Status Code:', status);
 console.log('Response Body:', body);

});
