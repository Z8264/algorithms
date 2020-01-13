const { from, circle } = require('../_utils/ListNode');

const hasCycle = require('./hasCycle');

test('hasCycle', () => {
  expect(hasCycle(from([1, 2, 3, 4, 5]))).toBe(false);
  expect(hasCycle(from([1, 2]))).toBe(false);
  expect(hasCycle(from([1]))).toBe(false);
  expect(hasCycle(from([]))).toBe(false);

  expect(hasCycle(circle([1, 2, 3, 4, 5], 2))).toBe(true);
});
