/*
'''
You're given a 2d array with 1's and 0's. 1's represent walls, and 0's represent open, walkable space. A robot starts on the top left and goes down to the bottom right. This robot can move in any the cardinal (NSEW) direction, not diagonals.

Output the shortest path a robot should take from the top left to the bottom right. If there are multiple shortest paths, any path is valid. If there is no valid path, return None/null.
 
EXAMPLE(S)
Maze:
0 0 0 0
1 1 0 0
0 0 0 1
0 1 1 0
0 0 0 0

getMazePath(maze) -> [(0, 0), (0, 1), (0, 2), (1, 2), (2, 2), (2, 1), (2, 0), (3, 0), (4, 0), (4, 1), (4, 2), (4, 3)]

Explanation: The robot needs to travel around the two rows of walls. We're representing the path returned by annotating it with Xs.
x x x 0
1 1 x 0
x x x 1
x 1 1 0
x x x x
 

FUNCTION SIGNATURE
def getMazePath(maze):
'''
*/

/*
always a binary matrix
will not always have a path, return null
- assume the top left position is always open.


- start at the top left of the matrix [0,0]
- we need to check each direction left/right up/down using a backtracking/recursive approach
  - if we are out of bounds, return
  - if we reach a wall (1) return
  - if we reach a open space (0), move to that space and continue searching for path.

- when we reach the bottom right of the matrix we know we have found a path.

0 0 0 0
1 1 0 0
0 0 0 1
0 1 1 0
0 0 0 0

start: [0,0] = 0
 -> [0, 1]


*/

function getMazePath(maze) {
  if (!maze?.length) return null;
  let shortestPath = [];
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function backtracking(row, col, currentPath, visitedSet = new Set()) {
    // base case
    if (row == maze.length - 1 && col == maze[0].length - 1) {
      if (shortestPath.length == 0) {
        shortestPath = [...currentPath];
        return;
      } else {
        shortestPath =
          currentPath.length < shortestPath.length
            ? [...currentPath]
            : shortestPath;
        return;
      }
    }

    // outbounds/wall
    if (visitedSet.has(row * maze[0].length + col)) return;
    if (row < 0 || row >= maze.length) return;
    if (col < 0 || col >= maze[0].length) return;
    if (maze[row][col] == 1) return;

    moves.forEach(([rowAdj, colAdj]) => {
      visitedSet.add(row * maze[0].length + col);
      currentPath.push([row + rowAdj, col + colAdj]);
      backtracking(row + rowAdj, col + colAdj, currentPath, visitedSet);
      currentPath.pop();
      visitedSet.delete(row * maze[0].length + col);
    });
  }

  backtracking(0, 0, [[0, 0]]);

  return shortestPath.length ? shortestPath : null;
}

console.log(
  getMazePath([
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
); // [(0, 0), (0, 1), (0, 2), (1, 2), (2, 2), (2, 1), (2, 0), (3, 0), (4, 0), (4, 1), (4, 2), (4, 3)]

// console.log(getMazePath([
//   [0, 1, 1, 1],
//   [1, 1, 1, 1],
//   [0, 0, 0, 0]
// ])) // null

// console.log(getMazePath([
//   [0,0,0,0]
// ])) // [[0, 0], [0, 1], [0, 2], [0, 3]]

// console.log(getMazePath([
//   [0,0,0,0],
//   [0,0,0,0]
// ]))

// console.log(getMazePath(null))

console.log(
  getMazePath([
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ])
);

// from collections import deque

// def get_neighbors(maze, i, j):
//     neighbors = set()
//     if i > 0 and maze[i-1][j] != 1:
//         neighbors.add((i -1, j))
//     if i < len(maze) - 1 and maze[i+1][j] != 1:
//         neighbors.add((i + 1, j))
//     if j > 0 and maze[i][j-1] != 1:
//         neighbors.add((i, j - 1))
//     if j < len(maze[0]) - 1 and maze[i][j+1] != 1:
//         neighbors.add((i, j + 1))
//     return neighbors

// def getMazePath(maze):
//     if len(maze) == 0:
//         return []
//     if len(maze[0]) == 0:
//         return []

//     q = deque()
//     visited = set()
//     # Seed with the current node and path
//     start_node = (0, 0)
//     start_path = [(0, 0)]
//     q.append((start_node, start_path))
//     visited.add((0, 0))

//     target = (len(maze) - 1, len(maze[0]) - 1)
//     while q:
//         curr_node, path = q.popleft()
//         if curr_node == target:
//             return path
//         neighbors = get_neighbors(maze, curr_node[0], curr_node[1])
//         for neighbor in neighbors:
//             if neighbor not in visited:
//                 visited.add(neighbor)
//                 newpath = list(path)
//                 newpath.append(neighbor)
//                 q.append((neighbor, newpath))
//     return None


/*

    [0, 0, 0, 0, 0],
    [1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
*/