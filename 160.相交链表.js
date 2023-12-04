/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  const getListLen = (head) => {
    let len = 0;
    let cur = head;
    while (cur.next) {
      cur = cur.next;
      len++;
    }
    return len;
  };

  let curA = headA;
  let curB = headB;
  let lenA = getListLen(curA);
  let lenB = getListLen(curB);
  if (lenB > lenA) {
    // 更长的那个来当A
    [curA, curB] = [curB, curA];
    [lenA, lenB] = [lenB, lenA];
  }
  // 长度差
  let i = lenA - lenB;
  while (i > 0) {
    curA = curA.next;
    i--;
  }
  while (curA && curA !== curB) {
    curA = curA.next;
    curB = curB.next;
  }
  return curA;
};
// @lc code=end
