//Given an array arr of size n and an integer X. 
//Find if there's a triplet in the array which sums up to the given integer X.

function find3Numbers(A, n, X)
{
    //your code here
    A.sort((a,b)=>a-b)
    for(let i=0;i<n-2;i++){
        let l =i+1;
        let r = n-1;
         while(l<r){
            if(A[i]+A[l]+A[r]===X){ //1+4+8
                return true;
            }
            else if(A[i]+A[l]+A[r]<X){ //1+4+8<13
                l++;// 4 to 45
            }
            else{
                r--;//8 to 10
            }
    }
}
return false
}
const result=find3Numbers([1,4,45,6,10,8], 6, 13);
console.log(result);


