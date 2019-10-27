const longestCommonPrefix = require('./longestCommonPrefix');

test('[]', () => {
  const res = longestCommonPrefix([]);
  expect(res).toBe('');
});

test("['a']", () => {
  const res = longestCommonPrefix(['a']);
  expect(res).toBe('a');
});

test("['aaa','aaa']", () => {
  const res = longestCommonPrefix(['aaa', 'aaa']);
  expect(res).toBe('aaa');
});

test("['flower', 'flow', 'flight']", () => {
  const res = longestCommonPrefix(['flower', 'flow', 'flight']);
  expect(res).toBe('fl');
});

test("['dog', 'racecar', 'car']", () => {
  const res = longestCommonPrefix(['dog', 'racecar', 'car']);
  expect(res).toBe('');
});
