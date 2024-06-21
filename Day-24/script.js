function waitforTwosecound(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("done");
        },5000);
    });
}

async function callKardo(){
    console.log("first...");
    const result = await waitforTwosecound();
    console.log("secound");
    console.log(result);
}

callKardo();