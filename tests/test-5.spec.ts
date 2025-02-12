import { chromium, test, expect } from '@playwright/test';

test('handle new window and form', async () => {
   
    const browser = await chromium.launch({ headless: false }); 
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://example.com');

    const [newContext] = await Promise.all([
        browser.newContext(), 
        page.evaluate(() => {
            window.open('https://www.w3schools.com/html/html_forms.asp', '_blank');
        })
    ]);

    const newPage = await newContext.newPage();
    await newPage.goto('https://www.w3schools.com/html/html_forms.asp'); 

    await newPage.waitForLoadState();

   
    await newPage.fill('input[name="fname"]', 'John');
    await newPage.fill('input[name="lname"]', 'Doe');

    await newPage.press('input[name="lname"]', 'Enter');

    console.log('Form automation successful!');

    await newPage.waitForTimeout(5000);

    await browser.close();
});
