// 3. Promise.allSettled():
// Explanation: Promise.allSettled() saare promises ko settle hone ka wait karta hai, chahe wo resolve ho ya reject. Yeh kabhi reject nahi hota.
// Usage: Jab aapko saare promises ke outcome ka status chahiye, chahe wo resolve ho ya fail.

const p1 = Promise.resolve(10);
const p2 = Promise.reject('Error in p2');
const p3 = Promise.resolve(30);

Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results));
  
// Output: [
//   { status: 'fulfilled', value: 10 },
//   { status: 'rejected', reason: 'Error in p2' },
//   { status: 'fulfilled', value: 30 }
// ]


// Difference: Promise.allSettled() saare promises ka result dega, chahe resolve ho ya reject. Kabhi reject nahi karega.

// If you want to know the status.