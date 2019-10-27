const { lengthOfLongestSubstring, lengthOfLongestSubstring2 } = require('./lengthOfLongestSubstring');


test('lengthOfLongestSubstring abcabcbb', () => {
  const res = lengthOfLongestSubstring('abcabcbb');
  expect(res).toBe(3);
});

test('lengthOfLongestSubstring bbbbb', () => {
  const res = lengthOfLongestSubstring('bbbbb');
  expect(res).toBe(1);
});

test('lengthOfLongestSubstring pwwkew', () => {
  const res = lengthOfLongestSubstring('pwwkew');
  expect(res).toBe(3);
});

test('lengthOfLongestSubstring2 abcabcbb', () => {
  const res = lengthOfLongestSubstring2('abcabcbb');
  expect(res).toBe(3);
});

test('lengthOfLongestSubstring2 bbbbb', () => {
  const res = lengthOfLongestSubstring2('bbbbb');
  expect(res).toBe(1);
});

test('lengthOfLongestSubstring2 pwwkew', () => {
  const res = lengthOfLongestSubstring2('pwwkew');
  expect(res).toBe(3);
});
