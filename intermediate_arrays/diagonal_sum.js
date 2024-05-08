/*
'''
❓ PROMPT
Given a square matrix *mat*, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal *that are not part of the primary diagonal*.

Example(s)
Input:
[[1,2,3],
 [4,5,6],
 [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Element mat[1][1] = 5 is counted only once.

Input:
[[1,1,1,1],
 [1,1,1,1],
 [1,1,1,1],
 [1,1,1,1]]
Output: 8

Input: [[5]]
Output: 5
 

🔎 EXPLORE
List your assumptions & discoveries:
INPUT: square matrix of integers
OUTPUT: integer representing the sum of the matrix diagonals

Insightful & revealing test cases:
- Only count each element in the diagonal once.
- would a 2x2 return the sum of all elements?
- if the square is an odd length, you will have a duplicate element in both primary and secondary diagonals
- i believe we can use 1 loop to complete this problem.


3x3:
[
  [00,01,02]
  [10,11,12]
  [20,21,22]
]
primary diagonal indices:     00 | 11 | 22
r:     c:
+1     +1
+1     +1
+1     +1

secondary diagonal indices:   02 | 11 | 20
r:     c:
+1     -1
+1     -1
+1     -1


4x4:
[
  [00,01,02, 03]
  [10,11,12, 13]
  [20,21,22, 23]
  [30,31,32, 33]
]
primary diagonal indices:     00 | 11 | 22 | 33
secondary diagonal incices:   03 | 12 | 21 | 30


5x5:
[
  [00,01,02, 03, 04]
  [10,11,12, 13, 14]
  [20,21,22, 23, 24]
  [30,31,32, 33, 34]
  [40,41,42, 43, 44]
]
primary diagonal indices:     00 | 11 | 22 | 33 | 44
secondary diagonal incices:   04 | 13 | 22 | 31 | 40




🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function diagonalSum(matrix) {
def diagonalSum(matrix: list[list[int]]) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// mine
function diagonalSum1(matrix) {
  let sum = 0;
  let j = 0;
  let k = matrix.length - 1;

  for (let i = 0; i < matrix.length; i++) {
    let primary = matrix.at(i).at(j);
    let secondary = matrix.at(i).at(k);

    if (j === k) {
      sum += primary;
    } else {
      sum += primary + secondary;
    }
    j++;
    k--;
  }
  return sum;
}

function diagonalSum(matrix) {
  let total = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (i === matrix.length - 1 - i) {
      // accounts for intersection
      total += matrix[i][i];
    } else {
      total += matrix[i][i];
      total += matrix[i][matrix.length - 1 - i];
    }
  }
  return total;
}

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(diagonalSum(mat) === 25);

mat = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];
console.log(diagonalSum(mat) === 8);

mat = [[5]];
console.log(diagonalSum(mat) === 5);

mat = [];
console.log(diagonalSum(mat) === 0);
