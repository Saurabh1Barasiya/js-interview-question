const lang = {name : "reactJS"};

function getLib(ver){
    return `${this.name} version ${ver}`;
}

console.log(getLib.call(lang,18));  // reactJs version 18.
console.log(getLib.bind(lang,18));  // [Function: bound getLib]

// line no. 8 --> return a function binded value of this.
