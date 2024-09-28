const box = {x:10,y:20};
Object.freeze(box);

const shape = box;

shape.x = 100;
shape.y = 20;

console.log(shape);   // { x: 10, y: 20 }

// freez karne ke baad us object ki property ko chnage nahi kaar sakte h.
// new object bhi by defaut freeze hoga.