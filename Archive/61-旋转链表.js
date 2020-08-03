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
  if (k === 0) return head;
  if (head === null) return head;
  let current = head;

  const arr = [current];
  while (current.next) {
    arr.push(current.next);
    current = current.next;
  }
  k = k % arr.length;
  // console.log(arr);

  const rotateArr = [...arr.slice(arr.length - k), ...arr.slice(0, arr.length - k)];
  // console.log(rotateArr);
  return generator(rotateArr);
};

function generator(arr) {
  const head = new ListNode('head');
  let current = head;
  arr.forEach((item, index) => {
    current.next = item;
    current = item;
  });
  current.next = null;
  return head.next;
}
