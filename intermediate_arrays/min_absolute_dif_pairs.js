/*
❓ PROMPT
Given an array of unique integers, find all pairs of elements with the minimum absolute difference. If there are multiple pairs, return them in ascending order.

Example(s)
Input: arr = [1,3,6,10,15]
Output: [[1,3]]
Explanation: There is only 1 pair of elements with a minimum absolute difference of 2.

Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]
Explanation: There are 3 pairs of elements with a minimum absolute difference of 4, which are listed in ascending order according to the smaller value in the pair.

Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: There are 3 pairs of elements with a minimum absolute difference of 1, which are listed in ascending order according to the smaller value in the pair.
 

🔎 EXPLORE
List your assumptions & discoveries:
- sorting the array will allow us to only check the next adjacent element to guarantee min abs difference.

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function minAbsDiffPairs(arr) {
def minAbsDiffPairs(arr: list[int]) -> list[list[int]]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

function minAbsDiffPairs(arr) {
  let minDif = Infinity;
  let result = [];
  arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i++) {
    const difference = Math.abs(arr[i] - arr[i - 1]);

    if (difference < minDif) {
      minDif = difference;
      result = [[arr[i - 1], arr[i]]];
    } else if (difference === minDif) {
      result.push([arr[i - 1], arr[i]]);
    }
  }

  return result;
}

let arr = [1, 3, 6, 10, 15];
console.log(JSON.stringify(minAbsDiffPairs(arr)) === "[[1,3]]");

arr = [3, 8, -10, 23, 19, -4, -14, 27];
console.log(
  JSON.stringify(minAbsDiffPairs(arr)) === "[[-14,-10],[19,23],[23,27]]"
);

arr = [4, 2, 1, 3];
console.log(JSON.stringify(minAbsDiffPairs(arr)) === "[[1,2],[2,3],[3,4]]");

arr = [1, 3, 6, 7, 10, 15];
console.log(JSON.stringify(minAbsDiffPairs(arr)) === "[[6,7]]");

arr = [5, 15];
console.log(JSON.stringify(minAbsDiffPairs(arr)) === "[[5,15]]");

arr = [15, 5];
console.log(JSON.stringify(minAbsDiffPairs(arr)) === "[[5,15]]");
