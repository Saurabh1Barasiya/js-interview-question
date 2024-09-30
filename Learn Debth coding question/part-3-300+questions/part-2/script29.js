const arr = [1,2,3,4];
arr.forEach(function(value){
    if(value == 2){
       throw new Error("loop break");
    }
    console.log('value = ',value);
});
// value =  1.




