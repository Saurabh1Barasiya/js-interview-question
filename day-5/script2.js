// me nahi chata ki is object me loop karu to 

let myData = {
    name:"Hero",
    age:24,
    aadhar:"123456789",
}

Object.defineProperty(myData,"aadhar",{
    enumerable:false,
});



console.log(Object.keys(myData));  // ['name', 'age']


for (let key in myData) {
    console.log(`${key}  ----> ${myData[key]}`);
}

// Only loop nahi laga sakte h baki jo karna h kero.