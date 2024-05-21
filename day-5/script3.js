// me nahi chata ki kabhi aadhar delete ho.

let myData = {
    name:"Hero",
    age:24,
    aadhar:"123456789",
}

Object.defineProperty(myData,"aadhar",{
    configurable:false
});


delete myData["aadhar"]; // aadhar ki value ab delete nah hogi.

console.log(myData);