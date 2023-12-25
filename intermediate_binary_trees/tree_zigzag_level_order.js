/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 * 
 * 
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const allLevels = [];
  let isLeftToRight = false;

  while (queue.length) {
    let currentLevel = [];
    let size = queue.length;
    isLeftToRight = !isLeftToRight;
    while (size > 0) {
      const node = queue.shift();
      if (isLeftToRight) {
        currentLevel.push(node.val);
      } else {
        currentLevel.unshift(node.val);
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);

      size--;
    }
    allLevels.push(currentLevel);
  }
  return allLevels;
};

// utilizes a tuple to track current level (not a great solution..)
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [[root, 0]];
  const allLevels = [];

  while (queue.length) {
    let size = queue.length;
    let currentLevel = [];

    while (size > 0) {
      const [node, level] = queue.shift();

      if (level % 2 === 0) {
        currentLevel.push(node.val);
      } else {
        currentLevel.unshift(node.val);
      }

      node.left && queue.push([node.left, level + 1]);
      node.right && queue.push([node.right, level + 1]);
      size--;
    }
    allLevels.push(currentLevel);
  }
  return allLevels;
};

// uses a tuple to track level and negates the need for a curentLevel array
var zigzagLevelOrder = function (root) {
  let result = [];
  if (!root) return result;
  const queue = [[root, 0]];

  while (queue.length > 0) {
    let [current, level] = queue.shift();
    result[level] ??= [];
    if (level % 2 === 1) result[level].push(current.val);
    else result[level].unshift(current.val);
    if (current.right) queue.push([current.right, level + 1]);
    if (current.left) queue.push([current.left, level + 1]);
  }
  return result;
};