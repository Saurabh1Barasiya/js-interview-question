const num1 = Number();
const num2 = Number(undefined);

console.log(`num1 = ${num1}`);  // 0
console.log(`num2 = ${num2}`);  // NaN

// Number() -> ke ander kusch paas nahi karge to 0 
// or pass kar rahe ho to usko number me convert kero
// if convert nahi kar paye to NaN return kr do.