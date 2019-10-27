const { isPalindrome, isPalindrome2, isPalindrome3 } = require('./isPalindrome');

test('isPalindrome 121', () => {
  const res = isPalindrome(121);
  expect(res).toEqual(true);
});

test('isPalindrome -121', () => {
  const res = isPalindrome(-121);
  expect(res).toEqual(false);
});

test('isPalindrome 10', () => {
  const res = isPalindrome(10);
  expect(res).toEqual(false);
});

test('isPalindrome2 121', () => {
  const res = isPalindrome2(121);
  expect(res).toEqual(true);
});

test('isPalindrome2 -121', () => {
  const res = isPalindrome2(-121);
  expect(res).toEqual(false);
});

test('isPalindrome2 10', () => {
  const res = isPalindrome2(10);
  expect(res).toEqual(false);
});

test('isPalindrome3 121', () => {
  const res = isPalindrome3(121);
  expect(res).toEqual(true);
});

test('isPalindrome3 -121', () => {
  const res = isPalindrome3(-121);
  expect(res).toEqual(false);
});

test('isPalindrome3 10', () => {
  const res = isPalindrome3(10);
  expect(res).toEqual(false);
});
