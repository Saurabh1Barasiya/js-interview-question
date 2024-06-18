// know about flatmap() in js

// ye function map() and flat() ka combination hota h.

// ye map() ke result par flat() ko apply kar deta h.

// but yaha par depth kaam nahi karti ho normal flat() par kaam karti h.


const myArray = [
    {id:1,name:"saurabh",skills:['html','css','javascript']},
    {id:2,name:"peeyush",skills:['python','nodejs']},
    {id:3,name:"suhani",skills:['pega',]},
    {id:4,name:"anu",skills:['machine learning','java','python']},
]

// console.log(myArray);

/*

let skillsArray = myArray.map((ele)=>{
    return ele.skills;
});

// console.log(skillsArray);

flattenArray = skillsArray.flat();

console.log(flattenArray);

[
    'html',
    'css',
    'javascript',      
    'python',
    'nodejs',
    'pega',
    'machine learning',
    'java',
    'python'
]

*/

// doing with the help of chain .


var skillsArray = myArray.map((ele)=>{
    return ele.skills;
}).flat();

console.log(skillsArray);

[
    'html',
    'css',
    'javascript',      
    'python',
    'nodejs',
    'pega',
    'machine learning',
    'java',
    'python'
]
// map ke result par flat laga diya same yahi kaam flatmap karta hai.
// will see in next file.