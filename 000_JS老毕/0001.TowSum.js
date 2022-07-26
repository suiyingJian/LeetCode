/**
 * 1. Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()   //1.首先创建一个map
    for (let i = 0; i < nums.length; i++) { //2.for循环遍历nums数组
        const complement = target - nums[i];    //3
        if (map.has(complement)) {      //4
            return [map.get(complement),i]
        } else {
            map.set(nums[i],i)
        }
    }
    return [];
};



/**
 * 1.首先创建一个map
 * 2.for循环遍历nums数组
 * 3.用target减 nums[i] 
 *      以计算那个数能跟当前的数字  相加得到target
 * 4.检查map里有没有这个数字
 *      如果有则返回结果
 *      如果没有则把num[i] 当做key
 *      i当作value放入map中(思考为什么)
 * 
 * map.has()   方法检查的是map里面有没有包含哪一个key
 *      如果我们把index放入key 即 前面  那么遍历检查的就是数组里面有没有index 那就不是我们想要的结果了
 * 
 * 所以我们需要把index和value 颠倒一下 这样我们检查的就是数组里面有没有那个value
 * 
 */