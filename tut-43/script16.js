// String.prototype.replaceAll() ek method hai jo string ke sabhi occurrences ko replace karta hai ek naye value ke saath. Yeh replace() method ka advanced version hai, jo sirf pehla match replace karta hai (agar global flag g na ho). replaceAll() original string ko modify nahi karta, balki ek nayi string return karta hai.

// str.replaceAll(searchValue, newValue)


// searchValue: Yeh wo pattern hai jo aap replace karna chahte hain. Yeh ek string ya global regular expression ho sakta hai.
// newValue: Yeh wo value hai jisse searchValue ko replace kiya jayega. Yeh ek string ya ek function ho sakti hai.


let str = "apple banana apple orange";

console.log(str.replaceAll("apple", "grape"));  
// Output: "grape banana grape orange" (all 'apple' replaced with 'grape')


let strNum = "123-456-123";

console.log(strNum.replaceAll(/123/g, "789"));  
// Output: "789-456-789" (all occurrences of '123' are replaced)



