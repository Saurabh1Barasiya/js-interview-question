// find secoundLargest element in an Array.

function secoundLargest(myArr){
    // i think i have to maitain two varible.
    let maxEl = -Infinity;
    let secMaxEl = maxEl;

    for(let ele of myArr){
        if(maxEl < ele){
            secMaxEl = maxEl;
            maxEl = ele;
        }
    }
}


const arr = [10,20,30,4,5,6];
secoundLargest(arr);