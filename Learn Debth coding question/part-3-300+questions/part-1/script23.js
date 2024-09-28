function checkAge(data){
    if(data == {age:18}){
        console.log("you are an adult");
    }else if(data === {age:18}){
        console.log("you are still adult");
    }else{
        console.log(`No age`)
    }
}

checkAge({age:18});