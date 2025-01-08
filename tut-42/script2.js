// Array.fromAsync() kya hai?

// Array.fromAsync() ek naya JavaScript feature hai (ECMAScript 2024 me introduce hua), jo asynchronous data sources ke saath kaam karta hai.
// Yeh kisi async iterable (jaise async generator) ya Promise se ek array banata hai, asynchronously.

// Yeh feature tab useful hai jab tumhare paas data dheere-dheere (async) aata hai, jaise APIs se ya kisi async process ke through.


// Kaam kaise karta hai?
// Array.fromAsync():

// Async data (Promises, generators) ko ek array me resolve karta hai.
// Tum async mapping function bhi laga sakte ho har element par transform karne ke liye.
// Promise return karta hai:

// Jab tum Array.fromAsync() use karte ho, yeh Promise return karta hai, jo resolve hone ke baad array deta hai.


// Array.fromAsync(asyncIterable, asyncMapFunction?, thisArg?)

// asyncIterable: Wo data jo tum array me convert karna chahte ho (jaise async generator ya Promises).
// asyncMapFunction (optional): Har element par async transformation lagane ke liye function.
// thisArg (optional): this context map function ke liye.


async function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}
  
Array.fromAsync(generateNumbers()).then((result) => {
    console.log(result);
    // Output: [1, 2, 3]
});
  

const proissArry = [
    Promise.resolve(30),
    Promise.resolve(40),
    Promise.resolve(50),  
];

Array.fromAsync(proissArry).then((data)=>{
    console.log(data);    //   [30, 40, 50]
});


Array.fromAsync(proissArry, async (num)=>num*num).then((data)=>console.log(data));  // [900, 1600, 2500]