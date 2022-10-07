// Given an unsorted array, find the minimum difference between any pair in the given array.
//            Input: {1, 5, 3, 19, 18, 25}
//             output=1
let arr=[1, 5, 3, 19, 18, 25]

function findMinDiff(arr, n)
{
    // Sort array in
    // non-decreasing order
    arr.sort(function(a, b)
    {return a - b});
      
    // Initialize difference
    // as infinite
    let diff = Number.MAX_VALUE;
      
    // Find the min diff by
    // comparing adjacent pairs
    // in sorted array
    for (let i = 0; i < n - 1; i++)
        if (arr[i + 1] - arr[i] < diff)
            diff = arr[i + 1] - arr[i];
      
    // Return min diff
    return diff; 
}
console.log(findMinDiff(arr,arr.length));