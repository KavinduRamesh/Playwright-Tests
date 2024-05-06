//@ts-check

const { test, expect } = require("@playwright/test");

test('iframe handling', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/iframe');
    const frameArea =  await page.frameLocator('#mce_0_ifr').locator('#tinymce');
    await frameArea.fill('Testing tutorial using playwright');
    await expect(frameArea).toHaveText('Testing tutorial using playwright');

    await page.waitForTimeout(5000);
})