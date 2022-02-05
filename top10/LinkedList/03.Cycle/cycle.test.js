import { createFromArray } from '../utils';
import cycle from './cycle';

/**
 * Tail connects to the second node.
 * Input: head = 1->2->3->4  4->2
 * Output: head = 2
 */
test('cycle', () => {
  const list = createFromArray([1, 2, 3, 4]);
  list.next.next.next.next = list.next;
  expect(cycle(list).val).toBe(2);
});

/**
 * no cycle
 * Input: head = 1->2
 * Output: null
 */
test('no cycle', () => {
  const list = createFromArray([1, 2]);
  expect(cycle(list)).toBe(null);
});
