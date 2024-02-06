// O(N^2) time
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const [cur, next] = [array[j], array[j + 1]];

      if (cur > next) {
        array[j] = next;
        array[j + 1] = cur;
      }
    }
  }
  return array;
}

function bubbleSort2(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // newer syntax negates the need for a temp variable
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  console.log(arr);
}

// bubbleSort is optimized using a breakout condition if the arr is nearly sorted. If during a pass, no swaps are made then you know the arr is completed sorted and does not need to continue to iterate.

function bubbleSortRec(nums) {

  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      // snapshot(nums);
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  // snapshot(nums);
  console.log(nums);
}

bubbleSort([7, 5, 23, 6, 2]);
bubbleSortRec([7, 5, 23, 6, 2]);
