const permute = require('./permute');


test('permute', () => {
  expect(permute([1])).toEqual([
    [1],
  ]);
  expect(permute([1, 2, 3])).toEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ]);
});
