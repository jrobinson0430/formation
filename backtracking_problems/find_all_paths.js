class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

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
);

//        1
//      9    3
//    2         3
//                10

const testData5 = new Node(1, new Node(1), new Node(1)); // => 1
//      1
//    1   1

const testData6 = new Node(
  10,
  new Node(8),
  new Node(4, new Node(1), new Node(2))
);

//          10
//       8      4
//            1    2

/*
Given a binary tree, find all the paths from root to leaf.


*/

function findPaths(root) {
  const stack = [];
  const result = [];

  function dfs(node) {
    if (!node) return;

    stack.push(node.value);

    if (!node.left && !node.right) {
      // leaf node
      result.push([...stack]);
      return;
    }

    if (node.left) {
      dfs(node.left);
      stack.pop();
    }

    if (node.right) {
      dfs(node.right);
      stack.pop();
    }
  }

  dfs(root);
  return result;
}

console.log(findPaths(testData4));
/*
1 -> 9 -> 2
1 -> 3 -> 3 -> 10
*/

console.log(findPaths(testData6));
/*
10 -> 8
10 -> 4 -> 1
10 -> 4 -> 2
*/
