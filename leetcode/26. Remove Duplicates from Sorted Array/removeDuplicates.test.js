const removeDuplicates = require('./removeDuplicates.js');

test('[1,1,2]', () => {
  const arr = [1, 1, 2];
  const res = removeDuplicates(arr);
  expect(res).toBe(2);
  expect(arr.slice(0, res)).toEqual([1, 2]);
});
