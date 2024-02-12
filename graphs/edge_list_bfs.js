/*
'''
❓ PROMPT
Given a vertex and edge list of nodes and a start node for an undirected graph return the sum of all the nodes IDs accessible from the start node. For practice's sake, do this in BFS order.

Example(s)
vertexList: [1, 2, 3, 4, 5]
edgeList: [(1, 2), (2, 3), (1, 3)]

1--2
| /
3      4    5

sumNodes(vertexList, edgeList, 1) -> 6

Node 1 has access to 2 and 3. The sum of all these nodes is 6. Nodes 4 and 5 aren't accessible.
 

🔎 EXPLORE
List your assumptions & discoveries:
- we will need a helper function to convert V/E lists to an adjacencyList
  - since graph is undirected, we need to make edges two way
- BFS order will require the use of a queue along with a set to prevent infinity loops (cycles)


Insightful & revealing test cases:

 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
- toAdjacencyList helper

- initialize a sum integer: 0
- initialize a visited set: new Set()
- initialize a queue: [startNode]
- basic BFS setup for a tree except
- we must track which nodes we have already visited
- instead of adding left/right nodes we must add n number of nodes into queue using a loop

🛠️ IMPLEMENT
function sumNodes(vertexList, edgeList, startNode) {
def sumNodes(vertexList: list, edgeList: list, startNode: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function toAdjacencyList(vList, eList) {
  const adjacencyList = {};
  for (const vertex of vList) adjacencyList[vertex] = [];

  for (const [vertex1, vertex2] of eList) {
    adjacencyList[vertex1].push(vertex2);
    adjacencyList[vertex2].push(vertex1);
  }
  return adjacencyList;
}

function sumNodes(vertexList, edgeList, startNode) {
  let sum = 0;
  let visited = new Set();
  const adjacencyList = toAdjacencyList(vertexList, edgeList);
  const queue = [startNode];

  while (queue.length) {
    const node = queue.shift();
    if (visited.has(node)) continue;
    visited.add(node);

    sum += node;

    for (const child of adjacencyList[node]) queue.push(child);
  }
  console.log(sum);
  return sum;
}

sumNodes(
  [1, 2, 3, 4, 5],
  [
    [1, 2],
    [2, 3],
    [1, 3],
  ],
  1
);
