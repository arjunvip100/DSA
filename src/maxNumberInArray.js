function maxNumber(array){
    let Currentmax=array[0];
    for(let i=1;i<array.length;i++){
        if(array[i]>Currentmax){
            Currentmax = array[i]
        }
    }
    return Currentmax;
}
const result= maxNumber([200,15,1,5]);
console.log(result);