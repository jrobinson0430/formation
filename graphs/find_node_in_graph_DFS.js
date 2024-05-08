/*
'''
❓ PROMPT
Given a starting node in a graph and a target, traverse the graph using DFS and return true if a node with the target value exists, and false otherwise

Example(s)
  1
 / \
2   3
node.hasPathTo(3) == true
node.hasPathTo(4) == false

12
|
18
| \
1  4 - 3
   |
   9
node.hasPathTo(9) === true
node.hasPathTo(14) === false
 

🔎 EXPLORE
List your assumptions & discoveries:
* will there be any islands
  - assume no
* will there be any cycles?
* is this a directed or undirected graph?
  - directed
* can the starting node be null?
  - yes
* can there be duplicate values within the graph?
  - yes

Insightful & revealing test cases:
since we are given a starting node, this is very similar to the binary tree DFS. The biggest differences are:
1. we must traverse an arbitrary number of children per node.
2. we must account for cycles within the graph

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function hasPathTo(node, target) {
hasPathTo(target) { // Alternatively, if it's written inside the Node class


 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// Node Class
class Node {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }

  // my implementation that utilizes a boolean
  hasPathTo(target) {
    const visitedNodes = new Set();
    let hasVisited = false;

    function dfs(node) {
      if (!node) return;

      if (node.value === target) return (hasVisited = true);
      visitedNodes.add(node);

      for (let child of node.children) {
        if (!visitedNodes.has(child)) dfs(child);
      }
    }

    dfs(this);
    return hasVisited;
  }
}


// my implementation that utilizes a boolean
function hasPathTo(node, target) {
  if (!node) return false;

  const visitedNodes = new Set();
  let hasTarget = false;

  function dfs(currNode) {
    if (!currNode || hasTarget) return;
    if (currNode.value === target) return (hasTarget = true);

    visitedNodes.add(currNode);

    for (let child of currNode.children) {
      if (!visitedNodes.has(child)) dfs(child);
    }
  }

  dfs(node);
  return hasTarget;
}



class Node {
  constructor(val = null, children = []) {
    this.val = val;
    this.children = children;
  }

  // DFS as a class method
  hasPathTo(target) {
    let visited = new Set();

    function hasPath(node, target) {
      if (node.val === target) return true;

      visited.add(node);

      for (const child of node.children) {
        if (!visited.has(child) && hasPath(child, target)) return true;
      }
      return false;
    }

    return hasPath(this, target);
  }
}

// DFS as a standalone function
function hasPathTo(node, target) {
  let visited = new Set();

  function hasPath(node) {
    if (node.val === target) return true;

    visited.add(node);

    for (const child of node.children) {
      if (!visited.has(child) && hasPath(child)) return true;
    }

    return false;
  }

  if (!node) return false;

  return hasPath(node);
}






// test cases

let node = new Node(1, [new Node(2), new Node(3)]);
console.log(node.hasPathTo(3) === true);
console.log(node.hasPathTo(4) === false);
// standalone version
console.log(hasPathTo(node, 3) === true);
console.log(hasPathTo(node, 4) === false);

node = new Node(12, [
  new Node(18, [new Node(1), new Node(4, [new Node(3), new Node(9)])]),
]);
console.log(node.hasPathTo(9) === true);
console.log(node.hasPathTo(14) === false);
console.log(node.hasPathTo(0) === false);
console.log(node.hasPathTo(12) === true);
// standalone version
console.log(hasPathTo(node, 9) === true);
console.log(hasPathTo(node, 14) === false);
console.log(hasPathTo(node, 0) === false);
console.log(hasPathTo(null, 0) === false);
console.log(hasPathTo(node, 12) === true);

node = new Node(1);
console.log(node.hasPathTo(1) === true);
console.log(node.hasPathTo(2) === false);
// standalone version
console.log(hasPathTo(node, 1) === true);
console.log(hasPathTo(node, 2) === false);

node = new Node(1, [new Node(2), new Node(3)]);
let cycleNode = new Node(5, [node]);
node.children.push(cycleNode);
console.log(node.hasPathTo(1) === true);
console.log(node.hasPathTo(2) === true);
console.log(node.hasPathTo(5) === true);
console.log(node.hasPathTo(4) === false);
// standalone version
console.log(hasPathTo(node, 1) === true);
console.log(hasPathTo(node, 2) === true);
console.log(hasPathTo(node, 5) === true);
console.log(hasPathTo(node, 4) === false);

node = new Node(12, [
  new Node(18, [new Node(5), new Node(5, [new Node(5), new Node(5)])]),
]);
console.log(node.hasPathTo(12) === true);
console.log(node.hasPathTo(5) === true);
console.log(node.hasPathTo(4) === false);
// standalone version
console.log(hasPathTo(node, 12) === true);
console.log(hasPathTo(node, 5) === true);
console.log(hasPathTo(node, 4) === false);

let cycleNode1 = new Node(3);
let cycleNode2 = new Node(2);
cycleNode1.children.push(cycleNode2);
cycleNode2.children.push(cycleNode1);
node = new Node(12, [
  new Node(18, [
    new Node(5),
    cycleNode1,
    new Node(5, [new Node(5), cycleNode2, new Node(5)]),
  ]),
]);
console.log(node.hasPathTo(12) === true);
console.log(node.hasPathTo(2) === true);
console.log(node.hasPathTo(3) === true);
console.log(node.hasPathTo(5) === true);
console.log(node.hasPathTo(4) === false);
// standalone version
console.log(hasPathTo(node, 12) === true);
console.log(hasPathTo(node, 2) === true);
console.log(hasPathTo(node, 3) === true);
console.log(hasPathTo(node, 5) === true);
console.log(hasPathTo(node, 4) === false);
