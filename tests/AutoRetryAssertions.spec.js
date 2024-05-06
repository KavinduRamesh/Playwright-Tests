import {test,expect} from '@playwright/test';

test('Auto Retry Assertions', async({page}) =>{
    await page.goto('https://seleniumbase.io/demo_page')

    const Text = await page.locator('//h1[normalize-space()="Demo Page"]');
    await expect(Text).toContainText('Demo Page');

    const Dropdown = await page.locator('//select[@id="mySelect"]');
    await expect(Dropdown).toHaveClass('selectClass');

    const Checkbox = await page.locator('//input[@id="checkBox3"]');
    await Checkbox.check();
    await expect(Checkbox).toBeChecked();
    await page.waitForTimeout(5000);

    const links = await page.locator('//a[@id="myLink1"]');
    await expect(links).toHaveAttribute('href','https://seleniumbase.com');

})

