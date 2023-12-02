/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0;
  let ans = 0;
  let arr = s.split("");
  let tmpl = [];
  while (i < arr.length) {
    let nextChar = arr[i];
    while (tmpl.includes(nextChar)) {
      tmpl.shift();
    }
    tmpl.push(nextChar);
    ans = Math.max(ans, tmpl.length);
    i++;
  }
  return ans;
};
// @lc code=end
