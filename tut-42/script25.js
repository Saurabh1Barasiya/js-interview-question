
// Array.prototype.reverse() in JavaScript (Hinglish Explanation)
// Kya hai reverse()?
// reverse() ek JavaScript array method hai jo array ke elements ko reverse order me arrange kar deta hai. Matlab jo last element tha, wo pehla ho jata hai, aur jo pehla element tha, wo last ho jata hai.

// Is method ka side effect hota hai, yaani ki yeh original array ko modify kar deta hai. Agar aapko ek naya reversed array chahiye without modifying the original array, to aapko pehle array ka copy banana padega.



// Key Points
// Mutates the Original Array:

// reverse() method original array ko change karta hai, yeh naya array return nahi karta hai.
// No Parameters:

// Is method me koi arguments pass nahi karte, bas call karte hai.
// Return Value:

// Yeh method reversed array ko return karta hai, jo same array hota hai lekin reversed order me hota hai.



const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers);  // Output: [5, 4, 3, 2, 1]
console.log(numbers);          // Output: [5, 4, 3, 2, 1] (Original array bhi change ho gaya hai)
