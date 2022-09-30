//


function alphaNumeric(str){
let alpha= "abcdefghijklmnopqrstuvwxyz"
let map= new Map()                                   // a:1 b:1
for(let i=0;i<alpha.length;i++)
map.set(alpha[i], (map.get(alpha[i])||0)+1)
// console.log(map)
let str1=""
for(let i=0; i<str.length; i++){
    if(map.has(str[i]) || (str[i]>=0 && str[i]<9))
    str1 += str[i]
    console.log(str1)
}
return str1
}

function aN(arr){
    let arr1=[]
    for(let i=0;i<arr.length;i++)
    arr1.push(alphaNumeric(arr[i].toString()))
    return arr1
}
console.log(aN([true,123,"str123","sone","ss12@#"]))
