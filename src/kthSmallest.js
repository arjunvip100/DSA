let arr = [3,7,4,10,15,6,20]
let n = arr.length
let K = 3

function count(nums, mid)
{
// function to calculate number of elements less than equal to mid
        var cnt = 0;
        for(var i = 0; i < nums.length; i++)
           if(nums[i] <= mid)
              cnt++;
        return cnt;
}
 
function  kthSmallest(nums,k){
    var low = Infinity
    var high = -Infinity
    // calculate minimum and maximum the array.
    for(var i = 0; i < nums.length; i++)
    {
        low = Math.min(low, nums[i]);
        high = Math.max(high, nums[i]);
    }
// console.log(low,high);
   
    while(low < high)
    {
        var mid = Math.floor(low + ((high - low) / 2));
        if(count(nums, mid) < k)
           low = mid + 1;
             
        else
            high = mid;

        //    console.log(high,low)
    }
    return low;
}

console.log(kthSmallest(arr,K))