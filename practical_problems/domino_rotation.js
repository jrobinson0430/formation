/**
 * 
 * In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the ith domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.

Return the minimum number of rotations so that all the values in tops are the same, or all the values in bottoms are the same.

If it cannot be done, return -1.


 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotati2ons = function (tops, bottoms) {
  /*
    - we first need to determine if it is even possible to rotate the dominos to make one row all the same values.
        - i feel like we need to use a loop and a dictionary to implement this.

    function getPossibleValues () can utilize arguments passed into parent function since we are not modifying
    - initialize a dictionary: {}
    - initialize a possibleSet: new Set()
    - loop over both arrays in one pass.
        - get the value for both arrays at given index
            - if they are the same, only add 1 to the dictionary
            - if different, add both to the dictionary
        - make a check to see if you've found a number that equals the input arrays length
            - if yes, place in possibleSet.
            - if no, do nothing
        return the set converted to an array

    - once we get the possible solutions to the problem we need to determine which one would take the minimum amount of rotations
        - if possible solutions is an empty array we return -1 per problems specifications
        - otherwise, run countRotations on each number in the possible solutions.

    - function countRotations(num):
    * We dont actually have to make the swap, we just need to determine if a swap is required for each domino(element)
    * we iterate through 1 of the arrays (doesnt matter which) to determine how many elements are equal to the num argument passed in
        - we can abstract this away using a filter
        - we take the min between the rotationCount and array.length - rotationCount
            * if array length is 6 and you have to rotate 4 after iterating over 1 array that means you would only have to rotate 2 times if you would have used the second array
    */
  let minimumRotations = Infinity;

  const possibleSolutions = getPossibleValues();
  if (possibleSolutions.length === 0) return -1;

  for (let possibleNum of possibleSolutions) {
    minimumRotations = Math.min(minimumRotations, countRotations(possibleNum));
  }
  function countRotations(num) {
    let topRotationCount = tops.filter((val) => val !== num).length;
    let bottomRotationCount = bottoms.filter((val) => val !== num).length;
    return Math.min(topRotationCount, bottomRotationCount);
  }
  countRotations(2);

  function getPossibleValues() {
    const freqDictionary = {};
    const possiblesSet = new Set();

    for (let i = 0; i < tops.length; i++) {
      const val1 = tops[i];
      const val2 = bottoms[i];

      if (val1 === val2) {
        const count = (freqDictionary[val1] || 0) + 1;
        freqDictionary[val1] = count;
        if (count === tops.length) possiblesSet.add(val1);
      } else {
        const val1Count = (freqDictionary[val1] || 0) + 1;
        freqDictionary[val1] = val1Count;
        const val2Count = (freqDictionary[val2] || 0) + 1;
        freqDictionary[val2] = val2Count;

        if (val1Count === tops.length) possiblesSet.add(val1);
        if (val2Count === tops.length) possiblesSet.add(val2);
      }
    }
    return Array.from(possiblesSet);
  }

  return minimumRotations;
};
