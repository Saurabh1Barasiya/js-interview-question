// Kya hai every() method?
// every() ek JavaScript array method hai jo check karta hai ki array ke sabhi elements ek condition ko satisfy karte hain ya nahi.

// Agar saare elements condition satisfy karte hain, to ye true return karega.
// Agar koi ek bhi element condition satisfy nahi karta, to ye false return karega.


// array.every(callback(element, index, array), thisArg);

// Parameters
// callback: Ek function jo har element par call hota hai.
// element: Current element jo check ho raha hai.
// index (optional): Current element ka index.
// array (optional): Array jisme every() call kiya gaya hai.
// thisArg (optional): this ke liye value jo callback ke andar use karni ho.


// Return Value
// true: Agar saare elements condition satisfy karein.
// false: Agar koi ek bhi element condition satisfy na kare.


const numbers = [2,4,6,8,10];
console.log(numbers.every((ele)=>ele>0));   //true

console.log(numbers.every((ele)=>ele<0));   //false


console.log(numbers.every((ele)=>ele%2 == 0));   // true


// Callback function check kar rahi hai ki kya har number even hai (num % 2 === 0).
// Saare elements even hain, to result true hai.




console.log("------------imp question---------------------");

const emptyArray = [];
const result = emptyArray.every(x => x > 10);
const result1 = emptyArray.every(x => x < 10);
// const result2 = emptyArray.every(x => x > 10);

console.log(result); // Output: true
console.log(result1); // Output: true


// Agar array empty hai, to every() hamesha true return karega, kyunki koi condition fail hone wala element hi nahi hai.




const marks = [75, 80, 85, 90];
const isAllPass = marks.every(mark => mark >= 40);

console.log(isAllPass); // Output: true




const temperatures = [22, 23, 21, 24];
const isIdealWeather = temperatures.every(temp => temp >= 20 && temp <= 25);

console.log(isIdealWeather); // Output: true




