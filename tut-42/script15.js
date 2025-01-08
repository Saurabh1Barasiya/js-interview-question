// findLastIndex() ek JavaScript array method hai jo ek given condition ko satisfy karne wale last element ka index return karta hai. Ye method array ke end se search karna start karta hai.

// Agar koi bhi element condition satisfy nahi kare, to ye -1 return karta hai.

const number = [1,2,3,4,5,6];
const lastIndex = number.findLastIndex((num)=> num > 1);
console.log(lastIndex);  // 5.



const numbers = [1, 2, 3, 4, 5];
const lastIndex1 = numbers.findLastIndex(num => num > 10);

console.log(lastIndex1); // Output: -1


const users = [
    { id: 1, active: false },
    { id: 2, active: true },
    { id: 3, active: false },
    { id: 4, active: true },
  ];
  
  const lastActiveIndex = users.findLastIndex(user => user.active);
  
  console.log(lastActiveIndex); // Output: 3
  


