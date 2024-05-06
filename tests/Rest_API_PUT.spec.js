import {test,expect, request} from '@playwright/test'

test('Upadate a post' , async({request}) =>{
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1',{
   
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },

    data: {
        id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,  
    } 
    });
    
    expect(response.status()).toBe(200);

    const responseData = await response.json();
    expect(responseData.title).toBe('foo');

    const responseHeader = await response.headers();
    if (responseHeader['Content-type']){
        
        expect(responseHeader['Content-type']).toContain('application/json; charset=utf-8');
    }
    else{}
    
})