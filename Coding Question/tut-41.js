// Reverse a string without using reverse()

function reverseString(str){
    let revStr = '';
    for(let lastIndex = str.length-1; lastIndex >= 0 ; lastIndex--){
        revStr+=str[lastIndex];
    }
    return revStr;
}

let string = "hi my name is saurabh";
const ans = reverseString(string);
console.log("original string : ", string);
console.log("reversed string : ", ans);