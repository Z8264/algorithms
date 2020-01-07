const ListNode = require('./ListNode');
const addTwoNumbers = require('./addTwoNumbers');


test('addTwoNumbers', () => {
  const l1 = new ListNode(3);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(2);

  const l2 = new ListNode(4);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(5);

  const res = addTwoNumbers(l1, l2);

  expect(res.val).toBe(7);
  expect(res.next.val).toBe(0);
  expect(res.next.next.val).toBe(8);
});
