// string palindrom or not.

function checkPalindrom(str){
    return str === str.split('').reverse().join('');
}

let myStr = "naman";

if(checkPalindrom(myStr)){
    console.log("Palindrom string : ");
}else{
    console.log("Not Palindrom string : ");
}