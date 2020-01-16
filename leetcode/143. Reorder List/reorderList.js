const reorderList = (head) => {
  if (!head || !head.next) return head;
  let [slow, fast] = [head, head];
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let current = slow.next;
  slow.next = null;
  let [prev, next] = [null, null];
  while (current) {
    next = current.next;
    current.next = prev;
    [prev, current] = [current, next];
  }

  current = head;
  let [next1, next2] = [null, null];
  while (prev) {
    [next1, next2] = [current.next, prev.next];
    current.next = prev;
    prev.next = next1;
    [current, prev] = [next1, next2];
  }

  return head;
};
module.exports = reorderList;
