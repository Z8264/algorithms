const countPrimes = require('./countPrimes');


test('count primality', () => {
  expect(countPrimes(10)).toBe(4);
});
