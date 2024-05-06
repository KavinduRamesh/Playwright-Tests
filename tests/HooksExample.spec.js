import {test , expect} from "@playwright/test";

test.beforeEach( async({page}) =>{
    await page.goto('https://www.google.com/');
    
})

test.afterEach( async({page}) =>{
    await page.close();
    
})

test('Verify title' ,async({page}) =>{

   const title = await page.title();
   expect(title).toBe('Google');
    
})

test('Verify url', async({page}) =>{
    
    const url = await page.url();
    expect(url).toBe('https://www.google.com/');
     
 })