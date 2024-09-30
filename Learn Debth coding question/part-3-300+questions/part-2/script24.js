// create a function add without using a function and arrow function.

// jo bhi last argument hoga vo function body hogi.

const add = new Function('a','b','console.log(a+b);');
add(5,5);   // 10
