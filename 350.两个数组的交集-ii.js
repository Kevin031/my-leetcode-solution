/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = {};
  let result = [];
  for (let i in nums1) {
    let num = nums1[i];
    if (!map[num]) {
      map[num] = 0;
    }
    map[num] += 1;
  }
  for (let j in nums2) {
    let num = nums2[j];
    if (map[num]) {
      result.push(num);
      map[num] -= 1;
    }
  }
  return result;
};
// @lc code=end
