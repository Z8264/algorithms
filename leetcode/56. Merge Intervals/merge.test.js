const merge = require('./merge');


test('[[1,3],[2,6],[8,10],[15,18]]', () => {
  const res = merge([[1, 3], [2, 6], [8, 10], [15, 18]]);
  expect(res).toEqual([[1, 6], [8, 10], [15, 18]]);
});

test('[[1,4],[4,5]]', () => {
  const res = merge([[1, 4], [4, 5]]);
  expect(res).toEqual([[1, 5]]);
});

test('[]', () => {
  const res = merge([]);
  expect(res).toEqual([]);
});

test('[[1,4],[0,4]]', () => {
  const res = merge([[1, 4], [0, 4]]);
  expect(res).toEqual([[0, 4]]);
});
