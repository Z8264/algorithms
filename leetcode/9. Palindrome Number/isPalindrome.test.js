const { isPalindrome, isPalindrome2, isPalindrome3 } = require('./isPalindrome');

test('isPalindrome', () => {
  expect(isPalindrome(121)).toEqual(true);
  expect(isPalindrome(-121)).toEqual(false);
  expect(isPalindrome(10)).toEqual(false);

  expect(isPalindrome2(121)).toEqual(true);
  expect(isPalindrome2(-121)).toEqual(false);
  expect(isPalindrome2(10)).toEqual(false);

  expect(isPalindrome3(121)).toEqual(true);
  expect(isPalindrome3(-121)).toEqual(false);
  expect(isPalindrome3(10)).toEqual(false);
});
