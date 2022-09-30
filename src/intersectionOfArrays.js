//Intersection of two Arrays
//Approach 1

// function intersection(arr1, arr2){
//     arr1=new Set(arr1);
//     arr2=new Set(arr2);
//     c=new Set();

//     arr1.forEach((value) => {
//             if(arr2.has(value)){
//                 c.add(value)
//             }
//     });
//     return c;
// }
// const result=intersection([1,2,3,9,6,8],[1,2,3,6,5,4]);
// console.log(result)

//Approach2

// let setOne = [1,2,3,4,4]
// let setTwo = [1,2,3,5,2]


// function has(arr,b)
// {
//         for(let i in arr)
//                 if(arr[i] == b)
//                         return true
//         return false
        
// }

// function intersection(a,b)
// {
//         let result = [] 
//         for(let i = 0 ; i < a.length ; i++)
//                 if(has(b,a[i]))
//                         result.push(a[i])
//         return new Set(result);
// }

// console.log([...intersection(setOne,setTwo)])