function multiply(a, b) {
    return a * b;
}

let double = multiply.bind(null, 2);
console.log(double);
console.log(double(5)); // Output: 10
