const arr = [1,2,3].map(num=>{ 
    if(num > 0) return
    return num * 2
})

console.log(arr);   // [ undefined, undefined, undefined ]

//return undefined array.
