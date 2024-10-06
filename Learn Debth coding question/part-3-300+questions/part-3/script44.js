const arr = [{},'2','hello'];
delete arr[1];

console.log(arr.length);  // 3

// delete operator array mese delete to kar dega but empty space chod deta h.
// isiliye splice() ka use karna chahiye.

console.log(arr);   // [ {}, <1 empty item>, 'hello' ]