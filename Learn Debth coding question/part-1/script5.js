const a = {};
const b = {key:"b"};
const c = {key:"c"};

// object ki key ya to string yato symbol hogi. but 
// yaha to kuch or hi ho raha h.

a[b] = 146;
a[c] = 286;


// javascript a[b] = 146; is line ko a["[object Object]"] me convert kar degi.

/*

a = {
    "[object Object]" : 146,
    "[object Object]" : 246,
}


*/

console.log(a[b]);