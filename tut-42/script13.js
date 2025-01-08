// Kya hai findIndex() method?
// findIndex() ek JavaScript array method hai jo ek pehle element ke index ko return karta hai jo ek given condition ko satisfy kare.

// Agar koi bhi element condition satisfy nahi kare, to ye -1 return karta hai.



// array.findIndex(callback(element, index, array), thisArg);




// Parameters
// callback:
//     Ek function jo har element par call hota hai.
//     Isme 3 arguments milte hain:
//     element: Current element jo check ho raha hai.
//     index (optional): Current element ka index.
//     array (optional): Original array jisme findIndex() call kiya gaya hai.
//     thisArg (optional): this ke liye value jo callback ke andar use karna chahte ho.
// Returns
//     Pehle matching element ka index jo condition satisfy kare.
//     Agar koi bhi element condition satisfy nahi kare, to -1 return hota hai.


const numbers = [10, 20, 30, 40, 50];
const index = numbers.findIndex((number)=>number>=20);
console.log(index);   // 1




// When No Match is Found.
const numbers1 = [1, 2, 3, 4, 5];
const found = numbers1.findIndex((ele)=> ele < 0);
console.log(found);   // -1



const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];

const index1 = users.findIndex((person)=>person.name === "Alice");
console.log(index1);   // 0.

