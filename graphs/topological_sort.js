/**
 * Given a graph represented as a vertex list and an edge list,
 * return an adjacency list that represents the same graph
 */
function graphToAdjacencyList(vertexList, edgeList) {
  const adjacencyList = {};

  for (let vertex of vertexList) {
    adjacencyList[vertex] = [];
  }

  for (let [from, to] of edgeList) {
    adjacencyList[from].push(to);
  }

  return adjacencyList;
}


/*
{
  A: [B, C],
  B: [], SINK
  C: [D],
  D: [B, E],
  E: [], SINK
  F: [C]
}


*/

// Find a source
// Remove it
// Repeat until graph empty or no source exists

/**
 * Given a graph return a list of its vertexes
 */
 function graphGetVertexes(graph) {
  return Object.keys(graph);
}

/**
 * Given a graph, return an array of source vertexes, i.e., vertexes
 * with no incoming edges
 */
 function graphGetSources(graph) {
  let inDegrees = graphGetInDegrees(graph);

  return graphGetVertexes(graph).filter(vertex => inDegrees.get(vertex) === 0);
}

/**
 * Given a graph, return a Map whose keys are vertexes and whose
 * values are that vertexes in-degree.
 *
 * A vertex's in-degree is the number of incoming edges to that vertex.
 */
function graphGetInDegrees(graph) {
  let inDegrees = new Map(graphGetVertexes(graph).map(v => [v, 0]));

  return Object.values(graph).flat().reduce((map, v) => map.set(v, map.get(v) + 1), inDegrees);
}

function graphGetSource(graph) {
  return graphGetSources(graph)[0];
}

function getNodeCount(graph) {
  return Object.keys(graph).length;
}

function deleteNode(graph, node) {
  delete graph[node];
}

function topologicalSort(graph) {
  const sortedList = [];
 
  while (getNodeCount(graph) > 0) {
    let source = graphGetSource(graph);

    if (!source) {
      throw Error('Cycle detected');
    }
    sortedList.push(source);
    deleteNode(graph, source);
  }

  return sortedList;
}

function topologicalSortRecursive(graph) {
  if (getNodeCount(graph) === 0) {
    return [];
  }

  let source = graphGetSource(graph);

  if (!source) {
    throw Error('Cycle detected');
  }

  deleteNode(graph, source);

  let sortedRestOfGraph = topologicalSortRecursive(graph)

  return [source].concat(sortedRestOfGraph);
}

let vertexList = ['A', 'B', 'C', 'D', 'E', 'F'];
let edgeList = [
  ['A', 'B'],
  ['A', 'C'],
  ['C', 'D'],
  ['D', 'B'],
  ['D', 'E'],
  ['F', 'C']
]

let graph = graphToAdjacencyList(vertexList, edgeList);

// console.log(graph);

