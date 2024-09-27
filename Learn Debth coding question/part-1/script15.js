console.log(1);

setTimeout(()=>{
    console.log(2);
},1000);

setTimeout(()=>{
    console.log(3);
},0);


console.log(4);


// 1, 4, 3, 2.

// setTimeOut() take place in the CallBack Queue
// promiss take place in the microtask queue.

// microtask queue have height prirotity as compare to callback queue.