const { ListNode } = require('../_utils/ListNode');

const reverseBetween = (head, m, n) => {
  const preHead = new ListNode(0);
  preHead.next = head;

  let first = preHead;

  for (let i = 1; i < m; i += 1) {
    first = first.next;
  }

  let [current, prev, next] = [first.next, null, null];
  for (let i = m; i <= n; i += 1) {
    next = current.next;
    current.next = prev;
    [prev, current] = [current, next];
  }

  first.next.next = next;
  first.next = prev;

  return preHead.next;
};

/**

const reverseBetween2 = (head, m, n) => {
  let first = m > 1 ? head : null;

  for (let i = 1; i < m - 1; i += 1) {
    first = first.next;
  }
  let current = first ? first.next : head;
  let [prev, next] = [null, null];
  for (let i = m; i <= n; i += 1) {
    next = current.next;
    current.next = prev;
    [prev, current] = [current, next];
  }

  if (first) {
    first.next.next = next;
    first.next = prev;
  } else {
    head.next = next;
  }

  return first ? head : prev;
};

*/

module.exports = reverseBetween;
