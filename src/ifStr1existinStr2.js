// Is String2 exist in String1


function isExist(str1,str2){
    if(str1.includes (str2) == true){
        let c=str1.indexOf(str2);
        return c;
    }
    return -1;
}
const result= isExist("My name is Arjun","Arjun")
console.log(result)