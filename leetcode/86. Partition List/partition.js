const { ListNode } = require('../_utils/ListNode');

const partition = (head, x) => {
  const preHead = new ListNode(0);
  preHead.next = head;

  const lessHead = new ListNode(0);

  let [less, prev, current] = [lessHead, preHead, head];
  while (current) {
    const { next } = current;
    if (current.val < x) {
      less.next = current;
      less = current;
      prev.next = next;
    } else {
      prev = current;
    }
    current = next;
  }
  less.next = preHead.next;

  return lessHead.next;
};
module.exports = partition;
