const countPrimes = require('../countPrimes-sieve');


test('count primality', () => {
  expect(countPrimes(10)).toBe(4);
});
