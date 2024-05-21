// event capturing in js.

let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");

// console.log(red);
// console.log(green);
// console.log(blue);


window.addEventListener("click",(e)=>{
    console.log("window clicked.")
},{capture:true})

document.addEventListener("click",(e)=>{
    console.log("document clicked.");
},{capture:true});

document.body.addEventListener("click",(e)=>{
    console.log("body clicked.");
},{capture:true});

red.addEventListener("click",(e)=>{
    console.log("Red clicked.");
},{capture:true});

green.addEventListener("click",(e)=>{
    console.log("green clicked.");
},{capture:true});

blue.addEventListener("click",(e)=>{
    console.log("blue clicked.");
    e.stopPropagation();
},{capture:true});


// event capturing means -> event parent se flow hokar child tak jata h or sabse bada parent window hota h.