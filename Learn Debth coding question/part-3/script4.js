// find secound minimum element in an Array.

function secoundMinimum(myArr){
    let minimum = Infinity;
    let secMini = minimum;

    for(let ele of myArr){
        if(minimum > ele){
            secMini = minimum;
            minimum = ele;
        }else if(secMini > ele){
            secMini = ele;
        }
    }
    return secMini;
}

const arr = [1,0,20,30,40,50];
console.log("Secound minimum element : ",secoundMinimum(arr)) ;

const arr1 = [10,50,20,0,1,100,2]; 
console.log("Secound minimum element : ",secoundMinimum(arr1)) ;