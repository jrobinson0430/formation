/**
 * 
 * https://leetcode.com/problems/sort-colors/description/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const freq = {};

    for (num of nums) freq[num] = (freq[num] | 0) + 1;

    const zeros = freq['0'] | 0;
    const ones = freq['1'] | 0;

    for (let i = 0; i < zeros; i++) nums[i] = 0; // i = 1
    for (let i = zeros; i < zeros + ones; i++) nums[i] = 1; // i = 4
    for (let i = zeros + ones; i < nums.length; i++) nums[i] = 2;

  return nums;
};

var sortColorsInPlace = function (nums) {
  let left = 0;
  let mid = 0;
  let right = nums.length - 1;

  while (mid <= right) {
    if (nums[mid] == 0) {
      [nums[left], nums[mid]] = [nums[mid], nums[left]];
      left++;
      mid++;
    } else if (nums[mid] == 2) {
      [nums[right], nums[mid]] = [nums[mid], nums[right]];
      right--;
    } else {
      mid++;
    }
  }
  return nums;
};

const sortColorsOptimized = (nums) => {
  const swap = (x, y) => {
    [nums[x], nums[y]] = [nums[y], nums[x]];
  };

  let [left, middle, right] = [0, 0, nums.length - 1];

  while (middle <= right) {
    const num = nums[middle];
    if (num === 2) {
      swap(right, middle);
      right--;
    } else if (num === 0) {
      swap(left, middle);
      left++;
      middle++;
    } else {
      middle++;
    }
  }

  return nums;
};