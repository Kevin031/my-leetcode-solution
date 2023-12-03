/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  if (!root) return []
  let ans = []
  const traverse = (node, remain, path) => {
    if (!node.left && !node.right) {
      if (node.val === remain) {
        ans.push(path)
      }
    }
    node.left && traverse(node.left, remain - node.val, path.concat([node.left.val]))
    node.right && traverse(node.right, remain - node.val, path.concat([node.right.val]))
  }
  traverse(root, targetSum, [root.val])
  return ans
};
// @lc code=end

