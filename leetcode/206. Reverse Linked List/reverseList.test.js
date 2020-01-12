const { from, toString } = require('../_utils/ListNode');

const reverseList = require('./reverseList');

test('reverseList', () => {
  expect(toString(reverseList(from([1, 2, 3, 4, 5])))).toBe('5,4,3,2,1');
});
