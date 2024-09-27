// In JavaScript, Promises are used to handle asynchronous operations. There are different methods to work with multiple promises at the same time, like Promise.all(), Promise.any(), Promise.allSettled(), and Promise.race(). Let’s understand each one in Hinglish along with their



// 1. Promise.all():
// Explanation: Promise.all() ek method hai jo tab execute hota hai jab saare promises resolve ho jaate hain. Agar ek bhi promise reject ho gaya, toh pura Promise.all() reject ho jaayega.

// Usage: Jab aapko multiple asynchronous operations ka result ek saath chahiye, and saare promises ko resolve hone ka wait kar rahe ho.

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

// Promise.all([]) list leta h. list ke ander ham sare promise ko send karte h.

Promise.all([p1,p2,p3])
.then((result)=>{console.log(result);}) // [ 10, 20, 30 ]
.catch((error)=>{console.log(error);}); // Agar koi reject ho gaya toh error ayegi

// Difference: Agar ek bhi promise fail ho gaya toh Promise.all() reject ho jaata hai.
