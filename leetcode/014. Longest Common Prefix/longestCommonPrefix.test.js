const longestCommonPrefix = require('./longestCommonPrefix');

test('longestCommonPrefix', () => {
  expect(longestCommonPrefix([])).toBe('');
  expect(longestCommonPrefix(['a'])).toBe('a');
  expect(longestCommonPrefix(['aaa', 'aaa'])).toBe('aaa');
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
});
