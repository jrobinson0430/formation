/*
'''
❓ PROMPT
Given an array, find the length of the smallest subarray in it which, when sorted, will sort the whole array.

Example(s)
Input: [1, 2, 5, 3, 7, 10, 9, 12]
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted.

Input: [1, 3, 2, 0, -1, 7, 10]
Output: 5
Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted.
 

Find the first element out of sorted order from the left and from the right. These two elements will be the bounds of the candidate subarray that needs to be sorted. However, this candidate subarray will only be valid if:

- (i) there are no elements left of the subarray which are larger than the minimum of the subarray
  - input: [1, 2, 5, 3, 7, 10, 9, 12] subArray: [5, 3, 7, 10, 9] min: 3
  - we look at the element directly to the left of the start of the subArray (2) and make this comparison: directlyLeft > min
  - if true, extend the subarray left by 1 and repeat the check
  - if false, left side of subArray is in the correct place

- (ii) there are no elements of the subarray which are smaller than the maximum of the subarray.
  - input: [1, 2, 5, 3, 7, 10, 9, 12] subArray: [5, 3, 7, 10, 9] max: 10
  - we look at the element directly to the right of the end of the subArray (12) and make this comparison: directlyRight > max
  - if false, extend the subarray right by 1 and repeat the check
  - if true, right side of subArray is in the correct place.

If either of these conditions is false, extend the array left or right to ensure that those elements fall within the final subarray to be sorted.

🔎 EXPLORE
List your assumptions & discoveries:
- use a while loop to determine the initial start of the subarray
- use a separate while loop to determine the initial end of the subarray
- make the left side comparison with another while loop
- last while loop with make the right side comparison

Insightful & revealing test cases:
 - if array is already sorted, you will return 0

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 


🛠️ IMPLEMENT
function shortestWindowSort(arr) {
def shortestWindowSort(arr: list[int]) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// optimized by removing the multiple slices and repeated logic on the Math.min && Math.max
function shortestWindowSort(arr) {
  let left = 0;
  let right = arr.length - 1;

  // sets initial subArray bounds
  while (arr[left] < arr[left + 1] && left < right) left++;
  while (arr[right] > arr[right - 1] && right > left) right--;

  let subArray = arr.slice(left, right);
  let [min, max] = [Math.min(...subArray), Math.max(...subArray)];

  // use the min value to check the start of the sub array
  while (left !== 0 && arr[left - 1] > min) {
    left--;
    min = Math.min(arr[left], min);
  }

  // use the max value to check the end of the sub array
  while (right < arr.length && arr[right] < max) {
    right++;
    max = Math.min(arr[right], max);
  }

  return right - left;
}

function shortestWindowSort(arr) {
  let left = 0;
  let right = arr.length - 1;

  // sets initial subArray bounds
  while (arr[left] < arr[left + 1] && left < right) left++;
  while (arr[right] > arr[right - 1] && right > left) right--;

  let subArray = arr.slice(left, right);

  // use the min value to check the start of the sub array
  while (left !== 0 && arr[left - 1] > Math.min(...subArray)) {
    left--;
    subArray = arr.slice(left, right);
  }

  // use the max value to check the end of the sub array
  while (right < arr.length && arr[right] < Math.max(...subArray)) {
    right++;
    subArray = arr.slice(left, right);
  }

  return right - left;
}

function shortestWindowSort(arr) {
  let left = 0;
  let right = arr.length - 1;

  // sets initial subArray bounds
  while(arr[left] < arr[left + 1] && left < right) left++;
  while(arr[right] > arr[right - 1] && right > left) right--;

  let subArray = arr.slice(left, right);
  let [min, max] = [Math.min(...subArray), Math.max(...subArray)];

  // use the min value to check the start of the sub array
  while(left !== 0 && arr[left - 1] > min) {
    left--
    subArray = arr.slice(left, right);
    min = Math.min(...subArray)
  }

// use the max value to check the end of the sub array
  while (right < arr.length && arr[right] < max) {
    right++
    subArray = arr.slice(left, right);
    max = Math.max(...subArray)
  }

  return right - left

}

// shortestWindowSort([1, 2, 5, 3, 7, 10, 9, 12]) // 5 [5, 3, 7, 10, 9]
// shortestWindowSort([1, 3, 2, 0, -1, 7, 10]) // 5 [1, 3, 2, 0, -1]

console.log(shortestWindowSort([1, 2, 5, 3, 7, 10, 9, 12]) == 5);
console.log(shortestWindowSort([1, 3, 2, 0, -1, 7, 10]) == 5);
console.log(shortestWindowSort([1, 2, 3]) == 0);
console.log(shortestWindowSort([3, 2, 1]) == 3);
