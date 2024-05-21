// event bubbling in js.

let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");

// console.log(red);
// console.log(green);
// console.log(blue);


window.addEventListener("click",(e)=>{
    console.log("window clicked.")
})

document.addEventListener("click",(e)=>{
    console.log("document clicked.");
});

document.body.addEventListener("click",(e)=>{
    console.log("body clicked.");
});

red.addEventListener("click",(e)=>{
    console.log("Red clicked.");
});

green.addEventListener("click",(e)=>{
    console.log("green clicked.");
});

blue.addEventListener("click",(e)=>{
    console.log("blue clicked.");
    e.stopPropagation();
});


// event bubbling means -> event child se flow hokar parent tak jata h.  or sabse bada parent window hota h.