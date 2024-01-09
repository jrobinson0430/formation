// https://leetcode.com/problems/3sum/

/**
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const triplets = [];
    nums.sort((a,b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        const first = nums.at(i);
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while(left < right) {

            const total = first + nums[left] + nums[right];

            if(total > 0) {
                right--
            } else if (total < 0) {
                left++
            } else {
                triplets.push([first, nums[left], nums[right]])
                left++

                while(nums[left] == nums[left -1] && left < right) {
                    left++
                }
            }
        }
    }

    return triplets;
};