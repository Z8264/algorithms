const lcm = require('../lcm');

test('least common lcm', () => {
  expect(lcm(0, 0)).toBe(0);
  expect(lcm(1, 0)).toBe(0);
  expect(lcm(0, 1)).toBe(0);
  expect(lcm(4, 6)).toBe(12);
  expect(lcm(6, 21)).toBe(42);
  expect(lcm(7, 2)).toBe(14);
  expect(lcm(3, 5)).toBe(15);
  expect(lcm(7, 3)).toBe(21);
  expect(lcm(1000000, 2)).toBe(1000000);
  expect(lcm(-9, -18)).toBe(18);
  expect(lcm(-7, -9)).toBe(63);
  expect(lcm(-7, 9)).toBe(63);
});
