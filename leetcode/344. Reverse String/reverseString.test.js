const reverseString = require('./reverseString');


test('Reverse String', () => {
  const s = ['h', 'e', 'l', 'l', 'o'];
  reverseString(s);
  expect(s).toEqual(['o', 'l', 'l', 'e', 'h']);
});
