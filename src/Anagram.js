//Anagram
// Length check for both the strings
//  String "hello"
// {h:1,e:1,l:2,o:1}
function isAnagram(string1, string2){
    if(string1.length!==string2.length){
        return false;
    }
    let counter={}
    for(let words of string1){
         counter[words]=(counter[words] || 0)+1;
         console.log(counter)
         
    }
    for(let items of string2){
        if(!counter[items]){
        return false;
    }
    counter[items]-=1
    console.log(counter[items])
    return true;

}
}
let result= isAnagram('hello','llheo');
console.log(result)
