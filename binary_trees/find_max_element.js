/*
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given a binary tree, find the element with the largest value.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5

// returns 7
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
* How should empty cases be handled?
* Are all values positive integers?


Input: The root of a binary tree with values being integers

Output:
the value if the largest node element



🧠 BRAINSTORM
What approaches could work?

Algorithm 1: Iteratively search through tree using a queue to store any nodes that have yet to be visited. The iteration would end when all nodes within the queue have been visited.

Algorithm 2: Recursively search through the tree either using a helper function or carrying the largest value as passed in argument.
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
# 1. Iteratively
* Initialize a queue and a highestValue variables.
* create a loop with a stop condition equal to the length of the queue.
* as you visit a node, 
  * check to see if the node has a left/right child.
    * if so, add to the queue variable
  * check the value of the current node to see if it is greater than the current highest value
    * if yes, replace, otherwise do nothing.
 
 # 2. Recursively
 * create an argument, highestValue, with a default value equal to -Infinity.
 * base case: if the current node does not have a left or right child return the highestValue.
 * Compare the current nodes value with the highestValue. 
    * if if greater, replace. otherwise do nothing
 * If current node has a left/right respectively. recursively call the function with current.left/current.right.
    * Remember to carry the highestValue variable in the recursive call.

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;
    this.left = leftChild;
    this.right = rightChild;
  }
}

// function findTreeMax(root) { // iterative
//   if (!root) return null;
//   const queue = [root];
//   let highestValue = -Infinity;

//   for (let i = 0; i < queue.length; i++) {
//     const current = queue.at(i);

//     if (current.value > highestValue) highestValue = current.value;
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return highestValue
// }

function findTreeMax(root) {
  // recursive (mine)
  if (!root) return null;
  let highestValue = root.value;

  function checkNode(node) {
    if (node.value > highestValue) highestValue = node.value;

    if (node.left) checkNode(node.left);
    if (node.right) checkNode(node.right);
  }

  checkNode(root);
  return highestValue;
}

function findTreeMax(root) {
  // recursive (theirs)
  if (!root) {
    return null;
  }

  return Math.max(
    root.value,
    findTreeMax(root.left) || -Infinity,
    findTreeMax(root.right) || -Infinity
  );
}

// Test Cases
// console.log(findTreeMax(null)); // null

// console.log(findTreeMax(new TreeNode(1, new TreeNode(2), new TreeNode(3)))); // 3

// console.log(
//   findTreeMax(
//     new TreeNode(
//       2,
//       new TreeNode(29, new TreeNode(26)),
//       new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))
//     )
//   )
// ); // 29
// console.log(findTreeMax(new TreeNode(1))); // 1
