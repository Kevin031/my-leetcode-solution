/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length) {
    // 保存当前层级的遍历结果
    let curLevel = [];
    // 记录当前层级的长度
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      curLevel.push(node.val);
      // 在上一层就记录好了下一层的结果，也就是说到了下一轮循环的时候，层的长度就已知了
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    // 加入结果
    result.push(curLevel);
  }
  return result;
};
// @lc code=end
