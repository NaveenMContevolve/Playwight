import { test, expect,chromium } from '@playwright/test';

test('Login in CC Webclient', async () => {
  test.setTimeout(600000);
  const context = await chromium.launch({ headless: false });
  const page = await context.newPage();

  await page.goto('https://keycloak.nta.test2.trapezegroup.cloud/realms/LIO/protocol/openid-connect/auth?client_id=CCWebClient&redirect_uri=https%3A%2F%2Fdispatcher.nta.test2.trapezegroup.cloud%2Fselect-workstation&state=a5bfbdf8-ffbc-468a-89f0-d50166e24181&response_mode=fragment&response_type=code&scope=openid&nonce=911ece98-89db-4112-93c1-84dfe57f94a7');
  await page.getByRole('link', { name: 'Bus Eireann' }).click();
 await page.locator('.pagination-view > div > div:nth-child(2)').click();
  await page.locator('.pagination-view > div > div:nth-child(2)').click();
  await page.getByRole('textbox', { name: 'someone@example.com' }).fill('dispatcherSupervisor@eireannavltest.onmicrosoft.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('.pagination-view > div > div:nth-child(3)').click();
  await page.getByRole('textbox', { name: 'Enter the password for' }).fill('T&144082135487ug');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('https://dispatcher.nta.test2.trapezegroup.cloud/select-workstation');
  await page.locator('svg').click();
  // await page.getByRole('listbox', { name: 'Workstation' }).click();
  await page.locator('[role="option"]').first().click();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Shortcut: CTRL + M' }).click();
  await page.getByRole('button', { name: 'Timetable Icon Timetables' }).click();
  await page.getByRole('button', { name: 'Timetable Icon Timetables' }).click();
  await page.getByRole('button', { name: 'Icon KPI Dashboard' }).click();
  await page.getByRole('combobox', { name: 'Type Network' }).locator('svg').click();
  await page.getByRole('option', { name: 'Routes' }).click();
  await page.getByRole('combobox', { name: 'Routes', exact: true }).locator('path').click();
  await page.getByRole('option', { name: '115' }).click();
  await expect(page.getByText('Trips Availability For Current Hour', { exact: true })).toBeVisible();
  await page.locator('span').filter({ hasText: 'Scheduled Stops' }).click();
  await page.waitForTimeout(10000);
});