import { test, expect, request } from '@playwright/test';
 
test('login API should return a token', async () => {
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJWQzdrTFQzaVhyRjVzczdYTW5CcjVrQ1E0LW5pY1NmUFpLTmJYRFVMRFVVIn0.eyJqdGkiOiI1NDllZmNkMS01ZmZlLTQ0OGItOWIwZi05MWQ2YTI4NDQ4NmYiLCJleHAiOjE3NDQzNjE1MjQsIm5iZiI6MCwiaWF0IjoxNzQ0Mjc1MTI0LCJpc3MiOiJodHRwczovL2xpYW0uc2lpbnBheS5jb20vYXV0aC9yZWFsbXMvc2lpbnBheSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI4NTZhMWZhYi0xMjVhLTRjNWEtOTAxZi0xYTQ0NmZlNWY4MDYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzaWlucGF5LWFwaSIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6ImIyMGFkZmI2LTc4MmItNDA2Yy1hY2VhLWU4ZWVhZThkOWNhMCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUk9MRV9FTUFBTF9GSU5BTkNJQUxfSU5TVElUVVRJT04iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJTb21CYW5rIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic29tYmFuayIsImxvY2FsZSI6ImVuIiwiZ2l2ZW5fbmFtZSI6IlNvbUJhbmsiLCJmYW1pbHlfbmFtZSI6IiJ9.RDF2kfnGzPftFXMzRSynqyrzSuYSFxUBT-PemgiTzNNn4s6zEOtlO5r4uqYWetztFTphg0iMgD_47IYG569EBUYDd0EdS8OorvHc1z8IHJUko2On72fuz-BrZXQniYCYdqEIPML2cBaUXwE-LHj7EYerpToKZ1a1RPRIPGqagtwObzGTvcL7iFwOUQ5pze5d2xnFD-xCRe-TIQSJs4IufSreohmqg42lVuQiCocjIx702e4BDRNdp2IU8LZfzNlRU5Ew4Xs-cBbFfYSpkshgEtIOGlU4onoDgPpjxVBDDMP4TS8FnTHPmFeXXqt9l4f79aD0wTIBExXoWSlWK_OIpA'; // Replace with actual token
 

    const context = await request.newContext({
        ignoreHTTPSErrors: true
      });


    // Step 1: Create API context with Authorization header
    const apiContext = await request.newContext({
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
 
    });
  // Step 2: Define the login payload (credentials)
  const registrationPayload = {
    client_id: 'siinpay-api',
    grant_type:'password',
    username:'sombank',
    password:'TrFEMnt8YCk3uqe',
    client_secret:'6a3a83be-2584-4075-8955-06d692f9f872'
 
  };
   // Step 3: Make a POST request to the login endpoint with the payload
  const response = await apiContext.post(
    'http://liam.siinpay.com/auth/realms/siinpay/protocol/openid-connect/token', {
    data: registrationPayload
  });
 
  // Step 4: Check the response
 
 const status = response.status();
 const body = await response.text(); // use text() for raw debugging
 console.log('Status Code:', status);
 console.log('Response Body:', body);
 
});