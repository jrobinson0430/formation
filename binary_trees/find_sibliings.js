/*
'''
Find Siblings

We're given a tree, and we want to find all of the nodes in the tree that have siblings (other nodes under their parent).

Return an array of nodes representing each sibling in any order. No only children can be in your result array.
 

EXAMPLE(S)
      1
  2      3
_  4   _  _

should return [2, 3]

     12
  3      4
1  _   6  _

should return [3, 4]

        12
     3       4
  1   _    6   _
9  7      _ _

should return [3, 4, 9, 7]


FUNCTION SIGNATURE
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
function findSiblingNodes(root) {

'''

Explore:

Brainstorm:

EXAMPLE(S)

        12
     3       4
  1   _    6   _
9  7      _ _

should return [3, 4, 9, 7]

base case:
  - if left/right is null, return array
  - if (left && right), push left and right values onto the array

recursive call:
  - if (root.left) findSiblingNodes(root.left, siblings)
  - if (root.right) findSiblingNodes(root.right, siblings)

Plan: 

Implement: 

Verify:

      1
  2      3
_  4   _  _


*/

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findSiblingNodes(root, siblings = []) {
  if (!root.left && !root.right) {
    return siblings;
  }

  if (root.left && root.right) {
    siblings.push(root.left.value, root.right.value);
  }

  if (root.left) {
    findSiblingNodes(root.left, siblings);
  }

  if (root.right) {
    findSiblingNodes(root.right, siblings);
  }

  return siblings;
}

/* 
findSiblingNodes(1, []);
findSiblingNodes(2, [2, 3]);
findSiblingNodes(3, [2, 3]);
findSiblingNodes(4, [2, 3]);
*/

//         12
//      3       4
//   1   _    6   _
// 9  7      _ _

const tree1 = new TreeNode(
  12,
  new TreeNode(3, new TreeNode(1, new TreeNode(9), new TreeNode(7))),
  new TreeNode(4, new TreeNode(6))
);

// console.log(findSiblingNodes(tree1)); // [3, 4, 9, 7]
