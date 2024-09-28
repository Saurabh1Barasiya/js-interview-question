const one = false || {} || null;
const two = null || false || '';
const three = [] || 0 || true;

console.log(one);      // {}
console.log(two);      // ''
console.log(three);    // []


console.log([] || true);   // []

