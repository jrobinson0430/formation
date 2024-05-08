/*
'''
❓ PROMPT
Write a function that traverses a matrix in diagonal fashion, starting from the bottom left corner. For example if the input matrix is:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
0 0
1 0
2 0

0 1
0 2

Then the desired output is:

[7, 4, 8, 1, 5, 9, 2, 6, 3]

Example(s)
[
  [1, 2],
  [3, 4],
] -> [3, 1, 4, 2]
 

🔎 EXPLORE
List your assumptions & discoveries:
- if we get starting points for each diagonal we can step down until we reach an edge of the matrix.
- the first set of start positions will be obtained from the start column of each row
- the second set of start positions will be obtained from the first row
  - we need to watch out for the duplicate starting point at 0 0

  -constraint: must start at the bottom left corner of the matrix




Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function diagonalTraversal(m)
def diagonal_traversal(m)
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function diagonalTraversal(m) {
  if (!m.length || !m[0].length) return [];

  const startPoints = [];
  let output = [];

  // get coordinates for first column starting from the bottom
  for (let i = m.length - 1; i >= 0; i--) startPoints.push([i, 0]);

  // get coordiantes for the first row starting at index 1 (prevent duplicate)
  for (let i = 1; i < m[0].length; i++) startPoints.push([0, i]);

  console.log(startPoints);
  for (let [row, col] of startPoints) {
    // [row, col] is the starting point
    // use a loop to step down in a diagonal direction until you reach an edge of the matrix
    for (let i = 0; i + row < m.length && i + col < m[0].length; i++)
      output.push(m[row + i][col + i]);
  }

  return output;
}

console.log(
  diagonalTraversal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
