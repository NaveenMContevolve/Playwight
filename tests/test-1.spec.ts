import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bing.com/hp?mkt=us-eN');
  await page.getByRole('searchbox', { name: 'Enter your search term' }).click();
  await page.getByRole('searchbox', { name: 'Enter your search term' }).fill('selenium vs playwirght');
  await expect(page.getByRole('searchbox', { name: 'Enter your search term' })).toBeVisible();
  await page.getByRole('button', { name: 'Submit' }).click();
});