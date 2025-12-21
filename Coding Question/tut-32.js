// capital first character for each word.

let myStr = "hi saurabh how are you";

let stringArr = myStr.split(' ');
stringArr.forEach((element,index)=>{
    stringArr[index] = element[0].toUpperCase()+element.slice(1);
})
 
console.log(stringArr.join(' '));   // Hi Saurabh How Are You.