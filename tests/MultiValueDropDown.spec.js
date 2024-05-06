//@ts-check

const { test } = require("@playwright/test");

test('Select Multiple Value in Dropdown' , async({page}) => {
      await page.goto('https://chercher.tech/practice/practice-dropdowns-selenium-webdriver');

      await page.locator('//select[@id="second"]').selectOption(['Pizza','Donut']);
      await page.waitForTimeout(5000);
}) 
