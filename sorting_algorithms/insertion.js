function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr.at(i);
    console.log("currentVal", currentVal);
    for (var j = i - 1; j > -1 && arr.at(j) > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  console.log(arr);
}

insertionSort([2, 1, 0, 76, 4]);

// this one utilizes a while loop and doesn't rely on the behavior of var
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const current = arr.at(i);
    let j = i - 1;

    while (j > -1 && arr.at(j) > current) {
      arr[j + 1] = arr.at(j);
      j--;
    }

    arr[j + 1] = current;
  }
  return arr;
}


function selectionSortRec(arr, start = 0) {
  // If there is only one element to be sorted, there is
  // nothing to do.
  if (start > arr.length - 1) {
    return arr;
  }

  // Use recursion to find the end.
  selectionSortRec(arr, start + 1);

  // Recursive function to find the index of the largest value
  // from the start of the array (start at zero) up to index last.
  function indexOfLargest(last, start = 0, largestValueIndex = 0) {
    if (start > last) {
      return largestValueIndex;
    }
    return indexOfLargest(
      last,
      start + 1,
      arr[largestValueIndex] < arr[start] ? start : largestValueIndex
    );
  }

  const swapWith = indexOfLargest(start);
  // Swap the current value with the one identified as largest
  [arr[start], arr[swapWith]] = [arr[swapWith], arr[start]];

  return arr;
} 