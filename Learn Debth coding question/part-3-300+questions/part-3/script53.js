Promise.resolve(()=>{
    return "a";
}).then((data)=>{
    console.log(data);     
})


/*
    Resolve function ke ander app jo bhi likhoge vo as it is then ke paass jayega

    hamne arrow function likha h to vo pura chala jayega.

        ()=>{
            return "a";
        }
*/