// What is a binary tree?
//BT
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// #      10
// #   5       15
// # 1   7   12   20
// #        11
// LL
class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
//DLL
class Node {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}
// What is the depth of a binary tree?
// What is a leaf node in a binary tree?
// What does it mean for a binary tree to be balanced?
// #      10
// #   5       15
// #         12   20
// #        11
// What is a binary search tree and how's it differ from a normal binary tree?

// Javascript
const root = new Node("A", new Node("B"), new Node("C"));

// # Python
// root = Node("A", Node("B"), Node("C"))

// #      10
// #   5       15
// # 1   7   12   20
// #        11
// # Creates the tree above
// leftLeft,
//   leftRight,
//   rightLeft,
//   (rightRight = Node(1)),
//   Node(7),
//   Node(12, Node(11)),
//   Node(20);
// left, (right = Node(5, leftLeft, leftRight)), Node(15, rightLeft, rightRight);
// theRoot = Node(10, left, right);

// #     100
// #   99   101
// # 98
// deleteNotRoot = Node(100, Node(99, Node(98)), Node(101))
// deleteNotRoot.left = None
// #     100
// #       101
// deleteNotRoot.right = None
// # 100

// #      10
// #   5       15
// # 1   7   12   20
// #        11

//DFS
//preorder
//NLR
function preorder(root) {
  if (root == null) return;
  console.log(root);
  preorder(root.left);
  preorder(root.right);
}
// 10, 5 ,1 7 15 12 11 20
//postorder
//LRN
// #      10
// #   5       15
// # 1   7   12   20

//LRN
// 1 7 5 12 20 15 10
function postorder(root) {
  if (root == null) return;
  preorder(root.left);
  preorder(root.right);
  console.log(root);
}
// #      10
// #   5       15
// # 1   7   12   20

// 1 5 7 10 11 12 15 20
//inorder
//LNR
function inorder(root) {
  if (root == null) return;
  preorder(root.left);
  console.log(root);
  preorder(root.right);
}
//BFS
// level order traversal
// #      10
// #   5       15
// # 1   7   12   20
// 10

// def getDepth(root: Node) -> int:
// ### Implement me
// pass

// if not root:
//   return 0

// return 1+ max(getDepth(root.left), getDepth(root.right))

// #      10
// #   5       15
// # 1   2   12

function getSum(root) {
  if (!root) {
    return 0;
  }
  return root.val + getSum(root.left) + getSum(root.right);
}

// 1-2-3-4-5
// 1+ 2-3-4-5
// 1+ 2+ 3-4-5
// 1+ 2+ 3+ 4-5
function getSum(head) {
  if (!head) {
    return 0;
  }
  return head.val + getSum(head.next);
}
