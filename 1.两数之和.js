/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i];
    if (map.get(key) !== undefined) {
      return [map.get(key), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
// @lc code=end
