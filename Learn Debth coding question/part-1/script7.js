// The push() method adds new items to the end of an array.
// The push() method changes the length of the array.
// The push() method returns the new length.

let newList = [1].push(2);

console.log(newList.push(3));   // TypeError: newList.push is not a function


// so this code give us error.

// newList me array nahi hoga jabki us array ki length hogi. that is 2.
// ham integer par array ki method call nahi kar sakte .

// console.log(newList) // 2