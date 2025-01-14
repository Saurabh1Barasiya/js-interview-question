// Count the Number of Vowels and Consonants in a String.

const string = "hello";
const vovelsArr = ['a','e','i','o','u'];
// console.log(vovelsArr);

let v = [];
let c = [];
for(let chr of string){
    if(vovelsArr.includes(chr)){
        v.push(chr);
    }else{
        c.push(chr);
    }
}

console.log(v);
console.log(c);