function getType(...args){
    console.log(typeof args); // object.

    // check its array or not.

    console.log(Array.isArray(args));  // true
}
getType(108)