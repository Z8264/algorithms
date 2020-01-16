const { from, toString } = require('../_utils/ListNode');
const getIntersectionNode = require('./getIntersectionNode');


test('getIntersectionNode', () => {
  const A = from([1, 2, 3]);
  const B = from([1, 2]);
  const C = from([5, 6, 7]);

  let current = A;
  while (current.next) current = current.next;
  current.next = C;

  current = B;
  while (current.next) current = current.next;
  current.next = C;

  expect(getIntersectionNode(A, B).val).toBe(5);
  expect(toString(getIntersectionNode(A, B))).toBe('5,6,7');
  expect(getIntersectionNode(from([1, 2]), from([3, 4]))).toBeNull();
});
