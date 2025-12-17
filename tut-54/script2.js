// let val = 4;

// switch(val){
//     case 1:
//         console.log("value is 10");
//         break;
//     case 2:
//         console.log("value is 20");
//         break;
//     case 3:
//         console.log("value is 30");
//         break;
//     default:
//         console.log("i dont know ");
// }

// optimized this code .


// const myObj = {
//     1: console.log("value is 10"),
//     2: console.log("value is 20"),
//     3: console.log("value is 30"),
// }

// console.log(myObj.1)


const myObj1 = {
    1: "value is 10",
    2: "value is 20",
    3: "value is 30"
};

console.log(myObj1[1]);
console.log(myObj1[2]);
console.log(myObj1[3]);
console.log(myObj1[4] || "I dont know the value...");

