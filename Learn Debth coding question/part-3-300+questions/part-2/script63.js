const obj = {fn:function(){}}
const arr = [function(){}]

const strA = JSON.stringify(obj);
const strB = JSON.stringify(arr);


console.log(strA);  // {}
console.log(strB);  // [null]


// if kisi object ke ander function h or app usko stringfy kar rahe ho to  vaha function hat jata h


// if kisi array ke ander function h or app usko stringfy kar rahe ho to  vaha function hat jata h or null aa jata h.
