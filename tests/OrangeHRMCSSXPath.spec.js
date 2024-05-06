import { test, expect } from '@playwright/test';

test('OrangeHRM CSS Xpath demo', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',test.setTimeout(60000));

  await page.getByLabel('Password');
  console.log("await page.getByLabel('Password')");
//   await page.getByPlaceholder("Username").fill("Admin");
  await page.locator('css=input[placeholder="Username"]').fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button",{name:'Login'}).click();
  await page.getByAltText("profile picture").click();
  await page.getByText("Logout").click();
  await page.waitForTimeout(10000);

});