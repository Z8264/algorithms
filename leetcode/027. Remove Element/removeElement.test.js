const removeElement = require('./removeElement.js');

test('removeElement', () => {
  const arr = [3, 2, 2, 3];
  const res = removeElement(arr, 3);
  expect(res).toBe(2);
  expect(arr.slice(0, res)).toEqual([2, 2]);
});
