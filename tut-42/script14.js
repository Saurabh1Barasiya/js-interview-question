// Kya hai findLast() method?
// findLast() ek JavaScript array method hai jo last element ko return karta hai jo ek given condition ko satisfy kare. Ye find() method ka ulta kaam karta hai, kyunki ye piche se search shuru karta hai.

// Agar koi bhi element condition satisfy nahi kare, to ye undefined return karta hai.


// array.findLast(callback(element, index, array), thisArg);


// Parameters
// callback:
//     Ek function jo har element par call hota hai.
//     Isme 3 arguments milte hain:
//     element: Current element jo check ho raha hai.
//     index (optional): Current element ka index.
//     array (optional): Original array jisme findLast() call kiya gaya hai.
//     thisArg (optional): this ke liye value jo callback function ke andar use karni ho.
// Returns
//     Last matching element jo condition satisfy kare.
//     Agar koi bhi element condition satisfy nahi kare, to undefined return hota hai.


const numbers = [10, 20, 30, 40, 50];
const last = numbers.findLast(num => num > 25);

console.log(last); // 50


const numbers1 = [1, 2, 3, 4, 5];
const last1 = numbers1.findLast(num => num > 10);   
console.log(last1);     // undefined



const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];
  
const last2 = users.findLast(user => user.name.startsWith("C"));
  
console.log(last2); // Output: { id: 3, name: "Charlie" }