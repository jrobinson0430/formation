/*
'''
❓ PROMPT
Create a class that takes a vertex/edge list of a directed graph in the constructor. Suppose the inputted nodes are arbitrary strings.

Have 2 public methods:

(Map<string, int>, Array<Array<int>>) GraphConverter::getAsAdjacencyMatrix()

Return a tuple where the first value is a mapping to a row number and the second value is the VxV size matrix.

Map<string, List<string>> GraphConverter::getAsAdjacencyList()

Return a mapping from node ID to neighboring node IDs.

Example(s)
Suppose we have the following vertex list and edge list:
vertexList = ["n1", "n2", "n3"]
edgeList = [("n1", "n2")]

getAsAdjacencyList(vertexList, edgeList) should return
{
  "n1": ["n2"],
  "n2": [],
  "n3": [],
}
--------------------------------------------------------------------------------------------------------
getAsAdjacencyMatrix(vertexList, edgeList) should return a tuple with the following values.

First value (IDs can be arbitrarily assigned in any order):
{
  "n1": 0,
  "n2": 1,
  "n3": 2,
}

Second value:
[
  [0, 1, 0],
  [0, 0, 0],
  [0, 0, 0],
]
 

🔎 EXPLORE
List your assumptions & discoveries:
INPUT:
vertexList : array of nodes represented as arbitrary strings.
edgeList: matrix representing the edges or 'connections' of nodes within a graph. 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 
*/

class GraphConverter {
  getAsAdjacencyMatrix(vertexList, edgeList) {
    const graphMap = {};

    for (let i = 0; i < vertexList.length; i++) graphMap[vertexList[i]] = i;

    const matrix = Array(vertexList.length)
      .fill(null)
      .map(() => Array(vertexList.length).fill(0));

    for (const [start, end] of edgeList)
      matrix[graphMap[start]][graphMap[end]] = 1;

    return [graphMap, matrix];
  }

  getAsAdjacencyList(vertexList, edgeList) {
    const adjacencyList = {};
    for (const node of vertexList) adjacencyList[node] = [];

    for (const [start, end] of edgeList) adjacencyList[start].push(end);
    return adjacencyList;
  }
}

let vertexList = ["n1", "n2", "n3"];
let edgeList = [["n1", "n2"]];

const graphConverter = new GraphConverter();
// console.log(graphConverter.getAsAdjacencyMatrix(vertexList, edgeList))

console.log(
  JSON.stringify(graphConverter.getAsAdjacencyMatrix(vertexList, edgeList)) ===
    JSON.stringify([
      { n1: 0, n2: 1, n3: 2 },
      [
        [0, 1, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    ])
);
console.log(
  JSON.stringify(graphConverter.getAsAdjacencyList(vertexList, edgeList)) ===
    JSON.stringify({ n1: ["n2"], n2: [], n3: [] })
);
