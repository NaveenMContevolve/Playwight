const { test, expect, chromium } = require('@playwright/test');

test('Mock API Call', async ({page}) => {

  await page.route('https://api.example.com/data', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ message: 'Mocked Response' }),
    });
  });

  await page.goto('https://example.com');
  const response = await page.evaluate(async () => {
    const res = await fetch('https://api.example.com/data');
    return res.json();
  });

  console.log(response); // { message: 'Mocked Response' }

  expect(response.message).toBe('Mocked Response');
});
