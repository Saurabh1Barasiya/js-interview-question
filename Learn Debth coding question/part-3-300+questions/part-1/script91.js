

// ye browser par chalena node par nahi.   ye ES23 me aaya h. new array return karta h .

const data1 = ["C","B","A"];
const data2 = ["Z","Y","X"];

data1.toReversed();   // ye browser par chalena node par nahi.   ye ES23 me aaya h. new array return karta h
data2.reverse();      // original data me change kar dega.

console.log({data1});
console.log({data2});


// The toReversed() method reverses the order of the elements in an array. The toReversed() method returns a new array. The toReversed() method does not overwrites the original array. The toReversed() method is the copying version of the reverse() method.