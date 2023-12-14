/*
'''
❓ PROMPT
This exercise is great for building a solid understanding of working with complex data structures. 

Write functions that take a multidimensional array as input and then output a single dimensional array. Start with the elements in increasing _row major_ order, meaning the first row from beginning to end, then the second row, etc. Then move on to _column major_, which is the first column from beginning to end and then the second, etc.

You can use this template to get started:

function template(matrix) {
  const result = [];

  // Your code here.

  return result;
}

As a final challenge, do additional versions where each row is output backward but the rows are in order and similarly for columns. There are actually 4 different variations for both row and column major, so 8 total. Do you see why?


Example(s)
let matrix = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15]
];

linearizeRowMajor(matrix) == [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
linearizeColumnMajor(matrix) == [1,6,11,2,7,12,3,8,13,4,9,14,5,10,15]
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function linearizeRowMajor(matrix) {
function linearizeColumnMajor(matrix) {


🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

/* row major traversal: rows in order | ascending indexes

 - we want to visit each element: row by row in ascending order
  - outer loop stop condition is the length of the outer array
  - inner loop stop condition is the length of the ith row

*/

let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

function linearizeRowMajor1(matrix) {
  // ascending row | ascending index
  let output = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.at(i).length; j++) {
      output.push(matrix.at(i).at(j));
    }
  }
  return output;
}

function linearizeRowMajor2(matrix) {
  // ascending rows | descending indexes
  let output = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix.at(i).length - 1; j >= 0; j--) {
      output.push(matrix.at(i).at(j));
    }
  }

  return output;
}

function linearizeRowMajor3(matrix) {
  // descending rows | ascending indexes
  let output = [];

  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = 0; j < matrix.at(i).length; j++) {
      output.push(matrix.at(i).at(j));
    }
  }

  return output;
}

function linearizeRowMajor4(matrix) {
  // descending rows | descending indexes
  let output = [];

  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix.at(i).length - 1; j >= 0; j--) {
      output.push(matrix.at(i).at(j));
    }
  }

  return output;
}

function linearizeColumnMajor1(matrix) {
  // ascending column | ascending index
  let output = [];

  for (let i = 0; i < matrix.at(0).length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      output.push(matrix.at(j).at(i));
    }
  }
  return output;
}
function linearizeColumnMajor2(matrix) {
  // ascending column | descending index
  let output = [];

  for (let i = 0; i < matrix.at(0).length; i++) {
    // represents column
    for (let j = matrix.length - 1; j >= 0; j--) {
      // represents row
      output.push(matrix.at(j).at(i));
    }
  }
  return output;
}

function linearizeColumnMajor3(matrix) {
  // descending column | ascending index
  let output = [];

  for (let i = matrix.at(0).length - 1; i >= 0; i--) {
    for (let j = 0; j < matrix.length; j++) {
      output.push(matrix.at(j).at(i));
    }
  }
  return output;
}

function linearizeColumnMajor4(matrix) {
  // descending column | descending index
  let output = [];

  for (let i = matrix.at(0).length - 1; i >= 0; i--) {
    for (let j = matrix.length - 1; j >= 0; j--) {
      output.push(matrix.at(j).at(i));
    }
  }
  return output;
}

console.log(linearizeRowMajor1(matrix)); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(linearizeRowMajor2(matrix)); // [5,4,3,2,1,10,9,8,7,6,15,14,13,12,11]
console.log(linearizeRowMajor3(matrix)); // [11,12,13,14,15,6,7,8,9,10,1,2,3,4,5]
console.log(linearizeRowMajor4(matrix)); // [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
console.log(linearizeColumnMajor1(matrix)); // [1,6,11,2,7,12,3,8,13,4,9,14,5,10,15]
console.log(linearizeColumnMajor2(matrix)); // [11,6,1,12,7,2,13,8,3,14,9,4,15,10,5]
console.log(linearizeColumnMajor3(matrix)); // [5,10,15,4,9,14,3,8,13,2,7,12,1,6,11]
console.log(linearizeColumnMajor4(matrix)); // [15,10,5,14,9,4,13,8,3,12,7,2,11,6,1]
