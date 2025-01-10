// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 


function getTitleCase(string){
    const stringArr = string.split(" ");
    
    stringArr.forEach((ele,index)=>{
        stringArr[index] = ele.at(0).toUpperCase()+ele.slice(1,)
    });
    
    return stringArr.join(' ');
}

let str = "hello world!";
// console.log(str.replace(/\b\w/g,(l)=>l.toUpperCase()));

const string = getTitleCase(str);
console.log(string);