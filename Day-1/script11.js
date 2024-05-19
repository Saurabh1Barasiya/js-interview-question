// create a promise.

const myPromise = new Promise((res,rej)=>{
    res("1");  // resolve the promise.

    //rej("0");  // reject the promise.

    // dono me se koi 1 hi hoga ya to Promise resolve hoga ya reject hoga.


});

myPromise.then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)});

// basically Promise is constructor . its a Asynchronous code .
// it takes to callback , Resolve() and Reject(),
// when Promise is Resolve so then() will Run,
// when Promise is Reject so catch() will Run,

// Promise has 3 state. -- > Pending, Fullfill , Reject.
