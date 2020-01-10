const strStr = require('./strStr.js');

test('strStr', () => {
  const res = strStr('hello', 'll');
  expect(res).toBe(2);
});
