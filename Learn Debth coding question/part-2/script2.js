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



// Promise.allSettled() ka matlab hota hai ki aapko saare promises ka final status pata chalega, chahe wo resolve ho ya reject.

// Yeh method har ek promise ke baare mein detail return karta hai:

// Fulfilled (resolved) promises ka result status: "fulfilled" ke saath aayega.
// Rejected promises ka result status: "rejected" aur reason ke saath aayega.
// Aapko har promise ka status pata chalega bina reject hone ka tension liye, kyunki Promise.allSettled() kabhi fail nahi hota.
// done.