import { toString, createFromArray } from '../utils';
import middle from './middle';

/**
 * Input: head = 1->2->3->4->5
 * Output: head = 3->4->5
 */
test('middle', () => {
  const list = createFromArray([1, 2, 3, 4, 5]);
  const newList = middle(list);
  expect(toString(newList)).toBe('3,4,5');
});

/**
 * Input: head = 1->2->3->4
 * Output: head = 3->4->5
 */
test('middle', () => {
  const list = createFromArray([1, 2, 3, 4]);
  const newList = middle(list);
  expect(toString(newList)).toBe('3,4');
});
