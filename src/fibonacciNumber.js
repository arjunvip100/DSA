//Fibonacci Number

// var fib = function(n) {
//     var first=0;
//     var second=1
//     var i=0;
//     var arr=[0,1];
//     while(i<n){
//         var third=first+second;
//         var first=second;
//         var second=third;
//         arr.push(third);
//         i++;
//     }
//     return arr[n]
// };
// const result=fib(2);
// console.log(result)

// Fibonacci Series
//Iterative Approach    

// function iterativeFibonacci(number){
//     let arr=[0,1];
//     let sum=0;
//     for(let i=0;i<number;i++){
//         sum=arr[i]+arr[i+1];
//         arr.push(sum)
//     }
//     console.log(arr);
// }
// const result= iterativeFibonacci(5);
// console.log(result)

// Fibonacci Series
//Recursive Approach   

function recursiveFibonacci(number){
    if(number<2){
        return 1;
    }else{
        return recursiveFibonacci(number-1)+recursiveFibonacci(number-2);
    }

}
const result= recursiveFibonacci(5);
console.log(result)