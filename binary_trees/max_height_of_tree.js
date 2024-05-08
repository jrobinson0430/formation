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
let root = new Node(10, left, right);


//          A
//      B       C
//    D   E   F   G
const testData = new Node(
  "A",
  new Node("B", new Node("D"), new Node("E")),
  new Node("C", new Node("F"), new Node("G"))
); 


function maxTreeHeight(root) {
  const stack = [];
  let maxHeight = 0;

  function helper(node) { 
    // console.log('node:', node?.value || null, 'stack:', stack, 'maxHeight:', maxHeight )
    if (!node) {
      if (maxHeight < stack.length) maxHeight = stack.length;
      return;
    }

    stack.push(node.value);

    helper(node.right); 
    helper(node.left); 

    stack.pop(); 
  }

  helper(root);
  console.log(maxHeight)
  return maxHeight;
}

maxTreeHeight(root) // 3
