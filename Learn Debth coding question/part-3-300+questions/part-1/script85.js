function task(){
    return new Promise((res)=>{
        res("data")
    })
}

const result = task().then() // 

console.log(result);  // Promise { <pending> }

// .then() also give Promise.