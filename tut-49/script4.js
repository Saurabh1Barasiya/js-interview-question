// abc

// ['a', 'ab', 'abc', 'b', 'bc', 'c']


function change(str){
    result = [];
    for(let i=0;i<str.length;i++)
    {
        for(j=i+1;j<=str.length;j++){
            result.push(str.slice(i,j))
        }
    }

    console.log(result);
}

change("abc");



// function getAllSubstrings(str) {
//     let result = [];
//     for (let i = 0; i < str.length; i++) {  // Outer loop to go through each character
//         for (let j = i + 1; j <= str.length; j++) {  // Inner loop to create substrings from i to j
//             result.push(str.slice(i, j));  // `slice(i, j)` gives substring from index i to j-1
//         }
//     }
//     return result;
// }