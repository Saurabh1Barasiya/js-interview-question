const obj = {};
obj[obj["A"] = "B"] = "C";

console.log(obj);  // { A: 'B', B: 'C' }

/*
const obj = {};
obj["A"] = "B"
const key = obj["A"];
obj[key] = "C"
*/
