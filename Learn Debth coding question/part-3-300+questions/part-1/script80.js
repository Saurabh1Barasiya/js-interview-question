const obj = {name:"Saurabh"};
obj.ref = obj;

const str = JSON.stringify(obj);
console.log(str);  // "{"name" : "Saurabh"}"