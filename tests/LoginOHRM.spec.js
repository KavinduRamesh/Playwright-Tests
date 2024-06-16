import { test, expect, Page } from '@playwright/test';



test.describe.configure({ mode: 'serial' });

test.beforeEach(async ({ page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });
    
    // test.afterEach(async ({page}) => {
    //     // await page.getByAltText("profile picture").click();
    //     // await page.getByText("Logout").click();
    //     // await page.waitForTimeout(10000);
    //   });
    
    test('Password & username Correct', async ({ page }) => {
      await page.getByPlaceholder("Username").fill("Admin");
      await page.getByPlaceholder("Password").fill("admin123");
      await page.getByRole("button",{name:'Login'}).click();
      await page.close();
    });
    
    test.fail('username incorrect', async ({ page }) => {
        await page.getByPlaceholder("Username").fill("Adminss");
        await page.getByPlaceholder("Password").fill("admin123");   
        await page.getByRole("button",{name:'Login'}).click();
        await page.soft.getByAltText("profile picture").click();
        await page.close();
    });

    test.fail('Password incorrect', async ({ page }) => {;
      await page.getByPlaceholder("Username").fill("Admin");
      await page.getByPlaceholder("Password").fill("admin1234");
      await page.getByRole("button",{name:'Login'}).click();
      await page.soft.getByAltText("profile picture").click();
      await page.close();
    });

    test.fail('Password & username incorrect', async ({ page }) => {;
      await page.getByPlaceholder("Username").fill("Admins");
      await page.getByPlaceholder("Password").fill("admin1234");
      await page.getByRole("button",{name:'Login'}).click();
      await page.soft.getByAltText("profile picture").click();
      await page.close();
    });

      test.fail('Password & username Empty', async ({ page }) => {
        await page.getByRole("button",{name:'Login'}).click();
        await page.soft.getByAltText("profile picture").click();
        await page.soft.getByAltText("profile picture").click();
        await page.close();
    });
// const Dropdown = await page.locator('//select[@id="mySelect"]');
