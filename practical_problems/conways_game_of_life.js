/*
'''
Conway's Game Of Life

Conway's Game of Life (see https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) is a famous example of a cellular automaton devised as a thought experiment for modeling local populations and other networks.

The game takes an initial state which is a matrix of booleans. True represents a live cell. False is dead. On every turn, each cell computes it's next state based on it's own state and that of it's neighbors along horizontals, verticals, or diagonals. The rules are:

- Any live cell with fewer than two live neighbors dies, as if by underpopulation.
- Any live cell with two or three live neighbors lives on to the next generation.
- Any live cell with more than three live neighbors dies, as if by overpopulation.
- Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

For ease of viewing the states, we'll use strings instead of booleans. An "X" will represent a live cell, a space will represent a dead cell.

[-1,-1]
[-1, 0]
[-1, 1]
[0,-1]
[0, 1]
[1, -1]
[1, 0]
[1,1]

for (let i = -1; i < 2; i++) {
  for (let j = -1; j < 2; j++) {
    if (!i && !j) 
  }
}
 

EXAMPLE(S)
blinker = [
  [" ", " ", " ", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", " ", " ", " "],
]

conway(blinker, 1) =>
[
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', 'X', 'X', 'X', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ]
]
conway(blinker, 2) =>
[
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', 'X', ' ', ' ' ],
  [ ' ', ' ', 'X', ' ', ' ' ],
  [ ' ', ' ', 'X', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ]
]

🔎 EXPLORE
What are some other insightful & revealing test cases?
Input:
- matrix representing a game state
- rounds: integer representing the game state cycle you should return

Output:
- matrix representing the state of the game board at n rounds
- Any live cell with fewer than two live neighbors dies, as if by underpopulation.
- Any live cell with two or three live neighbors lives on to the next generation.
- Any live cell with more than three live neighbors dies, as if by overpopulation.
- Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

🧠 BRAINSTORM
What approaches could work?
for each round:
  loop through each element in the matrix:
    for each elem, check adjacent elements:
      if adjacent is live:
        liveNeighbors++
      else:
        deadNeighbors++

    if elem is alive:
      if liveNeighbors > 2 and < 4:
        new elem is live
      else:
        new elem is dead
    if elem is dead:
      if liveNeighbors == 3:
        new elem is live
      else:
        new elem is dead
    add new elem to new matrix

Algorithm 1:
Time: O(rounds * elems * 8)
Space: O(elems)
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.



Notice that this pattern cycles between horizontal and vertical orientations. Look in the the wikipedia article for more interesting and well known patterns! 
 

FUNCTION SIGNATURE
function conway(board, rounds) {
def conway(board, rounds):
'''
for each round:
  loop through each element in the matrix:
    for each elem, check adjacent elements:
      if adjacent is live:
        liveNeighbors++
      else:
        deadNeighbors++

    if elem is alive:
      if liveNeighbors > 2 and < 4:
        new elem is live
      else:
        new elem is dead
    if elem is dead:
      if liveNeighbors == 3:
        new elem is live
      else:
        new elem is dead
    add new elem to new matri
*/

function conway(board, rounds) {
  // for each round:
  while (rounds > 0) {
    let newBoard = Array(board.length)
      .fill(" ")
      .map(() => Array(board[0].length).fill(" "));
    // loop through each element in the matrix:
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.at(0).length; j++) {
        let liveNeighbors = 0;

        // for each elem, check adjacent elements:
        // for (let n = i - 1; n < i + 2; n++) {
        //   // i == 5 |> <7
        //   // j == 1
        //   for (let m = j - 1; m < j + 2; m++) {
        //     if (m < 0 || n < 0 || n > board.length - 1 || m > board[0].length - 1 || (n === i && m === j)) continue;
        //     if (board[n][m] === 'X') {
        //       liveNeighbors++;
        //     }
        //   }
        // }
        for (let n = -1; n < 2; n++) {
          for (let m = -1; m < 2; m++) {
            if (n === 0 && m === 0) continue;
            if (
              i + n < 0 ||
              j + m < 0 ||
              i + n > board.length - 1 ||
              j + m > board[0].length - 1
            )
              continue;
            if (board[i + n][j + m] === "X") {
              liveNeighbors++;
            }
          }
        }
        // console.log('liveNeighbors', liveNeighbors)
        // add problem logic here
        if (board[i][j] == "X") {
          if (liveNeighbors == 2 || liveNeighbors == 3) {
            newBoard[i][j] = "X";
          }
        } else if (liveNeighbors == 3) {
          newBoard[i][j] = "X";
        } else {
          newBoard[i][j] = " ";
        }
      }
    }
    board = newBoard.map((row) => [...row]);
    rounds--;
  }
  return board;
}

/* 
at [1][1]:
  loop through n = 0 -> 2
  loop through m = 0 -> 2
*/
let toad = [
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", "X", "X", "X", " "],
  [" ", "X", "X", "X", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
];
console.log(conway(toad, 3));
// conway(toad, 1) =>
// [
//   [ ' ', ' ', ' ', ' ', ' ', ' ' ],
//   [ ' ', ' ', ' ', 'X', ' ', ' ' ],
//   [ ' ', 'X', ' ', ' ', 'X', ' ' ],
//   [ ' ', 'X', ' ', ' ', 'X', ' ' ],
//   [ ' ', ' ', 'X', ' ', ' ', ' ' ],
//   [ ' ', ' ', ' ', ' ', ' ', ' ' ]
// ]
// conway(toad, 2) =>
// [
//   [ ' ', ' ', ' ', ' ', ' ', ' ' ],
//   [ ' ', ' ', ' ', ' ', ' ', ' ' ],
//   [ ' ', ' ', 'X', 'X', 'X', ' ' ],
//   [ ' ', 'X', 'X', 'X', ' ', ' ' ],
//   [ ' ', ' ', ' ', ' ', ' ', ' ' ],
//   [ ' ', ' ', ' ', ' ', ' ', ' ' ]
// ]

let beacon = [
  [" ", " ", " ", " ", " ", " "],
  [" ", "X", "X", " ", " ", " "],
  [" ", "X", "X", " ", " ", " "],
  [" ", " ", " ", "X", "X", " "],
  [" ", " ", " ", "X", "X", " "],
  [" ", " ", " ", " ", " ", " "],
];

console.log(conway(beacon, 1));
// [
//   [ ' ', ' ', ' ', ' ', ' ', ' ' ],
//   [ ' ', 'X', 'X', ' ', ' ', ' ' ],
//   [ ' ', 'X', ' ', ' ', ' ', ' ' ],
//   [ ' ', ' ', ' ', ' ', 'X', ' ' ],
//   [ ' ', ' ', ' ', 'X', 'X', ' ' ],
//   [ ' ', ' ', ' ', ' ', ' ', ' ' ]
// ]
console.log(conway(beacon, 2));

// [
//   [ ' ', ' ', ' ', ' ', ' ', ' ' ],
//   [ ' ', 'X', 'X', ' ', ' ', ' ' ],
//   [ ' ', 'X', 'X', ' ', ' ', ' ' ],
//   [ ' ', ' ', ' ', 'X', 'X', ' ' ],
//   [ ' ', ' ', ' ', 'X', 'X', ' ' ],
//   [ ' ', ' ', ' ', ' ', ' ', ' ' ]
// ]


// their solution
const LIVE = "X";
const DEAD = " ";

function countLiveNeighbors(board, r, c) {
  const neighbors = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];

  let count = 0;
  for (const [dr, dc] of neighbors) {
    const nr = r + dr;
    const nc = c + dc;
    if (nr >= 0 && nr < board.length && nc >= 0 && nc < board[0].length) {
      count += board[nr][nc] === LIVE ? 1 : 0;
    }
  }

  return count;
}

function oneStep(board) {
  const newState = [];

  for (let r = 0; r < board.length; r++) {
    const newRow = [];
    newState.push(newRow);
    for (let c = 0; c < board[0].length; c++) {
      const liveCell = board[r][c] === LIVE;
      const neighbors = countLiveNeighbors(board, r, c);
      if (liveCell && (neighbors < 2 || neighbors > 3)) {
        newRow.push(DEAD);
      } else if (!liveCell && neighbors === 3) {
        newRow.push(LIVE);
      } else {
        newRow.push(liveCell ? LIVE : DEAD);
      }
    }
  }
  return newState;
}

function conway(board, rounds) {
  for (let i = 0; i < rounds; i++) {
    board = oneStep(board);
  }

  return board;
}