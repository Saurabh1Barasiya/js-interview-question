let z = a = {};
a.name = 'JS';
console.log(z.name);  // 'JS'



/*

let z = a = {};
is effectively the same as writing:

javascript
Copy code
let a = {};
let z = a;

*/