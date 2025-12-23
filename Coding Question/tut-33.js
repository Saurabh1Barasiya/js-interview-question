// find the longest word.

let maxWord = '';
let maxlength = Number.MIN_SAFE_INTEGER;

let myStr = "SITA provides IT and telecommunication services to the air transport industry";

let stirngArr = myStr.split(' ');
// console.log(stirngArr);  // 

stirngArr.forEach((element)=>{
    if(element.length > maxlength){
        maxWord = element;
        maxlength = element.length;
    }
})

console.log(`Max word ${maxWord} and its length ${maxlength}`);  

// Max word telecommunication and its length 17