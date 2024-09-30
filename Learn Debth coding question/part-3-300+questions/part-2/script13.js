const obj = {name : 'X'};
delete obj.name;



obj?.name = 'Y';  // error
// optional chaining ke shat ham log value assign nahi kar sakte h.
console.log(obj);