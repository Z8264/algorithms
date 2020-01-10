
const mod = (max, min) => (min === 0 ? max : mod(min, max % min));

const gcd = (a, b) => {
  const max = Math.max(Math.abs(a), Math.abs(b));
  const min = Math.min(Math.abs(a), Math.abs(b));

  return mod(max, min);
};

module.exports = gcd;
