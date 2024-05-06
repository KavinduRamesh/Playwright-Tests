import test from "@playwright/test";

test('Filtering locators',async({page}) => {
await page.goto('https://opensource-demo.orangehrmlive.com/');
await page.getByPlaceholder("Username").fill("Admin");
await page.getByPlaceholder("Password").fill("admin123");
await page.getByRole("button",{name:'Login'}).click();

//filtering by test
// await page.getByRole('listitem').filter({hasText :/Leave/}).click();

//filtering by child/descendants
await page.getByRole('listitem').filter({has :page.getByRole('link',{name : "Leave2"})}).click();
await page.waitForTimeout(10000);

})