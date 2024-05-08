/*
'''
❓ PROMPT
Suppose you are given the root of a *Node* class for a supposed N-ary tree.

This *Node* class has a *children* method that returns a list of *Node* children.

However, this tree is actually corrupted! There may be edges in the *children* class that break the basic rules of trees, resulting in possible cycles or multiple parents.

How many edges do you need to remove from this faulty tree to construct a valid tree?

Example(s)
    1
  /   \
  2   3
   \ /
    4
return 1
Explanation: 4 has two parents. We can remove any one of them to create a valid tree.

    1 <--
  /   \ |
  2   3 |
   \    |
    4 --|
return 1
Explanation: 4 loops back to the root (1). We can remove this back edge to create a valid tree.
 

🔎 EXPLORE
List your assumptions & discoveries:
- we are working with a N-ary tree meaning
  1. can only have 1 parent node
  2. there cannot be any cycles

INPUT:
root: a node representing the root of a N-ary tree

OUTPUT: integer representing the number of edges you need to remove to construct a valid tree.

Must look for cycles. Do I need to modify the tree at any point to continue searching for more corruption?

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work? DFS approach detecting cycles
Algorithm 1:
Time: O(V + E)
Space: O(N) N being the 

algorithm 2: BFS apprach detecting cycles
Time: O (V + E)

algorithm 3: Mathematical approach: number of vertexes - number of edges
Time: O (V + E)
 

📆 PLAN
Outline of algorithm # 1: DFS - track number of cycles
- initialize a visited set: new Set()
- initialize a result counter: 0
- make initial call to dfs helper using the root argument from outer function
- return the result counter
- dfs helper function that accepts 1 argument: node
  - base case:
    - if node has already been visited, we know we found a cycle and need to increment result counter and return
    - add current node to the visited set
    - loop through the children of the current node and recursively call the dfs helper function
 


Outline of algorithm # 2: BFS - track number of cycles
  - initialize a visited set: new Set()
  - initialize a counter variable: 0
  - initialize a queue: [root]
  - create a while loop: queue.length < 0
    - dequeue node
    - base case: if node has already been visited increment counter and continue to next iteration
    - add node to visited Set
    - loop through nodes children, adding each child to the queue for processing
  - return counter variable.

  Outline of algorithm # 3: Mathematical approach - BFS
  - initialize a vertex set: new Set()
  - initialize an edge count: 0
  - initialize a queue: [root]
  - create a while loop: queue.length < 0
    - dequeue node
      - add current node/vertex to vertex set
    - loop through nodes children, adding each child to the queue for processing
      - each time you add a child, increment the edge counter
  - return vertexSet.size - edge count;


'''
*/
function edgesAwayFromTreeDFS(root) { // DFS approach
  let visited = new Set();
  let result = 0;

  function dfs(node) {
    if (visited.has(node)) {
      result++ // 1
      return
    }

    visited.add(node);

    for (const child of node.children) {
      dfs(child)
    }
  }

  dfs(root);

  return result;
}

function edgesAwayFromTreeBFS(root) { // BFS approach
  let visited = new Set();
  let counter = 0;
  let queue = [root]; // []

  while (queue.length) {
    const node = queue.shift(); // 4

    if (visited.has(node)) { // true
      counter++ // 1
      continue;
    }

    visited.add(node); // {1, 2, 3, 4}
    for (const child of node.children) {
      queue.push(child) 
    }
  }

  return counter
}

function edgesAwayFromTree(root) {
  let vertexSet = new Set();
  let edgeCount = 0;
  const queue = [root];

  while(queue.length) {
    const node = queue.shift()
    if (vertexSet.has(node)) continue;
    vertexSet.add(node);

    for (const child of node.children) {
      edgeCount++
      queue.push(child)
    }
  }
  return edgeCount - (vertexSet.size - 1)
}

class Node {
  constructor(value, children = []) {
    this.value = value
    this.children = children
  }
}


let node4 = new Node(4)
let root = new Node(1, [new Node(2, [node4]), new Node(3, [node4])])
console.log(edgesAwayFromTree(root)) // 1

node4 = new Node(4)
root = new Node(1, [new Node(2, [node4]), new Node(3)])
node4.children = [root]
console.log(edgesAwayFromTree(root)) // 1

root = new Node(1, [
  new Node(2), new Node(3)
])
console.log(edgesAwayFromTree(root)) // 0
