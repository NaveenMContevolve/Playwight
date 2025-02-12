import { chromium , devices} from 'playwright';

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
        ...devices['iPhone 13 Pro']
    });

    const page = await context.newPage();
    await page.goto('https://www.google.com');

    // Take a screenshot
    await page.screenshot({ path: 'mobile_google.png' });

    console.log("Mobile emulation successful!");
    await browser.close();
})();
