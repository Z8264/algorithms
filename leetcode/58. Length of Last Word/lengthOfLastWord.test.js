const lengthOfLastWord = require('./lengthOfLastWord.js');

test('Hello World', () => {
  const res = lengthOfLastWord('Hello World');
  expect(res).toBe(5);
});
