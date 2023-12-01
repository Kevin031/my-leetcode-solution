/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length) {
    let maxNum = null;
    let levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift();
      maxNum = maxNum === null ? node.val : Math.max(maxNum, node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(maxNum);
  }
  return result;
};
// @lc code=end
