const obj = {};

const set1 = new Set();
const set2 = new Set();

set1.add(obj);
set1.add(obj);  // duplicate argument are not allowed.



set2.add({});  // yaha jo object add  kar rahe h vo alag alag reference ko point kar raha h.
set2.add({});

console.log(set1.size);  // 1
console.log(set2.size);  // 2