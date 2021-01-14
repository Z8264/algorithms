/**
 * 数字转化
 * @param {*} x
 */
const isPalindrome = (x) => {
  if (x < 0) return false;
  let [n, m] = [0, x];
  while (m !== 0) {
    n = (n * 10) + (m % 10);
    m = Math.floor(m / 10);
  }
  return x === n;
};

/**
 * 字符串反转
 */
const isPalindrome2 = (x) => {
  if (x < 0) return false;
  return x.toString().split('').reverse().join('') === x.toString();
};

/**
 * 字符串查找
 */
const isPalindrome3 = (x) => {
  if (x < 0) return false;
  const str = x.toString();
  const l = str.length;
  for (let i = 0; i < parseInt(l / 2, 10); i += 1) {
    if (str[i] !== str[l - i - 1]) return false;
  }
  return true;
};


module.exports = { isPalindrome, isPalindrome2, isPalindrome3 };
