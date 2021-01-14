const romanToInt = (s) => {
  const hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i += 1) {
    const flag = s[i + 1] ? hash[s[i + 1]] > hash[s[i]] : false;
    sum += (flag ? (-hash[s[i]]) : hash[s[i]]);
  }
  return sum;
};
module.exports = romanToInt;
