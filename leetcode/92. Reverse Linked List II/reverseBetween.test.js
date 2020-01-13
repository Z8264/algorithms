const { from, toString } = require('../_utils/ListNode');

const reverseBetween = require('./reverseBetween');

test('reverseBetween', () => {
  expect(toString(reverseBetween(from([1, 2, 3, 4, 5]), 2, 4))).toBe('1,4,3,2,5');
  expect(toString(reverseBetween(from([1, 2, 3, 4, 5]), 1, 5))).toBe('5,4,3,2,1');
  expect(toString(reverseBetween(from([1, 2, 3, 4, 5]), 3, 3))).toBe('1,2,3,4,5');
  expect(toString(reverseBetween(from([1]), 1, 1))).toBe('1');
});
