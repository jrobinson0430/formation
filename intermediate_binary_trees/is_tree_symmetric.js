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
var isSymmetric = function (root) {
  /*
- this is tricky because i can see a BFS solution more clearly even though i dont feel like it is the correct route in this case. If we do a BST and obtain the node values at each level, we can then traverse the matrix we created, checking each array using a 2 pointer approach. if the values are equal until we reach the stop condition then we know that level is symmetrical.

- the recursive solution to me is a bit trickier. if we are determining symmetry we could do a DFS checking each node on the left side to its counterpart on the right. i am going to flesh out the first algo first and see if i can figure out the DFS

- initialize a queue: [root];
- traverse using BFS, recording each nodes value for each level
    - must record when you hit a null value as well for accurate results
*/
  function getTreeLevels(rootNode) {
    if (!rootNode) return [];
    const queue = [[root, 0]];
    const allLevels = [];
    while (queue.length) {
      const [node, level] = queue.shift();

      // if undefined/null, reassigns to []
      allLevels[level] ??= [];

      if (node === null) { // must track where each child is located (or not located, using null)
        allLevels[level].push(null);
      } else {
        allLevels[level].push(node.val);
        queue.push([node.left, level + 1]);
        queue.push([node.right, level + 1]);
      }
    }
    return allLevels;
  }
  const allLevels = getTreeLevels(root);

  for (let i = 0; i < allLevels.length; i++) {
    const level = allLevels[i];
    let left = 0;
    let right = level.length - 1;

    while (left <= right) {
      if (level[left] !== level[right]) return false;
      left++;
      right--;
    }
  }
  return true;
};
