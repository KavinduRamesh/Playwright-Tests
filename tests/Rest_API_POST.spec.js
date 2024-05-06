import {test,expect} from '@playwright/test';

test('create a new post', async({request}) =>{
    const response = await request.post('https://jsonplaceholder.typicode.com/posts/',{

    headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
      
    Data: {
        title : 'This is a post',
        body: 'This is new body',
        userId: 1,
    }   
    });       

    expect(response.status()).toBe(201);

    const responseHeaders = response.headers();
    if (responseHeaders['Content-type']){

        expect(responseHeader['Content-type']).toContain('application/json; charset=utf-8');
    }
    else{};
});
