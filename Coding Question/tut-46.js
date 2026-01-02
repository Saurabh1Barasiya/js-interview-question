// Remove duplicate characters from a string.

function removeDuplicate(string){
    return [...new Set(string)].join('');
}

let str = "saurabh";
const ans = removeDuplicate(str);
console.log(ans);

