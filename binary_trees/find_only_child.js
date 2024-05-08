/*
'''
❓ PROMPT
Given a binary tree, find all nodes that have only one child. Return an array of node values representing each single-child parent in any order.

Example(s)
           1
       2       3
     _   4   _   _
    
should return [2]

           12
       3       4
    1    _   6   _
    
should return [3, 4]

           12
       3       4
    1    _   6   _
  9  _      _ _
    
should return [3, 1, 4]
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function hasSingleChildren(root) {}
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class Node {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;
    this.left = leftChild;
    this.right = rightChild;
  }
}

function hasSingleChildren(root, onlyChild = []) {
  if (!root.left && !root.right) {
    return onlyChild;
  }

  if (root.left && !root.right) {
    onlyChild.push(root.left.value);
    hasSingleChildren(root.left, onlyChild);
  }

  if (root.right && !root.left) {
    onlyChild.push(root.right.value);
    hasSingleChildren(root.right, onlyChild);
  }

  return onlyChild;
}

console.log(JSON.stringify(hasSingleChildren(null)) === "[]");

let root = new Node(1);
console.log(JSON.stringify(hasSingleChildren(root)) === "[]");

//   1
// 2
root = new Node(1, new Node(2));
console.log(JSON.stringify(hasSingleChildren(root)) === JSON.stringify([1]));

//   1
// 2   3
root = new Node(1, new Node(2), new Node(3));
console.log(JSON.stringify(hasSingleChildren(root)) === "[]");

//     1
//  2     3
// _ 4   _ _
root = new Node(1, new Node(2, null, new Node(4)), new Node(3));
console.log(JSON.stringify(hasSingleChildren(root)) === JSON.stringify([2]));

//     12
//  3     4
// 1 _   6 _
root = new Node(12, new Node(3, new Node(1)), new Node(4, new Node(6)));
console.log(
  JSON.stringify(hasSingleChildren(root).sort()) ===
    JSON.stringify([3, 4].sort())
);

//     12
//   3     4
//  1 _   6  _
// 9 _   _ _
root.left.left.left = new Node(9);
console.log(
  JSON.stringify(hasSingleChildren(root).sort()) ===
    JSON.stringify([3, 1, 4].sort())
);
