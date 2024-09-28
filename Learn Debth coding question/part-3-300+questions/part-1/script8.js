(function(){
    var a = 3;
    b = 3;
})();

// b window me jakar add ho jayega because undeclared h.


console.log(typeof a);   // undefined
console.log(typeof b);   // number

console.log(`a defined ${typeof a !== 'undefined'}`);  // false
console.log(`b defined ${typeof b !== 'undefined'}`);  // true


console.log(b);  // 3
// console.log(a);  // Uncaught ReferenceError: a is not defined
