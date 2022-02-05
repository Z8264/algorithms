import { createFromArray } from '../utils';
import palindrome from './palindrome';

/**
 * Input: head = 1->2
 * Output: false
 */
test('palindrome false', () => {
  const list = createFromArray([1, 2]);
  expect(palindrome(list)).toBe(false);
});

/**
 * Input: head = 1->2->2->1
 * Output: true
 */
test('palindrome true', () => {
  const list = createFromArray([1, 2, 2, 1]);
  expect(palindrome(list)).toBe(true);
});
