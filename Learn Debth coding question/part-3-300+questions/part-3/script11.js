new Promise(resolve=>{
    resolve("1");

    Promise.resolve()
        .then(d=>console.log("2"));

}).then(d=>console.log(d));

console.log("3");

// 3
// 2
// 1