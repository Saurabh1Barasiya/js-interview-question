const arr1 = [1,2,3];
const str1 = "1,2,3";

console.log(arr1 == str1); // true.

// == lose equal to operator .

// jab bhi ye operator to diffrent datatype se shat apply hota h.
// to js dono type ko comman datatype me convert karti h. 
// yaha js array ko Array.Prototype.tostring() ka use karke string me connvert karege.
// to dono value same so output will be True.