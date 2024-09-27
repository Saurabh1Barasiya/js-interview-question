// Promise.any():

// Explanation: Promise.any() tab resolve karta hai jab koi bhi ek promise successfully resolve ho jaata hai. Agar sabhi promises reject ho jaayein, toh yeh AggregateError throw karta hai.

// Usage: Jab aapko sirf ek promise ka result chahiye aur baaki promises ki success ka wait nahi karna.

const p1 = Promise.reject('Error in p1');
const p2 = Promise.resolve(20);  
const p3 = Promise.reject('Error in p3');

Promise.any([p1, p2, p3])
  .then(result => console.log(result)) // 20    
  .catch(error => console.log(error)); // Agar sab reject ho jaayein toh error aayega

// Difference: Promise.any() ko sirf ek promise ka resolve hone ka wait hota hai, chahe baaki reject ho jaayein.