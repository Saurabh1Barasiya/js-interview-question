// guss the output.

/*
console.log("aaa");
setTimeout(()=>{
    console.log("hello");
},0);
console.log("bbb");

👀👀 the ouput is .

aaa
bbb
hello
*/



// =========================================================================================

// console.log("aaa");
// for (let i = 0; i < 2; i++) {
//     setTimeout(()=>{
//        console.log(i);
//     },0);
// }
// console.log("bbb");

/*
Output
    aaa
    bbb
    0
    1
*/

// ================================================================================

// console.log("aaa");
// for (var i = 0; i < 2; i++) {
//     setTimeout(()=>{
//        console.log(i);
//     },0);
// }
// console.log("bbb");

/*

    aaa
    bbb
    2
    2

*/




// ======================================================================================


// yaha par setTimeout ke ander hamne callback function paas nahi kiya isiliye sequence me answer aaya. 

// console.log("aaa");
// for (var i = 0; i < 2; i++) {
//     setTimeout(
//        console.log(i)
//     ,0);
// }
// console.log("bbb");


/*
    aaa
    0
    1
    bbb
*/



// ============================================================


console.log("aaa");
for (let i = 0; i < 2; i++) {
    setTimeout(
       console.log(i)
    ,0);
}
console.log("bbb");

/*
    aaa
    0
    1
    bbb
*/