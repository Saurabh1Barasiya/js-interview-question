// Kya hai Array.concat()?
// Array.concat() ek JavaScript ka method hai, jo do ya zyada arrays ko merge karta hai (combine karta hai) aur ek naya array return karta hai.

// Yeh original arrays ko modify nahi karta. Instead, ek naya array banata hai.



// const newArray = array1.concat(array2, array3, ..., arrayN);
// array1: Pehla array jisme baaki arrays add karne hain.
// array2, array3, ..., arrayN: Wo arrays (ya values) jo tum merge karna chahte ho.


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);

console.log(combined);
// Output: [1, 2, 3, 4, 5, 6]



const arr3 = [1];
const arr4 = [2, 3];
const arr5 = [4, 5, 6, 7, 8];
const combined1 = arr3.concat(arr4, arr5);

console.log(combined1);
// Output: [1, 2, 3, 4, 5, 6 ,7 ,8]




const arr = [10, 20];
const combined2 = arr.concat(30, 40);

console.log(combined2);
// Output: [10, 20, 30, 40]






