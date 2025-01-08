// Kya hai lastIndexOf()?
// lastIndexOf() ek JavaScript array method hai jo array ke elements ko search karta hai aur agar wo element milta hai, to uska last index (sabse last occurrence) return karta hai. Agar element nahi milta, to -1 return hota hai.

// Yeh method reverse order me search karta hai, matlab pehle last element ko check karega aur phir backward search karega.

// array.lastIndexOf(searchElement, fromIndex);



// Parameters:
// searchElement:

// Yeh wo element hai jise aap array me dhoondhna chahte ho.
// fromIndex (optional):

// Yeh wo index hai jahan se aap search karna start karna chahte ho. Agar yeh parameter nahi diya gaya, to search array ke end se shuru hoti hai.
// Yeh parameter negative bhi ho sakta hai, jisme array ke end se offset liya jata hai.




const fruits = ["apple", "banana", "cherry", "apple", "banana"];
console.log(fruits.lastIndexOf("apple"));  // Output: 3





const fruits1 = ["apple", "banana", "cherry"];
console.log(fruits1.lastIndexOf("orange"));  // Output: -1




