const romanToInt = require('./romanToInt');


test('romanToInt', () => {
  expect(romanToInt('III')).toBe(3);
  expect(romanToInt('IV')).toBe(4);
  expect(romanToInt('IX')).toBe(9);
  expect(romanToInt('LVIII')).toBe(58);
});
