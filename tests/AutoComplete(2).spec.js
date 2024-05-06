//@ts-check
//3rd method

const { test } = require("@playwright/test");

test('auto complete part2', async({page}) => {

    const searchvalue = "au";
    const selectvalue = "Macau";

    await page.goto('https://alphagov.github.io/accessible-autocomplete/examples/');
    await page.locator('//input[@id="autocomplete-showAllValues"]').type(searchvalue,{delay:100});
   
    const values = page.locator('//ul[@id="autocomplete-showAllValues__listbox"]/li')

    for (let i = 0; i<await values.count(); i++)
    {
        const text = await values.nth(i).textContent();

        if(text === selectvalue)
        {
            await values.nth(i).click()
            break;
        }
    }
    await page.waitForTimeout(5000);
})