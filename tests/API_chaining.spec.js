import {test,expect, request} from '@playwright/test'

test('API_chaining', async({request}) =>{

     const postResponse = await request.get('https://jsonplaceholder.typicode.com/posts')
     expect(postResponse.status()).toBe(200);

     //parse response body to JSON

     const posts = await postResponse.json();

     const firstPost = posts[0];
     console.log(firstPost);

     //get comments from the select post

     const commentsResponse = await request.get(`https://jsonplaceholder.typicode.com/posts/${firstPost.id}/comments`)
     expect(commentsResponse.status()).toBe(200);

     const comments = await commentsResponse.json();
     expect(comments.length).toBeGreaterThan(0);
     expect(comments[0].postId).toBe(firstPost.id);
     console.log(comments[0].postId);

})