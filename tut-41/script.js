
function add(a,b){
    console.log("calculating.....");
    return a+b;
}

function memoizedAdd(a,b){
    var cache = {};

    key = `${a},${b}`;

    if(key in cache){
        console.log("Return from cache...")
        return cache[key];
    }

    // perfom the opetation.
    const result = add(a,b);
    cache[key] = result;
    return cache[key];
}

const ans = memoizedAdd(5,5);
const ans1 = memoizedAdd(5,5);
const ans2 = memoizedAdd(5,5);
const ans3 = memoizedAdd(5,5);
const ans4 = memoizedAdd(5,6);
const ans5 = memoizedAdd(5,6);
console.log(ans);
console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);
console.log(ans5);
