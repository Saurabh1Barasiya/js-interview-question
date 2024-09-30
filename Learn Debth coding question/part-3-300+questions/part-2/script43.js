// check all element pass the condition or not.


const arr = [
    {id:21,marks:66},
    {id:31,marks:40},
    {id:41,marks:60},
]

let passingMark = 33;

// every function check karta h kya sari value par condition true h to thi true output aayega.

let data = arr.every((ele)=>ele.marks > passingMark);
console.log(data); // true