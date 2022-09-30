//Longest Substring without Repeating Character
//I/P=abcabcbb
// O/P=3      &&         O/P=abc

function NoRepChar(str){
    let set= new Set();
    let j=0;
    maxLen=0;
    for(let i=0;i<str.length;i++){
        if(set.has(str[i])){
            maxLen=Math.max(maxLen,set.size)
            set.delete(str[j]);
            j++
        }else{
            set.add(str[i])
            maxLen=Math.max(maxLen,set.size)

        }
    }
    console.log(set)
    return maxLen;
}
const result=NoRepChar("abcabcbb");
console.log(result)