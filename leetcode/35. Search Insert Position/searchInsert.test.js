const searchInsert = require('./searchInsert.js');

test('[1,3], 1', () => {
  const res = searchInsert([1, 3], 1);
  expect(res).toBe(0);
});

test('[1,3,5,6], 5', () => {
  const res = searchInsert([1, 3, 5, 6], 5);
  expect(res).toBe(2);
});

test('[1,3,5,6], 2', () => {
  const res = searchInsert([1, 3, 5, 6], 2);
  expect(res).toBe(1);
});

test('[1,3,5,6], 7', () => {
  const res = searchInsert([1, 3, 5, 6], 7);
  expect(res).toBe(4);
});

test('[1,3,5,6], 0', () => {
  const res = searchInsert([1, 3, 5, 6], 0);
  expect(res).toBe(0);
});
