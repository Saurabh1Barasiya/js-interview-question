async function getData() {
    return await Promise.resolve("✔");
}

const data = getData();
data.then((value)=>{
    console.log(value);    // ✔
})