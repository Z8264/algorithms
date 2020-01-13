const { from, toString } = require('../_utils/ListNode');

const mergeTwoLists = require('./mergeTwoLists');

test('mergeTwoLists', () => {
  expect(toString(mergeTwoLists(from([1, 2, 4]), from([1, 3, 4])))).toBe('1,1,2,3,4,4');
});
