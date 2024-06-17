// map function hame 1 new array return karta hai.
// existing array ke base par.
// map function array ke har 1 element par apply ho jata hai.

// map is always return a new array.

// map is also a higher order function....

// higher order function are thoes function wich takes function as an input
// or return a function as an output.

// so map takes a callback function as an input. it means ita a higher order function.



let arr = [1,2,3,4,5,6,7,8,9];
console.log("Original Array",arr);

const modifiedArray = arr.map((ele)=>{
    return ele + 10;
});

console.log("Modified Array",modifiedArray);

