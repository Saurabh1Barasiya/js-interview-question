console.log("Start");

setTimeout(()=>{
    console.log("I am setTimeout");
},0);

Promise.resolve("I am Promise").then((data)=>console.log(data));

console.log("End");

// whats the output. ?

/*
Start
End
I am Promise   
I am setTimeout

*/
