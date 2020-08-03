/**
 *
 给定两个非空链表来代表两个非负整数，位数按照逆序方式存储，它们的每个节点只存储单个数字。将这两数相加会返回一个新的链表。

 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

 示例：

 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 输出：7 -> 0 -> 8
 原因：342 + 465 = 807
 */

'use strict'

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  let x = ''
  return valueToListNode(getValue(l1) + getValue(l2))
};

function getValue (aListNode, value = '') {
  value = aListNode.val + value
  if (aListNode.next === null) return parseInt(value)
  return getValue(aListNode.next, value)
}

function valueToListNode (value) {
  let nodeList = []

  if (value === 0) nodeList.push(0)
  else {
    while (value > 0) {
      nodeList.push(value % 10)
      value = parseInt(value / 10)
    }
  }

  return nodeList
}

let l1 = new ListNode(2)

console.log(addTwoNumbers([2,4,3], [5,6,4]))
