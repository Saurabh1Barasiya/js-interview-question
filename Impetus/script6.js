let arr = [0,0,1,1,2,2,0,0,1,1,0,2,2,1];

const zeros = arr.filter((ele)=>ele===0);
const ones = arr.filter(ele => ele === 1);
const twos = arr.filter(ele => ele === 2);

const output = [...zeros,...ones,...twos];

console.log(output);

// [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2 ]



//  ye jo solution h ye static solution h.
// iska dynamic answer next file par  h.




