const { from, toString } = require('../_utils/ListNode');

const reorderList = require('./reorderList');

test('reorderList', () => {
  expect(toString(reorderList(from([1, 2, 3, 4, 5])))).toBe('1,5,2,4,3');
  expect(toString(reorderList(from([1, 2])))).toBe('1,2');
  expect(toString(reorderList(from([])))).toBe('');
});
