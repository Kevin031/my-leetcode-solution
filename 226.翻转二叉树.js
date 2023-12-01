/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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

const swap = (node) => {
  let flag = node.left;
  node.left = node.right;
  node.right = flag;
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  const traversal = (node) => {
    node.left && traversal(node.left);
    node.right && traversal(node.right);
    swap(node);
  };
  root && traversal(root);
  return root;
};
// @lc code=end
