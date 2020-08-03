'use strict';

function calIndex(node, target) {
  if (!node.next) {
    node.index = 1;
    return node;
  }
  const nextNode = calIndex(node.next, target);
  if (!nextNode) return;

  node.index = nextNode.index + 1;
  // 如果下一个节点是目标节点，则将本节点的 next -> 下个节点的 next
  if (nextNode.index === target) {
    node.next = nextNode.next;
    return;
  }
  return node;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  calIndex(head, n);
  return head.index === n ? head.next : head;
};

// 递归的思路，也可以改用数组存储
// 直接链表转数组
