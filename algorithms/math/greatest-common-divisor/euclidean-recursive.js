
const mod = (max, min) => (min === 0 ? max : mod(min, max % min));

const euclidean = (a, b) => {
  const max = Math.max(Math.abs(a), Math.abs(b));
  const min = Math.min(Math.abs(a), Math.abs(b));

  return mod(max, min);
};

module.exports = euclidean;
