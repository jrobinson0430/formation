
/* https://leetcode.com/problems/shortest-path-in-binary-matrix/
 WRONG WRONG WRONG WRONG WRONG BACKTRACKING SOLUTION DOES NOT WORK 
    INPUT: square binary matrix of integer
    OUTPUT: integer representing the length of the shortest clear path (# of visited cells in path)

    CONSTRAINTS:
    - matrix is a square (n x n)
    n is between 1-100 (inclusive)
    grid[i][j] is a 0 or a 1

    CLARIFYING QUESTIONS:
    * 
    EXPLORATION:
    * a clear path in a binary matrix is a path from the top-left cell to the bottom-right cell such that:
        - all visited cells of the parth are 0.
        - all cells must share an edge or a corner (think of the diffent moves a king can make)
    * backtracking approach because we have 8 decisions to choose from for each path move.
        - if checkCell is 1, cant move
        - if checkCell is 0, make move and increment pathSum, repeat
            - remember to undo last decision and decrement pathSum
    * stop conditions:
        - coordinates go out of bounds
        - reach the bottom right cell
    * we need to create an array of coordinates 


    * if n.length == 1
        - grid[i][j] = 0 -> 1
        - grid[i][j] = 1 -> -1
    * if n.length == 2 the top left and bottom right must be 0s, if so return 2 otherwise -1

    for each cell we need to use the moveArr to adjust the coordinates to search that decision


    moveArr = [-1,-1] [-1,0] [-1,1] [0,-1] [0,1] [1,-1] [1,0] [1,1]
    Input: grid = [
        [0,0,0],
        [1,1,0],
        [1,1,0]]

    Output: 4
    [00] [10] [20] [30] [31] [32] [23] [12] [03] [04] [05] []
    [
        [0,1,1,0,0,0],
        [0,1,0,1,1,0],
        [0,1,1,0,1,0],
        [0,0,0,1,1,0],
        [1,1,1,1,1,0],
        [1,1,1,1,1,0]
    ]
    */
var shortestPathBinaryMatrix = function (grid) {
  let shortestPath = Infinity;
  if (grid[0][0] == 1 || grid[grid.length - 1][grid.length - 1]) return -1;
  /*
    [
        [0,0,0],
        [1,1,0],
        [1,1,0]]
    */
  function backtrack(row, col, pathLength = 1, currentPath = [[0, 0]]) {
    if (row >= grid.length || row < 0) return; // out of bounds
    if (col >= grid.length || col < 0) return; // out of bounds
    if (grid[row][col] == 1) return;
    grid[row][col] = 1;

    if (row == grid.length - 1 && col == grid.length - 1) {
      shortestPath = Math.min(shortestPath, pathLength);
      return;
    }

    for (let i = -1; i < 2; i++) {
      // represents move adjustments
      for (let j = -1; j < 2; j++) {
        if (i == 0 && j == 0) continue;
        currentPath.push([row + i, col + j]);
        backtrack(row + i, col + j, pathLength + 1, currentPath);
        currentPath.pop();
      }
    }
  }
  backtrack(0, 0);

  return shortestPath == Infinity ? -1 : shortestPath;
};


// ------------------------------------- //

// BFS APPROACH
 
var shortestPathBinaryMatrix = function (grid) {
  /* BFS approach: utilize a queue to store nodes we have yet to process.
    the elements in the queue will be arrays with a length of 3
        - 0: row
        - 1: col
        - 2: currentPath size
    
     * for each cell we need to check all the possible directions (8 total)
        - if coordinates are out of bounds, ignore
        - if cell value is a 1, ignore
        - if a cell value is 0, add data to queue for processing
            - be sure to increment the currentPath by 1 for each cell added at that 'level' or 'move'
        *- if the coordinates match the bottom right corner of grid, return the currentPath
    
    */

  if (grid[0][0] == 1 || grid.at(-1).at(-1) == 1) return -1;
  // [row, col, count]
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [row, col, currentPath] = queue.shift();
    // check if destination has been reached
    if (row == grid.length - 1 && col == grid.length - 1) return currentPath;

    // check each possible move
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        const newRow = row + i;
        const newCol = col + j;

        if (newRow < 0 || newRow >= grid.length) continue;
        if (newCol < 0 || newCol >= grid.length) continue;
        if (grid[newRow][newCol]) continue;

        queue.push([newRow, newCol, currentPath + 1]);

        grid[newRow][newCol] = "*";
      }
    }
  }
  return -1;
};