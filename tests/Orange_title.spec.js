//@ts-check

const {test,expect} = require("@playwright/test");

test('Validate OrangeHRM Website title',async({page})=> {

await page.goto('https://opensource-demo.orangehrmlive.com/');
await expect(page).toHaveTitle('OrangeHRM',{ timeout: 10000 });    
     
})



