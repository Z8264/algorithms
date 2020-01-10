const isPowerOfThree = require('./isPowerOfThree');

test('isPowerOfThree', () => {
  expect(isPowerOfThree(-1)).toBe(false);
  expect(isPowerOfThree(0)).toBe(false);
  expect(isPowerOfThree(1)).toBe(true);
  expect(isPowerOfThree(3)).toBe(true);
  expect(isPowerOfThree(4)).toBe(false);
  expect(isPowerOfThree(6)).toBe(false);
  expect(isPowerOfThree(7)).toBe(false);
  expect(isPowerOfThree(8)).toBe(false);
  expect(isPowerOfThree(9)).toBe(true);
  expect(isPowerOfThree(10)).toBe(false);
  expect(isPowerOfThree(13)).toBe(false);
  expect(isPowerOfThree(27)).toBe(true);
  expect(isPowerOfThree(31)).toBe(false);
  expect(isPowerOfThree(6561)).toBe(true);
  expect(isPowerOfThree(1162261467)).toBe(true);
});
