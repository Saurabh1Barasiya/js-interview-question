console.log("hello");

const btn = document.getElementById("btn");
// console.log(btn);

btn.addEventListener("click",(e)=>{
    console.log("first Listener fire");
    // e.stopPropagation();   // it will stop event bubbling.
    e.stopImmediatePropagation(); // it will stop event bubbling as well as other event listner to .
});


btn.addEventListener("click",(e)=>{
    console.log("secound Listener fire");
});

