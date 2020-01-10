const primality = require('../primality-division');


test('primality', () => {
  expect(primality(1)).toBe(false);
  expect(primality(2)).toBe(true);
  expect(primality(3)).toBe(true);
  expect(primality(5)).toBe(true);
  expect(primality(11)).toBe(true);
  expect(primality(191)).toBe(true);
  expect(primality(199)).toBe(true);

  expect(primality(-1)).toBe(false);
  expect(primality(0)).toBe(false);
  expect(primality(4)).toBe(false);
  expect(primality(6)).toBe(false);
  expect(primality(12)).toBe(false);
  expect(primality(14)).toBe(false);
  expect(primality(25)).toBe(false);
  expect(primality(192)).toBe(false);
  expect(primality(200)).toBe(false);
  expect(primality(400)).toBe(false);

  expect(primality(0.5)).toBe(false);
  expect(primality(1.3)).toBe(false);
  expect(primality(10.5)).toBe(false);
});
