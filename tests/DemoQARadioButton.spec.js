//@ts-check 

const { test } = require("@playwright/test");

test ('Radio button' , async({page}) => {
    await page.goto('https://demoqa.com/automation-practice-form',{timeout : 40000});
    await page.locator('//label[normalize-space()="Male"]',).click({ timeout: 5000 });
    await page.locator('//label[normalize-space()="Female"]').check();
    await page.waitForTimeout(10000);
})