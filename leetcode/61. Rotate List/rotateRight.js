const rotateRight = (head, k) => {
  if (!head) return null;
  let current = head;
  let l = 1;
  while (current.next) {
    l += 1;
    current = current.next;
  }


  let n = l - (k % l);
  if (n === 0) return head;

  current.next = head;

  current = head;
  while (n - 1) {
    current = current.next;
    n -= 1;
  }

  head = current.next;
  current.next = null;

  return head;
};

module.exports = rotateRight;
