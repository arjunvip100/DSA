//Sorting using Recursion
let i=0;
let j=1;
let newList=[];
function isSort(array){
    for(let i=0;i<array.length;i++){
        if(array[i]>array[i+1]){
            return false;
        }
    }
    return true;
}



function sortCheck(array){

    if (isSort(array)){
        newList=array;
    }
     else if(array[i]<array[j]){
        i++;
        j++;
        sortCheck(array);

    }else{
        [array[i],array[j]]=[array[j],array[i]];
        i=0;
        j=1;
        sortCheck(array);
    }
    
}
const result=sortCheck([1,3,2,5,7,4]);
console.log(newList)