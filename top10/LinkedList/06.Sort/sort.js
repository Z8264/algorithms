class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const merge = (head1, head2) => {
  const dummyHead = new ListNode(0);
  let temp = dummyHead; let temp1 = head1; let
    temp2 = head2;
  while (temp1 !== null && temp2 !== null) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1;
      temp1 = temp1.next;
    } else {
      temp.next = temp2;
      temp2 = temp2.next;
    }
    temp = temp.next;
  }
  if (temp1 !== null) {
    temp.next = temp1;
  } else if (temp2 !== null) {
    temp.next = temp2;
  }
  return dummyHead.next;
};
const sort = (head) => {
  if (head === null) {
    return head;
  }
  let length = 0;
  let node = head;
  while (node !== null) {
    length += 1;
    node = node.next;
  }
  const dummyHead = new ListNode(0, head);

  for (let subLength = 1; subLength < length; subLength *= 2) {
    let prev = dummyHead; let
      curr = dummyHead.next;
    while (curr !== null) {
      const head1 = curr;
      for (let i = 1; i < subLength && curr.next !== null; i += 1) {
        curr = curr.next;
      }
      const head2 = curr.next;
      curr.next = null;
      curr = head2;
      for (let i = 1; i < subLength && curr != null && curr.next !== null; i += 1) {
        curr = curr.next;
      }
      let next = null;
      if (curr !== null) {
        next = curr.next;
        curr.next = null;
      }
      const merged = merge(head1, head2);
      prev.next = merged;
      while (prev.next !== null) {
        prev = prev.next;
      }
      curr = next;
    }
  }
  return dummyHead.next;
};

export default sort;
