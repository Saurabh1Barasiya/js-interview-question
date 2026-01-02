// check two string are anagram or not?

function checkAnagram(s1,s2){
    if(s1.length !== s2.length){
        return false;
    }

    s1 = s1.split('').sort().join('').toLowerCase();
    s2 = s2.split('').sort().join('').toLowerCase();


    return s1===s2;
}


let str1 = "listen";
let str2 = "silent";

let ans = checkAnagram(str1,str2);
console.log(ans);