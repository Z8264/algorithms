const maxArea = require('./maxArea');

test('[1,8,6,2,5,4,8,3,7]', () => {
  const res = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
  expect(res).toBe(49);
});
