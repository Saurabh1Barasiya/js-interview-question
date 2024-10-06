// make sure no one can modify this object.

const obj = {
    name:"JS"
}

Object.freeze(obj);

obj.name = "java";

// freeze karne ke baad object me kuch bhi change nahi kar sakte h.
console.log(obj);  // { name: 'JS' }
