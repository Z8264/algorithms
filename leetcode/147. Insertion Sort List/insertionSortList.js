const { ListNode } = require('../_utils/ListNode');


const insertionSortList = (head) => {
  const preHead = new ListNode(0);
  preHead.next = head;
  let current = head;
  while (current && current.next) {
    if (current.val > current.next.val) {
      const { next } = current;
      current.next = current.next.next;

      let now = preHead;
      while (now && now.next && next.val > now.next.val) now = now.next;
      next.next = now.next;
      now.next = next;
    } else {
      current = current.next;
    }
  }
  return preHead.next;
};

module.exports = insertionSortList;
