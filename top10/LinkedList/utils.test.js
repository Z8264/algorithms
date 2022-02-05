import { toString, createFromArray } from './utils';

test('toString', () => {
  const list = createFromArray([1, 2, 3, 4, 5]);
  expect(toString(list)).toBe('1,2,3,4,5');
});
