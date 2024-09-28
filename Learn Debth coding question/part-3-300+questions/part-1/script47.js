const obj = {a:'Mr.X',b:21};
const dat = {c:true,...obj};  // object destructring

console.log(dat);    // {c:true,a:'Mr.X',b:21};