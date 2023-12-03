/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @return {number}
 */
const pathSum = function(root, targetSum) {
  if (!root) return 0
  let curSum = dfs(root, targetSum)
  let leftSum = pathSum(root.left, targetSum)
  let rightSum = pathSum(root.right, targetSum)
  return curSum + leftSum + rightSum
};

const dfs = function (node, targetSum) {
  if (!node) return 0
  let res = 0
  if (node.val === targetSum) {
    res++
  }
  res += dfs(node.left, targetSum - node.val)
  res += dfs(node.right, targetSum - node.val)
  return res
}
// @lc code=end

