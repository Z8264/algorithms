const strStr = require('./strStr.js');

test('hello ll', () => {
  const res = strStr('hello', 'll');
  expect(res).toBe(2);
});
