import { toString, createFromArray } from '../utils';
import partition from './partition';

/**
 * Input: head = 1->4->3->2->5->2, x = 3
 * Output: head = 1->2->2->4->3->5
 */
test('palindrome false', () => {
  const list = createFromArray([1, 4, 3, 2, 5, 2]);
  const newList = partition(list, 3);
  expect(toString(newList)).toBe('1,2,2,4,3,5');
});
