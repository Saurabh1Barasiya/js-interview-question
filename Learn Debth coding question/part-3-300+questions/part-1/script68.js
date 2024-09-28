let randonValue = {name : "saurabh"};
randonValue = 23;

if (!typeof randonValue === "string"){
    console.log("It's not a string...");
}else{
    console.log("It's string... ");
}


// steap to solve
// 1.   typeof randonValue --> "number"
// 2.   !"number" --> false
// 3.   false === string.  -->  false.