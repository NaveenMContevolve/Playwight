import { test, expect, chromium } from '@playwright/test';

test('headless_mode', async ({ page }) => {
  await page.goto('https://selenium-practice.netlify.app/');
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Naveen Meena');
  await page.getByLabel('Select an item:').selectOption('item2');
  await page.getByRole('checkbox', { name: 'Check Box 2' }).check();
  await page.getByRole('textbox', { name: 'Pick a date:' }).fill('2025-02-21');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('form')).toContainText('Submitted Successfully');
});

test('non-headless_mode', async () => {
  const browser = await chromium.launch({ headless: false }); // Non-headless mode
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://selenium-practice.netlify.app/');
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Naveen Meena');
  await page.getByLabel('Select an item:').selectOption('item2');
  await page.getByRole('checkbox', { name: 'Check Box 2' }).check();
  await page.getByRole('textbox', { name: 'Pick a date:' }).fill('2025-02-21');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('form')).toContainText('Submitted Successfully');

  await browser.close();
});