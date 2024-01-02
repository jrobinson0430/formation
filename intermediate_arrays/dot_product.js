/*
'''
❓ PROMPT
In mathematics when two matrices are multiplied, the result is a new matrix where each position (i, j) in the output is the sum of the products of the ith _row_ in the first matrix and the jth _column_ in the second. This is called the [dot product](https://www.mathsisfun.com/algebra/matrix-multiplying.html).

As a follow-up, modify your code to support matrices that are *not* square. This requires that the number of columns in the first matrix be equal to the number of rows in the second so that the row x column cross products are possible.

Example(s)
a = [
  [A, B],
  [C, D]
]

b = [
  [E, F],
  [G, H]
]

matrixMultiply(a,b) ==
[
  [19,22],
  [43,50]

The (0, 0) position in the result is: A * E + B * G = AE + BG
The (0, 1) position in the result is: A * F + B * H = AF + BH
The (1, 0) position in the result is: C * E + D * G = CE + DG
The (1, 1) position in the result is: C * F + D * H = CF + DH
 

🔎 EXPLORE
List your assumptions & discoveries:
INPUT: 2 square matrices of the same size/shape
OUTPUT: 1 square matrices of the product of the two input matrices
  - sum of the product of ith row and jth column


 - each index value is utilized twice.
 - there are two types of patterns in the column
  - xxyy and xyxy
- This seems to be a hybrid of both row major and column major.
  - the first array is row major
  - the second array is column major

Insightful & revealing test cases:
- assume the two input matrices are squares of the same shape
 

🧠 BRAINSTORM
What approaches could work?
- nested loops
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function matrixMultiply(a, b) {}
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// let a = [
//   ['A', 'B'],
//   ['C', 'D']
// ]

// let b = [
//   ['E', 'F'],
//   ['G', 'H']
// ]

// I never even thought to add another nested loop.
// i was able to get half of the correct values but was missing several in between and had to go to the solution in order to figure it out. definitely need to spend some time disecting this.
function matrixMultipaly(a, b) {
  const aCol = a.length;
  const aRow = a[0].length;
  const bRow = b[0].length;

  const result = Array.from(Array(aCol), () => new Array(bRow).fill(0));


  for (let i = 0; i < aCol; i++) {
    for (let j = 0; j < bRow; j++) {
      let value = 0;
      for (let k = 0; k < aRow; k++) {
        value += a[i][k] * b[k][j];
      }
      result[i][j] = value;
    }
  }
  return result;
}
// function matrixMultipaly(a, b) {
//   const aCol = a.length;
//   const aRow = a[0].length;
//   const bRow = b[0].length;

  // const result = Array.from(Array(aCol), () => new Array(bRow).fill(0));


//   for (let i = 0; i < aCol; i++) {
//     for (let j = 0; j < bRow; j++) {
//       let value = 0;
//       for (let k = 0; k < aRow; k++) {
//         value += a[i][k] * b[k][j];
//       }
//       result[i][j] = value;
//     }
//   }
//   return result;
// }

let a = [[]];
let b = [[]];
console.log(
  JSON.stringify(matrixMultiply(a, b)) === JSON.stringify([[]]) ||
    JSON.stringify(matrixMultiply(a, b)) === JSON.stringify([[null]])
);

a = [[5]];
b = [[10]];
console.log(JSON.stringify(matrixMultiply(a, b)) === JSON.stringify([[50]]));

a = [
  [1, 2],
  [3, 4],
];
b = [
  [5, 6],
  [7, 8],
];
console.log(
  JSON.stringify(matrixMultiply(a, b)) ===
    JSON.stringify([
      [19, 22],
      [43, 50],
    ])
);

a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
b = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];
console.log(
  JSON.stringify(matrixMultiply(a, b)) ===
    JSON.stringify([
      [300, 360, 420],
      [660, 810, 960],
      [1020, 1260, 1500],
    ])
);

a = [[1, 2, 3]];
b = [[4], [5], [6]];
console.log(JSON.stringify(matrixMultiply(a, b)) === JSON.stringify([[32]]));

a = [
  [1, 2, 3],
  [4, 5, 6],
];
b = [
  [10, 20],
  [30, 40],
  [50, 60],
];
console.log(
  JSON.stringify(matrixMultiply(a, b)) ===
    JSON.stringify([
      [220, 280],
      [490, 640],
    ])
);

function matrixMultiply(matrix1, matrix2) {
  tMatrix2 = transpose(matrix2);

  let result = [],
    temp = [];

  for (let i = 0; i < matrix1.length; i += 1) {
    let [oper1A, oper2A] = matrix[i];

    for (let j = 0; j < tMatrix2.length; j += 1) {
      let [oper1B, oper2B] = tMatrix2[j];

      temp.push(oper1A * oper1B + oper2A * oper2B);
    }

    result.push(temp);

    temp = [];
  }

  return result;
}

// I needed to use the transpose( ) I sent the other day. Are the result and temp helper arrays here unnecessary?
