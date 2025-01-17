// console.log("hello")

// clone a oject.


function deepClone(myObj){
    if(typeof myObj !== "object" || myObj === null){
        return myObj;
    }

    // ab pakka ye object h ya array h.

    var coppiedObj = Array.isArray(myObj) ? [] : {};

    var keys = Object.keys(myObj); 

    for (let index = 0; index < keys.length; index++) {
        coppiedObj[keys[index]]  = deepClone(myObj[keys[index]]);
    }

    return coppiedObj;
}

var obj = {
    fname:"saurabh",
    address:{
        city:"Harrai",
        dist:"Chhindwara",
    }
}

const clonedObj = deepClone(obj);
console.log("Cloned object",clonedObj);
console.log("Original object",obj);

clonedObj.fname = "peeyush";
clonedObj.address.city = "Harrai new";

console.log("After chnage cloned object...........")

console.log("Original object",obj);
console.log("Cloned object",clonedObj);