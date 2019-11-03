const maxSubArray = require('./maxSubArray');

test('[-2,1,-3,4,-1,2,1,-5,4]', () => {
  const res = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  expect(res).toBe(6);
});
