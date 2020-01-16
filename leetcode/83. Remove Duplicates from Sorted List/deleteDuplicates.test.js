const { from, toString } = require('../_utils/ListNode');
const deleteDuplicates = require('./deleteDuplicates');


test('deleteDuplicates', () => {
  expect(toString(deleteDuplicates(from([1, 1, 2])))).toBe('1,2');
  expect(toString(deleteDuplicates(from([1, 1, 2, 2, 3, 3])))).toBe('1,2,3');
  expect(toString(deleteDuplicates(from([1])))).toBe('1');
  expect(toString(deleteDuplicates(from([])))).toBe('');
});
