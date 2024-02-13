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