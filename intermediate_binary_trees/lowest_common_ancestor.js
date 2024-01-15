/*
'''
❓ PROMPT
Given 2 nodes, p & q, in a binary tree, return the earliest node with both p & q as descendants.

Example(s)
     1 <--- root
  2      3
4   5  6   7

lowestCommonAncestor(root, node4, node5) == node2
lowestCommonAncestor(root, node2, node3) == root
lowestCommonAncestor(root, root, node7) == root
lowestCommonAncestor(root, node5, node6) == root
lowestCommonAncestor(root, node3, node3) == node3  (self)
 

🔎 EXPLORE
List your assumptions & discoveries:
 once we find either p or q we can stop traversing down that subtree this is why:
  - if we search the rest of the tree and do not find the other node (p/q) we can logically reason that the LCA is the node that we found.

  BRUTE FORCE SOLUTION:
  - find the path for p and q
    - compare the two paths to find when they diverge.
    - return the last common anscestor

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function lowestCommonAncestor(root, p, q) {
def lowestCommonAncestor(root: Node, p: Node, q: Node) -> Node:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;

  const resL = lowestCommonAncestor(root.left, p, q);
  const resR = lowestCommonAncestor(root.right, p, q);

  return resL && resR ? root : resL || resR;
}


function lowestCommonAncestor1(root, p, q) {
  const targetPaths = [];
  let ansestor = null;
  if (p == q) return p;

  function dfs(node, current = []) {
    current.push(node);
    if ((node.value === p.value) | (node.value == q.value)) {
      targetPaths.push([...current]);
    }

    node.left && dfs(node.left, current);
    node.right && dfs(node.right, current);

    current.pop();
  }

  dfs(root);

  const [path1, path2] = targetPaths;

  for (let i = 0; i < path1.length && i < path2.length; i++) {
    if (path1[i]?.value == path2[i]?.value) ansestor = path1[i];
  }
  return ansestor;
}

let oneNode = new Node(1);
console.log(lowestCommonAncestor(oneNode, oneNode, oneNode) === oneNode);

//       1
//    2      3
//  4   5  6   7
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

console.log(lowestCommonAncestor(node1, node4, node5) === node2);
console.log(lowestCommonAncestor(node1, node2, node3) === node1);
console.log(lowestCommonAncestor(node1, node1, node7) === node1);
console.log(lowestCommonAncestor(node1, node5, node6) === node1);
console.log(lowestCommonAncestor(node1, node3, node3) === node3);

//           30
//     20         40
//  10   25     33   60
//   15 23    32       80
let node30 = new Node(30);
let node20 = new Node(20);
let node40 = new Node(40);
let node10 = new Node(10);
let node25 = new Node(25);
let node33 = new Node(33);
let node60 = new Node(60);
let node15 = new Node(15);
let node23 = new Node(23);
let node32 = new Node(32);
let node80 = new Node(80);
node30.left = node20;
node30.right = node40;
node20.left = node10;
node20.right = node25;
node40.left = node33;
node40.right = node60;
node10.right = node15;
node25.left = node23;
node33.left = node32;
node60.right = node80;

console.log(lowestCommonAncestor(node30, node15, node10) === node10);
console.log(lowestCommonAncestor(node30, node15, node23) === node20);
console.log(lowestCommonAncestor(node30, node15, node80) === node30);
console.log(lowestCommonAncestor(node30, node30, node30) === node30);
console.log(lowestCommonAncestor(node30, node32, node80) === node40);
console.log(lowestCommonAncestor(node30, node40, node60) === node40);
