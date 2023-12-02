/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * 单调队列
 */
class Deque {
  constructor(size) {
    this.queue = [];
  }

  push(val) {
    let back = this.queue[this.queue.length - 1];
    while (back !== undefined && back < val) {
      this.queue.pop();
      back = this.queue[this.queue.length - 1];
    }
    this.queue.push(val);
  }

  shift(val) {
    let front = this.queue[0];
    if (front === val) {
      this.queue.shift();
    }
  }

  maxValue() {
    return this.queue[0];
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  let deque = new Deque(k);
  let result = [];
  // for (let i = 0; i < nums.length; i++) {
  //   deque.push(nums[i]);
  //   if (i >= k - 1) {
  //     deque.shift(nums[i - k + 1]);
  //     result.push(deque.queue[0]);
  //   }
  // }
  let i = 0,
    j = 0;
  while (j < k) {
    deque.push(nums[j]);
    j++;
  }
  result.push(deque.maxValue());
  while (j < nums.length) {
    deque.push(nums[j]);
    deque.shift(nums[i]);
    result.push(deque.maxValue());
    i++;
    j++;
  }
  return result;
};
// @lc code=end
