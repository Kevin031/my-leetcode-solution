/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let result = [];
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    let levelList = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      levelList.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(levelList);
  }
  return result.length;
};
// @lc code=end
