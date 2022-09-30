//Insertion Sort
//[9,8,12,7,4,3,2,1,18]             current=9   current-1=9
//current--;        for comparing previous elements

function insertionSort(arr){

    for(let right=1;right<arr.length;right++){
        let current=right;

        while(current>=1 && arr[current-1]>arr[current]){
            [arr[current-1],arr[current]]=[arr[current],arr[current-1]];
            current--;
        }
        console.log(arr)
    }
    

}

const result=insertionSort([9,8,12,7,4,3,2,1,18]);
console.log(result)
