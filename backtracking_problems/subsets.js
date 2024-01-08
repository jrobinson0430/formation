/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const allSubsets = [];
  const subset = [];

  function dfs(index) {
    // if the index goes beyond the length of the input arr we know we reached a 'leaf' in the decision tree
    if (index >= nums.length) {
      allSubsets.push([...subset]);
      return;
    }

    // we have two choices for each node; include the current value vs. excluding the current value

    // include by adding to subset and calling dfs with incremented index
    subset.push(nums[index]);
    dfs(index + 1);

    // exclude it by backtracking (removing last decision) and running the dfs with the incremented index
    subset.pop();
    dfs(index + 1);
  }

  dfs(0);

  return allSubsets;
};
