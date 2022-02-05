import { toString, createFromArray } from '../utils';
import sort from './sort';

/**
 * Input: head = 4->2->1->3
 * Output: head = 1->2->3->4
 */
test('sort', () => {
  const list = createFromArray([4, 2, 1, 3]);
  const newList = sort(list);
  expect(toString(newList)).toBe('1,2,3,4');
});

/**
 * Input: head = null
 * Output: head = null
 */
test('sort null', () => {
  const list = null;
  const newList = sort(list);
  expect(toString(newList)).toBe('');
});
