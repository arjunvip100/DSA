//Bruteforce
//arr = [ 1, 4, 2, 10, 2, 3, 1, 1, 20,20];
//k = 4;

// let arr = [ 1, 4, 2, 10, 2, 3, 1, 1, 20,20];
// let k = 4;
// let n = arr.length;
// function maxSum(arr,n,k){
//     let max_sum=0;
//     for(i=0;i<n-k+1;i++){
//         let currentSum=0;
//         for(j=0;j<k;j++){
//             currentSum=currentSum + arr[i+j];
//             max_sum = Math.max(currentSum, max_sum);
//         }
//     }
//     return max_sum;
// }
// console.log(maxSum( arr, n, k));

// Approach 2 ------>>>>>>   O(n)  Sliding Window


//  //[1,4,2,10] = 17
// //  [4,2,10,2]= 18-1=17
// //[2,10,2,3]=17-4=13
// //[10,2,3,1]=16-2=14
// //[2,3,1,0]=6-10=4;
// //[3,1,1,20]=24-2=22
// //[1,1,20,20]=41-3=38     i
let arr = [ 1, 4, 2, 10,  2, 3, 1, 1, 20,20];
let k = 4;
let n = arr.length
  function maxSum(arr, n, k) {
    let max = 0;
    let sum = 0;
    // find initial sum of first k elements
    for (let i = 0; i < k; i++) {
        sum += arr[i];
        max = sum;
    }
    //sum=17 max=17
    // iterate the array once
    // and increment the right edge
    for (let i = k; i < n; i++) { 
      
        sum += arr[i] - arr[i - k];
        // compare if sum is more than max,
        // if yes then replace
        // max with new sum value
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}
  console.log(maxSum(arr,n,k))