// print A-Z all alphabets.

const arr = [...Array(26)];

let start = 65 // acsi code of a.

arr.forEach((ele,index)=>{
    arr[index] = String.fromCharCode(start ++);
});

console.log(arr);

/*

    [
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
    ]

*/