const twoSum = require('./twoSum');


test('[2, 7, 11, 15], 9', () => {
  const res = twoSum([2, 7, 11, 15], 9);
  expect(res).toEqual([0, 1]);
});
