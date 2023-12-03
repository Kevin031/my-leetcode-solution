/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head || !head.next) return head
  let pre = null
  let cur = head
  let temp = null
  while (cur) {
    // cur: 0
    // 0->1->2->3 pre: null
    temp = cur.next
    // 0->1->2->3 temp: 1
    cur.next = pre
    // null<-0 1->2->3 temp: 1
    temp.next = cur
    // null<-0<-1 2->3 temp: 1
    pre = temp
  }
  return pre
};
// @lc code=end

