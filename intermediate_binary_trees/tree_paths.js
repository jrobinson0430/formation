/*
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.
*/


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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  /*
    INTERATIVELY:
    - must utilize a stack to simulate the recursive call
        - what nodes do you still need to visit?
        - when you hit a leaf, you know you are at the end of a path
    also must have a way to record the current path you're on

    stack: []
    currentNode: 5
    currentPath: [1, 2]

    5 is a leaf:
        - add value to currentPath
        - add current path to allpath
        - go to next node in stack

    2 has a right:
        - add to stack
        - add currentNode value to current path

    3 is a leaf:
        - store current path
        - remove last value from path
        - go to the next node in stack

            1
        2       3
              4

    */
  const stack = [[root, ""]];
  let allPaths = [];

  while (stack.length) {
    let [node, currentPath] = stack.pop();
    currentPath += node.val;

    if (!node.left && !node.right) {
      allPaths.push(currentPath);
    } else {
      node.left && stack.push([node.left, currentPath + "->"]);
      node.right && stack.push([node.right, currentPath + "->"]);
    }
  }

  return allPaths;
};


var binaryTreePathsRec = function (root) {
  /*
  RECURSIVE:
  - need a global variable to hold all paths
  - DFS helper to do recursion/backtracking
  */
  
    const allPaths = [];

  function dfs(node, currentPath = '') {
    currentPath += node.val;

    if (!node.left && !node.right) {
      allPaths.push(currentPath)
    } else {
      node.left && dfs(node.left, currentPath)
      node.right && dfs(node.right, currentPath)
    }
  }
  
  dfs(root)
  return allPaths;

};

function find_path(root) {
  const allPaths = [];

  function dfs(node, current = []) {
    current.push(node.value);
    if (!node.left && !node.right) {
      allPaths.push([...current]);
    }

    node.left && dfs(node.left, current);
    node.right && dfs(node.right, current);

    current.pop();
  }

  dfs(root);
  console.log(allPaths);
  return allPaths
}