const cycle = (head) => {
  if (!head || !head.next) return null;
  let [l1, l2] = [head, head];

  while (l2 && l2.next) {
    l1 = l1.next;
    l2 = l2.next.next;
    if (l1 === l2) break;
  }

  if (l1 !== l2) return null;

  let current = head;
  while (current !== l1) {
    current = current.next;
    l1 = l1.next;
  }
  return current;
};

export default cycle;
