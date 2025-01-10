function makeDeep(obj){
    if(typeof obj !== "object" || obj  === null){
        return obj;
    }

    const coppiedObj = Array.isArray(obj) ? [] : {};

    let keys = Object.keys(obj);

    for(let i=0; i < keys.length ; i++){
        coppiedObj[keys[i]] = makeDeep(obj[keys[i]])
    }

    return coppiedObj;
}


const data = {
    name:"saurabh",
    age:20,
    accont:{
        fb:"facebook.com",
        yahoo:"yahoo.com"
    }
}

const newObj = makeDeep(data);

console.log(newObj);

newObj.name = "peeyush";
console.log(newObj);
console.log(data);