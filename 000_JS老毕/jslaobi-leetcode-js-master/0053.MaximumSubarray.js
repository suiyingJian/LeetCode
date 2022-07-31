/**
 * 
 * 找出最大子段和 
 * 动态规划思想
 * 比较当前数组元素和之前数组元素之和，取大的那个抉择是新开一个数组还是添加进去
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  const memo = [];
  memo[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    memo[i] = Math.max(nums[i] + memo[i - 1], nums[i]);
  }

  let max = nums[0];

  for (let i = 1; i < memo.length; i++) {
    max = Math.max(max, memo[i]);
  }

  return max;
};
