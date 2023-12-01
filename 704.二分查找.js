/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length;
  // 定义左闭右开区间[left, right)
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] > target) {
      right = mid; // target在左区间[left, mid)
    } else if (nums[mid] < target) {
      left = mid + 1; // target在右区间[mid + 1, right)
    } else {
      return mid;
    }
  }
  return -1;
};
// @lc code=end
