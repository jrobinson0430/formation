// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.


/*
input:
arr: array of integers representing vertical lines(walls)


output:
integer representing the maximum amount of water a container can store. 

example:

[2, 2, 5, 2, 0, 1]
greatest: 5
left: 0
right: 4
move right pointer 
results: 6 because left point would be index 0 and right point index 3


[1,1,1,6,5,6,3]
results: 12 because left point would be index 3 and right point index 5
height of 6 and a width of 2 = 12

target time complexity: O(N) n being the length of the input array
space: O(1)

- 2 pointer approach
- greatestArea integer: 0
start with the greatest width
  - find the minimum height out of left and right sides
  calculation: (right - left) * minimum height = current area
  determine which side has lower height, move that pointer
*/


function findMaxWater(arr) { // [1,1,1,6,5,6,3]
  let greatest = 0;

  let left = 0; // 4
  let right = arr.length - 1; // 5

  while (left <= right) {
    const leftVal = arr.at(left); // 6
    const rightVal = arr.at(right); // 6
    const minHeight = Math.min(leftVal, rightVal); // 6

    const current = (right - left) * minHeight; // 12

    greatest = (current > greatest) ? current : greatest; // 12

    // determine which pointer to move;
    if (leftVal == minHeight) {
      left += 1
    } else {
      right--
    }

  }
  return greatest;
}

console.log(findMaxWater([1,1,1,6,5,6,3])) // 12
console.log(findMaxWater([2, 2, 5, 2, 0, 1])) // 6
console.log(findMaxWater([])) // 0
console.log(findMaxWater([0,0])) // 0
console.log(findMaxWater([5,5,5,5,5,5])) // 25
console.log(findMaxWater([1,2,3,10,10,3,2,1])) // 10