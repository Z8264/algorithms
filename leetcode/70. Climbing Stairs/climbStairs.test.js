const climbStairs = require('./climbStairs');

test('2', () => {
  const res = climbStairs(2);
  expect(res).toBe(2);
});

test('3', () => {
  const res = climbStairs(3);
  expect(res).toBe(3);
});
