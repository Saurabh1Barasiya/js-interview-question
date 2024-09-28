const obj = {1:"a",2:"b",3:"c"};
const set = new Set([1,2,3,4,5]);


// object me key hamesha string hi hogi
//,chahe ham number kyo na pass kare.

console.log(obj.hasOwnProperty("1"));  // true
console.log(obj.hasOwnProperty(1));   // true


// ye object se alag hota h isme jo value app dete h vahi check hogi.
console.log(set.has("1")); // false
console.log(set.has(1));   // true.