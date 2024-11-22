let s1 = "geeks";
let s2 = "kseeg";

// console.log("aa" === "aa");

function checkAnagram(){
    if(s1.length !== s2.length){
        return false;
    }

    let first = s1.split("").sort().join("");
    let secound = s2.split("").sort().join("");

    return first === secound;
}

ans = checkAnagram(s1,s2);
console.log(ans);