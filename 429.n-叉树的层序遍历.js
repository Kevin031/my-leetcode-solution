/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length) {
    let level = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.pop();
      level.push(node.val);
      if (node.children) {
        for (let j = 0; j < node.children.length; j++) {
          queue.unshift(node.children[j]);
        }
      }
    }
    result.push(level);
  }
  return result;
};
// @lc code=end
