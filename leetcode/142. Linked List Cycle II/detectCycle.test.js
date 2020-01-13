const { from, circle } = require('../_utils/ListNode');

const detectCycle = require('./detectCycle');

test('detectCycle', () => {
  expect(detectCycle(from([1, 2, 3, 4, 5]))).toBe(null);
  expect(detectCycle(from([1, 2]))).toBe(null);
  expect(detectCycle(from([1]))).toBe(null);
  expect(detectCycle(from([]))).toBe(null);

  expect(detectCycle(circle([1, 2, 3, 4, 5], 0)).val).toBe(1);
  expect(detectCycle(circle([1, 2, 3, 4, 5], 2)).val).toBe(3);
});
