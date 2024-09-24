// The spread (...) and rest (...) operators in JavaScript both use the ... syntax but serve different purposes depending on the context in which they are used.

// 1. Spread Operator (...):
// The spread operator is used to expand or spread elements from an array, object, or iterable into individual elements.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1,...arr2];
console.log(arr3);    // [ 1, 2, 3, 4, 5, 6 ].



// unpacking.

let [a,b,c] = arr1; 
console.log(a,b,c);  // 1 2 3

// do object ko 1 object me merge karna h .
const obj1 = { name: "Saurabh", age: 21 };
const obj2 = { country: "India" };

const obj3 = {...obj1,...obj2};

console.log(obj3);   // { name: 'Saurabh', age: 21, country: 'India' }.

// -----------------------------------------------------------


let myArry = [1,2,3,4];

function demo(a,b,c,d) {
    console.log(a,b,c,d);     // 1 2 3 4.
    console.log(a+b+c+d);     // 10
}
demo(...myArry);









