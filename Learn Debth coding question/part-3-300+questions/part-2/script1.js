function test(){
    for(var i = 0 ; i< 5 ; i++){
        setTimeout(function(){
            console.log(i)
        },1000);
    }
}

test(); // 5 5 5 5 5