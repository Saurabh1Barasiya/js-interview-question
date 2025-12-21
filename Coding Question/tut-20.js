// check sting is palindrom.


function checkPalindrom(newSting){
    let start = 0;
    let end = newSting.length-1;

    while(start <= end){
        if (newSting[start] !== newSting[end]){
            return false
        }
        start ++;
        end--;
    }

    return true
}

let string = "naman";
let ans = checkPalindrom(string);
if(ans){
    console.log("yes its palindrom");
}else{
    console.log("No its not palindrom");
}





