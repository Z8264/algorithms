const removeNthFromEnd = (head, n) => {
  let current = head;
  let nth = head;
  let i = 0;

  while (current && i < n) {
    i += 1;
    current = current.next;
  }

  if (!current) return head.next;

  while (current.next) {
    nth = nth.next;
    current = current.next;
  }

  nth.next = nth.next.next;
  return head;
};

module.exports = removeNthFromEnd;
