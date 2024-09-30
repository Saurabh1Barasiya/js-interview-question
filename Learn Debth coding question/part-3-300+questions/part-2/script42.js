const arr = [
    {id:21,marks:66},
    {id:31,marks:20},
    {id:41,marks:60},
]

let passingMark = 33;

// some function check karta h kya koi bhi 1 method true h.

let data = arr.some((ele)=>ele.marks < passingMark);
console.log(data); // true