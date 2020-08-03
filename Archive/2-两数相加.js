'use strict';
// 

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function add(l1, l2, carry) {
  // 是否需要进位
  l1.val += (l2 ? l2.val : 0) + carry;
  if (l1.val > 9) {
    l1.val = l1.val % 10;
    carry = 1;
  } else carry = 0;

  if (!l1.next) {
    if (!carry && !(l2 && l2.next)) return;
    // 没有下一个 next，但是需要进位或加数的 next，则创建一个 ListNode
    l1.next = new ListNode(0);
  }

  return add(l1.next, l2 && l2.next, carry);
}

const addTwoNumbers = function(l1, l2) {
  add(l1, l2, 0);
  return l1;
};

const a = new ListNode(2);
a.next = new ListNode(4);
a.next.next = new ListNode(3);
const b = new ListNode(5);
b.next = new ListNode(6);
b.next.next = new ListNode(4);
console.log(addTwoNumbers(a, b));
