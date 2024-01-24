/* https://leetcode.com/problems/product-of-array-except-self/

*/

var productExceptSelf = function (nums) {
  let prefix = [];
  let postfix = [];

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      prefix.push(1);
    } else {
      prefix.push(nums[i - 1] * prefix[i - 1]);
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i == nums.length - 1) {
      postfix[i] = 1;
    } else {
      postfix[i] = nums[i + 1] * postfix[i + 1];
    }
  }

  return prefix.map((elem, idx) => elem * postfix[idx]);
};