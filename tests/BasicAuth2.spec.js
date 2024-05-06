//@ts-check

const { test, expect } = require("@playwright/test");

test('basic auth 2', async({page}) => {
    //Define the basic auth credentials
    const username = "admin";
    const password = "admin";

    //Encode the credentials as base64 string

    const base64credentials = Buffer.from(`${username}:${password}`).toString("base64");

    //Set up the request interceptor to handle the basic auth

    await page.route('**/*', (route) => {
        const headers = {
            'Authorization' : `Basic ${base64credentials}`,
        };
        route.continue({headers});
    });

    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    const text =  await page.locator('div[class="example"] p').textContent();
    expect(text).toContain('Congratulations')

    await page.waitForTimeout(5000);
})