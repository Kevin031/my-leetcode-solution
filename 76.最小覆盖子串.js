/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  if (s.length < t.length) return "";
  let need = {};
  for (let i = 0; i < t.length; i++) {
    let c = t[i];
    need[c] = need[c] ? need[c] + 1 : 1;
  }
  let i = 0;
  let temp = "";
  let result = "";
  let tempMap = {};

  /**
   * 判断need中是否包含tempMap的全部元素
   */
  const tempIncludeNeedMap = () => {
    for (let c in need) {
      let numOfTempChar = tempMap[c] || 0;
      if (numOfTempChar < need[c]) {
        return false;
      }
    }
    return true;
  };

  while (i < s.length) {
    let c = s[i];
    temp += c;
    tempMap[c] = tempMap[c] ? tempMap[c] + 1 : 1;

    while (tempIncludeNeedMap()) {
      if (result === "" || temp.length < result.length) {
        result = temp;
      }
      let removeChar = temp[0];
      temp = temp.slice(1);
      tempMap[removeChar] -= 1;
    }

    i++;
  }
  return result;
};
// @lc code=end

console.log(minWindow("ADOBECODEBANC", "ABC"));
