// anagram two string or not.

function chckAnagram(s1,s2){
    if(s1.lenght !== s2.lenght){
        return false;
    }

    return s1.split('').sort().join('') === s2.split('').sort().join('');
}


const ans = chckAnagram("naman","naman");
console.log(ans);
