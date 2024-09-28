const numbers = [1,2,3];
numbers[5] = 11;
console.log(numbers);  // [ 1, 2, 3, <2 empty items>, 11 ]



const changeNumbers = [1,2,3];
changeNumbers[10] = 11;
console.log(changeNumbers);   // [ 1, 2, 3, <7 empty items>, 11 ]