import { toString, createFromArray } from '../utils';
import swap from './swap';

/**
 * Input: head = 1->2->3->4
 * Output: head = 2->1->4->3
 */
test('middle', () => {
  const list = createFromArray([1, 2, 3, 4]);
  const newList = swap(list);
  expect(toString(newList)).toBe('2,1,4,3');
});

/**
 * Input: head = 1->2->3
 * Output: head = 2->1->3
 */
test('middle', () => {
  const list = createFromArray([1, 2, 3]);
  const newList = swap(list);
  expect(toString(newList)).toBe('2,1,3');
});
