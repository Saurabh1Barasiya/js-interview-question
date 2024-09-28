// ye bhi object destructring ka part h.

const {fname:newName} = {fname:"MR.x"};
// console.log(fname);  // ReferenceError: fname is not defined

// hamne fname ka naya name rakh diya h  to unko name newName se access karna padegaa.

console.log(newName); // MR.x