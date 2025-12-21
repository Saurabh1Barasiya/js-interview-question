// placed array all zeros at the starts then ones then twos.



let arr = [0,0,1,1,2,2,0,0,1,1,0,2,2,1];

let zeros = arr.filter(num=>num===0);
let ones = arr.filter(num=>num===1);
let twos = arr.filter(num=>num===2);

let ans = zeros.concat(ones,twos);

// console.log([...zeros,...ones,...twos]);  // [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2 ]

console.log(ans); // [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2 ]