/*
quicksort is a divide and conquer method. we choose a pivot point (start of the array) and then iterate over the rest of the arr. if the current element is smaller than the pivot, add to a left subarr, if it is larger, add to a right subarr. recursively call this function until you meet the stop condition which is when the arr.length <= 1. we know any arr with a length of 1 is sorted, thus we can begin building the array as we come up the recursive call stack.
*/

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let smaller = [];
  let larger = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      smaller.push(arr[i]);
    } else {
      larger.push(arr[i]);
    }
  }

  return [...quickSort(smaller), pivot, ...quickSort(larger)];
}

console.log(quickSort([4, 1, 3, 2, 5]));
