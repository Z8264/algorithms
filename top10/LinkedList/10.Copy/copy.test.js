import { toString } from '../utils';
import copy from './copy';

class ListNode {
  constructor(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

/**
 * Input: head = [1,1]->[2,null]->[3,2]
 * Output: (clone)
 */
test('copy', () => {
  const list = new ListNode(1);
  list.random = list;
  list.next = new ListNode(2);
  list.next.random = null;
  list.next.next = new ListNode(3);
  list.next.next.random = list.next;

  const newList = copy(list);
  expect(toString(newList)).toBe('1,2,3');
});
