// Count the Number of Vowels and Consonants in a String.

const string = "hello";

const vovelArr  = ['a','e','i','o','u','A','E','I','O','U'];


const vovel = [];
const consonent = [];

for(let char of string){
    if(vovelArr.includes(char)){
        vovel.push(char);
    }else{
        consonent.push(char);
    }
}

console.log("Vovels ",vovel);
console.log("consolents ",consonent);

console.log("Totel Vovels ",vovel.length);
console.log("Totels consolents ",consonent.length);


/*
    Vovels  [ 'e', 'o' ]
    consolents  [ 'h', 'l', 'l' ]
    Totel Vovels  2
    Totels consolents  3
*/