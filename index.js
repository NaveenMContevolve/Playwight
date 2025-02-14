import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.htmlelements.com/demos/button/shadow-dom/index.htm');

    
    const shadowHost = page.locator('smart-ui-button').first();

    
    const shadowButton = await shadowHost.evaluateHandle(el => el.shadowRoot.querySelector('button'));

   
    await (await shadowButton).click();

    console.log("Shadow DOM button clicked!");

    await browser.close();
})();
