/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
const sumNumbers = function(root) {
  const dfs = function (node, num) {
    if (!node.left && !node.right) {
      return num
    }
    let sum = 0 // 关键是这里要清空，不能把父节点的值也加进去，只考虑左+右
    if (node.left) {
      sum += dfs(node.left, num * 10 + node.left.val)
    }
    if (node.right) {
      sum += dfs(node.right, num * 10 + node.right.val)
    }
    return sum
  }
  return dfs(root, root.val)
};
// @lc code=end