// WeakMap me object ko key set kar sakte h.

const dataMap = new WeakMap();

let person = {name : 'JS'};
dataMap.set(person,"TVA");

console.log(dataMap.get(person));     // TVA
person = null;
console.log(dataMap.get(person));    //  undefined