/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let root = new ListNode(0, head);
  let cur = root;
  while (cur.next && cur.next.next) {
    let temp = cur.next;
    let nextTemp = cur.next.next.next;
    // root->1->2->3
    // 1 -> 2
    cur.next = cur.next.next;
    // 2 -> 1(temp)
    cur.next.next = temp;
    // 1 -> 3
    temp.next = nextTemp;
    // 指针移动到1
    cur = temp;
  }
  return root.next;
};
// @lc code=end
