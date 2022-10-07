//Longest Substring without Repeating Character
//I/P=abcabcbb
// O/P=3      &&         O/P=abc

// function NoRepChar(str){
//     let set= new Set();
//     let j=0;
//     maxLen=0;
//     for(let i=0;i<str.length;i++){
//         if(set.has(str[i])){
//             maxLen=Math.max(maxLen,set.size)
//             set.delete(str[j]);
//             j++
//         }else{
//             set.add(str[i])
//             maxLen=Math.max(maxLen,set.size)

//         }
//     }
//     console.log(set)
//     return maxLen;
// }
// const result=NoRepChar("abcabcbb");
// console.log(result)

function findLongestSubstring(str)
{
    var i;
    var n = str.length;
 
    // starting point of current substring.
    var st = 0;
 
    // length of current substring.
    var currlen;
 
    // maximum length substring without repeating
    // characters.
    var maxlen = 0;
 
    // starting index of maximum length substring.
    var start;
 
    // Hash Map to store last occurrence of each
    // already visited character.
    var map = new Map();
 
    // Last occurrence of first character is index 0;
    // map.set(str[0], 0);//
 
    for (var i = 1; i < n; i++) {
 
        // If this character is not present in hash,
        // then this is first occurrence of this
        // character, store this in hash.
        if (!map.has(str[i]))
        map.set(str[i],i) ;
 
        else {
            // If this character is present in hash then
            // this character has previous occurrence,
            // check if that occurrence is before or after
            // starting point of current substring.
            if (map.get(str[i]) >= st) {
 
                // find length of current substring and
                // update maxlen and start accordingly.
                currlen = i - st;
                if (maxlen < currlen) {
                    maxlen = currlen;
                    start = st;
                }
 
                // Next substring will start after the last
                // occurrence of current character to avoid
                // its repetition.
                st = map.get(str[i]) + 1;
            }
 
            // Update last occurrence of
            // current character.
            map.set(str[i], i);
        }
    }
 
    // Compare length of last substring with maxlen and
    // update maxlen and start accordingly.
    if (maxlen < i - st) {
        maxlen = i - st;
        start = st;
    }
 
    // The required longest substring without
    // repeating characters is from str[start]
    // to str[start+maxlen-1].
     
    return str.substr(start,maxlen);
}
 
var str = "abcabchokbb";
console.log(findLongestSubstring(str));