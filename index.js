import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.htmlelements.com/demos/button/shadow-dom/index.htm');

    // Locate the first button inside Shadow DOM
    const shadowHost = page.locator('smart-ui-button').first();

    // Access Shadow Root and find the button inside
    const shadowButton = await shadowHost.evaluateHandle(el => el.shadowRoot.querySelector('button'));

    // Click the button
    await (await shadowButton).click();

    console.log("Shadow DOM button clicked!");

    await browser.close();
})();
