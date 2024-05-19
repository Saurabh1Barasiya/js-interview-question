async function foo(){
    return "Hello";
}

const result = foo();
console.log(result);   // Promise { 'Hello' }.

// guess the output ?

// 👀👀👀👇👇👇 output. 

// Promise { 'Hello' }
// because async function always return a Promise.