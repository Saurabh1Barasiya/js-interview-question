// "$saurabh@gmail.com"  -- saurabh gmail com

let myStr = "$saurabh@gmail.com";
myStr = myStr.replace("$","").trim();

const myStrArray = myStr.split(/[@.]/);
console.log(myStrArray);  // [ 'saurabh', 'gmail', 'com' ]

console.log(myStrArray.join(" "));  // saurabh gmail com