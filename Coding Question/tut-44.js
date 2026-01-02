// first non repeating character.

function firstNonReapeting(str){
    const freq = {};
    for(let char of str){
        if(!freq[char]){
            freq[char] = 1
        }else{
            freq[char] += 1;
        }
    }

    console.log(freq);  // { s: 3, t: 1, r: 1, e: 1 }

    for(let key in freq){
        if(freq[key] == 1){
            return key;
        }
    }

    return "not found";  // no repeating character found.

}


let string = "stress";
// let string = "swiss";
// let string = "aabbcc";
const ans = firstNonReapeting(string);
console.log(ans);  // t
