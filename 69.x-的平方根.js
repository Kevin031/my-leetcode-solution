/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 1) return x;
  let left = 1;
  let right = x;
  while (left <= right) {
    let mid = left + ((right - left) >> 1); // 相当于除以2
    if (mid <= x / mid) {
      if (mid + 1 > x / (mid + 1)) {
        return mid;
      }
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0;
};
// @lc code=end
