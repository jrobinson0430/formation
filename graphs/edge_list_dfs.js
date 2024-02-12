/*
'''
❓ PROMPT
Given a vertex and edge list of nodes and a start node for an undirected graph return the sum of all the nodes values accessible from the start node. For practice's sake, do this in DFS order.

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
 First, convert the V/E list to an adjacency list for efficiency and ease of lookup. Next, perform a traversal to get the total sum.

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

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
  const adjacencyList = toAdjacencyList(vertexList, edgeList);

  let sum = 0;
  const visited = new Set();

  function dfs(node) {
    sum += node;

    for (const child of adjacencyList[node]) {
      if (!visited.has(node)) continue;
      visited.add(node);
      dfs(child);
    }
  }

  dfs(startNode);
  return sum;
}

console.log(
  sumNodes(
    [1, 2, 3, 4, 5],
    [
      [2, 1],
      [3, 2],
      [3, 1],
    ],
    4
  ) == 4
);
