// print 1 to 10.

function print(number){
    if(number == 11){
        return
    }

    console.log(number);
    number++;
    print(number);
}

print(0);