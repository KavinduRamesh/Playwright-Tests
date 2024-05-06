import {test,expect} from '@playwright/test';

test('Rest API with GET', async({request}) => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    const response = await request.get(url);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.userId).toBe(1);
})

test('Testing complex JSON', async({page}) =>{
    const Url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await page.request.get(Url);

    await expect(response).toBeOK();
    const users = await response.json();
    await expect(users[0].id).toBe(1);
})