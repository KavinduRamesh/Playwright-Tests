//@ts-check

const { test, expect } = require("@playwright/test");

test('Nested Iframe handling', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/nested_frames');
    const MainFrame = await page.frameLocator('[name="frame-top"]');

    const LeftFrame = await MainFrame.frameLocator('[name="frame-left"]').locator('body').textContent();
    console.log(LeftFrame);

    const MiddleFrame = await MainFrame.frameLocator('[name="frame-middle"]').locator('body').textContent();
    console.log(MiddleFrame);

    const RightFrame = await MainFrame.frameLocator('[name="frame-right"]').locator('body').textContent();
    console.log(RightFrame);

    await page.waitForTimeout(5000);
})


