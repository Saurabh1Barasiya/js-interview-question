// find secound maximum element in an array.

let numberArray = [10, 20, 30, 4, 2, 5, 4, 63, 1, 5];
// let numberArray = [10, 20, 30,30];
let maximum = Number.MIN_SAFE_INTEGER;
let secoundMaximum = maximum;

for (let element of numberArray) {
    if (element > maximum) {
        secoundMaximum = maximum;
        maximum = element
    } else if(element > secoundMaximum && element < maximum){
        secoundMaximum = element;
    }
}

console.log("Secound maximum element is :", secoundMaximum);
// Secound maximum element is : 30