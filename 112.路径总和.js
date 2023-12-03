/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) return false
  const traverse = (node, target) => {
    if (!node) {
      return false
    }
    if (!node.left && !node.right) {
      return target === node.val
    }
    let remain = target - node.val
    return traverse(node.left, remain) || traverse(node.right, remain)
  }
  return traverse(root, targetSum)
};
// @lc code=end
