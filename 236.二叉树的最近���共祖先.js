/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  const traverseTree = (node, p, q) => {
    // 终止条件，遍历到叶子节点了或者找到了目标
    if (node === null || node === p || node === q) {
      return node;
    }
    // 递归逻辑
    let left = traverseTree(node.left, p, q);
    let right = traverseTree(node.right, p, q);

    // 左节点和右节点都找到了p和q
    if (left !== null && right !== null) {
      // 此时中间节点就是目标
      return node;
    }
    return left || right;
  };

  return traverseTree(root, p, q);
};
// @lc code=end
