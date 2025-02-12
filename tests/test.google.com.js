import { test, expect } from 'playwright/test';

test('Google Search - Playwright vs Selenium', async ({ page }) => {
  
  // Navigate to Google
  await page.goto('https://www.google.com');

  // Handle "Accept All" button for cookies if present
  const acceptButton = page.locator('button:text("Accept all")');
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
    console.log("Accepted cookies");
  }

  // Fill the search box and press Enter
  await page.fill('input[name="q"]', 'Playwright vs Selenium');
  await page.press('input[name="q"]', 'Enter');

  // Wait for search results to load
  await page.waitForTimeout(2000);

  // Verify that search results are displayed
  await expect(page.locator('#search')).toBeVisible();

  console.log('Search completed');
});
