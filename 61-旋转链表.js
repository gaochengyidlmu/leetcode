'use strict';

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) return null;
  if (k === 0) return head;

  // 先将链表转为闭环
  let count = 1;
  let current = head;

  while (current.next) {
    count++;
    current = current.next;
  }
  // 形成闭环
  current.next = head;

  k = count - (k % count);
  console.log('k % count: ', k % count);
  console.log('count: ', count);
  console.log('k: ', k);
  console.log('head: ', head);
  while (k > 1) {
    head = head.next;
    k--;
  }
  console.log('head: ', head);
  const target = head.next;
  head.next = null;

  return target;
};

const a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
// a.next.next.next = new ListNode(4);
// a.next.next.next.next = new ListNode(5);

console.log(JSON.stringify(rotateRight(a, 2), null, 2));
