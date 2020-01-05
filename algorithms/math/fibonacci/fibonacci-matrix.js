const mul = (x, y) => [
  [
    x[0][0] * y[0][0] + x[0][1] * y[1][0],
    x[0][0] * y[0][1] + x[0][1] * y[1][1],
  ],
  [x[1][0] * y[0][0] + x[1][1] * y[1][0], x[1][0] * y[0][1] + x[1][1] * y[1][1]],
];

const pow = (x, n) => {
  let r = [[1, 0], [0, 1]];
  let v = x;
  while (n) {
    if (n % 2 === 1) {
      r = mul(r, v);
      n -= 1;
    }
    v = mul(v, v);
    n /= 2;
  }
  return r;
};

const fibonacci = (n) => (n <= 0
  ? 0
  : mul(
    [[0, 1], [1, 0]],
    pow([[0, 1], [1, 1]], n - 1),
  )[0][1]);


module.exports = fibonacci;
