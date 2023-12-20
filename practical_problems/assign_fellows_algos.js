/*
'''
Formation is trying to assign a group of Fellows algorithms of varying difficulty levels. The algorithm difficulty should feel fair to all Fellows based on each Fellow's algorithmic skill level.

We are given an array of integers representing the skill level of each Fellow, and we are asked to return an array of integers representing the difficulty of an algorithm to assign each Fellow respectively.

The minimum difficulty is 1. When a Fellow has a higher skill level than an adjacent Fellow they must be given a more difficult problem than their neighbor. When a fellow has the same skill level, they must be given a problem at the same difficulty level. Return the array of difficulties representing the minimum difficulty we can give each Fellow.
 

EXAMPLE(S)
fellows = [10, 20, 60, 70, 50, 10, 20]
assignAlgorithms(fellows) -> [1,2,3,4,2,1,2]
fellows = [10, 20, 20]
assignAlgorithms(fellows) -> [1,2,2]

// https://leetcode.com/problems/trapping-rain-water/
https://leetcode.com/problems/product-of-array-except-self/

print(assignAlgorithms([15,10,25,25,25,10,15]) == [2,1,2,2,2,1,2])
                      ([1, 1, 2, 2, 2,  1, 2]) curr > left = +1
                      ([2, 1, 2, 2, 2,  1, 1]) curr > right = +1
                       [2, 1, 2, 2, 2, 1, 2]

fellows = [10, 20, 60, 70, 50, 10, 20]
          [ 1, 2,  3,  4,  1,  1,  2]   l to r         
          [ 1, 1,  1,  3,  2,  1,  1]   r to l
          [ 1, 2,  3,  4,  2,  1,  2]
          print(assignAlgorithms([15,10,25,25,25,10,6,15]) == [2,1,2,2,2,1,?,2])

*/

// assignAlgorithms(fellows) -> [1,2,3,4,2,1,2]
// []

//
function assignAlgorithms(list) {
  let leftToRight = Array(list.length).fill(1);
  for (let i = 1; i < list.length; i += 1) {
    if (list[i] > list[i - 1]) {
      leftToRight[i] = leftToRight[i - 1] + 1;
    } else if (list[i] === list[i - 1]) {
      leftToRight[i] = leftToRight[i - 1];
    }
  }

  let rightToLeft = Array(list.length).fill(1);
  for (let i = list.length - 2; i >= 0; i -= 1) {
    if (list[i] > list[i + 1]) {
      rightToLeft[i] = rightToLeft[i + 1] + 1;
    } else if (list[i] === list[i + 1]) {
      rightToLeft[i] = rightToLeft[i + 1];
    }
  }

  let out = [];
  for (let i = 0; i < leftToRight.length; i += 1) {
    out.push(Math.max(leftToRight[i], rightToLeft[i]));
  }

  return out;
}

console.log(
  assignAlgorithms([10, 20, 60, 70, 50, 10, 20]).toString() == "1,2,3,4,2,1,2"
);
console.log(
  assignAlgorithms([]) == null || assignAlgorithms([]).toString() == ""
);
console.log(assignAlgorithms([100]).toString() == "1");
console.log(assignAlgorithms([11, 22]).toString() == "1,2");
console.log(assignAlgorithms([22, 11]).toString() == "2,1");
console.log(assignAlgorithms([20, 20]).toString() == "1,1");
console.log(assignAlgorithms([20, 20, 5]).toString() == "2,2,1");
console.log(assignAlgorithms([5, 20, 20]).toString() == "1,2,2");
console.log(assignAlgorithms([19, 29, 39]).toString() == "1,2,3");
console.log(assignAlgorithms([37, 27, 17]).toString() == "3,2,1");
console.log(
  assignAlgorithms([10, 20, 100, 70, 100, 10, 20]).toString() == "1,2,3,1,2,1,2"
);
console.log(assignAlgorithms([32, 22, 12, 22, 32]).toString() == "3,2,1,2,3");
console.log(assignAlgorithms([15, 25, 35, 25, 15]).toString() == "1,2,3,2,1");
console.log(
  assignAlgorithms([15, 10, 25, 25, 25, 10, 15]).toString() == "2,1,2,2,2,1,2"
);

// This requires two passes, once in each direction. The first pass is to set the relative values, and the second time is to fix the value if it turns out the new value is larger than what's already at the index.
// Iterate from left to right. Starting with the value 1, increment the current value by 1 every time the value in the fellows array increases, and reset to 1 every time it decreases.
// Repeat the procedure starting from the right. This time, only overwrite values when the new value is larger than the value already at that index.
// This procedure works because each pass computes the minimum value that works looking in each direction and then takes the larger of the two, which by definition will satisfy both.

function assignAlgorithms(fellows) {
  const n = fellows.length;
  const result = Array(n).fill(1);

  //building lToR array
  for (let i = 1; i < n; ++i) {
    if (fellows[i] > fellows[i - 1]) {
      result[i] = result[i - 1] + 1;
    } else if (fellows[i] === fellows[i - 1]) {
      result[i] = result[i - 1];
    }
  }

  // going rToL and also combine at the same time
  for (let i = n - 2; i >= 0; i--) {
    if (fellows[i] > fellows[i + 1] && result[i] <= result[i + 1]) {
      result[i] = result[i + 1] + 1;
    } else if (fellows[i] === fellows[i + 1] && result[i] < result[i + 1]) {
      result[i] = result[i + 1];
    }
  }

  return result;
}

// https://leetcode.com/problems/trapping-rain-water/
//https://leetcode.com/problems/product-of-array-except-self/
