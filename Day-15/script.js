// filter method.
// filter method always return a new array based on a condition.
// in a new array. it contains all value where the condition gives you true value.
// its also a higher order function .

// thoes function wich take a function as an input or return a new function are called higher order function.

let arr = [1,2,3,4,5,6,7,8,9,10];

let evenArray = arr.filter((ele)=>{
    return ele % 2 === 0;
})

console.log(evenArray); // [ 2, 4, 6, 8, 10 ]
// console.log(arr); 