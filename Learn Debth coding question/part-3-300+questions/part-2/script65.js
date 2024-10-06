setTimeout(()=>{
    console.log(1);
},0);

Promise.resolve().then(()=>{
    console.log(2);
})

queueMicrotask(()=>{
    console.log(3);
});

console.log(4);



// 4  2  3 1