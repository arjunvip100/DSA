// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6]

function mergeIntervals(arr){
    let sorted = arr.sort((a, b) => a[0] - b[0]);
    let res = [sorted[0]] //[1,3]
    //console.log(res.length)
    for (let i = 1; i < sorted.length; i++) {
      let currStart = sorted[i][0] //2,8,15
      let currEnd = sorted[i][1];  //6,10,18
      let lastEnd = res[res.length - 1][1]; //3,6,10
      console.log(lastEnd)
      if (currStart <= lastEnd) {
        res[res.length - 1][1] = Math.max(lastEnd, currEnd);  //lastEnd=3; currEnd=6 whosoever Max will be res=6
      }
      else {
        res.push(sorted[i]) //i=1 
      }
    }
    
    return res; //res 6 is pushed at index 1
};
const result=mergeIntervals([[1,3],[2,6],[8,10],[15,18]]);
console.log(result)