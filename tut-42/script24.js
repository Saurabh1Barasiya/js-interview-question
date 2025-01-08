// Kya hai reduceRight()?
// reduceRight() ek JavaScript array method hai jo array ke elements ko right se left (reverse order) me process karta hai. Yeh method accumulator ka use karke array ke elements ko ek single value me reduce karta hai.

// Matlab, agar aapko array ke elements ko combine karke ek value banana ho, to aap reduceRight() ka use kar sakte ho, lekin yeh method reverse direction me kaam karega (last element se first element ki taraf).



// array.reduceRight(callback(accumulator, currentValue, currentIndex, array), initialValue);


const numbers = [1, 2, 3, 4];
const result = numbers.reduceRight((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(result);  // Output: 10



const numbers1 = [1, 2, 3, 4];
const result1 = numbers1.reduceRight((accumulator, currentValue) => {
  return accumulator - currentValue;
}, 10);  // Initial value of accumulator is 10

console.log(result);  // Output: 0


// Explanation:
// Yahaan, accumulator ki starting value 10 hai, aur array ke elements ko reverse direction me process kiya gaya hai. 10 - 4 - 3 - 2 - 1 = 0.

