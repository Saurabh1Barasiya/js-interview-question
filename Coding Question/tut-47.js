// 8️⃣ Find the longest word in a sentence.

function findLongest(string){
    let stringArr = string.split(' ');
    // console.log(stringArr);  // [ 'I', 'am', 'learning', 'JavaScript', 'programming' ]

    stringArr.sort((a,b)=>b.length-a.length);
    console.log(stringArr);  // [ 'programming', 'JavaScript', 'learning', 'am', 'I' ]

    return stringArr[0];
}

let word = findLongest("I am learning JavaScript programming");
console.log(word);