//   2nd largest element in an array
//[1,23,4,3,23]

// function kthElement(arr){

//     let sorted=arr.sort((a,b)=> a-b);
//     console.log(`MAX: `+sorted[sorted.length-2])
//     sorted.reverse()
//     console.log(`MIN: `+sorted[sorted.length-2])
// }
// const result=kthElement([1,23,4,3,27,29]);
// console.log(result)

//&largest
function kthSmallest(arr, K)
{
    // Sort the given array
    arr.sort((a,b) => a-b);
    console.log(arr);
    // Return k'th element in the sorted array
    console.log(`MAX: `+arr[K - 1]);
    arr=arr.reverse()
    console.log(`MIN: `+arr[K - 1]);

}
 
// Driver program to test above methods
    let arr = [12, 3, 5, 7, 19];
     K = 5;
   console.log( kthSmallest(arr,K));