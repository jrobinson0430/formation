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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  let unival = root.val;
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    if (node.val !== unival) return false;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return true;
};
