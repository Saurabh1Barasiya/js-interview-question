// Please get actual data.

async function foo(){
    return "Hello";
}

async function gettingValue(){
    const result = await foo();
    console.log(result);  // hello.
}

gettingValue();

