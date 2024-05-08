/*
without using recursion, iterate through binary tree in order.
*/

var inorderTraversal = function (root) {
  if (!root) return [];
  const stack = [root];
  const result = [];

  while (stack.length) {
    const curr = stack.at(-1);
    if (curr.left) {
      stack.push(curr.left);
      curr.left = null;
    } else {
      const node = stack.pop();
      result.push(node.val);
      if (curr.right) stack.push(curr.right);
    }
  }
  return result;
};
