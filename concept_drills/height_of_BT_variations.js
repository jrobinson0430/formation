// /*

// The purpose of this session is to make sure that you are fluent on basic problems related to Find Height of Binary Tree — focusing specifically on the coding step of the classic technique.

// 1. Find the height of tree using recursion (basic)

// 3. Find height of tree using DFS (stack)

// */

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// function findHeightRecursive2(root) {
//   let height = 0;

//   function helper(node, localHeight) {
//     if (!node) {
//       return;
//     }

//     height = Math.max(height, localHeight);
//     if(node.left) {
//       helper(node.left, localHeight + 1);
//     }
//     if(node.right) {
//       helper(node.right, localHeight + 1);
//     }

//     return;

//     // const leftHeight = helper(node.left, localHeight + 1);
//     // const rightHeight = helper(node.right, localHeight + 1);

//     // if (leftHeight > rightHeight) {
//     //   height = leftHeight;
//     // } else {
//     //   height = rightHeight;
//     // }
//   }

//   helper(root, 1);

//   return height;
// }

// /*
//    1

// */
// // console.log(findHeightRecursive2(new Node(1)), 1)

// // const testData4 = new Node(
// //   1,
// //   new Node(9, new Node(2)),
// //   new Node(3, null, new Node(3, null, new Node(10)))
// // ); // => 4

// // //        1
// // //      9    3
// // //    2         3
// // //                10

// // console.log(findHeightRecursive2(testData4), 4);
// // const testData3 = new Node(
// //   1,
// //   new Node(9, new Node(2)),
// //   new Node(3, null, new Node(3))
// // ); // => 3
// // //         1
// // //       9   3
// // //     2       3

// // console.log(findHeightRecursive2(testData3), 3);

// function findHeightRecursive(root) {
//   if (!root) {
//     return 0;
//   }

//   return 1 + Math.max(findHeightRecursive(root.left), findHeightRecursive(root.right))
// }

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(4);
// let node5 = new Node(5);

// /*
//    1

// */
// // console.log(findHeightRecursive(new Node(1)), 1)
// console.log(findHeightRecursive2(new Node(1)), 1)

// const testData4 = new Node(
//   1,
//   new Node(9, new Node(2)),
//   new Node(3, null, new Node(3, null, new Node(10)))
// ); // => 4
// //        1
// //      9    3
// //    2         3
// //                10
// // console.log(findHeightRecursive(testData4), 4);
// console.log(findHeightRecursive2(testData4), 4)
// const testData3 = new Node(
//   1,
//   new Node(9, new Node(2)),
//   new Node(3, null, new Node(3))
// ); // => 3
// //         1
// //       9   3
// //     2       3

// 1 -> 9 -> 2
// 1 -> 3 --> 3

// // console.log(findHeightRecursive(testData3), 3);
// console.log(findHeightRecursive2(testData3), 3);

// //        1
// //      9    3
// //    2         3
// //                10

// 1 -> 3 -> 3 -> 10

function longestPath(root) {
  const stack = [];
  let path = "[]";
  let maxHeight = 0;

  function helper(node) {
    if (!node) {
      if (maxHeight < stack.length) {
        maxHeight = stack.length;
        path = "[" + stack.join("->") + "]";
      }
      return;
    }
    stack.push(node.val);
    helper(node.left);
    helper(node.right);
    stack.pop();
  }

  helper(root);
  return path;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.left = node2;
node1.right = node3;
node1.left.left = node4;
node1.left.left.left = node5;

console.log(longestPath(node1));
