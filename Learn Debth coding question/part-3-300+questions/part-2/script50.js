function test(){
    try{
        return 1;
    }finally{
        return 2;
    }
}

const result = test();
console.log(result);  // 2

// js me jab bhi try block se kuch return hoga and finally block se kuch return hoga.
// to prefrence hamesha finally block ko milegi.