//@ts-check

const { test, expect } = require("@playwright/test");

test('basic auth', async({page}) => {
    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    const text =  await page.locator('div[class="example"] p').textContent();
    expect(text).toContain('Congratulations')

    await page.waitForTimeout(5000);
})