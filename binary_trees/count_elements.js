/*
'''
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given a binary tree, count the number of elements in the tree.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5
// returns 5

🔎 EXPLORE
What are some other insightful & revealing test cases?
Input: binary tree root

Output: an integer representing the number of nodes in the tree.

* how do we handle empty cases? 
  * input of null should return 0


🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
#1 
* iterative solution would be to use a queue and a loop.
  * count each current node
  * check if current node has a left/right child 
    * if yes, push them into the queue
  * increment counter

#2
* recursive solution:
  * create a helper function inside a closure
  * could try to carry the count as a parameter in the function
    * the return would be the counter variable plus the recursive call.
 

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

// function countTree(root) { // iterative (mine)
//   if (!root) return 0;
//   const queue = [root];

//   for (let i = 0; i < queue.length; i++) {
//     const current = queue.at(i);
//      if (current.left) queue.push(current.left)
//      if (current.right) queue.push(current.right)
//   }

//   return queue.length
// }

// O(N) time
// function countTree(root) { // iterative (theirs)
//   const stack = root ? [root] : [];
//   let result = 0;

//   while (stack.length) {
//     const node = stack.pop();
//     result += 1;
//     if (node.left) stack.push(node.left);
//     if (node.right) stack.push(node.right);
//   }

//   return result;
// }

// function countTree(root) { // recursive (mine)
//   let count = 0;

//   function checkNode(node) {
//     if (!node) return 0;

//     if (node.left) checkNode(node.left)
//     if (node.right) checkNode(node.right)

//     count += 1

//   }
//   checkNode(root)
//   return count;
// }

// O(N) time
function countTree(root) {
  // recursive (theirs)
  if (!root) return 0;

  return 1 + countTree(root.left) + countTree(root.right);
}

// Test Cases
console.log(countTree(null)); // 0
console.log(countTree(new TreeNode(1, new TreeNode(2), new TreeNode(3)))); // 3
console.log(
  countTree(
    new TreeNode(
      2,
      new TreeNode(29, new TreeNode(26)),
      new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))
    )
  )
); // 6
console.log(countTree(new TreeNode())); // 1
