const { ListNode } = require('../_utils/ListNode');

const mergeTwoLists = (l1, l2) => {
  const head = new ListNode(0);
  let current = head;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 === null ? l2 : l1;

  return head.next;
};

module.exports = mergeTwoLists;
