const fibonacci = require('../fibonacci-recursive');

test('fibonacci: recurisive', () => {
  expect(fibonacci(0)).toBe(0);
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(2)).toBe(1);
  expect(fibonacci(3)).toBe(2);
  expect(fibonacci(4)).toBe(3);
  expect(fibonacci(5)).toBe(5);
  expect(fibonacci(6)).toBe(8);
  expect(fibonacci(7)).toBe(13);
  expect(fibonacci(8)).toBe(21);
});
