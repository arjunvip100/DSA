function quickSort(arr, start, end){
    
    
    //base case
    if(start>=end){
        return;
    }
    //parition karengey
    var divide= partition(arr, start, end);

    //left part sort
    quickSort(arr, start, partition-1);

    //right part sort
    quickSort(arr, partition+1, end);

    //count nikalengey
    function partition(arr,start, end){
        var pivot=arr[start];
        //
        var count=0;
        for(let i=start+1;i<=end;i++){
            if(arr[i]<=pivot){
                count++;
            }
        }
        //sahi place of pivot
        let pivotIndex= start+count;
        [arr[pivotIndex], arr[start]]=[arr[start], arr[pivotIndex]];  //swap

        //left & right part
        let i=start;
        let j=end;

        while(i<pivotIndex && j>pivotIndex){

            while(arr[i]<pivot){
                i++;
            }

            while(arr[j]>pivot){
                j--;
            }

            if(i < pivotIndex && j > pivotIndex){
                [arr[i++],arr[j--]]=[arr[j--],arr[i++]];
            }
        }
    }

    return pivotIndex;
}
let n=5;
const result=quickSort([2,4,1,6,9], 0, n-1);
console.log(result);