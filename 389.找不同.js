/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!map[char]) {
      map[char] = 0;
    }
    map[char] += 1;
  }
  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (!map[char]) {
      return char;
    }
    map[char] -= 1;
    if (map[char] === 0) {
      delete map[char];
    }
  }
};
// @lc code=end
