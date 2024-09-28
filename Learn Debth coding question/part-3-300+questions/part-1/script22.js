function getSummary(one,two,three,four){

    // first value aray hoga without fname and age
    // rest value me fname and age aayega.

    console.log(one);    // [ '', ' age is ', '' ]
    console.log(two);    // Vasuki
    console.log(three);  // 878
    console.log(four);  // undefined
}

const fname = "Vasuki";
const age = 878;


// Tagged template Literal.
getSummary`${fname} age is ${age}`;  // aese bhi call kar sakte  h.

