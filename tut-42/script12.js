// find() ek JavaScript array method hai jo pehle element ko return karta hai jo ek given condition ko satisfy kare.

// Matlab:

// Agar condition ka koi bhi element true deta hai, to pehla matching element return hota hai.
// Agar koi bhi element condition satisfy nahi kare, to undefined return hota hai.


// array.find(callback(element, index, array), thisArg);


// Returns
//     Pehla element jo condition satisfy karta hai.
//     Agar koi bhi element condition satisfy nahi kare, to undefined return hota hai.


const numbers = [10, 20, 30, 40, 50];
const num = numbers.find((ele)=> ele> 5);
console.log(num);   // 10





const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];
  
const user = users.find(user => user.name === "Bob");
  
console.log(user); // Output: { id: 2, name: "Bob" }



// Returning undefined.
const numbers2 = [1, 2, 3, 4, 5];
const result = numbers2.find(num => num > 10);

console.log(result); // Output: undefined

  