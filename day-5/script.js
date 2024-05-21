/*

Object.defineProperty() Method
Hum Object.defineProperty() method ka use karke aadhar property ko define karenge aur usse immutable bana denge. Is method ka use karte waqt hum kuch attributes set kar sakte hain, jaise writable, enumerable, aur configurable.

writable: Agar false set karenge, toh property ki value change nahi ki ja sakti.
enumerable: Agar false set karenge, toh property enumeration (jaise for...in loop) mein appear nahi hogi.
configurable: Agar false set karenge, toh property ko delete nahi kiya ja sakta aur uske attributes change nahi kiye ja sakte (excluding value and writable).

*/


let myData = {
    name:"Hero",
    age:24,
    aadhar:"123456789",
}

Object.defineProperty(myData,"aadhar",{
    writable:false,
    // configurable: false,
    // enumerable:false
});

myData["aadhar"] = "chage"; // ab change nahi ho sakta.

delete myData["aadhar"];  // delete bhi nahi hoga.

console.log(myData);

console.log(Object.keys(myData)); // (2) ['name', 'age']


// Object.defineProperty(myData,"aadhar",{
//     writable:false,
//     configurable: false,
//     enumerable:false
// })

// myData["aadhar"] = "chage"; // ab change nahi ho sakta.

// delete myData["aadhar"];  // delete bhi nahi hoga.

// console.log(myData);

// console.log(Object.keys(myData)); // (2) ['name', 'age']

