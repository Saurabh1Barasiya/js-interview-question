// rest parameter.

// The rest operator is used to collect or gather multiple arguments into a single array or object. It allows functions to accept an indefinite number of arguments.


function sum(...numbers){
    return numbers.reduce((acc,arrr)=>acc+arrr,0);
}
const result = sum(1,2,3,4,5);
console.log(result);  // 15

// if hamare function me or bhi parameter h to rest operator hamesha last me hi rahega.





// ==========================================================================
// Destructuring Objects: Gathers the remaining properties into another object.

const { name, ...otherDetails } = { name: "Saurabh", age: 21, country: "India" };
console.log(name);          // "Saurabh"
console.log(otherDetails);  // { age: 21, country: "India" }



