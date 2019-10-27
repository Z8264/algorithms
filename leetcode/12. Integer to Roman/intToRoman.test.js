const intToRoman = require('./intToRoman');


test('4', () => {
  const res = intToRoman(4);
  expect(res).toBe('IV');
});

test('9', () => {
  const res = intToRoman(9);
  expect(res).toBe('IX');
});

test('58', () => {
  const res = intToRoman(58);
  expect(res).toBe('LVIII');
});

test('1994', () => {
  const res = intToRoman(1994);
  expect(res).toBe('MCMXCIV');
});
