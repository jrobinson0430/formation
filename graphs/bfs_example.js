function getNodes(startNode, adjacencyList, targetLevel) {
  let output = [];

  const visited = new Set();
  const queue = [];

  queue.push([startNode, 0]);
  visited.add(startNode);

  /**
   * BFS implementation
   */
  while (queue.length > 0) {
    let [nodeID, level] = queue.shift();
    if (level === targetLevel) {
      output.push(nodeID);
    }
    const neighbors = adjacencyList.get(nodeID);
    // console.log(neighbors);
    // Expand the frontier
    neighbors.map((neighbor) => {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, level + 1]);
        visited.add(neighbor);
      }
    });
  }
  return output;
}

const adjacencyList = new Map([
  [10, [5, 6, 1]],
  [5, [2, 3]],
  [6, []],
  [1, [0]],
  [2, []],
  [3, []],
  [0, [1]],
]);

console.log(getNodes(10, adjacencyList, 2));
