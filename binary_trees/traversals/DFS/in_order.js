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




function preorder(root) {
  if (root == null) return;
  console.log(root);
  preorder(root.left);
  preorder(root.right);
}


preorder(root)