export class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

export const toString = (head) => {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr.join(',');
};

export const createFromArray = (array = []) => {
  if (!array.length) return null;

  const preHead = new ListNode(null);
  let current = preHead;

  array.forEach((el) => {
    current.next = new ListNode(el);
    current = current.next;
  });

  return preHead.next;
};
