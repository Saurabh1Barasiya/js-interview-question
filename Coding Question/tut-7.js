// find vovel and consonent in an string.

let str = "saurabh";

const vovels = ['a','e','i','o','u','A','E','I','O','U'];

let v = [];
let c = [];

for(let char of str){
    if(vovels.includes(char)){
        v.push(char);
    }else{
        c.push(char);
    }
}
console.log("all the vovels",v);
console.log("all the consonents",c);