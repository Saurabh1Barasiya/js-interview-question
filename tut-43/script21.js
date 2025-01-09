// String.prototype.substring() ek method hai jo ek substring (part of a string) return karta hai based on specified start aur end indexes. Yeh original string ko modify nahi karta.

// str.substring(startIndex, endIndex)

/*
Parameters:
    startIndex (required):

    Yeh specify karta hai substring ke starting point ka index.
    Starting index inclusive hota hai.
endIndex (optional):

    Yeh specify karta hai substring ke ending point ka index.
    Ending index exclusive hota hai.
    Agar specify nahi kiya gaya, to string ke end tak substring create hoti hai.
*/

// Ek new substring jo original string ke specified indexes ke beech hoti hai.


/*
Important Points:
    Agar startIndex > endIndex hota hai, to substring() indexes ko swap kar deta hai.
    Negative indexes ko 0 maana jata hai.
    Agar koi index string ke length se bada hota hai, to use string ki length tak limit kar diya jata hai.
*/



let str = "JavaScript";
console.log(str.substring(0, 4)); // Output: "Java"
console.log(str.substring(4, 10)); // Output: "Script"


let str1 = "Frontend Developer";
console.log(str1.substring(9)); // Output: "Developer" (starts at index 9 till the end)


let str2 = "Frontend Developer";
console.log(str2.substring(9)); // Output: "Developer" (starts at index 9 till the end)




// startIndex > endIndex

// Agar starting index end se bada ho, to method indexes ko automatically swap kar deta hai.
let str3 = "Angular";
console.log(str3.substring(4, 1)); // Output: "ngu" (indexes are swapped to 1, 4)



let str4 = "Hello, World!";
console.log(str4.substring(-3, 5)); // Output: "Hello" (negative index treated as 0)
console.log(str4.substring(0, 50)); // Output: "Hello, World!" (exceeds string length)




// Agar startIndex aur endIndex dono specify nahi kiye gaye hain, poori string return hoti hai.


let str5 = "TypeScript";
console.log(str5.substring()); // Output: "TypeScript"
