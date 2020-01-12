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


module.exports = { ListNode, from, toString };
