const myAtoi = require('./myAtoi');

test('"42"', () => {
  const res = myAtoi('42');
  expect(res).toBe(42);
});

test('"   -42"', () => {
  const res = myAtoi('   -42');
  expect(res).toBe(-42);
});

test('"4193 with words"', () => {
  const res = myAtoi('4193 with words');
  expect(res).toBe(4193);
});

test('"words and 987"', () => {
  const res = myAtoi('words and 987');
  expect(res).toBe(0);
});

test('"-91283472332"', () => {
  const res = myAtoi('-91283472332');
  expect(res).toBe(-2147483648);
});
