function multiply(a, b) {
    return a * b;
}

let double = multiply.bind(null, 2);
console.log(double);
console.log(double(5)); // Output: 10


/*


Step 1: Understanding bind
Jab tum bind(2, 2) use kar rahe ho, tab multiply function ka this value 2 set ho rahi hai aur a = 2 set ho raha hai.

⚠ Lekin yaha multiply function this ka use nahi karta, to bind(2, 2) me jo 2 first argument hai (this), woh ignore ho jayega.

To sirf a = 2 set hoga, aur function ka ek argument (b) abhi bhi missing hai.

Step 2: What does double() do?
javascript
Copy
Edit
console.log(double());
double() ka matlab hai ki function ko koi naya argument pass nahi kiya gaya.
Lekin multiply function do arguments a aur b expect karta hai.

Ab a = 2 to pehle se set ho chuka hai, lekin b undefined hai.
Aur jab 2 * undefined hota hai, to JavaScript NaN (Not a Number) return karta hai.

📌 Output:

javascript
Copy
Edit
NaN
Step 3: What does double(5, 5) do?
javascript
Copy
Edit
console.log(double(5, 5));
⚠ Important: bind ek naya function return karta hai jisme pehle se kuch arguments fix ho chuke hote hain.

Jab double(5,5) call karte ho, to:

a = 2 pehle se set hai (jo bind se fix ho gaya hai).
b = 5 lega pehla argument jo pass kiya gaya hai (5).
Dusra 5 ignore ho jayega kyunki multiply sirf do parameters (a, b) leta hai.
Matlab ab function multiply(2, 5) ban gaya.

📌 Output:

javascript
Copy
Edit
10
Final Output:
r
Copy
Edit
NaN
10
Summary in Hinglish:
1️⃣ Jab bind(2,2) use kiya, tab a = 2 set ho gaya aur this ignore ho gaya.
2️⃣ double() me b ki value undefined thi, to 2 * undefined = NaN aaya.
3️⃣ double(5,5) me b = 5 assign ho gaya, aur 2 * 5 = 10 mila.
4️⃣ Extra argument (5,5 me second 5) ignore ho gaya kyunki function sirf do parameters leta hai.

🚀 Agar ab bhi confusion hai to batao, aur clear kar dete hain! 😃



*/