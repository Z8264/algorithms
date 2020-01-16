const { from, toString } = require('../_utils/ListNode');
const rotateRight = require('./rotateRight');


test('rotateRight', () => {
  expect(toString(rotateRight(from([1, 2, 3, 4, 5]), 2))).toBe('4,5,1,2,3');
  expect(toString(rotateRight(from([1, 2, 3, 4, 5]), 3))).toBe('3,4,5,1,2');
  expect(toString(rotateRight(from([1]), 3))).toBe('1');
  expect(toString(rotateRight(from([]), 0))).toBe('');
});
