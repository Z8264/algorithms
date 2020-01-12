const { from, toString } = require('../_utils/ListNode');
const addTwoNumbers = require('./addTwoNumbers');


test('addTwoNumbers', () => {
  const l1 = from([3, 4, 2]);
  const l2 = from([4, 6, 5]);
  expect(toString(addTwoNumbers(l1, l2))).toBe('7,0,8');
});
