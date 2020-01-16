const { from, toString } = require('../_utils/ListNode');
const insertionSortList = require('./insertionSortList');


test('insertionSortList', () => {
  expect(toString(insertionSortList(from([4, 2, 1, 3])))).toBe('1,2,3,4');
  expect(toString(insertionSortList(from([-1, 5, 3, 4, 1, 2])))).toBe('-1,1,2,3,4,5');
  expect(toString(insertionSortList(from([1])))).toBe('1');
  expect(toString(insertionSortList(from([])))).toBe('');
});
