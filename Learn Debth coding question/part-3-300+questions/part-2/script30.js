// breking forEach.

const arr1 = [1,2,3,4];
arr1.forEach(function(value){
    if(value == 2){
       arr1.length = 0;
    }
    console.log('value = ',value);
});