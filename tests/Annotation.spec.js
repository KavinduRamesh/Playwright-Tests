import {test , expect} from '@playwright/test';

test.skip('Verify title', async({page}) => {
    test.slow();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const Title = await page.title();
    await expect(Title).toBe('OrangeHRM');
})

test.skip('Verify url', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const Url = await page.url();
    expect(Url).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
})

test.skip('Verify login', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const Button = await page.locator('//button[normalize-space()="Login"]');
    const ButtonText = await Button.textContent();
    await expect(ButtonText).toBe(" Login ");
})

test('Verify login 2', async({page}) => {
    test.fail()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const Button = await page.locator('//button[normalize-space()="Login"]');
    const ButtonText = await Button.textContent();
    await expect(ButtonText).toBe('Login');
})

test('Verify login 3', async({page}) => {
    test.fixme();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const Button = await page.locator('//button[normalize-space()="Login"]');
    const ButtonText = await Button.textContent();
    await expect(ButtonText).toBe('login');
})