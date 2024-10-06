function test(){

    // aese nii banate h galat way h ye
    // const a = b,b = c,c = "hi";
    const a = b = c = "hi";
}

test();

console.log(typeof a); // undefined
console.log(typeof b); // string
console.log(typeof c); // string