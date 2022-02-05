import { toString, createFromArray } from '../utils';
import intersection from './intersection';

/**
 * Input: head = 1->2->3->[4->5], head = 7->8->[4->5],
 * Output: head = 4->5
 */
test('intersection', () => {
  const res = createFromArray([4, 5]);
  const list1 = createFromArray([1, 2, 3]);
  list1.next.next.next = res;
  const list2 = createFromArray([7, 8]);
  list2.next.next = res;

  const newList = intersection(list1, list2);
  expect(toString(newList)).toBe('4,5');
});
