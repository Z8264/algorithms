const { from, toString } = require('../_utils/ListNode');

const removeElements = require('./removeElements');

test('reverseList', () => {
  expect(toString(removeElements(from([6, 1, 2, 6, 3, 4, 5, 6]), 6))).toBe('1,2,3,4,5');
});
