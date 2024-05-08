/** https://leetcode.com/problems/number-of-islands/description/
 * @param {character[][]} grid
 * @return {number}
 */
/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

INPUT: binary grid
OUTPUT integer representing the number of 'islands'

- this is similar to the island perimeter problem except instead of finding the perimeter of one island
we need to determine how many separate islands there are in the grid.

- on our global loop that is searching for a one to use as a starting point we need adjust our logic
    - once we find the first island and have traversed the entire island and stored each cell location
    - we can use that set as a conditional to prevent counting the same island twice


example: output: 1
[
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]]
*/
var numIslands = function (grid) {
  const visitedIslands = new Set();
  let count = 0;
  function dfs(row, col) {
    if (row < 0 || row >= grid.length) return;
    if (col < 0 || col >= grid[0].length) return;
    if (grid[row][col] == 0) return;
    if (visitedIslands.has(row * grid[0].length + col)) return;

    visitedIslands.add(row * grid[0].length + col);

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 0 || visitedIslands.has(i * grid[0].length + j))
        continue;
      dfs(i, j);
      count++;
    }
  }

  return count;
};
