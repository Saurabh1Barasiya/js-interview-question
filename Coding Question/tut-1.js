// abc
// ['a,'ab','abc,'b','bc','c'];

function convert(newString){
    result = [];
    for(let i = 0;i<newString.length;i++){
        for(j=i+1;j<=newString.length;j++){
            result.push(newString.slice(i,j))
        }
    }
    return result;
}

let mystr = "abc";
ans = convert(mystr);
console.log(ans);  //[ 'a', 'ab', 'abc', 'b', 'bc', 'c' ]
console.log(ans.join(' '));  // 'a', 'ab', 'abc', 'b', 'bc', 'c' 