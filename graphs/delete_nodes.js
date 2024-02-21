/* https://leetcode.com/problems/delete-nodes-and-return-forest/description/

Given the root of a binary tree, each node in the tree has a distinct value.

After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

Return the roots of the trees in the remaining forest. You may return the result in any order.
*/


// bfs
var delNodes = function (root, to_delete) {
  const results = [];
  const queue = [[root, true]]; // [node, noParent]
  const deleteSet = new Set(to_delete);

  while (queue.length) {
    const [current, noParent] = queue.shift();
    const shouldDelete = deleteSet.has(current.val);

    if (!shouldDelete && noParent) {
      // is a root
      results.push(current);
    }

    if (current.left) {
      queue.push([current.left, shouldDelete]);
      if (deleteSet.has(current.left.val)) current.left = null;
    }

    if (current.right) {
      queue.push([current.right, shouldDelete]);
      if (deleteSet.has(current.right.val)) current.right = null;
    }
  }
  return results;
};



var delNodes = function (root, to_delete) { // DFS
  const result = [];
  const deleteSet = new Set(to_delete);

  function dfs(node) {
    if (!node) return null;

    node.left = dfs(node.left);
    node.right = dfs(node.right);

    if (deleteSet.has(node.val)) {
      node.left && result.push(node.left);
      node.right && result.push(node.right);
      return null;
    }
    return node;
  }

  dfs(root);
  if (!deleteSet.has(root.val)) result.push(root);
  return result;
};