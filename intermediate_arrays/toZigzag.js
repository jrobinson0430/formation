/*
'''
Given a string an a positive number of rows, consider this method of formatting the string across the prescribed number of rows. If the original string is FORMATION and we want 3 rows, then the first three characters are down the first column as so:

F
O
R

The next character, M, diagonals up so then is next to the O. The A then continues up and to the right on the first row before proceeding down with the column:

F   A
O M T
R   I

The final two letters continue the pattern:

F   A   N
O M T O
R   I

Now, if we read these letters in the normal fashion (left to right, top down), we get FANOMTORI.

With 4 rows, we'd get:

F     I
O   T O
R A   N
M

And then read in normal fashion we'd get FIOTORANM.

Write a function that computes this reordering.
 

EXAMPLE(S)
toZigzag("FORMATION", 3) -> FANOMTORI
toZigzag("FORMATION", 4) -> FIOTORANM
 

FUNCTION SIGNATURE
function toZigzag(str, numRows)


INPUT:
str: string of characters
numRows: the required length of the matrix for our output.
* numRow > 0
* numRow can be greater than the length of the input str

OUTPUT:
string of the formatted word

EXPLORE:
utilize a matrix to set the char in the correct place
  - for the return i will combine the matrix into a single string

iterate though the input str. time complexity: O(N) N being the length of the word
  - we need to place a char at the 0 index within the inner matrix until we reach the numRows

  EXAMPLE: FORMATION
  [
    [F, '', a]
    [O, m,  t]
    [R, '', i]
  ]
 increase the col and the row until we reach the top left (0,2) -> (1,1) -> (2, 0)
 repeat the downward direction



Expected Questions
Q: What if the number of rows is 1?
A: Return the original string.
Target Solve Time: 25 minutes.

** 2. Let the Fellow code ** 
- A good interviewer always tries to ensure there's a working solution by the end of the session.
- If the Fellow takes too long to come up with a solution, provide gradually more revealing hints.
- If the Fellow reaches the target time and hasn't completed their solution, provide more direct 
hints to get to a working solution by the end of the session.

** Hints **
There are two tricks to this problem:
1) What is the unit that repeats? It's the layout of characters straight down and then back up on the diagonal. 
On the first row, the initial character is the first one in the original string, index 0. 
What is the next one on the first row in the zigzag layout?
2 ) Since we are not generating the layout, are the spaces on each row important? No.

** Solution ** 
There are two ways to approach this:
1) Create an empty array for each row, then write the characters in one at a time. 
This is pretty easy because you can just iterate forward and back through 
the array (being careful about the limits on the way up) to fill in the characters. 
This is a simple implementation but uses a bit more space.

2) This can be done with a single output array that gets filled up by carefully computing 
the index of the next letter in the original string and inserting it into an output array. 
This takes some careful observation to pick out the pattern.
*/

function toZigzag(str, numRows) {
  const matrix = Array(numRows).fill(null).map(() => new Array())
  console.log({matrix})
  let row = 0;
  let col = 0;
  let down = true;


  // [00, 10, 20, 11, 20]

  for (let i = 0; i < str.length; i++) {
    
    if (down) {
      console.log(str.at(i))
      matrix[row][col] = str.at(i);
      row++
      if (row == numRows - 1) {
        down = false;
      }
    } else {
      console.log(str.at(i))
      row--
      col++
      matrix[row][col] = str.at(i)
      if (row == 0) {
        down = true;
      }
    }
  }
  console.log(matrix);
  // console.log(matrix.flat().join(''))
  console.log(matrix.map((arr) => arr.join('')))
  return  matrix.flat().join('')

}


console.log(toZigzag("FORMATION", 3)) // FANOMTORI
 // toZigzag("FORMATION", 4) // FIOTORANM



// Approach 1
function toZigzag1(s, numRows) {
  if (numRows === 1) return s;
  const rows = [];
  for (let i = 0; i < numRows; i++) {
      rows.push([]);
  }

  let idx = 0;
  let incr = 1;
  let row = 0;

  while (idx < s.length) {
      rows[row].push(s[idx++]);
      row += incr;
      if (row === numRows) {
          row = numRows - 2;
          incr = -1;
      } else if (row === -1) {
          row = 1;
          incr = 1;
      }
  }
  console.log({rows});
  return rows.map(a => a.join('')).join('');
}
toZigzag1("FORMATION", 3)
/*
// Approach 2
function toZigzag(s, numRows) {
  if (numRows === 1) return s;
  const chars = [];
  // each "down then up" unit involves repeatSize characters
  const repeatSize = numRows * 2 - 2;
  const numChars = s.length;

  // Compute each row in order
  for (let r = 0; r < numRows; r++) {
      // For each row, we're going to skip across "down then up" units.
      for (let i = r; i < numChars; i += repeatSize) {
          chars.push(s[i]);
          if (r > 0 && r < numRows - 1 && i + repeatSize - 2 * r < numChars) {
              chars.push(s[i + repeatSize - 2 * r]);
          }
      }
  }
  return chars.join('');
}
*/