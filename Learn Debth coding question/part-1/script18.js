// concept of default argument.



function sum(a=5,b=7){
    // here the value a = null and b = 7.

    // due to type coresion null will be 0.

    //  0 + 20
    console.log(a+b);   // 20.
}
sum(null,20);

// agar ham value pass nahi karte to vo value add ho jati h.
// but hamne sum(null,20) pass kiya h.
// atleast hamne argument pass kiye h.

console.log(null + 40); // 40.

console.log(null + null); // 0.

console.log(null + "hello");  // nullhello