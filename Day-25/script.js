// Object.seal()
// Object.seal() ek object ko "sealed" state mein le aata hai. Iska matlab hai:

// Properties ko add ya delete nahi kar sakte: Ek baar object seal ho gaya to aap usme koi new properties add nahi kar sakte aur na hi koi existing properties ko delete kar sakte hain.
// Existing properties ko modify kar sakte hain: Aap existing properties ke values ko modify kar sakte hain, lekin properties ko reconfigure nahi kar sakte (jaise writable, configurable, enumerable attributes ko change karna).


const obj = {
    name: "John",
    age: 30
};

Object.seal(obj);

delete obj.age; // not allowed.

console.log(obj);


obj.gender = 'Male';  // not allowed.

console.log(obj);


obj.name = "change";  // Allowed.
console.log(obj);