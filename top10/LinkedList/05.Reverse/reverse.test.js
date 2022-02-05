import { toString, createFromArray } from '../utils';
import reverse from './reverse';

/**
 * Input: head = 1->2->3->4->5, m = 2, n = 4
 * Output: head = 1->4->3->2->5
 */
test('reverse', () => {
  const list = createFromArray([1, 2, 3, 4, 5]);
  const newList = reverse(list, 2, 4);
  expect(toString(newList)).toBe('1,4,3,2,5');
});

/**
 * Input: head = null
 * Output: head = null
 */
test('reverse null', () => {
  const list = null;
  const newList = reverse(list);
  expect(toString(newList)).toBe('');
});
