const data = 100;

// 100 ko string me convert kar dega.
console.log(data.toString()); // 100  


// ye kyo nahi chal raha 👇👇👇

// console.log(100.toString());

// 👆👆👆👆

// js me . kisi object ke element ko access karne ke liye lagate h
// ya decimal me repersent karne ke liye 
// yaha js confuse ho gayi .


// aese ham isko fix kar sakte h.

console.log((100).toString());  // 100
console.log(100..toString());   // 100