async function getData() {
    return await Promise.resolve("✔");
}

const data = getData();
console.log(data)  // Promise { <pending> }

// async function always return proise.