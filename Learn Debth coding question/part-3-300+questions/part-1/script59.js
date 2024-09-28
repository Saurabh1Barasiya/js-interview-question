function getItems(list, ...args,moreItem){
    return [...list, ...args , moreItem];
}

const output = getItems(["berry","cherry"],"pear","kivi","banana"); // error  SyntaxError: Rest parameter must be last formal parameter
console.log(output);


// rest operator must last in the parameter.



