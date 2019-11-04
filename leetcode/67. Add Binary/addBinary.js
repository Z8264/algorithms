/* eslint-disable no-undef */
const addBinary = (a, b) => (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);

const addBinary2 = (a, b) => {
  let [aIndex, bIndex, flag] = [a.length - 1, b.length - 1, 0];
  const c = [];
  while (aIndex >= 0 || bIndex >= 0) {
    const sum = parseInt(aIndex >= 0 ? a[aIndex] : 0, 10)
        + parseInt(bIndex >= 0 ? b[bIndex] : 0, 10)
        + flag;
    switch (sum) {
      case 3: c.unshift(1); flag = 1; break;
      case 2: c.unshift(0); flag = 1; break;
      default:
        c.unshift(sum);
        flag = 0;
    }
    aIndex -= 1;
    bIndex -= 1;
  }
  if (flag) c.unshift(1);
  return c.join('');
};
module.exports = { addBinary, addBinary2 };
