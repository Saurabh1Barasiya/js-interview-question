// what's the diffrence between splice and slice...

// The slice() method is used to extract a portion of an array.
// concat and returns a new array containing the extracted elements.

let array = [1,2,3,4,5,6,7,8,9,10];
let newArray = array.slice(0);  // 0 index se lekar sare element de do.  
console.log(newArray);   //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].

let subArray = array.slice(0,5);
console.log(subArray);  // [ 1, 2, 3, 4, 5 ]


// now learn about splice.

let myArray = ["Saurabh","peeyush","suhani","naina"];



myArray.splice(0,1);  // iska matlab ye h ki O'th index se 1 element delete kar do.
console.log(myArray);


let myArray1 = ["Saurabh","peeyush","suhani","naina","ajay","rohan"];
console.log(myArray1);

myArray1.splice(1,1,"******");  // iska matlab first index se 1 element delete kero or usi index par "******" add kar do.
console.log(myArray1);   // [ 'Saurabh', '******', 'suhani', 'naina', 'ajay', 'rohan' ]










