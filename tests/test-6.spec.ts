import { test, expect ,chromium} from '@playwright/test';

test('test', async ({ page, browser }) => {
  const context = await chromium.launch({ headless: false });
  const newPage = await context.newPage();

  await newPage.goto('https://keycloak.nta.test2.trapezegroup.cloud/realms/LIO/protocol/openid-connect/auth?client_id=CCWebClient&redirect_uri=https%3A%2F%2Fdispatcher.nta.test2.trapezegroup.cloud%2Fselect-workstation&state=70368e6e-ec32-45f7-9480-f2b3a4fea533&response_mode=fragment&response_type=code&scope=openid&nonce=d215e0fd-32ee-4288-8795-6d40313fab41');

  await newPage.getByRole('link', { name: 'Bus Eireann' }).click();
  await newPage.getByRole('textbox', { name: 'someone@example.com' }).click();
  await newPage.getByRole('textbox', { name: 'someone@example.com' }).fill('dispatcher@eireannavltest.onmicrosoft.com');
  await newPage.getByRole('button', { name: 'Next' }).click();
  await newPage.getByRole('textbox', { name: 'Enter the password for' }).click();
  await newPage.getByRole('textbox', { name: 'Enter the password for' }).fill('T&144082135487ug');
  await newPage.getByRole('button', { name: 'Sign in' }).click();
  await newPage.locator('svg').click();
  await newPage.getByRole('option', { name: 'Control station 8' }).click();
  await newPage.getByRole('button', { name: 'Log In' }).click();
});
