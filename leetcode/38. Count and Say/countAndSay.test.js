const countAndSay = require('./countAndSay.js');

test('countAndSay', () => {
  expect(countAndSay(1)).toBe('1');
  expect(countAndSay(4)).toBe('1211');
});
