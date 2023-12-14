/*
'''
❓ PROMPT
Given a two dimensional array, output a new one dimensional array with the elements of the input in zig zag order. This means that the first row will be in the output from first to last, but the second row will be the reverse, last to first, then the third is back to normal order again, each row the opposite order of the ones before and after.

Example(s)
const matrix = [
  [1, 2, 3],
  [4, 5, 6]
]
linearizeZigZag(matrix) == [1,2,3,6,5,4]
 

🔎 EXPLORE
List your assumptions & discoveries:
 - each even outer array index is put into the output array in order
 - each odd outer array index is put into the output array in reverse order

Insightful & revealing test cases:
 [] = []
 any one dimensional array should return itself

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
- iterate over the outer array elements.
  - determine if the outer index is even or odd
  - if even, push elements in the inner array into the output array in order
  - if odd, push elements in the inner array into the output array in reverse order
return output array.
Time: O(N) N representing the number of elements in the matrix
Space: O(N) N representing the number of elements in the output array
 
Algorithm 2:

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function linearizeZigZag(matrix) {

 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function linearizeZigZag(matrix) {
  let output = [];

  for (let i = 0; i < matrix.length; i++) {
    let isEven = i % 2 === 0;
    let currentRow = matrix.at(i);

    if (isEven) {
      let j = 0;
      while (j < currentRow.length) {
        output.push(currentRow.at(j));
        j++;
      }
    } else {
      let j = currentRow.length - 1;
      while (j >= 0) {
        output.push(currentRow.at(j));
        j--;
      }
    }
  }
  return output;
}

let matrix = [[]];
console.log(JSON.stringify(linearizeZigZag(matrix)) === JSON.stringify([]));

matrix = [[1]];
console.log(JSON.stringify(linearizeZigZag(matrix)) === JSON.stringify([1]));

matrix = [[1, 2, 3]];
console.log(
  JSON.stringify(linearizeZigZag(matrix)) === JSON.stringify([1, 2, 3])
);

matrix = [[1], [4], [7]];
console.log(
  JSON.stringify(linearizeZigZag(matrix)) === JSON.stringify([1, 4, 7])
);

matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(
  JSON.stringify(linearizeZigZag(matrix)) === JSON.stringify([1, 2, 3, 6, 5, 4])
);

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(
  JSON.stringify(linearizeZigZag(matrix)) ===
    JSON.stringify([1, 2, 3, 6, 5, 4, 7, 8, 9])
);
