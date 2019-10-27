const threeSum = require('./threeSum.js');

test('[-1, 0, 1, 2, -1, -4]', () => {
  const res = threeSum([-1, 0, 1, 2, -1, -4]);
  expect(res).toEqual([[-1, -1, 2], [-1, 0, 1]]);
});
