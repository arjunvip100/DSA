//Check if Given String is Palindrome or not ?
//level

//Case1

function ispal(str){
for(i=0;i<str.length;i++){
    for(j=str.length-1;j<str.length;j--){
        if(str[i]===str[j]){
            return true;
            i++;
            j--;
        }else{
            return false;
        }
        
    }
}

}
const result=ispal("noon");
console.log(result);




//Case2
// function ispal(str){
//     let left=0;
//     let right=str.length-1;
//     while(left<right){
//         if(str[left]!==str[right]){
//             return false;
            
//         }else{
//             left++;
//             right--;
//             return true;
//         }
//     }

// }
// const result=ispal("noon");
// console.log(result);

//Case3
// function ispal(str){

//     let revnlow= str.split("").reverse().join("");
//     if(revnlow===str){
//         return true;
//     }else{
//         return false;
//     }

// }
// const result=ispal("noon");
// console.log(result);
