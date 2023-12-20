/*
'''
❓ PROMPT
Today, you will be determining if an array is monotonic or not. An array is monotonic if it is either monotone increasing or monotone decreasing.

Source: https://leetcode.com/problems/monotonic-array/

Example(s)
[1] => true
[1, 2] => true
[2, 1] => true
[2, 1, 3] => false
 

🔎 EXPLORE
List your assumptions & discoveries:
* Must determine which test to use: inc or dec
* should an empty array return true or false?
* what if two adjacent numbers are equal? ex [1, 1, 2, 5]

 

Insightful & revealing test cases:
 * array length of 1 should return true
 * array length of 2 should return true
 * if two adjacent numbers are equal 


🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N)
Space: O(1)
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function isMonotonic(nums) {
def isMonotonic(nums: list[int]) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

const testData = [1, 3, 5, 6];
function isMonotonic(nums) {
  if (nums.length === 1 || nums.length === 2) return true;

  const isIncreasing = nums.at(0) < nums.at(-1);

  for (let i = 1; i < nums.length; i++) {
    const last = nums.at(i - 1);
    const current = nums.at(i);

    if (isIncreasing) {
      if (last > current) return false;
    } else if (last < current) return false;
  }
  return true;
}

// isMonotonic(testData);
console.log(isMonotonic(testData));
