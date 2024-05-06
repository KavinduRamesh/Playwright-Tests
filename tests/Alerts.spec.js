//@ts-check

const { test } = require("@playwright/test");
const { skip } = require("node:test");

test.skip('alert', async({page}) => {
    await page.goto('https://chercher.tech/practice/practice-pop-ups-selenium-webdriver');

    await page.on("dialog",async(a) => {
          console.log(await a.message())
          a.accept()
    })
    await page.waitForSelector('//input[@name="alert"]');
    await page.locator('//input[@name="alert"]')
    .click();
    await page.waitForTimeout(5000);
})

test.skip('Confirmation alert', async({page}) => {
    await page.goto('https://chercher.tech/practice/practice-pop-ups-selenium-webdriver');

    await page.on("dialog",async(b) => {
          console.log(await b.message())
          b.dismiss()
    })
    await page.locator('//input[@name="confirmation"]')
    .click();
    await page.waitForTimeout(10000);
})

test('Prompt alert', async({page}) => {
    await page.goto('https://chercher.tech/practice/practice-pop-ups-selenium-webdriver');

    await page.on("dialog",async(c) => {
          console.log(await c.message())
          c.accept('automation with playwright')
    })
    await page.locator('//input[@name="prompt"]')
    .click();
    await page.waitForTimeout(10000);
})