/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = -Infinity;
  /*
        1
      /    \
     2      3
           /  \
          4    5

*/
  function dfs(node) {
    if (!node) return 0;
    let leftTree = Math.max(dfs(node.left), 0);
    let rightTree = Math.max(dfs(node.right), 0);

    // with split
    max = Math.max(max, leftTree + rightTree + node.val);

    // this adds the current node value with the larger of the two sub trees
    // left sub tree or right sub tree
    return node.val + Math.max(leftTree, rightTree);
  }

  dfs(root);
  return max;
};
