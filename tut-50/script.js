// input    AAABBCEF
// output   CEF

function getOnlySingle(string){
    const arr = [];
    const obj = {}
    for(let char of string){
        if(obj[char]){
            obj[char] += 1;
        }else{
            obj[char] = 1;
        }
    }
    // console.log(obj);


    // ye bhi work karega.
    // for(let char of string){
    //     if(obj[char]===1){
    //         console.log(char);
    //     }
    // }

    for(let char in obj){
        if(obj[char]===1){
            arr.push(char);
        }
    }

    console.log(arr.join(""));
}

let str = "AAABBCEF";
getOnlySingle(str);