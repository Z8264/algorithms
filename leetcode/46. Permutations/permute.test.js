const permute = require('./permute');


test('[1]', () => {
  const res = permute([1]);
  expect(res).toEqual([
    [1],
  ]);
});


test('[1,2,3]', () => {
  const res = permute([1, 2, 3]);
  expect(res).toEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ]);
});
