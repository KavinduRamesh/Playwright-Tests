//@ts-check

const { test } = require("@playwright/test");

test('single file upload', async({page}) => {
    await page.goto('https://west-wind.com/wconnect/wcscripts/fileupload.wwd',{timeout:60000});
    await page.locator('#upload').setInputFiles('C:/Users/MADHUSHA/Downloads/BroadcastChannel.png');
    await page.waitForTimeout(5000);
})