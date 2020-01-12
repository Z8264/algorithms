const { from, toString } = require('../_utils/ListNode');

const removeNthFromEnd = require('./removeNthFromEnd');

test('removeNthFromEnd', () => {
  const l1 = from([1, 2, 3, 4, 5]);
  const h1 = removeNthFromEnd(l1, 2);
  expect(toString(h1)).toBe('1,2,3,5');

  const l2 = from([1]);
  const h2 = removeNthFromEnd(l2, 1);
  expect(h2).toBe(null);

  const l3 = from([1, 2]);
  const h3 = removeNthFromEnd(l3, 2);
  expect(h3.val).toBe(2);
  expect(h3.next).toBeNull();


  const l4 = from([1, 2]);
  const h4 = removeNthFromEnd(l4, 1);
  expect(h4.val).toBe(1);
  expect(h4.next).toBeNull();
});
