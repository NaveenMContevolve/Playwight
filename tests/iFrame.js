import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    
    await page.goto('https://quilljs.com/standalone/full/');

    const frame = await page.frameLocator('iframe[title="Sandpack Preview"]'); 

    await frame.locator('.ql-editor').click();

    await frame.locator('.ql-editor').fill('Hello from Playwright!');

    console.log("Text entered successfully!");

    await browser.close();
})();
