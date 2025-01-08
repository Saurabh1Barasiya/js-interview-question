// Array.from() ek JavaScript function hai jo kisi bhi "iterable" ya "array-like" cheez ko ek real array mein convert kar deta hai.

// Kab use hota hai?
// Jab tumhare paas koi iterable object (jaise strings, NodeList, ya Set) ho aur tumhe usse ek array banana ho.
// Jab tum kisi iterable object par transformations ya operations apply karna chahte ho.


//              Array.from(iterableObject, mapFunction?, thisArg?)

//              iterableObject: Ye wo object hai jo tum convert karna chahte ho (e.g., string, NodeList, Set, etc.).
//              mapFunction (optional): Agar tum convert karte time har element par koi transformation karna chahte ho, toh yahan function likho.
//              thisArg (optional): Ye this context set karta hai mapFunction ke liye.



// 1. String ko array mein convert karna.
const myName = "saurabh";
const myNameArr  = Array.from(myName);
console.log(myNameArr);             //   ['s', 'a', 'u','r', 'a', 'b','h' ]


const lastName = "barasiya";
const lastNameArr = Array.from(lastName,(last)=>last.toUpperCase());
console.log(lastNameArr);          //   ['B','A', 'R','A', 'S', 'I','Y', 'A']



// set ko Array me convert kero.
const set = new Set([0,1,2,3,4,5,6]);
const arraySet = Array.from(set);

console.log(arraySet);      //    [ 0, 1, 2, 3, 4, 5, 6 ]


const newSet = new Set([10,20,30]);
const newSetArr = Array.from(newSet,(ele)=>ele*ele);
console.log(newSetArr);      //  [ 100, 400, 900 ]





