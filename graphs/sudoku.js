function printSudokuBoard(board) {
  for (let i = 0; i < board.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      console.log('- - - - - - - - - - -');
    }

    for (let j = 0; j < board[i].length; j++) {
      if (j % 3 === 0 && j !== 0) {
        process.stdout.write(' |');
      }

      process.stdout.write((j === 0 ? '' : ' ') + board[i][j]);
    }

    console.log();
  }
}

function findFirstEmptyCell(board) {
  for (let i = 0 ; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
      if (board[i][j] == 0){
        return [i, j];
      }
    }
  }

  return [-1, -1];
}

function isPossibleValue(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    // Calculate (m,n) so we iterates through the coordinates
    // in the same 3x3 subgrid as the cell at (row, col)
    let m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    let n = 3 * Math.floor(col / 3) + i % 3;

    // If you're curious, run:
    //   console.log(`(${row}, ${col}) cell ${i} -> (${m}, ${n})`);

    if (board[row][i] === num || board[i][col] === num || board[m][n] === num) {
      return false;
    }
  }
  return true;
}

function findPossibleValues(board, row, col) {
  let results = [];

  for (let num = 1; num <= 9; num++) {
    if (isPossibleValue(board, row, col, num)) {
      results.push(num);
    }
  }

  return results;
}
// Each board state is a node in the game tree
// It's children are the possible moves for the first empty cell
// Do a depth-first traversal through this tree, returning when we've found a solution or reached a "dead end" (determined no solution is possible)

function solveSudoku(board) {
  let [row, col] = findFirstEmptyCell(board);

  if (row === -1 && col === -1) {
    return true;
  }

  let possibleValues = findPossibleValues(board, row, col);

  for (let possibleValue of possibleValues) {
    board[row][col] = possibleValue;
    
    if (solveSudoku(board)) {
      return true;
    }

    board[row][col] = 0;
  }

  return false;
}

let board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

// printSudokuBoard(board);

solveSudoku(board);

printSudokuBoard(board);
