// reverse string and all character itself.

let myStr = "hi saurabh how are you";

let stringArr = myStr.split(" ");
console.log(stringArr);  // [ 'hi', 'saurabh', 'how', 'are', 'you' ]


stringArr.forEach((element,index)=>{
    stringArr[index] = element.split('').reverse().join('');
});

console.log(stringArr);  // [ 'ih', 'hbaruas', 'woh', 'era', 'uoy' ]

console.log(stringArr.reverse())  // [ 'uoy', 'era', 'woh', 'hbaruas', 'ih' ]

console.log(stringArr.join(" "))  // uoy era woh hbaruas ih