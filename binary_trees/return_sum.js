/*
Given a binary tree, write a function that computes the maximum sum on any path from the root to a leaf, considering only every other value. The root is always included, the second level values are not, the third level is, etc.
*/

// Binary trees are defined with this interface:
class Node {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;
    this.left = leftChild;
    this.right = rightChild;
  }
}



function maxSumPath(root) {
  // DFS
  if (!root) return 0;
  console.log(root.value);
  return root.value + Math.max(maxSumPath(root.left), maxSumPath(root.right));
}

// console.log(maxSumPath(testData4))
maxSumPath(testData4);
const testData1 = new Node(1); // => 1

const testData2 = new Node(1, null, new Node(2, new Node(3))); // => 4
//       1
//     2   3

const testData3 = new Node(
  1,
  new Node(9, new Node(2)),
  new Node(3, null, new Node(3))
); // => 4
//         1
//       9   3
//     2       3

const testData4 = new Node(
  1,
  new Node(9, new Node(2)),
  new Node(3, null, new Node(3, null, new Node(10)))
); // => 4
//        1
//      9    3
//    2         3
//                10

const testData5 = new Node(1, new Node(1), new Node(1)); // => 1
//      1
//    1   1

const testData6 = new Node(
  1,
  new Node(1),
  new Node(1, new Node(1), new Node(2))
); // => 3

//          1
//       1      1
//            1    2

// maxSumPath(testData6);
