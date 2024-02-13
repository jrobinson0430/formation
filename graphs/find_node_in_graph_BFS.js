// BFS as a standalone function
function hasPathTo_bfs(node, target) {
  if (!node) return false;

  const queue = [node];
  const visited = new Set();

  while (queue.length) {
    const current = queue.shift();
    if (current.value === target) return true;
    visited.add(current);

    for (const child of current.children) {
      if (!visited.has(child)) queue.push(child);
    }
  }

  return false;
}
