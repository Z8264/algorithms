const { from, toString } = require('../_utils/ListNode');
const deleteNode = require('./deleteNode');

test('detectCycle', () => {
  const head = from([1, 2, 3, 4, 5]);
  deleteNode(head.next.next);
  expect(toString(head)).toBe('1,2,4,5');
});
