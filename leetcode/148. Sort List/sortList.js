const { ListNode } = require('../_utils/ListNode');


const cut = (head, size) => {
  let curr = head;
  while (size - 1 && curr) {
    size -= 1;
    curr = curr.next;
  }
  if (!curr) return null;
  const { next } = curr;
  curr.next = null;
  return next;
};

const merge = (n1, n2) => {
  const res = new ListNode(null);
  let prev = res;
  while (n1 && n2) {
    if (n1.val < n2.val) [prev.next, n1] = [n1, n1.next];
    else { [prev.next, n2] = [n2, n2.next]; }
    prev = prev.next;
  }
  prev.next = n1 || n2;
  return res.next;
};


const sortList = (head) => {
  if (!head || !head.next) return head;
  let [tmp, count] = [head, 0];
  while (tmp) [tmp, count] = [tmp.next, count + 1];

  const res = new ListNode(null);
  res.next = head;
  for (let i = 1; i < count; i *= 2) {
    let [prev, curr] = [res, res.next];
    while (curr) {
      const n1 = curr;
      const n2 = cut(n1, i);
      curr = cut(n2, i);

      prev.next = merge(n1, n2);
      while (prev.next) prev = prev.next;
    }
  }
  return res.next;
};


module.exports = sortList;
