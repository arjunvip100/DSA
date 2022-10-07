// Input: s = "abbaca"
// Output: "ca"

var removeDuplicates = function(s) {
    let arr = []
  for(let i = 0; i < s.length; i++) {
    if(arr.length > 0 && arr[arr.length - 1] === s[i]) {
       arr.pop()
    } else {
      arr.push(s[i])
    }
  }
  return arr.join('')
};
console.log(removeDuplicates("abbaca"));
