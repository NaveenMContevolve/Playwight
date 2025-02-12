import { test, expect }  from '@playwright/test';

test('Test 1', async ({ page }) => {
  await page.goto('https://example.com');
  expect(await page.title()).toBe('Example Domain');
});

test('Test 2', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.title()).toContain('Playwright');
});
