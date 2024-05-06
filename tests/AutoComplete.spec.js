//@ts-check

const { test } = require("@playwright/test");

test('auto complete', async({page}) => {
    await page.goto('https://alphagov.github.io/accessible-autocomplete/examples/');
    await page.locator('//input[@id="autocomplete-default"]').fill('au');

    //1st method
    // await page.keyboard.press('ArrowDown')
    // await page.keyboard.press('ArrowDown')
    // await page.keyboard.press('Enter')
    
    //2nd method
    await page.click('//li[@id="autocomplete-default__option--1"]');

    await page.waitForTimeout(5000);
})