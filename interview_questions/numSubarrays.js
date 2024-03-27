/*
'''
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.  

Write-up: https://leetcode.com/problems/subarray-sum-equals-k/
 

EXAMPLE(S)
countSubarraySum([1, 2, 3], 3) == 2 because (1,2), (3)
 

FUNCTION SIGNATURE
func numSubarrays(input: [Int], target: Int) -> Int
'''

INPUT:
arr: array of integers.
- positive or negative numbers
target: target sum of continuous subarray
- also positive or negative

OUTPUT:
integer: representing the total number of continuous sub arrays whose sum equals to k

we are going to use two loops to iterate over the array
- outer array is going to be used in order to start the subarray at each integer value
- inner array is going to look for the continuous subarray looking for the sum to match the target

* make sure we either check the sum of the current element with target before the inner loop or
  make a check after the inner loop has completed.

variables:
sum: on the outer loop. initialize to the current element value
result: integer initialzed at 0. (also our return)



[1,4,6,-4,-1]
   O
        I
sum: 4 + 6 = 10 - 4 = 6
target: 6
*/

// time: O(N^2)
// space: O(1)

function numSubarrays(arr, target) { // [1,2,3] target = 3
  let results = 0 // 2

  for (let i = 0; i < arr.length; i++) { // i = 2
    let sum = arr.at(i); // 3

    if (sum === target) results++;


    for (let j = i + 1; j < arr.length; j++) {
      sum += arr.at(j); // 3
      if (sum === target) results++;
    }
  }

  return results;

}

console.log(numSubarrays([1, 2, 3], 3)) // 2
console.log(numSubarrays([], 2)) // 0
console.log(numSubarrays([0, 2, -2, 7, 9], 0)) // 3
console.log(numSubarrays([-3, 1, 7], -2)) // 1

// t: O(N)
// s: O(N)

function countSubarraySum(nums, k) {
    let currSum = 0;
    const seenSums = {0: 1};
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        count += seenSums[currSum - k] || 0;
        seenSums[currSum] = (seenSums[currSum] || 0) + 1;
    }
    return count;
}