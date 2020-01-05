const Comparator = require('./Comparator');

test('compare with defaul function', () => {
  const fn = new Comparator();

  expect(fn.equal(0, 0)).toBe(true);
  expect(fn.equal(0, 1)).toBe(false);
  expect(fn.equal('a', 'a')).toBe(true);
  expect(fn.less(1, 2)).toBe(true);
  expect(fn.less(-1, 2)).toBe(true);
  expect(fn.less('a', 'b')).toBe(true);
  expect(fn.less('a', 'ab')).toBe(true);
  expect(fn.less(2, 1)).toBe(false);
  expect(fn.lessOrEqual(2, 1)).toBe(false);
  expect(fn.lessOrEqual(1, 1)).toBe(true);
  expect(fn.lessOrEqual(0, 0)).toBe(true);
  expect(fn.greater(0, 0)).toBe(false);
  expect(fn.greater(10, 0)).toBe(true);
  expect(fn.greaterOrEqual(1, 0)).toBe(true);
  expect(fn.greaterOrEqual(1, 1)).toBe(true);
  expect(fn.greaterOrEqual(0, 1)).toBe(false);
});


test('compare with custom function', () => {
  const fn = new Comparator((a, b) => {
    if (a.length === b.length) return 0;
    return a.length < b.length ? -1 : 1;
  });

  expect(fn.equal('a', 'b')).toBe(true);
  expect(fn.equal('a', '')).toBe(false);
  expect(fn.less('b', 'aa')).toBe(true);
  expect(fn.greaterOrEqual('a', 'aa')).toBe(false);
  expect(fn.greaterOrEqual('aa', 'a')).toBe(true);
  expect(fn.greaterOrEqual('a', 'a')).toBe(true);
});
