const reverseList = (head) => {
  let current = head;
  let [prev, next] = [null, null];
  while (current) {
    next = current.next;
    current.next = prev;
    [prev, current] = [current, next];
  }
  return prev;
};
module.exports = reverseList;
