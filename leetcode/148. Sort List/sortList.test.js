const { from, toString } = require('../_utils/ListNode');

const detectCycle = require('./sortList');

test('sortList', () => {
  expect(toString(detectCycle(from([1, 2, 3, 4, 5])))).toBe('1,2,3,4,5');
  expect(toString(detectCycle(from([5, 4, 3, 2, 1])))).toBe('1,2,3,4,5');
});
