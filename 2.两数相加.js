/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let root1 = new ListNode(0, l1);
  let root2 = new ListNode(0, l2);
  let result = new ListNode(0, null);
  let resultCur = result;
  let cur1 = root1.next;
  let cur2 = root2.next;
  let plus = 0;
  while (cur1 || cur2) {
    let num1 = cur1 ? cur1.val : 0;
    let num2 = cur2 ? cur2.val : 0;
    let sum = num1 + num2 + plus;
    plus = 0;
    while (sum >= 10) {
      plus += 1;
      sum -= 10;
    }
    resultCur.next = new ListNode(sum, null);
    resultCur = resultCur.next;
    cur1 = cur1 && cur1.next;
    cur2 = cur2 && cur2.next;
  }
  if (plus > 0) {
    resultCur.next = new ListNode(plus, null);
  }
  return result.next;
};

// 999;
// 999;
// 088;
// 010;
// @lc code=end
