// reverse this without any string or array method.

// in javascript strings are immutable. -- >
// matlab ham strings ko change nahi kar sakte hai.

function reverseString(string){
    let newString = ''
    for (let i = string.length - 1; i >= 0 ; i--) {
        newString += string[i];
    }
    return newString;
}

const reverseValue = reverseString('abcdef');
console.log("Original string is ", 'abcdef');
console.log("Reverse string is ",reverseValue);
