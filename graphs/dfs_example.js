let output = [];

function dfs(adjacencyList) {
  let visited = new Set();

  function dfsHelper(currNode) {
    const neighbors = adjacencyList.get(currNode);
    // Base case: Already visited
    if (visited.has(currNode)) {
      return;
    }
    visited.add(currNode);
    output.push(currNode);
    // Base case: no more neighbors
    if (neighbors.length === 0) {
      output.push("DONE");
      return;
    }

    // Recursive case: iterate over neighbors and recurse
    for (let i = 0; i < neighbors.length; i++) {
      const neighborNode = neighbors[i];
      if (!visited.has(neighborNode)) {
        dfsHelper(neighborNode);
      }
    }
  }
  adjacencyList.forEach((_, node) => {
    if (!visited.has(node)) {
      dfsHelper(node);
    }
  });
}

let adjacency_list = new Map([
  [10, [5]],
  [5, [2]],
  [6, [5]],
  [1, [0]],
  [2, []],
  [3, [2, 6]],
  [0, [1]],
]);
dfs(adjacency_list);

console.log(output.join("\n"));
