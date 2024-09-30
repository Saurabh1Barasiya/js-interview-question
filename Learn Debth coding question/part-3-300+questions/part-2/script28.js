const arr = [1,2,3,4];
// arr.forEach(function(value){
//     if(value == 2){
//         break;
//     }
//     console.log('value = ',value);
// });

// foreach loop me break keyword nahi laga sakte h ham .


// return bhi loop brak nahi kar pa raha h.
arr.forEach(function(value){
    if(value == 2){
        return;
    }
    console.log('value = ',value);
});

