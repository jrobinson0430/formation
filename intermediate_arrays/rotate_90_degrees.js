/*
'''
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.


Input: matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

Output: [
  [7,4,1],
  [8,5,2],
  [9,6,3]
]


🔎 EXPLORE
What are some other insightful & revealing test cases?

INPUT: matrix
OUTPUT: input matrix rotated 90 degrees clockwise
CONSTRAINTS: must be in-place solution


 - is the matrix always square? yes m x m only
- do we need to account for a 1 x 1 matrix


🧠 BRAINSTORM
What approaches could work?
Algorithm 1: 


Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #1:
 first we must transpose the matrix then reverse each new row all within the O(1) space complexity.


🛠️ IMPLEMENT
Write your algorithm.
- transpose matrix by using a row major traversal
  - outer
    - start: 0
    - stop: matrix.length
  - inner
    - start: i
    - stop: matrix.length
  - perform swap on each inner loop iteration by switching i and j 
- now iterate over rows reversing them using a 2 pointer approach
  - left pointer: 0
  - right pointer: 0
  - stop condition: left pointer >= right pointer
  - swap the leftith element with the rightith element

  - do not return anything per problem specifications
  
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

/*
after transpose: 
[
  [1,4,7]
  [2,5,8]
  [3,6,9]
]

[1,4,7] needs to reverse to [7,4,1]
*/

var rotate = function (matrix) {
  // perform transpose
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // perform row reversals
  for (let i = 0; i < matrix.length; i++) {
    let left = 0;
    let right = matrix.length - 1;

    while (left <= right) {
      [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
      left++;
      right--;
    }
  }
  return matrix;
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

/*
Output: [
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
*/
