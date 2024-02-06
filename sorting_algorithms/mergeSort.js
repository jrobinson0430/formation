/* 
Create an empty array, take a look at the smallest values in each input array
While there are still values we haven't looked at...
If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
Once we exhaust one array, push in all remaining values from the other array
*/

function merge(arr1, arr2) {
  let output = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    let arr1Value = arr1.at(i);
    let arr2Value = arr2.at(j);

    if (arr1Value < arr2Value) {
      output.push(arr1Value);
      i++;
    } else if (arr1Value > arr2Value) {
      output.push(arr2Value);
      j++;
    } else {
      output.push(arr1Value, arr2Value);
      i++;
      j++;
    }
  }
  while (i < arr1.length) {
    output.push(arr1.at(i));
    i++;
  }

  while (j < arr2.length) {
    output.push(arr2.at(j));
    j++;
  }

  console.log(output);
  return output;
}

const testArr1 = [1, 3, 5, 7, 9];
const testArr2 = [0, 2, 4, 6, 8, 10];

merge(testArr1, testArr2);


function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  let arr1 = mergeSort(arr.slice(0, mid));
  let arr2 = mergeSort(arr.slice(mid));

  return merge(arr1, arr2);

  function merge(one, two) {
    let mergedArr = [];

    while (one.length && two.length) {
      if (one[0] <= two[0]) {
        mergedArr.push(one.shift());
      } else {
        mergedArr.push(two.shift());
      }
    }

    return [...mergedArr, ...one, ...two];
  }
}

console.log(mergeSort([4, 2, 1, 3, 5]));