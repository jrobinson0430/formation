/*

This traversal first explores the tree as broadly and closely as possible and gradually expands outward. BFS keeps track of yet-to-explore nodes in a queue. The 'first in, first out' behavior puts the root node first and the leaf nodes after. The algorithm explores the node at the front of the queue and enqueues its children in the back. The entire data structure will be visited when the queue is empty because there are no remaining children to enqueue.

This algorithm looks at the closer nodes before the further away nodes. This behavior is beneficial when nodes have a dense number of children or when searching for the shortest path between nodes by gradually expanding the search space. Typically this is when you want to find something nearby in a greedy manner. Real-world use cases are:
  * Suggesting friends-of-friends
  * Finding the shortest route from your home to the grocery store
  * Finding the shortest path out of a simple maze
  * Search engines index the internet by crawling for new web pages

          A
      B       C
    D   E    F  G

*/

class Node {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;
    this.left = leftChild;
    this.right = rightChild;
  }
}

//       10
//   5       15
// 2   7  12    17
let leftLeft = new Node(2);
let leftRight = new Node(7);
let rightLeft = new Node(12);
let rightRight = new Node(17);
let left = new Node(5, leftLeft, leftRight);
let right = new Node(15, rightLeft, rightRight);
let root = new Node(10, left, right); // use this for testing

const testData = new Node(
  "A",
  new Node("B", new Node("D"), new Node("E")),
  new Node("C", new Node("F"), new Node("G"))
); // A B C D E F G

/*
Basic BFS that only traverses the tree level by level and prints the value to the console
  * Does not track which level the value is on.
*/
function BFS_print_to_console(root) {
  if (!root) return [];
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    console.log(node.value);
    if (node.left) queue.push(node.left);
    if (node.left) queue.push(node.right);
  }
}
/*
This BFS keeps track of each level by using a nested loop that captures the size of the queue at the start of each new level.
*/
function BFS_print_levels(root) {
  if (!root) return [];

  let queue = [root];
  let allResults = [];

  while (queue.length > 0) {
    // take a snapshot of the queue size because it changes
    let size = queue.length;
    let levelResults = [];

    for (let i = 0; i < size; i++) {
      let node = queue.pop(); // remove from the right

      if (node.left) queue.unshift(node.left); // add to the left
      if (node.right) queue.unshift(node.right); // add to the left

      levelResults.push(node.value);
    }

    allResults.push(levelResults); // it's a new level
  }
  console.log(allResults);
  return allResults;
}

/*
BFS that tracks each level using a delimiter (null) to indicate the end of the level. This is a variation of the BFS that captures the length of the queue at the beginning of each level. 
*/

function BFS_print_levels2(root) {
  let queue = [root, null];
  let allLevels = [];
  let currentLevel = [];

  while (queue.length > 1) {
    const node = queue.shift();

    if (node === null) {
      queue.push(null);
      allLevels.push(currentLevel);
      currentLevel = [];
    } else {
      currentLevel.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  allLevels.push(currentLevel);

  console.log(allLevels);
  return allLevels;
}

// BFS_print_to_console(testData);
// BFS_print_to_console(root);

// BFS_print_levels(testData)
// BFS_print_levels(root)


BFS_print_levels2(testData);
