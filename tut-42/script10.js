// Kya hai fill() method?
// fill() ek JavaScript array method hai jo ek array ke sare elements ko ek specific value se fill kar deta hai. Ye ek mutable method hai, matlab ye original array ko modify karta hai.


// array.fill(value, start, end);

// Parameters:
// value: Woh value jo array ke elements ko fill karegi.
// start (optional): Index se array filling start hogi. Default 0 hota hai.
// end (optional): Index tak array filling chalegi (exclusive). Default array ka length hota hai.


const arr = [10,20,30];
arr.fill(0);
console.log(arr);   //[ 0, 0, 0 ].    change the originl array.


const arr1 = [1,2,3,4,5];
arr1.fill(10,2);
console.log(arr1);   ///  [ 1, 2, 10, 10, 10 ]




const arr2 = [1, 2, 3, 4, 5];
arr2.fill(100, 1, 4);

console.log(arr2);      // Output: [1, 100, 100, 100, 5]


const arr3 = new Array(5);
arr3.fill("vlaue");
console.log(arr3);     //   [ 'vlaue', 'vlaue', 'vlaue', 'vlaue', 'vlaue' ]








