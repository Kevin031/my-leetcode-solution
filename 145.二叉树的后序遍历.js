/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
const postorderTraversal = function (root) {
  let res = [];
  let queue = [root];
  while (queue.length) {
    let node = queue.pop();
    if (node) {
      res.unshift(node.val);
      queue.push(node.right);
      queue.push(node.left);
    }
  }
  return res;
};
// @lc code=end
