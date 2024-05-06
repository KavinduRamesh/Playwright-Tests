import { test, expect } from '@playwright/test';

test('OrangeHRMcodegen', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',test.setTimeout(60000));
  await page.locator('html').click();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Password').click();
  await page.getByText('UsernamePassword Login Forgot').click();
  await page.getByRole('button', { name: 'Login' }).click();
});