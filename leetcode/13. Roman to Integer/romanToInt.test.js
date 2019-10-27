const romanToInt = require('./romanToInt');


test('III', () => {
  const res = romanToInt('III');
  expect(res).toBe(3);
});


test('IV', () => {
  const res = romanToInt('IV');
  expect(res).toBe(4);
});


test('IX', () => {
  const res = romanToInt('IX');
  expect(res).toBe(9);
});


test('LVIII', () => {
  const res = romanToInt('LVIII');
  expect(res).toBe(58);
});
