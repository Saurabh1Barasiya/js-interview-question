let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

let fruitCount = fruits.reduce((accumulator, fruit) => {
    if (!accumulator[fruit]) {
        accumulator[fruit] = 1;
    } else {
        accumulator[fruit]++;
    }
    return accumulator;
}, {});

console.log(fruitCount); 
// Output: { apple: 3, banana: 2, orange: 1 }


/*
let accumulator = {};
console.log(accumulator['banana'])   // undefined 

console.log(Boolean(!undefined));    // true.
if (!accumulator['banana']){
    console.log(212)
}

*/