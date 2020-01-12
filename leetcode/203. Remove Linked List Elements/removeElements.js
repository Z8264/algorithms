const { ListNode } = require('../_utils/ListNode');

const removeElements = (head, val) => {
  const first = new ListNode(0);
  first.next = head;

  let [prev, current] = [first, head];

  while (current) {
    if (current.val === val) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }

  return first.next;
};

module.exports = removeElements;
