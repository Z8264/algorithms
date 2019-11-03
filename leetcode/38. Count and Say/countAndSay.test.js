const countAndSay = require('./countAndSay.js');

test('1', () => {
  const res = countAndSay(1);
  expect(res).toBe('1');
});

test('4', () => {
  const res = countAndSay(4);
  expect(res).toBe('1211');
});
