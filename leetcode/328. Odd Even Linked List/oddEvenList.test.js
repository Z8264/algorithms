const { from, toString } = require('../_utils/ListNode');

const oddEvenList = require('./oddEvenList');

test('oddEvenList', () => {
  expect(toString(oddEvenList(from([1, 2, 3, 4, 5])))).toBe('1,3,5,2,4');
  expect(toString(oddEvenList(from([1, 2, 3, 4])))).toBe('1,3,2,4');
});
