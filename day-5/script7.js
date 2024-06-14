let arr = [1,2,3,4];
arr[10] = "hello";  // its not gives a error.
console.log(arr);     // [ 1, 2, 3, 4, <6 empty items>, 'hello' ]

// now if i want to access arr[5] so its give me undefined.
