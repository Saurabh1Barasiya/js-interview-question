// Kya hai Array.of()?
// Array.of() ek JavaScript ka method hai, jo ek naye array ko banata hai.
// Jo bhi arguments tum Array.of() me pass karte ho, wo ek array ke elements ban jate hain.

// Yeh method constructor confusion ko avoid karne ke liye useful hai, jo Array() ke saath ho sakta hai.


// Array.of(element1, element2, ..., elementN);
// element1, element2, ..., elementN: Array ke elements jo tum define karna chahte ho.


const arr = Array.of(1,2,3);
console.log(arr);    // [ 1, 2, 3 ]


// problem 
const emptyArr = Array(10);
console.log(emptyArr);     // [ <10 empty items> ]


const emptyArr1 = new Array(10);
console.log(emptyArr1);     // [ <10 empty items> ]



// Use-Cases
// Dynamic Array Creation: Jab tum specific elements ke saath ek nayi array create karna chaho.
// Avoid Confusion: Array.of() use karna safer hai, kyunki Array() ka behavior arguments ke basis par change hota hai.
// Array(): Agar ek number pass karo, to wo length set karta hai.
// Array.of(): Hamesha ek array banata hai, chahe ek single number ho ya multiple values.