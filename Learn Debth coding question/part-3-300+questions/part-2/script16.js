console.log(false == []);  // true
console.log(false == ![])  // true

// case 1
/*
    ye sab == operator ke karan hua h.

    false == []
    false == ""
    0 == 0  
      true


    [] ko "" me convert karega.
    fir false or "" ko number me convert karega that is 0.
*/



// case 2.
// console.log(false == ![])  // true
// js me [] truthy value hoti h.
// hamne ![] lahaya h matlab false.
// false == false  --> true