function sum(nums){
    var result = 0;
    for(var i=0; i <= nums.length; i++){
        result += nums[i];
    }
    return result;
}

var numbers = [1,2,3,4,5];
const ans = sum(numbers);
console.log(ans);  // NaN

// i <= nums.length   yaha par issue h  
// i <= nums.length -1  aesa likhna tha
// number + undefined = NaN