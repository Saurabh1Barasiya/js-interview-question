const arr = [1,2,3,4];
console.log(1 in arr);  // true
console.log(2 in arr);  // true
console.log(3 in arr);  // true
console.log(4 in arr);  // false

// in operator hamesha keys ko check karne ke liye use hoga h object par.
// Array is also objct.
console.log(Object.keys(arr));    //   [ '0', '1', '2', '3' ]
console.log(Object.values(arr));  //   [ 1, 2, 3, 4 ]
