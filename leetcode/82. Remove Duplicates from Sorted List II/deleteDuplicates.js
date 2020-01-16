const { ListNode } = require('../_utils/ListNode');

const deleteDuplicates = (head) => {
  const preHead = new ListNode(0);
  preHead.next = head;

  let current = preHead;

  while (current.next) {
    let [prev, next] = [current.next, current.next.next];
    while (next && prev.val === next.val) {
      next = next.next;
    }
    if (prev.next === next) {
      current = current.next;
    } else {
      prev = next;
      current.next = next;
    }
  }
  return preHead.next;
};

module.exports = deleteDuplicates;
