
function primality(n) {
  if (n % 1 !== 0 || n <= 1) return false;

  if (n <= 3) return true;

  if (n % 2 === 0) return false;

  const max = Math.sqrt(n);

  for (let i = 3; i <= max; i += 2) if (n % i === 0) return false;

  return true;
}

module.exports = primality;
