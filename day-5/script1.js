// koi aadhar property ki value change na kar sake.

let myData = {
    name:"Hero",
    age:24,
    aadhar:"123456789",
}

Object.defineProperty(myData,"aadhar",{
    writable:false,
});

myData.aadhar = "change"; // ab change nahi ho sakta hai.

console.log(myData);