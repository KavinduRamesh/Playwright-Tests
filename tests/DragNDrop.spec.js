//@ts-check

const { test, expect } = require("@playwright/test");

// test('Drag n Drop', async({page}) => {
//     await page.goto('https://webflow.com/made-in-webflow/website/Drag-and-Drop-Tricks',{timeout :60000});
//     const sourceElement = await page.locator('.draggable correct ui-draggable ui-draggable-handle');
//     const targetElement = await page.locator('.quiz-option.is-drop');

//     await sourceElement.dragTo(targetElement)
//     await page.waitForTimeout(5000);
// })

test('Drag N Drop', async({page}) => {
    test.slow();
    await page.goto('https://webflow.com/made-in-webflow/website/Drag-and-Drop-Tricks')

    await page.locator('.draggable correct ui-draggable ui-draggable-handle').hover();
    await page.mouse.down();

    await page.locator('.quiz-option.is-drop').hover();
    await page.mouse.up();

    await page.waitForTimeout(5000);
})