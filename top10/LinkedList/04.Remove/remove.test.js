import { toString, createFromArray } from '../utils';
import remove from './remove';

/**
 * Input: head = 1->2->3->4->5, n = 2
 * Output: head = 1->2->3->5
 */
test('remove nth from end', () => {
  const list = createFromArray([1, 2, 3, 4, 5]);
  const newList = remove(list, 2);
  expect(toString(newList)).toBe('1,2,3,5');
});

/**
 * Input: head = 1->2->3->4-5, n = 10
 * Output: head = 1->2->3->4-5
 */
test('remove nth from end', () => {
  const list = createFromArray([1, 2, 3, 4, 5]);
  const newList = remove(list, 10);
  expect(toString(newList)).toBe('1,2,3,4,5');
});
