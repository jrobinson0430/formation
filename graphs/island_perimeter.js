/** https://leetcode.com/problems/island-perimeter/
 * @param {number[][]} grid
 * @return {number}
 */

/*
You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.


INPUT: binary matrix representing a rectangular row x col grid
OUTPUT: integer representing the perimeter/edges of the island (1s) within the matrix.
CONSTRAINTS:
* row >= 1 && row <= 100
* col <= 100
* values will only be 0s and 1s
* there is exactly one island in the grid


EXPLORE:
- since we know the grid has only 1 island, we must start on a 1 value. It does not matter which 1 we start on
- we need to search the entire island utilizing a DFS or BFS approach.
- if we reach the edge of the grid, it will count towards the perimeter
- if we reach water (0), it will count towards the perimeter
- if we reach another piece of the island we will need to explore that cell as well, it will not count towards the perimeter


approach 1: DFS
find a piece of the island and utilize a set to track which cells we have already visited. Use recursion to simulate the 4 different directions we need to check for each cell.
When we have determined we have reached an edge in the island we will increment the perimeter sum integer.

approach 2: BFS

*/

var islandPerimeter = function (grid) {
  const visited = new Set();
  // let sum = 0;
  function dfs(row, col) {
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] == 0
    )
      return 1;

    if (visited.has(row * 100 + col)) return 0;

    visited.add(row * 100 + col);

    let sum = dfs(row, col + 1);
    sum += dfs(row + 1, col);
    sum += dfs(row, col - 1);
    sum += dfs(row - 1, col);

    return sum;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) return dfs(i, j);
    }
  }
};

/*
 Input: grid = [
     [0,1,0,0],
     [1,1,1,0],
     [0,1,0,0],
     [1,1,0,0]
     ]
     
 Output: 16
*/
