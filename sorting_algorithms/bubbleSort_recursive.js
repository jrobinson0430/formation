/*
'''
Bubble sort is a stable, in-place sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The algorithm repeatedly passes through the list until it's sorted.

This algorithm is normally implemented iteratively, but this is a thought exercise in thinking recursively about an algorithm and building skill at the craft of code.

This session isn't so much about the Engineering Method. We already know what algorithm we're going to implement. We're going to deeply explore the relationship between loops and recursion.

In Bubble Sort, there are two loops, one or both can be implemented with recursion. Start out with a goal of using recursion for one of the loops, and then making both loops recursive can be a stretch goal.

If you end up with a completely recursive Bubble Sort and have time, try the same exercise with selection sort!
 

EXAMPLE(S)
inputArr = [3, 8, 5, 4, 1, 9, -2]
bubbleSort(inputArr)
inputArr == [-2, 1, 3, 4, 5, 8, 9]

inputArr = [5, 4, 3, 2, 1]
bubbleSort(inputArr)
inputArr == [1, 2, 3, 4, 5]

inputArr = [8, 4, 6, 2]
bubbleSort(inputArr)
inputArr == [2, 4, 6, 8]
 

FUNCTION SIGNATURE
// Javascript
function bubbleSort( arr, n) {
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
}

1. Parameters of the Helper function (outside loop to inner loop)
2. Invoke the helper in main function with initialized value
3. Base Condition
4. return statement
5. copy logic over
6. make next recursive call
'''
*/

// function bubbleSort(arr, n) {
//   function helper(i){
//     if (!(i < n - 1)) {
//       // i>=n-1
//       return;
//     }
//     for (let j = 0; j < n-i-1; j++) {
//       if (arr[j] > arr[j+1]) {
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//       }
//     }
//     helper(i+1);
//   }
//   helper(0);
// }

function bubbleSort(arr, n) {
  function helper(i) {
    if (!(i < n - 1)) {
      // i>=n-1
      return;
    }
    function innerHelper(j) {
      // base case
      if (!(j < n - i - 1)) {
        return;
      }
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      innerHelper(j + 1);
    }
    innerHelper(0);
    helper(i + 1);
  }
  helper(0);
}

let inputArr = [3, 8, 5, 4, 1, 9, -2];
bubbleSort(inputArr, inputArr.length);
console.log(inputArr, [-2, 1, 3, 4, 5, 8, 9]);

inputArr = [5, 4, 3, 2, 1];
bubbleSort(inputArr, inputArr.length);
console.log(inputArr, [1, 2, 3, 4, 5]);

inputArr = [8, 4, 6, 2];
bubbleSort(inputArr, inputArr.length);
console.log(inputArr, [2, 4, 6, 8]);

inputArr = [420];
bubbleSort(inputArr, inputArr.length);
console.log(inputArr, [420]);

inputArr = [50, 5, 20, 10, 25, 45, 35, 30];
bubbleSort(inputArr, inputArr.length);
console.log(inputArr, [5, 10, 20, 25, 30, 35, 45, 50]);

inputArr = [5, 5, 5, 5];
bubbleSort(inputArr, inputArr.length);
console.log(inputArr, [5, 5, 5, 5]);
