const middle = (head) => {
  let [slow, fast] = [head, head];
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

export default middle;
