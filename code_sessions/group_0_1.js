/*

Given an array of 0s and 1s, what is the minimum number of moves needed to group all 0s on one side and 1s on the other side. A "move" is a swap between any adjacent positions.

[0, 1] => 0, no swaps are needed since they are already grouped.
[0, 1, 0] => 1, swap 1 with either 0 to group them.
[1, 0, 1, 1, 0] => 2, swap 0 with 1 then swap it again with the next 1.

total: 4

[1, 0, 1, 1, 0]
[0, 0, 1, 1, 1]

total: 2
numOnes: 

[1, 0, 0, 0, 1, 0, 1]
 ^
 
*/

function minSwaps(arr) {
  let totalMovesZerosToLeft = 0;
  let totalMovesOnesToLeft = 0;

  let numOnes = 0;
  let numZeroes = 0;

  for (let num of arr) {
    if (num === 1) {
      numOnes++;
      totalMovesZerosToLeft += numZeroes;
    } else {
      numZeroes++;
      totalMovesOnesToLeft += numOnes;
    }
  }

  return Math.min(totalMovesOnesToLeft, totalMovesZerosToLeft);
}

/*

input: [1, 0, 1, 1, 0]

numMovesToMoveNumToRight(0)
  total: 2
  occ: 2
  item: 0

numMovesToMoveNumToRight(1)
.. 4

*/

// const minSwapsV2 = (input) => {
//   const numMovesToMoveNumToRight = (num) => {
//     let total = 0;
//     let occurrences = 0;

//     for (let item of input) {
//       if (item === num) {
//         occurrences++;
//       } else {
//         total += occurrences;
//       }
//     }

//     return total;
//   }

//   return Math.min(numMovesToMoveNumToRight(0), numMovesToMoveNumToRight(1));
// }

// console.log(minSwapsV2([1, 0, 1, 1, 0]));

/*

Given a matrix of N by M, determine the number of possible paths to get from the top left cell to the top right cell.
The only valid moves you can make are:
- 1 step to the right
- 1 step up and to the right
- 1 step down and to the right

[1, 1, 1, 1]
[0, 0, 0, 0]
[0, 0, 0, 0]

[1, 0, 1, 1]
[0, 1, 0, 0]
[0, 0, 0, 0]

[1, 1, 0, 1]
[0, 0, 1, 0]
[0, 0, 0, 0]

[1, 0, 0, 1]
[0, 1, 1, 0]
[0, 0, 0, 0]

*/

const numPaths = (matrix) => {
  const helper = (x, y) => {
    // return num valid paths FROM x, y      should return a number
    if (x < 0 || y < 0 || x >= matrix.length || y >= matrix[0].length) {
      return 0;
    }

    if (x === 0 && y === matrix[0].length - 1) {
      return 1;
    }

    return helper(x, y + 1) + helper(x - 1, y + 1) + helper(x + 1, y + 1);
  };

  return helper(0, 0);
};

/*

  [0, 0, 0, 0]
  [0, 0, 0, 0]
  [0, 0, 0, 0]

  helper(0, 0)
    helper(0, 1)
      helper(0, 2) => return 1
        helper(0, 3) => return 1
        helper(-1, 3) => return 0
        helper(1, 3) => return 0
          helper(1, 4) => return 0
          helper(-1, 4) => return 0
          helper(2, 4) => return 0
      helper(-1, 2) => return 0
      helper(1, 2)
        helper(1, 3) => return 0
          helper(1, 4) => return 0
          helper(0, 4) => return 0
          helper(2, 4) => return 0
        helper(0, 3) => return 1
        helper(2, 3)
        helper(1, 4) => return 0
          helper(0, 4) => return 0
          helper(2, 4) => return 0
    helper(-1, 1)
    helper(1, 1)

*/

const testMatrix = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

console.log(numPaths(testMatrix));
