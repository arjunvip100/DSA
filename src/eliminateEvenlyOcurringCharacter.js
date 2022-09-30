//Eliminate EVENLY occuring character in String
// i will increase the count of repeated characters to even number and minus it
// and i will increase the count of the single characters and store it into result
let str = "abbbbcccczzxxxxzzz";
let result="";
let count = 0; 

for(let i in str){
    
    console.log(`count`+ count)
    if(str[i]!=str[i-1]){
        if(count%2==0)
        result=result.substring(0,result.length-count);
        console.log(`result`+ result)
        count=0;
    }
    count++;
    result +=str[i];
    
}
console.log(result)





// for(let i in str){
    
//     if(str[i]!=str[i-1]){
//         if(count%2==0)
//             result=result.substring(0,result.length-count)
//             count=0
//     }
//     result +=str[i];
//     count++
    
// }
// console.log(result)
