function rotateLeft1(arr, k) {
  let output = [];

  k = k % arr.length;

  for (let i = 0; i < arr.length; i++) {
    let newIndex = i - k < 0 ? arr.length + (i - k) : i - k;

    output[newIndex] = arr.at(i);
  }

  return output;
}

function rotateLeft(arr, k) {
  // reverse input array
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  left = 0;
  right = k - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  left = k;
  right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

console.log(rotateLeft(["A", "B", "C", "D"], 3)); //  [ 'C', 'D', 'A', 'B' ]
// console.log(rotateLeft([1,2,3,4], 3), [ 4, 1, 2, 3 ])
// console.log(rotateLeft([], 12), [])
// console.log(rotateLeft([4], 12), [4])
/*
0 - 3 = -3  != 1
1 - 3 = -2  != 2
2 - 3 = -1  != 3
3 - 3 = 0   == 0
*/
