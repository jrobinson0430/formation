/*

Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.


Input: matrix = [[1,2,3], [4,5,6], [7,8,9]]

Output: [[1,4,7], [2,5,8], [3,6,9]]

Input: matrix = [[1,2,3], [4,5,6]]
Output: [[1,4], [2,5], [3,6]]


*/

/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?

INPUT: matrix
OUTPUT: input matrix transposed

 - is the matrix always square? NO


🧠 BRAINSTORM
What approaches could work?
Algorithm 1: 
perform a row-major traversal

Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

/* first attempt: will handle n x n and n x m matrices
- Time Complexity:
  - Best Case: O(n * m) where n < m || m < n
    - n representing the number of rows and m representing the number of columns
  - Worst Case: O(n^2) where n is the number of rows and columns in a square matrix
Space Complexity:
  - Best Case: o(n * m) where n < m || m < n
    - n representing the number of rows in the output matrix
    - m representing the number of columns in the output matrix
  - Worst Case: O(n^2) where n is the number of rows and columns in a square matrix
*/
function transpose(matrix) {
  const output = [];

  let column = 0;
  let row = [];

  while (column < matrix.at(0).length) {
    for (let i = 0; i < matrix.length; i++) {
      row.push(matrix.at(i).at(column));
    }
    output.push(row);
    row = [];
    column++;
  }
  return output;
}

/*
- this will only handle m x m matrices.
- since we are swapping in place, our inner loop is initialized to the value of the outer loop.
  - this essentially cuts the matrix in half, allowing the swaps to cover the other half.
  - time complexity:
  - Best Case: O(n * m) where n < m || m < n
    - n being the number of rows and m being the number of columns. outer loop is iterating row by row and the inner loop is visiting each inner element
    
  - Worst Case: O(n^2) n being the length of the square matrix.
- Space Complexity: O(1) because a swap between two indices is constant time

** would the fact that we are only iterating over half of the inner elements make any difference to this solution?
*/
function transpose2(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.at(0).length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  return matrix
}

/*
This function will handle M x N
- notice that the inner loop starts at 0 because instead of swapping in place in the m x m solution. we must populate the output matrix with each element value.


*/
function transpose(matrix) {
  let output = Array(matrix.at(0).length)
    .fill(null)
    .map(() => Array(matrix.length).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.at(0).length; j++) {
      output[j][i] = matrix[i][j]
    }
  }
  return output;
}

console.log(transpose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]));

// utilizes the ??= so you do not need to premake the output matrix!!! BADASS!!
function transpose(matrix) {
  const output = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.at(0).length; j++) {
      output[j] ??= [];
      output[j][i] = matrix[i][j];
    }
  }
  return output;
}


// ==================ROB ====================== //

const transpose = (matrix) =>
  matrix.reduce(
    (prev, curr) => prev.map((arr, i) => [...arr, curr[i]]),
    Array(matrix[0].length).fill([])
  );

  function transpose(matrix) {
    let result = [];

    for (let i = 0; i < matrix[0].length; i += 1) {
      result.push(matrix.map((arr) => arr[i]));
    }

    return result;
  }