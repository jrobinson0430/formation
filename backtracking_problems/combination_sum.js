/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const allCombinations = [];


  function dfs(index, combo, total) {
    if (total === target) {
      allCombinations.push([...combo]);
      return;
    }
    if (total > target || index >= candidates.length) return;

    // including current candidate
    combo.push(candidates[index]);
    dfs(index, combo, total + candidates[index]);

    // excluding current candidate
    combo.pop();
    dfs(index + 1, combo, total);
  }

  dfs(0, [], 0);

  return allCombinations;
};

  /*
  * similar to the subset problem except we can use elements in array multiple times.
  * this approach creates a decision tree that will prevent duplicate answers from being found by making 2 choices. include the current element vs excluding current element.
  *  for example: [2,3,4,7] the first choice is to include the 2 or not include the 2. continuing down those two paths. the next choice is for [2] is to include another 2 or not include another 2 [2, 2], vs [2] and also [3] vs [0]
    */