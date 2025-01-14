// sort 0's and 1's

let arr = [0, 1, 0, 1, 0, 0, 1];

let i = 0;
let start = 0;
let end = arr.length - 1;

while (i < end) {
    if (arr[i] == 0) {
        // swap  ith index value with start index value.
        [arr[i], arr[start]] = [arr[start], arr[i]];
        start++;
        i++;
    } else {
        [arr[i], arr[end]] = [arr[end], arr[i]];
        end--;
    }
}


console.log(arr);     // [ 0, 0, 0, 0, 1, 1, 1 ]