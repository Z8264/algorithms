const detectCapitalUse = require('./detectCapitalUse');

test('detectCapitalUse', () => {
  expect(detectCapitalUse('USA')).toBe(true);
  expect(detectCapitalUse('leetcode')).toBe(true);
  expect(detectCapitalUse('FlaG')).toBe(false);
});
