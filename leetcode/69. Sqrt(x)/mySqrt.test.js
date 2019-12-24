const mySqrt = require('./mySqrt.js');

test('1', () => {
  const res = mySqrt(1);
  expect(res).toBe(1);
});

test('4', () => {
  const res = mySqrt(4);
  expect(res).toBe(2);
});

test('8', () => {
  const res = mySqrt(8);
  expect(res).toBe(2);
});
