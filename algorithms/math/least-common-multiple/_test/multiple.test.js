const multiple = require('../multiple');

test('least common multiple', () => {
  expect(multiple(0, 0)).toBe(0);
  expect(multiple(1, 0)).toBe(0);
  expect(multiple(0, 1)).toBe(0);
  expect(multiple(4, 6)).toBe(12);
  expect(multiple(6, 21)).toBe(42);
  expect(multiple(7, 2)).toBe(14);
  expect(multiple(3, 5)).toBe(15);
  expect(multiple(7, 3)).toBe(21);
  expect(multiple(1000000, 2)).toBe(1000000);
  expect(multiple(-9, -18)).toBe(18);
  expect(multiple(-7, -9)).toBe(63);
  expect(multiple(-7, 9)).toBe(63);
});
