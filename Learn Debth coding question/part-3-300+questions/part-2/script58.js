const arr = [1,4,5,[4,5,[6,[3]]]];
const newArray = arr.flat(Infinity);
console.log(newArray);  //  [ 1, 4, 5, 4, 5, 6, 3 ]
  