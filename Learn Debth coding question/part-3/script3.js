// find secoundLargest element in an Array.

function secoundLargest(myArr){
    // i think i have to maitain two varible.
    let maxEl = -Infinity;
    let secMaxEl = maxEl;

    for(let ele of myArr){
        if(maxEl < ele){
            secMaxEl = maxEl;
            maxEl = ele;
        }else if(secMaxEl < ele){
            secMaxEl = ele;
        }
    }
    return secMaxEl;
}


const arr = [10,20,30,4,5,6];
console.log("Secound maximum element : ",secoundLargest(arr));  //  20
const arr1 = [10,20,60,40,5];
console.log("Secound maximum element : ",secoundLargest(arr1));  // 40