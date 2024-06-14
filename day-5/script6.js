function sum(a,b){
    return a + b;
}

console.log(sum(-1,'2'));  // -12


console.log(sum(1,-'2'));  // -1


// yaha par ye - string ke shat hai matlab '-2' pura string ka santence h.
console.log(sum(1,'-2'));  // 1-2