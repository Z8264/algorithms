const removeNthFromEnd = (head, n) => {
  let [slow, fast] = [head, head];
  let i = 0;
  while (fast && i < n) {
    fast = fast.next;
    i += 1;
  }

  if (!fast) return head;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return head;
};

export default removeNthFromEnd;
