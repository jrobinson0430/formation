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

/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
INPUT: binary tree
Output: integer representing the minimum depth of the tree.

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
- we must utilize a depth first approach.
- we need to figure out how to recognize when the minimum depth of a branch has been met.

example 1 DFS in-order:
3 -> 9 -> 20 -> 15 -> 7
branch 1: 3 -> 9 === 2
branch 2: 3 -> 20 - 15 === 3
branch 3: 3 -> 20 - 7 === 3

when we reach a leaf node we know we have hit a branch end and should calculate the length of that path and compare it to a minHeight variable inside the function before we go back up to travel down any other branches.

Time: O(N) N being the number of nodes in the binary tree.
Space: O(N) being the number of recursive calls maintained in the call stack
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
Write your algorithm.
- initialize a stack array to store nodes that need to be traversed.
- initialize an integer variable, minHeight.
- create a helper function, DFS, that accepts a node.
   - if the node is empty, return.
   - if the node is not empty
       - determine if node is a leaf.
           - if yes, compare the length of the stack against the minHeight
           - if no, perform the recursive calls on the nodes children
- return the minHeight integer.

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
const minDepth = function (root) {
  const stack = [];
  let minHeight = Infinity;
  if (!root) return 0;
  function dfs(node) {
    if (!node) return;

    stack.push(node.val);

    // check if node is a leaf.
    if (!node.left && !node.right) {
      // compare stack size to minHeight.
      if (minHeight > stack.length) minHeight = stack.length;
    }

    dfs(node.left);
    dfs(node.right);
    stack.pop();
  }

  dfs(root);

  return minHeight;
};
