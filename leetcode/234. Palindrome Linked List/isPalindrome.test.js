const { from } = require('../_utils/ListNode');
const isPalindrome = require('./isPalindrome');

test('isPalindrome', () => {
  expect(isPalindrome(from([1, 2, 1]))).toBe(true);
  expect(isPalindrome(from([1, 2, 3, 4, 5]))).toBe(false);
});
