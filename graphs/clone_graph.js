/** https://leetcode.com/problems/clone-graph/description/
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

/*
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
*/
var cloneGraph = function (node) {
  const clonedHash = new Map();

  function dfs(current) {
    if (!current) return;

    if (clonedHash.has(current)) return clonedHash.get(current);

    const clone = new Node(current.val);

    clonedHash.set(current, clone);

    for (const neighbor of current.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }
    return clone;
  }

  return dfs(node);
};
