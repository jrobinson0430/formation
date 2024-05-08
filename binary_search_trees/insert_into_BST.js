/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
  * what happens if the target value is already in the tree?
  * how do we handle an empty tree?

INPUT: 
- root: binary search tree
- target: integer

Output:
- the tree with the added target integer.



🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
- traverse the binary tree.
- each iteration, determine if the target value is greater than, less than, or equal to the current nodes value.
  - if greater than, search the right child node
  - if less than, search the left child node
  - if equal to, target is already in tree. return tree.
  - once you reach a node without the next child you need, you've found where to insert target.
  - return updated tree

Time: O(n)
Space: O(n)
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

• Given a binary search tree:
              6
            /   \
           3     8
          / \ 
         2   4

• For target: 7 // returns:
              6
            /   \
           3     8
          / \    /
         2   4  7
        /     \
       1       5

• For target: 1 // returns:
              6
            /   \
           3     8
          / \
         2   4
        /
       1

*/

class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;
    this.left = leftChild;
    this.right = rightChild;
  }
}

function arrayifyTree(root) {
  if (!root) {
    return [];
  }
  var queue = [];
  var array = [];
  queue.push(root);
  while (queue.length !== 0) {
    var node = queue.shift();
    array.push(node.value);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return array;
}

function insertBST(root, target) {
  if (!root) return new TreeNode(target);
  const newNode = new TreeNode(target);
  // initialize a current node.
  let current = root;

  while (current) {
    if (target > current.value) {
      if (!current.right) {
        current.right = newNode;
      } else {
        current = current.right;
      }
    } else if (target < current.value) {
      if (!current.left) {
        current.left = newNode;
      } else {
        current = current.left;
      }
    } else if (target === current.value) {
      return root;
    }
  }
  return root;
}

// Test Cases
var tree = new TreeNode(
  6,
  new TreeNode(3, new TreeNode(2), new TreeNode(4)),
  new TreeNode(8)
);

// • Given a binary search tree:
//               6
//             /   \
//            3     8
//           / \
//          2   4

insertBST(tree, 7);
console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7]);
insertBST(tree, 5);
console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7, 5]);
insertBST(tree, 1);
console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7, 1, 5]);
var tree2 = insertBST(null, 1);
console.log(tree2.value, 1);

// Final tree:
//              6
//            /   \
//           3     8
//          / \    /
//         2   4  7
//        /     \
//       1       5
