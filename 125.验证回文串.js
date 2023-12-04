/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const isValid = (c) =>
    (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
  let l = 0,
    r = s.length - 1;
  while (l < r) {
    let left = s[l];
    let right = s[r];
    if (!isValid(left)) {
      l++;
    } else if (!isValid(right)) {
      r--;
    } else if (left.toLowerCase() === right.toLowerCase()) {
      l++;
      r--;
      continue;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end
