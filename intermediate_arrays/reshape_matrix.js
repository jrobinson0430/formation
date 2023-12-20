/*
'''
You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.


🔎 EXPLORE
What are some other insightful & revealing test cases?
 - when r x c is not equal to the length of the m x n return the original matrix.
 - output matrix should be the same row major order as the original

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
- utilize .flat() method to turn matrix one dimensional and loop over the flat array pushing into a tempRow array. When the row is the length of c. push it into an output array and reset tempRow to an empty array.

Time: O(N) N being the number of elements in the array
Space: O(N) N being the number of elelments in the output array

Algorithm 2:
- perform a row major traversal utilizing an extra counting variable, k, to track which row you are on in the output array.
 

📆 PLAN
Outline of algorithm #:
- calculate the # of elements in the m x n array
  - multiply the length of the outer array times the length the first inner array.
  - multiply r times c
  - if r times c is not equal to m times in, return mat
- initialize an output array: []
- initialize a temp array: []
- flatten the input matrix
- loop over flat array
  - push elements into temp array until the length of the temp array == c.
    - push the temp array into the output array
    - reset temp array to []
  return output

 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/


// my solution
function matrixReshape(mat, r, c) {
  if (r * c !== mat.length * mat.at(0)?.length) return mat;
  let output = [];
  let temp = [];
  let flatArr = mat.flat(Infinity);

  for (let elem of flatArr) {
    temp.push(elem);
    if (temp.length === c) {
      output.push(temp);
      temp = [];
    }
  }
  return output;
}

var matrixReshape = function (mat, r, c) {
  // mat = [[1,2],[3,4]]
  let rows = mat.length; // 2
  let cols = mat[0].length; // 2
  if (rows * cols !== r * c) return mat;
  let newMat = [[]]; // [[1, 2], [3]]

  for (let i = 0, k = 0; i < rows; i++) {
    // i = 1 | k = 1
    for (let j = 0; j < cols; j++) {
      // j = 0
      if (newMat[k].length === c) {
        // 2 == 2
        newMat.push([]);
        k++; // 0 -> 1
      } //               1  0
      newMat[k].push(mat[i][j]); // 1 -> 2 | 3
    }
  }
  return newMat;
};

matrixReshape(
  [
    [1, 2],
    [3, 4],
    [5,6]
  ],
  1,
  4
)[[1, 2, 3, 4]];
// matrixReshape([[1,2],[3,4]], 2, 4) [[1,2],[3,4]]
// matrixReshape([], 2, 4) []
