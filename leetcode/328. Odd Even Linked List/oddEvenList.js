
const oddEvenList = (head) => {
  if (!head || !head.next) return head;
  let [odd, even] = [head, head.next];
  const evenHead = even;
  while (odd.next && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;

  return head;
};
module.exports = oddEvenList;
