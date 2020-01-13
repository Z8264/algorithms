/**
 * ListNode
 * @param {*} val
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


/**
 * utils from
 * @param {Array} arr
 */
const from = (arr) => {
  const list = new ListNode(0);
  let current = list;
  arr.forEach((el) => {
    current.next = new ListNode(el);
    current = current.next;
  });
  return list.next;
};

/**
 * utils toString
 * @param {ListNode} head
 */
const toString = (head) => {
  const arr = [];
  let current = head;
  while (current) { arr.push(current.val); current = current.next; }
  return arr.toString();
};

/**
 * circle
 * @param {ListNode} head
 */

const circle = (arr, n) => {
  const head = from(arr);

  let nth = head;
  while (n) {
    nth = nth.next;
    n -= 1;
  }

  let current = nth;
  while (current.next) {
    current = current.next;
  }
  current.next = nth;
  return head;
};

module.exports = {
  ListNode, from, toString, circle,
};
