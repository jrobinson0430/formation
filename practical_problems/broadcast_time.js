/*
'''
Propagate information through a network

A subset of database servers in a grid network received an update that they must replicate to the remaining nodes. Each second, Nodes broadcast updates to their immediate neighbors, north, west, south, and east.

Given an initial state of the nodes with the updated information, determine how many seconds it will take to propagate the update to the entire network.
 

EXAMPLE(S)
If the state of the network at the 0th second is:
[
  [0, 0, 0],
  [0, 1, 0], 
  [0, 0, 0]
]

Then it takes 2 seconds to propagate the information. After the 1st second:
[
  [0, 1, 0],
  [1, 1, 1],
  [0, 1, 0]
]
After the 2nd second:
[
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
]

/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
 INPUT: matrix

 OUTPUT: integer representing the number of seconds it takes to propagate matrix

 - will the initial matrix have at least 1 1? assume there is at least 1 1
 - will the initial matrix have all 1s? return 0 seconds
 - empty input should return 0 as well

 PLAN
 - we need to interate through the matrix to determine what needs changed before we do any changes
  - iterate over the matrix a second time to actually do the modification
  - we know we are done when the matrix has no more zeros

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: using a while loop to repeat logic. loop through matrix to determine the coordinates of the 1s. make a second loop through matrix, modifying the matrix in place as needed.
Time: O(N * T) N being the number of elements in the matrix and t being the number of times the logic is repeated (each second)
Space: O(1) because we are modifying in place.
 
[
  [0, 0, 0],
  [0, 1, 0], 
  [0, 0, 0]
]

oneLocations: [[1,1]]
[0,1]
[2,1]
[1,0]
[1,2]

📆 PLAN
Outline of algorithm #:
- initialize the number of rows: matrix.length
- initialize the number of cols: matrix[0].length
- initialize numOfSeconds to track the output: 0
- initialize an array, oneLocations, to store 1 locations: []
- initialize a while loop with a stop condition of true.
  - initialize boolean to track if a modification is made: false
- use a row major traversal to determine where the 1s are located
  - add the coordinates to the oneLocations

- use another row major traversal to complete the in place modifications
  - 
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

function broadcastTaime(network) {
  if (!network) return 0;

  let numOfSeconds = 0;
  let oneLocations = [];

  while (true) {
    let hasModified = false;
    oneLocations = [];
    for (let i = 0; i < network.length; i++) {
      for (let j = 0; j < network[0].length; j++) {
        if (network[i][j] === 1) {
          oneLocations.push([i, j]);
        }
      }
    }

    for (let coord of oneLocations) {
      const [row, col] = coord;

      if (row - 1 >= 0 && network[row - 1][col] === 0) {
        network[row - 1][col] = 1;
        hasModified = true;
      }
      if (row + 1 < network.length && network[row + 1][col] === 0) {
        network[row + 1][col] = 1;
        hasModified = true;
      }

      if (col - 1 >= 0 && network[row][col - 1] === 0) {
        network[row][col - 1] = 1;
        hasModified = true;
      }
      if (col + 1 < network[0].length && network[row][col + 1] === 0) {
        network[row][col + 1] = 1;
        hasModified = true;
      }
    }
    if (!hasModified) break;
    numOfSeconds++;
  } // end of while
  return numOfSeconds;
}

let network1 = [[1], [0], [0]];
console.log(broadcastTime(network1) == 2);

let network2 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
console.log(broadcastTime(network2) == 2);

let network3 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 1, 0],
];
console.log(broadcastTime(network3) == 3);

let network4 = [
  [1, 0, 1],
  [0, 0, 0],
  [0, 1, 0],
];
console.log(broadcastTime(network4) == 1);

let network5 = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
console.log(broadcastTime(network5) == 4);

let network6 = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
];
console.log(broadcastTime(network6) == 2);

let network7 = [
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
];
console.log(broadcastTime(network7) == 4);

let network8 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [1, 0, 0],
];
console.log(broadcastTime(network8) == 5);

function broadcastTime2(network) {
  function deepCopy(oldState) {
    let newState = [];
    for (let r = 0; r < oldState.length; r++) {
      let newRow = [];
      for (let c = 0; c < oldState[0].length; c++) {
        newRow.push(oldState[r][c]);
      }
      newState.push(newRow);
    }
    return newState;
  }

  let currentState = network;
  let nextState = deepCopy(currentState);

  let seconds = 0;
  let rows = network.length;
  let cols = network[0].length;
  while (true) {
    let updateHappened = false;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Only update outdated neighbors
        if (currentState[row][col] == 1) {
          if (row > 0 && currentState[row - 1][col] == 0) {
            nextState[row - 1][col] = 1;
            updateHappened = true;
          }
          if (row < rows - 1 && currentState[row + 1][col] == 0) {
            nextState[row + 1][col] = 1;
            updateHappened = true;
          }
          if (col > 0 && currentState[row][col - 1] == 0) {
            nextState[row][col - 1] = 1;
            updateHappened = true;
          }
          if (col < cols - 1 && currentState[row][col + 1] == 0) {
            nextState[row][col + 1] = 1;
            updateHappened = true;
          }
        }
      }
    }
    if (!updateHappened) break;

    // the updated snapshot is now the current snapshot
    currentState = nextState;
    nextState = deepCopy(currentState);

    seconds += 1;
  }

  return seconds;
}

function broadcastTime(matrix) {
  const cornerVals = [
    0,
    matrix[0].length - 1,
    matrix.length - 1,
    matrix.length - 1 + matrix[0].length - 1,
  ];

  let update = 0;

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === 1) {
        update = i + j;

        break;
      }
    }
  }
  return cornerVals.reduce(
    (p, c) => Math.max(p, Math.abs(update - c)),
    -Infinity
  );
}
