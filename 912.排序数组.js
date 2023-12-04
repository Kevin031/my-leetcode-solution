/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
const quickSort = (nums, start, end) => {
  if (start >= end) return;
  // 这里一定要加上终止条件
  const mid = sort(nums, start, end);
  quickSort(nums, start, mid - 1);
  quickSort(nums, mid + 1, end);
};
const sort = (nums, start, end) => {
  let base = nums[start];
  let left = start + 1;
  let right = end;
  while (left < right) {
    while (left < right && nums[left] <= base) {
      left++;
    }
    while (left < right && nums[right] >= base) {
      right--;
    }
    if (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }
  if (left === right && nums[right] > base) {
    right--;
  }
  if (right !== start) {
    [nums[start], nums[right]] = [nums[right], nums[start]];
  }
  return right;
};
var sortArray = function (nums) {
  // 快速排序的核心思想
  // 中间轴
  // 排序单元
  quickSort(nums, 0, nums.length - 1);
  return nums;
};
// @lc code=end
