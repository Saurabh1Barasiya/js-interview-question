let obj = {lang:'React'};

const lib = {};
lib.name = obj;

obj = null;

console.log(lib.name);  // { lang: 'React' }

// js me jab tak kisi object ka refrence count 1 rahta h vo object kabhi bhi
// garbage collect nahi hota h

lib.name = null;

console.log(lib);  // { name: null }