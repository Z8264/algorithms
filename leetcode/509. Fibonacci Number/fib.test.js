const fib = require('./fib');

test('0', () => {
  const res = fib(0);
  expect(res).toBe(0);
});

test('2', () => {
  const res = fib(2);
  expect(res).toBe(1);
});

test('3', () => {
  const res = fib(3);
  expect(res).toBe(2);
});

test('4', () => {
  const res = fib(4);
  expect(res).toBe(3);
});

test('100', () => {
  const res = fib(100);
  expect(res).toBe(354224848179262000000);
});
