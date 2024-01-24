/* https://leetcode.com/problems/longest-consecutive-sequence/description/


** CONSTRAINT ** solve in O(N) time complexity (cannot use sort method)
*/


// WITHOUT CONSTRAINT
// Time: n log(n)
var longestConsecutive = function (nums) {
  if (nums.length == 0) return 0;

  let count = 1;
  let maxSequence = 1;
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    const last = nums[i - 1];
    if (curr == last) continue; // to bypass duplicates
    if (curr - 1 == last) {
      count++;
      maxSequence = Math.max(maxSequence, count);
    } else {
      count = 1;
    }
  }
  return maxSequence;
};