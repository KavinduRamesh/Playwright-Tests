//@ts-check 

const { test } = require("@playwright/test");

test ('Handling Checkbox button' , async({page}) => {
    await page.goto('https://demoqa.com/automation-practice-form',{timeout: 65000});

    await page.locator('//label[normalize-space()="Sports"]',).click({ timeout: 5000 });
    await page.locator('//label[normalize-space()="Reading"]').check();

    await page.locator('//label[normalize-space()="Reading"]').uncheck();
   
})