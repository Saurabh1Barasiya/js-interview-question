// reduce method JavaScript arrays par apply hota hai. Yeh array ke elements ko ek single value mein reduce karta hai. Iske liye yeh ek callback function ko repeatedly apply karta hai har element par aur ek accumulator maintain karta hai.


let arr = [1,2,3,4,5];
const sum = arr.reduce((acc,curr)=>{
    return acc + curr;
},0);

console.log(sum);


// Pehle call: accumulator = 0 (initial value), currentValue = 1 => accumulator + currentValue = 1
// Dusre call: accumulator = 1, currentValue = 2 => accumulator + currentValue = 3
// Teesre call: accumulator = 3, currentValue = 3 => accumulator + currentValue = 6
// Chauthe call: accumulator = 6, currentValue = 4 => accumulator + currentValue = 10
// Paanchve call: accumulator = 10, currentValue = 5 => accumulator + currentValue = 15