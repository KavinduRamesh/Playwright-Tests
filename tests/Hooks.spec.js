import {test , expect} from '@playwright/test' ;

test.beforeAll(async() => {
     
    console.log('This is Before All');

})

test.beforeEach(async() => {
     
    console.log('This is Before Each');
    
})

test.afterAll(async() => {
     
    console.log('This is After All');
    
})

test.afterEach(async() => {
     
    console.log('This is After Each');
    
})

test('Test 1', async() => {
     
    console.log('This is Test 1');
    
})

test('Test 2', async() => {
     
    console.log('This is Test 2');
    
})
