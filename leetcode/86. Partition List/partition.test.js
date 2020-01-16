const { from, toString } = require('../_utils/ListNode');
const partition = require('./partition');


test('deleteDuplicates', () => {
  expect(toString(partition(from([1, 2, 3, 4, 5]), 3))).toBe('1,2,3,4,5');
  expect(toString(partition(from([1, 4, 3, 2, 5, 2]), 3))).toBe('1,2,2,4,3,5');
//   expect(toString(partition(from([1])))).toBe('1');
//   expect(toString(partition(from([])))).toBe('');
});
