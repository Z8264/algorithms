const merge = require('./merge');


test('merge', () => {
  expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([[1, 6], [8, 10], [15, 18]]);
  expect(merge([[1, 4], [4, 5]])).toEqual([[1, 5]]);
  expect(merge([])).toEqual([]);
  expect(merge([[1, 4], [0, 4]])).toEqual([[0, 4]]);
});
