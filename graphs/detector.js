class Node {
  constructor(value = null, children = []) {
    
  }
}
  
/*

class Node(object):
  def __init__(self):
    self.neighbors = []
  
  def __repr__(self):
    return str(id(self))

def connect(start, end, two_way_connection=False):
  start.neighbors.append(end)
  if two_way_connection:
    end.neighbors.append(start)
  
'''
Feel free to add nodes or edit connections here.

Sample tree:

       node1
      /     \
    node2 node3
           /
          node4
          /
         node5
'''
node1 = Node()
node2 = Node()
node3 = Node()
node4 = Node()
node5 = Node()

connect(node1, node2)
connect(node2, node3)
connect(node3, node4)
connect(node4, node5)

nodes = [node1, node2, node3, node4, node5]

run_detector(nodes)
*/

class Detector {

/**
 * @param {Node} nodes
 * @return {object} Adjacency List
 */
  nodesToAdjacencyList(nodes) {
    const adjacencyList = {};

    nodes.forEach(node => adjacencyList[node.value] = node.children.map(child => child.value));

    // console.log(adjacencyList)
    return adjacencyList;
  }

/**
 * @param {object} adjacencyList
 * @return {boolean}
 */
  is_undirected(adjacencyList) {
    if (typeof adjacencyList !== 'object' || Array.isArray(adjacencyList)) throw new Error('Invalid Input');

    for (const node of Object.keys(adjList)) {
      for (const child of adjacencyList[node]) {
        if (adjacencyList[child].includes(+node)) return true;
      }
    }
    return false
   }
}

class Node extends Detector {
  constructor(value = null, children = []) {
    super()
    this.value = value;
    this.children = children;
  }
}



function connect(start, end, twoWayConnection = false) {
  start.children.push(end);
  if (twoWayConnection) end.children.push(start);
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
connect(node1, node2)
connect(node1, node3)
connect(node3, node4)
connect(node4, node5)
const graphNodes = [node1, node2, node3, node4, node5]
const adjList = node1.nodesToAdjacencyList(graphNodes)
console.log(adjList)
console.log(node1.is_undirected(adjList))

/*
       node1
      /     \
    node2 node3
           /
          node4
          /
         node5
*/
// run_detector(nodes)


/*

def is_undirected(adj_list):
  for n in adj_list.keys():
    for neighbor in adj_list[n]:
      if n not in adj_list[neighbor]:
        return False
  return True

*/