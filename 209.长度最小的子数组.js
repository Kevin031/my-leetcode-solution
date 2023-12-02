/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let result = Infinity;
  let sum = 0;
  let slow = 0,
    fast = 0;
  while (fast < nums.length) {
    sum += nums[fast];
    while (sum >= target) {
      // 记录，注意计算数组长度需要索引差值+1
      result = Math.min(result, fast - slow + 1);
      // 减去左边值，收缩范围
      sum -= nums[slow];
      slow++;
    }
    fast++;
  }
  return result === Infinity ? 0 : result;
};
// @lc code=end
