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