const data1 = ["C","B","A"];
const data2 = ["Z","Y","X"];

data1.toSorted();   // ye browser par chalena node par nahi.   ye ES23 me aaya h. new array return karta h .
data2.sort();

console.log({data1});      //  { data2: ['C', 'B', 'A'] }
console.log({data2});      // { data2: [ 'X', 'Y', 'Z' ] }

