// https://leetcode.com/problems/same-tree/description/

const isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


var isSameTree2 = function (p, q) {
  let isSame = true;
  
  function dfs(node1, node2) {
    if ((!node1 && node2) || (node1 && !node2) || node1?.val !== node2?.val) {
      isSame = false;
      return;
    }
    if (!node1 && !node2) return;

    dfs(node1.left, node2.left);
    dfs(node1.right, node2.right);
  }
  dfs(p, q);

  return isSame;
};