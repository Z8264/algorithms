class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
const partition = (head, x) => {
  let small = new ListNode(0);
  const smallHead = small;
  let large = new ListNode(0);
  const largeHead = large;
  while (head !== null) {
    if (head.val < x) {
      small.next = head;
      small = small.next;
    } else {
      large.next = head;
      large = large.next;
    }
    head = head.next;
  }
  large.next = null;
  small.next = largeHead.next;
  return smallHead.next;
};

export default partition;
