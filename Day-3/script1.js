console.time('Execution Time');

let array1 = ['true', 'true', 'true', 'true', 'true'];
let returnValue = array1.every((value) => {
    return value == true;
});

console.log("All elements are", returnValue);

console.timeEnd('Execution Time');
