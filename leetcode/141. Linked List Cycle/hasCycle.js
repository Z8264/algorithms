const hasCycle = (head) => {
  let [l1, l2] = [head, head];
  while (l2 && l2.next) {
    l1 = l1.next;
    l2 = l2.next.next;
    if (l1 === l2) return true;
  }
  return false;
};

module.exports = hasCycle;
