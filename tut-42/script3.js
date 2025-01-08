// Kya hai Array.isArray()?
// Array.isArray() ek JavaScript ka built-in method hai, jo check karta hai ki ek value (variable) array hai ya nahi.
// Yeh method true return karega agar value ek array hai, aur false agar array nahi hai.

// Array.isArray(value);

// value: Wo value ya variable jo tumhe check karna hai ki array hai ya nahi.

console.log(Array.isArray([1,2,3]));     // true
console.log(Array.isArray("saurabh"));   // false
console.log(Array.isArray({"kese jo":"baadhiya"}));  // false

console.log(Array.isArray([]));      // true

console.log(Array.isArray(arguments));    // false




// Common Mistake
// Agar tum typeof use karte ho arrays ke liye:

console.log(typeof [1, 2, 3]); 

// Output: "object" (confusing, kyunki yeh array hai)
// Isliye, hamesha Array.isArray() use karo for array checking.



