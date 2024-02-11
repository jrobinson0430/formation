const registeredNodeIds = new Set();

/*
the node class has includes two variables:
id: a unique integer value that is used for identifying individual nodes
neighbors: an array that represents an arbitrary number of children within a graph
*/
class Node {
  constructor(id) {
    if (registeredNodeIds.has(id)) {
      throw new Error(
        "Duplicate ID found. Every node instance must have a unique ID. Change the id arg"
      );
    }
    registeredNodeIds.add(id);
    this.id = id;
    this.neighbors = [];
  }

  toString() {
    return this.id.toString();
  }
}

/*
if a graph is undirected it's important to populate both the start and end nodes neighbor's array.
*/
const connect = (start, end, twoWayConnection = false) => {
  start.neighbors.push(end);
  if (twoWayConnection) {
    end.neighbors.push(start);
  }
};

const printAsVertexAndEdgeList = (nodes) => {
  const vertices = nodes.map((node) => node.id);
  const edges = [];
  nodes.forEach((start) => {
    start.neighbors.forEach((end) => {
      edges.push([start.id, end.id]);
    });
  });

  console.log(
    `vertices: ${JSON.stringify(vertices)}\nedges: ${JSON.stringify(edges)}`
  );
  return `vertices: ${JSON.stringify(vertices)}\n\nedges: ${JSON.stringify(
    edges
  )}`;
};

const printAsAdjacencyMatrix = (nodes) => {
  const nodeIdToIndexMapping = {};
  nodes.forEach((node, i) => {
    nodeIdToIndexMapping[node.id] = i;
  });

  let theString = `Node ID to row index in matrix: ${JSON.stringify(
    nodeIdToIndexMapping
  )}\n\n`;
  const N = nodes.length;

  const matrix = Array(N)
    .fill(0)
    .map(() => Array(N).fill(0));

  nodes.forEach((node) => {
    const id = node.id;
    const rowIndex = nodeIdToIndexMapping[id];
    const row = matrix[rowIndex];
    node.neighbors.forEach((neighbor) => {
      const neighborId = neighbor.id;
      const neighborIndex = nodeIdToIndexMapping[neighborId];
      row[neighborIndex] = 1;
    });
  });

  theString += `Adjacency Matrix:\n`;
  matrix.forEach((row) => {
    theString += `${row} \n`;
  });
  console.log(theString);
  return theString;
};

const printAsAdjacencyList = (nodes) => {
  const adjacencyList = {};
  nodes.forEach((n) => {
    adjacencyList[n.id] = [];
  });

  nodes.forEach((node) => {
    node.neighbors.forEach((neighbor) => {
      adjacencyList[node.id].push(neighbor.id);
    });
  });

  let theString = "";
  Object.entries(adjacencyList).forEach(([k, v]) => {
    theString += `(${k}, [${v}])\n`;
  });

  console.log(theString);
  return theString;
};

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

connect(node1, node2);
connect(node1, node3, true);
connect(node3, node4);
connect(node4, node5);
connect(node4, node2);

// we use an array to store all the node references for this undirected graph.
let nodes = [node1, node2, node3, node4, node5];

printAsVertexAndEdgeList(nodes);
printAsAdjacencyMatrix(nodes);
printAsAdjacencyList(nodes);

function toAdjacencyList(vertexList, edgeList, isUndirected = false) {
  let output = new Map();

  // Seed the adjacency list with every vertex
  vertexList.forEach((v) => output.set(v, []));
  // Build out the adjacency list
  edgeList.forEach((edge) => {
    output.get(edge[0]).push(edge[1]);
    if (isUndirected) {
      output.get(edge[1]).push(edge[0]);
    }
  });

  return output;
}

let vertexList = [1, 2, 3, 4];
let edgeList = [
  [1, 2],
  [1, 3],
  [3, 4],
];

const adjList = toAdjacencyList(vertexList, edgeList);

// const outputAdjList = JSON.stringify();
console.log(
  "Vertex List: " +
    JSON.stringify(vertexList) +
    "\n" +
    "Edge List: " +
    JSON.stringify(edgeList) +
    "\n" +
    "Adjacency List: ",
  Object.fromEntries(adjList)
);
