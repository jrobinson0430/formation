/* Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

** You must do it in place.

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
    /*
    because the problem has an in place constraint, we have to approach this problem is a specific way. We have to first identify which rows and columns
    need to be replaced with zeros using a row major pass through the matrix

    - we need an additional row major pass in order to utilize the row/col we identified in the previous loop to modify them in place
    */
    let rows = new Set(); // {0}
    let cols = new Set(); // {0, 1}

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if ( matrix[i][j] === 0) {
                rows.add(i)
                cols.add(j)
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (rows.has(i) || cols.has(j)) {
                matrix[i][j] = 0
            }
        }
    }
    return matrix;
};