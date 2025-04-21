import { test, expect, request } from '@playwright/test';

test('login API should return a token', async () => {
    const token = '2858|RGNwL09QKjc5FtsZVvR6r63VNVof2TvrlJdDjJH1f084639b'; // Replace with actual token

    // Step 1: Create API context with Authorization header
    const apiContext = await request.newContext({
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  // Step 2: Define the login payload (credentials)
  const registrationPayload = {
    username: 'testnine@test.com',
    password: '1234',
    device_name:'11233'

  };
   // Step 3: Make a POST request to the login endpoint with the payload
  const response = await apiContext.post('https://testscp.haroob.com/api/login', {
    data: registrationPayload
  });

  // Step 4: Check the response
 
 const status = response.status();
 const body = await response.text(); // use text() for raw debugging
 console.log('Status Code:', status);
 console.log('Response Body:', body);

});