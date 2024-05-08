/*
'''
Consider a rectangular h × w board with all cells initially white. You are to process several queries of the following types:

"x a b" - color the white cell (a, b) (0-based coordinates, the first one is a row index, and the second one is a column index) black;
"> a b" - find the leftmost white cell to the right of the white cell (a, b);
"< a b" - find the rightmost white cell to the left of the white cell (a, b);
"v a b" - the same, but the search should be done downwards;
"^ a b" - the same, but the search should be done upwards;

For each query, except the ones of the first type, find the answer. Example For h = 3, w = 5, and
queries = ["v 1 2", "x 2 2", "v 1 2", "> 2 1", "x 2 3", "> 2 1", "< 2 0"],
the output should be
solution(h, w, queries) = [[2, 2], [-1, -1], [2, 3], [2, 4], [-1, -1]].

** if no white cell is found, use (-1,-1)

Initial board
[ 
  [W,W,W,W,W],
  [W,W,W,W,W],
  [W,W,W,W,W],
]
1st query: v find the first white cell below given coordinates (1,2)
answer: (2,2)
output: [[2,2],]
2nd query: x color the white cell at coordinates (2,2) black
new board:
[ 
  [W,W,W,W,W],
  [W,W,W,W,W],
  [W,W,B,W,W],
]
answer: we do not add anything to the output array for this command only. 
output: [[2,2]]

3rd query: v find the first white cell below given coordinates (1,2)
answer: now that we have a new board, you can see that coordinate (2,2) is now black. Since there is no next row to check we return (-1,-1) per instructions.
output: [[2,2], [-1,-1]]

4th query: > find the first white cell to the right of coordinates (2,1)
answer: (2,3) because (2,2) has been colored in black.
output: [[2,2], [-1,-1], [2,3]]

5th query: x color the white cell at coordinates (2,3) black
new board:
[ 
  [W,W,W,W,W],
  [W,W,W,W,W],
  [W,W,B,B,W],
]
output: output: [[2,2], [-1,-1], [2,3]] *does not change*

6th query: > find the first white cell to the right of coordinates (2,1)
answer: (2,4) because we have black cells at (2,2) and (2,3)
output: output: [[2,2], [-1,-1], [2,3], [2,4]]

last query: < find the first white cell to the left of coordinates (2,0)

🔎 EXPLORE
What are some other insightful & revealing test cases?
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 - initialize a matrix with the dimensions h x w and fill it with 'W'
 initialize an output array: []
 - iterate over command queries array
  - destructure the inner array: [query, row, col] = queries
  - query x:
    - take the given coordinates and replace in matrix with 'B'
  - query >:
    - find the first white cell to the right of the given coordinates
      - if found, add coordinates [x, y] to output array
      - if not found, add coordinates [-1,-1] to output array
  - query <:
    - find the first white cell to the left of the given coorinates
      - if found, add coordinates [x, y] to output array
      - if not found, add coordinates [-1,-1] to output array
  - query ^:
      - find the first white cell above the given coorinates
      - if found, add coordinates [x, y] to output array
      - if not found, add coordinates [-1,-1] to output array
  - query v:
      - find the first white cell below the given coorinates
      - if found, add coordinates [x, y] to output array
      - if not found, add coordinates [-1,-1] to output array
- return the output array




🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

const testData = [
  "v 1 2",
  "x 2 2",
  "v 1 2",
  "> 2 1",
  "x 2 3",
  "> 2 1",
  "< 2 0",
];
const testData2 = ["> 2 1"];

function processQueries(queries, h, w) {
  let board = Array(h)
    .fill(null)
    .map(() => Array(w).fill("W"));
  let output = [];

  for (let query of queries) {
    let [command, , row, , col] = query;
    let coord = [-1, -1];
    row = +row;
    col = +col;
    if (command === "x") {
      board[row][col] = "B";
    } else if (command === ">") {
      while (col + 1 < w) {
        if (board[row][col + 1] === "W") {
          coord = [row, col + 1];
          break;
        }
        col++;
      }
    } else if (command === "<") {
      while (col - 1 >= 0) {
        if (board[row][col - 1] === "W") {
          coord = [row, col - 1];
          break;
        }
        col--;
      }
    } else if (command === "^") {
      while (row - 1 >= 0) {
        if (board[row - 1][col] === "W") {
          coord = [row - 1, col];
          break;
        }
        row--;
      }
    } else if (command === "v") {
      while (row + 1 < h) {
        if (board[row + 1][col] === "W") {
          coord = [row + 1, col];

          break;
        }
        row++;
      }
    }
    if (command !== "x") output.push(coord);
  }
  console.log(output);
}

processQueries(testData, 3, 5); // [[2, 2], [-1, -1], [2, 3], [2, 4], [-1, -1]]
