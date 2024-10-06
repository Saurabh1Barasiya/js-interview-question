// Promise.then() and queueMicrotask() have the same priority.

queueMicrotask(() => {
    console.log(3);
});


Promise.resolve().then(() => {
    console.log(2);
});


//  3 2