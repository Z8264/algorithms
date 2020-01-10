const isPowerOfFour = require('./isPowerOfFour');

test('isPowerOfFour', () => {
  expect(isPowerOfFour(-1)).toBe(false);
  expect(isPowerOfFour(0)).toBe(false);
  expect(isPowerOfFour(1)).toBe(true);
  expect(isPowerOfFour(4)).toBe(true);
  expect(isPowerOfFour(5)).toBe(false);
  expect(isPowerOfFour(6)).toBe(false);
  expect(isPowerOfFour(7)).toBe(false);
  expect(isPowerOfFour(8)).toBe(false);
  expect(isPowerOfFour(16)).toBe(true);
  expect(isPowerOfFour(17)).toBe(false);
  expect(isPowerOfFour(18)).toBe(false);
  expect(isPowerOfFour(64)).toBe(true);
  expect(isPowerOfFour(65)).toBe(false);
  expect(isPowerOfFour(65536)).toBe(true);
});
