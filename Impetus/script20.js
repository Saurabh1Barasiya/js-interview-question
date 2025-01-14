// check sting is palindrom.

let string = "madam";

function checkPalindrom(string) {
    let start = 0;
    let end = string.length - 1;

    while (start < end) {
        if (string[start] !== string[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

const ans = checkPalindrom(string);
if(ans){
    console.log("Yes Palindrom...");
}else{
    console.log("Not Palindrom...");
}