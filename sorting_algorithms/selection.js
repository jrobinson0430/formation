/*
- similar to bubble sort
- selection sort searches for the min value in the array, then swaps them at the end of each iteration.
- must track the minimum by storing it's index location.
- time complexity of O(N^2)

* lowestValIdx resets every iteration to the start of the unsorted section of the array.
* compare the current lowest value with the value you are iterating over 
  - if iterated value is lower, reassign lowestValIdx
*/

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowestValIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestValIdx]) {
        lowestValIdx = j;
      }
    }

    [array[lowestValIdx], array[i]] = [array[i], array[lowestValIdx]];
  }
  return array;
}

// Test Cases
console.log(selectionSort([])); // []
console.log(selectionSort([1])); // [1]
console.log(selectionSort([3, 1, 2, 4])); // [1, 2, 3, 4]
console.log(selectionSort([-10, 1, 3, 8, -13, 32, 9, 5])); // [-13, -10, 1, 3, 5, 8, 9, 32]
