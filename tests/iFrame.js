import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    
    // Open the QuillJS editor demo
    await page.goto('https://quilljs.com/standalone/full/');

    // Wait for the iframe to load
    const frame = await page.frameLocator('iframe');

    // Click inside the editor
    await frame.locator('.ql-editor').click();

    // Type inside the editor
    await frame.locator('.ql-editor').fill('Hello from Playwright!');

    console.log("Text entered successfully!");

    await browser.close();
})();
