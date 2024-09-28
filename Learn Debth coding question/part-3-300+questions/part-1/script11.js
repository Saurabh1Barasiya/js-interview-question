for(var i = 0;i<5;i++){
    setTimeout(()=>{
        console.log(i);
    },5)
}
// 5 5 5 5 5
console.log("------------------------------------------");

for(let i = 0;i<5;i++){
    setTimeout(()=>{
        console.log(i);
    },5)
}

// 0 1 2 3 4