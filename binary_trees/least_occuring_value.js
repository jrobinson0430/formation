/*
'''
Find Least Occurring Node

Given a binary tree with node values represented as integers, find and return the least occurring tree node value (eg: 3).

You can assume there will always be a valid answer (no duplicate frequencies or invalid arrangements).
 
INPUT: binary tree.


OUTPUT: least occurring value (integer)

approach #1:
- traverse the binary tree and keep track of they key (value of the node) and the frequency of the key in a map/object
- traverse using BFS
- sort the map/object by number of frequencies and return the key of the first index
.sort() <- O(n) , nLogn at worst
- Time complexity: O(nLogn), Space complexity: O(n)

approach #2
- initialize a map and a fixed length array
- traverse the binary tree and populate a frequency object.
- each traversal compare the current key frequency to a fixed length array.
  - index 0 = key
  - index 1 = least occurrence value
- return the index 0 of the array
- Time complexity: O(N) space O(N)


EXAMPLE(S)
      1
  2       _
2   _   _   _
should return Node(1)

      1
  1       1
1   1   1   1
should return Node(1)

  9
_   _
should return Node(9)
 

FUNCTION SIGNATURE
function findLeastOccurringNode(root) {
'''
*/

class Node {
  constructor(value, left = null, right = null) {
    this.value = val;
    this.left = left;
    this.right = right;
  }
}

// approach #1
function findLeastOccurringNode(root) {
  let q = [root];
  let map = {};
  while (q.length) {
    let curr = q.shift();
    let value = curr.val;
    map[value] ? map[value]++ : map[value] = 1;
    curr.left && q.push(curr.left);
    curr.right && q.push(curr.right);
  }
  let minKey = "", minVal = Infinity;
  for (let arr of Object.entries(map)) {
    if (minVal > arr[1]) {
      minKey = arr[0];
      minVal = arr[1];
    }
  }
  return minKey;
}
function findLeastOccurringNodeDFS(root) {
  let map = {}
  function DFS(node) {
    if (!node) retun;
    map[node.val] ? map[node.val]++ : map[node.val] = 1;
    node.left && DFS(node.left);
    node.right && DFS(node.right);
  }
  DFS(root);
  let minKey = "", minVal = Infinity;
  for (let arr of Object.entries(map)) {
    if (minVal > arr[1]) {
      minKey = arr[0];
      minVal = arr[1];
    }
  }
  return minKey;
}

/*
                  c
              B      B
            C   A   F  A
*/
function findLeastOccurringNodeDFSRecursive(root, map = {}) {
  if (!root) return;

  map[root.val] ? map[root.val]++ : map[root.val] = 1;

  if (root.left) findLeastOccurringNodeDFSRecursive(root.left, map);
  if (root.right) findLeastOccurringNodeDFSRecursive(root.right, map);

  let minKey = "", minVal = Infinity;
  for (let arr of Object.entries(map)) {
    if (minVal > arr[1]) {
      minKey = arr[0];
      minVal = arr[1];
    }
  }
  console.log(map, minKey)
  return minKey;
}

// approach #2
function findLeastOccurringNode2(root) {
  let queue = [root];
  let map = {};
  let tuple = [null, Infinity];

  while (queue.length) {
    const node = queue.shift();
    let value = node.val;
    const count = (map[value] || 0) + 1
    map[value] = count;
    console.log(map)
    if (count < tuple.at(1)) {
      tuple = [value, count]
    }
    console.log(tuple)
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return tuple.at(0)
}

let testCase1 = new Node(1, new Node(2, new Node(2))); // => 1
let testCase2 = new Node(1, new Node(1, new Node(1), new Node(1)), new Node(1, new Node(1), new Node(1))
); // => 1
let testCase3 = new Node(9); // => 9
const testCase4 = new Node("C", new Node("B", new Node("C"), new Node("A")), new Node("B", new Node("F"), new Node("A"))
); // => F






// console.log(findLeastOccurringNode(testCase1));
// console.log(findLeastOccurringNode(testCase2));
// console.log(findLeastOccurringNode(testCase3));
// console.log(findLeastOccurringNode(testCase4));
// console.log(findLeastOccurringNode2(testCase1));
// console.log(findLeastOccurringNode2(testCase2));
// console.log(findLeastOccurringNode2(testCase3));
// console.log(findLeastOccurringNode2(testCase4));

console.log(findLeastOccurringNodeDFSRecursive(testCase1));
console.log(findLeastOccurringNodeDFSRecursive(testCase2));
console.log(findLeastOccurringNodeDFSRecursive(testCase3));
console.log(findLeastOccurringNodeDFSRecursive(testCase4));


/*
a. What went well and not well from a technical perspective?
- DFS Recursive approach needed work
b. What went well and not well from a collaboration perspective?

c. What would you each do differently?
- Great session
*/