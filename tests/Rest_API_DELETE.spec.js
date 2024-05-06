import {test,expect, request} from '@playwright/test'

test('Delete a post' , async({request}) =>{
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1')
 
    expect(response.status()).toBe(200);

    const responseHeader = await response.headers();
    if (responseHeader['Content-type']){

           expect(responseHeader['Content-type']).toContain('application/json; charset=utf-8');
    }
    else{}

})    