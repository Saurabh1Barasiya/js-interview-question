// find vovel and consonent in an string.

let str = "saurabh";

const vovel = ['a','e','i','o','u','A','E','I','O','U'];

const v = [];
const c = [];
for(let ele of str){
    if(vovel.includes(ele)){
        v.push(ele);
    }else{
        c.push(ele);
    }
}

console.log(v.join(''));
console.log(c.join(''));

