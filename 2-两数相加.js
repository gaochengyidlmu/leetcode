'use strict';

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = function(l1, l2) {
  // 构建一个新的链表
  const root = new ListNode('head');

  let add = 0;
  let current = root;
  let val;

  while (l1 || l2) {
    val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
    if (val > 9) {
      add = 1;
      val %= 10;
    } else add = 0;
    current.next = new ListNode(val);
    current = current.next;

    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }

  // 在最后，如果还需要进位，则额外创建一个即可
  add && (current.next = new ListNode(add));
  return root.next;
};

const a = new ListNode(5);
const b = new ListNode(5);
console.log(addTwoNumbers(a, b));
