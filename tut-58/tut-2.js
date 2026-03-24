// function currying using arrow function.

const sum = (a)=>(b)=>(c)=>(d)=>(e)=>a+b+c+d+e;
const ans = sum(100)(200)(300)(400)(500);
console.log("totel sum is ",ans);  // totel sum is  1500


const sumWithlessCode = a=>b=>c=>d=>e=>a+b+c+d+e;

const res = sumWithlessCode(10)(20)(30)(40)(50);
console.log("the result ",res);