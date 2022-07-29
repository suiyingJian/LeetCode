/**
 * 
 * 找出最大子段和 
 * 动态规划思想
 * 比较当前数组元素和之前数组元素之和，取大的那个抉择是新开一个数组还是添加进去
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const memo = [];
  memo[0] = nums[0]
  let max = nums[0]

  if (nums.length === 1) return nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    memo[i] = Math.max(memo[i - 1] + nums[i], nums[i])
    //比较 当前数组元素，和现在新memo里数组哪个大
    
    max = Math.max(max, memo[i])
    // 记录最大值
  }
  return max
};
