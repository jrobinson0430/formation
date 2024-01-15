/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];

  let rowStart = 0;
  let rowEnd = matrix.length - 1;

  let colStart = 0;
  let colEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // traverse left -> right
    for (let i = colStart; i <= colEnd; i++) {
      result.push(matrix[rowStart][i]);
    }
    rowStart++; // increment the row after traversing it

    // traverse top -> bottom
    for (let i = rowStart; i <= rowEnd; i++) {
      // i is the row which is incrementing as we go down
      // colEnd is used because we are on the right side of the matrix
      result.push(matrix[i][colEnd]);
    }
    colEnd--; // decrement the column after traversing it

    // traverse right -> left
    // must make check again bc we have modified rowStart within the while loop
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        // rowEnd is used because we are at the bottom of the matrix
        // i is the column which is decrementing as we go left
        result.push(matrix[rowEnd][i]);
      }
      rowEnd--; // decrement the last row after traversing it
    }

    // traverse bottom -> top
    // must check again bc we have modified colEnd within the while loop
    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        // i is the row which is changing as we go up
        // colStart is used because we are on the left side of matrix
        result.push(matrix[i][colStart]);
      }
      colStart++; // increment colStart after traversing
    }
  }
  return result;
};
