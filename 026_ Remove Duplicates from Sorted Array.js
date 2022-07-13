/**
 * 删除有序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length < 2) return nums.length
    let s = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[s]) {
            s++
            nums[s] = nums[i]
        }
    }
    return s+1
}

