const plusOne = require('./plusOne');

test('[1,2,3]', () => {
  const res = plusOne([1, 2, 3]);
  expect(res).toEqual([1, 2, 4]);
});

test('[4,3,2,1]', () => {
  const res = plusOne([4, 3, 2, 1]);
  expect(res).toEqual([4, 3, 2, 2]);
});


test('[5,2,2,6,5,7,1,9,0,3,8,6,8,6,5,2,1,8,7,9,8,3,8,4,7,2,5,8,9]', () => {
  const res = plusOne([
    5, 2, 2, 6, 5, 7, 1, 9, 0, 3, 8, 6, 8, 6, 5, 2, 1, 8, 7, 9, 8, 3, 8, 4, 7, 2, 5, 8, 9,
  ]);
  expect(res).toEqual([
    5, 2, 2, 6, 5, 7, 1, 9, 0, 3, 8, 6, 8, 6, 5, 2, 1, 8, 7, 9, 8, 3, 8, 4, 7, 2, 5, 9, 0,
  ]);
});
