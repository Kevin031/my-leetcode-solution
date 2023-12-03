/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function(root) {
  const traverse = (node) => {
    if (node === null) return 0
    if (node.left === null && node.right === null) return 0
    let leftValue = traverse(node.left)
    // 左叶子的判断依据 node.left存在但是node.left的左右节点都不存在
    if (node.left && !node.left.left && !node.left.right) {
      leftValue = node.left.val
    }
    let rightValue = traverse(node.right)
    return leftValue + rightValue
  }
  return traverse(root)
};
// @lc code=end
