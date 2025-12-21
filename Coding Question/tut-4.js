// find secound minimum element in an array.

let numberArray = [10, 20, 30, 4, 2, 5, 4, 63, 1, 5];
let minimum = Number.MAX_SAFE_INTEGER;
let secoundMinimum = minimum;

for (let element of numberArray) {
    if (element < minimum) {
        secoundMinimum = minimum;
        minimum = element
    } else if(element < secoundMinimum){
        secoundMinimum = element;
    }
}

console.log("Secound minimum element is :", secoundMinimum);

// Secound minimum element is : 2