import {test,expect} from '@playwright/test';

test('Non retry assertions' , async({page}) =>{
    await page.goto('https://seleniumbase.io/demo_page');

    const Title = await page.title();
    expect(Title).toBe('Web Testing Page');

    const AllCheckbox = await page.locator('//input[@type="checkbox"]').count();
    expect(AllCheckbox).toBeGreaterThanOrEqual(5);

    const Link_url = await page.locator('//a[@id="myLink1"]');
    expect(Link_url).toHaveAttribute('href','https://seleniumbase.com');

})