// String constructor and String function

const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
console.log(a instanceof String); // is true
console.log(b instanceof String); // is false
console.log(typeof a); // "object"
console.log(typeof b); // "string"


console.log(a);   // [String: 'Hello world']
console.log(b);   // Hello world
