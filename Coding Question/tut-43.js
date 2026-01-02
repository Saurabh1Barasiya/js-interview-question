// Check if a string is a palindrome

function checkPlaindrom(str) {
    let start = 0;
    let end = str.length - 1;

    while(start<end){
        if(str[start] !== str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

// let string = "saurabh";
let string = "naman";

let ans = checkPlaindrom(string);
if (ans) {
    console.log("Yes its palindrom ...");
} else {
    console.log("No its not palindrom ...");
}