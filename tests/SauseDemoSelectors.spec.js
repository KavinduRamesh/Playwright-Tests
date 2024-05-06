//@ts-check 

const { test } = require("@playwright/test");

test ('Handling Selectors', async({page}) => {
    await page.goto('https://www.saucedemo.com/v1/');

    await page.locator('//input[@id="user-name"]').fill('standard_user');
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    await page.locator('//input[@id="login-button"]').click();

    await page.locator('//select[@class="product_sort_container"]').selectOption('hilo');
    await page.waitForTimeout(5000);
   
})