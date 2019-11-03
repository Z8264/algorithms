const isValid = require('./isValid.js');

test('"()"', () => {
  const res = isValid('()');
  expect(res).toBe(true);
});

test('"()[]{}"', () => {
  const res = isValid('()[]{}');
  expect(res).toBe(true);
});

test('"(]"', () => {
  const res = isValid('(]');
  expect(res).toBe(false);
});

test('"([)]"', () => {
  const res = isValid('([)]');
  expect(res).toBe(false);
});
