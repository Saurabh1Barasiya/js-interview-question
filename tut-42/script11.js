// Array.prototype.filter() in JavaScript


// filter() ek JavaScript array method hai jo ek naya array banata hai un elements ke saath jo ek given condition satisfy karte hain.

// Matlab:

// Ye original array ko modify nahi karta.
// Sirf unhi elements ko return karta hai jo true condition dete hain.

// array.filter(callback(element, index, array), thisArg);


// Parameters
// callback:
//      Ek function jo har element par call hota hai.
//      Isme 3 arguments milte hain:
//      element: Current element jo check ho raha hai.
//      index (optional): Current element ka index.
//      array (optional): Original array jisme filter() call kiya gaya hai.
//      thisArg (optional): this ke liye value jo callback ke andar use karna chahte ho.
// Returns
//      Ek naya array jisme sirf woh elements hote hain jo condition satisfy karte hain.
//      Agar koi bhi element condition satisfy nahi kare, to empty array return hota hai.


const numbers = [10,20,30,40,50,60,70,80,90];
const greaterThenFifty = numbers.filter((ele)=>ele>50);
console.log(greaterThenFifty);    // [ 60, 70, 80, 90 ]



const num = [1,2,3,4,5,6,7,8,9,10];
const filterArray = num.filter((ele)=> ele > 3 && ele < 9);
console.log(filterArray);       // [ 4, 5, 6, 7, 8 ]


const words = ["apple", "banana", "grape", "kiwi"];
const filteredWords = words.filter(word => word.length > 5);

console.log(filteredWords); // Output: ["banana"]




const users = ["Alice", "Bob", "Charlie", "David"];
const searchResult = users.filter(user => user.toLowerCase().includes("a"));

console.log(searchResult); // Output: ["Alice", "Charlie", "David"]


const products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
];
  
const expensiveProducts = products.filter(product => product.price > 500);
  
console.log(expensiveProducts);
// Output: [{ name: "Laptop", price: 800 }]
  


const data = [1, 2, null, 4, undefined, 6];
const validData = data.filter(item => item !== null && item !== undefined);

console.log(validData); // Output: [1, 2, 4, 6]





