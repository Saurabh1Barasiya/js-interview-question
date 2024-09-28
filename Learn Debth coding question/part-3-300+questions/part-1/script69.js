const animals = {};
let dog = {emoji : '🤦‍♂️'};
let cat = {emoji : '🤷‍♀️'};

animals[dog] = {...dog,name:"Dug"};
animals[cat] = {...cat,name:"Bux"};

console.log(animals[dog]);    // {emoji : '🤷‍♀️',name:'Bux'}

