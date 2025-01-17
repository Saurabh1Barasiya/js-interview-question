function printFunc(number){
    if(number === 5){
        return
    }

    number++;
    printFunc(number);
    console.log(number);
}

printFunc(0);